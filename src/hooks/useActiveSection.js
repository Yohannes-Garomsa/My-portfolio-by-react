import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view for nav highlighting.
 */
export function useActiveSection(sectionIds, headerOffset = 96) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + headerOffset;
      let current = sectionIds[0] ?? "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, headerOffset]);

  return activeId;
}
