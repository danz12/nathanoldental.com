import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Calendar,
  Star,
  ChevronRight,
  Heart,
  ShieldCheck,
  MessageCircle,
  Award,
  Zap,
  Clock,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { BUSINESS_INFO, SEO_METADATA, SERVICES_DATA, WHY_CHOOSE_US } from "@/lib/constants";
import { assetUrl } from "@/lib/asset";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  ShieldCheck,
  MapPin,
  MessageCircle,
  Award,
  Zap
};

// ✅ Put these files in: /public/images/
const HERO_IMAGES = [
  "images/clinic-hero-1.png",
  "images/clinic-hero-2.png",
  "images/clinic-hero-3.png",
];

// ✅ WhatsApp (Ethiopia): 093 030 3333 -> 251930303333
const WHATSAPP_NUMBER = "251930303333";
const WHATSAPP_MESSAGE =
    "Hello Nathanol Specialty Dental Center, I would like to request an appointment. Please share available times.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* =========================
   Feature 1: Animate on scroll
   (IntersectionObserver)
========================= */
function useRevealOnScroll(options?: IntersectionObserverInit) {
  const [seen, setSeen] = useState(false);

  const refCallback = (node: HTMLElement | null) => {
    if (!node || seen) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSeen(true);
            observer.disconnect();
          }
        },
        options ?? { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
  };

  return { refCallback, seen };
}

export default function HomePage() {
  const [activeImage, setActiveImage] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  /* ---------- Hero slider ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* ---------- Header scroll effect ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Feature 2: Image performance hints
  const heroFetchPriority = useMemo(() => {
    // first image should be prioritized (LCP)
    return HERO_IMAGES.map((_, idx) => (idx === 0 ? "high" : "auto")) as Array<
        "high" | "auto"
    >;
  }, []);

  return (
      <>
        <SEOHead
            title={SEO_METADATA.home.title}
            description={SEO_METADATA.home.description}
            keywords={SEO_METADATA.home.keywords}
        />

        {/* 🔹 Transparent Header Overlay Trigger */}
        <div
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"}
      `}
        />

        <main className="pb-24 lg:pb-0">
          {/* ================= HERO ================= */}
          <section className="relative">
            {/* Slider */}
            <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] overflow-hidden">
              {HERO_IMAGES.map((img, i) => (
                  <img
                      key={img}
                      src={assetUrl(img)}
                      alt={BUSINESS_INFO.name}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000
                  ${i === activeImage ? "opacity-100" : "opacity-0"}`}
                      /* ✅ Image optimization */
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={heroFetchPriority[i]}
                      sizes="100vw"
                  />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              {/* Hours badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium shadow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                  Today: {BUSINESS_INFO.hours.today}
                </div>
              </div>
            </div>

            {/* Content below hero */}
            <div className="section-container">
              <div className="py-10 lg:py-14 animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  {BUSINESS_INFO.name}
                </h1>

                <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                  Specialty dental care in Addis Ababa with a focus on comfort, clarity,
                  and patient-centered service.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Link to="/booking">
                    <Button variant="cta" size="lg" className="gap-2">
                      <Calendar className="h-5 w-5" />
                      Book Appointment
                    </Button>
                  </Link>

                  <a href={BUSINESS_INFO.contact.phoneHref}>
                    <Button variant="outline" size="lg" className="gap-2">
                      <Phone className="h-5 w-5" />
                      {BUSINESS_INFO.contact.phone}
                    </Button>
                  </a>

                  <a
                      href={BUSINESS_INFO.location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="lg" className="gap-2">
                      <MapPin className="h-5 w-5" />
                      Directions
                    </Button>
                  </a>

                  {/* ✅ Optional WhatsApp CTA in hero row */}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="gap-2">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </Button>
                  </a>
                </div>

                {/* Trust */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 shadow border">
                    <Star className="h-4 w-4 fill-gold text-gold" />
                    <strong>{BUSINESS_INFO.reviews.google.rating}</strong>
                    <span className="text-sm text-muted-foreground">
                    ({BUSINESS_INFO.reviews.google.count} Google reviews)
                  </span>
                  </div>

                  <div className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 shadow border">
                    <Star className="h-4 w-4 fill-gold text-gold" />
                    <strong>{BUSINESS_INFO.reviews.facebook.rating}/5</strong>
                    <span className="text-sm text-muted-foreground">Facebook</span>
                  </div>

                  <div className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 shadow border">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                    Comfort & hygiene focused
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= SERVICES (Animated on scroll) ================= */}
          <section className="section-padding bg-background">
            <div className="section-container">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our Dental Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive dental care tailored to your needs. Service items may be placeholders until confirmed.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES_DATA.slice(0, 6).map((service, index) => {
                  // ✅ Each card reveals when it scrolls into view
                  const { refCallback, seen } = useRevealOnScroll({
                    threshold: 0.15,
                    rootMargin: "0px 0px -10% 0px"
                  });

                  return (
                      <div
                          key={service.id}
                          ref={(node) => refCallback(node as unknown as HTMLElement)}
                          className={`transition-all duration-700 will-change-transform
                      ${seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                          style={{ transitionDelay: `${index * 90}ms` }}
                      >
                        <Card className="card-hover group relative overflow-hidden border-border/50">
                          <CardContent className="p-6">
                            {service.isPlaceholder && (
                                <span className="absolute top-2 right-2 text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                            Confirm services
                          </span>
                            )}

                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                              <span className="text-2xl">🦷</span>
                            </div>

                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {service.name}
                            </h3>

                            <p className="text-sm text-muted-foreground mb-4">
                              {service.shortDescription}
                            </p>

                            <Link
                                to={`/services#${service.id}`}
                                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                            >
                              Learn more
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                  );
                })}
              </div>

              <div className="text-center mt-8">
                <Link to="/services">
                  <Button variant="outline" size="lg">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* ================= WHY CHOOSE US (kept minimal) ================= */}
          <section className="section-padding bg-secondary">
            <div className="section-container">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Why Choose Us
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  At {BUSINESS_INFO.name}, we focus on comfort, clear communication, and a patient-friendly experience.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {WHY_CHOOSE_US.map((item, index) => {
                  const IconComponent = iconMap[item.icon] || Heart;
                  return (
                      <div
                          key={item.title}
                          className="bg-background rounded-xl p-6 shadow-card border border-border/50"
                          style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ================= REST OF PAGE ================= */}
          {/* Keep your reviews, CTA, map sections here if you have them in your project */}
        </main>

        {/* ✅ Floating WhatsApp Button (always visible) */}
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="
          fixed z-50 bottom-20 right-4
          lg:bottom-6 lg:right-6
          flex items-center gap-2
          rounded-full shadow-lg
          bg-emerald-600 text-white
          px-4 py-3
          hover:brightness-110
          active:scale-[0.98]
          transition
          focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2
        "
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>

        {/* ================= MOBILE STICKY CTA ================= */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border lg:hidden">
          <div className="grid grid-cols-2">
            <a
                href={BUSINESS_INFO.contact.phoneHref}
                className="flex items-center justify-center gap-2 py-3 font-semibold text-primary"
            >
              <Phone className="h-5 w-5" />
              Call
            </a>
            <Link
                to="/booking"
                className="flex items-center justify-center gap-2 py-3 font-semibold bg-primary text-primary-foreground"
            >
              <Calendar className="h-5 w-5" />
              Book
            </Link>
          </div>
        </div>
      </>
  );
}
