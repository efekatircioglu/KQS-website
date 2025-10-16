import { useState } from "react";
import { TrendingUp, TrendingDown, DollarSign, Activity, PieChart, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PortfolioTracker = () => {
  // Placeholder data - will be replaced with IBKR API integration
  const portfolioStats = [
    {
      title: "Total Portfolio Value",
      value: "$45,280.50",
      change: "+5.2%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Daily P&L",
      value: "$1,240.30",
      change: "+2.8%",
      icon: Activity,
      trend: "up",
    },
    {
      title: "Weekly Performance",
      value: "$3,890.75",
      change: "+9.4%",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Sharpe Ratio",
      value: "1.85",
      change: "Above Target",
      icon: BarChart3,
      trend: "up",
    },
  ];

  const positions = [
    { symbol: "SPY", shares: 50, avgPrice: 450.20, currentPrice: 458.30, pl: "+1.8%" },
    { symbol: "QQQ", shares: 30, avgPrice: 380.50, currentPrice: 375.80, pl: "-1.2%" },
    { symbol: "AAPL", shares: 25, avgPrice: 175.30, currentPrice: 182.40, pl: "+4.1%" },
    { symbol: "MSFT", shares: 20, avgPrice: 340.20, currentPrice: 355.60, pl: "+4.5%" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Portfolio Tracker
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time performance monitoring connected to our IBKR account
            </p>
          </div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {portfolioStats.map((stat, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className={`text-xs flex items-center gap-1 mt-1 ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portfolio Details */}
          <Card className="border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Current Positions</CardTitle>
              <CardDescription>
                Active holdings and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="holdings" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="holdings">Holdings</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                
                <TabsContent value="holdings" className="space-y-4">
                  <div className="rounded-lg border border-border overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-secondary">
                        <tr>
                          <th className="text-left p-4 font-semibold text-foreground">Symbol</th>
                          <th className="text-right p-4 font-semibold text-foreground">Shares</th>
                          <th className="text-right p-4 font-semibold text-foreground">Avg Price</th>
                          <th className="text-right p-4 font-semibold text-foreground">Current</th>
                          <th className="text-right p-4 font-semibold text-foreground">P&L</th>
                        </tr>
                      </thead>
                      <tbody>
                        {positions.map((position, index) => (
                          <tr 
                            key={index}
                            className="border-t border-border hover:bg-secondary/50 transition-colors"
                          >
                            <td className="p-4 font-semibold text-foreground">{position.symbol}</td>
                            <td className="p-4 text-right text-muted-foreground">{position.shares}</td>
                            <td className="p-4 text-right text-muted-foreground">${position.avgPrice}</td>
                            <td className="p-4 text-right text-muted-foreground">${position.currentPrice}</td>
                            <td className={`p-4 text-right font-semibold ${
                              position.pl.startsWith("+") ? "text-green-600" : "text-red-600"
                            }`}>
                              {position.pl}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="analytics" className="space-y-4">
                  <Card className="bg-secondary/50">
                    <CardContent className="pt-6">
                      <div className="text-center py-12">
                        <PieChart className="h-16 w-16 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          Analytics dashboard coming soon with sector allocation, 
                          risk metrics, and performance attribution analysis.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Note:</strong> Portfolio data displayed above uses placeholder values. 
              IBKR API integration requires backend functionality. Connect to Lovable Cloud to enable live data synchronization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTracker;
