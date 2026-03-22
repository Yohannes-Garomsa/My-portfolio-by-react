import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../data/aboutContent";
import SectionHeader from "./SectionHeader";
import SkillCategoryCard from "./skills/SkillCategoryCard";
import {
  MotionSection,
  MotionDiv,
  containerVariants,
  fadeInUpVariants,
} from "../utils/motion";

export default function TechnicalSkills() {
  return (
    <MotionSection
      id="skills"
      className="relative py-24 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      aria-labelledby="skills-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 md:mb-14"
        >
          <MotionDiv variants={fadeInUpVariants}>
            <SectionHeader
              headingId="skills-heading"
              eyebrow="Capabilities"
              titleLead="Technical"
              titleGradient="skills"
              titleRest=""
              description="Grouped for quick scanning—labels reflect typical depth in production work, not percentages."
            />
          </MotionDiv>
        </MotionDiv>

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          role="region"
          aria-labelledby="skills-heading"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
            >
              <SkillCategoryCard group={group} />
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
