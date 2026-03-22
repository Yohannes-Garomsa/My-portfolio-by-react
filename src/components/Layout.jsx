import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MotionHeader,
  MotionDiv,
  MotionButton,
  MotionUl,
  MotionLi,
  containerVariants,
  fadeInUpVariants,
  hoverVariants,
} from "../utils/motion";
import { site, navSections } from "../config/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { handleNavClick, scrollToSection } from "../utils/scrollToSection";
import SocialLinks from "./SocialLinks";

const sectionIds = navSections.map((n) => n.id);

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 480);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((o) => !o);
  const closeMenu = () => setIsMenuOpen(false);

  const goContact = () => {
    scrollToSection("#contact");
    closeMenu();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-purple-900 to-gradient-end">
      <a
        href="#main-content"
        className="absolute left-[-9999px] top-0 z-[100] px-4 py-2 focus:left-4 focus:top-4 focus:rounded-lg focus:bg-white focus:text-slate-900 focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <MotionHeader
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4" aria-label="Primary">
          <div className="flex justify-between items-center">
            <MotionDiv
              whileHover="hover"
              variants={hoverVariants}
              className="text-xl md:text-2xl font-bold font-display tracking-tight"
            >
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className="gradient-text focus-visible:outline-offset-4"
              >
                {site.shortName}
                <span className="text-white/50 font-normal text-base md:text-lg ms-2 hidden sm:inline">
                  · {site.name.split(" ").pop()}
                </span>
              </a>
            </MotionDiv>

            <MotionUl
              className="hidden md:flex items-center gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navSections.map((item) => (
                <MotionLi key={item.id} variants={fadeInUpVariants}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative font-medium transition-colors duration-300 focus-visible:outline-offset-4 ${
                      activeId === item.id
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {activeId === item.id && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400" />
                    )}
                  </a>
                </MotionLi>
              ))}
            </MotionUl>

            <MotionButton
              type="button"
              onClick={goContact}
              whileHover="hover"
              whileTap="tap"
              variants={hoverVariants}
              className="hidden md:block btn-primary"
            >
              Get In Touch
            </MotionButton>

            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-offset-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <MotionDiv
                id="mobile-nav"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pb-4 border-t border-white/20 overflow-hidden"
              >
                <MotionUl
                  className="space-y-1 pt-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navSections.map((item) => (
                    <MotionLi key={item.id} variants={fadeInUpVariants}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href, closeMenu);
                        }}
                        className={`block py-3 px-2 rounded-lg font-medium transition-colors ${
                          activeId === item.id
                            ? "text-white bg-white/10"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </a>
                    </MotionLi>
                  ))}
                  <MotionLi variants={fadeInUpVariants} className="pt-2">
                    <button
                      type="button"
                      onClick={goContact}
                      className="w-full btn-primary text-center"
                    >
                      Get In Touch
                    </button>
                  </MotionLi>
                </MotionUl>
              </MotionDiv>
            )}
          </AnimatePresence>
        </nav>
      </MotionHeader>

      <main id="main-content" className="relative z-10">
        {children}
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-display text-xl font-bold gradient-text">
                {site.name}
              </p>
              <p className="mt-2 text-white/65 text-sm max-w-xs leading-relaxed">
                {site.title} — shipping polished interfaces with performance and
                accessibility in mind.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                On this page
              </p>
              <ul className="space-y-2">
                {navSections.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-white/65 hover:text-white text-sm transition-colors focus-visible:rounded"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                Connect
              </p>
              <SocialLinks links={site.social} />
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-block text-sm text-white/65 hover:text-white transition-colors"
              >
                {site.email}
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/50 text-sm">
            <p>
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p>Built with React, Vite, Tailwind CSS & Framer Motion.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <MotionButton
            type="button"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection("#home")}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md hover:bg-white/20 transition-colors focus-visible:outline-offset-2"
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </MotionButton>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
