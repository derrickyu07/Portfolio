import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const education = {
    institution: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    degree: "Bachelor of Science in Computer Science",
    graduationDate: "May 2024",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Computer Networking",
      "Information Security",
      "Machine Learning",
      "Computer Organization & Programming",
      "Computer Vision"
    ]
  };

  return (
    <section id="education" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" data-testid="text-education-title">
          Education
        </h2>

        <Card className="hover-elevate transition-all duration-300" data-testid="card-education-gatech">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl" data-testid="text-institution">
                    {education.institution}
                  </CardTitle>
                  <p className="text-lg text-muted-foreground" data-testid="text-degree">
                    {education.degree}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end gap-2">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm" data-testid="text-graduation-date">
                    Graduated {education.graduationDate}
                  </span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm" data-testid="text-education-location">
                    {education.location}
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Relevant Coursework</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {education.relevantCourses.map((course, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-start p-3 text-sm"
                    data-testid={`badge-course-${course.toLowerCase().replace(/\s+|&/g, '-')}`}
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}