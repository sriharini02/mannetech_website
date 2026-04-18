"use client";

import Link from "next/link";
import Reveal, { RevealText } from "@/components/Reveal";
import { COMPANY } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow flex items-center gap-2 mb-10 hover:text-ink transition-colors">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">Privacy Policy</span>
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
            text="Privacy"
            className="display-serif text-[18vw] md:text-[12vw] lg:text-[9vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal"
            delay={0.1}
          />
          <h1 className="display-serif text-[18vw] md:text-[12vw] lg:text-[9vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal">
            <em className="italic text-gold-deep">policy</em>
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
                  title: "1. Introduction",
                  body: `${COMPANY.name} ("Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`,
                },
                {
                  title: "2. Information We Collect",
                  body: "We may collect the following types of personal information:",
                  bullets: [
                    "Contact Information: Name, email address, phone number, mailing address.",
                    "Professional Information: Resume, job title, company name, work experience.",
                    "Technical Data: IP address, browser type, operating system, referring URLs, and browsing behavior on our site.",
                    "Communication Data: Records of correspondence when you contact us via forms, email, or phone.",
                    "Appointment Data: Date, time, and notes related to scheduled appointments.",
                  ],
                },
                {
                  title: "3. How We Use Your Information",
                  bullets: [
                    "To provide, operate, and maintain our services.",
                    "To respond to your inquiries, process your requests, and send administrative communications.",
                    "To process job applications and facilitate recruitment.",
                    "To improve our website, services, and user experience.",
                    "To comply with applicable laws, regulations, and legal processes.",
                    "To detect, prevent, and address fraud, security issues, or technical problems.",
                  ],
                },
                {
                  title: "4. Information Sharing",
                  body: "We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.",
                },
                {
                  title: "5. Cookies & Tracking Technologies",
                  body: "Our website may use cookies and similar tracking technologies to enhance user experience, analyze site traffic, and understand usage patterns. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of the website.",
                },
                {
                  title: "6. Data Security",
                  body: "We implement commercially reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
                },
                {
                  title: "7. Data Retention",
                  body: "We retain personal data only for as long as is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law. When data is no longer needed, we will securely delete or anonymize it.",
                },
                {
                  title: "8. Your Rights",
                  body: "Depending on your jurisdiction, you may have the right to:",
                  bullets: [
                    "Access the personal data we hold about you.",
                    "Request correction of inaccurate or incomplete data.",
                    "Request deletion of your personal data.",
                    "Object to or restrict the processing of your data.",
                    "Withdraw consent at any time where processing is based on consent.",
                  ],
                  footer: `To exercise any of these rights, please contact us at info@hansolutions.com.`,
                },
                {
                  title: "9. Third-Party Links",
                  body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of such websites. We encourage you to review the privacy policies of any third-party sites you visit.",
                },
                {
                  title: "10. Changes to This Policy",
                  body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of our website after any changes constitutes acceptance of the revised policy.",
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
                  {section.footer && (
                    <p className="text-ink/70 text-base leading-relaxed mt-3">
                      {section.footer}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <h2 className="display-serif text-2xl md:text-3xl text-ink font-normal mb-4">
                  11. Contact us
                </h2>
                <p className="text-ink/70 text-base leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, please contact us:
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
