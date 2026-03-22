import React from "react";
import { site } from "../config/site";

export default function TechMarquee() {
  const doubled = [...site.techStack, ...site.techStack];
  return (
    <div
      className="relative mt-10 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] py-3"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-950/85 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-950/85 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="shrink-0 text-sm font-medium tracking-wide text-white/55"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
