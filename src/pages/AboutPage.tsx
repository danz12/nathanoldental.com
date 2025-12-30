import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS_INFO, SEO_METADATA } from "@/lib/constants";
import { Link } from "react-router-dom";
import { Heart, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title={SEO_METADATA.about.title}
        description={SEO_METADATA.about.description}
        keywords={SEO_METADATA.about.keywords}
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero */}
        <section className="gradient-hero py-12 lg:py-20">
          <div className="section-container">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                About {BUSINESS_INFO.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                Your trusted partner for comprehensive dental care in Addis Ababa, Ethiopia.
              </p>
            </div>
          </div>
        </section>

        {/* Clinic Overview */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full mb-4">
                  Editable / To Confirm
                </span>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Welcome to Our Clinic
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {BUSINESS_INFO.name} is a modern dental facility located in Addis Ababa, Ethiopia. We are dedicated to providing high-quality dental care in a comfortable and welcoming environment.
                  </p>
                  <p>
                    Our clinic is equipped with contemporary dental technology and staffed by experienced professionals who are committed to your oral health and well-being.
                  </p>
                  <p>
                    We believe that everyone deserves access to excellent dental care, and we strive to make your visit as comfortable and stress-free as possible.
                  </p>
                </div>
              </div>
              
              {/* Image placeholder */}
              <div className="rounded-xl overflow-hidden bg-secondary aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-5xl mb-4 block">🏥</span>
                  <p className="text-muted-foreground text-sm">
                    [Clinic Interior Photo]<br />
                    Replace with actual clinic image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-padding bg-secondary">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Mission & Values
              </h2>
              <span className="inline-block text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                Editable / To Confirm
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To provide exceptional dental care that improves our patients' oral health and enhances their quality of life.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    To be the leading dental care provider in Addis Ababa, known for excellence, compassion, and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Values</h3>
                  <p className="text-sm text-muted-foreground">
                    Patient care, integrity, continuous improvement, and creating a positive experience for every visitor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinic Environment */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Facilities
              </h2>
              <p className="text-muted-foreground">
                Take a look at our modern, comfortable clinic environment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Reception Area", caption: "Welcoming and comfortable waiting space" },
                { title: "Treatment Rooms", caption: "Modern equipment for optimal care" },
                { title: "Consultation Room", caption: "Private space for discussing your needs" },
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="rounded-xl overflow-hidden bg-secondary aspect-video flex items-center justify-center mb-3">
                    <div className="text-center p-4">
                      <span className="text-3xl mb-2 block">📷</span>
                      <p className="text-xs text-muted-foreground">
                        [Photo Placeholder]
                      </p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Our Care?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Schedule your visit and discover why patients trust {BUSINESS_INFO.name} for their dental needs.
            </p>
            <Link to="/booking">
              <Button variant="white" size="lg">
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
