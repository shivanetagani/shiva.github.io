import { Trophy, Calendar, Medal, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: "3rd Prize - Projectra 2025",
    description:
      "Secured 3rd prize for a working model demonstration at Projectra-2025, showcasing practical innovation and collaboration in a competitive environment. Applied AI and cloud concepts to real-world problems.",
    year: "2025",
    icon: Trophy,
    color: "from-orange to-orange/70",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and awards for innovation and excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Achievements Grid */}
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="glass-card hover-lift overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-orange to-orange/70 text-primary-foreground px-6 py-3 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">Achievement</span>
              </div>

              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`p-6 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-xl group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <achievement.icon className="w-12 h-12 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <Badge className="bg-orange/20 text-orange border-orange/30 w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        {achievement.year}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
