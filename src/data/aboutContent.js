/**
 * About / skills / experience copy — edit here to keep About.jsx presentational.
 * Skill groups avoid fake percentages; hiring managers prefer honest grouping.
 */
export const aboutIntro = {
  eyebrow: "About",
  titleLead: "I build",
  titleGradient: "reliable frontends",
  titleRest: "at scale.",
  paragraphs: [
    "I’m a frontend engineer focused on React ecosystems, performance, and maintainable UI architecture. I work closely with design and product to turn ambiguity into shippable interfaces.",
    "I care about accessibility, clear component boundaries, and measurable outcomes—Core Web Vitals, bundle size, and time-to-interactive—not just pixels.",
  ],
};

/** Grouped skills — no arbitrary %; optional proficiency is a short label. */
export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    description: "UI architecture, state, and delivery",
    skills: [
      { name: "React", note: "Expert" },
      { name: "TypeScript", note: "Advanced" },
      { name: "Next.js", note: "Advanced" },
      { name: "Vite", note: "Advanced" },
      { name: "HTML / semantic a11y", note: "Strong" },
    ],
  },
  {
    id: "ui",
    title: "UI & motion",
    description: "Systems, styling, polish",
    skills: [
      { name: "Tailwind CSS", note: "Expert" },
      { name: "Design systems", note: "Advanced" },
      { name: "Framer Motion", note: "Advanced" },
      { name: "Figma handoff", note: "Strong" },
    ],
  },
  {
    id: "platform",
    title: "Platform & data",
    description: "APIs, tooling, collaboration",
    skills: [
      { name: "Node.js", note: "Advanced" },
      { name: "REST / GraphQL", note: "Strong" },
      { name: "Git / CI", note: "Strong" },
      { name: "Testing (Jest, RTL)", note: "Strong" },
    ],
  },
];

export const experiences = [
  {
    id: "exp-1",
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    period: "2021 — Present",
    highlights: [
      "Own UI architecture for a B2B SaaS surface used by enterprise customers; align with design on tokens and patterns.",
      "Improved LCP and INP through code splitting, lazy routes, and image/CDN strategy.",
      "Mentor engineers on React performance, testing, and review culture.",
    ],
  },
  {
    id: "exp-2",
    title: "Frontend Developer",
    company: "Creative Agency",
    location: "San Francisco, CA",
    period: "2019 — 2021",
    highlights: [
      "Delivered marketing sites and product SPAs for clients in fintech and health, with a focus on responsive layouts and CMS integration.",
      "Introduced component libraries and Storybook to shorten iteration cycles.",
    ],
  },
  {
    id: "exp-3",
    title: "Junior Developer",
    company: "Startup XYZ",
    location: "San Francisco, CA",
    period: "2018 — 2019",
    highlights: [
      "Shipped features across the stack in a small team; solidified fundamentals in JavaScript, Git, and REST APIs.",
    ],
  },
];

/** Professional “how I work” — replaces generic “fun facts”. */
export const focusAreas = [
  {
    title: "Accessibility",
    body: "Semantic HTML, keyboard flows, and WCAG-aware reviews—not an afterthought.",
  },
  {
    title: "Performance",
    body: "Profiling, bundle discipline, and realistic budgets tied to user devices.",
  },
  {
    title: "Collaboration",
    body: "Clear RFCs, design pairing, and documentation others can onboard from.",
  },
  {
    title: "Quality",
    body: "Meaningful tests, type safety where it pays off, and predictable releases.",
  },
];
