import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_software_engineer_headshot_c0ae1778.png";

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
          <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20">
            <AvatarImage src={profileImage} alt="Derrick Yu" />
            <AvatarFallback className="text-2xl">DY</AvatarFallback>
          </Avatar>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="text-name">
            Derrick Yu
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6" data-testid="text-title">
            Software Engineer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-tagline">
            Full-stack developer passionate about building scalable applications and exceptional user experiences. 
            Currently developing innovative solutions at ThankUPet with expertise in React, ASP.NET Core, and cloud technologies.
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