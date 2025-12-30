import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BUSINESS_INFO, SEO_METADATA, FAQ_DATA } from "@/lib/constants";

export default function FAQPage() {
  return (
    <>
      <SEOHead title={SEO_METADATA.faq.title} description={SEO_METADATA.faq.description} keywords={SEO_METADATA.faq.keywords} />
      <main className="pb-20 lg:pb-0">
        <section className="gradient-hero py-12 lg:py-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about dental care and our services.</p>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="section-container max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_DATA.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="text-sm text-muted-foreground mt-8 text-center">Have more questions? <a href={BUSINESS_INFO.contact.phoneHref} className="text-primary hover:underline">Call us at {BUSINESS_INFO.contact.phone}</a></p>
          </div>
        </section>
      </main>
    </>
  );
}
