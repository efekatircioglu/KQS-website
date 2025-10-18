import Navigation from "@/components/Navigation";
import PortfolioTracker from "@/components/PortfolioTracker";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  BarChart3,
  Target,
  Shield,
  Zap,
  Users,
  Calendar,
  Award,
  ArrowUpRight,
  Download,
  Eye
} from "lucide-react";

const Portfolio = () => {
  // Helper functions for badge styling
  const getBadgeVariant = (action: string) => {
    if (action === "BUY") return "default";
    if (action === "SELL") return "destructive";
    return "secondary";
  };

  const getBadgeClassName = (action: string) => {
    if (action === "BUY") return "bg-green-100 text-green-800";
    if (action === "SELL") return "bg-red-100 text-red-800";
    return "";
  };

  // Portfolio performance metrics
  const performanceMetrics = [
    {
      title: "Total Return",
      value: "+24.5%",
      change: "+2.1%",
      icon: TrendingUp,
      trend: "up",
      description: "Since inception"
    },
    {
      title: "Sharpe Ratio",
      value: "1.85",
      change: "Above Target",
      icon: BarChart3,
      trend: "up",
      description: "Risk-adjusted returns"
    },
    {
      title: "Max Drawdown",
      value: "-8.2%",
      change: "Controlled",
      icon: Shield,
      trend: "up",
      description: "Maximum loss period"
    },
    {
      title: "Win Rate",
      value: "68%",
      change: "+5%",
      icon: Target,
      trend: "up",
      description: "Successful trades"
    },
  ];

  // Strategy performance
  const strategies = [
    {
      name: "Momentum Strategy",
      description: "High-frequency momentum trading on major indices",
      performance: "+18.2%",
      risk: "Medium",
      trades: 156,
      winRate: "72%",
      status: "active"
    },
    {
      name: "Mean Reversion",
      description: "Statistical arbitrage on oversold/overbought conditions",
      performance: "+12.8%",
      risk: "Low",
      trades: 89,
      winRate: "65%",
      status: "active"
    },
    {
      name: "Pairs Trading",
      description: "Long-short equity pairs with cointegration",
      performance: "+8.9%",
      risk: "Low",
      trades: 45,
      winRate: "78%",
      status: "active"
    },
    {
      name: "Volatility Trading",
      description: "Options strategies on volatility expansion",
      performance: "+15.3%",
      risk: "High",
      trades: 23,
      winRate: "61%",
      status: "paused"
    }
  ];

  // Recent trades
  const recentTrades = [
    { symbol: "SPY", action: "BUY", quantity: 50, price: 458.3, time: "10:45 AM", pnl: "+$240" },
    { symbol: "QQQ", action: "SELL", quantity: 30, price: 375.8, time: "09:30 AM", pnl: "+$159" },
    { symbol: "AAPL", action: "BUY", quantity: 25, price: 182.4, time: "Yesterday", pnl: "+$177" },
    { symbol: "MSFT", action: "HOLD", quantity: 20, price: 355.6, time: "Yesterday", pnl: "+$308" },
  ];

  // Risk metrics
  const riskMetrics = [
    { metric: "VaR (95%)", value: "2.1%", status: "good" },
    { metric: "Beta", value: "0.85", status: "good" },
    { metric: "Volatility", value: "12.3%", status: "moderate" },
    { metric: "Correlation", value: "0.72", status: "moderate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Portfolio Dashboard
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive view of our quantitative trading strategies, performance metrics, and risk management
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Eye className="mr-2 h-4 w-4" />
                  View Live Data
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Performance Overview
              </h2>
              <p className="text-lg text-muted-foreground">
                Key metrics and risk indicators for our trading strategies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {performanceMetrics.map((metric, index) => (
              <Card 
                key={metric.title}
                  className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * .1}s` }}
                >
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                    <p className={`text-xs flex items-center gap-1 mb-2 ${
                      metric.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {metric.change}
                    </p>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Performance */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trading Strategies
              </h2>
              <p className="text-lg text-muted-foreground">
                Detailed performance breakdown of our quantitative strategies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategies.map((strategy, index) => (
                <Card 
                  key={strategy.name}
                  className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * .1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{strategy.name}</CardTitle>
                      <Badge 
                        variant={strategy.status === "active" ? "default" : "secondary"}
                        className={strategy.status === "active" ? "bg-green-100 text-green-800" : ""}
                      >
                        {strategy.status}
                      </Badge>
                    </div>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Performance</p>
                        <p className="text-lg font-semibold text-green-600">{strategy.performance}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Risk Level</p>
                        <p className="text-lg font-semibold text-foreground">{strategy.risk}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Trades</p>
                        <p className="text-lg font-semibold text-foreground">{strategy.trades}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Win Rate</p>
                        <p className="text-lg font-semibold text-green-600">{strategy.winRate}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Analytics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="border-border animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Portfolio Analytics</CardTitle>
                <CardDescription>
                  Comprehensive analysis of trades, risk metrics, and performance attribution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="trades" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="trades">Recent Trades</TabsTrigger>
                    <TabsTrigger value="risk">Risk Metrics</TabsTrigger>
                    <TabsTrigger value="attribution">Performance Attribution</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="trades" className="space-y-4">
                    <div className="rounded-lg border border-border overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-secondary">
                          <tr>
                            <th className="text-left p-4 font-semibold text-foreground">Symbol</th>
                            <th className="text-center p-4 font-semibold text-foreground">Action</th>
                            <th className="text-right p-4 font-semibold text-foreground">Quantity</th>
                            <th className="text-right p-4 font-semibold text-foreground">Price</th>
                            <th className="text-center p-4 font-semibold text-foreground">Time</th>
                            <th className="text-right p-4 font-semibold text-foreground">P&L</th>
                          </tr>
                        </thead>
                        <tbody>
              {recentTrades.map((trade, index) => (
                <tr 
                  key={`${trade.symbol}-${trade.time}-${index}`}
                              className="border-t border-border hover:bg-secondary/50 transition-colors"
                            >
                              <td className="p-4 font-semibold text-foreground">{trade.symbol}</td>
                              <td className="p-4 text-center">
                                <Badge 
                                  variant={getBadgeVariant(trade.action)}
                                  className={getBadgeClassName(trade.action)}
                                >
                                  {trade.action}
                                </Badge>
                              </td>
                              <td className="p-4 text-right text-muted-foreground">{trade.quantity}</td>
                              <td className="p-4 text-right text-muted-foreground">${trade.price}</td>
                              <td className="p-4 text-center text-muted-foreground">{trade.time}</td>
                              <td className="p-4 text-right font-semibold text-green-600">{trade.pnl}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="risk" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {riskMetrics.map((metric, index) => (
                        <Card key={metric.metric} className="border-border">
                          <CardContent className="pt-6">
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground mb-2">{metric.metric}</p>
                              <p className="text-2xl font-bold text-foreground mb-2">{metric.value}</p>
                              <Badge 
                                variant={metric.status === "good" ? "default" : "secondary"}
                                className={metric.status === "good" ? "bg-green-100 text-green-800" : ""}
                              >
                                {metric.status}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="attribution" className="space-y-4">
                    <Card className="bg-secondary/50">
                      <CardContent className="pt-6">
                        <div className="text-center py-12">
                          <PieChart className="h-16 w-16 text-primary mx-auto mb-4" />
                          <h3 className="text-xl font-semibold text-foreground mb-2">Performance Attribution</h3>
                          <p className="text-muted-foreground">
                            Detailed performance attribution analysis showing contribution from each strategy, 
                            sector allocation, and factor exposures will be available with live data integration.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Tracker Component */}
      <PortfolioTracker />

      {/* Team Performance */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Team Performance
              </h2>
              <p className="text-lg text-muted-foreground">
                Individual contributor metrics and collaborative achievements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Active Traders</h3>
                    <p className="text-3xl font-bold text-primary mb-2">12</p>
                    <p className="text-sm text-muted-foreground">Quantitative analysts and traders</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: ".1s" }}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Trading Days</h3>
                    <p className="text-3xl font-bold text-primary mb-2">247</p>
                    <p className="text-sm text-muted-foreground">Days of active trading this year</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Success Rate</h3>
                    <p className="text-3xl font-bold text-primary mb-2">68%</p>
                    <p className="text-sm text-muted-foreground">Profitable trading strategies</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="border-primary/20 bg-primary/5 animate-fade-in">
              <CardContent className="pt-12 pb-12">
                <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Join Our Trading Team?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Be part of our quantitative trading community and contribute to our portfolio performance
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
