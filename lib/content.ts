/**
 * ALL page copy lives here. Edit this file to change wording, dates or links.
 *
 * Every line below comes from the original "Parent Live Sessions Landing
 * Page" draft. Items still wrapped in [square brackets] were unconfirmed in
 * that draft — fill them in before going live (search the repo for "[").
 */

export const REGISTER_URL =
  "https://hub.mitranglobal.com/web/checkout/6acf55d0740ba37d96e6ba0f";

export const LOGO_WHITE =
  "https://res.cloudinary.com/twteccae/image/upload/Logo_White_szjcqg.svg";

export const brand = {
  name: "MiTran Global",
  ctaLabel: "Register now",
  loginLabel: "Log in",
  loginUrl: "https://hub.mitranglobal.com/web/login",
};

/* Top announcement bar */
export const announcement =
  "Live online · Wed 21 & Thu 22 Oct · Two evenings for parents of 11–17 year olds";

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
  eyebrow: "Live online · 2 evenings · For parents of 11–17 year olds",
  headlineA: "Your teenager says “fine.”",
  headlineB: "What are they not telling you?",
  sub:
    "Two live sessions with Vidyashankar Guru on pressure, phones, silence and setbacks, and how to help your child without nagging, fighting or doing it all yourself.",
  meta: [
    { label: "Dates", value: "Wed 21 & Thu 22 Oct" },
    { label: "Place", value: "Live online" },
    { label: "Time", value: "90 minutes each · [SESSION TIME] IST" },
  ],
  sessions: [
    { day: "Wed 21 Oct", title: "Beneath “Fine”" },
    { day: "Thu 22 Oct", title: "From managing to supporting" },
  ],
  priceNote: "[Free / fee: confirm] · Recording shared with registered parents [confirm]",
};

/* ───────────────────── Stats band ───────────────────── */
export const statsIntro = {
  heading: "Live online, for parents of 11–17 year olds",
  sub: "Pressure, phones, silence and setbacks — and how to help your child without nagging, fighting or doing it all yourself.",
};

export const stats = [
  { value: "2", suffix: "", label: "live evenings, each one standing on its own" },
  { value: "90", suffix: "min", label: "per session, with your questions answered live" },
  { value: "20", suffix: "yrs", label: "Vidyashankar Guru has spent working with teenagers and their families" },
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
  heading: "Two evenings. Two shifts in how you see it.",
  sub:
    "Each session is built on real situations parents bring to us, with one thing to try the same night.",
};

export const sessions = [
  {
    label: "Session 1 · Wednesday 21 October",
    short: "Session 1",
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
    title: "From managing to supporting",
    question: "How do I help without doing it all myself?",
    points: [
      "The handover ladder: moving tasks from you to them",
      "A phone and sleep plan your teen helps write",
      "Self-belief, giving up and “why should I?”",
      "Conversations that open doors, and adults at home who agree",
      "One handover, one conversation, one small stretch for this week",
    ],
  },
];

/* ───────────────────── Facilitator ───────────────────── */
export const facilitator = {
  eyebrow: "Your facilitator",
  name: "Vidyashankar Guru",
  bio:
    "Founder of MiTran Global. He has spent the last 20 years working with teenagers and their families, and many of those conversations began with a single word: “Fine.”",
  credentials: "[Add only verified credentials and affiliations]",
  // Drop a square photo at /public/vidyashankar-guru.jpg and set this to
  // "/vidyashankar-guru.jpg". Until then an initials monogram is shown.
  photo: "" as string,
  photoNote: "[Add Vidyashankar Guru’s photo]",
};

