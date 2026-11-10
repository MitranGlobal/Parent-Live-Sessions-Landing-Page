/**
 * ALL page copy lives here. Edit this file to change wording, dates or links.
 *
 * Any "Free"/"free" in these strings is automatically shown as a highlighted
 * chip on the page (see components/ui/Free.tsx).
 *
 * ONE-DAY / TWO-DAY: see the EVENT FORMAT SWITCH below.
 *
 * Use "free" sparingly — it currently appears in 8 places: top bar, hero
 * tagline, hero event tile, stats heading, agenda heading, seat price,
 * one FAQ question and the closing line.
 */

export const REGISTER_URL =
  "https://hub.mitranglobal.com/web/checkout/6aed769c37e24ae81be618e5";

export const LOGO_WHITE =
  "https://res.cloudinary.com/twteccae/image/upload/Logo_White_szjcqg.svg";

export const EVENT_NAME = "Imparting Positivity Masterclass";

/* ═══════════════════════════════════════════════════════════════════════
 * EVENT FORMAT SWITCH
 *
 *   "one-day"  → one evening, the two parts run back to back (current)
 *   "two-day"  → two evenings, Session 1 and Session 2 on separate days
 *
 * Change this ONE word to switch the whole page — hero, top bar, agenda
 * layout, registration card, FAQ, closing line and the Google description.
 * Each format keeps its own dates and wording in ONE_DAY / TWO_DAY below,
 * so update the dates there before switching.
 * ═══════════════════════════════════════════════════════════════════════ */
export type EventFormat = "one-day" | "two-day";
export const EVENT_FORMAT = "one-day" as EventFormat; // ← "one-day" or "two-day"

/* The two parts of the masterclass — same content in both formats */
const PART_1 = {
  title: "Beneath “Fine”",
  question: "What is really going on with my teenager?",
  points: [
    "Why behaviour is communication, and why the phone is usually a symptom",
    "The reminder loop, and how to step out of it",
    "Pressure, the exam blank and the fear teens hide",
    "The first hour after a bad result",
    "When it’s time to bring in a professional",
  ],
};
const PART_2 = {
  title: "From managing to supporting",
  question: "How do I help without doing it all myself?",
  points: [
    "The handover ladder: moving tasks from you to them",
    "A phone and sleep plan your teen helps write",
    "Self-belief, giving up and “why should I?”",
    "Conversations that open doors",
    "One handover, one conversation, one small stretch for this week",
  ],
};

type Session = typeof PART_1 & {
  label: string;
  short: string;
  date: string;
  time: string;
  weekday: string;
  day: string;
  month: string;
};

type EventCopy = {
  metaTitle: string;
  metaDescription: string;
  navAgendaLabel: string;
  announcement: { short: string; long: string };
  heroTagline: string;
  heroSub: string;
  heroMeta: { label: string; value: string }[];
  tileLines: { day: string; title: string }[];
  stats: { value: string; suffix: string; label: string }[];
  outcomesEyebrow: string;
  sessionsIntro: { eyebrow: string; heading: string; sub: string };
  /** One-day only: the date banner above the two parts */
  banner: { weekday: string; day: string; month: string; time: string; pill: string };
  sessions: Session[];
  seat: {
    sub: string;
    passSub: string;
    priceNote: string;
    includes: { title: string; body: string }[];
    privacy: string;
    secondaryBody: string;
  };
  faqItems: { q: string; a: string }[];
  closing: { heading: string; sub: string; disclaimer: string };
};

const SHARED_INCLUDES = [
  { title: "Your questions answered live", body: "" },
  { title: "Two-page parent toolkit", body: "Including a page for the other parent." },
  { title: "Parent WhatsApp community", body: "You can leave any time." },
];
const FAQ_PREPARE = {
  q: "What should I bring or prepare for the session?",
  a: "Please keep a notebook and pen ready to take notes, ensure you have a stable internet connection, and join from a quiet, distraction-free environment.",
};

