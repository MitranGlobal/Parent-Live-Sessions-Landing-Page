/**
 * ALL page copy lives here. Edit this file to change wording, dates or links.
 *
 * Any "Free"/"free" in these strings is automatically shown as a highlighted
 * chip on the page (see components/ui/Free.tsx).
 *
 * Use "free" sparingly — it currently appears in 8 places: top bar, hero
 * tagline, hero event tile, stats heading, agenda heading, seat price,
 * one FAQ question and the closing line.
 */

export const REGISTER_URL =
  "https://hub.mitranglobal.com/web/checkout/6ad08e49c82e4f4c430ae073";

export const LOGO_WHITE =
  "https://res.cloudinary.com/twteccae/image/upload/Logo_White_szjcqg.svg";

export const EVENT_NAME = "Imparting Positivity Masterclass";

export const brand = {
  name: "MiTran Global",
  ctaLabel: "Register now",
};

/* Top announcement bar */
export const announcement = {
  short: "Free live masterclass · 21 & 22 Oct",
  long: "Free live online masterclass · Wed 21 & Thu 22 Oct · 7–8:30 pm IST · For parents & teens",
};

/**
 * Optional photography. Drop files into /public and put the path here
 * (e.g. "/hero.jpg"). Empty strings show the built-in gold "stage light" art.
 */
export const images = {
  hero: "",
  session1: "",
  session2: "",
  facilitator: "",
  closing: "",
};

/* ───────────────────────── Hero ───────────────────────── */
export const hero = {
  eyebrow: EVENT_NAME,
  tagline: "Free live online sessions · 2 evenings · For parents & teens (11⁠–⁠17)",
  headlineA: "Your teenager says “fine.”",
  headlineB: "What are they not telling you?",
  sub:
    "Two live sessions for parents and teens with Vidyashankar Guru on pressure, phones, silence and setbacks, and how to help your child without nagging, fighting or doing it all yourself.",
  meta: [
    { label: "Dates", value: "Wed 21 & Thu 22 Oct" },
    { label: "Time", value: "7:00–8:30 pm IST" },
    { label: "Place", value: "Live online" },
  ],
  sessions: [
    { day: "Wed 21 Oct", title: "Beneath “Fine”" },
    { day: "Thu 22 Oct", title: "From managing to supporting" },
  ],
};

/* ───────────────────── Stats band ───────────────────── */
export const statsIntro = {
  heading: "A free live masterclass for parents and teens",
  sub: "For families with children aged 11⁠–⁠17. Pressure, phones, silence and setbacks — and how to help your child without nagging, fighting or doing it all yourself.",
};

export const stats = [
  { value: "2", suffix: "", label: "live evenings, each one standing on its own" },
  { value: "90", suffix: "min", label: "per session, with your questions answered live" },
  { value: "25k", suffix: "+", label: "teens and professionals trained by Vidyashankar Guru across 40+ nationalities" },
];

