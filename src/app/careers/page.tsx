"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, Briefcase, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { COMPANY, JOBS, PAGE_IMAGES } from "@/lib/constants";

const BENEFITS = [
  { title: "Remote-first culture", desc: "Work from anywhere with flexible hours and a focus on results over presence." },
  { title: "Competitive compensation", desc: "Industry-leading salaries, equity options, and comprehensive benefits packages." },
  { title: "Learning & growth", desc: "Annual learning budgets, conference attendance, and real mentorship — not the performative kind." },
  { title: "Health & wellness", desc: "Premium health insurance, mental health support, and wellness stipends." },
  { title: "Cutting-edge technology", desc: "Work with modern stacks and contribute to open-source where it matters." },
  { title: "Team events", desc: "Regular team retreats, hackathons, and socials that aren't mandatory fun." },
];

export default function CareersPage() {
  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow flex items-center gap-2 mb-10 hover:text-ink transition-colors">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">Careers</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Reveal animation="fade-up">
                <p className="eyebrow mb-6 flex items-center">
                  <span className="eyebrow-dot" />
                  Come build with us
                </p>
              </Reveal>
              <RevealText
                as="h1"
                text="Build your career"
                className="display-serif text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal"
                delay={0.1}
              />
              <h1 className="display-serif text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal">
                with{" "}
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="italic inline-block text-gold-deep"
                  >
                    Han
                  </motion.em>
                </span>
                <span className="text-gold">.</span>
              </h1>
            </div>

            <Reveal animation="fade-up" delay={0.4} className="lg:col-span-4">
              <p className="text-ink/70 text-lg leading-relaxed font-light mb-6">
                Join a team of passionate technologists making impact at a company
                that values innovation, collaboration, and real personal growth.
              </p>
              <Link href="/apply" className="btn-primary">
                <span>Apply now</span>
                <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURED IMAGE ══════════════════════ */}
      <section className="pb-24 md:pb-32">
        <div className="wrap">
          <Reveal animation="scale">
            <ParallaxImage amount={40} className="aspect-[21/9] w-full">
              <Image
                src={PAGE_IMAGES.careers}
                alt="Team collaboration at Han Solutions"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </ParallaxImage>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ WHAT WE OFFER ══════════════════════ */}
      <section className="relative py-24 md:py-36 bg-bone border-y border-hairline">
        <div className="wrap">
          <Reveal animation="fade-up" className="mb-14">
            <p className="eyebrow mb-4 flex items-center">
              <span className="eyebrow-dot" />
              What we can offer you
            </p>
            <h2 className="display-serif text-5xl md:text-6xl leading-[1] tracking-tight text-ink font-normal max-w-3xl">
              Built for{" "}
              <em className="italic text-gold-deep">humans</em>, not just coders.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-hairline">
            {BENEFITS.map((item, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.06}>
                <div className="p-8 md:p-10 border-b border-hairline md:border-r lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r h-full group">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gold-deep block mb-6">
                    0{i + 1}
                  </span>
                  <h3 className="display-serif text-2xl text-ink mb-3 font-normal group-hover:text-gold-deep transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ OPEN POSITIONS ══════════════════════ */}
      <section className="relative py-24 md:py-36">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <p className="eyebrow mb-4 flex items-center">
                <span className="eyebrow-dot" />
                Open positions · {JOBS.length} roles
              </p>
              <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal">
                Currently{" "}
                <em className="italic text-gold-deep">hiring</em>.
              </h2>
            </Reveal>
          </div>

          <div className="border-t border-hairline">
            {JOBS.map((job, i) => (
              <Reveal key={job.slug} animation="fade-up" delay={i * 0.05}>
                <Link
                  href={`/careers/${job.slug}`}
                  className="group grid grid-cols-12 gap-4 py-6 md:py-8 border-b border-hairline hover:bg-bone/40 transition-colors"
                >
                  <span className="font-mono text-xs text-graphite col-span-1 pt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="col-span-11 md:col-span-5">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="display-serif text-2xl md:text-3xl text-ink font-normal group-hover:translate-x-1 transition-transform duration-500">
                        {job.title}
                      </h3>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-gold-deep bg-gold/10 px-2 py-0.5">
                        {job.code}
                      </span>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-5 flex flex-wrap gap-4 items-center text-xs text-ink/60">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3 h-3 text-gold-deep" strokeWidth={1.5} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-gold-deep" strokeWidth={1.5} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-gold-deep" strokeWidth={1.5} /> {job.experience}
                    </span>
                  </div>

                  <ArrowUpRight
                    className="col-span-12 md:col-span-1 w-5 h-5 text-ink/30 group-hover:text-gold-deep group-hover:rotate-0 -rotate-45 transition-all duration-500 md:justify-self-end self-center"
                    strokeWidth={1.5}
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ EMPOWER CTA ══════════════════════ */}
      <section className="relative py-24 md:py-36 bg-ink text-ivory overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full" />
        <div className="wrap relative text-center max-w-3xl mx-auto">
          <Reveal animation="fade-up">
            <p className="eyebrow text-gold mb-6 flex items-center justify-center">
              <span className="w-2 h-2 bg-gold rounded-full mr-3" />
              Empower people, grow together
            </p>
          </Reveal>
          <Reveal animation="fade-up" delay={0.1}>
            <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal mb-8">
              Empower people.
              <br />
              <em className="italic text-gold">Grow together.</em>
            </h2>
          </Reveal>
          <Reveal animation="fade-up" delay={0.2}>
            <p className="text-ivory/70 text-lg leading-relaxed font-light mb-10">
              At {COMPANY.shortName}, we believe our success is driven by the
              success of our people. We invest in your growth, celebrate your
              achievements, and support you every step of the way.
            </p>
          </Reveal>
          <Reveal animation="fade-up" delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/apply" className="btn-primary bg-gold border-gold text-ink">
                <span>Apply now</span>
                <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
              </Link>
              <Link href="/contact" className="btn-ghost border-ivory/40 text-ivory hover:text-ink">
                <span>Contact HR</span>
                <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
