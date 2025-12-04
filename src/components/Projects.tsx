import { ExternalLink, Github, Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Book Your Appointment – Healthcare Automation System",
    role: "Team Lead",
    status: "In Development",
    featured: true,
    description:
      "Led end-to-end development of a hospital appointment booking system, improving scheduling efficiency by 40%. Designed and implemented a responsive UI that increased user satisfaction by 30%. Automated patient appointment workflows, reducing administrative workload and errors.",
    tags: ["Healthcare", "Web Development", "Automation"],
    highlights: [
      { icon: Clock, text: "40% improved scheduling efficiency" },
      { icon: Users, text: "30% increased user satisfaction" },
      { icon: Star, text: "Reduced administrative errors" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in building real-world applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Projects */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover-lift overflow-hidden group"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold px-4 py-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Featured Project
                </div>
              )}

              <CardContent className="p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="outline" className="border-primary text-primary">
                        {project.role}
                      </Badge>
                      <Badge className="bg-orange/20 text-orange border-orange/30">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-base lg:text-lg">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border/50"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <highlight.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {highlight.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIndex) => (
                    <Badge
                      key={tIndex}
                      variant="secondary"
                      className="bg-secondary/80 text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
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
