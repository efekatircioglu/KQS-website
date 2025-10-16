import { Mail, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get Involved
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us in building the future of quantitative finance at King's College London
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "Get in touch with our team",
                action: "contact@kingsquant.com",
                type: "email",
                href: "mailto:contact@kingsquant.com?subject=Inquiry from KQS Website&body=Hello KQS Team,%0D%0A%0D%0AI would like to get in touch regarding...",
              },
              {
                icon: Users,
                title: "Join Us",
                description: "Become a member",
                action: "Apply Now",
                type: "button",
                href: "https://www.kclsu.org/groups/activities/join/group/kings_quant_society/",
              },
              {
                icon: Calendar,
                title: "Events",
                description: "Attend our workshops",
                action: "View Schedule",
                type: "button",
                href: "https://www.instagram.com/kingsquantsociety/",
              },
            ].map((item, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  {item.type === "email" ? (
                    <a
                      href={item.href}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground h-10 px-4 py-2 transition-all duration-300"
                    >
                      {item.action}
                    </a>
                  ) : (
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.action}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Corporate Partnerships
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in partnering with KQS? We collaborate with leading quantitative firms 
                to provide our members with industry insights, mentorship, and career opportunities.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Become a Partner
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
