"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  y?: number;
  /** Animate direct children marked with data-reveal-item one after another */
  stagger?: boolean;
  id?: string;
};

/** Scroll-reveal wrapper (same pattern as the main MiTran site). */
export default function Reveal({ children, className, as: Tag = "div", delay = 0, y = 32, stagger = false, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const targets = stagger ? el.querySelectorAll("[data-reveal-item]") : el;
      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: stagger ? 0.09 : 0,
        delay,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, y, stagger]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref} className={className} id={id}>
      {children}
    </Comp>
  );
}
