import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Cloud } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-blue-500/10 border-blue-500/20",
      iconColor: "text-blue-500",
      skills: [
        "Java", "Python", "C#", "SQL (Postgres)", "JavaScript", 
        "TypeScript", "HTML/CSS", "Dart", "Ruby"
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      color: "bg-green-500/10 border-green-500/20",
      iconColor: "text-green-500",
      skills: [
        "React", "Node.js", "Angular", "JUnit", "Express.js", 
        "Ruby on Rails", ".NET"
      ]
    },
    {
      title: "Developer Tools & Platforms",
      icon: Cloud,
      color: "bg-purple-500/10 border-purple-500/20",
      iconColor: "text-purple-500",
      skills: [
        "Git", "GitHub", "Git Bash", "Docker", "Google Cloud Platform (GCP)", 
        "VS Code", "Firebase", "Supabase", "Azure"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="text-skills-title">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className={`hover-elevate transition-all duration-300 ${category.color}`} data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+|&/g, '-')}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${category.color} rounded-lg border`}>
                      <IconComponent className={`w-5 h-5 ${category.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="text-sm hover-elevate cursor-default"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+|\(|\)|\.|\//g, '-').replace(/--+/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-summary">
            Passionate about learning new technologies and applying them to solve real-world problems. 
            Experienced in agile development methodologies with a focus on collaborative teamwork and continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
}