"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealText } from "@/components/Reveal";
import { CASE_STUDIES } from "@/lib/constants";

const benefitIcons = [
  { icon: CheckCircle2 },
  { icon: CheckCircle2 },
  { icon: CheckCircle2 },
  { icon: CheckCircle2 },
];

export default function CaseStudiesPage() {
  const c = CASE_STUDIES;

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-28 sm:pt-40 pb-14 sm:pb-20 md:pt-48 md:pb-28 overflow-hidden bg-hero-gradient">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 hover:text-ivory transition-colors text-[0.6rem] sm:text-[0.7rem]">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">Case Studies</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal animation="fade-up">
                <p className="eyebrow mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-3 animate-pulse shrink-0" />
                  {c.hero.eyebrow}
                </p>
              </Reveal>
              <RevealText
                as="h1"
                text={c.hero.headline}
                className="display-serif text-[12vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal"
                delay={0.1}
              />
              <h1 className="display-serif text-[12vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="italic inline-block text-accent-dark"
                  >
                    {c.hero.emphasis}
                  </motion.em>
                </span>
                <span className="text-gold">.</span>
              </h1>
            </div>
          </div>

          <Reveal animation="fade-up" delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 mt-8 sm:mt-14 md:mt-20">
              <p className="md:col-span-7 text-ivory/70 text-base sm:text-lg leading-relaxed font-light">
                {c.hero.description}
              </p>
              <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3 mt-4 sm:mt-0">
                <Link href={c.hero.primaryHref} className="btn-primary justify-center text-sm sm:text-base">
                  <span>{c.hero.primaryCta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                </Link>
                <Link href={c.hero.secondaryHref} className="btn-ghost justify-center text-sm sm:text-base">
                  <span>{c.hero.secondaryCta}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={1.0}>
            <div className="mt-10 sm:mt-14 md:mt-24 pt-6 sm:pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {c.stats.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col"
                >
                  <p className="display-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory font-semibold leading-none">
                    {m.number}
                  </p>
                  <p className="eyebrow mt-1 sm:mt-2 text-[0.55rem] sm:text-[0.65rem]">{m.label}</p>
                  <p className="font-mono text-[8px] sm:text-[9px] text-graphite mt-0.5">{m.sub}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ INTRO ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 border-t border-border">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center">
            <Reveal animation="fade-up" delay={0.1}>
              <h2 className="display-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink font-normal text-balance">
                {c.intro.heading}
              </h2>
            </Reveal>
            {c.intro.paragraphs.map((para, i) => (
              <Reveal key={i} animation="fade-up" delay={0.15 + i * 0.08}>
                <p className="text-ink/60 text-base sm:text-lg leading-relaxed font-light mt-6 sm:mt-8 max-w-3xl mx-auto">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CASE STUDIES ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-card border-y border-border">
        <div className="wrap">
          {c.caseStudies.map((study, idx) => (
            <div key={study.id} className="mb-16 sm:mb-24 md:mb-28 last:mb-0">
              <Reveal animation="fade-up">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-accent-dark font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase mb-4 sm:mb-5">
                  {study.category}
                </span>
                <h3 className="display-serif text-3xl sm:text-4xl md:text-5xl leading-[1] tracking-tight text-ink font-normal mt-4 sm:mt-6 mb-6 sm:mb-8">
                  {study.title}
                </h3>
              </Reveal>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16">
                <div className="lg:col-span-7">
                  <Reveal animation="fade-up" delay={0.1}>
                    <p className="text-ink/70 text-base sm:text-lg leading-relaxed font-light">
                      {study.description}
                    </p>
                  </Reveal>

                  <Reveal animation="fade-up" delay={0.2}>
                    <h4 className="display-serif text-xl sm:text-2xl text-ink font-normal mt-8 sm:mt-10 mb-4 sm:mb-6">
                      Key Outcomes
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {study.outcomes.map((outcome, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-dark mt-0.5 shrink-0" strokeWidth={1.5} />
                          <span className="text-sm sm:text-base text-ink/80">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

                <div className="lg:col-span-4 lg:col-start-9">
                  <Reveal animation="fade-up" delay={0.15}>
                    <div className="bg-white border border-border rounded-2xl p-5 sm:p-8">
                      <h4 className="eyebrow text-ink mb-4 sm:mb-6 text-[0.6rem] sm:text-[0.65rem]">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex px-3 py-1.5 rounded-full bg-card text-ink font-mono text-[10px] sm:text-xs tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════ INDUSTRIES ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36">
        <div className="wrap">
          <Reveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal mb-4 sm:mb-6">
              {c.industries.heading}
            </h2>
            <p className="text-ink/60 text-base sm:text-lg leading-relaxed font-light">
              {c.industries.description}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-l border-border max-w-4xl mx-auto">
            {c.industries.items.map((item, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.05}>
                <div className="p-5 sm:p-8 border-b border-r border-border h-full">
                  <span className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-accent-dark block mb-2 sm:mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-serif text-base sm:text-xl text-ink font-normal">
                    {item}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FINAL CTA ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-primary text-ivory overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[140px] rounded-full" />
        <div className="wrap relative text-center max-w-3xl mx-auto">
          <Reveal animation="fade-up">
            <p className="eyebrow text-gold mb-4 sm:mb-6 flex items-center justify-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-3 shrink-0" />
              {c.cta.eyebrow}
            </p>
          </Reveal>
          <Reveal animation="fade-up" delay={0.1}>
            <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal mb-6 sm:mb-8">
              {c.cta.heading}
              <br />
              <em className="italic text-gold">{c.cta.emphasis}</em>
            </h2>
          </Reveal>
          <Reveal animation="fade-up" delay={0.2}>
            <p className="text-ivory/70 text-base sm:text-lg leading-relaxed font-light mb-8 sm:mb-10 max-w-2xl mx-auto">
              {c.cta.description}
            </p>
          </Reveal>
          <Reveal animation="fade-up" delay={0.3}>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Link href={c.cta.primaryHref} className="btn-primary text-sm sm:text-base">
                <span>{c.cta.primaryCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
              </Link>
              <Link href={c.cta.secondaryHref} className="btn-ghost border-white/20 text-ivory hover:text-ivory text-sm sm:text-base">
                <span>{c.cta.secondaryCta}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
