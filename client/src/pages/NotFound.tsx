import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* 404 Content */}
      <div className="flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated 404 */}
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <AlertTriangle className="h-16 w-16 text-primary animate-pulse" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="bg-secondary/50 border border-border rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground">
                <strong>Requested URL:</strong> <code className="bg-background px-2 py-1 rounded text-primary">{location.pathname}</code>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => globalThis.history.back()}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-sm text-muted-foreground mb-4">Or try one of these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                to="/portfolio" 
                className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
              >
                Portfolio
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/services" 
                className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
              >
                Services
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/newsletter" 
                className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
              >
                Newsletter
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/join-us" 
                className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
              >
                Join Us
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
