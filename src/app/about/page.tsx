"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import Logo from "@/components/Logo";
import { COMPANY, TESTIMONIALS, PAGE_IMAGES, PRINCIPLES } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow flex items-center gap-2 mb-10 hover:text-ink transition-colors">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">About</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <RevealText
                as="h1"
                text="Specialists in building a"
                className="display-serif text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal"
                delay={0.1}
              />
              <h1 className="display-serif text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.95] tracking-[-0.035em] text-ink font-normal">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.em
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="italic inline-block text-gold-deep"
                  >
                    conscious brand
                  </motion.em>
                </span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="inline-block text-gold"
                >
                  .
                </motion.span>
              </h1>
            </div>

            <Reveal animation="fade-up" delay={0.4} className="lg:col-span-4">
              <p className="text-ink/70 text-lg leading-relaxed font-light mb-6">
                Since {COMPANY.founded}, we've quietly built a reputation as the
                technology partner ambitious businesses call when they want work
                done well — and done once.
              </p>
              <Link href="/services" className="btn-primary">
                <span>Explore services</span>
                <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURED PORTRAIT ══════════════════════ */}
      <section className="relative pb-24 md:pb-32">
        <div className="wrap">
          <Reveal animation="scale">
            <ParallaxImage amount={40} className="aspect-[21/9] w-full">
              <Image
                src={PAGE_IMAGES.aboutHero}
                alt="Han Solutions modern workspace"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </ParallaxImage>
          </Reveal>
          <div className="flex items-start justify-between mt-4">
            <p className="font-mono text-[10px] tracking-widest uppercase text-graphite">
              [ OUR STUDIO · EDISON, NJ · {COMPANY.founded} ]
            </p>
            <p className="font-mono text-[10px] tracking-widest uppercase text-graphite hidden md:block">
              FIG. 01
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHY HAN — long narrative ══════════════════════ */}
      <section className="relative py-24 md:py-36 border-y border-hairline bg-bone">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal animation="fade-up" className="lg:col-span-4">
            <p className="eyebrow mb-6 flex items-center">
              <span className="eyebrow-dot" />
              Our philosophy
            </p>
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-ink font-normal">
              Why <em className="italic text-gold-deep">Han</em>?
            </h2>
            <Logo variant="mark" className="w-20 h-20 mt-10" inkColor="#0B2545" />
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <Reveal animation="fade-up" delay={0.1}>
              <p className="text-ink/75 text-lg leading-relaxed font-light">
                {COMPANY.shortName} is ranked among the best companies offering IT
                consultation services. Since our founding in {COMPANY.founded}, we
                have worked — quietly, diligently — to build a worldwide network of
                customers who return to us, again and again.
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={0.2}>
              <p className="text-ink/70 text-base leading-relaxed">
                Our well-trained staff ensures customers receive service of the
                highest caliber — support that helps them pursue ambitious goals,
                and in turn, increase business returns. Whether you need senior
                technologists, expert software consultation, or something in
                between, we are always here, always available.
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={0.3}>
              <div className="grid grid-cols-3 gap-0 mt-10 border-t border-hairline">
                {[
                  { number: `'${COMPANY.founded.slice(2)}`, label: "Founded", sub: "Worldwide network since day one" },
                  { number: "10K", label: "Customers", sub: "Served across industries" },
                  { number: "150+", label: "Team", sub: "Growing fast, based globally" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="py-6 border-r border-hairline last:border-r-0 pr-4"
                  >
                    <p className="display-serif text-4xl md:text-5xl text-ink font-semibold leading-none mb-3">
                      {item.number}
                    </p>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-gold-deep mb-1">
                      {item.label}
                    </p>
                    <p className="text-xs text-ink/50 leading-relaxed">{item.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PRINCIPLES (reprise) ══════════════════════ */}
      <section className="relative py-24 md:py-36">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <Reveal animation="fade-up" className="lg:col-span-7">
              <p className="eyebrow mb-4 flex items-center">
                <span className="eyebrow-dot" />
                How we work
              </p>
              <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal">
                Listen.
                <br />
                Understand.
                <br />
                <em className="italic">Plan.</em>{" "}
                Deliver.
              </h2>
            </Reveal>

            <Reveal animation="fade-up" delay={0.15} className="lg:col-span-5 lg:col-start-8">
              <p className="text-ink/60 text-lg leading-relaxed font-light">
                A four-movement method. Repeated quietly, rigorously, on every
                single engagement. It is not glamorous. It is{" "}
                <em className="italic">effective</em>.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-hairline">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.1}>
                <div className="p-8 md:p-10 border-b md:border-b border-hairline md:border-r group hover:bg-bone/60 transition-colors h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="display-serif italic text-5xl md:text-6xl text-gold-deep/60 group-hover:text-gold-deep transition-colors leading-none font-medium">
                      {p.number}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-graphite">
                      0{i + 1} / 04
                    </span>
                  </div>
                  <h3 className="display-serif text-2xl md:text-3xl text-ink mb-3 font-normal leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-ink/60 text-sm leading-relaxed max-w-md">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ GENUINE SERVICES ══════════════════════ */}
      <section className="py-24 md:py-36 bg-ink text-ivory relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full" />
        <div className="wrap relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal animation="fade-up" className="lg:col-span-5">
            <p className="eyebrow text-gold mb-6 flex items-center">
              <span className="w-2 h-2 bg-gold rounded-full mr-3" />
              Trustworthy by design
            </p>
            <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ivory font-normal mb-8">
              Genuine
              <br />
              <em className="italic text-gold">services</em>.
            </h2>
            <Link href="/it-staffing" className="btn-primary bg-gold border-gold text-ink">
              <span>Explore staffing</span>
              <ArrowRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>

          <Reveal animation="fade-up" delay={0.15} className="lg:col-span-6 lg:col-start-7 space-y-5">
            <p className="text-ivory/75 text-base leading-relaxed font-light">
              What differentiates {COMPANY.shortName} is our ability to scale
              according to the needs of companies. Your IT budget should never
              exceed your expected revenue. As your trusted partner,{" "}
              {COMPANY.shortName} will make sure your returns on IT investment
              exceed your expectations — not your budget.
            </p>
            <p className="text-ivory/60 text-sm leading-relaxed">
              Customers rely on us for authentic software with customizable
              products designed by technology experts with industry depth.
              {" "}{COMPANY.shortName} has a suite of loyal customers who
              invariably return with better referrals.
            </p>
            <p className="text-ivory/60 text-sm leading-relaxed">
              Our practice is disarmingly simple: listen to the client, implement
              the client's requirement, and deliver the product within the time
              frame agreed. The discipline lives inside that simplicity.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-8">
              {[
                "On-time Delivery",
                "Transparent Process",
                "Scalable Solutions",
                "Dedicated Support",
                "Industry Expertise",
                "Cost Optimization",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-ivory/80">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ CAREER CTA ══════════════════════ */}
      <section className="relative py-24 md:py-36">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal animation="fade-up" className="lg:col-span-6">
            <p className="eyebrow mb-4 flex items-center">
              <span className="eyebrow-dot" />
              Join the studio
            </p>
            <h2 className="display-serif text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-ink font-normal mb-6">
              Looking for a
              <br />
              career with <em className="italic text-gold-deep">us?</em>
            </h2>
            <p className="text-ink/60 text-lg leading-relaxed font-light max-w-md mb-8">
              We are an organization driven by a deep sense of mission and
              passion. Always seeking colleagues who share our quiet ambition.
            </p>
            <Link href="/careers" className="btn-primary">
              <span>View open positions</span>
              <ArrowUpRight className="w-4 h-4 btn-arrow" strokeWidth={2} />
            </Link>
          </Reveal>

          <Reveal animation="fade-up" delay={0.2} className="lg:col-span-5 lg:col-start-8">
            <ParallaxImage amount={30} className="aspect-[4/5] frame-inset">
              <Image
                src={PAGE_IMAGES.aboutCareers}
                alt="Diverse Han Solutions team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </ParallaxImage>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Engineering", "Design", "QA", "DevOps", "Data", "Cloud"].map((d) => (
                <div key={d} className="py-2.5 text-center border border-hairline">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-ink/60">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="relative py-24 md:py-32 bg-bone border-t border-hairline">
        <div className="wrap">
          <Reveal animation="fade-up" className="mb-14">
            <p className="eyebrow mb-4 flex items-center">
              <span className="eyebrow-dot" />
              Client stories
            </p>
            <h2 className="display-serif text-4xl md:text-5xl leading-[1] tracking-tight text-ink font-normal">
              What they <em className="italic">say</em>.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-hairline">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} animation="fade-up" delay={i * 0.1}>
                <div className="p-8 md:p-10 h-full flex flex-col border-b md:border-b-0 md:border-r border-hairline last:border-r-0">
                  <span className="display-serif italic text-6xl text-gold/60 leading-none mb-1">&ldquo;</span>
                  <p className="pull-quote text-lg md:text-xl text-ink leading-[1.3] mb-8 flex-1">
                    {t.quote}
                  </p>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-gold text-gold" strokeWidth={0} />
                    ))}
                  </div>
                  <div className="border-t border-hairline pt-4">
                    <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50 mt-0.5">{t.role} · {t.company}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
