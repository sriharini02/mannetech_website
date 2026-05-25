"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowLeft, MapPin, Briefcase, Clock } from "lucide-react";
import Reveal, { RevealText } from "@/components/Reveal";
import { JOBS } from "@/lib/constants";

export default function CareerDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const job = JOBS.find((j) => j.slug === slug);

  if (!job) {
    return (
      <section className="min-h-[100svh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="display-serif text-3xl sm:text-5xl text-ink mb-6">Position Not Found</h1>
          <Link href="/careers" className="btn-primary text-sm sm:text-base">
            <span>View all positions</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-16 md:pt-48 md:pb-20 overflow-hidden bg-hero-gradient">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/careers" className="eyebrow inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 hover:text-ivory transition-colors text-[0.6rem] sm:text-[0.7rem]">
              <ArrowLeft className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>Back to all positions</span>
            </Link>
          </Reveal>

          <Reveal animation="fade-up">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="font-mono text-[8px] sm:text-[10px] tracking-[0.22em] uppercase text-gold-deep bg-gold/10 px-2 sm:px-3 py-0.5 sm:py-1">
                {job.code}
              </span>
              <p className="eyebrow text-[0.6rem] sm:text-[0.7rem]">Open position</p>
            </div>
          </Reveal>

          <RevealText
            as="h1"
            text={job.title}
            className="display-serif text-[11vw] sm:text-[13vw] md:text-[9vw] lg:text-[7vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal mb-6 sm:mb-10"
            delay={0.1}
          />

          <Reveal animation="fade-up" delay={0.4}>
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-10 pt-4 sm:pt-6 border-t border-border">
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-ivory/70">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-gold-deep shrink-0" strokeWidth={1.5} /> {job.type}
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-ivory/70">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gold-deep shrink-0" strokeWidth={1.5} /> {job.location}
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-ivory/70">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold-deep shrink-0" strokeWidth={1.5} /> {job.experience}
              </span>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={0.5}>
            <Link href="/apply" className="btn-primary text-sm sm:text-base">
              <span>Apply for this position</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ JOB DETAILS ══════════════════════ */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-card border-t border-border">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal animation="fade-up">
              <p className="eyebrow mb-3 sm:mb-4 flex items-center text-[0.6rem] sm:text-[0.7rem]">
                <span className="eyebrow-dot" />
                Job description
              </p>
              <h2 className="display-serif text-3xl sm:text-4xl md:text-5xl text-ink font-normal mb-4 sm:mb-6 leading-[1.1]">
                About the role
              </h2>
              <p className="text-ink/70 text-base sm:text-lg leading-relaxed font-light mb-8 sm:mb-12">
                {job.description}
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={0.1}>
              <h3 className="display-serif text-xl sm:text-2xl md:text-3xl text-ink mb-4 sm:mb-6 font-normal">
                Requirements & skills
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {job.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3 py-2 sm:py-3 border-b border-border">
                    <span className="font-mono text-[8px] sm:text-[10px] text-gold-deep pt-0.5 sm:pt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-sm sm:text-base text-ink/75 leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal animation="fade-up" delay={0.1}>
              <div className="bg-white border border-border p-5 sm:p-8 lg:sticky lg:top-28">
                <p className="eyebrow mb-4 sm:mb-6 text-[0.6rem] sm:text-[0.65rem]">Quick summary</p>
                <div className="space-y-3 sm:space-y-5">
                  {[
                    ["Position", job.title],
                    ["Type", job.type],
                    ["Location", job.location],
                    ["Experience", job.experience],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-graphite mb-0.5 sm:mb-1">
                        {label}
                      </p>
                      <p className="text-xs sm:text-sm text-ink">{value}</p>
                      <div className="hairline mt-2 sm:mt-4" />
                    </div>
                  ))}
                  <div>
                    <p className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-graphite mb-0.5 sm:mb-1">
                      Code
                    </p>
                    <p className="font-mono text-xs sm:text-sm text-gold-deep">{job.code}</p>
                  </div>
                </div>
                <Link href="/apply" className="btn-primary w-full justify-center mt-5 sm:mt-8 text-sm sm:text-base">
                  <span>Apply now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
