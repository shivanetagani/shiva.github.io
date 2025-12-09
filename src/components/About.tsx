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
    <section id="about" className="section-spacing bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Career Objective */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <Card className="glass-card hover-lift">
            <CardContent className="p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                About Me
              </h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                <p>
                  In my current role as a <span className="text-primary font-medium">Co-Pilot Agent Developer Intern at Azvasa Education</span>, 
                  I contribute to building AI-driven and automation-based solutions that streamline education management 
                  workflows for teachers and staff. I work on designing and improving AI agents that reduce manual effort, 
                  improve data accessibility, and make everyday academic and administrative tasks faster and more accurate.
                </p>
                <p>
                  During my B.Tech in Computer Science (Data Science) at Audisankara College, I have taken on projects 
                  and model exhibitions where I apply AI and cloud concepts to real-world problems. I actively share my 
                  learning journey on topics like AI tools, Python for Data Science, startups, and industry-ready skills, 
                  which has helped me connect with a wider tech community and stay aligned with current trends.
                </p>
                <p>
                  My core skills include <span className="text-accent font-medium">AI agents, Generative AI, prompt engineering, Python, Java, and cloud fundamentals</span>, 
                  which I apply to build automation-focused solutions in education and beyond.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education Timeline */}
        <div id="education" className="max-w-4xl mx-auto scroll-mt-20 sm:scroll-mt-24">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 flex items-center justify-center gap-2 sm:gap-3">
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Education
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-purple hidden md:block" />

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative flex gap-4 sm:gap-6 md:gap-8 items-start"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <edu.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary-foreground" />
                  </div>

                  {/* Card */}
                  <Card className="flex-1 glass-card hover-lift overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                    <CardContent className="p-4 sm:p-5 lg:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 sm:mb-3">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-2">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-accent font-medium bg-accent/10 px-2 sm:px-3 py-1 rounded-full w-fit flex-shrink-0">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base mb-1 sm:mb-2">{edu.institution}</p>
                      <p className="text-primary font-semibold text-sm sm:text-base">{edu.score}</p>
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