import React from "react";
import { motion } from "framer-motion";
import { site } from "../config/site";
import {
  MotionSection,
  MotionH2,
  MotionP,
  MotionDiv,
  MotionSpan,
  MotionUl,
  MotionLi,
  containerVariants,
  fadeInUpVariants,
  hoverVariants,
  fadeInRightVariants,
} from "../utils/motion";

const About = () => {
  const skills = [
    { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-cyan-600" },
    { name: "Framer Motion", level: 90, color: "from-purple-400 to-pink-500" },
    { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description:
        "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern UI/UX patterns.",
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2019 - 2021",
      description:
        "Built responsive websites and web applications for clients across various industries, focusing on performance and accessibility.",
    },
    {
      title: "Junior Developer",
      company: "Startup XYZ",
      period: "2018 - 2019",
      description:
        "Gained experience in modern web development practices and collaborated on full-stack projects.",
    },
  ];

  return (
    <MotionSection
      id="about"
      className="py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-3xl"
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <MotionDiv variants={fadeInUpVariants}>
              <MotionSpan
                className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/80 border border-white/20 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                About Me
              </MotionSpan>
            </MotionDiv>

            <MotionH2
              variants={fadeInUpVariants}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Crafting Digital{" "}
              <MotionSpan className="gradient-text" variants={fadeInUpVariants}>
                Masterpieces
              </MotionSpan>
            </MotionH2>

            <MotionP
              variants={fadeInUpVariants}
              className="text-lg text-white/80 leading-relaxed"
            >
              With over 5 years of experience in frontend development, I
              specialize in creating beautiful, functional, and user-centered
              digital experiences. My passion lies in transforming complex
              problems into simple, elegant design solutions.
            </MotionP>

            <MotionP
              variants={fadeInUpVariants}
              className="text-white/70 leading-relaxed"
            >
              I believe that design is not just about aesthetics, but about
              creating meaningful interactions that enhance people's lives.
              Every project I work on is an opportunity to make a positive
              impact through thoughtful design and innovative technology.
            </MotionP>

            <MotionDiv
              className="grid grid-cols-2 gap-4"
              variants={fadeInUpVariants}
            >
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-white/60">Years Experience</div>
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
                Download Resume
              </motion.a>
            </MotionDiv>
          </MotionDiv>

          {/* Right Column - Skills & Experience */}
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-12"
          >
            {/* Skills */}
            <MotionDiv variants={fadeInRightVariants} className="card">
              <h3 className="text-2xl font-bold text-white mb-6">
                Technical Skills
              </h3>
              <MotionUl className="space-y-4">
                {skills.map((skill, index) => (
                  <MotionLi
                    key={skill.name}
                    variants={fadeInRightVariants}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-white/60 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </MotionLi>
                ))}
              </MotionUl>
            </MotionDiv>

            {/* Experience */}
            <MotionDiv variants={fadeInRightVariants} className="card">
              <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
              <MotionUl className="space-y-6">
                {experiences.map((exp, index) => (
                  <MotionLi
                    key={exp.title}
                    variants={fadeInRightVariants}
                    className="border-l-2 border-white/20 pl-6 hover:border-white/50 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {exp.title}
                        </h4>
                        <p className="gradient-text font-medium">{exp.company}</p>
                      </div>
                      <span className="text-white/60 text-sm bg-white/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-white/70 mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </MotionLi>
                ))}
              </MotionUl>
            </MotionDiv>

            {/* Fun Facts */}
            <MotionDiv variants={fadeInRightVariants} className="card">
              <h3 className="text-2xl font-bold text-white mb-6">Fun Facts</h3>
              <MotionUl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: "🚀", text: "Built 50+ projects from scratch" },
                  { icon: "⚡", text: "Performance optimization enthusiast" },
                  { icon: "🎨", text: "UI/UX design passionate" },
                  { icon: "🔧", text: "Problem solver at heart" },
                ].map((fact, index) => (
                  <MotionLi
                    key={index}
                    variants={fadeInRightVariants}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <span className="text-2xl">{fact.icon}</span>
                    <span className="text-white/80">{fact.text}</span>
                  </MotionLi>
                ))}
              </MotionUl>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
};

export default About;
