import { Link } from "react-router-dom";
import logo from "@/assets/kqs-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="KQS Logo" className="h-10 w-10" />
              <span className="text-lg font-bold text-foreground">King's Quant Society</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              King's College London's premier quantitative trading society, 
              developing the next generation of quant analysts.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:kqs@kcl.ac.uk"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  kqs@kcl.ac.uk
                </a>
              </li>
              <li className="text-muted-foreground text-sm">
                King's College London<br />
                Strand, London WC2R 2LS
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} King's Quant Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
