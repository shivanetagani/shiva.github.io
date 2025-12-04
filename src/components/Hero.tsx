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
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full animate-spin-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg animate-fade-in-up">
                Welcome to my portfolio
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ animationDelay: "0.1s" }}
              >
                Hello, I'm{" "}
                <span className="gradient-text">Shiva Netagani</span>
              </h1>
              <p
                className="text-xl sm:text-2xl text-accent font-semibold animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                CS & Data Science Student
              </p>
            </div>

            <p
              className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Motivated and analytical Computer Science & Data Science student with
              hands-on experience in full-stack development, AWS Cloud, and DevOps
              fundamentals. Passionate about solving complex technical problems,
              optimizing performance, and creating scalable systems.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="gap-2 text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="gap-2 text-base px-8 py-6 border-2 hover:bg-primary/10"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-purple rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              
              {/* Image container */}
              <div className="relative animate-float">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Shiva Netagani"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative ring */}
                <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="p-2 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
