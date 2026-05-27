"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import VerticalMarquee from "@/components/VerticalMarquee";
import { COMPANY, PAGES, TESTIMONIALS, PAGE_IMAGES, PRINCIPLES } from "@/lib/constants";

export default function AboutPage() {
  const pA = PAGES.about;

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 md:pt-48 md:pb-32 overflow-hidden bg-hero-gradient">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 hover:text-ivory transition-colors text-[1rem] sm:text-[rem]">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">About</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <RevealText
                as="h1"
                text={pA.hero.headline}
                className="display-serif text-[12vw] sm:text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal"
                delay={0.1}
              />
              <h1 className="display-serif text-[12vw] sm:text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="italic inline-block text-gold-deep"
                  >
                    {pA.hero.emphasis}
                  </motion.em>
                </span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="inline-block text-gold"
                >
                  .
                </motion.span>
              </h1>
            </div>

            <Reveal animation="fade-up" delay={0.4} className="lg:col-span-4">
              <p className="text-ivory/70 text-base sm:text-lg leading-relaxed font-light mb-4 sm:mb-6">
                {pA.hero.description}
              </p>
              <Link href="/services" className="btn-primary text-sm sm:text-base">
                <span>Explore services</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      
      {/* ══════════════════════ MISSION ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 border-y border-border bg-card">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16">
          <Reveal animation="fade-up" className="lg:col-span-4">
            <p className="eyebrow text-ink mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="eyebrow-dot" />
              {pA.mission.eyebrow}
            </p>
            <h2 className="display-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-ink font-normal">
              {pA.mission.heading}{" "}
              <em className="italic text-accent-dark">{pA.mission.emphasis}</em>
            </h2>
            <div className="w-10 h-10 sm:w-14 sm:h-14 mt-6 sm:mt-10 rounded-full bg-ink flex items-center justify-center">
              <span className="text-gold text-[10px] sm:text-sm font-bold">MT</span>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6 space-y-4 sm:space-y-6">
            {pA.mission.paragraphs.map((para, i) => (
              <Reveal key={i} animation="fade-up" delay={0.1 + i * 0.1}>
                <p className={`${i === 0 ? "text-ink/75 text-base sm:text-lg leading-relaxed font-light" : "text-ink/70 text-sm sm:text-base leading-relaxed"}`}>
                  {para}
                </p>
              </Reveal>
            ))}

            <Reveal animation="fade-up" delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-6 sm:mt-10 border-t border-l border-r border-border">
                {pA.stats.map((item, i) => (
                  <div
                    key={i}
                    className="py-4 sm:py-6 px-3 sm:px-4 text-center border-b border-r border-border last:border-r-0"
                  >
                    <p className="display-serif text-2xl sm:text-3xl md:text-4xl text-ink font-semibold leading-none mb-2 sm:mb-3">
                      {item.number}
                    </p>
                    <p className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-accent-dark mb-1">
                      {item.label}
                    </p>
                    <p className="text-[10px] sm:text-xs text-ink/50 leading-relaxed">{item.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════ EXPERTISE ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-10 sm:mb-14">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <p className="eyebrow text-ink mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                <span className="eyebrow-dot" />
                {pA.expertise.eyebrow}
              </p>
              <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal">
                Deep expertise
                <br />
                across the{" "}
                <em className="italic text-accent-dark">enterprise stack</em>.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-border">
            {pA.expertise.items.map((item, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.07}>
                <div className="p-4 sm:p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-border last:border-r-0 h-full group hover:bg-card/60 transition-colors">
                  <span className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-graphite text-ink/50 block mb-3 sm:mb-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-serif text-sm sm:text-xl md:text-2xl text-ink mb-2 sm:mb-3 font-normal group-hover:text-accent-dark transition-colors">
                    {item}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PRINCIPLES ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-card">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-10 sm:mb-16">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <p className="eyebrow text-ink mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                <span className="eyebrow-dot" />
                How we work
              </p>
              <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal">
                Outcome-driven.
                <br />
                Enterprise-grade.
                <br />
                <em className="italic">Partnership-led.</em>
              </h2>
            </Reveal>

            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-border">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.1}>
                <div className="p-5 sm:p-8 md:p-10 border-b md:border-b border-border md:border-r group hover:bg-white/60 transition-colors h-full">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <span className="display-serif italic text-3xl sm:text-5xl md:text-6xl text-accent-dark/60 group-hover:text-accent-dark transition-colors leading-none font-medium">
                      {p.number}
                    </span>
                    <span className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-graphite text-ink/50">
                      0{i + 1} / 06
                    </span>
                  </div>
                  <h3 className="display-serif text-lg sm:text-2xl md:text-3xl text-ink mb-2 sm:mb-3 font-normal leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-ink/60 text-xs sm:text-sm leading-relaxed max-w-md">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TRUST INDICATORS ══════════════════════ */}
      <section className="py-16 sm:py-24 md:py-36 bg-primary text-white relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-accent/10 blur-[140px] rounded-full" />
        <div className="wrap relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
          <Reveal animation="fade-up" className="lg:col-span-5">
            <p className="eyebrow text-gold mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-3 shrink-0" />
              Enterprise Trust
            </p>
            <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-white font-normal mb-6 sm:mb-8">
              Certified, compliant,
              <br />
              <em className="italic text-gold">enterprise-ready.</em>
            </h2>
            <Link href="/contact" className="btn-primary bg-accent border-gold text-ivory text-sm sm:text-base">
              <span>Discuss your needs</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>

          <Reveal animation="fade-up" delay={0.15} className="lg:col-span-6 lg:col-start-7 space-y-4 sm:space-y-5">
            <p className="text-white/75 text-sm sm:text-base leading-relaxed font-light">
              What differentiates {COMPANY.name} is our commitment to enterprise-grade quality, security, and governance. Our delivery frameworks are built for the rigor of Fortune 500 environments, with comprehensive compliance and risk management practices.
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              {COMPANY.shortName} maintains ISO 27001 certification, SOC 2 compliance, and follows industry-standard frameworks including ITIL, COBIT, and PMBOK. Every engagement is governed by clear SLAs, defined outcomes, and transparent reporting.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-4 sm:pt-8">
              {[
                "ISO 27001 Certified",
                "SOC 2 Compliant",
                "ITIL Framework",
                "GDPR Compliant",
                "HIPAA Experienced",
                "PCI DSS Knowledge",
                "Agile at Scale",
                "24/7 Global Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" strokeWidth={1.5} />
                  <span className="text-xs sm:text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ CAREER CTA ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          <Reveal animation="fade-up" className="lg:col-span-6">
            <p className="eyebrow text-ink mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="eyebrow-dot" />
              Join our team
            </p>
            <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal mb-4 sm:mb-6">
              Looking for a
              <br />
              career with <em className="italic text-accent-dark">impact?</em>
            </h2>
            <p className="text-ink/60 text-base sm:text-lg leading-relaxed font-light max-w-md mb-6 sm:mb-8">
              Join a global team of {COMPANY.employees} technology professionals delivering enterprise-scale solutions for the world's most ambitious organizations.
            </p>
            <Link href="/careers" className="btn-primary text-sm sm:text-base">
              <span>View open positions</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>

          <Reveal animation="fade-up" delay={0.2} className="lg:col-span-5 lg:col-start-8">
            <ParallaxImage amount={30} className="aspect-[3/2] frame-inset max-w-md mx-auto lg:mx-0">
              <Image
                src={PAGE_IMAGES.aboutTeam}
                alt="Manne Technologies team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </ParallaxImage>
            <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-1.5 sm:gap-2">
              {["Consulting", "Engineering", "AI/ML", "Cloud", "Security", "SAP"].map((d) => (
                <div key={d} className="py-1.5 sm:py-2.5 text-center border border-border">
                  <span className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-ink/60">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-card border-t border-border">
        <div className="wrap">
          <Reveal animation="fade-up" className="mb-8 sm:mb-14">
            <p className="eyebrow text-ink mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="eyebrow-dot" />
              Client stories
            </p>
            <h2 className="display-serif text-3xl sm:text-4xl md:text-5xl leading-[1] tracking-tight text-ink font-normal">
              What they <em className="italic">say</em>.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Left column - scrolls up */}
            <div className="relative overflow-hidden" style={{ maxHeight: "36rem" }}>
              <VerticalMarquee direction="up" speed={35}>
                {TESTIMONIALS.slice(0, 4).map((t, i) => (
                  <div key={i} className="p-6 sm:p-8 bg-white border border-border rounded-2xl mb-4 sm:mb-5 flex flex-col group">
                    <span className="display-serif italic text-4xl sm:text-5xl text-accent leading-none mb-2 sm:mb-3">
                      &ldquo;
                    </span>
                    <p className="pull-quote text-base sm:text-lg text-ink leading-[1.3] flex-1 mb-4 sm:mb-5">
                      {t.quote}
                    </p>
                    <div className="flex gap-0.5 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-accent text-accent" strokeWidth={0} />
                      ))}
                    </div>
                    <div className="border-t border-border pt-3 sm:pt-4">
                      <p className="font-display text-xs sm:text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-[10px] sm:text-xs text-ink/50 mt-0.5">{t.role} · {t.company}</p>
                    </div>
                  </div>
                ))}
              </VerticalMarquee>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-card to-transparent pointer-events-none z-10" />
            </div>

            {/* Right column - scrolls down */}
            <div className="relative overflow-hidden hidden md:block" style={{ maxHeight: "36rem" }}>
              <VerticalMarquee direction="down" speed={35}>
                {TESTIMONIALS.slice(3).map((t, i) => (
                  <div key={i} className="p-6 sm:p-8 bg-white border border-border rounded-2xl mb-4 sm:mb-5 flex flex-col group">
                    <span className="display-serif italic text-4xl sm:text-5xl text-accent leading-none mb-2 sm:mb-3">
                      &ldquo;
                    </span>
                    <p className="pull-quote text-base sm:text-lg text-ink leading-[1.3] flex-1 mb-4 sm:mb-5">
                      {t.quote}
                    </p>
                    <div className="flex gap-0.5 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-accent text-accent" strokeWidth={0} />
                      ))}
                    </div>
                    <div className="border-t border-border pt-3 sm:pt-4">
                      <p className="font-display text-xs sm:text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-[10px] sm:text-xs text-ink/50 mt-0.5">{t.role} · {t.company}</p>
                    </div>
                  </div>
                ))}
              </VerticalMarquee>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-card to-transparent pointer-events-none z-10" />
            </div>

            {/* Mobile single column - scrolls up */}
            <div className="relative overflow-hidden md:hidden" style={{ maxHeight: "36rem" }}>
              <VerticalMarquee direction="up" speed={30}>
                {TESTIMONIALS.slice(3).map((t, i) => (
                  <div key={i} className="p-6 sm:p-8 bg-white border border-border rounded-2xl mb-4 sm:mb-5 flex flex-col group">
                    <span className="display-serif italic text-4xl sm:text-5xl text-accent leading-none mb-2 sm:mb-3">
                      &ldquo;
                    </span>
                    <p className="pull-quote text-base sm:text-lg text-ink leading-[1.3] flex-1 mb-4 sm:mb-5">
                      {t.quote}
                    </p>
                    <div className="flex gap-0.5 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-accent text-accent" strokeWidth={0} />
                      ))}
                    </div>
                    <div className="border-t border-border pt-3 sm:pt-4">
                      <p className="font-display text-xs sm:text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-[10px] sm:text-xs text-ink/50 mt-0.5">{t.role} · {t.company}</p>
                    </div>
                  </div>
                ))}
              </VerticalMarquee>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-card to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
