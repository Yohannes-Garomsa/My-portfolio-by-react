import React from "react";

export default function SkillCategoryCard({ group }) {
  return (
    <div className="card border-white/10 p-6 md:p-7 h-full flex flex-col">
      <div className="mb-5 border-b border-white/10 pb-4">
        <h3 className="font-display text-lg font-semibold text-white md:text-xl">
          {group.title}
        </h3>
        <p className="mt-1 text-sm text-white/50">{group.description}</p>
      </div>
      <ul
        className="flex flex-wrap gap-2 flex-1 content-start"
        aria-label={`${group.title} skills`}
      >
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <div className="flex items-baseline gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 transition-colors hover:border-white/20 hover:bg-white/[0.07]">
              <span className="text-sm font-medium text-white/90">
                {skill.name}
              </span>
              {skill.note ? (
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                  {skill.note}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
