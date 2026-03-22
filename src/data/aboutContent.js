import { site } from "../config/site";

/**
 * About, skills, and experience copy — edit here; components stay presentational.
 */
export const aboutIntro = {
  eyebrow: "About me",
  titleLead: "I build",
  titleGradient: "reliable frontends",
  titleRest: "at scale.",
  paragraphs: [
    `I'm ${site.name}, a senior frontend engineer focused on React, TypeScript, and shipping interfaces that stay fast and accessible as the product grows. I sit in the space between design and backend: I turn Figma and API contracts into maintainable component systems.`,
    "My focus is frontend architecture, performance (Core Web Vitals, bundle size), and collaboration with design and product. I enjoy mentoring, clear documentation, and leaving codebases easier to change than I found them.",
    "I'm motivated by products that respect users' time and attention—goals for me include leading larger UI initiatives, deepening design-system practice, and helping teams adopt sustainable delivery habits.",
  ],
};

/** Four categories: Frontend, Backend, Tools, Languages — optional `note` for depth. */
export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    description: "UI, state, and shipping in the browser",
    skills: [
      { name: "React", note: "Expert" },
      { name: "Next.js", note: "Advanced" },
      { name: "HTML / semantic a11y", note: "Strong" },
      { name: "Tailwind CSS", note: "Expert" },
      { name: "Framer Motion", note: "Advanced" },
      { name: "Design systems", note: "Advanced" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs, services, and data boundaries",
    skills: [
      { name: "Node.js", note: "Advanced" },
      { name: "REST APIs", note: "Strong" },
      { name: "GraphQL", note: "Strong" },
      { name: "PostgreSQL", note: "Comfortable" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Delivery, quality, and collaboration",
    skills: [
      { name: "Git / GitHub", note: "Strong" },
      { name: "Vite / Webpack", note: "Strong" },
      { name: "Jest / RTL", note: "Strong" },
      { name: "CI/CD", note: "Strong" },
      { name: "Figma", note: "Strong" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    description: "What I write day to day",
    skills: [
      { name: "TypeScript", note: "Advanced" },
      { name: "JavaScript", note: "Expert" },
      { name: "HTML", note: "Expert" },
      { name: "CSS", note: "Expert" },
    ],
  },
];

/**
 * Role header is always visible; `details` bullets show inside <details>.
 */
export const experiences = [
  {
    id: "exp-1",
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    period: "2021 — Present",
    details: [
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
    details: [
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
    details: [
      "Shipped features across the stack in a small team; solidified fundamentals in JavaScript, Git, and REST APIs.",
    ],
  },
];

/** Shown only in the About section (not a separate nav item). */
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
