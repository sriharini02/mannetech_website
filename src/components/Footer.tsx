"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import Reveal from "./Reveal";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Ambient accent gradient glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      {/* CTA Banner */}
      <section className="relative wrap py-16 sm:py-20 md:py-24 lg:py-32 border-b border-white/10">
        <Reveal>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-ivory font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-2.5 shrink-0" />
            <span>Let's engineer your digital future</span>
          </span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_auto] gap-6 sm:gap-10 lg:gap-16 items-end">
          <Reveal animation="fade-up" delay={0.1}>
            <h2 className="display-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white">
              Ready to transform
              <br />
              your <em className="text-accent">enterprise?</em>
            </h2>
          </Reveal>

          <Reveal animation="fade-up" delay={0.2}>
            <div className="flex flex-col gap-3 sm:gap-4 md:items-end">
              <Link href="/contact" className="btn-primary justify-center sm:justify-start text-sm sm:text-base">
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
                  </Link>
           
                        <Link
                              href="/book-appointment"
                              className="hidden lg:inline-flex btn-ghost text-sm"
                            >
                              <span>Schedule a Discovery Call</span>
                              <ArrowUpRight className="w-3.5 h-3.5 btn-arrow" strokeWidth={2} />
                            </Link>
             </div>
          </Reveal>
        </div>
      </section>

      {/* Main Footer */}
      <section className="relative wrap py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-6">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group mb-4 sm:mb-6">
              <div className="leading-none">
                <p className="font-display text-xl sm:text-2xl font-semibold text-white">Manne</p>
                <p className="font-mono text-[10px] tracking-[0.22em] text-accent uppercase mt-0.5">
                  Technologies
                </p>
              </div>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-6 sm:mb-8">
              {COMPANY.shortDescription}
            </p>
            <div className="flex gap-2">
              {[
                { icon: Linkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: COMPANY.social.twitter, label: "Twitter" },
                { icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-primary hover:bg-accent hover:border-accent transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-accent mb-3 sm:mb-5">Services</p>
            <ul className="space-y-2 sm:space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors block py-0.5"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-accent hover:text-accent-light transition-colors block py-0.5">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-accent mb-3 sm:mb-5">Company</p>
            <ul className="space-y-2 sm:space-y-2.5">
              <li><Link href="/about" className="text-sm text-text-secondary hover:text-accent transition-colors block py-0.5">About</Link></li>
              <li><Link href="/services" className="text-sm text-text-secondary hover:text-accent transition-colors block py-0.5">Services</Link></li>
              <li><Link href="/careers" className="text-sm text-text-secondary hover:text-accent transition-colors block py-0.5">Careers</Link></li>
              <li><Link href="/book-appointment" className="text-sm text-text-secondary hover:text-accent transition-colors block py-0.5">Book a Call</Link></li>
              <li><Link href="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors block py-0.5">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-4">
            <p className="eyebrow text-accent mb-3 sm:mb-5">Visit / Write</p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-text-secondary">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${COMPANY.phoneHref}`} className="text-sm text-text-secondary hover:text-accent transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-text-secondary hover:text-accent transition-colors break-all">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
            <p className="eyebrow text-accent mt-6 sm:mt-8 mb-3">Hours</p>
            <p className="text-sm text-text-secondary">{COMPANY.hours}</p>
          </div>
        </div>
      </section>

      {/* Oversized wordmark */}
      <section className="relative wrap pb-2 sm:pb-4 pointer-events-none select-none overflow-hidden">
        <p className="display-serif text-[170vw] sm:text-[8vw] leading-none tracking-tighter text-white/[0.04] font-semibold whitespace-nowrap">
          MANNE TECHNOLOGIES
        </p>
      </section>

      {/* Bottom bar */}
      <section className="relative border-t border-white/10">
        <div className="wrap py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-white/60 text-center sm:text-left">
            © {year} {COMPANY.legal}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <span className="text-xs text-white/50 font-mono">v1.0</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
