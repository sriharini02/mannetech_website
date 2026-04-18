"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 backdrop-blur-xl border-b border-hairline"
            : "bg-transparent"
        }`}
      >
        <div className="wrap">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-[60]"
              aria-label="Han Solutions — home"
            >
              <Logo
                variant="mark"
                className="w-11 h-11 md:w-12 md:h-12 transition-transform duration-500 group-hover:rotate-[-6deg]"
                inkColor="#0B2545"
              />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-display text-lg md:text-xl font-semibold text-ink tracking-tight">
                  Han
                </span>
                <span className="font-mono text-[10px] tracking-[0.22em] text-graphite uppercase mt-0.5">
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
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
                        className={`px-4 py-2 text-sm text-ink/80 hover:text-ink transition-colors relative ${
                          pathname.startsWith("/services") ? "text-ink font-medium" : ""
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

                      {/* Services mega-menu */}
                      <AnimatePresence>
                        {servicesHover && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[720px]"
                          >
                            <div className="bg-ivory border border-hairline rounded-sm shadow-[0_30px_60px_-15px_rgba(11,37,69,0.15)] p-6">
                              <p className="eyebrow mb-4 flex items-center">
                                <span className="eyebrow-dot" />
                                All Services
                              </p>
                              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                                {SERVICES.map((s, i) => (
                                  <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    className="group/item flex items-center justify-between py-2.5 border-b border-hairline-soft text-sm text-ink/80 hover:text-ink transition-colors"
                                  >
                                    <span className="flex items-center gap-3">
                                      <span className="font-mono text-[10px] text-graphite group-hover/item:text-gold-deep transition-colors">
                                        {String(i + 1).padStart(2, "0")}
                                      </span>
                                      <span className="group-hover/item:translate-x-0.5 transition-transform duration-300">
                                        {s.title}
                                      </span>
                                    </span>
                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity text-gold-deep" />
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
                    className={`px-4 py-2 text-sm text-ink/80 hover:text-ink transition-colors relative ${
                      active ? "text-ink font-medium" : ""
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden lg:inline-flex btn-primary">
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 btn-arrow" strokeWidth={2} />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative z-[60] w-11 h-11 flex items-center justify-center rounded-full border border-hairline text-ink"
                aria-label="Toggle menu"
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
            className="fixed inset-0 z-40 lg:hidden bg-cream"
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full pt-28 pb-10 overflow-y-auto wrap flex flex-col"
            >
              <div className="flex-1 space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-baseline gap-4 py-4 border-b border-hairline group"
                    >
                      <span className="font-mono text-[10px] text-graphite group-hover:text-gold-deep transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl md:text-4xl text-ink group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                      <ArrowUpRight className="ml-auto w-5 h-5 text-ink/40 group-hover:text-ink transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-8 mt-8 border-t border-hairline"
              >
                <p className="eyebrow mb-3">Get in touch</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="font-display text-2xl text-ink link-editorial"
                >
                  {COMPANY.email}
                </a>
                <p className="text-graphite text-sm mt-2">
                  {COMPANY.phone} · {COMPANY.address}
                </p>
                <Link href="/contact" className="btn-primary mt-8 w-full justify-center">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 btn-arrow" strokeWidth={2} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
