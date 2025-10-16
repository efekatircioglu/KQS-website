import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioTracker from "@/components/PortfolioTracker";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <PortfolioTracker />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
