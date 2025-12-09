import { useState } from "react";
import { Trophy, Calendar, Image, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import projectraImage from "@/assets/projectra-achievement.jpg";

const achievements = [
  {
    title: "3rd Prize - Projectra 2025",
    description:
      "Secured 3rd prize for a working model demonstration at Projectra-2025, showcasing practical innovation and collaboration in a competitive environment. Applied AI and cloud concepts to real-world problems.",
    year: "2025",
    icon: Trophy,
    color: "from-orange to-orange/70",
    images: [projectraImage],
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
    <section id="achievements" className="section-spacing bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-description">
            Recognition and awards for innovation and excellence
          </p>
          <div className="section-divider" />
        </div>

        {/* Achievements Grid */}
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`glass-card hover-lift overflow-hidden group ${achievement.images.length > 0 ? 'cursor-pointer' : ''}`}
              onClick={() => openGallery(achievement)}
            >
              <div className="bg-gradient-to-r from-orange to-orange/70 text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold text-sm sm:text-base">Achievement</span>
              </div>

              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div
                    className={`p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${achievement.color} shadow-xl group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <achievement.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <Badge className="bg-orange/20 text-orange border-orange/30 w-fit text-xs sm:text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {achievement.year}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    {achievement.images.length > 0 && (
                      <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        <Image className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
        <DialogContent className="max-w-[95vw] sm:max-w-4xl p-4 sm:p-6" aria-describedby="achievement-description">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg">{selectedAchievement?.title}</DialogTitle>
            <DialogDescription id="achievement-description">
              View achievement images
            </DialogDescription>
          </DialogHeader>
          
          {selectedAchievement && selectedAchievement.images.length > 0 && (
            <div className="relative">
              <img
                src={selectedAchievement.images[currentImageIndex]}
                alt={`${selectedAchievement.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg"
              />
              
              {selectedAchievement.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 touch-target"
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 touch-target"
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-xs sm:text-sm">
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