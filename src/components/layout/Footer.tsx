import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const footerLinks = {
  clinic: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
  ],
  services: [
    { name: "General Dentistry", href: "/services#general-dentistry" },
    { name: "Orthodontics", href: "/services#orthodontics" },
    { name: "Dental Implants", href: "/services#dental-implants" },
    { name: "Cosmetic Dentistry", href: "/services#cosmetic-dentistry" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Book Appointment", href: "/booking" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="section-container section-padding">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <img
                  src="/images/logo-square.png"
                  alt="Nathanol Specialty Dental Center logo"
                  className="h-10 w-10 rounded-lg object-contain bg-white"
                  loading="eager"
                  decoding="async"
              />

              <div className="hidden sm:block leading-tight">
                <p className="text-sm font-bold text-foreground">Nathanol</p>
                <p className="text-xs text-muted-foreground">Specialty Dental</p>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Providing quality dental care in Addis Ababa. Your smile is our specialty.
            </p>
            
            <div className="space-y-2">
              <a 
                href={BUSINESS_INFO.contact.phoneHref}
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                {BUSINESS_INFO.contact.phone}
              </a>
              <a 
                href={BUSINESS_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4 text-primary" />
                {BUSINESS_INFO.location.address}
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                {BUSINESS_INFO.hours.today}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Clinic</h3>
            <ul className="space-y-2">
              {footerLinks.clinic.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-foreground mb-3 mt-6">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Dental clinic in Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
