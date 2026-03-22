import React from "react";
import { motion } from "framer-motion";
import { site } from "../config/site";
import {
  aboutIntro,
  skillGroups,
  experiences,
  focusAreas,
} from "../data/aboutContent";
import SectionHeader from "./SectionHeader";
import {
  MotionSection,
  MotionDiv,
  containerVariants,
  fadeInUpVariants,
  fadeInRightVariants,
  hoverVariants,
} from "../utils/motion";

function SkillCategoryCard({ group }) {
  return (
    <div className="card border-white/10 p-6 md:p-7">
      <div className="mb-5 border-b border-white/10 pb-4">
        <h3 className="font-display text-lg font-semibold text-white md:text-xl">
          {group.title}
        </h3>
        <p className="mt-1 text-sm text-white/50">{group.description}</p>
      </div>
      <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <div className="flex items-baseline gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 transition-colors hover:border-white/20 hover:bg-white/[0.07]">
              <span className="text-sm font-medium text-white/90">
                {skill.name}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-fuchsia-300/80">
                {skill.note}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceTimeline({ variants }) {
  return (
    <MotionDiv variants={variants} className="card border-white/10 p-6 md:p-7">
      <h3 className="font-display mb-8 text-lg font-semibold text-white md:text-xl">
        Experience
      </h3>
      <ol className="relative space-y-10 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-white/25 before:via-white/15 before:to-white/5 md:before:left-[9px]">
        {experiences.map((exp) => (
          <li key={exp.id} className="relative pl-8 md:pl-10">
            <span
              className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-blue-500/40 to-fuchsia-500/40 shadow-[0_0_12px_rgba(168,85,247,0.25)] md:top-2.5"
              aria-hidden
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
            </span>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
              <div>
                <h4 className="font-display text-base font-semibold text-white md:text-lg">
                  {exp.title}
                </h4>
                <p className="gradient-text text-sm font-medium">
                  {exp.company}
                  {exp.location ? (
                    <span className="text-white/45 font-normal">
                      {" "}
                      · {exp.location}
                    </span>
                  ) : null}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/65">
                {exp.period}
              </span>
            </div>
            <ul className="mt-4 space-y-2 border-t border-white/5 pt-4">
              {exp.highlights.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-white/70 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-fuchsia-400/80 before:content-['']"
                >
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </MotionDiv>
  );
}

const About = () => {
  return (
    <MotionSection
      id="about"
      className="relative py-24 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 lg:items-start">
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8 lg:col-span-5"
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
              <MotionP key={i} variants={fadeInUpVariants}>
                {text}
              </MotionP>
            ))}

            <MotionDiv
              variants={fadeInUpVariants}
              className="grid grid-cols-2 gap-3 sm:gap-4"
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

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-8 lg:col-span-7"
          >
            <MotionDiv variants={fadeInRightVariants}>
              <h3
                className="font-display mb-4 text-lg font-semibold text-white md:text-xl"
                id="skills-heading"
              >
                Technical skills
              </h3>
              <p className="mb-6 max-w-xl text-sm text-white/55">
                Grouped by domain—strength labels describe typical depth, not
                vanity percentages.
              </p>
              <div
                className="space-y-5"
                role="region"
                aria-labelledby="skills-heading"
              >
                {skillGroups.map((group) => (
                  <SkillCategoryCard key={group.id} group={group} />
                ))}
              </div>
            </MotionDiv>

            <ExperienceTimeline variants={fadeInRightVariants} />

            <MotionDiv variants={fadeInRightVariants} className="card border-white/10 p-6 md:p-7">
              <h3 className="font-display mb-2 text-lg font-semibold text-white md:text-xl">
                How I work
              </h3>
              <p className="mb-6 text-sm text-white/55">
                Principles clients and teams can expect on a project.
              </p>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {focusAreas.map((item) => (
                  <motion.li
                    key={item.title}
                    variants={fadeInUpVariants}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <h4 className="font-display text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {item.body}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
};

function MotionP({ variants, children }) {
  return (
    <motion.p
      variants={variants}
      className="text-base leading-relaxed text-white/75 md:text-lg"
    >
      {children}
    </motion.p>
  );
}

export default About;
