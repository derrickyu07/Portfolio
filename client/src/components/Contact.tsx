import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download, Phone } from "lucide-react";

export default function Contact() {
  const contactInfo = {
    email: "derrickyu07@gmail.com",
    phone: "678-448-6648",
    linkedin: "linkedin.com/in/derrickyu07",
    github: "github.com/derrickyu07"
  };

  const handleContactAction = (action: string) => {
    // TODO: Replace with actual contact functionality
    console.log(`${action} action triggered`);
    
    switch (action) {
      case "email":
        window.open(`mailto:${contactInfo.email}`, '_blank');
        break;
      case "phone":
        window.open(`tel:${contactInfo.phone}`, '_blank');
        break;
      case "linkedin":
        window.open(`https://${contactInfo.linkedin}`, '_blank');
        break;
      case "github":
        window.open(`https://${contactInfo.github}`, '_blank');
        break;
      case "resume":
        console.log("Resume download triggered");
        break;
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="text-contact-title">
          Let's Work Together
        </h2>

        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            I'm always interested in new opportunities and exciting projects. 
            Whether you're looking for a full-stack developer or want to discuss potential collaborations, 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-elevate transition-all duration-300" data-testid="card-contact-direct">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <button
                  onClick={() => handleContactAction("email")}
                  className="text-sm hover:text-primary transition-colors"
                  data-testid="button-contact-email"
                >
                  {contactInfo.email}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <button
                  onClick={() => handleContactAction("phone")}
                  className="text-sm hover:text-primary transition-colors"
                  data-testid="button-contact-phone"
                >
                  {contactInfo.phone}
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all duration-300" data-testid="card-contact-social">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                Connect Online
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-muted-foreground" />
                <button
                  onClick={() => handleContactAction("linkedin")}
                  className="text-sm hover:text-primary transition-colors"
                  data-testid="button-contact-linkedin"
                >
                  {contactInfo.linkedin}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-muted-foreground" />
                <button
                  onClick={() => handleContactAction("github")}
                  className="text-sm hover:text-primary transition-colors"
                  data-testid="button-contact-github"
                >
                  {contactInfo.github}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-6">
          <Button
            size="lg"
            onClick={() => handleContactAction("email")}
            className="hover-elevate"
            data-testid="button-primary-contact"
          >
            <Mail className="w-4 h-4 mr-2" />
            Send me an email
          </Button>
          
          <div>
            <Button
              variant="outline"
              onClick={() => handleContactAction("resume")}
              className="hover-elevate"
              data-testid="button-contact-resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}