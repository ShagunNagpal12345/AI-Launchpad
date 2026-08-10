import { ArrowDown, ArrowLeft, Gamepad2, Keyboard, Target } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import EventsArenaSection from "../components/EventsArenaSection";
import PracticeSection from "../components/PracticeSection";
import SplitGradientHeading from "../components/SplitGradientHeading";

const arenaLinks = [
  {
    label: "Practice Arena",
    description: "Custom quizzes, mock tests, code practice, and progress tracking.",
    href: "#practice-showcase",
    icon: Target,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    label: "SQL Practice Arena",
    description: "Build fluency with 500+ SQL questions and interview challenges.",
    href: "#practice",
    icon: Keyboard,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    label: "Gaming Arena",
    description: "Learn through competitive SQL games, cases, and leaderboards.",
    href: "#practice",
    icon: Gamepad2,
    color: "text-violet-500 bg-violet-500/10",
  },
];

export default function LearningArenaPage({ theme = "light" }) {
  const isLight = theme === "light";

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ block: "start" });
  }, []);

  return (
    <main className={isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}>
      <section className="px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-12 lg:px-10">
        <div className="mx-auto max-w-[1532px]">
          <Link
            to="/#top"
            className={`inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 text-sm font-bold transition hover:-translate-y-0.5 ${
              isLight
                ? "border-slate-200 bg-white text-[#0b2d61] hover:border-orange-200"
                : "border-white/10 bg-white/[0.04] text-white hover:border-orange-400/30"
            }`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Home
          </Link>

          <div className="mt-10">
            <header className="mx-auto max-w-[900px] text-center">
              <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-orange-500 before:h-px before:w-[22px] before:bg-current before:opacity-60">
                Learn by doing
              </p>
              <SplitGradientHeading
                as="h1"
                theme={theme}
                plain="Your Learning"
                accent="Arena"
                className={`mx-auto mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.045em] ${isLight ? "text-[#071633]" : "text-[#f4f7fc]"}`}
              />
              <p className={`mx-auto mt-3 max-w-[720px] text-[15px] leading-6 ${isLight ? "text-[#667085]" : "text-[#9ba8bf]"}`}>
                Practise real skills, solve challenges, and turn every lesson into measurable progress.
              </p>
            </header>

            <nav aria-label="Learning Arena sections" className="mt-8 grid gap-3 sm:grid-cols-3">
              {arenaLinks.map((arena) => {
                const Icon = arena.icon;
                return (
                  <a
                    key={arena.label}
                    href={arena.href}
                    className={`group flex min-h-[190px] flex-col rounded-[20px] border p-5 transition duration-300 hover:-translate-y-1 ${
                      isLight
                        ? "border-slate-200 bg-white hover:border-orange-200"
                        : "border-white/10 bg-[#0c1a2d] hover:border-orange-400/30"
                    }`}
                  >
                    <span className={`grid h-10 w-10 place-items-center rounded-full ${arena.color}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <strong className={`mt-5 text-[15px] font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>
                      {arena.label}
                    </strong>
                    <span className={`mt-2 text-xs font-medium leading-5 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                      {arena.description}
                    </span>
                    <ArrowDown className="mt-auto h-4 w-4 text-orange-500 transition-transform group-hover:translate-y-1" aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      <EventsArenaSection />
      <PracticeSection theme={theme} />
    </main>
  );
}
