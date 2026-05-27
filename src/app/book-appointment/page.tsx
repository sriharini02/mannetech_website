"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CalendarDays, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealText } from "@/components/Reveal";
import { PAGES } from "@/lib/constants";

const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function BookAppointmentPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", notes: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const daysInMonth = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const total = new Date(currentYear, currentMonth + 1, 0).getDate();
    const blanks = Array.from({ length: firstDay }, () => null);
    const days = Array.from({ length: total }, (_, i) => i + 1);
    return [...blanks, ...days];
  }, [currentMonth, currentYear]);

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); }
    else setCurrentMonth(currentMonth - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); }
    else setCurrentMonth(currentMonth + 1);
  };

  const isBookable = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    const dow = d.getDay();
    return dow !== 0 && dow !== 6 && d >= new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "appointment",
          data: {
            ...form,
            date: `${MONTHS[currentMonth]} ${selectedDate}, ${currentYear}`,
            time: selectedSlot,
          },
        }),
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
            <Link href="/" className="eyebrow inline-flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 hover:text-ivory transition-colors text-[0.6rem] sm:text-[0.7rem]">
              <span>Home</span>
              <span>/</span>
              <span className="eyebrow-ink">Book a call</span>
            </Link>
          </Reveal>

          <Reveal animation="fade-up">
            <p className="eyebrow mb-4 sm:mb-6 flex items-center text-[0.6rem] sm:text-[0.7rem]">
              <span className="eyebrow-dot" />
              {PAGES.bookAppointment.hero.eyebrow}
            </p>
          </Reveal>

          <RevealText
            as="h1"
            text={PAGES.bookAppointment.hero.headline}
            className="display-serif text-[14vw] sm:text-[18vw] md:text-[12vw] lg:text-[9vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal"
            delay={0.1}
          />
          <h1 className="display-serif text-[14vw] sm:text-[18vw] md:text-[12vw] lg:text-[9vw] leading-[0.95] tracking-[-0.035em] text-ivory font-normal">
            <span className="inline-block overflow-hidden align-bottom">
              <motion.em
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="italic inline-block text-gold-deep"
              >
                {PAGES.bookAppointment.hero.emphasis}
              </motion.em>
            </span>
            <span className="text-gold">.</span>
          </h1>

          <Reveal animation="fade-up" delay={0.8}>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light max-w-2xl mt-6 sm:mt-10">
              {PAGES.bookAppointment.hero.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ CALENDAR + FORM ══════════════════════ */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-card border-t border-border">
        <div className="wrap">
          {status === "sent" ? (
            <Reveal animation="scale">
              <div className="max-w-xl mx-auto text-center py-12 sm:py-20 bg-white border border-border px-6 sm:px-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center"
                >
                  <CalendarDays className="w-5 h-5 sm:w-7 sm:h-7 text-ink" strokeWidth={1.8} />
                </motion.div>
                <h2 className="display-serif text-3xl sm:text-4xl md:text-5xl text-ink font-normal mb-3 sm:mb-4">
                  Appointment <em className="italic text-gold-deep">requested</em>.
                </h2>
                <p className="text-ink/60 text-sm sm:text-base mb-1 sm:mb-2">
                  <strong className="text-ink">{MONTHS[currentMonth]} {selectedDate}, {currentYear}</strong>
                  {" "}at{" "}
                  <strong className="text-gold-deep">{selectedSlot}</strong>
                </p>
                <p className="text-xs sm:text-sm text-ink/50">
                  Confirmation incoming to <strong>{form.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setSelectedDate(null);
                    setSelectedSlot(null);
                    setForm({ firstName: "", lastName: "", email: "", notes: "" });
                  }}
                  className="link-editorial font-display text-xs sm:text-sm mt-6 sm:mt-10"
                >
                  Book another appointment
                </button>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
              {/* Calendar */}
              <Reveal animation="fade-up">
                <div className="bg-white border border-border p-4 sm:p-6 md:p-10">
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <button
                      onClick={prevMonth}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border text-ink flex items-center justify-center hover:border-ink hover:bg-primary hover:text-ivory transition-colors"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.5} />
                    </button>
                    <div className="text-center">
                      <p className="eyebrow text-ink mb-1 text-[0.55rem] sm:text-[0.65rem]">Select a date</p>
                      <h3 className="display-serif text-lg sm:text-2xl text-ink font-normal">
                        {MONTHS[currentMonth]} {currentYear}
                      </h3>
                    </div>
                    <button
                      onClick={nextMonth}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border text-ink flex items-center justify-center hover:border-ink hover:bg-primary hover:text-ivory transition-colors"
                      aria-label="Next month"
                    >
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.5} />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                    {DAYS.map((d) => (
                      <div key={d} className="text-center font-mono text-[8px] sm:text-[10px] text-graphite text-ink/50 tracking-wider py-1.5 sm:py-2 uppercase">
                        {d}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                    {daysInMonth.map((day, i) => (
                      <div key={i} className="aspect-square flex items-center justify-center">
                        {day !== null ? (
                          <button
                            disabled={!isBookable(day)}
                            onClick={() => { setSelectedDate(day); setSelectedSlot(null); }}
                            className={`w-full h-full flex items-center justify-center text-[10px] sm:text-sm font-display transition-all rounded-full ${
                              selectedDate === day
                                ? "bg-primary text-ivory font-semibold"
                                : isBookable(day)
                                ? "hover:bg-ink/5 text-ink/70 hover:text-ink"
                                : "text-ink/30 cursor-not-allowed"
                            }`}
                          >
                            {day}
                          </button>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-border"
                    >
                      <p className="eyebrow text-ink mb-3 sm:mb-4 text-[0.55rem] sm:text-[0.65rem]">
                        Available slots · {MONTHS[currentMonth]} {selectedDate}
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-1.5 sm:py-2 px-1 text-[9px] sm:text-xs text-center border font-mono transition-all ${
                              selectedSlot === slot
                                ? "border-ink bg-primary text-ivory"
                                : "border-border text-ink/60 hover:border-ink"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </Reveal>

              {/* Form */}
              <Reveal animation="fade-up" delay={0.1}>
                <div className="bg-white border border-border p-4 sm:p-6 md:p-10 lg:sticky lg:top-28">
                  <p className="eyebrow text-ink mb-2 sm:mb-3 text-[0.6rem] sm:text-[0.65rem]">Your details</p>
                  <h3 className="display-serif text-xl sm:text-2xl md:text-3xl text-ink font-normal mb-6 sm:mb-8 leading-[1.1]">
                    Just the <em className="italic">essentials</em>.
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
                      <label className="eyebrow text-ink block mb-1 text-[0.6rem] sm:text-[0.65rem]">Notes</label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        className="form-input text-sm sm:text-base"
                        placeholder="Anything we should know..."
                        rows={3}
                      />
                    </div>

                    {selectedDate && selectedSlot && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-primary text-ivory p-3 sm:p-4 border border-primary text-sm"
                      >
                        <p className="font-mono text-[8px] sm:text-[10px] tracking-widest uppercase text-accent mb-1 sm:mb-2">
                          Selected appointment
                        </p>
                        <p className="text-xs sm:text-sm">
                          {MONTHS[currentMonth]} {selectedDate}, {currentYear} at{" "}
                          <span className="text-accent font-semibold">{selectedSlot}</span>
                        </p>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <p className="text-xs sm:text-sm text-red-600 bg-red-50 border border-red-200 p-3">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={!selectedDate || !selectedSlot || status === "sending"}
                      className="btn-primary w-full justify-center text-sm sm:text-base disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <span>{status === "sending" ? "Booking..." : "Book appointment"}</span>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 btn-arrow" strokeWidth={2} />
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
