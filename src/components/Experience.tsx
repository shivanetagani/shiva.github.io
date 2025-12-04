import { Briefcase, Calendar, CheckCircle2, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Co-Pilot Agent Developer Intern",
    company: "Azvasa Education",
    duration: "2025 - Present",
    current: true,
    points: [
      "Building AI-driven and automation-based solutions that streamline education management workflows for teachers and staff",
      "Designing and improving AI agents that reduce manual effort and improve data accessibility",
      "Making everyday academic and administrative tasks faster and more accurate through intelligent automation",
    ],
  },
  {
    role: "AWS Cloud Computing & DevOps Intern",
    company: "APSSDC (Andhra Pradesh State Skill Development Corporation)",
    duration: "2025",
    current: false,
    points: [
      "Implemented AWS services (EC2, S3, IAM) to simulate real-world deployment environments",
      "Practiced version control (Git) and continuous integration workflows for smoother deployments",
      "Gained exposure to cloud infrastructure management, networking concepts, and DevOps best practices",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 lg:py-32 gradient-skills relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and internships that shaped my skills
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card hover-lift overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-accent to-purple" />
              
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg flex-shrink-0">
                      <Briefcase className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <Badge className="bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30">
                            Current
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm lg:text-base">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-accent font-semibold bg-accent/10 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>

                {/* Points */}
                <div className="space-y-4 pl-0 lg:pl-20">
                  {exp.points.map((point, pIndex) => (
                    <div
                      key={pIndex}
                      className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
