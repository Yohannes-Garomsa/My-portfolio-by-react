import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/aboutContent";
import SectionHeader from "./SectionHeader";
import {
  MotionSection,
  MotionDiv,
  containerVariants,
  fadeInUpVariants,
} from "../utils/motion";

export default function ExperienceSection() {
  return (
    <MotionSection
      id="experience"
      className="relative py-24 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      aria-labelledby="experience-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-pink-500/10 to-orange-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <MotionDiv variants={fadeInUpVariants}>
            <SectionHeader
              headingId="experience-heading"
              eyebrow="Career"
              titleLead="Work"
              titleGradient="experience"
              titleRest=""
              description="Roles and impact—expand each card for responsibilities and outcomes."
            />
          </MotionDiv>
        </MotionDiv>

        <div className="relative mx-auto">
          <div
            className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-white/25 via-white/15 to-white/5 md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="relative space-y-0">
            {experiences.map((exp, i) => (
              <li key={exp.id} className="relative pb-14 last:pb-0">
                <div className="absolute left-[11px] top-7 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full border border-white/25 bg-gradient-to-br from-blue-500/45 to-fuchsia-500/45 md:left-1/2 md:top-9">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                </div>

                <div className="grid md:grid-cols-2 md:gap-10 md:gap-x-12">
                  {i % 2 === 0 ? (
                    <>
                      <div className="pl-10 md:col-start-1 md:pr-6 md:text-right">
                        <ExperienceCard exp={exp} alignEnd />
                      </div>
                      <div className="hidden md:block md:col-start-2" aria-hidden />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block md:col-start-1" aria-hidden />
                      <div className="pl-10 md:col-start-2 md:pl-6">
                        <ExperienceCard exp={exp} alignEnd={false} />
                      </div>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </MotionSection>
  );
}

function ExperienceCard({ exp, alignEnd }) {
  return (
    <details className="exp-item border border-white/10 bg-white/[0.04] backdrop-blur-lg transition-colors hover:border-white/15 hover:bg-white/[0.06] rounded-xl overflow-hidden text-left">
      <summary
        className={`flex cursor-pointer list-none flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4 ${
          alignEnd ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className={`min-w-0 flex-1 space-y-1 ${alignEnd ? "md:text-right" : ""}`}>
          <h3 className="font-display text-lg font-semibold text-white">
            {exp.title}
          </h3>
          <p className="text-sm font-medium gradient-text">
            {exp.company}
            {exp.location ? (
              <span className="text-white/45 font-normal">
                {" "}
                · {exp.location}
              </span>
            ) : null}
          </p>
        </div>
        <div
          className={`flex shrink-0 items-center gap-2 ${
            alignEnd ? "md:flex-row-reverse" : ""
          }`}
        >
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/65">
            {exp.period}
          </span>
          <svg
            className="exp-chevron h-4 w-4 shrink-0 text-white/45 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </summary>
      <div className="border-t border-white/10 px-5 pb-5 pt-4 sm:px-6">
        <ul className="space-y-2.5 text-sm leading-relaxed text-white/70">
          {exp.details.map((line) => (
            <li
              key={line}
              className="flex gap-3 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-fuchsia-400/70 before:content-['']"
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
