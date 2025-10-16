import { TrendingUp, Brain, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Systematic Trading",
      description: "Developing and implementing quantitative trading strategies using statistical analysis and machine learning.",
    },
    {
      icon: Brain,
      title: "Algorithmic Research",
      description: "Conducting cutting-edge research in quantitative finance, portfolio optimization, and risk management.",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Building a community of talented students passionate about quantitative finance and algorithmic trading.",
    },
    {
      icon: Award,
      title: "Industry Connections",
      description: "Partnering with leading quantitative firms to provide real-world experience and career opportunities.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Kings Quant Society, we foster a culture of systematic thinking and quantitative excellence. 
            We are dedicated to developing the technical skills and analytical mindset required to excel in 
            quantitative finance, empowering our members to become the next generation of quant analysts and traders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
