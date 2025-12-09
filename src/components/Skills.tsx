import {
  Code2,
  Globe,
  Wrench,
  Cloud,
  Users,
  Terminal,
  FileCode,
  GitBranch,
  Server,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Heart,
  Zap,
  Bot,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "AI & Automation",
    icon: Bot,
    color: "from-primary to-accent",
    skills: [
      { name: "AI Agents", icon: Bot },
      { name: "Generative AI", icon: Sparkles },
      { name: "Prompt Engineering", icon: MessageSquare },
      { name: "Data Analysis", icon: BarChart3 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "from-accent to-accent/70",
    skills: [
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: FileCode },
      { name: "JavaScript", icon: Code2 },
      { name: "Python", icon: Terminal },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-purple to-purple/70",
    skills: [
      { name: "GitHub", icon: GitBranch },
      { name: "MS Office", icon: FileCode },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange to-orange/70",
    skills: [
      { name: "AWS (EC2, S3, IAM)", icon: Server },
      { name: "CI/CD (Basics)", icon: Zap },
      { name: "Cloud Fundamentals", icon: Cloud },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "from-accent to-purple",
    skills: [
      { name: "Leadership", icon: Users },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Communication", icon: MessageSquare },
      { name: "Collaboration", icon: Heart },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-spacing gradient-skills relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-description">
            A comprehensive toolkit of technical and soft skills developed through
            academic learning, internships, and hands-on projects
          </p>
          <div className="section-divider" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-5 lg:p-6">
                {/* Category Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div
                    className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group/skill"
                    >
                      <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover/skill:text-primary transition-colors flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill.name}
                      </span>
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