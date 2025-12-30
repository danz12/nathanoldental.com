import { SEOHead } from "@/components/SEOHead";
import { BUSINESS_INFO, SEO_METADATA } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <>
      <SEOHead title={SEO_METADATA.privacy.title} description={SEO_METADATA.privacy.description} />
      <main className="pb-20 lg:pb-0 section-padding">
        <div className="section-container max-w-3xl prose prose-slate">
          <h1>Privacy Policy</h1>
          <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
          <p>{BUSINESS_INFO.name} ("we", "our", "us") is committed to protecting your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
          <h2>Information We Collect</h2>
          <p>We may collect personal information including your name, phone number, email address, and health information relevant to dental treatment when you book an appointment or contact us.</p>
          <h2>How We Use Your Information</h2>
          <ul><li>To schedule and manage appointments</li><li>To provide dental care and treatment</li><li>To communicate with you about your care</li><li>To improve our services</li></ul>
          <h2>Data Protection</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          <h2>Contact Us</h2>
          <p>For questions about this policy, contact us at {BUSINESS_INFO.contact.phone}.</p>
        </div>
      </main>
    </>
  );
}
