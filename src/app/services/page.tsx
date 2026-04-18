"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Cloud, Code2, Settings, Terminal, Brain, BarChart3, LayoutGrid, Network, Shield, Lightbulb, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { SERVICES, SERVICE_IMAGES, COMPANY, PAGE_IMAGES } from "@/lib/constants";

const iconMap: Record<string, any> = {
  Cloud, Code2, Settings, Terminal, Brain, BarChart3,
  LayoutGrid, Network, Shield, Lightbulb, Workflow,
};

export default function ServicesIndexPage() {
  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow flex items-center gap-2 mb-10 hover:text-ink transition-colors">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">Services</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal animation="fade-up">
                <p className="eyebrow mb-6 flex items-center">
                  <span className="eyebrow-dot" />
                  11 disciplines · one partner
                </p>
              </Reveal>

              <RevealText
                as="h1"
                text="Services, quietly"
                className="display-serif text-[13vw] md:text-[9vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal"
                delay={0.1}
              />
              <h1 className="display-serif text-[13vw] md:text-[9vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="italic inline-block text-gold-deep"
                  >
                    engineered
                  </motion.em>
                </span>
                <span className="text-gold">.</span>
              </h1>
            </div>
          </div>

          <Reveal animation="fade-up" delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-14 md:mt-20 pt-8 border-t border-hairline">
              <p className="md:col-span-6 text-ink/70 text-lg leading-relaxed font-light">
                A full spectrum of technology services — from cloud migrations
                and bespoke software, to machine-learning pipelines and 24/7
                managed operations. Every engagement is senior-led, outcome-
                measured, and delivered without drama.
              </p>
              <div className="md:col-span-5 md:col-start-8 flex flex-col gap-2">
                <p className="font-mono text-[10px] tracking-widest uppercase text-graphite">
                  [ Operating hours ]
                </p>
                <p className="text-sm text-ink/70">{COMPANY.hours}</p>
                <p className="font-mono text-[10px] tracking-widest uppercase text-graphite mt-4">
                  [ Response SLA ]
                </p>
                <p className="text-sm text-ink/70">Within 24 hours · Mon–Fri</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ SERVICES EDITORIAL LIST ══════════════════════ */}
      <section className="relative pb-24 md:pb-36">
        <div className="wrap">
          <div className="border-t border-hairline">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <Reveal key={service.slug} animation="fade-up" delay={Math.min(i * 0.04, 0.3)}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative grid grid-cols-12 gap-4 md:gap-6 items-center py-8 md:py-10 border-b border-hairline hover:bg-bone/40 transition-colors"
                  >
                    <span className="font-mono text-xs text-graphite col-span-1 md:col-span-1">
                      {service.kicker}
                    </span>

                    <div className="col-span-1 md:col-span-1 w-10 h-10 md:w-12 md:h-12 rounded-full border border-ink/20 flex items-center justify-center text-ink/70 group-hover:bg-ink group-hover:text-gold group-hover:border-ink transition-all duration-500">
                      {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />}
                    </div>

                    <div className="col-span-8 md:col-span-6 min-w-0">
                      <h3 className="display-serif text-2xl md:text-4xl lg:text-5xl text-ink leading-tight font-normal tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                      </h3>
                    </div>

                    <p className="hidden lg:block lg:col-span-3 text-ink/55 text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="col-span-2 md:col-span-1 flex justify-end">
                      <ArrowUpRight
                        className="w-5 h-5 md:w-6 md:h-6 text-ink/30 group-hover:text-gold-deep group-hover:rotate-0 -rotate-45 transition-all duration-500"
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
      <section className="relative py-24 md:py-36 bg-ink text-ivory overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full" />
        <div className="wrap relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal animation="fade-up" className="lg:col-span-8">
            <p className="eyebrow text-gold mb-6 flex items-center">
              <span className="w-2 h-2 bg-gold rounded-full mr-3" />
              Not sure where to begin?
            </p>
            <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal">
              Tell us about
              <br />
              your <em className="italic text-gold">ambition</em>.
            </h2>
          </Reveal>
          <Reveal animation="fade-up" delay={0.2} className="lg:col-span-4 flex flex-col gap-3">
            <Link href="/contact" className="btn-primary bg-gold border-gold text-ink justify-center">
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
            </Link>
            <Link href="/book-appointment" className="btn-ghost border-ivory/40 text-ivory hover:text-ink justify-center">
              <span>Book a discovery call</span>
              <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
