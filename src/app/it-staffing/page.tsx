"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Users, Globe, Award, Target } from "lucide-react";
import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";
import { COMPANY, STAFFING_SERVICES, PARTNERS, PAGE_IMAGES, PAGES } from "@/lib/constants";

const VALUES = [
  { icon: Users, title: "Expert Talent Pool", desc: "Access a pre-vetted network of 10,000+ technology professionals across every domain and skill level." },
  { icon: Globe, title: "Global Reach", desc: "Talent sourcing and placement capabilities spanning 12 countries with deep local market knowledge." },
  { icon: Award, title: "Quality Assurance", desc: "Rigorous multi-stage technical vetting, behavioral assessment, and background verification for every candidate." },
  { icon: Target, title: "Precision Matching", desc: "AI-powered matching combined with human expertise ensures the right fit for technical requirements and culture." },
];

export default function ITStaffingPage() {
  const pI = PAGES.itStaffing;

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-28 sm:pt-40 pb-14 sm:pb-20 md:pt-48 md:pb-28 overflow-hidden bg-hero-gradient">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 hover:text-ivory transition-colors text-[0.6rem] sm:text-[0.7rem]">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">IT Staffing</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal animation="fade-up">
                <p className="eyebrow mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                  <span className="eyebrow-dot" />
                  {pI.hero.eyebrow}
                </p>
              </Reveal>
              <RevealText
                as="h1"
                text={pI.hero.headline}
                className="display-serif text-[12vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal"
                delay={0.1}
              />
              <h1 className="display-serif text-[12vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="italic inline-block text-gold-deep"
                  >
                    {pI.hero.emphasis}
                  </motion.em>
                </span>
                <span className="text-gold">.</span>
              </h1>
            </div>
          </div>

          <Reveal animation="fade-up" delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 mt-8 sm:mt-14 md:mt-20">
              <p className="md:col-span-6 md:col-start-5 text-white/70 text-base sm:text-lg leading-relaxed font-light">
                {pI.hero.description}
              </p>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={0.6}>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-10">
              <Link href="/contact" className="btn-primary text-sm sm:text-base">
                <span>Discuss your needs</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
              </Link>
              <Link href="/careers" className="btn-ghost text-sm sm:text-base">
                <span>Open positions</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ VALUES ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-card border-y border-border">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-8 sm:mb-14">
            <Reveal animation="fade-up" className="lg:col-span-6">
              <p className="eyebrow text-ink mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                <span className="eyebrow-dot" />
                Our approach to talent
              </p>
              <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal">
                Built on{" "}
                <em className="italic text-accent-dark">trust</em>,
                <br />
                delivered with rigor.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border">
            {VALUES.map((v, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.08}>
                <div className="p-5 sm:p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-border last:border-r-0 h-full group">
                  <span className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-graphite text-ink/50 block mb-4 sm:mb-6">
                    0{i + 1} / 04
                  </span>
                  <v.icon className="w-6 h-6 sm:w-8 sm:h-8 text-ink/70 mb-4 sm:mb-6 group-hover:text-accent-dark group-hover:scale-110 transition-all" strokeWidth={1.2} />
                  <h3 className="display-serif text-lg sm:text-2xl text-ink mb-2 sm:mb-3 font-normal">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-ink/55 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ DELIVERING TALENT ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          <Reveal animation="fade-up" className="lg:col-span-6">
            <p className="eyebrow text-ink mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="eyebrow-dot" />
              The talent your business needs
            </p>
            <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal mb-6 sm:mb-8">
              Delivering the talent
              <br />
              your business{" "}
              <em className="italic text-accent-dark">needs</em>.
            </h2>
            <p className="text-ink/70 text-base sm:text-lg leading-relaxed font-light mb-3 sm:mb-5 max-w-lg">
              With years of experience in the IT staffing industry, {COMPANY.shortName} is committed to understanding each organization's unique requirements — and matching them with the best-qualified professionals available.
            </p>
            <p className="text-ink/60 text-sm sm:text-base leading-relaxed max-w-lg mb-6 sm:mb-10">
              Our approach combines AI-powered recruitment technology with personalized service to ensure every placement is a success. We handle everything from sourcing and vetting to onboarding and long-term compliance.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                { num: "10K+", label: "Talent Network" },
                { num: "500+", label: "Professionals Placed" },
                { num: "98%", label: "Placement Success" },
              ].map((stat, i) => (
                <div key={i} className="border-r border-border pr-3 sm:pr-6 last:border-r-0">
                  <p className="display-serif text-2xl sm:text-3xl text-ink font-semibold">{stat.num}</p>
                  <p className="eyebrow text-ink text-[8px] sm:text-[9px]">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary text-sm sm:text-base">
              <span>Discuss your needs</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>

          <Reveal animation="scale" delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <ParallaxImage amount={40} className="aspect-[3/4] frame-inset">
                <Image
                  src={PAGE_IMAGES.staffingTalent}
                  alt="IT staffing collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </ParallaxImage>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -left-3 sm:-left-4 md:-left-12 bottom-6 sm:bottom-10 bg-primary text-ivory p-4 sm:p-6 max-w-[180px] sm:max-w-[240px] shadow-[0_30px_60px_-20px_rgba(14,59,74,0.4)]"
              >
                <p className="display-serif text-4xl sm:text-6xl text-gold font-semibold leading-none">500+</p>
                <p className="eyebrow text-accent/80 mt-2 sm:mt-3 text-[0.55rem] sm:text-[0.65rem]">Professionals placed</p>
                <p className="text-[9px] sm:text-xs text-white/60 mt-1 sm:mt-2">across 50+ skill categories</p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ STAFFING SERVICES GRID ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-primary text-ivory overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[140px] rounded-full" />
        <div className="wrap relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-8 sm:mb-16">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <p className="eyebrow text-gold mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-3 shrink-0" />
                Our staffing solutions
              </p>
              <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal">
                Comprehensive
                <br />
                staffing{" "}
                <em className="italic text-gold">solutions</em>.
              </h2>
            </Reveal>

            <Reveal animation="fade-up" delay={0.15} className="lg:col-span-4 lg:col-start-9">
              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                Nine ways we can help you find, place, and retain the talent that will move your business forward.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-white/10">
            {STAFFING_SERVICES.map((service, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.05}>
                <div className="p-5 sm:p-8 md:p-10 border-b border-white/10 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 h-full group hover:bg-white/[0.05] transition-colors">
                  <div className="mb-4 sm:mb-6">
                    <span className="font-mono text-[9px] sm:text-xs text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="display-serif text-lg sm:text-2xl text-ivory mb-2 sm:mb-3 font-normal group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/55 leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PARTNERS ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-32 border-y border-border bg-[#F8F8F6] overflow-hidden">
        <Reveal className="wrap mb-10 sm:mb-14">
          <p className="eyebrow text-ink flex items-center text-[0.6rem] sm:text-[0.7rem] mb-4 sm:mb-6">
            <span className="eyebrow-dot" />
            Technology partners & memberships
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-6">
            <h2 className="display-serif text-3xl sm:text-4xl md:text-5xl leading-[1] tracking-tight text-ink font-normal">
              Trusted Technology
              <br />
              <em className="italic text-accent-dark">Ecosystem</em>
            </h2>
          </div>
        </Reveal>

        {/* Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-[#F8F8F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-[#F8F8F6] to-transparent z-10 pointer-events-none" />

        <Marquee speed={25} pauseOnHover>
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-6 sm:mx-8 md:mx-10 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
              style={{ filter: "grayscale(70%)" }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = "grayscale(0%)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(70%)"; }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
}
