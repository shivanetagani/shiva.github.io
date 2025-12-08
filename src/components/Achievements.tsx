import { useState } from "react";
import { Trophy, Calendar, Medal, Award, X, ChevronLeft, ChevronRight, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    title: "3rd Prize - Projectra 2025",
    description:
      "Secured 3rd prize for a working model demonstration at Projectra-2025, showcasing practical innovation and collaboration in a competitive environment. Applied AI and cloud concepts to real-world problems.",
    year: "2025",
    icon: Trophy,
    color: "from-orange to-orange/70",
    images: ["https://drive.google.com/uc?export=view&id=1aiYqIao8KlFyhTYpuSs6kyRP8f_hslhe"],
  },
];

export function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (achievement: typeof achievements[0]) => {
    if (achievement.images.length > 0) {
      setSelectedAchievement(achievement);
      setCurrentImageIndex(0);
    }
  };

  const nextImage = () => {
    if (selectedAchievement) {
      setCurrentImageIndex((prev) => 
        prev === selectedAchievement.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAchievement) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAchievement.images.length - 1 : prev - 1
      );
    }
  };

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
              className={`glass-card hover-lift overflow-hidden group ${achievement.images.length > 0 ? 'cursor-pointer' : ''}`}
              onClick={() => openGallery(achievement)}
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
                    
                    {achievement.images.length > 0 && (
                      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        <Image className="w-4 h-4" />
                        <span>Click to view {achievement.images.length} image{achievement.images.length > 1 ? 's' : ''}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Gallery Dialog */}
      <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedAchievement?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedAchievement && selectedAchievement.images.length > 0 && (
            <div className="relative">
              <img
                src={selectedAchievement.images[currentImageIndex]}
                alt={`${selectedAchievement.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              
              {selectedAchievement.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2"
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedAchievement.images.length}
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
