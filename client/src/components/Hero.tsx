import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@assets/ProfessionalPhoto_1758607235201.jpg";

export default function Hero() {
  const handleDownloadResume = () => {
    // TODO: Replace with actual resume download functionality
    console.log("Download resume triggered");
  };

  const handleContactAction = (action: string) => {
    // TODO: Replace with actual contact functionality
    console.log(`${action} triggered`);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Derrick Yu" 
                  className="w-full h-full object-cover object-center"
                  data-testid="image-profile"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid="text-name">
                Derrick Yu
              </h1>
              
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6" data-testid="text-title">
                Software Engineer
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-tagline">
                Georgia Tech Computer Science graduate with hands-on experience building scalable applications. 
                Currently developing innovative pet care solutions at ThankUPet, specializing in full-stack development 
                with React, ASP.NET Core, and cloud technologies.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                <Badge variant="secondary" className="text-sm">React</Badge>
                <Badge variant="secondary" className="text-sm">ASP.NET Core</Badge>
                <Badge variant="secondary" className="text-sm">Azure</Badge>
                <Badge variant="secondary" className="text-sm">Flutter</Badge>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <Button
                onClick={handleDownloadResume}
                className="hover-elevate"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                onClick={() => handleContactAction("contact")}
                className="hover-elevate"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Let's Work Together
              </Button>
            </div>

            <div className="flex justify-center md:justify-start space-x-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleContactAction("email")}
                className="hover-elevate"
                data-testid="button-email"
              >
                <Mail className="w-5 h-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleContactAction("linkedin")}
                className="hover-elevate"
                data-testid="button-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleContactAction("github")}
                className="hover-elevate"
                data-testid="button-github"
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              <p data-testid="text-contact-info">
                678-448-6648 | derrickyu07@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}