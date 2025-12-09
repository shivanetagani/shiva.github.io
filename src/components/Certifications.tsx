import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    name: "Python for Data Science",
    issuer: "NPTEL",
    year: "2024",
    color: "from-primary to-primary/70",
    pdfUrl: "https://drive.google.com/file/d/1NhdMYjfFvxJgSwK1i2MAZwRU7uc3Xu_A/view?usp=sharing",
  },
  {
    name: "Frontend Development",
    issuer: "Great Learning",
    year: "2024",
    color: "from-accent to-accent/70",
    pdfUrl: "https://drive.google.com/file/d/1p3AhuGAyt5h5AODD8Z5b3JLuTLA5Fkfn/view?usp=sharing",
  },
  {
    name: "Web Development",
    issuer: "IBM edX",
    year: "2024",
    color: "from-purple to-purple/70",
    pdfUrl: "https://drive.google.com/file/d/1i-XwEtAx1g96oqwH0yITjDilxY2d9hwy/view?usp=sharing",
  },
  {
    name: "AWS Cloud Computing – DevOps",
    issuer: "APSSDC",
    year: "2025",
    color: "from-orange to-orange/70",
    pdfUrl: "https://drive.google.com/file/d/1H9NDd4RE8yvCnB4Fwc-Z8rrxNUnD1hb1/view?usp=sharing",
  },
];

export function Certifications() {
  return (
    <section id="certificates" className="section-spacing bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-description">
            Professional certifications and courses completed
          </p>
          <div className="section-divider" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`glass-card hover-lift group overflow-hidden ${cert.pdfUrl ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => cert.pdfUrl && window.open(cert.pdfUrl, '_blank')}
            >
              <CardContent className="p-4 sm:p-5 lg:p-6 text-center">
                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${cert.color} mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">{cert.issuer}</p>
                
                <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  {cert.year}
                </Badge>

                {cert.pdfUrl && (
                  <div className="mt-2 sm:mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    <span>View Certificate</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}