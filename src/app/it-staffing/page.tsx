"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Users, Globe, Award, Target } from "lucide-react";
import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";
import { COMPANY, STAFFING_SERVICES, PARTNERS, PAGE_IMAGES } from "@/lib/constants";

const VALUES = [
  { icon: Users, title: "Expert Talent Pool", desc: "Access a vast network of pre-vetted IT professionals across every technology domain." },
  { icon: Globe, title: "Global Reach", desc: "Talent sourcing and placement capabilities spanning continents and time zones." },
  { icon: Award, title: "Quality Assurance", desc: "Rigorous screening and assessment processes ensure only top-tier candidates move forward." },
  { icon: Target, title: "Precision Matching", desc: "Modern matching technology and old-fashioned human judgment, working together." },
];

export default function ITStaffingPage() {
  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow flex items-center gap-2 mb-10 hover:text-ink transition-colors">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">IT Staffing</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal animation="fade-up">
                <p className="eyebrow mb-6 flex items-center">
                  <span className="eyebrow-dot" />
                  IT Staffing Solutions
                </p>
              </Reveal>
              <RevealText
                as="h1"
                text="Your trusted"
                className="display-serif text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal"
                delay={0.1}
              />
              <h1 className="display-serif text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="italic inline-block text-gold-deep"
                  >
                    staffing partner
                  </motion.em>
                </span>
                <span className="text-gold">.</span>
              </h1>
            </div>
          </div>

          <Reveal animation="fade-up" delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-14 md:mt-20">
              <p className="md:col-span-6 md:col-start-5 text-ink/70 text-lg leading-relaxed font-light">
                {COMPANY.shortName} Staffing connects you with the best talent in
                the industry. Consulting, outsourcing, managed services — we
                help businesses achieve their goals and scale without compromise.
              </p>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={0.6}>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact" className="btn-primary">
                <span>Get started</span>
                <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
              </Link>
              <Link href="/careers" className="btn-ghost">
                <span>Open positions</span>
                <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ VALUES ══════════════════════ */}
      <section className="relative py-24 md:py-32 bg-bone border-y border-hairline">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <Reveal animation="fade-up" className="lg:col-span-6">
              <p className="eyebrow mb-4 flex items-center">
                <span className="eyebrow-dot" />
                Our people, our values, our purpose
              </p>
              <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal">
                Built on{" "}
                <em className="italic text-gold-deep">trust</em>,
                <br />
                delivered with rigor.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-hairline">
            {VALUES.map((v, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.08}>
                <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-hairline last:border-r-0 h-full group">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-graphite block mb-6">
                    0{i + 1} / 04
                  </span>
                  <v.icon className="w-8 h-8 text-ink/70 mb-6 group-hover:text-gold-deep group-hover:scale-110 transition-all" strokeWidth={1.2} />
                  <h3 className="display-serif text-2xl text-ink mb-3 font-normal">{v.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ DELIVERING TALENT ══════════════════════ */}
      <section className="relative py-24 md:py-36">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal animation="fade-up" className="lg:col-span-6">
            <p className="eyebrow mb-4 flex items-center">
              <span className="eyebrow-dot" />
              The talent your business needs
            </p>
            <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal mb-8">
              Delivering the talent
              <br />
              your business{" "}
              <em className="italic text-gold-deep">needs</em>.
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed font-light mb-5 max-w-lg">
              With years of experience in the IT staffing industry,{" "}
              {COMPANY.shortName} is committed to understanding each organization's
              unique requirements — and matching them with the best-qualified
              professionals available.
            </p>
            <p className="text-ink/60 text-base leading-relaxed max-w-lg mb-10">
              Our approach combines cutting-edge recruitment technology with
              personalized service to ensure every placement is a success. We
              handle everything from sourcing and vetting to onboarding and
              long-term compliance.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Discuss your needs</span>
              <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>

          <Reveal animation="scale" delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <div className="relative">
              <ParallaxImage amount={40} className="aspect-[3/4] frame-inset">
                <Image
                  src={PAGE_IMAGES.staffingTalent}
                  alt="IT staffing collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </ParallaxImage>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -left-4 md:-left-12 bottom-10 bg-ink text-ivory p-6 max-w-[240px] shadow-[0_30px_60px_-20px_rgba(11,37,69,0.4)]"
              >
                <p className="display-serif text-6xl text-gold font-semibold leading-none">1.5K</p>
                <p className="eyebrow text-gold/80 mt-3">Professionals placed</p>
                <p className="text-xs text-ivory/60 mt-2">since 2021 · across industries</p>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ STAFFING SERVICES GRID ══════════════════════ */}
      <section className="relative py-24 md:py-36 bg-ink text-ivory overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full" />
        <div className="wrap relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <p className="eyebrow text-gold mb-6 flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-3" />
                Our services
              </p>
              <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal">
                Comprehensive
                <br />
                staffing{" "}
                <em className="italic text-gold">solutions</em>.
              </h2>
            </Reveal>

            <Reveal animation="fade-up" delay={0.15} className="lg:col-span-4 lg:col-start-9">
              <p className="text-ivory/60 text-base leading-relaxed font-light">
                Nine ways we can help you find, place, and retain the talent that
                will actually move your business forward.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-ivory/15">
            {STAFFING_SERVICES.map((service, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.05}>
                <div className="p-8 md:p-10 border-b border-ivory/15 md:border-r md:[&:nth-child(3n)]:border-r-0 h-full group hover:bg-ivory/[0.03] transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xs text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-ivory/20" />
                  </div>
                  <h3 className="display-serif text-2xl text-ivory mb-3 font-normal group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ivory/55 leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PARTNERS MARQUEE ══════════════════════ */}
      <section className="py-20 md:py-28 border-b border-hairline bg-ivory overflow-hidden">
        <Reveal className="wrap mb-10">
          <p className="eyebrow flex items-center">
            <span className="eyebrow-dot" />
            Technology partners & memberships
          </p>
        </Reveal>

        <Marquee speed={50}>
          {PARTNERS.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-8 md:mx-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.logo} alt={`${p.name} logo`} className="w-6 h-6 object-contain" loading="lazy" />
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
