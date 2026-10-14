"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { LOGO_WHITE, REGISTER_URL, announcement, brand } from "@/lib/content";
import RegisterButton from "./RegisterButton";

const links = [
  { label: "Sessions", href: "#sessions" },
  { label: "What you get", href: "#takeaways" },
  { label: "Facilitator", href: "#facilitator" },
  { label: "Register", href: "#seat" },
  { label: "FAQ", href: "#faq" },
];

/** Gradient announcement bar + solid black header, both fixed to the top. */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar */}
      <a
        href={REGISTER_URL}
        className="announce block px-4 py-2.5 text-center text-[13px] font-medium uppercase tracking-[0.02em] text-black transition-[filter] hover:brightness-105 md:text-[15px]"
      >
        <span aria-hidden className="mr-2">🔥</span>
        <span className="sm:hidden">{announcement.split(" · ").slice(0, 2).join(" · ")}</span>
        <span className="hidden sm:inline">{announcement}</span>
        <span className="ml-2 hidden underline underline-offset-4 sm:inline">{brand.ctaLabel}</span>
      </a>

      <header className={cn("bg-black transition-shadow", scrolled && "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]")}>
        <div className="mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between gap-4 px-5 md:h-[88px] md:px-14">
          <a href="#top" aria-label={brand.name} className="flex shrink-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_WHITE} alt={brand.name} className="h-12 w-auto md:h-16" />
          </a>

          <nav aria-label="Page sections" className="hidden items-center gap-9 xl:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[17px] font-medium text-ink transition-colors hover:text-gold">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5 md:gap-8">
            <a
              href={brand.loginUrl}
              className="hidden text-[17px] font-medium text-ink transition-colors hover:text-gold sm:inline"
            >
              {brand.loginLabel}
            </a>
            <RegisterButton size="md" className="px-5 py-2.5 text-[15px] md:px-6 md:py-3.5 md:text-[17px]" />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 xl:hidden"
            >
              <span className="relative block h-3 w-4">
                <span className={cn("absolute inset-x-0 top-0 h-[1.5px] bg-ink transition-transform", open && "translate-y-[5px] rotate-45")} />
                <span className={cn("absolute inset-x-0 bottom-0 h-[1.5px] bg-ink transition-transform", open && "-translate-y-[5px] -rotate-45")} />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              aria-label="Mobile menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-white/10 bg-black xl:hidden"
            >
              <div className="flex flex-col px-5 py-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/10 py-4 text-xl font-medium tracking-[-0.02em] text-ink last:border-0"
                  >
                    {l.label}
                  </a>
                ))}
                <a href={brand.loginUrl} className="py-4 text-xl font-medium text-ink-muted sm:hidden">
                  {brand.loginLabel}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