/* ─────────────────── Recognise (parent voices) ─────────────────── */
export const recognise = {
  eyebrow: "Sound familiar?",
  heading: "If you’ve reminded them a hundred times, you’re not alone.",
  sub:
    "These are the things parents tell us most often. None of them, by itself, means something is wrong with your child.",
  items: [
    { title: "The reminder loop", body: "“I remind, she shouts, I feel terrible, and tomorrow we do it all again.”" },
    { title: "The phone and the late night", body: "Awake until 2 am, asleep through the morning, angry when the screen goes off." },
    { title: "Going blank in the exam", body: "“He knew it at home.” And a fear he never mentioned until it was too late." },
    { title: "“Why should I?”", body: "Gives up the moment it gets hard, or does the bare minimum." },
    { title: "The closed door", body: "One-word answers at home, a very different child around friends." },
    { title: "Doing it all alone", body: "One parent carries everything. The other says, “All teens are like this.”" },
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
export const sessionsIntro = {
  eyebrow: "Agenda",
  heading: "Two free evenings. Two shifts in how you see it.",
  sub:
    "Each session for parents and teens is built on real situations families bring to us, with one thing to try the same night.",
};

export const sessions = [
  {
    label: "Session 1 · Wednesday 21 October",
    short: "Session 1",
    date: "Wednesday 21 October",
    time: "7:00–8:30 pm IST",
    title: "Beneath “Fine”",
    question: "What is really going on with my teenager?",
    points: [
      "Why behaviour is communication, and why the phone is usually a symptom",
      "The reminder loop, and how to step out of it",
      "Pressure, the exam blank and the fear teens hide",
      "The first hour after a bad result",
      "When it’s time to bring in a professional",
    ],
  },
  {
    label: "Session 2 · Thursday 22 October",
    short: "Session 2",
    date: "Thursday 22 October",
    time: "7:00–8:30 pm IST",
    title: "From managing to supporting",
    question: "How do I help without doing it all myself?",
    points: [
      "The handover ladder: moving tasks from you to them",
      "A phone and sleep plan your teen helps write",
      "Self-belief, giving up and “why should I?”",
      "Conversations that open doors",
      "One handover, one conversation, one small stretch for this week",
    ],
  },
];

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
  sub: "Attend one evening or both. Each session stands on its own.",
  passName: EVENT_NAME,
  passSub: "Live online sessions for parents & teens · Wed 21 & Thu 22 October · 7:00–8:30 pm IST",
  price: "Free",
  priceNote: "No fee for either session",
  includes: [
    { title: "Session 1 · Beneath “Fine”", body: "Wed 21 Oct · 7:00–8:30 pm IST · Live online" },
    { title: "Session 2 · From managing to supporting", body: "Thu 22 Oct · 7:00–8:30 pm IST · Live online" },
    { title: "Your questions answered live", body: "" },
    { title: "Two-page parent toolkit", body: "Including a page for the other parent." },
    { title: "Parent WhatsApp community", body: "You can leave any time." },
  ],
  privacy:
    "We use your details only to send session links and the toolkit. You can leave the parent WhatsApp community any time. Please don’t share your child’s name or school.",
  secondary: {
    label: "Bringing your teen or spouse?",
    body: "These sessions are for parents and teens together. Bring your spouse along too, or share the toolkit, which has a page for the other parent.",
  },
};

/* ───────────────────── FAQ ───────────────────── */
export const faq = {
  heading: "Questions parents and teens ask",
  items: [
    {
      q: "Is it really free?",
      a: "Yes. There is no fee for either session. Just register to get your session links.",
    },
    {
      q: "Can I attend if my teen doesn’t know I’m joining?",
      a: "Yes. Many parents do. We’ll also share a short way to tell your teen what you learned, without making it about fixing them.",
    },
    {
      q: "Do I need to attend both evenings?",
      a: "No. Each session stands on its own. Both together give the fullest picture.",
    },
    {
      q: "Can my teen and spouse join?",
      a: "Yes. These sessions are for parents and teens. Bring your spouse along too, or share the toolkit, which has a page for the other parent.",
    },
    {
      q: "Will you tell me what is wrong with my child?",
      a: "No. These sessions can’t diagnose any child, and it wouldn’t be fair to try. We’ll help you tell ordinary ups and downs from signs that need a doctor or counsellor.",
    },
    {
      q: "Is this a course, or tuition?",
      a: "Neither. These are two live sessions for parents and teens. If you want support for your own child afterwards, our team will explain the options. There is no pressure to take any.",
    },
  ],
  contactLabel: "Contact us",
  contactUrl: "https://calendly.com/mitranglobal/one-to-one-session-on-facing-exams",
};

/* ───────────────────── Closing CTA ───────────────────── */
export const closing = {
  heading: "Two evenings can change how your home talks.",
  sub: "Both sessions are free. Taking an evening to understand your child better is already a strong start.",
};

/* ───────────────────── Footer ───────────────────── */
export const footer = {
  disclaimer:
    "These sessions are education for parents and teens, not therapy, and do not diagnose or treat any condition.",
  safety: [
    { text: "If you are worried about your child’s safety, call", number: "112" },
    { text: "For free mental health support in India, Tele-MANAS is available 24 hours on", number: "14416" },
  ],
  // Add legal links here when the pages exist, e.g. { label: "Privacy policy", url: "https://…" }
  links: [] as { label: string; url: string }[],
  social: [
    { label: "Spotify", url: "https://open.spotify.com/show/58xhAnoYMVgPTQK0Ea2jmD" },
    { label: "LinkedIn", url: "https://www.linkedin.com/newsletters/mitran-global-positivity-hub-7040456016391507968/" },
    { label: "WhatsApp", url: "https://chat.whatsapp.com/JxY3FynELhu0oE8C2nHcP1" },
  ],
};
