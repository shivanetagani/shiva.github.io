import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background decorations - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] border border-primary/5 rounded-full animate-spin-slow" />
      </div>

      <div className="section-container relative z-10 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Profile Image - shows first on mobile */}
          <div className="flex-shrink-0 relative order-first lg:order-last">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-purple rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              
              {/* Image container */}
              <div className="relative animate-float">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Shiva Netagani"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                
                {/* Decorative ring - hidden on small screens */}
                <div className="hidden sm:block absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-primary font-medium text-base sm:text-lg animate-fade-in-up">
                Welcome to my portfolio
              </p>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ animationDelay: "0.1s" }}
              >
                Hello, I'm{" "}
                <span className="gradient-text">Shiva Netagani</span>
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl text-accent font-semibold animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Co-Pilot Agent Developer Intern @ Azvasa Education
              </p>
            </div>

            <p
              className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up px-2 sm:px-0"
              style={{ animationDelay: "0.3s" }}
            >
              Building AI-driven automation solutions that streamline education workflows. 
              Passionate about AI agents, Generative AI, and cloud-based applications 
              that create measurable impact for users and organizations.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up px-4 sm:px-0"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="gap-2 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all touch-target"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="gap-2 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 border-2 hover:bg-primary/10 touch-target"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="p-2 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card transition-colors touch-target"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}