/* ─────────────── ONE DAY · Fri 13 Nov 2026 ─────────────── */
const ONE_DAY: EventCopy = {
  metaTitle: "Imparting Positivity Masterclass — Free Live Session for Parents & Teens | MiTran Global",
  metaDescription:
    "Your teenager says “fine.” What are they not telling you? A free live online session for parents and teens with Vidyashankar Guru — Fri 13 Nov, 7–8:30 pm IST.",
  navAgendaLabel: "Agenda",
  announcement: {
    short: "Free live masterclass · Fri 13 Nov",
    long: "Free live online masterclass · Fri 13 Nov · 7–8:30 pm IST · For parents & teens",
  },
  heroTagline: "Free live online session · 1 evening, 2 parts · For parents & teens (11⁠–⁠17)",
  heroSub:
    "One live session for parents and teens with Vidyashankar Guru on pressure, phones, silence and setbacks, and how to help your child without nagging, fighting or doing it all yourself.",
  heroMeta: [
    { label: "Date", value: "Fri 13 Nov" },
    { label: "Time", value: "7:00–8:30 pm IST" },
    { label: "Place", value: "Live online" },
  ],
  tileLines: [
    { day: "Part 1", title: PART_1.title },
    { day: "Part 2", title: PART_2.title },
  ],
  stats: [
    { value: "1", suffix: "", label: "live evening, in two parts" },
    { value: "90", suffix: "min", label: "live, with your questions answered" },
    { value: "25k", suffix: "+", label: "teens and professionals trained by Vidyashankar Guru across 40+ nationalities" },
  ],
  outcomesEyebrow: "After the session",
  sessionsIntro: {
    eyebrow: "Agenda",
    heading: "One free evening. Two shifts in how you see it.",
    sub: "The session for parents and teens runs in two parts, built on real situations families bring to us, with one thing to try the same night.",
  },
  banner: { weekday: "Friday", day: "13", month: "Nov", time: "7:00–8:30 pm IST · Live online", pill: "One evening · Two parts" },
  sessions: [
    { ...PART_1, label: "Part 1", short: "Part 1", date: "Friday 13 November", time: "First half", weekday: "Friday", day: "13", month: "Nov" },
    { ...PART_2, label: "Part 2", short: "Part 2", date: "Friday 13 November", time: "Second half", weekday: "Friday", day: "13", month: "Nov" },
  ],
  seat: {
    sub: "One evening, two parts — what is really going on, then how to support it.",
    passSub: "Live online session for parents & teens · Fri 13 November · 7:00–8:30 pm IST",
    priceNote: "No fee to attend",
    includes: [
      { title: "Live session · Fri 13 Nov", body: "7:00–8:30 pm IST · Live online" },
      { title: `Part 1 · ${PART_1.title}`, body: PART_1.question },
      { title: `Part 2 · ${PART_2.title}`, body: PART_2.question },
      ...SHARED_INCLUDES,
    ],
    privacy:
      "We use your details only to send the session link and the toolkit. You can leave the parent WhatsApp community any time. Please don’t share your child’s name or school.",
    secondaryBody:
      "This session is for parents and teens together. Bring your spouse along too, or share the toolkit, which has a page for the other parent.",
  },
  faqItems: [
    { q: "Is it really free?", a: "Yes. There is no fee for the session. Just register to get your session link." },
    FAQ_PREPARE,
    { q: "Is there a recording?", a: "No. There are no recordings available, so kindly attend the live session." },
    { q: "Can my teen and spouse join?", a: "Yes. This session is for parents and teens. Bring your spouse along too" },
    {
      q: "Is this a course, or tuition?",
      a: "Neither. This is one live session for parents and teens. If you want support for your own child afterwards, our team will explain the options. There is no pressure to take any.",
    },
  ],
  closing: {
    heading: "One evening can change how your home talks.",
    sub: "The session is free. Taking an evening to understand your child better is already a strong start.",
    disclaimer: "This session is education for parents and teens, not therapy, and does not diagnose or treat any condition.",
  },
};

