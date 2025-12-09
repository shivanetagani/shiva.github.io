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
      className="section-spacing gradient-skills relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description">
            Professional experience and internships that shaped my skills
          </p>
          <div className="section-divider" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card hover-lift overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 sm:w-2 h-full bg-gradient-to-b from-primary via-accent to-purple" />
              
              <CardContent className="p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-4 sm:mb-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg flex-shrink-0">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 flex-wrap mb-1">
                        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <Badge className="bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30 text-xs flex-shrink-0">
                            Current
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                        <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-xs sm:text-sm lg:text-base truncate">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-accent font-semibold bg-accent/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit text-xs sm:text-sm">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {exp.duration}
                  </div>
                </div>

                {/* Points */}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {exp.points.map((point, pIndex) => (
                    <div
                      key={pIndex}
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed">
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