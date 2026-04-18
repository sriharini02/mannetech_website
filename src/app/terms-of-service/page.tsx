"use client";

import Link from "next/link";
import Reveal, { RevealText } from "@/components/Reveal";
import { COMPANY } from "@/lib/constants";

export default function TermsOfServicePage() {
  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow flex items-center gap-2 mb-10 hover:text-ink transition-colors">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">Terms of Service</span>
            </Link>
          </Reveal>

          <Reveal animation="fade-up">
            <p className="eyebrow mb-6 flex items-center">
              <span className="eyebrow-dot" />
              Legal
            </p>
          </Reveal>

          <RevealText
            as="h1"
            text="Terms of"
            className="display-serif text-[18vw] md:text-[12vw] lg:text-[9vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal"
            delay={0.1}
          />
          <h1 className="display-serif text-[18vw] md:text-[12vw] lg:text-[9vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal">
            <em className="italic text-gold-deep">service</em>
            <span className="text-gold">.</span>
          </h1>

          <Reveal animation="fade-up" delay={0.6}>
            <p className="font-mono text-xs text-graphite mt-8 tracking-wider">
              [ Last updated: April 2026 ]
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ CONTENT ══════════════════════ */}
      <section className="relative py-16 md:py-24 bg-bone border-t border-hairline">
        <div className="wrap max-w-[840px] mx-auto">
          <Reveal animation="fade-up">
            <div className="space-y-12">
              {[
                {
                  title: "1. Acceptance of Terms",
                  body: `By accessing or using the website and services of ${COMPANY.name} ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.`,
                },
                {
                  title: "2. Services",
                  body: `${COMPANY.name} provides information technology consulting, software development, IT staffing, cloud computing, managed IT services, and related technology solutions. The specific scope, deliverables, and terms of any engagement will be defined in a separate Statement of Work (SOW) or service agreement.`,
                },
                {
                  title: "3. User Responsibilities",
                  body: "When using our website and services, you agree to:",
                  bullets: [
                    "Provide accurate, current, and complete information in all forms and communications.",
                    "Use our website and services only for lawful purposes.",
                    "Not engage in any activity that disrupts or interferes with our website or services.",
                    "Not attempt to gain unauthorized access to any portion of our systems.",
                    "Not reproduce, distribute, or create derivative works of our content without written permission.",
                  ],
                },
                {
                  title: "4. Intellectual Property",
                  body: `All content on this website — including text, graphics, logos, images, software, and code — is the property of ${COMPANY.name} or its licensors and is protected by United States and international copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.`,
                },
                {
                  title: "5. Confidentiality",
                  body: "Any non-public information shared between parties during the course of engagement, including but not limited to business strategies, technical specifications, and proprietary data, shall be treated as confidential. Neither party shall disclose confidential information to any third party without prior written consent.",
                },
                {
                  title: "6. Payment Terms",
                  body: "Payment terms for services will be outlined in the applicable SOW or service agreement. Unless otherwise agreed upon, invoices are due within thirty (30) days of the invoice date. Late payments may incur interest at a rate of 1.5% per month or the maximum rate permitted by law, whichever is lower.",
                },
                {
                  title: "7. Limitation of Liability",
                  body: `To the maximum extent permitted by law, ${COMPANY.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of our website or services. Our total aggregate liability shall not exceed the amount paid by you to us for the specific service giving rise to the claim.`,
                },
                {
                  title: "8. Disclaimer of Warranties",
                  body: `Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the operation of our website, the accuracy of information provided, or the suitability of our services for any particular purpose.`,
                },
                {
                  title: "9. Indemnification",
                  body: `You agree to indemnify and hold harmless ${COMPANY.name}, its officers, directors, employees, and agents from any claims, losses, damages, liabilities, and expenses (including reasonable attorneys' fees) arising from your use of our website or services or your violation of these Terms.`,
                },
                {
                  title: "10. Termination",
                  body: "We may terminate or suspend your access to our website and services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.",
                },
                {
                  title: "11. Governing Law",
                  body: "These Terms shall be governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Middlesex County, New Jersey.",
                },
                {
                  title: "12. Changes to Terms",
                  body: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website or services after any modification constitutes your acceptance of the revised Terms.",
                },
              ].map((section, i) => (
                <div key={i}>
                  <h2 className="display-serif text-2xl md:text-3xl text-ink font-normal mb-4">
                    {section.title}
                  </h2>
                  {section.body && (
                    <p className="text-ink/70 text-base leading-relaxed mb-3">
                      {section.body}
                    </p>
                  )}
                  {section.bullets && (
                    <ul className="space-y-2.5 mt-4">
                      {section.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-ink/70 text-base leading-relaxed">
                          <span className="text-gold-deep mt-1.5 shrink-0 w-1 h-1 bg-gold rounded-full" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div>
                <h2 className="display-serif text-2xl md:text-3xl text-ink font-normal mb-4">
                  13. Contact us
                </h2>
                <p className="text-ink/70 text-base leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-ivory border border-hairline p-6">
                  <p className="font-display font-semibold text-ink">{COMPANY.name}</p>
                  <p className="text-sm text-ink/70 mt-1">{COMPANY.address}</p>
                  <p className="text-sm text-ink/70 mt-1">
                    Email:{" "}
                    <a href={`mailto:${COMPANY.email}`} className="text-gold-deep hover:underline">
                      {COMPANY.email}
                    </a>
                  </p>
                  <p className="text-sm text-ink/70 mt-1">Phone: {COMPANY.phone}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
