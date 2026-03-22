import React from "react";

/**
 * Shared section chrome: eyebrow, headline, optional description.
 * Keeps About / Projects / Contact visually consistent.
 */
export default function SectionHeader({
  eyebrow,
  titleLead,
  titleGradient,
  titleRest,
  description,
  align = "left",
  className = "",
  /** Optional id for the visible h2 (e.g. section landmark). */
  headingId,
}) {
  const alignCls =
    align === "center"
      ? "text-center mx-auto"
      : "text-left max-w-2xl";

  return (
    <header className={`space-y-4 ${alignCls} ${className}`}>
      {eyebrow && (
        <p className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          {eyebrow}
        </p>
      )}
      <h2
        id={headingId}
        className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]"
      >
        {titleLead && <span className="text-white/95">{titleLead} </span>}
        {titleGradient && (
          <span className="gradient-text">{titleGradient}</span>
        )}
        {titleRest && (
          <>
            {titleGradient ? " " : null}
            <span className="text-white/95">{titleRest}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-white/70 leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
