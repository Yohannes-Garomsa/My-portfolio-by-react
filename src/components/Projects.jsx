import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MotionSection,
  MotionH2,
  MotionP,
  MotionDiv,
  MotionButton,
  MotionSpan,
  containerVariants,
  fadeInUpVariants,
} from "../utils/motion";
import { site } from "../config/site";

const MotionA = motion.a;

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and checkout flow.",
      image:
        "https://images.unsplash.com/photo-1557821552-17ff3a5e6972?w=600&auto=format&fit=crop&q=60",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
      tags: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      category: "web",
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 3,
      title: "Mobile Fitness Tracker",
      description:
        "A cross-platform mobile application for tracking fitness activities, nutrition, and health metrics with data visualization.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60",
      tags: ["React Native", "Expo", "Firebase", "Charts.js"],
      category: "mobile",
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 4,
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy using advanced language models.",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=60",
      tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
      category: "ai",
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description:
        "A comprehensive financial dashboard for tracking investments, expenses, and financial goals with interactive charts and reports.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
      tags: ["Vue.js", "D3.js", "Express", "Redis"],
      category: "web",
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A beautifully designed portfolio website showcasing creative work with smooth animations and responsive design.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b9740c1d2?w=600&auto=format&fit=crop&q=60",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      category: "design",
      github: "https://github.com",
      live: "https://demo.com",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Applications" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ai", name: "AI & ML" },
    { id: "design", name: "Design & UI" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <MotionSection
      id="projects"
      className="py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
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
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <MotionDiv variants={fadeInUpVariants}>
            <MotionSpan
              className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/80 border border-white/20 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Featured Projects
            </MotionSpan>
          </MotionDiv>

          <MotionH2
            variants={fadeInUpVariants}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            My{" "}
            <MotionSpan className="gradient-text" variants={fadeInUpVariants}>
              Creations
            </MotionSpan>
          </MotionH2>

          <MotionP
            variants={fadeInUpVariants}
            className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mt-4"
          >
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional digital experiences.
          </MotionP>
        </MotionDiv>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <MotionButton
              key={category.id}
              type="button"
              role="tab"
              aria-selected={filter === category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 focus-visible:outline-offset-2 ${
                filter === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {category.name}
            </MotionButton>
          ))}
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <MotionDiv
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group h-full"
              >
                <article className="card h-full overflow-hidden relative flex flex-col">
                  <div className="relative overflow-hidden rounded-t-xl -mx-[1px] -mt-[1px]">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-display transition-colors duration-300 group-hover:text-cyan-200">
                      {project.title}
                    </h3>

                    <p className="text-white/70 text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    <div className="flex gap-3 mt-auto">
                      <MotionA
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-sm text-center inline-flex items-center justify-center no-underline"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        View Live
                      </MotionA>
                      <MotionA
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-secondary text-sm text-center inline-flex items-center justify-center no-underline"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Source
                      </MotionA>
                    </div>
                  </div>
                </article>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-white/60 py-12">
            No projects in this category yet.
          </p>
        )}

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12"
        >
          <MotionA
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex btn-primary no-underline"
          >
            More on GitHub
          </MotionA>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default Projects;
