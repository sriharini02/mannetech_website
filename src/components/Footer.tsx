"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import Logo from "./Logo";
import Reveal from "./Reveal";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory relative overflow-hidden">
      {/* Ambient gold gradient glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      {/* CTA Banner */}
      <section className="relative wrap py-24 md:py-32 border-b border-ivory/10">
        <Reveal>
          <p className="eyebrow text-gold mb-6 flex items-center">
            <span className="w-2 h-2 bg-gold rounded-full mr-3" />
            Let's build something lasting
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_auto] gap-10 lg:gap-16 items-end">
          <Reveal animation="fade-up" delay={0.1}>
            <h2 className="display-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ivory">
              Ready to begin
              <br />
              the <em className="text-gold">next chapter?</em>
            </h2>
          </Reveal>

          <Reveal animation="fade-up" delay={0.2}>
            <div className="flex flex-col gap-4 md:items-end">
              <Link href="/contact" className="btn-primary bg-gold border-gold text-ink hover:text-ink">
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
              </Link>
              <Link href="/book-appointment" className="text-ivory/70 hover:text-gold text-sm transition-colors">
                or schedule a discovery call →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Footer */}
      <section className="relative wrap py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 pr-6">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <Logo variant="mark" className="w-10 h-10" hColor="#0b2545" inkColor="#FBF6EB" goldColor="#F4B942" />
              <div className="leading-none">
                <p className="font-display text-xl font-semibold">Han</p>
                <p className="font-mono text-[10px] tracking-[0.22em] text-ivory/60 uppercase mt-0.5">
                  Solutions
                </p>
              </div>
            </Link>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs mb-8">
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
                  className="w-10 h-10 rounded-full border border-ivory/15 flex items-center justify-center text-ivory/60 hover:text-ink hover:bg-gold hover:border-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="eyebrow text-gold mb-5">Services</p>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-gold hover:text-gold-soft transition-colors">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="eyebrow text-gold mb-5">Company</p>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-ivory/70 hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/it-staffing" className="text-sm text-ivory/70 hover:text-gold transition-colors">IT Staffing</Link></li>
              <li><Link href="/careers" className="text-sm text-ivory/70 hover:text-gold transition-colors">Careers</Link></li>
              <li><Link href="/book-appointment" className="text-sm text-ivory/70 hover:text-gold transition-colors">Book a Call</Link></li>
              <li><Link href="/contact" className="text-sm text-ivory/70 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="eyebrow text-gold mb-5">Visit / Write</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-ivory/70">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${COMPANY.phoneHref}`} className="text-sm text-ivory/70 hover:text-gold transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-ivory/70 hover:text-gold transition-colors">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
            <p className="eyebrow text-gold mt-8 mb-3">Hours</p>
            <p className="text-sm text-ivory/70">{COMPANY.hours}</p>
          </div>
        </div>
      </section>

      {/* Oversized wordmark */}
      <section className="relative wrap pb-4 pointer-events-none select-none">
        <p className="display-serif text-[18vw] leading-none tracking-tighter text-ivory/[0.04] font-semibold -mb-2 whitespace-nowrap">
          HAN SOLUTIONS
        </p>
      </section>

      {/* Bottom bar */}
      <section className="relative border-t border-ivory/10">
        <div className="wrap py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">
            © {year} {COMPANY.legal}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-ivory/40 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-ivory/40 hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <span className="text-xs text-ivory/30 font-mono">v1.0</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
