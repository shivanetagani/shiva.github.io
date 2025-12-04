import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "B.Tech – Computer Science & Data Science",
    institution: "Audisankara College of Engineering, Gudur",
    period: "2022-2026",
    score: "CGPA: 7.5",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College, Kadapa",
    period: "2020-2022",
    score: "63%",
    icon: Award,
  },
  {
    degree: "SSC",
    institution: "Sree Nalanda High School",
    period: "2019-2020",
    score: "83%",
    icon: Award,
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Career Objective */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="glass-card hover-lift">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Career Objective
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                Aspiring Software Engineer with a passion for building scalable,
                efficient systems. I thrive on solving complex technical challenges
                and continuously expanding my knowledge in cloud computing, full-stack
                development, and DevOps practices. Seeking opportunities to contribute
                to innovative projects while growing as a professional in the tech industry.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Education Timeline */}
        <div id="education" className="max-w-4xl mx-auto scroll-mt-24">
          <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-purple hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 md:gap-8 items-start"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <edu.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Card */}
                  <Card className="flex-1 glass-card hover-lift overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <p className="text-primary font-semibold">{edu.score}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
