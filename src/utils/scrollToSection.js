const HEADER_OFFSET = 88;

export function scrollToSection(hash) {
  if (!hash || hash === "#") return;
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return;
  const top =
    el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function handleNavClick(e, href, onNavigate) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  scrollToSection(href);
  onNavigate?.();
}
