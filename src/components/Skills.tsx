import {
  Code2,
  Globe,
  Wrench,
  Cloud,
  Brain,
  Users,
  Terminal,
  FileCode,
  Database,
  GitBranch,
  Server,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-primary to-primary/70",
    skills: [
      { name: "Java", icon: Terminal },
      { name: "Python (Intermediate)", icon: FileCode },
      { name: "C++ (Basics)", icon: Code2 },
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
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    color: "from-purple to-purple/70",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "VS Code", icon: Terminal },
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
      { name: "Deployment Automation", icon: Database },
    ],
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    color: "from-primary to-accent",
    skills: [
      { name: "Prompt Engineering", icon: MessageSquare },
      { name: "Data Analysis", icon: BarChart3 },
      { name: "Data Visualization", icon: BarChart3 },
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
    <section id="skills" className="py-20 lg:py-32 gradient-skills relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technical and soft skills developed through
            academic learning and hands-on projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group/skill"
                    >
                      <skill.icon className="w-5 h-5 text-muted-foreground group-hover/skill:text-primary transition-colors" />
                      <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
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
