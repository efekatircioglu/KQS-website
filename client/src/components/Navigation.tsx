import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/kqs-logo.png";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const { scrollToSection, scrollToTop } = useSmoothScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsHomeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Home dropdown items (sections on the same page)
  const homeDropdownItems = [
    { name: "Home", path: "/", sectionId: "home", isHome: true },
    { name: "About", path: "#about", sectionId: "about", isHome: false },
    { name: "Contact", path: "#contact", sectionId: "contact", isHome: false },
  ];

  // Separate page navigation items
  const pageNavItems = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Newsletter", path: "/newsletter" },
    { name: "Join Us", path: "/join-us" },
  ];

  const handleHomeDropdownClick = (item: typeof homeDropdownItems[0]) => {
    setIsOpen(false);
    setIsHomeDropdownOpen(false);
    
    // Handle Home navigation intelligently
    if (item.isHome) {
      if (location.pathname === "/") {
        // Already on home page, scroll to top
        scrollToTop();
      } else {
        // On different page, navigate to home
        navigate("/");
      }
      return;
    }
    
    // Handle other hash links (About, Contact)
    if (item.sectionId) {
      if (location.pathname === "/") {
        // On home page, smooth scroll to section
        scrollToSection(item.sectionId);
      } else {
        // On different page, navigate to home and then scroll
        navigate("/");
        // Small delay to ensure navigation completes before scrolling
        setTimeout(() => {
          scrollToSection(item.sectionId);
        }, 100);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="KQS Logo" className="h-12 w-12" />
            <span className="text-xl font-bold text-foreground">King's Quant Society</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                className="flex items-center gap-1 text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                Home
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isHomeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                  {homeDropdownItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleHomeDropdownClick(item)}
                      className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Separate Page Navigation */}
            {pageNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            {/* Home Dropdown Items */}
            {homeDropdownItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleHomeDropdownClick(item)}
                className="block w-full text-left py-3 text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            
            {/* Separate Page Navigation */}
            {pageNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
