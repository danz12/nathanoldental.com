import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS_INFO, SEO_METADATA, SERVICES_DATA } from "@/lib/constants";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title={SEO_METADATA.services.title}
        description={SEO_METADATA.services.description}
        keywords={SEO_METADATA.services.keywords}
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero */}
        <section className="gradient-hero py-12 lg:py-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Dental Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care for you and your family. From preventive care to specialized treatments, we're here to help you achieve optimal oral health.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid gap-8">
              {SERVICES_DATA.map((service, index) => (
                <Card 
                  key={service.id} 
                  id={service.id}
                  className="overflow-hidden border-border/50 scroll-mt-24"
                >
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Image placeholder */}
                      <div className="bg-secondary aspect-video md:aspect-auto flex items-center justify-center">
                        <div className="text-center p-6">
                          <span className="text-4xl mb-2 block">🦷</span>
                          <p className="text-xs text-muted-foreground">
                            [Service Image]
                          </p>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            {service.isPlaceholder && (
                              <span className="inline-block text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full mb-2">
                                Confirm service details
                              </span>
                            )}
                            <h2 className="text-2xl font-bold text-foreground">
                              {service.name}
                            </h2>
                          </div>
                          {service.duration && (
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {service.duration}
                            </div>
                          )}
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold text-foreground mb-2">What to Expect</h3>
                          <p className="text-sm text-muted-foreground">
                            {service.whatToExpect}
                          </p>
                        </div>

                        <Link to="/booking">
                          <Button variant="cta" className="gap-2">
                            <Calendar className="h-4 w-4" />
                            Book Appointment
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-12 p-6 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground">
                <strong>Medical Disclaimer:</strong> The information provided on this page is for educational purposes only and is not intended as medical advice. Please consult with our dental professionals for personalized treatment recommendations. Treatment outcomes may vary based on individual circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Schedule a consultation and our team will help determine the best treatment plan for your needs.
            </p>
            <Link to="/booking">
              <Button variant="white" size="lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
