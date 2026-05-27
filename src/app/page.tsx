"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Monitor,
  Terminal,
  LayoutGrid,
  Zap,
  Cloud,
  Brain,
  Shield,
  Lightbulb,
  Settings,
  Users,
  BarChart3,
  TrendingUp,
  Clock,
  Target,
  Star,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import Reveal, { RevealText } from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import VerticalMarquee from "@/components/VerticalMarquee";
import ParallaxImage from "@/components/ParallaxImage";
import {
  COMPANY,
  SERVICES,
  STATS,
  TESTIMONIALS,
  PARTNERS,
  PAGE_IMAGES,
  PRINCIPLES,
  PAGES,
} from "@/lib/constants";

const iconMap: Record<string, any> = {
  Monitor, Terminal, LayoutGrid, Zap, Cloud, Brain,
  Shield, Lightbulb, Settings, Users,
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const pH = PAGES.home;

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section
        ref={heroRef}
        className="relative bg-hero-gradient min-h-[100svh] flex items-end pt-24 sm:pt-28 pb-8 sm:pb-10 md:pb-16 overflow-hidden"
      >
        {/* Ambient ink disc top-right */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute top-10 right-[-180px] sm:right-[-140px] md:right-[-60px] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[560px] md:h-[560px] pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full bg-ink/[0.035]" />
          <motion.div
            style={{ rotate: markRotate }}
            className="absolute inset-6 sm:inset-8 rounded-full border border-dashed border-ink/15"
          />
          <motion.div
            style={{ rotate: markRotate }}
            className="absolute inset-14 sm:inset-20 rounded-full border border-dashed border-ink/10"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent shadow-[0_0_20px_rgba(244,185,66,0.7)]" />
          </motion.div>
        </motion.div>

        <div className="wrap w-full relative z-10">
          <Reveal animation="fade-up" delay={0}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-6 sm:mb-10 md:mb-16">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-card text-ink font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-2.5 animate-pulse shrink-0" />
                <span>Global Technology Consulting & Product Engineering</span>
              </span>
              <p className="eyebrow text-[0.6rem] sm:text-[0.7rem] hidden sm:block">
                <span className="text-ivory">—</span> {COMPANY.clients}+ enterprise clients · {COMPANY.countries} countries
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16">
            <div className="lg:col-span-9">
              <RevealText
                as="h1"
                text={pH.hero.headline}
                delay={0.2}
                className="display-serif text-[16vw] sm:text-[18vw] md:text-[13vw] lg:text-[10.5vw] xl:text-[9.5vw] leading-[0.9] tracking-[-0.035em] text-ivory font-medium"
              />
              <h1 className="display-serif text-[16vw] sm:text-[18vw] md:text-[13vw] lg:text-[10.5vw] xl:text-[9.5vw] leading-[0.9] tracking-[-0.035em] text-ivory font-medium -mt-0.5 sm:-mt-1 md:-mt-2">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="italic text-ivory inline-block"
                    style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                  >
                    {pH.hero.headlineEmphasis}
                  </motion.em>
                </span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-gold ml-0.5 sm:ml-1"
                >
                  .
                </motion.span>
              </h1>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-end">
              <Reveal animation="fade-up" delay={0.8}>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 relative shrink-0">
                    <div className="absolute inset-0 rounded-full bg-primary" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gold text-[10px] sm:text-xs font-bold">MT</span>
                    </div>
                  </div>
                  <div className="flex-1 h-px bg-ink/20" />
                </div>
                <p className="text-ivory/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-light">
                  {pH.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-3">
                  <Link href="/contact" className="btn-primary justify-center text-sm sm:text-base">
                    <span>Contact Us</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                  </Link>
                  <Link href="/services" className="btn-ghost justify-center text-sm sm:text-base">
                    <span>Explore Services</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal animation="fade-up" delay={1.0}>
            <div className="mt-10 sm:mt-14 md:mt-24 pt-6 sm:pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              {STATS.slice(0, 6).map((m, i) => (
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

      {/* ══════════════════════ INTRO / MANIFESTO ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 border-t border-border">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center">
            <Reveal animation="fade-up" delay={0.1}>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-card text-ink font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase mb-4 sm:mb-5">
                {pH.intro.eyebrow}
              </span>
              <p className="display-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink font-normal text-balance">
                {pH.intro.heading}
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={0.2}>
              <p className="text-ink/60 text-base sm:text-lg leading-relaxed font-light mt-6 sm:mt-8 max-w-3xl mx-auto">
                {pH.intro.subheading}
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={0.25}>
              <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 max-w-5xl mx-auto">
                {pH.capabilities.map((cap, i) => (
                  <div
                    key={cap}
                    className="group flex items-start gap-1.5 sm:gap-2 py-2 sm:py-3"
                  >
                    <span className="font-mono text-[9px] sm:text-[10px] text-graphite text-ink/50 mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-ink/80 group-hover:text-ink transition-colors leading-tight text-left">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal animation="fade-up" delay={0.35}>
              <div className="mt-8 sm:mt-10">
                <Link href="/about" className="btn-primary">
                  Learn more about our approach
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PRINCIPLES ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-primary text-ivory overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="wrap relative">
          <div className="text-center mb-14 sm:mb-20">
            <Reveal animation="fade-up">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-ivory font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-2.5 shrink-0" />
                Our Principles
              </span>
              <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal text-balance">
                Five commitments we
                <br />
                <em className="italic text-gold">never compromise.</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-x-10 sm:gap-y-16">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={i} animation="fade-up" delay={0.1 + i * 0.1}>
                <div className="flex gap-4 sm:gap-6 items-start group">
                  <span className="display-serif italic text-4xl sm:text-6xl md:text-7xl text-gold/70 group-hover:text-gold transition-colors leading-none font-medium min-w-[3rem] sm:min-w-[4rem]">
                    {p.number}
                  </span>
                  <div className="flex-1 pt-0 sm:pt-3">
                    <h3 className="display-serif text-xl sm:text-2xl md:text-3xl text-ivory mb-2 sm:mb-3 font-normal leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-ivory/70 text-xs sm:text-sm leading-relaxed max-w-md">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ SERVICES LIST ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-10 sm:mb-16 md:mb-20">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-card text-ink font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase mb-3 sm:mb-4">
                {pH.servicesHeadline.eyebrow}
              </span>
              <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal">
                {pH.servicesHeadline.heading}
                <br />
                <em className="italic">{pH.servicesHeadline.emphasis}</em>
              </h2>
            </Reveal>

            <Reveal animation="fade-up" delay={0.15} className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
              <p className="text-ink/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {pH.servicesHeadline.description}
              </p>
              <Link href="/services" className="btn-ghost self-start text-sm sm:text-base">
                <span>View all services</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
              </Link>
            </Reveal>
          </div>

          <div className="border-t border-border">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <Reveal key={service.slug} animation="fade-up" delay={Math.min(i * 0.04, 0.3)}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex items-center gap-3 sm:gap-6 md:gap-10 py-4 sm:py-6 md:py-8 border-b border-border hover:bg-card/50 transition-colors"
                  >
                    <span className="font-mono text-[10px] sm:text-xs text-graphite text-ink/50 w-5 sm:w-8 shrink-0">
                      {service.kicker}
                    </span>

                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-ink/20 flex items-center justify-center shrink-0 text-ink/70 group-hover:bg-primary group-hover:text-accent group-hover:border-ink transition-all duration-500">
                      {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={1.5} />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="display-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl text-ink leading-tight font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                      </h3>
                    </div>

                    <p className="hidden lg:block text-ink/50 text-sm max-w-[14rem] xl:max-w-xs shrink-0">
                      {service.shortDesc}
                    </p>

                    <ArrowUpRight
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-ink/30 group-hover:text-accent-dark group-hover:rotate-0 -rotate-45 transition-all duration-500 shrink-0"
                      strokeWidth={1.5}
                    />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHY US FEATURE ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-card border-y border-border overflow-hidden">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal animation="scale">
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <ParallaxImage amount={40} className="aspect-[3/4] frame-inset">
                    <Image
                      src={PAGE_IMAGES.digitalTransformation}
                      alt="Manne Technologies — enterprise digital transformation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 40vw"
                    />
                  </ParallaxImage>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -right-2 sm:-right-4 md:-right-8 bottom-6 sm:bottom-10 bg-white border border-border p-4 sm:p-6 max-w-[160px] sm:max-w-[200px] shadow-[0_20px_40px_-20px_rgba(14,59,74,0.2)]"
                  >
                    <p className="display-serif text-2xl sm:text-4xl text-ink font-semibold leading-none mb-1">
                      {COMPANY.clients}+
                    </p>
                    <p className="eyebrow text-ink text-[0.55rem] sm:text-[0.65rem]">Enterprise clients</p>
                  </motion.div>

                  
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal animation="fade-up">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-card text-ink font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase mb-3 sm:mb-4">
                  {pH.whyUs.eyebrow}
                </span>
              </Reveal>

              <Reveal animation="fade-up" delay={0.1}>
                <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal mb-6 sm:mb-8">
                  {pH.whyUs.heading}{" "}
                  <em className="italic text-accent-dark">{pH.whyUs.emphasis}</em>
                </h2>
              </Reveal>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                {pH.whyUs.reasons.map((item, i) => (
                  <Reveal key={i} animation="fade-up" delay={0.15 + i * 0.08}>
                    <div className="flex gap-3 sm:gap-5 group">
                      <span className="font-mono text-[10px] sm:text-xs text-accent-dark pt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-display text-base sm:text-lg text-ink mb-1 group-hover:text-accent-dark transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal animation="fade-up" delay={0.5}>
                <Link href="/contact" className="btn-primary text-sm sm:text-base">
                  <span>Start a conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ CLIENT OUTCOMES ══════════════════════ */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="wrap">
          <Reveal animation="fade-up" className="mb-8 sm:mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-card text-ink font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase">
              Measurable Business Outcomes
            </span>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border">
            {[
              { icon: TrendingUp, title: "Revenue Growth", desc: "30-50% increase in digital revenue through transformed customer experiences and new channel capabilities." },
              { icon: BarChart3, title: "Cost Optimization", desc: "30-45% reduction in IT operational costs through cloud optimization, automation, and managed services." },
              { icon: Clock, title: "Accelerated Time-to-Market", desc: "60% faster product delivery through modern engineering practices, CI/CD, and platform engineering." },
              { icon: Target, title: "Risk Mitigation", desc: "80% reduction in security incident response time with proactive threat detection and zero-trust architecture." },
            ].map((v, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.08}>
                <div className="p-5 sm:p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-border last:border-r-0 h-full group">
                  <v.icon className="w-5 h-5 sm:w-7 sm:h-7 text-ink/70 mb-4 sm:mb-6 group-hover:text-accent-dark transition-colors" strokeWidth={1.2} />
                  <h3 className="display-serif text-lg sm:text-xl text-ink mb-1.5 sm:mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-ink/55 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-card border-y border-border">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-10 sm:mb-16">
            <Reveal animation="fade-up" className="lg:col-span-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-card text-ink font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase mb-3 sm:mb-4">
                {pH.testimonialsHeadline.eyebrow}
              </span>
              <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal">
                {pH.testimonialsHeadline.heading}
                <br />
                <em className="italic">{pH.testimonialsHeadline.emphasis}</em>
              </h2>
            </Reveal>
          </div>

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
                      <p className="text-[10px] sm:text-xs text-ink/50 mt-0.5">{t.role}</p>
                      <p className="font-mono text-[9px] sm:text-[10px] text-accent-dark tracking-wider uppercase mt-1">
                        {t.company}
                      </p>
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
                      <p className="text-[10px] sm:text-xs text-ink/50 mt-0.5">{t.role}</p>
                      <p className="font-mono text-[9px] sm:text-[10px] text-accent-dark tracking-wider uppercase mt-1">
                        {t.company}
                      </p>
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
                      <p className="text-[10px] sm:text-xs text-ink/50 mt-0.5">{t.role}</p>
                      <p className="font-mono text-[9px] sm:text-[10px] text-accent-dark tracking-wider uppercase mt-1">
                        {t.company}
                      </p>
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

      {/* ══════════════════════ GLOBAL PRESENCE CALLOUT ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 overflow-hidden">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <Reveal animation="fade-up" className="lg:col-span-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-card text-ink font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase mb-3 sm:mb-4">
              Why enterprise leaders choose us
            </span>
            <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal mb-4 sm:mb-6">
              Global delivery,
              <br />
              <em className="italic text-accent-dark">enterprise trust.</em>
            </h2>
            <div className="space-y-5 sm:space-y-8 mt-6 sm:mt-10">
              {[
                { title: "Strategic Partnership", desc: "We embed ourselves in your success. Long after go-live, our teams remain engaged — optimizing, evolving, and ensuring maximum business value." },
                { title: "Enterprise-Grade Delivery", desc: "ISO 27001 certified, SOC 2 compliant, with 99.9% SLA adherence. Our delivery is built for the rigor of Fortune 500 environments." },
                { title: "Outcome-First Approach", desc: "Every engagement is measured against KPIs that matter — cost savings, revenue growth, operational efficiency — not technical outputs." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 group">
                  <div className="w-0.5 sm:w-1 bg-accent/50 group-hover:bg-accent transition-colors shrink-0" />
                  <div className="min-w-0">
                    <h4 className="display-serif text-lg sm:text-2xl text-ink mb-1 sm:mb-2 font-normal">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-ink/60 leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal animation="scale" className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-square flex items-center justify-center bg-primary rounded-sm overflow-hidden max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-ink-deep" />
              <ParallaxImage amount={30} className="absolute inset-0 opacity-20">
                <Image
                  src={PAGE_IMAGES.global}
                  alt="Global technology delivery network"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </ParallaxImage>
              <div className="relative text-center px-6 sm:px-10">
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="display-serif text-[18vw] sm:text-[22vw] md:text-[14vw] lg:text-[10vw] text-transparent leading-none font-semibold"
                  style={{ WebkitTextStroke: "1.5px #FADDA1" }}
                >
                  {pH.bigCallout.number}
                </motion.p>
                <p className="eyebrow text-gold mt-3 sm:mt-4 text-[0.6rem] sm:text-[0.65rem]">
                  {pH.bigCallout.label}
                </p>
                <p className="text-ivory/70 text-[10px] sm:text-xs mt-1 sm:mt-2 font-light">
                  {pH.bigCallout.sublabel}
                </p>
              </div>

              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-5 sm:w-8 h-5 sm:h-8 border-t border-l border-gold/40" />
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-5 sm:w-8 h-5 sm:h-8 border-b border-r border-gold/40" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ PARTNERS MARQUEE ══════════════════════ */}
      <section className="py-14 sm:py-20 md:py-28 border-y border-border bg-white overflow-hidden">
        <Reveal className="wrap mb-6 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-card text-ink font-mono text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase">
              Strategic Partners & Technology Alliances
            </span>
            <p className="text-xs sm:text-sm text-ink/50">
              Certified partnerships with the world's leading technology platforms.
            </p>
          </div>
        </Reveal>

        <Marquee speed={50}>
          {PARTNERS.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-2 sm:gap-3 mx-5 sm:mx-8 md:mx-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                loading="lazy"
              />
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-ink whitespace-nowrap font-normal">
                {p.name}
              </span>
              <span className="mx-2 sm:mx-4 md:mx-6 text-accent">✦</span>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
}
