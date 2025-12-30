import { SEOHead } from "@/components/SEOHead";
import { BUSINESS_INFO, SEO_METADATA } from "@/lib/constants";

export default function TermsPage() {
  return (
    <>
      <SEOHead title={SEO_METADATA.terms.title} description={SEO_METADATA.terms.description} />
      <main className="pb-20 lg:pb-0 section-padding">
        <div className="section-container max-w-3xl prose prose-slate">
          <h1>Terms of Service</h1>
          <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
          <p>By using the {BUSINESS_INFO.name} website and services, you agree to these terms.</p>
          <h2>Medical Disclaimer</h2>
          <p>Information on this website is for educational purposes only and does not constitute medical advice. Always consult with our dental professionals for personalized treatment.</p>
          <h2>Appointments</h2>
          <p>Online booking requests require confirmation from our team. We reserve the right to reschedule appointments when necessary.</p>
          <h2>Limitation of Liability</h2>
          <p>We strive to provide accurate information but make no warranties about the completeness or reliability of website content.</p>
          <h2>Contact</h2>
          <p>Questions? Contact us at {BUSINESS_INFO.contact.phone}.</p>
        </div>
      </main>
    </>
  );
}
