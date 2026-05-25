"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Monitor, Terminal, LayoutGrid, Zap, Cloud, Brain, Shield, Lightbulb, Settings, Users } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealText } from "@/components/Reveal";
import { SERVICES, COMPANY, PAGES } from "@/lib/constants";

const iconMap: Record<string, any> = {
  Monitor, Terminal, LayoutGrid, Zap, Cloud, Brain,
  Shield, Lightbulb, Settings, Users,
};

export default function ServicesIndexPage() {
  const pS = PAGES.services;

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-20 md:pt-48 md:pb-28 overflow-hidden bg-hero-gradient">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 hover:text-ivory transition-colors text-[0.6rem] sm:text-[0.7rem]">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">Services</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal animation="fade-up">
                <p className="eyebrow mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                  <span className="eyebrow-dot" />
                  {pS.hero.eyebrow}
                </p>
              </Reveal>

              <RevealText
                as="h1"
                text={pS.hero.headline}
                className="display-serif text-[12vw] sm:text-[13vw] md:text-[9vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal"
                delay={0.1}
              />
              <h1 className="display-serif text-[12vw] sm:text-[13vw] md:text-[9vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="italic inline-block text-gold-deep"
                  >
                    {pS.hero.emphasis}
                  </motion.em>
                </span>
                <span className="text-gold">.</span>
              </h1>
            </div>
          </div>

          <Reveal animation="fade-up" delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 mt-8 sm:mt-14 md:mt-20 pt-6 sm:pt-8 border-t border-border">
              <p className="md:col-span-7 text-ivory/70 text-base sm:text-lg leading-relaxed font-light">
                {pS.hero.description}
              </p>
              <div className="md:col-span-4 md:col-start-9 flex flex-col gap-2 mt-4 sm:mt-0">
                <p className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-graphite">
                  [ Operating hours ]
                </p>
                <p className="text-xs sm:text-sm text-ivory/70">{COMPANY.hours}</p>
                <p className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-graphite mt-3 sm:mt-4">
                  [ Response SLA ]
                </p>
                <p className="text-xs sm:text-sm text-ivory/70">Within 24 hours · Mon–Fri</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ SERVICES EDITORIAL LIST ══════════════════════ */}
      <section className="relative pb-16 sm:pb-24 md:pb-36">
        <div className="wrap">
          <div className="border-t border-border">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <Reveal key={service.slug} animation="fade-up" delay={Math.min(i * 0.04, 0.3)}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative grid grid-cols-12 gap-2 sm:gap-4 md:gap-6 items-center py-5 sm:py-8 md:py-10 border-b border-border hover:bg-card/40 transition-colors"
                  >
                    <span className="font-mono text-[9px] sm:text-xs text-graphite text-ink/50 col-span-1">
                      {service.kicker}
                    </span>

                    <div className="col-span-1 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-ink/20 flex items-center justify-center text-ink/70 group-hover:bg-ink group-hover:text-accent group-hover:border-ink transition-all duration-500">
                      {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={1.5} />}
                    </div>

                    <div className="col-span-7 sm:col-span-7 md:col-span-5 min-w-0">
                      <h3 className="display-serif text-lg sm:text-2xl md:text-4xl lg:text-5xl text-ink leading-tight font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                      </h3>
                    </div>

                    <p className="hidden lg:block lg:col-span-3 text-ink/55 text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="col-span-2 sm:col-span-2 md:col-span-1 flex justify-end">
                      <ArrowUpRight
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ink/30 group-hover:text-accent-dark group-hover:rotate-0 -rotate-45 transition-all duration-500"
                        strokeWidth={1.5}
                      />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-primary text-ivory overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[140px] rounded-full" />
        <div className="wrap relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end">
          <Reveal animation="fade-up" className="lg:col-span-8">
            <p className="eyebrow text-gold mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-3 shrink-0" />
              Not sure where to begin?
            </p>
            <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal">
              Tell us about
              <br />
              your <em className="italic text-gold">ambition</em>.
            </h2>
          </Reveal>
          <Reveal animation="fade-up" delay={0.2} className="lg:col-span-4 flex flex-col gap-2 sm:gap-3">
            <Link href="/contact" className="btn-primary bg-accent border-accent text-ink justify-center text-sm sm:text-base">
              <span>Start a conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
            </Link>
            <Link href="/book-appointment" className="btn-ghost border-ivory/40 text-ivory hover:text-ink justify-center text-sm sm:text-base">
              <span>Book a discovery call</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
