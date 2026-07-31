import { ChevronDown, Menu, Moon, Sun, Users, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import dsLogoPng from "../assets/DS Logo.png";

const serviceGroups = [
  {
    title: "Learn",
    items: [
      { label: "Learning Paths", href: "/#learn-ai" },
      { label: "Inside the Classroom", href: "/#classroom" },
      { label: "Live with Experts", href: "/#live-experts" },
      { label: "Learning Resources", href: "/#resources" },
    ],
  },
  {
    title: "Practice",
    items: [
      { label: "Practice Experience", href: "/#practice-showcase" },
      { label: "Weekly Assignments", href: "/#weekly-assignments" },
      { label: "Practice Arenas", href: "/#practice" },
    ],
  },
  {
    title: "Build & Grow",
    items: [
      { label: "Career Tools", href: "/#career-tools" },
      { label: "AI Builder Toolkit", href: "/#ai-interactive-tools" },
      { label: "Member Projects", href: "/#projects" },
      { label: "Career Roadmap", href: "/#career-roadmap" },
    ],
  },
];

const primaryLinks = [
  { label: "Home", href: "/#top" },
  { label: "Studio", href: "/#youtube-studio" },
  { label: "Community", href: "/#community" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigationRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (event) => {
      if (!navigationRef.current?.contains(event.target)) setIsServicesOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsServicesOpen(false);
    };

    document.addEventListener("pointerdown", closeDropdown);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeDropdown);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeNavigation = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header ref={navigationRef} className="sticky top-0 z-50 border-b border-line/10 bg-base/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-10 xl:px-12">
        <a href="/#top" className="flex min-w-0 items-center gap-2.5 font-bold text-ink sm:gap-3" onClick={closeNavigation}>
          <span className="grid h-11 w-11 place-items-center overflow-hidden sm:h-12 sm:w-12">
            <img src={dsLogoPng} alt="Data Sense logo" className="h-10 w-10 object-contain sm:h-11 sm:w-11" />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate text-[0.98rem] sm:text-[1rem]">DataSense</span>
            <span className="mt-0.5 block text-[9px] font-extrabold uppercase tracking-[.16em] text-[#ff7a1a] sm:text-[10px] sm:tracking-[.18em]">AI Launchpad</span>
          </span>
        </a>

        <nav className="relative hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          <a href="/#top" className="rounded-lg px-3 py-2 text-sm font-semibold text-muted hover:bg-panel2/60 hover:text-ink">Home</a>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsServicesOpen((current) => !current)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold ${isServicesOpen ? "bg-panel2/70 text-ink" : "text-muted hover:bg-panel2/60 hover:text-ink"}`}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Our Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>

            {isServicesOpen && (
              <div className="absolute left-1/2 top-[calc(100%+12px)] w-[680px] -translate-x-1/2 rounded-2xl border border-line/10 bg-base p-3 shadow-[0_26px_70px_-28px_rgba(2,11,24,0.65)]">
                <div className="grid grid-cols-3 gap-2">
                  {serviceGroups.map((group) => (
                    <div key={group.title} className="rounded-xl bg-panel2/40 p-3">
                      <p className="px-2 pb-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-accent">{group.title}</p>
                      <div className="grid gap-1">
                        {group.items.map((item) => (
                          <a key={item.label} href={item.href} onClick={closeNavigation} className="rounded-lg px-2 py-2 text-sm font-semibold text-muted hover:bg-panel hover:text-ink">
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {primaryLinks.slice(1).map((item) => (
            <a key={item.label} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-muted hover:bg-panel2/60 hover:text-ink">{item.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" onClick={onToggleTheme} className="inline-flex h-10 items-center gap-2 rounded-xl border border-line/10 bg-panel2/70 px-3 text-sm font-semibold text-ink" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun className="h-4 w-4 text-accent2" /> : <Moon className="h-4 w-4 text-azure" />}
            <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <a href="https://www.skool.com/the-agent-lab-3899" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-bold text-slate-950 shadow-glow sm:flex"><Users className="h-4 w-4" />Join Skool</a>
          <button type="button" onClick={() => setIsMenuOpen((current) => !current)} className="grid h-11 w-11 place-items-center rounded-xl border border-line/10 bg-panel2/70 text-ink lg:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-line/10 bg-base/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-2" aria-label="Mobile navigation">
            <a href="/#top" onClick={closeNavigation} className="rounded-xl border border-line/10 bg-panel2/60 px-4 py-3 text-sm font-semibold text-ink">Home</a>

            <button type="button" onClick={() => setIsServicesOpen((current) => !current)} className="flex min-h-12 items-center justify-between rounded-xl border border-line/10 bg-panel2/60 px-4 py-3 text-left text-sm font-semibold text-ink" aria-expanded={isServicesOpen}>
              Our Services <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div className="grid gap-3 rounded-xl border border-line/10 bg-panel/70 p-3 sm:grid-cols-3">
                {serviceGroups.map((group) => (
                  <div key={group.title}>
                    <p className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-accent">{group.title}</p>
                    <div className="grid gap-1">
                      {group.items.map((item) => <a key={item.label} href={item.href} onClick={closeNavigation} className="rounded-lg px-2 py-2 text-sm font-semibold text-muted hover:bg-panel2 hover:text-ink">{item.label}</a>)}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {primaryLinks.slice(1).map((item) => <a key={item.label} href={item.href} onClick={closeNavigation} className="rounded-xl border border-line/10 bg-panel2/60 px-4 py-3 text-sm font-semibold text-ink">{item.label}</a>)}

            <a href="https://www.skool.com/the-agent-lab-3899" target="_blank" rel="noreferrer" className="mt-2 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-slate-950 shadow-glow"><Users className="h-4 w-4" />Join Skool</a>
          </nav>
        </div>
      )}
    </header>
  );
}
