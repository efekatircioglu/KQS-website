import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, TrendingUp, Shield, Zap, BarChart3, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Portfolio Optimization & Risk Platform",
      icon: <PieChart className="w-12 h-12 text-primary" />,
      description: "Advanced portfolio construction and risk management tools powered by cutting-edge quantitative models.",
      features: [
        "Multi-factor portfolio optimization",
        "Real-time risk analytics and VaR calculations",
        "Scenario analysis and stress testing",
        "Custom constraint implementation",
        "Integration with major brokers and data providers",
      ],
    },
    {
      title: "Systematic Trading Models",
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      description: "Proprietary quantitative models designed to identify and capitalize on market inefficiencies.",
      features: [
        "Machine learning-based signal generation",
        "Statistical arbitrage strategies",
        "Market microstructure analysis",
        "High-frequency trading algorithms",
        "Backtesting and performance attribution",
      ],
    },
    {
      title: "Quantitative Research Services",
      icon: <Brain className="w-12 h-12 text-primary" />,
      description: "Custom quantitative research and model development tailored to your specific needs.",
      features: [
        "Factor modeling and analysis",
        "Derivatives pricing and hedging",
        "Time series forecasting",
        "Alternative data integration",
        "Model validation and optimization",
      ],
    },
    {
      title: "Risk Analytics",
      icon: <Shield className="w-12 h-12 text-primary" />,
      description: "Comprehensive risk measurement and monitoring solutions for sophisticated investors.",
      features: [
        "Market, credit, and operational risk metrics",
        "Tail risk assessment",
        "Correlation and covariance analysis",
        "Liquidity risk modeling",
        "Regulatory compliance reporting",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leveraging advanced quantitative methods and technology to deliver sophisticated financial solutions for institutional and individual investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="default" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-16 max-w-4xl mx-auto bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ready to Get Started?</CardTitle>
              <CardDescription className="text-center text-base">
                Contact us to discuss how our quantitative solutions can help achieve your investment goals
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button size="lg" variant="default">
                Schedule a Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
