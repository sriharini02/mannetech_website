"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, Monitor, Terminal, LayoutGrid, Zap, Cloud, Brain, Shield, Lightbulb, Settings, Users } from "lucide-react";
import { motion } from "framer-motion";

import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { SERVICES, COMPANY, SERVICE_IMAGES } from "@/lib/constants";

const iconMap: Record<string, any> = {
  Monitor, Terminal, LayoutGrid, Zap, Cloud, Brain,
  Shield, Lightbulb, Settings, Users,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="min-h-[100svh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="display-serif text-3xl sm:text-5xl text-ink mb-6">Service Not Found</h1>
          <Link href="/services" className="btn-primary text-sm sm:text-base">
            <span>View all services</span>
            <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
          </Link>
        </div>
      </section>
    );
  }

  const Icon = iconMap[service.icon];
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);
  const serviceIndex = SERVICES.indexOf(service);
  const totalServices = SERVICES.length;

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-16 md:pt-48 md:pb-24 overflow-hidden bg-hero-gradient">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 eyebrow text-[0.6rem] sm:text-[0.7rem]">
              <Link href="/" className="hover:text-ivory transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-ivory transition-colors">Services</Link>
              <span>/</span>
              <span className="eyebrow-ink">{service.title}</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal animation="fade-up">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-ivory/20 flex items-center justify-center shrink-0">
                    {Icon && <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-ivory" strokeWidth={1.4} />}
                  </div>
                  <p className="font-mono text-[9px] sm:text-xs text-gold-deep tracking-[0.22em] uppercase">
                    Service {service.kicker} of {String(totalServices).padStart(2, "0")}
                  </p>
                </div>
              </Reveal>

              <RevealText
                as="h1"
                text={service.title}
                className="display-serif text-[12vw] sm:text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal"
                delay={0.1}
              />
            </div>
          </div>

          <Reveal animation="fade-up" delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 mt-8 sm:mt-10 md:mt-14 pt-6 sm:pt-8 border-t border-border">
              <p className="md:col-span-7 text-ivory/70 text-base sm:text-lg leading-relaxed font-light">
                {service.heroDesc}
              </p>
              <div className="md:col-span-4 md:col-start-9 flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-0">
                <Link href="/contact" className="btn-primary justify-center text-sm sm:text-base">
                  <span>Request a consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                </Link>
                <Link href="/book-appointment" className="btn-ghost justify-center text-sm sm:text-base">
                  <span>Book appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ ABOUT + IMAGE ══════════════════════ */}
      <section className="relative py-14 sm:py-20 md:py-28 bg-card border-y border-border">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          <Reveal animation="fade-up" className="lg:col-span-6">
            <p className="eyebrow text-ink mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="eyebrow-dot" />
              About this service
            </p>
            <h2 className="display-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-ink font-normal mb-4 sm:mb-6">
              Our approach to{" "}
              <em className="italic text-accent-dark">{service.title.toLowerCase()}</em>.
            </h2>
            <p className="text-ink/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
              {COMPANY.name} provides comprehensive {service.title.toLowerCase()}{" "}
              solutions designed to help enterprises achieve measurable business outcomes.
              Our certified practitioners bring deep expertise and a proven track record
              of delivering enterprise-scale results.
            </p>

            <div className="mb-6 sm:mb-8">
              <p className="eyebrow text-ink mb-2 sm:mb-3 text-[0.6rem] sm:text-[0.65rem]">Business Value Impact</p>
              <div className="bg-white border border-border p-4 sm:p-5">
                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">{service.businessValue}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start gap-1.5 sm:gap-2 py-1.5 sm:py-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-dark mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-xs sm:text-sm text-ink/75">{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal animation="scale" delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <ParallaxImage amount={30} className="aspect-[4/5] frame-inset max-w-md mx-auto lg:mx-0">
              <Image
                src={SERVICE_IMAGES[slug] || SERVICE_IMAGES["it-services"]}
                alt={`${service.title} by ${COMPANY.name}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </ParallaxImage>
            <div className="flex items-center justify-between mt-3 sm:mt-4">
              <p className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-graphite text-ink/50">
                [ FIG · {service.kicker} ]
              </p>
              <p className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-accent-dark">
                {service.title}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ WHAT WE OFFER ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-8 sm:mb-14 items-end">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <p className="eyebrow text-ink mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                <span className="eyebrow-dot" />
                Service details
              </p>
              <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal">
                What we{" "}
                <em className="italic text-accent-dark">offer</em>.
              </h2>
            </Reveal>
            <Reveal animation="fade-up" delay={0.1} className="lg:col-span-4 lg:col-start-9 flex justify-end">
              <Link href="/book-appointment" className="link-editorial font-display text-base sm:text-lg">
                Book a Call
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-border">
            {service.sections.map((section, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.06}>
                <div className="p-5 sm:p-8 md:p-10 border-b border-border md:border-r md:[&:nth-child(even)]:border-r-0 h-full group hover:bg-card/60 transition-colors">
                  <div className="mb-3 sm:mb-5">
                    <span className="font-mono text-[9px] sm:text-xs text-accent-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="display-serif text-lg sm:text-2xl md:text-3xl text-ink mb-2 sm:mb-3 font-normal leading-tight group-hover:translate-x-1 transition-transform">
                    {section.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/60 leading-relaxed">{section.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-primary text-ivory overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[140px] rounded-full" />
        <div className="wrap relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end">
          <Reveal animation="fade-up" className="lg:col-span-8">
            <p className="eyebrow text-gold mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-3 shrink-0" />
              Enterprise-grade delivery
            </p>
            <h2 className="display-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal">
              Ready to transform
              <br />
              your <em className="italic text-gold">business?</em>
            </h2>
            <p className="text-ivory/70 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-lg font-light">
              Our team is ready to help you implement {service.title.toLowerCase()}{" "}
              solutions that drive real, measurable results. Get in touch for a
              free consultation.
            </p>
          </Reveal>
          <Reveal animation="fade-up" delay={0.15} className="lg:col-span-4 flex flex-col gap-2 sm:gap-3">
            <Link href="/contact" className="btn-primary bg-accent border-accent text-ink justify-center text-sm sm:text-base">
              <span>Get started</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
            </Link>
            <Link href="/book-appointment" className="btn-ghost justify-center text-sm sm:text-base">
              <span>Schedule a call</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ RELATED SERVICES ══════════════════════ */}
      <section className="py-16 sm:py-24 md:py-32 bg-card border-b border-border">
        <div className="wrap">
          <Reveal animation="fade-up" className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-0">
            <h2 className="display-serif text-3xl sm:text-4xl md:text-5xl leading-[1] tracking-tight text-ink font-normal">
              Explore more{" "}
              <em className="italic">services</em>.
            </h2>
            <Link href="/services" className="link-editorial font-display text-base sm:text-lg">
              View all
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border">
            {otherServices.map((s, i) => {
              const OtherIcon = iconMap[s.icon];
              return (
                <Reveal key={s.slug} animation="fade-up" delay={i * 0.07}>
                  <Link href={`/services/${s.slug}`} className="block p-5 sm:p-6 md:p-8 border-b border-border sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 h-full group hover:bg-cream transition-colors">
                    <div className="flex items-center justify-between mb-5 sm:mb-8">
                      {OtherIcon && (
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-ink/20 flex items-center justify-center">
                          <OtherIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ink/70" strokeWidth={1.5} />
                        </div>
                      )}
                      <span className="font-mono text-[9px] sm:text-xs text-graphite text-ink/50">{s.kicker}</span>
                    </div>
                    <h3 className="display-serif text-base sm:text-xl text-ink mb-1.5 sm:mb-2 group-hover:text-accent-dark transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-ink/50 leading-relaxed line-clamp-2">
                      {s.shortDesc}
                    </p>
                    <div className="mt-4 sm:mt-6 flex items-center gap-1 text-[10px] sm:text-xs text-accent-dark opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
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
