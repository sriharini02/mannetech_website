"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Cloud,
  Code2,
  Settings,
  Terminal,
  Brain,
  BarChart3,
  LayoutGrid,
  Network,
  Shield,
  Lightbulb,
  Workflow,
  Users,
  Globe,
  Award,
  Target,
  Star,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import Reveal, { RevealText } from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import ParallaxImage from "@/components/ParallaxImage";
import {
  COMPANY,
  SERVICES,
  STATS,
  TESTIMONIALS,
  PARTNERS,
  PAGE_IMAGES,
  PRINCIPLES,
  CAPABILITIES,
} from "@/lib/constants";

const iconMap: Record<string, any> = {
  Cloud, Code2, Settings, Terminal, Brain, BarChart3,
  LayoutGrid, Network, Shield, Lightbulb, Workflow,
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-end pt-28 pb-10 md:pb-16 overflow-hidden"
      >
        {/* Ambient ink disc top-right */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute top-10 right-[-140px] md:right-[-60px] w-[420px] h-[420px] md:w-[560px] md:h-[560px] pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full bg-ink/[0.035]" />
          <motion.div
            style={{ rotate: markRotate }}
            className="absolute inset-8 rounded-full border border-dashed border-ink/15"
          />
          <motion.div
            style={{ rotate: markRotate }}
            className="absolute inset-20 rounded-full border border-dashed border-ink/10"
          />
          {/* Orbiting gold dot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_20px_rgba(244,185,66,0.7)]" />
          </motion.div>
        </motion.div>

        <div className="wrap w-full relative z-10">
          {/* Top meta row */}
          <Reveal animation="fade-up" delay={0}>
            <div className="flex items-center justify-between mb-10 md:mb-16">
              <p className="eyebrow flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-3 animate-pulse" />
                <span>Est. 2021 · Austin, TX</span>
              </p>
              <p className="eyebrow hidden md:block">
                <span className="text-ink">—</span> A technology studio for ambitious businesses
              </p>
            </div>
          </Reveal>

          {/* Main hero grid: headline on left, sidebar on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Headline */}
            <div className="lg:col-span-9">
              <RevealText
                as="h1"
                text="Empowering your"
                delay={0.2}
                className="display-serif text-[18vw] md:text-[13vw] lg:text-[10.5vw] xl:text-[9.5vw] leading-[0.9] tracking-[-0.035em] text-ink font-medium"
              />
              <h1 className="display-serif text-[18vw] md:text-[13vw] lg:text-[10.5vw] xl:text-[9.5vw] leading-[0.9] tracking-[-0.035em] text-ink font-medium -mt-1 md:-mt-2">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="italic text-ink inline-block"
                    style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                  >
                    businesses
                  </motion.em>
                </span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-gold ml-1"
                >
                  .
                </motion.span>
              </h1>
            </div>

            {/* Sidebar: description + CTAs + logo badge */}
            <div className="lg:col-span-3 flex flex-col justify-end">
              <Reveal animation="fade-up" delay={0.8}>
                <div className="flex items-center gap-4 mb-6">
                             <Image
              src="/favicon.png"
              alt="Han Solutions mark"
              width={503}
              height={496}
              className="w-20 h-20 mt-10"
            />
                  <div className="flex-1 h-px bg-ink/20" />
                </div>
                <p className="text-ink/70 text-base leading-relaxed mb-8 font-light">
                  We design software, place elite talent, and modernize infrastructure — so
                  growing companies can ship faster and think bigger.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/contact" className="btn-primary justify-center">
                    <span>Contact Us</span>
                    <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
                  </Link>
                  <Link href="/services" className="btn-ghost justify-center">
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom stats strip */}
          <Reveal animation="fade-up" delay={1.0}>
            <div className="mt-14 md:mt-24 pt-8 border-t border-hairline grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {[
                { num: "50+", label: "Clients Worldwide" },
                { num: "1,500+", label: "Professionals Placed" },
                { num: "95%", label: "Client Retention" },
                { num: "24/7", label: "Support Available" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col"
                >
                  <p className="display-serif text-4xl md:text-5xl text-ink font-semibold leading-none">
                    {m.num}
                  </p>
                  <p className="eyebrow mt-3">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="eyebrow text-[10px]">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-ink/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ══════════════════════ MANIFESTO / INTRO ══════════════════════ */}
      <section className="relative py-24 md:py-36 border-t border-hairline">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal animation="fade-up" className="lg:col-span-4">
            <p className="eyebrow mb-4 flex items-center">
              <span className="eyebrow-dot" />
              A note from us
            </p>
            <p className="font-mono text-xs text-graphite leading-loose tracking-wide">
              [ 01 · INTRODUCTION ]<br />
              [ {COMPANY.founded} → PRESENT ]
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal animation="fade-up" delay={0.1}>
              <p className="display-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink font-normal">
                We are a boutique technology studio — part software house, part
                staffing firm, part quiet{" "}
                <em className="italic text-gold-deep">strategic partner</em>.
                We build, we place, we listen, we deliver. Again and again, until
                your business feels unmistakably{" "}
                <em className="italic text-gold-deep">yours</em>.
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={0.25}>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
                {CAPABILITIES.map((cap, i) => (
                  <div
                    key={cap}
                    className="group flex items-start gap-2 py-3 border-t border-hairline"
                  >
                    <span className="font-mono text-[10px] text-graphite mt-1">
                      0{i + 1}
                    </span>
                    <span className="text-sm text-ink/80 group-hover:text-ink transition-colors">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal animation="fade-up" delay={0.35}>
              <div className="mt-10">
                <Link href="/about" className="link-editorial font-display text-lg">
                  Read the full story
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PRINCIPLES ══════════════════════ */}
      <section className="relative py-24 md:py-36 bg-ink text-ivory overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="wrap relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <Reveal animation="fade-up" className="lg:col-span-5">
              <p className="eyebrow text-gold mb-6 flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-3" />
                Our Principles
              </p>
              <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal">
                Four rules we
                <br />
                <em className="italic text-gold">never break.</em>
              </h2>
            </Reveal>

            <Reveal animation="fade-up" delay={0.15} className="lg:col-span-6 lg:col-start-7">
              <p className="text-ivory/60 text-lg leading-relaxed font-light max-w-xl">
                Methodology is style. How we work is what you feel long before the
                first commit lands. These are the commitments we make on every
                engagement — regardless of scope, timeline, or budget.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={i} animation="fade-up" delay={0.1 + i * 0.1}>
                <div className="flex gap-6 items-start group">
                  <span className="display-serif italic text-6xl md:text-7xl text-gold/70 group-hover:text-gold transition-colors leading-none font-medium min-w-[4rem]">
                    {p.number}
                  </span>
                  <div className="flex-1 pt-3">
                    <h3 className="display-serif text-2xl md:text-3xl text-ivory mb-3 font-normal leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-ivory/60 text-sm leading-relaxed max-w-md">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ SERVICES — asymmetric editorial grid ══════════════════════ */}
      <section className="relative py-24 md:py-36">
        <div className="wrap">
          {/* Header row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <p className="eyebrow mb-4 flex items-center">
                <span className="eyebrow-dot" />
                What we do · 11 disciplines
              </p>
              <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal">
                Full-spectrum
                <br />
                <em className="italic">technology services</em>,
                <br />
                calmly delivered.
              </h2>
            </Reveal>

            <Reveal animation="fade-up" delay={0.15} className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
              <p className="text-ink/60 text-base leading-relaxed mb-6">
                From a single microservice to a multi-cloud migration — each engagement
                is staffed with senior practitioners, and measured against outcomes
                you actually care about.
              </p>
              <Link href="/services" className="btn-ghost self-start">
                <span>View all services</span>
                <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
              </Link>
            </Reveal>
          </div>

          {/* Editorial Services List — numbered, hover-reveal */}
          <div className="border-t border-hairline">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <Reveal key={service.slug} animation="fade-up" delay={Math.min(i * 0.04, 0.3)}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex items-center gap-6 md:gap-10 py-6 md:py-8 border-b border-hairline hover:bg-bone/40 transition-colors"
                  >
                    <span className="font-mono text-xs text-graphite w-8 shrink-0">
                      {service.kicker}
                    </span>

                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-ink/20 flex items-center justify-center shrink-0 text-ink/70 group-hover:bg-ink group-hover:text-gold group-hover:border-ink transition-all duration-500">
                      {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="display-serif text-2xl md:text-4xl lg:text-5xl text-ink leading-tight font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                      </h3>
                    </div>

                    <p className="hidden lg:block text-ink/50 text-sm max-w-xs shrink-0">
                      {service.shortDesc}
                    </p>

                    <ArrowUpRight
                      className="w-5 h-5 md:w-6 md:h-6 text-ink/30 group-hover:text-gold-deep group-hover:rotate-0 -rotate-45 transition-all duration-500 shrink-0"
                      strokeWidth={1.5}
                    />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════ STAFFING FEATURE ══════════════════════ */}
      <section className="relative py-24 md:py-36 bg-bone border-y border-hairline overflow-hidden">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image side */}
            <div className="lg:col-span-5">
              <Reveal animation="scale">
                <div className="relative">
                  <ParallaxImage amount={40} className="aspect-[3/4] frame-inset">
                    <Image
                      src={PAGE_IMAGES.staffingTalent}
                      alt="Han Solutions staffing — connecting companies with driven people"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </ParallaxImage>
                  {/* Floating stat card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -right-4 md:-right-8 bottom-10 bg-ivory border border-hairline p-6 max-w-[220px] shadow-[0_20px_40px_-20px_rgba(11,37,69,0.2)]"
                  >
                    <p className="display-serif text-5xl text-ink font-semibold leading-none mb-2">
                      1,500+
                    </p>
                    <p className="eyebrow">Professionals placed since 2021</p>
                  </motion.div>

                  {/* Mini mono label top left */}
                  <div className="absolute -top-4 -left-4 bg-ink text-ivory px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase">
                    IT / Staffing
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Content side */}
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal animation="fade-up">
                <p className="eyebrow mb-4 flex items-center">
                  <span className="eyebrow-dot" />
                  Staffing that feels bespoke
                </p>
              </Reveal>

              <Reveal animation="fade-up" delay={0.1}>
                <h2 className="display-serif text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal mb-8">
                  Connecting global companies with{" "}
                  <em className="italic text-gold-deep">driven people</em>.
                </h2>
              </Reveal>

              <div className="space-y-6 mb-10">
                {[
                  { n: "01", title: "Immigration Process", desc: "Complete H-1B, L-1, and Green Card sponsorship services — expertly managed." },
                  { n: "02", title: "Staffing Solutions", desc: "Flexible workforce packages that flex with your business, not against it." },
                  { n: "03", title: "Recruitment Process", desc: "End-to-end from sourcing to onboarding, with calm, unambiguous communication." },
                  { n: "04", title: "Bench Sales", desc: "A curated pool of pre-vetted, ready-to-deploy talent you can pull on any day." },
                ].map((item, i) => (
                  <Reveal key={i} animation="fade-up" delay={0.15 + i * 0.08}>
                    <div className="flex gap-5 group">
                      <span className="font-mono text-xs text-gold-deep pt-1 shrink-0">
                        {item.n}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-display text-lg text-ink mb-1 group-hover:text-gold-deep transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal animation="fade-up" delay={0.5}>
                <Link href="/it-staffing" className="btn-primary">
                  <span>Explore staffing</span>
                  <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ VALUES STRIP ══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <Reveal animation="fade-up" className="mb-12">
            <p className="eyebrow flex items-center">
              <span className="eyebrow-dot" />
              Values we hire against
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-hairline">
            {[
              { icon: Users, title: "Expert Talent Pool", desc: "A pre-vetted network across every domain." },
              { icon: Globe, title: "Global Reach", desc: "Sourcing across continents and time zones." },
              { icon: Award, title: "Quality Assurance", desc: "Rigorous screening — only top-tier candidates." },
              { icon: Target, title: "Precision Matching", desc: "Algorithm and human expertise, together." },
            ].map((v, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.08}>
                <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-hairline last:border-r-0 h-full group">
                  <v.icon className="w-7 h-7 text-ink/70 mb-6 group-hover:text-gold-deep transition-colors" strokeWidth={1.2} />
                  <h3 className="display-serif text-xl text-ink mb-2">{v.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="relative py-24 md:py-36 bg-bone border-y border-hairline">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <Reveal animation="fade-up" className="lg:col-span-6">
              <p className="eyebrow mb-4 flex items-center">
                <span className="eyebrow-dot" />
                Kind words
              </p>
              <h2 className="display-serif text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal">
                Results that
                <br />
                <em className="italic">build trust</em>.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-hairline">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.1}>
                <div className="p-8 md:p-10 h-full flex flex-col border-b md:border-b-0 md:border-r border-hairline last:border-r-0 relative group">
                  {/* Quote mark */}
                  <span className="display-serif italic text-7xl text-gold/60 leading-none mb-2 group-hover:text-gold transition-colors">
                    &ldquo;
                  </span>
                  <p className="pull-quote text-xl md:text-2xl text-ink leading-[1.25] flex-1 mb-8">
                    {t.quote}
                  </p>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" strokeWidth={0} />
                    ))}
                  </div>
                  <div className="border-t border-hairline pt-4">
                    <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50 mt-0.5">{t.role}</p>
                    <p className="font-mono text-[10px] text-gold-deep tracking-wider uppercase mt-1">
                      {t.company}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ OPEN-SOURCE NUMBER ══════════════════════ */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal animation="fade-up" className="lg:col-span-6">
            <p className="eyebrow mb-4 flex items-center">
              <span className="eyebrow-dot" />
              Beyond the brief
            </p>
            <h2 className="display-serif text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal mb-6">
              Why people love
              <br />
              to <em className="italic text-gold-deep">work with us</em>.
            </h2>
            <div className="space-y-8 mt-10">
              {[
                { title: "Beyond technology", desc: "Deep expertise managing complex enterprise projects — not just writing code, but understanding outcomes." },
                { title: "Scale your way", desc: "Our teams grow seamlessly with your demand. No bottlenecks. No awkward handoffs." },
                { title: "Time-to-market", desc: "All the programming, technical, and mentoring resources to move fast in the digital age." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-1 bg-gold/30 group-hover:bg-gold transition-colors" />
                  <div>
                    <h4 className="display-serif text-2xl text-ink mb-2 font-normal">{item.title}</h4>
                    <p className="text-sm text-ink/60 leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Big numeric callout */}
          <Reveal animation="scale" className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-square flex items-center justify-center bg-ink rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-ink-deep" />
              <ParallaxImage amount={30} className="absolute inset-0 opacity-20">
                <Image
                  src={PAGE_IMAGES.whyUs}
                  alt="Modern technology workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </ParallaxImage>
              <div className="relative text-center px-10">
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="display-serif text-[22vw] md:text-[14vw] lg:text-[10vw] text-transparent leading-none font-semibold"
                  style={{ WebkitTextStroke: "1.5px #FADDA1" }}
                >
                  381
                </motion.p>
                <p className="eyebrow text-gold mt-4">
                  Open-source contributions
                </p>
                <p className="text-ivory/50 text-xs mt-2 font-light">
                  across 13 projects
                </p>
              </div>

              {/* Decorative borders */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/40" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ PARTNERS MARQUEE ══════════════════════ */}
      <section className="py-20 md:py-28 border-y border-hairline bg-ivory overflow-hidden">
        <Reveal className="wrap mb-10">
          <div className="flex items-end justify-between gap-6">
            <p className="eyebrow flex items-center">
              <span className="eyebrow-dot" />
              Partners & platforms
            </p>
            <p className="hidden md:block text-sm text-ink/50">
              Building on what's best, refusing what's not.
            </p>
          </div>
        </Reveal>

        <Marquee speed={50}>
          {PARTNERS.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-8 md:mx-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className="w-6 h-6 object-contain"
                loading="lazy"
              />
              <span className="font-display text-3xl md:text-4xl text-ink whitespace-nowrap font-normal">
                {p.name}
              </span>
              <span className="mx-4 md:mx-6 text-gold">✦</span>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
}
