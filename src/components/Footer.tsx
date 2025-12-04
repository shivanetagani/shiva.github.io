import { Linkedin, Github, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shiva-netagani",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/shivanetagani",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:shivanetagani@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold gradient-text">
            ShivaNetagani
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Shiva Netagani. Made with{" "}
            <Heart className="w-4 h-4 text-destructive fill-current" /> All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
