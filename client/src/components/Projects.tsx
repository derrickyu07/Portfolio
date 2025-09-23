import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "UpHealth",
      description: "A comprehensive healthcare appointment scheduling and vaccination management platform with secure authentication and automated notifications",
      duration: "June 2025 – August 2025",
      technologies: ["ASP.NET Core", "SQL Server", "React", "Azure", "SendGrid"],
      achievements: [
        "Developing a full-stack healthcare platform with secure authentication using ASP.NET Identity",
        "Implemented Profile, Dashboard, Vaccination Tracking, Health News, and Appointment Booking features",
        "Deployed on Azure using GitHub Actions CI/CD pipelines and Docker containers",
        "Integrated SendGrid for automated reminders and notifications, improving patient engagement"
      ],
      type: "In Development"
    },
    {
      title: "Transcription and Translation App",
      description: "A scalable React application for real-time audio transcription and translation supporting over 50 languages",
      duration: "May 2024 – August 2024",
      technologies: ["React", "Git", "Tailwind", "Web Workers", "ML Models"],
      achievements: [
        "Built a scalable React app to transcribe and translate real-time audio in over 50 languages",
        "Leveraged web workers for efficient in-browser ML model execution, reducing latency by 25%",
        "Enabled dynamic audio input switching (file uploads, live recording) for enhanced user flexibility"
      ],
      type: "Completed"
    },
    {
      title: "Instagram Clone",
      description: "A full-featured social media application with real-time updates, user authentication, and profile customization",
      duration: "February 2024 – June 2024",
      technologies: ["React", "Firebase", "Firestore", "Authentication"],
      achievements: [
        "Achieved secure user management by implementing Firebase Authentication with streamlined sign-up, login, and password reset",
        "Delivered real-time updates by configuring Firebase Firestore for posts, comments, and likes",
        "Enabled profile customization with user profile pictures, bios, and personal information updates"
      ],
      type: "Completed"
    },
    {
      title: "Merinaa Mobile App & Dispatcher Portal",
      description: "A Mental Health Crisis Intervention Assistance Application supporting thousands of individuals with mental health conditions",
      duration: "August 2022 – May 2023",
      technologies: ["Flutter", "PostgreSQL", "Express.js", "React", "REST API"],
      achievements: [
        "Developed a cross-platform mobile app supporting 1000s of individuals with mental health conditions",
        "Programmed both Flutter mobile app and React web application with seamless integration",
        "Facilitated data management by designing a REST API, improving service reliability",
        "Collaborated with development team following Scrum methodologies for on-time delivery"
      ],
      type: "Completed"
    }
  ];

  const handleProjectAction = (project: string, action: string) => {
    // TODO: Replace with actual project link functionality
    console.log(`${action} for ${project} triggered`);
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="text-projects-title">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Badge variant={project.type === "In Development" ? "default" : "secondary"}>
                    {project.type}
                  </Badge>
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm mt-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{project.duration}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <li key={achIndex} className="flex text-sm leading-relaxed">
                        <span className="text-primary mr-3 mt-1 text-xs">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleProjectAction(project.title, "view-demo")}
                    className="hover-elevate"
                    data-testid={`button-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleProjectAction(project.title, "view-code")}
                    className="hover-elevate"
                    data-testid={`button-code-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}