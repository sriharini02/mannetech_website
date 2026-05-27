"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { JOBS, PAGE_IMAGES, PAGES } from "@/lib/constants";

export default function CareersPage() {
  const pC = PAGES.careers;

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-28 sm:pt-40 pb-14 sm:pb-20 md:pt-48 md:pb-28 overflow-hidden bg-hero-gradient">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 hover:text-ivory transition-colors text-[0.6rem] sm:text-[0.7rem]">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">Careers</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end">
            <div className="lg:col-span-8">
              <Reveal animation="fade-up">
                <p className="eyebrow mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                  <span className="eyebrow-dot" />
                  {pC.hero.eyebrow}
                </p>
              </Reveal>
              <RevealText
                as="h1"
                text={pC.hero.headline}
                className="display-serif text-[12vw] sm:text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal"
                delay={0.1}
              />
              <h1 className="display-serif text-[12vw] sm:text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="italic inline-block text-gold-deep"
                  >
                    {pC.hero.emphasis}
                  </motion.em>
                </span>
                <span className="text-gold">.</span>
              </h1>
            </div>

            <Reveal animation="fade-up" delay={0.4} className="lg:col-span-4">
              <p className="text-ivory/70 text-base sm:text-lg leading-relaxed font-light mb-4 sm:mb-6">
                {pC.hero.description}
              </p>
              <Link href="/apply" className="btn-primary text-sm sm:text-base">
                <span>Apply now</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      

      {/* ══════════════════════ WHAT WE OFFER ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-card border-y border-border">
        <div className="wrap">
          <Reveal animation="fade-up" className="mb-8 sm:mb-14">
            <p className="eyebrow text-ink mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="eyebrow-dot" />
              What we offer
            </p>
            <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal max-w-3xl">
              Built for{" "}
              <em className="italic text-accent-dark">growth</em>, driven by impact.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
            {pC.benefits.map((item, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.06}>
                <div className="p-5 sm:p-8 md:p-10 border-b border-border sm:border-r lg:[&:nth-child(3n)]:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r h-full group">
                  <span className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-accent-dark block mb-4 sm:mb-6">
                    0{i + 1}
                  </span>
                  <h3 className="display-serif text-lg sm:text-2xl text-ink mb-2 sm:mb-3 font-normal group-hover:text-gold-deep transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/55 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ OPEN POSITIONS ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-8 sm:mb-14">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <p className="eyebrow text-ink mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                <span className="eyebrow-dot" />
                Open positions · {JOBS.length} roles
              </p>
              <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal">
                Currently{" "}
                <em className="italic text-gold-deep">hiring</em>.
              </h2>
            </Reveal>
          </div>

          <div className="border-t border-border">
            {JOBS.map((job, i) => (
              <Reveal key={job.slug} animation="fade-up" delay={i * 0.05}>
                <Link
                  href={`/careers/${job.slug}`}
                  className="group grid grid-cols-12 gap-2 sm:gap-4 py-5 sm:py-6 md:py-8 border-b border-border hover:bg-card/40 transition-colors"
                >
                  <span className="font-mono text-[9px] sm:text-xs text-graphite text-ink/50 col-span-1 pt-1 sm:pt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="col-span-11 md:col-span-5">
                    <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                      <h3 className="display-serif text-base sm:text-2xl md:text-3xl text-ink font-normal group-hover:translate-x-1 transition-transform duration-500">
                        {job.title}
                      </h3>
                      <span className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-gold-deep bg-accent/10 px-1.5 sm:px-2 py-0.5">
                        {job.code}
                      </span>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-5 flex flex-wrap gap-3 sm:gap-4 items-center text-[10px] sm:text-xs text-ink/60">
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-deep shrink-0" strokeWidth={1.5} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-deep shrink-0" strokeWidth={1.5} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-deep shrink-0" strokeWidth={1.5} /> {job.experience}
                    </span>
                  </div>

                  <ArrowUpRight
                    className="col-span-12 md:col-span-1 w-4 h-4 sm:w-5 sm:h-5 text-ink/30 group-hover:text-gold-deep group-hover:rotate-0 -rotate-45 transition-all duration-500 md:justify-self-end self-center"
                    strokeWidth={1.5}
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
