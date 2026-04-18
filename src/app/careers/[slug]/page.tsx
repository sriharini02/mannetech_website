"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowLeft, MapPin, Briefcase, Clock, CheckCircle2 } from "lucide-react";
import Reveal, { RevealText } from "@/components/Reveal";
import { JOBS } from "@/lib/constants";

export default function CareerDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const job = JOBS.find((j) => j.slug === slug);

  if (!job) {
    return (
      <section className="min-h-[100svh] flex items-center justify-center">
        <div className="text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="display-serif text-5xl text-ink mb-6">Position Not Found</h1>
          <Link href="/careers" className="btn-primary">
            <span>View all positions</span>
            <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/careers" className="eyebrow inline-flex items-center gap-2 mb-10 hover:text-ink transition-colors">
              <ArrowLeft className="w-3 h-3" />
              <span>Back to all positions</span>
            </Link>
          </Reveal>

          <Reveal animation="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold-deep bg-gold/10 px-3 py-1">
                {job.code}
              </span>
              <p className="eyebrow">Open position</p>
            </div>
          </Reveal>

          <RevealText
            as="h1"
            text={job.title}
            className="display-serif text-[13vw] md:text-[9vw] lg:text-[7vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal mb-10"
            delay={0.1}
          />

          <Reveal animation="fade-up" delay={0.4}>
            <div className="flex flex-wrap gap-6 mb-10 pt-6 border-t border-hairline">
              <span className="flex items-center gap-2 text-sm text-ink/70">
                <Briefcase className="w-4 h-4 text-gold-deep" strokeWidth={1.5} /> {job.type}
              </span>
              <span className="flex items-center gap-2 text-sm text-ink/70">
                <MapPin className="w-4 h-4 text-gold-deep" strokeWidth={1.5} /> {job.location}
              </span>
              <span className="flex items-center gap-2 text-sm text-ink/70">
                <Clock className="w-4 h-4 text-gold-deep" strokeWidth={1.5} /> {job.experience}
              </span>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={0.5}>
            <Link href="/apply" className="btn-primary">
              <span>Apply for this position</span>
              <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ JOB DETAILS ══════════════════════ */}
      <section className="relative py-24 md:py-32 bg-bone border-t border-hairline">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal animation="fade-up">
              <p className="eyebrow mb-4 flex items-center">
                <span className="eyebrow-dot" />
                Job description
              </p>
              <h2 className="display-serif text-4xl md:text-5xl text-ink font-normal mb-6 leading-[1.1]">
                About the role
              </h2>
              <p className="text-ink/70 text-lg leading-relaxed font-light mb-12">
                {job.description}
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={0.1}>
              <h3 className="display-serif text-2xl md:text-3xl text-ink mb-6 font-normal">
                Requirements & skills
              </h3>
              <div className="space-y-3">
                {job.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-hairline">
                    <span className="font-mono text-[10px] text-gold-deep pt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-ink/75 text-base leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal animation="fade-up" delay={0.1}>
              <div className="bg-ivory border border-hairline p-8 lg:sticky lg:top-28">
                <p className="eyebrow mb-6">Quick summary</p>
                <div className="space-y-5">
                  {[
                    ["Position", job.title],
                    ["Type", job.type],
                    ["Location", job.location],
                    ["Experience", job.experience],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="font-mono text-[10px] tracking-widest uppercase text-graphite mb-1">
                        {label}
                      </p>
                      <p className="text-sm text-ink">{value}</p>
                      <div className="hairline mt-4" />
                    </div>
                  ))}
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-graphite mb-1">
                      Code
                    </p>
                    <p className="font-mono text-sm text-gold-deep">{job.code}</p>
                  </div>
                </div>
                <Link href="/apply" className="btn-primary w-full justify-center mt-8">
                  <span>Apply now</span>
                  <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
