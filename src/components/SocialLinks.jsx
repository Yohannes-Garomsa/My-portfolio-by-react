import React from "react";
import { motion } from "framer-motion";

const MotionA = motion.a;

const icons = {
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  github: (
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  ),
  twitter: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
  dribbble: (
    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.079-.105-.065-.141-.133-.276-.204-.409-2.087-4.375-4.6-8.247-6.001-10.348-2.751.371-5.215 1.555-7.177 3.286 1.26 2.115 4.947 7.988 8.783 10.482-.987 2.218-2.088 4.072-3.101 5.377 4.304-1.834 7.795-5.356 9.779-9.883zm-14.74 1.98c-.13-.088-.248-.179-.37-.27.033.087.067.174.103.26 2.089 4.634 4.926 8.562 7.021 11.031 2.085-.315 4.031-1.059 5.725-2.15-1.296-1.292-4.75-4.764-6.586-8.892-.198-.433-.38-.864-.553-1.297-.827-.064-1.643-.09-2.34-.082z" />
  ),
};

export default function SocialLinks({
  links,
  className = "",
  buttonClassName = "w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/90 hover:bg-white/20 hover:border-white/25 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
}) {
  const entries = [
    { key: "linkedin", label: "LinkedIn", href: links.linkedin },
    { key: "github", label: "GitHub", href: links.github },
    { key: "twitter", label: "Twitter", href: links.twitter },
    { key: "dribbble", label: "Dribbble", href: links.dribbble },
  ];

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {entries.map(({ key, label, href }) => (
        <MotionA
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className={buttonClassName}
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {icons[key]}
          </svg>
        </MotionA>
      ))}
    </div>
  );
}
