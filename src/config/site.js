/**
 * Single place to customize your portfolio — name, links, and contact details.
 * Add `public/resume.pdf` (or change resumeUrl) for the download button.
 */
export const site = {
  name: "Alex Morgan",
  shortName: "AM",
  title: "Senior React Developer",
  tagline: "Creative Developer",
  heroSubtitle:
    "I craft fast, accessible interfaces with React and modern tooling. Let's ship products people love to use.",
  email: "hello@example.com",
  phone: "+1 (555) 123-4567",
  phoneTel: "+15551234567",
  location: "San Francisco, CA",
  locationMapsUrl: "https://maps.google.com/?q=San+Francisco+CA",
  resumeUrl: "/resume.pdf",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    dribbble: "https://dribbble.com",
  },
  stats: {
    projects: "50+",
    years: "5+",
    satisfaction: "100%",
    clientsLine: "Trusted by teams shipping production apps",
  },
  techStack: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "GraphQL",
    "Vite",
  ],
};

export const navSections = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];
