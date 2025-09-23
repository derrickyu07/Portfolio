import { Button } from "@/components/ui/button";
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
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-40 mx-auto mb-6 overflow-hidden rounded-xl border-2 border-border/30 shadow-lg">
            <img 
              src={profileImage} 
              alt="Derrick Yu" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="text-name">
            Hi, I'm Derrick Yu.
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-tagline">
            I love building apps that make life easier and more enjoyable. I'm always learning, solving problems, and finding creative ways to bring ideas to life. I'm excited to bring a new perspective to projects and tackle any technical problems!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
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

        <div className="flex justify-center space-x-6">
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

        <div className="mt-12 text-sm text-muted-foreground">
          <p data-testid="text-contact-info">
            678-448-6648 | derrickyu07@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}