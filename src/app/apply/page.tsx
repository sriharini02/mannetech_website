"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealText } from "@/components/Reveal";
import { JOBS, PAGES } from "@/lib/constants";

export default function ApplyPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    summary: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "application", data: form }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-16 md:pt-48 md:pb-20 overflow-hidden bg-hero-gradient">
        <div className="wrap relative">
          <Reveal animation="fade-up">
            <Link href="/careers" className="eyebrow inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 hover:text-ivory transition-colors text-[0.6rem] sm:text-[0.7rem]">
              <ArrowLeft className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>Back to careers</span>
            </Link>
          </Reveal>

          <Reveal animation="fade-up">
            <p className="eyebrow mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="eyebrow-dot" />
              {PAGES.apply.hero.eyebrow}
            </p>
          </Reveal>

          <RevealText
            as="h1"
            text={PAGES.apply.hero.headline}
            className="display-serif text-[16vw] sm:text-[20vw] md:text-[14vw] lg:text-[11vw] leading-[0.9] tracking-[-0.035em] text-ivory font-normal"
            delay={0.1}
          />
          <h1 className="display-serif text-[16vw] sm:text-[20vw] md:text-[14vw] lg:text-[11vw] leading-[0.9] tracking-[-0.035em] text-ivory font-normal">
            <span className="inline-block overflow-hidden align-bottom">
              <motion.em
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="italic inline-block text-gold-deep"
              >
                {PAGES.apply.hero.emphasis}
              </motion.em>
            </span>
            <span className="text-gold">.</span>
          </h1>

          <Reveal animation="fade-up" delay={0.7}>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light max-w-2xl mt-6 sm:mt-10">
              {PAGES.apply.hero.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ FORM ══════════════════════ */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-card border-t border-border">
        <div className="wrap max-w-[820px] mx-auto px-4 sm:px-6">
          {status === "sent" ? (
            <Reveal animation="scale">
              <div className="text-center py-12 sm:py-20 bg-white border border-border px-6 sm:px-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-7 sm:h-7 text-ink" strokeWidth={2} />
                </motion.div>
                <h2 className="display-serif text-3xl sm:text-4xl md:text-5xl text-ink font-normal mb-3 sm:mb-4">
                  Application <em className="italic text-gold-deep">submitted</em>.
                </h2>
                <p className="text-ink/60 text-sm sm:text-base mb-1 sm:mb-2">
                  Thank you, <strong className="text-ink">{form.firstName}</strong>.
                </p>
                <p className="text-ink/50 text-xs sm:text-sm">
                  We'll review your application and reach out at{" "}
                  <strong className="text-gold-deep">{form.email}</strong>.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-6 sm:mt-10">
                  <Link href="/careers" className="btn-ghost text-sm sm:text-base">
                    <span>View more positions</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                  </Link>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ firstName: "", lastName: "", email: "", phone: "", position: "", summary: "" });
                    }}
                    className="link-editorial font-display text-xs sm:text-sm"
                  >
                    Submit another application
                  </button>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal animation="fade-up">
              <div className="bg-white border border-border p-6 sm:p-8 md:p-12">
                <p className="eyebrow text-ink mb-3 sm:mb-4 text-[0.6rem] sm:text-[0.65rem]">Application form</p>
                <h2 className="display-serif text-2xl sm:text-3xl md:text-4xl text-ink font-normal mb-6 sm:mb-10 leading-[1.1]">
                  A few <em className="italic">details</em>, and we'll be in touch.
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="eyebrow text-ink block mb-1 text-[0.6rem] sm:text-[0.65rem]">First name *</label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="form-input text-sm sm:text-base"
                        placeholder="Jordan"
                      />
                    </div>
                    <div>
                      <label className="eyebrow text-ink block mb-1 text-[0.6rem] sm:text-[0.65rem]">Last name *</label>
                      <input
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="form-input text-sm sm:text-base"
                        placeholder="Reyes"
                      />
                    </div>
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
                    <label className="eyebrow text-ink block mb-1 text-[0.6rem] sm:text-[0.65rem]">Position applying for *</label>
                    <select
                      required
                      value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      className="form-input text-sm sm:text-base"
                    >
                      <option value="" disabled>Select a position</option>
                      {JOBS.map((job) => (
                        <option key={job.slug} value={job.title}>
                          {job.title} ({job.code})
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="eyebrow text-ink block mb-1 text-[0.6rem] sm:text-[0.65rem]">Summary / Cover letter *</label>
                    <textarea
                      required
                      value={form.summary}
                      onChange={(e) => setForm({ ...form, summary: e.target.value })}
                      className="form-input text-sm sm:text-base"
                      placeholder="Tell us about your experience, skills, and why you'd be a great fit..."
                      rows={5}
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
                    <span>{status === "sending" ? "Submitting..." : "Submit application"}</span>
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                  </button>
                </form>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
