import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS_INFO, SEO_METADATA, TEAM_DATA } from "@/lib/constants";
import { Link } from "react-router-dom";
import { Languages, Calendar } from "lucide-react";

export default function TeamPage() {
  return (
    <>
      <SEOHead
        title={SEO_METADATA.team.title}
        description={SEO_METADATA.team.description}
        keywords={SEO_METADATA.team.keywords}
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero */}
        <section className="gradient-hero py-12 lg:py-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced dental professionals are dedicated to providing you with the highest quality care.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_DATA.map((member) => (
                <Card key={member.id} className="overflow-hidden border-border/50">
                  <CardContent className="p-0">
                    {/* Photo placeholder */}
                    <div className="bg-secondary aspect-square flex items-center justify-center relative">
                      <div className="text-center p-6">
                        <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-3">
                          <span className="text-3xl">👤</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          [Photo Placeholder]
                        </p>
                      </div>
                      {member.isPlaceholder && (
                        <span className="absolute top-3 right-3 text-[10px] bg-background text-muted-foreground px-2 py-0.5 rounded-full">
                          To Confirm
                        </span>
                      )}
                    </div>
                    
                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">{member.title}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Specialization: {member.specialization}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {member.bio}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Languages className="h-4 w-4" />
                        <span>{member.languages.join(", ")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Note about placeholders */}
            <div className="mt-12 p-6 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Note:</strong> Team member profiles shown are placeholders. Please provide actual team member names, titles, photos, and bios to complete this section.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Meet Our Team?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Book an appointment and experience our professional, patient-centered care firsthand.
            </p>
            <Link to="/booking">
              <Button variant="white" size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
