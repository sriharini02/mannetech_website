"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealText } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { COMPANY, PAGE_IMAGES } from "@/lib/constants";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", data: form }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/" className="eyebrow flex items-center gap-2 mb-10 hover:text-ink transition-colors">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">Contact</span>
            </Link>
          </Reveal>

          <Reveal animation="fade-up">
            <p className="eyebrow mb-6 flex items-center">
              <span className="eyebrow-dot" />
              Let's talk
            </p>
          </Reveal>

          <RevealText
            as="h1"
            text="Let's start a"
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
                conversation
              </motion.em>
            </span>
            <span className="text-gold">.</span>
          </h1>
        </div>
      </section>

      {/* ══════════════════════ FORM + INFO ══════════════════════ */}
      <section className="relative py-16 md:py-24 bg-bone border-t border-hairline">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Info */}
          <Reveal animation="fade-up" className="lg:col-span-5">
            <h2 className="display-serif text-3xl md:text-4xl text-ink font-normal mb-10 leading-[1.1]">
              Get in <em className="italic text-gold-deep">touch</em>.
            </h2>

            <div className="space-y-8 mb-10">
              {[
                { icon: MapPin, label: "Studio", value: COMPANY.address },
                { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}` },
                { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: Clock, label: "Hours", value: COMPANY.hours },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-start gap-4 pb-6 border-b border-hairline">
                  <div className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-gold-deep" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-graphite mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-ink/80 hover:text-ink transition-colors link-editorial">
                        {value}
                      </a>
                    ) : (
                      <p className="text-ink/80">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <ParallaxImage amount={30} className="aspect-video">
              <Image
                src={PAGE_IMAGES.contact}
                alt="Han Solutions studio — Edison, NJ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </ParallaxImage>
          </Reveal>

          {/* Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal animation="fade-up" delay={0.1}>
              <div className="bg-ivory border border-hairline p-8 md:p-12">
                {status === "sent" ? (
                  <div className="text-center py-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-16 h-16 bg-gold rounded-full mx-auto mb-6 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-7 h-7 text-ink" strokeWidth={2} />
                    </motion.div>
                    <h3 className="display-serif text-3xl text-ink mb-3">
                      Message <em className="italic text-gold-deep">sent</em>.
                    </h3>
                    <p className="text-sm text-ink/60 mb-6">
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
                    <p className="eyebrow mb-3">Send us a message</p>
                    <h3 className="display-serif text-2xl md:text-3xl text-ink font-normal mb-8 leading-[1.1]">
                      Tell us about your <em className="italic">project</em>.
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="eyebrow block mb-1">Full name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="form-input"
                          placeholder="Jordan Reyes"
                        />
                      </div>
                      <div>
                        <label className="eyebrow block mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="form-input"
                          placeholder="jordan@example.com"
                        />
                      </div>
                      <div>
                        <label className="eyebrow block mb-1">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="form-input"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="eyebrow block mb-1">Message *</label>
                        <textarea
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="form-input"
                          placeholder="Tell us about your project, timeline, and goals..."
                          rows={5}
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 p-3">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-primary w-full justify-center disabled:opacity-50"
                      >
                        <span>{status === "sending" ? "Sending..." : "Send message"}</span>
                        <Send className="w-4 h-4 btn-arrow" strokeWidth={2} />
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
