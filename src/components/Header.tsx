"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SERVICES, COMPANY } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    if (mobileOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [mobileOpen, closeMobile]);

  const showTransparent = false;

  const navItems = NAV_LINKS;
  const servicesItems = SERVICES;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 bg-primary/95 backdrop-blur-xl border-b border-white/10 shadow-xl"
      >
        <div className="wrap">
          <nav className="flex items-center justify-between h-16 sm:h-20 md:h-24 px-4">
            <Link
              href="/"
              className="group relative z-[60] inline-flex items-center shrink-0"
              aria-label="Manne Technologies — home"
            >
              <span className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-ivory tracking-tight leading-none">
                Manne<span className="text-accent font-bold">.</span>
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-ivory/70 ml-1.5 sm:ml-2 hidden xs:inline sm:inline">
                Technologies
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((link) => {
                if (link.label === "Services") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setServicesHover(true)}
                      onMouseLeave={() => setServicesHover(false)}
                    >
                      <Link
                        href={link.href}
                        className={`px-3 xl:px-4 py-2 text-sm text-ivory hover:text-accent transition-colors relative whitespace-nowrap ${
  pathname.startsWith("/services")
  ? "text-accent font-semibold"
  : ""
}`}
                      >
                        {link.label}
                        {pathname.startsWith("/services") && (
                          <motion.span
                            layoutId="nav-dot"
                            className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full"
                          />
                        )}
                      </Link>

                      <AnimatePresence>
                        {servicesHover && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[42rem] max-w-[90vw]"
                          >
                            <div className="bg-primary border border-border rounded-2xl shadow-premium-lg p-4 md:p-6">
                              <div className="flex items-center justify-between mb-4">
                                <p className="eyebrow flex items-center">
                                  <span className="eyebrow-dot" />
                                  All Services
                                </p>
                                <Link href="/services" className="text-xs text-accent-light hover:text-accent transition-colors font-mono tracking-wider uppercase shrink-0">
                                  View all →
                                </Link>
                              </div>
                              <div className="grid grid-cols-2 gap-x-4 xl:gap-x-6 gap-y-1">
                                {servicesItems.map((s, i) => (
                                  <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    className="group/item flex items-center justify-between py-2.5 border-b border-white/10 text-sm text-ivory hover:text-ivory/80 transition-colors"
                                  >
                                    <span className="flex items-center gap-3 min-w-0">
                                      <span className="font-mono text-[10px] text-ivory/60 group-hover/item:text-ivory transition-colors shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                      </span>
                                      <span className="truncate group-hover/item:translate-x-0.5 transition-transform duration-300">
                                        {s.title}
                                      </span>
                                    </span>
                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity text-accent-light shrink-0 ml-2" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 xl:px-4 py-2 text-sm text-ivory hover:text-accent transition-colors relative whitespace-nowrap ${
                      active ? "text-accent font-semibold" : ""
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex btn-primary text-sm"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 btn-arrow" strokeWidth={2} />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative z-[60] w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-border text-ivory"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="x"
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 45, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="m"
                      initial={{ rotate: 45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-primary overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="h-full pt-20 sm:pt-24 pb-6 overflow-y-auto overscroll-contain"
            >
              <div className="px-4 sm:px-6 md:px-8 mx-auto max-w-lg flex flex-col min-h-full">
                <div className="flex-1 space-y-1">
                  {navItems.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ x: -24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                    >
                      {link.label === "Services" && i === 1 ? (
                        <div                         className="border-b border-border py-4 sm:py-5">
                          <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <span className="font-mono text-[10px] text-ivory/60 shrink-0">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <Link
                              href={link.href}
                              onClick={closeMobile}
                              className="font-display text-2xl sm:text-3xl text-ivory hover:translate-x-1 transition-transform"
                            >
                              {link.label}
                            </Link>
                          </div>
                          <div className="ml-8 sm:ml-10 space-y-0.5">
                            {servicesItems.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                onClick={closeMobile}
                                className="block text-sm text-ivory hover:text-ivory/80 py-1.5 sm:py-2 transition-colors border-b border-white/10 last:border-b-0"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 border-b border-border group"
                        >
                          <span className="font-mono text-[10px] text-ivory/60 group-hover:text-ivory transition-colors shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-display text-2xl sm:text-3xl text-ivory group-hover:translate-x-1 transition-transform">
                            {link.label}
                          </span>
                          <ArrowUpRight className="ml-auto w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-ivory transition-colors shrink-0" />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 sm:pt-8 mt-auto border-t border-border"
                >
                  <p className="eyebrow mb-3">Get in touch</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-display text-lg sm:text-xl text-ivory link-editorial break-all"
                  >
                    {COMPANY.email}
                  </a>
                  <p className="text-ivory/60 text-xs sm:text-sm mt-2">
                    {COMPANY.phone}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6">
                    <Link
                      href="/contact"
                      onClick={closeMobile}
                      className="btn-primary justify-center text-sm"
                    >
                      <span>Contact Us</span>
                      <ArrowUpRight className="w-3.5 h-3.5 btn-arrow" strokeWidth={2} />
                    </Link>
                    <Link
                      href="/book-appointment"
                      onClick={closeMobile}
                      className="btn-ghost justify-center text-sm"
                    >
                      <span>Book Appointment</span>
                      <ArrowUpRight className="w-3.5 h-3.5 btn-arrow" strokeWidth={2} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
