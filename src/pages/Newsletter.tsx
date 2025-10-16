import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, BarChart3, Brain } from "lucide-react";

const Newsletter = () => {
  const newsletters = [
    {
      title: "Q4 2024 Market Analysis",
      date: "December 2024",
      excerpt: "Comprehensive analysis of quantitative trends and market dynamics heading into year-end.",
      topics: ["Machine Learning", "Risk Management", "Portfolio Theory"],
    },
    {
      title: "Factor Investing Deep Dive",
      date: "November 2024",
      excerpt: "Exploring multi-factor models and their application in systematic trading strategies.",
      topics: ["Factor Models", "Alpha Generation", "Backtesting"],
    },
    {
      title: "Volatility Modeling Insights",
      date: "October 2024",
      excerpt: "Advanced techniques for volatility forecasting and its implications for options pricing.",
      topics: ["Volatility", "Options", "Statistical Models"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Quant Research Newsletter
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with our latest quantitative research, market insights, and cutting-edge analysis from the Kings Quant Society team.
              </p>
            </div>

            <div className="space-y-6">
              {newsletters.map((newsletter, index) => (
                <Card 
                  key={index} 
                  className="animate-fade-in hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{newsletter.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-base">
                          <Calendar className="w-4 h-4" />
                          {newsletter.date}
                        </CardDescription>
                      </div>
                      <Brain className="w-8 h-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{newsletter.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {newsletter.topics.map((topic, idx) => (
                        <Badge key={idx} variant="secondary">{topic}</Badge>
                      ))}
                    </div>
                    <Button variant="default">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Subscribe to Our Newsletter
                </CardTitle>
                <CardDescription>
                  Get the latest quantitative research delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                  />
                  <Button>Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Newsletter;
