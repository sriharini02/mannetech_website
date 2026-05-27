"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { COMPANY, PAGE_IMAGES, PAGES } from "@/lib/constants";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setStatus("sending");

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    setStatus("sent");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setStatus("error");

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  }
};

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-16 md:pt-48 md:pb-20 overflow-hidden bg-hero-gradient">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 hover:text-ivory transition-colors text-[0.6rem] sm:text-[0.7rem]">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">Contact</span>
            </Link>
          </Reveal>

          <Reveal animation="fade-up">
            <p className="eyebrow mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="eyebrow-dot" />
              {PAGES.contact.hero.eyebrow}
            </p>
          </Reveal>

          <RevealText
            as="h1"
            text={PAGES.contact.hero.headline}
            className="display-serif text-[12vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal"
            delay={0.1}
          />
          <h1 className="display-serif text-[12vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal">
            <span className="inline-block overflow-hidden align-bottom">
              <motion.em
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="italic inline-block text-gold-deep"
              >
                {PAGES.contact.hero.emphasis}
              </motion.em>
            </span>
            <span className="text-gold">.</span>
          </h1>
        </div>
      </section>

      {/* ══════════════════════ FORM + INFO ══════════════════════ */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-card border-t border-border">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <Reveal animation="fade-up" className="lg:col-span-5">
            <h2 className="display-serif text-2xl sm:text-3xl md:text-4xl text-ink font-normal mb-6 sm:mb-10 leading-[1.1]">
              Get in <em className="italic text-gold-deep">touch</em>.
            </h2>

            <div className="space-y-5 sm:space-y-8 mb-8 sm:mb-10">
              {[
                { icon: MapPin, label: "Studio", value: COMPANY.address },
                { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}` },
                { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: Clock, label: "Hours", value: COMPANY.hours },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-border">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-deep" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-graphite text-ink/50 mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-sm sm:text-base text-ink/80 hover:text-ink transition-colors link-editorial break-all">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-ink/80">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <ParallaxImage amount={30} className="aspect-video max-w-md">
              <Image
                src={PAGE_IMAGES.contact}
                alt="Manne Technologies — Austin, TX"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </ParallaxImage>
          </Reveal>

          {/* Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal animation="fade-up" delay={0.1}>
              <div className="bg-white border border-border p-6 sm:p-8 md:p-12">
                {status === "sent" ? (
                  <div className="text-center py-8 sm:py-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-5 h-5 sm:w-7 sm:h-7 text-ink" strokeWidth={2} />
                    </motion.div>
                    <h3 className="display-serif text-2xl sm:text-3xl text-ink mb-3">
                      Message <em className="italic text-gold-deep">sent</em>.
                    </h3>
                    <p className="text-xs sm:text-sm text-ink/60 mb-4 sm:mb-6">
                      We'll reply within 24 hours, Mon–Fri.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="link-editorial font-display text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="eyebrow text-ink mb-2 sm:mb-3 text-[0.6rem] sm:text-[0.65rem]">Send us a message</p>
                    <h3 className="display-serif text-xl sm:text-2xl md:text-3xl text-ink font-normal mb-6 sm:mb-8 leading-[1.1]">
                      Tell us about your <em className="italic">project</em>.
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="eyebrow text-ink block mb-1 text-[0.6rem] sm:text-[0.65rem]">Full name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="form-input text-sm sm:text-base"
                          placeholder="Jordan Reyes"
                        />
                      </div>
                      <div>
                        <label className="eyebrow text-ink block mb-1 text-[0.6rem] sm:text-[0.65rem]">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="form-input text-sm sm:text-base"
                          placeholder="jordan@example.com"
                        />
                      </div>
                      <div>
                        <label className="eyebrow text-ink block mb-1 text-[0.6rem] sm:text-[0.65rem]">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="form-input text-sm sm:text-base"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="eyebrow text-ink block mb-1 text-[0.6rem] sm:text-[0.65rem]">Message *</label>
                        <textarea
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="form-input text-sm sm:text-base"
                          placeholder="Tell us about your project, timeline, and goals..."
                          rows={4}
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-xs sm:text-sm text-red-600 bg-red-50 border border-red-200 p-3">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-primary w-full justify-center text-sm sm:text-base disabled:opacity-50"
                      >
                        <span>{status === "sending" ? "Sending..." : "Send message"}</span>
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
