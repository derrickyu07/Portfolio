import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experience = {
    title: "Software Engineer Intern",
    company: "ThankUPet",
    location: "Singapore",
    duration: "July 2024 – April 2025",
    technologies: ["Flutter", "Supabase", "Google Cloud Platform"],
    achievements: [
      "Streamlined user registration and profile management, implementing multi-authentication with email, Google, and Facebook, resulting in a seamless onboarding process for ThankUPet's mobile app users",
      "Enhanced user experience with search, rating, and messaging features, enabling users to find pet care facilities and communicate via text, voice messages, images, and location sharing",
      "Improved data accessibility and reliability by implementing a Supabase-backed database, allowing users to manage multiple pet profiles and book appointments efficiently",
      "Applied agile principles to software development, focusing on business value delivery, collaboration, and continuous improvement"
    ]
  };

  return (
    <section id="experience" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="text-experience-title">
          Experience
        </h2>

        <Card className="hover-elevate transition-all duration-300" data-testid="card-experience-thankupet">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-xl md:text-2xl" data-testid="text-job-title">
                  {experience.title}
                </CardTitle>
                <p className="text-lg text-primary font-semibold" data-testid="text-company">
                  {experience.company}
                </p>
              </div>
              
              <div className="flex flex-col md:items-end gap-2">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm" data-testid="text-duration">{experience.duration}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm" data-testid="text-location">{experience.location}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="mb-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Key Achievements</h4>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex text-sm leading-relaxed" data-testid={`text-achievement-${index}`}>
                    <span className="text-primary mr-3 mt-1.5 text-xs">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}