"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, Cloud, Code2, Settings, Terminal, Brain, BarChart3, LayoutGrid, Network, Shield, Lightbulb, Workflow } from "lucide-react";
import { motion } from "framer-motion";

import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { SERVICES, COMPANY, SERVICE_IMAGES } from "@/lib/constants";

const iconMap: Record<string, any> = {
  Cloud, Code2, Settings, Terminal, Brain, BarChart3,
  LayoutGrid, Network, Shield, Lightbulb, Workflow,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="min-h-[100svh] flex items-center justify-center">
        <div className="text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="display-serif text-5xl text-ink mb-6">Service Not Found</h1>
          <Link href="/services" className="btn-primary">
            <span>View all services</span>
            <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
          </Link>
        </div>
      </section>
    );
  }

  const Icon = iconMap[service.icon];
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <div className="flex items-center gap-2 mb-10 eyebrow">
              <Link href="/" className="hover:text-ink transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
              <span>/</span>
              <span className="eyebrow-ink">{service.title}</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal animation="fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full border border-ink/20 flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 text-ink" strokeWidth={1.4} />}
                  </div>
                  <p className="font-mono text-xs text-gold-deep tracking-[0.22em] uppercase">
                    Service {service.kicker} of 11
                  </p>
                </div>
              </Reveal>

              <RevealText
                as="h1"
                text={service.title}
                className="display-serif text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal"
                delay={0.1}
              />
            </div>
          </div>

          <Reveal animation="fade-up" delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10 md:mt-14 pt-8 border-t border-hairline">
              <p className="md:col-span-7 text-ink/70 text-lg leading-relaxed font-light">
                {service.heroDesc}
              </p>
              <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3">
                <Link href="/contact" className="btn-primary justify-center">
                  <span>Request a consultation</span>
                  <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
                </Link>
                <Link href="/book-appointment" className="btn-ghost justify-center">
                  <span>Book appointment</span>
                  <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ ABOUT + IMAGE ══════════════════════ */}
      <section className="relative py-20 md:py-28 bg-bone border-y border-hairline">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal animation="fade-up" className="lg:col-span-6">
            <p className="eyebrow mb-4 flex items-center">
              <span className="eyebrow-dot" />
              About this service
            </p>
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-ink font-normal mb-6">
              Our approach to{" "}
              <em className="italic text-gold-deep">{service.title.toLowerCase()}</em>.
            </h2>
            <p className="text-ink/70 text-base leading-relaxed mb-8 max-w-lg">
              {COMPANY.shortName} provides comprehensive {service.title.toLowerCase()}{" "}
              solutions designed to meet the evolving needs of modern businesses.
              Our team of certified practitioners brings deep expertise and a
              proven track record of delivering measurable outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 py-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-deep mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-ink/75">{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal animation="scale" delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <ParallaxImage amount={30} className="aspect-[4/5] frame-inset">
              <Image
                src={SERVICE_IMAGES[slug] || SERVICE_IMAGES["cloud-computing"]}
                alt={`${service.title} by ${COMPANY.shortName}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </ParallaxImage>
            <div className="flex items-center justify-between mt-4">
              <p className="font-mono text-[10px] tracking-widest uppercase text-graphite">
                [ FIG · {service.kicker} ]
              </p>
              <p className="font-mono text-[10px] tracking-widest uppercase text-gold-deep">
                {service.title}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ WHAT WE OFFER ══════════════════════ */}
      <section className="relative py-24 md:py-36">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <p className="eyebrow mb-4 flex items-center">
                <span className="eyebrow-dot" />
                Service details
              </p>
              <h2 className="display-serif text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal">
                What we{" "}
                <em className="italic text-gold-deep">offer</em>.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-hairline">
            {service.sections.map((section, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.06}>
                <div className="p-8 md:p-10 border-b border-hairline md:border-r md:[&:nth-child(even)]:border-r-0 h-full group hover:bg-bone/60 transition-colors">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-xs text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-hairline" />
                  </div>
                  <h3 className="display-serif text-2xl md:text-3xl text-ink mb-3 font-normal leading-tight group-hover:translate-x-1 transition-transform">
                    {section.title}
                  </h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{section.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className="relative py-24 md:py-36 bg-ink text-ivory overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full" />
        <div className="wrap relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal animation="fade-up" className="lg:col-span-8">
            <p className="eyebrow text-gold mb-6 flex items-center">
              <span className="w-2 h-2 bg-gold rounded-full mr-3" />
              24/7 support available
            </p>
            <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal">
              Ready to transform
              <br />
              your <em className="italic text-gold">business?</em>
            </h2>
            <p className="text-ivory/60 text-lg leading-relaxed mt-6 max-w-lg font-light">
              Our team is ready to help you implement{" "}
              {service.title.toLowerCase()} solutions that drive real, measurable
              results. Get in touch for a free consultation.
            </p>
          </Reveal>
          <Reveal animation="fade-up" delay={0.15} className="lg:col-span-4 flex flex-col gap-3">
            <Link href="/contact" className="btn-primary bg-gold border-gold text-ink justify-center">
              <span>Get started</span>
              <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
            </Link>
            <Link href="/book-appointment" className="btn-ghost border-ivory/40 text-ivory hover:text-ink justify-center">
              <span>Schedule a call</span>
              <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ OTHER SERVICES ══════════════════════ */}
      <section className="py-24 md:py-32 bg-bone border-b border-hairline">
        <div className="wrap">
          <Reveal animation="fade-up" className="mb-12 flex items-end justify-between">
            <h2 className="display-serif text-4xl md:text-5xl leading-[1] tracking-tight text-ink font-normal">
              Explore more{" "}
              <em className="italic">services</em>.
            </h2>
            <Link href="/services" className="hidden md:inline-flex link-editorial font-display text-lg">
              View all
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-hairline">
            {otherServices.map((s, i) => {
              const OtherIcon = iconMap[s.icon];
              return (
                <Reveal key={s.slug} animation="fade-up" delay={i * 0.07}>
                  <Link href={`/services/${s.slug}`} className="block p-6 md:p-8 border-b border-hairline sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 h-full group hover:bg-cream transition-colors">
                    <div className="flex items-center justify-between mb-8">
                      {OtherIcon && (
                        <div className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center">
                          <OtherIcon className="w-4 h-4 text-ink/70" strokeWidth={1.5} />
                        </div>
                      )}
                      <span className="font-mono text-xs text-graphite">{s.kicker}</span>
                    </div>
                    <h3 className="display-serif text-xl text-ink mb-2 group-hover:text-gold-deep transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-ink/50 leading-relaxed line-clamp-2">
                      {s.shortDesc}
                    </p>
                    <div className="mt-6 flex items-center gap-1 text-xs text-gold-deep opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
