import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BUSINESS_INFO, SEO_METADATA, SERVICES_DATA } from "@/lib/constants";
import { Phone, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(9, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  notes: z.string().max(500).optional(),
});

export default function BookingPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (honeypot) {
      return;
    }

    setErrors({});
    
    try {
      const validated = bookingSchema.parse(formData);
      setIsSubmitting(true);
      
      // Simulate submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast({
        title: "Appointment Request Sent!",
        description: "We'll contact you to confirm your appointment.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <SEOHead
          title={SEO_METADATA.booking.title}
          description={SEO_METADATA.booking.description}
          keywords={SEO_METADATA.booking.keywords}
        />
        
        <main className="min-h-[70vh] flex items-center justify-center py-12">
          <div className="section-container">
            <Card className="max-w-lg mx-auto border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-3">
                  Appointment Request Received!
                </h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for choosing {BUSINESS_INFO.name}. We've received your appointment request and will contact you shortly to confirm the details.
                </p>
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    If you need immediate assistance, please call us:
                  </p>
                  <a
                    href={BUSINESS_INFO.contact.phoneHref}
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    {BUSINESS_INFO.contact.phone}
                  </a>
                </div>
                <Button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      service: "",
                      preferredDate: "",
                      preferredTime: "",
                      notes: "",
                    });
                  }}
                  variant="outline"
                >
                  Book Another Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={SEO_METADATA.booking.title}
        description={SEO_METADATA.booking.description}
        keywords={SEO_METADATA.booking.keywords}
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero */}
        <section className="gradient-hero py-12 lg:py-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Book an Appointment
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Request your appointment online. We'll contact you to confirm the date and time.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="border-border/50">
                  <CardContent className="p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot */}
                      <input
                        type="text"
                        name="company"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your full name"
                            className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive">{errors.name}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Your phone number"
                            className={errors.phone ? "border-destructive" : ""}
                          />
                          {errors.phone && (
                            <p className="text-sm text-destructive">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email (Optional)</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {SERVICES_DATA.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.name}
                              </SelectItem>
                            ))}
                            <SelectItem value="consultation">General Consultation</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p className="text-sm text-destructive">{errors.service}</p>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date *</Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            min={today}
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className={errors.preferredDate ? "border-destructive" : ""}
                          />
                          {errors.preferredDate && (
                            <p className="text-sm text-destructive">{errors.preferredDate}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredTime">Preferred Time *</Label>
                          <Select
                            value={formData.preferredTime}
                            onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                          >
                            <SelectTrigger className={errors.preferredTime ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (3:00 PM - 5:00 PM)</SelectItem>
                              <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.preferredTime && (
                            <p className="text-sm text-destructive">{errors.preferredTime}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Any specific concerns or information we should know?"
                          rows={4}
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto gap-2"
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            <Calendar className="h-4 w-4" />
                            Request Appointment
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Need Immediate Assistance?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      For urgent matters or to book immediately, please call us:
                    </p>
                    <a href={BUSINESS_INFO.contact.phoneHref}>
                      <Button variant="default" className="w-full gap-2">
                        <Phone className="h-4 w-4" />
                        {BUSINESS_INFO.contact.phone}
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-muted">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">
                      What Happens Next?
                    </h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">1</span>
                        <span>We receive your appointment request</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">2</span>
                        <span>Our team reviews your preferred date and time</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">3</span>
                        <span>We call or message you to confirm your appointment</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <div className="p-4 rounded-lg bg-secondary text-sm text-muted-foreground">
                  <p>
                    <strong>Note:</strong> This form sends an appointment request. Your appointment is confirmed only after you receive confirmation from our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