/* ─────────────── TWO DAYS · template (last used Fri 13 & Sat 14 Nov 2026) ─────────────── */
const TWO_DAY: EventCopy = {
  metaTitle: "Imparting Positivity Masterclass — Free Live Sessions for Parents & Teens | MiTran Global",
  metaDescription:
    "Your teenager says “fine.” What are they not telling you? Two free live online sessions for parents and teens with Vidyashankar Guru — Fri 13 & Sat 14 Nov, 7–8:30 pm IST.",
  navAgendaLabel: "Sessions",
  announcement: {
    short: "Free live masterclass · 13 & 14 Nov",
    long: "Free live online masterclass · Fri 13 & Sat 14 Nov · 7–8:30 pm IST · For parents & teens",
  },
  heroTagline: "Free live online sessions · 2 evenings · For parents & teens (11⁠–⁠17)",
  heroSub:
    "Two live sessions for parents and teens with Vidyashankar Guru on pressure, phones, silence and setbacks, and how to help your child without nagging, fighting or doing it all yourself.",
  heroMeta: [
    { label: "Dates", value: "Fri 13 & Sat 14 Nov" },
    { label: "Time", value: "7:00–8:30 pm IST" },
    { label: "Place", value: "Live online" },
  ],
  tileLines: [
    { day: "Fri 13 Nov", title: PART_1.title },
    { day: "Sat 14 Nov", title: PART_2.title },
  ],
  stats: [
    { value: "2", suffix: "", label: "live evenings, each one standing on its own" },
    { value: "90", suffix: "min", label: "per session, with your questions answered live" },
    { value: "25k", suffix: "+", label: "teens and professionals trained by Vidyashankar Guru across 40+ nationalities" },
  ],
  outcomesEyebrow: "After the sessions",
  sessionsIntro: {
    eyebrow: "Agenda",
    heading: "Two free evenings. Two shifts in how you see it.",
    sub: "Each session for parents and teens is built on real situations families bring to us, with one thing to try the same night.",
  },
  banner: { weekday: "", day: "", month: "", time: "", pill: "" }, // not used in two-day
  sessions: [
    { ...PART_1, label: "Session 1 · Friday 13 November", short: "Session 1", date: "Friday 13 November", time: "7:00–8:30 pm IST", weekday: "Friday", day: "13", month: "Nov" },
    { ...PART_2, label: "Session 2 · Saturday 14 November", short: "Session 2", date: "Saturday 14 November", time: "7:00–8:30 pm IST", weekday: "Saturday", day: "14", month: "Nov" },
  ],
  seat: {
    sub: "Attend one evening or both. Each session stands on its own.",
    passSub: "Live online sessions for parents & teens · Fri 13 & Sat 14 November · 7:00–8:30 pm IST",
    priceNote: "No fee for either session",
    includes: [
      { title: `Session 1 · ${PART_1.title}`, body: "Fri 13 Nov · 7:00–8:30 pm IST · Live online" },
      { title: `Session 2 · ${PART_2.title}`, body: "Sat 14 Nov · 7:00–8:30 pm IST · Live online" },
      ...SHARED_INCLUDES,
    ],
    privacy:
      "We use your details only to send session links and the toolkit. You can leave the parent WhatsApp community any time. Please don’t share your child’s name or school.",
    secondaryBody:
      "These sessions are for parents and teens together. Bring your spouse along too, or share the toolkit, which has a page for the other parent.",
  },
  faqItems: [
    { q: "Is it really free?", a: "Yes. There is no fee for either session. Just register to get your session links." },
    FAQ_PREPARE,
    {
      q: "Do I need to attend both evenings?",
      a: "Yes, it is mandatory to attend both the sessions. There are no recordings available, so kindly attend the live sessions",
    },
    { q: "Can my teen and spouse join?", a: "Yes. These sessions are for parents and teens. Bring your spouse along too" },
    {
      q: "Is this a course, or tuition?",
      a: "Neither. These are two live sessions for parents and teens. If you want support for your own child afterwards, our team will explain the options. There is no pressure to take any.",
    },
  ],
  closing: {
    heading: "Two evenings can change how your home talks.",
    sub: "Both sessions are free. Taking an evening to understand your child better is already a strong start.",
    disclaimer: "These sessions are education for parents and teens, not therapy, and do not diagnose or treat any condition.",
  },
};

/** The active format's copy. Components read from this (and the exports below). */
export const event: EventCopy = EVENT_FORMAT === "one-day" ? ONE_DAY : TWO_DAY;

export const brand = {
  name: "MiTran Global",
  ctaLabel: "Register now",
};

/* Top announcement bar */
export const announcement = event.announcement;

/**
 * Optional photography. Drop files into /public and put the path here
 * (e.g. "/hero.jpg"). Empty strings show the built-in gold "stage light" art.
 */
export const images = {
  hero: "",
  session1: "/session-1.png", // 2:1 crop, centre is kept
  session2: "/session-2.png",
  facilitator: "/vidyashankar-guru.png", // 16:10
  closing: "",
};

/* ───────────────────────── Hero ───────────────────────── */
export const hero = {
  eyebrow: EVENT_NAME,
  tagline: event.heroTagline,
  headlineA: "Your teenager says “fine.”",
  headlineB: "What are they not telling you?",
  sub: event.heroSub,
  meta: event.heroMeta,
  sessions: event.tileLines,
};

/* ───────────────────── Stats band ───────────────────── */
export const statsIntro = {
  heading: "A free live masterclass for parents and teens",
  sub: "For families with children aged 11⁠–⁠17. Pressure, phones, silence and setbacks — and how to help your child without nagging, fighting or doing it all yourself.",
};

export const stats = event.stats;

