import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ApplyNow from "@/components/ApplyNow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Users } from "lucide-react";

const Recruitment = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    setIsApplyModalOpen(true);
  };

  const roles = [
    {
      title: "Quantitative Researcher",
      type: "Full-time",
      location: "London, UK",
      department: "Research",
      description: "Join our research team to develop cutting-edge quantitative models and trading strategies.",
      requirements: [
        "Strong background in mathematics, statistics, or computer science",
        "Experience with Python, R, or similar programming languages",
        "Knowledge of financial markets and derivatives",
        "Strong analytical and problem-solving skills",
      ],
    },
    {
      title: "Algorithmic Trader",
      type: "Full-time",
      location: "London, UK",
      department: "Trading",
      description: "Execute and optimize systematic trading strategies across multiple asset classes.",
      requirements: [
        "Understanding of algorithmic trading and execution",
        "Experience with order management systems",
        "Knowledge of market microstructure",
        "Ability to work in fast-paced environments",
      ],
    },
    {
      title: "Data Scientist",
      type: "Part-time",
      location: "Hybrid",
      department: "Analytics",
      description: "Analyze large datasets to uncover trading signals and improve model performance.",
      requirements: [
        "Strong ML/AI background",
        "Experience with big data technologies",
        "Proficiency in Python and SQL",
        "Previous experience in finance (preferred)",
      ],
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
                Join Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be part of a community of talented quantitative researchers, traders, and data scientists pushing the boundaries of quantitative finance.
              </p>
            </div>

            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Why Join KQS?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Work with cutting-edge quantitative models and technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Collaborate with talented peers from King's College London</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Access to industry mentorship and networking opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Flexible working arrangements and continuous learning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {roles.map((role, index) => (
                <Card 
                  key={role.title} 
                  className="animate-fade-in hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{role.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {role.type}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {role.location}
                          </Badge>
                          <Badge variant="outline">{role.department}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{role.description}</p>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                      {role.requirements.map((req, idx) => (
                        <li key={`${role.title}-req-${idx}`} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="default" 
                      onClick={() => handleApplyClick(role.title)}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Apply Now Modal */}
      <ApplyNow
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        jobTitle={selectedJobTitle}
      />
    </div>
  );
};

export default Recruitment;
