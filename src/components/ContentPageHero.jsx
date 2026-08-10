import { ArrowDownRight, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SplitGradientHeading from "./SplitGradientHeading";

export default function ContentPageHero({ theme = "light", eyebrow, plain, accent, description, sections = [] }) {
  const isLight = ["light", "day", "white"].includes(String(theme).toLowerCase());
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    window.requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ block: "start" }));
  }, [location.hash]);

  return (
    <section className={`relative overflow-hidden border-b px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 ${isLight ? "border-slate-200/80 bg-[#f7f9fc]" : "border-white/[0.08] bg-[#020b18]"}`}>
      <span className={`pointer-events-none absolute -right-24 -top-36 h-80 w-80 rounded-full border ${isLight ? "border-blue-200/50" : "border-blue-400/10"}`} aria-hidden="true" />
      <span className={`pointer-events-none absolute -right-2 top-10 h-40 w-40 rounded-full border ${isLight ? "border-orange-200/60" : "border-orange-400/10"}`} aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between gap-4">
          <Link to="/#top" className={`inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 text-sm font-bold transition hover:-translate-y-0.5 ${isLight ? "border-slate-200 bg-white text-[#0b2d61] hover:border-orange-200" : "border-white/10 bg-white/[0.04] text-white hover:border-orange-400/30"}`}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Home
          </Link>
          <span className={`hidden text-[11px] font-extrabold uppercase tracking-[0.18em] sm:block ${isLight ? "text-slate-400" : "text-slate-500"}`}>AI Launchpad · Page guide</span>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)] lg:items-end lg:gap-16">
          <header>
            <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-orange-500 before:h-px before:w-8 before:bg-current before:opacity-60">{eyebrow}</p>
            <SplitGradientHeading as="h1" theme={theme} plain={plain} accent={accent} className={`mt-3 max-w-[900px] text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.045em] ${isLight ? "text-[#071633]" : "text-[#f4f7fc]"}`} />
            <p className={`mt-3 max-w-[720px] text-[15px] leading-6 ${isLight ? "text-[#667085]" : "text-[#9ba8bf]"}`}>{description}</p>
          </header>

          {sections.length > 0 && (
            <nav aria-label="Explore this page" className={`border-t pt-5 ${isLight ? "border-slate-300" : "border-white/15"}`}>
              <p className={`text-xs font-extrabold uppercase tracking-[0.15em] ${isLight ? "text-[#071633]" : "text-white"}`}>Explore this page</p>
              <div className="mt-4 grid gap-x-5 gap-y-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {sections.map((section, index) => (
                  <a key={section.href} href={section.href} className={`group flex min-h-12 items-center gap-3 border-b py-2.5 text-sm font-bold transition-colors ${isLight ? "border-slate-200 text-slate-600 hover:text-orange-600" : "border-white/[0.08] text-slate-300 hover:text-orange-300"}`}>
                    <span className="text-[10px] font-extrabold tabular-nums text-orange-500">{String(index + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 flex-1">{section.label}</span>
                    <ArrowDownRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>

        <div className="mt-10 flex h-1.5 overflow-hidden rounded-full lg:mt-14" aria-hidden="true">
          <span className="w-[28%] bg-[#268df2]" /><span className="w-[18%] bg-[#1fc7d4]" /><span className="w-[18%] bg-[#35c97d]" /><span className="w-[14%] bg-[#d3d94e]" /><span className="w-[12%] bg-[#ff9a2f]" /><span className="w-[10%] bg-[#ef5a6f]" />
        </div>
      </div>
    </section>
  );
}
