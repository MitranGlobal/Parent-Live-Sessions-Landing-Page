"use client";

import { useState } from "react";
import { faq } from "@/lib/content";
import { cn } from "@/lib/cn";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { F } from "@/components/ui/Free";

/** White FAQ: heading on the left, hairline accordion on the right. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-14 text-paper-ink md:py-20">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 md:px-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-24">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-6 max-w-[12ch] text-display-2"><F text={faq.heading} /></h2>
        </Reveal>

        <Reveal as="ul" className="border-b border-paper-line">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <li key={item.q} className="border-t border-paper-line">
                <h3 className="font-sans">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-xl font-semibold tracking-[-0.03em] md:py-6 md:text-[26px]"
                  >
                    <span><F text={item.q} /></span>
                    <span
                      className={cn(
                        "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-paper-line transition-all duration-300",
                        isOpen ? "rotate-45 border-black bg-black text-ink" : "bg-white"
                      )}
                    >
                      <Icon name="plus" className="h-5 w-5" strokeWidth={2} />
                    </span>
                  </button>
                </h3>
                {/* Answers stay in the DOM (readable by search engines); grid-rows animates open/close */}
                <div
                  id={id}
                  role="region"
                  aria-hidden={!isOpen}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[62ch] pb-6 text-lg leading-relaxed text-paper-muted md:text-xl"><F text={item.a} /></p>
                  </div>
                </div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
