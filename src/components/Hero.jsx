import React from "react";
import { motion } from "framer-motion";
import {
  MotionSection,
  MotionH1,
  MotionP,
  MotionButton,
  MotionDiv,
  MotionSpan,
  containerVariants,
  fadeInUpVariants,
  hoverVariants,
  scaleInVariants,
} from "../utils/motion";
import { site } from "../config/site";
import { scrollToSection } from "../utils/scrollToSection";
import TechMarquee from "./TechMarquee";

const Hero = () => {
  return (
    <MotionSection
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl floating"
        animate={{ rotate: 180 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-blue-400/30 rounded-full blur-lg floating"
        animate={{ rotate: -180 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl floating"
        animate={{ rotate: 90 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <MotionDiv variants={fadeInUpVariants}>
              <MotionSpan
                className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/80 border border-white/20 mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {site.tagline}
              </MotionSpan>
            </MotionDiv>

            <MotionH1
              variants={fadeInUpVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08]"
            >
              Hi, I&apos;m{" "}
              <MotionSpan
                className="gradient-text"
                variants={fadeInUpVariants}
                whileHover={{ scale: 1.02 }}
              >
                {site.name.split(" ")[0]}
              </MotionSpan>
              <br />
              <span className="text-white/95">{site.title}</span>
            </MotionH1>

            <MotionP
              variants={fadeInUpVariants}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              {site.heroSubtitle}
            </MotionP>

            <MotionDiv
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUpVariants}
            >
              <MotionButton
                type="button"
                whileHover="hover"
                whileTap="tap"
                variants={hoverVariants}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
              </MotionButton>
              <MotionButton
                type="button"
                whileHover="hover"
                whileTap="tap"
                variants={hoverVariants}
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </MotionButton>
            </MotionDiv>

            <TechMarquee />

            <MotionDiv
              variants={fadeInUpVariants}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/15"
            >
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-bold gradient-text font-display">
                    {site.stats.projects}
                  </div>
                  <div className="text-xs text-white/55 uppercase tracking-wide">
                    Projects
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text font-display">
                    {site.stats.years}
                  </div>
                  <div className="text-xs text-white/55 uppercase tracking-wide">
                    Years
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/55 max-w-xs leading-snug">
                {site.stats.clientsLine}
              </p>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <MotionDiv
                variants={scaleInVariants}
                className="relative bg-gradient-to-br from-white/12 to-white/[0.04] backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl ring-1 ring-white/10"
                whileHover={{ scale: 1.03 }}
                style={{ width: "min(100%, 320px)", minHeight: "400px" }}
              >
                <div className="absolute top-4 left-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl" />
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl" />

                <div className="relative z-10 h-full min-h-[360px] flex flex-col justify-center items-center text-center">
                  <motion.div
                    className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 mb-6 shadow-xl shadow-purple-500/25"
                    animate={{
                      boxShadow: [
                        "0 20px 50px rgba(168, 85, 247, 0.25)",
                        "0 24px 60px rgba(59, 130, 246, 0.35)",
                        "0 20px 50px rgba(168, 85, 247, 0.25)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <h3 className="text-2xl font-bold text-white mb-1 font-display">
                    {site.name}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">
                    {site.title}
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-4 text-center w-full max-w-[260px]">
                    <div className="rounded-xl bg-white/5 py-3 border border-white/10">
                      <div className="text-xl font-bold gradient-text font-display">
                        {site.stats.projects}
                      </div>
                      <div className="text-[10px] text-white/55 uppercase tracking-wider">
                        Projects
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/5 py-3 border border-white/10">
                      <div className="text-xl font-bold gradient-text font-display">
                        {site.stats.years}
                      </div>
                      <div className="text-[10px] text-white/55 uppercase tracking-wider">
                        Experience
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/5 py-3 border border-white/10">
                      <div className="text-xl font-bold gradient-text font-display">
                        {site.stats.satisfaction}
                      </div>
                      <div className="text-[10px] text-white/55 uppercase tracking-wider">
                        Delivery
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>

              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/15 shadow-lg"
                animate={{
                  x: [0, 8, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/15 shadow-lg"
                animate={{
                  x: [0, -8, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
};

export default Hero;
