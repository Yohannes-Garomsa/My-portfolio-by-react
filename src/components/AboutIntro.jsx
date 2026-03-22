import React from "react";
import { motion } from "framer-motion";
import { site } from "../config/site";
import { aboutIntro, focusAreas } from "../data/aboutContent";
import SectionHeader from "./SectionHeader";
import {
  MotionSection,
  MotionDiv,
  containerVariants,
  fadeInUpVariants,
  hoverVariants,
} from "../utils/motion";

export default function AboutIntro() {
  return (
    <MotionSection
      id="about"
      className="relative py-24 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500/15 to-pink-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/15 to-teal-500/15 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-3xl px-6">
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <MotionDiv variants={fadeInUpVariants}>
            <SectionHeader
              headingId="about-heading"
              eyebrow={aboutIntro.eyebrow}
              titleLead={aboutIntro.titleLead}
              titleGradient={aboutIntro.titleGradient}
              titleRest={aboutIntro.titleRest}
            />
          </MotionDiv>

          {aboutIntro.paragraphs.map((text, i) => (
            <MotionParagraph key={i} variants={fadeInUpVariants}>
              {text}
            </MotionParagraph>
          ))}

          <MotionDiv
            variants={fadeInUpVariants}
            className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto sm:mx-0"
          >
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
              <div className="font-display text-2xl font-bold gradient-text">
                {site.stats.projects}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                Projects shipped
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
              <div className="font-display text-2xl font-bold gradient-text">
                {site.stats.years}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                Years experience
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeInUpVariants}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/55 mb-4">
              How I work
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <h4 className="font-display text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </MotionDiv>

          <MotionDiv variants={fadeInUpVariants}>
            <motion.a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              whileHover="hover"
              whileTap="tap"
              variants={hoverVariants}
              className="inline-flex btn-primary"
            >
              Download résumé
            </motion.a>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

function MotionParagraph({ variants, children }) {
  return (
    <motion.p
      variants={variants}
      className="text-base leading-relaxed text-white/75 md:text-lg"
    >
      {children}
    </motion.p>
  );
}
