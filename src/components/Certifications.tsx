import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    name: "Python for Data Science",
    issuer: "NPTEL",
    year: "2024",
    color: "from-primary to-primary/70",
    pdfUrl: "", // Add PDF URL here
  },
  {
    name: "Frontend Development",
    issuer: "Great Learning",
    year: "2024",
    color: "from-accent to-accent/70",
    pdfUrl: "", // Add PDF URL here
  },
  {
    name: "Web Development",
    issuer: "IBM edX",
    year: "2024",
    color: "from-purple to-purple/70",
    pdfUrl: "", // Add PDF URL here
  },
  {
    name: "AWS Cloud Computing – DevOps",
    issuer: "APSSDC",
    year: "2025",
    color: "from-orange to-orange/70",
    pdfUrl: "", // Add PDF URL here
  },
];

export function Certifications() {
  return (
    <section id="certificates" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses completed
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`glass-card hover-lift group overflow-hidden ${cert.pdfUrl ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => cert.pdfUrl && window.open(cert.pdfUrl, '_blank')}
            >
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                
                <Badge variant="outline" className="border-primary/30 text-primary">
                  <Calendar className="w-3 h-3 mr-1" />
                  {cert.year}
                </Badge>

                {cert.pdfUrl && (
                  <div className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
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