/* ───────────────────── Seat / ticket ───────────────────── */
export const seat = {
  eyebrow: "Registration",
  heading: "Save your seat",
  sub: "Attend one evening or both. Each stands on its own.",
  passName: "Parent Live Sessions",
  passSub: "Wed 21 & Thu 22 October · Live online",
  price: "[Free / fee: confirm]",
  includes: [
    { title: "Session 1 · Beneath “Fine”", body: "Wed 21 Oct · 90 minutes · [SESSION TIME] IST" },
    { title: "Session 2 · From managing to supporting", body: "Thu 22 Oct · 90 minutes · [SESSION TIME] IST" },
    { title: "Your questions answered live", body: "" },
    { title: "Two-page parent toolkit", body: "Including a page for the other parent." },
    { title: "Parent WhatsApp community", body: "You can leave any time." },
    { title: "Session recording", body: "Shared with registered parents [confirm]" },
  ],
  privacy:
    "We use your details only to send session links and the toolkit. You can leave the parent WhatsApp community any time. Please don’t share your child’s name or school.",
  secondary: {
    label: "Bringing your spouse?",
    body: "Bring them along, or share the toolkit, which has a page for the other parent.",
  },
};

/* ───────────────────── FAQ ───────────────────── */
export const faq = {
  heading: "Questions parents ask",
  items: [
    {
      q: "Can I attend if my teen doesn’t know I’m joining?",
      a: "Yes. Many parents do. We’ll also share a short way to tell your teen what you learned, without making it about fixing them.",
    },
    {
      q: "Do I need to attend both evenings?",
      a: "No. Each session stands on its own. Both together give the fullest picture.",
    },
    {
      q: "Can my spouse join, or watch later?",
      a: "Yes. Bring them along, or share the toolkit, which has a page for the other parent. [Confirm recording availability]",
    },
    {
      q: "Will you tell me what is wrong with my child?",
      a: "No. These sessions can’t diagnose any child, and it wouldn’t be fair to try. We’ll help you tell ordinary ups and downs from signs that need a doctor or counsellor.",
    },
    {
      q: "Is this a course, or tuition?",
      a: "Neither. These are two live parent sessions. If you want support for your own child afterwards, our team will explain the options. There is no pressure to take any.",
    },
    { q: "What does it cost?", a: "[Confirm: free / fee]" },
  ],
  contactLabel: "Contact us",
  contactUrl: "https://calendly.com/mitranglobal/one-to-one-session-on-facing-exams",
};

/* ───────────────────── Closing CTA ───────────────────── */
export const closing = {
  heading: "Two evenings can change how your home talks.",
  sub: "Taking an evening to understand your child better is already a strong start.",
};

/* ───────────────────── More from MiTran (links from the main site) ───────────────────── */
export const more = {
  heading: "More from MiTran Global",
  exploreLabel: "Explore all",
  exploreUrl: "https://hub.mitranglobal.com/l/58c2bda165",
  items: [
    { tag: "Podcast", title: "The MiTran Global podcast on Spotify", url: "https://open.spotify.com/show/58xhAnoYMVgPTQK0Ea2jmD" },
    { tag: "Newsletter", title: "Positivity Hub newsletter on LinkedIn", url: "https://www.linkedin.com/newsletters/mitran-global-positivity-hub-7040456016391507968/" },
    { tag: "E-book", title: "Free MiTran Global e-book", url: "https://drive.google.com/file/d/1RfUt1xS02z4r0y1InDi0jUbspDTEYd0X/view" },
    { tag: "Posters", title: "Positivity posters for home and school", url: "https://drive.google.com/drive/folders/1B_uej0CKo5NDk2_ou_C1E-fOAXkjFR-n" },
    { tag: "Self-check", title: "Take the Positivity Score", url: "http://positivity.mitranglobal.com/" },
  ],
};

/* ───────────────────── Footer ───────────────────── */
export const footer = {
  disclaimer:
    "These sessions are parent education, not therapy, and do not diagnose or treat any condition.",
  safety: [
    { text: "If you are worried about your child’s safety, call", number: "112" },
    { text: "For free mental health support in India, Tele-MANAS is available 24 hours on", number: "14416" },
  ],
  links: [
    { label: "[Privacy policy]", url: "#" },
    { label: "[Terms]", url: "#" },
    { label: "[Contact]", url: "#" },
  ],
  social: [
    { label: "Spotify", url: "https://open.spotify.com/show/58xhAnoYMVgPTQK0Ea2jmD" },
    { label: "LinkedIn", url: "https://www.linkedin.com/newsletters/mitran-global-positivity-hub-7040456016391507968/" },
    { label: "WhatsApp", url: "https://chat.whatsapp.com/JxY3FynELhu0oE8C2nHcP1" },
  ],
};