/* ─────────────────── Recognise (parent voices) ─────────────────── */
export const recognise = {
  eyebrow: "Sound familiar?",
  heading: "If you’ve reminded them a hundred times, you’re not alone.",
  sub:
    "These are the things parents tell us most often. None of them, by itself, means something is wrong with your child.",
  // image: file in /public. Empty string = gold art.
  // Card shapes repeat wide (3:2) → tall (4:5) → square-ish.
  items: [
    { title: "The reminder loop", body: "“I remind, she shouts, I feel terrible, and tomorrow we do it all again.”", image: "/familiar-1.png" }, // familiar-1.png · wide
    { title: "The phone and the late night", body: "Awake until 2 am, asleep through the morning, angry when the screen goes off.", image: "/familiar-2.png" }, // familiar-2.png · tall
    { title: "Going blank in the exam", body: "“He knew it at home.” And a fear he never mentioned until it was too late.", image: "/familiar-3.png" }, // familiar-3.png · square
    { title: "“Why should I?”", body: "Gives up the moment it gets hard, or does the bare minimum.", image: "/familiar-4.png" }, // familiar-4.png · wide
    { title: "The closed door", body: "One-word answers at home, a very different child around friends.", image: "/familiar-5.png" }, // familiar-5.png · tall
    { title: "Doing it all alone", body: "One parent carries everything. The other says, “All teens are like this.”", image: "/familiar-6.png" }, // familiar-6.png · square
  ],
};

/* ─────────────────── Outcomes (positive mirror of "Sound familiar?") ─────────────────── */
export const outcomes = {
  eyebrow: event.outcomesEyebrow,
  heading: "What home can start to feel like.",
  sub:
    "The same six moments, turned around. Small, practical shifts — one handover, one conversation, one stretch at a time.",
  // image: file in /public. Empty string = gold art.
  items: [
    { title: "Out of the reminder loop", body: "Fewer reminders, more ownership. You hand over one task and step back — no shouting needed.", image: "/outcome-1.png" }, // outcome-1 · wide
    { title: "A phone and sleep plan that holds", body: "A plan your teen helped write, so nights end earlier and mornings start calmer.", image: "/outcome-2.png" }, // outcome-2 · tall
    { title: "Steady in the exam hall", body: "A simple routine for before and during exams, so what they know at home shows up on paper.", image: "/outcome-3.png" }, // outcome-3 · square
    { title: "From “Why should I?” to “Let me try”", body: "Small stretches build real self-belief, so effort doesn’t stop the moment it gets hard.", image: "/outcome-4.png" }, // outcome-4 · wide
    { title: "The door opens again", body: "Better questions than “How was your day?” — and conversations your teen actually wants to have.", image: "/outcome-5.png" }, // outcome-5 · tall
    { title: "Parenting as a team", body: "Both parents on the same page, with a toolkit that has a page for the other parent.", image: "/outcome-6.png" }, // outcome-6 · square
  ],
};

/* ───────────────────── Takeaways ───────────────────── */
export const takeaways = {
  eyebrow: "What you take home",
  heading: "You’ll leave with things you can use tonight.",
  sub:
    "No jargon, no labels for your child, no promises that a teenager will change in a fortnight. Just a clearer picture and small steps.",
  items: [
    { icon: "question", title: "A better question", body: "than “How was your day?”" },
    { icon: "heart", title: "A response for bad results", body: "that keeps your child talking to you" },
    { icon: "breath", title: "A steadying routine", body: "your child can use before and during exams" },
    { icon: "handover", title: "A handover plan", body: "for one task you can stop reminding about" },
    { icon: "toolkit", title: "A two-page parent toolkit", body: "including a page for the other parent" },
    { icon: "chat", title: "Your questions answered live,", body: "and a parent WhatsApp community" },
  ],
};

/* ───────────────────── Sessions / agenda ───────────────────── */
export const sessionsIntro = event.sessionsIntro;

export const sessions = event.sessions;

/* ───────────────────── Facilitator ───────────────────── */
export const facilitator = {
  eyebrow: "Your facilitator",
  name: "Vidyashankar Guru",
  designation: "Co-founder and Chief Vision Officer at MiTran Global",
  points: [
    "Grew up in a small village in South India — no elite school, no big-city advantages. Struggled with confidence, self-doubt and freezing under pressure as a teen.",
    "Realised the hard truth: capability without emotional strength will not help you achieve anything in life.",
    "Spent 22+ years studying what schools never teach students — mindset, discipline and inner strength.",
    "Trained over 25,000 teens and professionals across 40+ nationalities as a TEDx speaker and author of five books.",
    "Today his only mission is giving every struggling teen the tools he wished he had at their age.",
  ],
  photoNote: "",
};

/* ───────────────────── Seat / ticket ───────────────────── */
export const seat = {
  eyebrow: "Registration",
  heading: "Save your seat",
  sub: event.seat.sub,
  passName: EVENT_NAME,
  passSub: event.seat.passSub,
  price: "Free",
  priceNote: event.seat.priceNote,
  includes: event.seat.includes,
  privacy: event.seat.privacy,
  secondary: {
    label: "Bringing your teen or spouse?",
    body: event.seat.secondaryBody,
  },
};

/* ───────────────────── FAQ ───────────────────── */
export const faq = {
  heading: "Questions parents and teens ask",
  items: event.faqItems,
};

/* ───────────────────── Closing CTA (also the page footer) ───────────────────── */
export const closing = event.closing;
