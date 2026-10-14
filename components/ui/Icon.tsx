import { cn } from "@/lib/cn";

const paths: Record<string, React.ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="3" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  screen: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
      <path d="M8.5 21h7M12 17v4" />
      <circle cx="12" cy="10.5" r="2.2" />
    </>
  ),
  question: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5z" />
      <path d="M10 7.8a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6.9v.4M12 13.3h.01" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20z" />
  ),
  breath: (
    <>
      <path d="M3 8h10.5a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5" />
      <path d="M3 16h7" />
    </>
  ),
  handover: (
    <>
      <path d="M4 19h4l3-3v-4" />
      <path d="M11 12h3l3-3V5" />
      <path d="M17 5h3" />
      <circle cx="5.5" cy="15.5" r="1.5" />
    </>
  ),
  toolkit: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.4A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  chevronLeft: <path d="M15 5l-7 7 7 7" />,
  chevronRight: <path d="M9 5l7 7-7 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  phone: (
    <path d="M5 3.5h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.8 6.8l1.4-2.2 4.3 1.7V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z" />
  ),
  quote: (
    <path d="M9.5 6.5C6.5 7.5 5 9.8 5 13v4.5h5V13H7.5c0-2 .9-3.3 2.6-4zM19 6.5c-3 1-4.5 3.3-4.5 6.5v4.5h5V13H17c0-2 .9-3.3 2.6-4z" />
  ),
};

export default function Icon({
  name,
  className,
  strokeWidth = 1.7,
}: {
  name: keyof typeof paths | string;
  className?: string;
  strokeWidth?: number;
}) {
  const filled = name === "quote";
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-5 w-5 shrink-0", className)}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] ?? null}
    </svg>
  );
}
