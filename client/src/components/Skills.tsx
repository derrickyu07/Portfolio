import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const allSkills = [
    // Programming Languages
    { name: "Java", category: "language", weight: "high" },
    { name: "Python", category: "language", weight: "high" },
    { name: "C#", category: "language", weight: "high" },
    { name: "JavaScript", category: "language", weight: "high" },
    { name: "TypeScript", category: "language", weight: "high" },
    { name: "SQL (Postgres)", category: "language", weight: "medium" },
    { name: "HTML/CSS", category: "language", weight: "medium" },
    { name: "Dart", category: "language", weight: "medium" },
    { name: "Ruby", category: "language", weight: "medium" },
    
    // Frameworks & Libraries
    { name: "React", category: "framework", weight: "high" },
    { name: "Node.js", category: "framework", weight: "high" },
    { name: "ASP.NET Core", category: "framework", weight: "high" },
    { name: "Express.js", category: "framework", weight: "medium" },
    { name: "Angular", category: "framework", weight: "medium" },
    { name: "Flutter", category: "framework", weight: "medium" },
    { name: "Ruby on Rails", category: "framework", weight: "medium" },
    { name: ".NET", category: "framework", weight: "medium" },
    { name: "JUnit", category: "framework", weight: "low" },
    
    // Tools & Platforms
    { name: "Azure", category: "tool", weight: "high" },
    { name: "Google Cloud Platform", category: "tool", weight: "high" },
    { name: "Git", category: "tool", weight: "high" },
    { name: "Docker", category: "tool", weight: "medium" },
    { name: "Firebase", category: "tool", weight: "medium" },
    { name: "Supabase", category: "tool", weight: "medium" },
    { name: "GitHub", category: "tool", weight: "medium" },
    { name: "VS Code", category: "tool", weight: "low" },
    { name: "Git Bash", category: "tool", weight: "low" }
  ];

  const getSkillSize = (weight: string) => {
    switch (weight) {
      case "high": return "text-lg px-4 py-2";
      case "medium": return "text-base px-3 py-2";
      case "low": return "text-sm px-3 py-1.5";
      default: return "text-base px-3 py-2";
    }
  };

  const getSkillVariant = (category: string) => {
    switch (category) {
      case "language": return "default";
      case "framework": return "secondary";
      case "tool": return "outline";
      default: return "outline";
    }
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="text-skills-title">
          Technical Skills
        </h2>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 items-center max-w-5xl mx-auto">
            {allSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant={getSkillVariant(skill.category)}
                className={`${getSkillSize(skill.weight)} hover-elevate cursor-default transition-all duration-300 hover:scale-105`}
                data-testid={`badge-skill-${skill.name.toLowerCase().replace(/\s+|\(|\)|\.|\//g, '-').replace(/--+/g, '-')}`}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center text-sm text-muted-foreground">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Badge variant="default" className="text-xs">Sample</Badge>
              <span>Core Languages</span>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">Sample</Badge>
              <span>Frameworks & Libraries</span>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">Sample</Badge>
              <span>Tools & Platforms</span>
            </div>
          </div>
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