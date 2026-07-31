import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Flame,
  Maximize2,
  Play,
  Target,
  Trophy,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import practiceArenaNeural from "../assets/practice-showcase/practice-arena-neural.png";
import practiceArena from "../assets/practice-showcase/practice-arena.png";
import sqlCodepadDark from "../assets/practice-showcase/sql-codepad-dark.png";
import sqlCodepadLight from "../assets/practice-showcase/sql-codepad-light.png";
import sqlLearningRoadmap from "../assets/practice-showcase/sql-learning-roadmap.png";
import sqlQuizBuilder from "../assets/practice-showcase/sql-quiz-builder.png";

const screenshots = [
  { src: practiceArena, title: "Practice Lab", description: "Track progress and create custom tests." },
  { src: sqlQuizBuilder, title: "Custom SQL Quizzes", description: "Choose difficulty, topics, time, and format." },
  { src: sqlCodepadLight, title: "SQL Codepad", description: "Solve real-world SQL challenges with instant results." },
  { src: sqlCodepadDark, title: "Focused Coding Mode", description: "Practice comfortably in light or dark mode." },
  { src: sqlLearningRoadmap, title: "Guided SQL Roadmaps", description: "Follow structured lessons and earn certificates." },
  { src: practiceArenaNeural, title: "DataSense Practice Arena", description: "Move between practice, mock tests, and custom challenges." },
];

const stats = [
  { icon: Braces, value: "3,000+", label: "Practice questions" },
  { icon: Target, value: "30+", label: "Mock quizzes" },
  { icon: CheckCircle2, value: "Instant", label: "Answer feedback" },
  { icon: Trophy, value: "Skill", label: "Progress tracking" },
];

function ScreenshotCard({ item, duplicate = false, onOpen }) {
  return (
    <figure
      className="group relative w-[210px] shrink-0 overflow-hidden border border-line/10 bg-panel shadow-[0_22px_55px_-38px_rgba(2,11,24,0.75)] sm:w-[336px] lg:w-[434px]"
      aria-hidden={duplicate || undefined}
    >
      <button
        type="button"
        onClick={() => onOpen(item)}
        tabIndex={duplicate ? -1 : 0}
        className="relative block aspect-[16/9] w-full overflow-hidden bg-panel2/60 text-left"
        aria-label={`Enlarge ${item.title} screenshot`}
      >
        <img
          src={item.src}
          alt={duplicate ? "" : `${item.title} interface`}
          loading="lazy"
          className="h-full w-full object-contain object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
        />
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center bg-slate-950/75 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
          <Maximize2 className="h-4 w-4" aria-hidden="true" />
        </span>
      </button>
      <figcaption className="flex items-center justify-between gap-3 border-t border-line/10 px-3 py-2.5">
        <div>
          <p className="text-xs font-extrabold text-ink">{item.title}</p>
          <p className="mt-0.5 text-[10px] leading-4 text-muted">{item.description}</p>
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
      </figcaption>
    </figure>
  );
}

export default function PracticeArena() {
  const [activeScreenshot, setActiveScreenshot] = useState(null);

  useEffect(() => {
    if (!activeScreenshot) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") setActiveScreenshot(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeScreenshot]);

  return (
    <>
    <div className="overflow-hidden rounded-[24px] border border-line/10 bg-panel py-5 shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)] sm:py-6">
      <div className="flex flex-col gap-5 px-5 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-500">
            <Flame className="h-4 w-4" aria-hidden="true" /> Practice Arena
          </div>
          <h2 className="mt-3 text-[26px] font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-[29px]">
            Practice. Build. <span className="text-orange-500">Improve.</span>
          </h2>
          <p className="mt-2 max-w-[680px] text-sm font-medium leading-6 text-muted">
            Solve real challenges, run code, create custom quizzes, and track every step of your progress.
          </p>
        </div>

        <a
          href="https://practice.datasenseai.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 w-fit shrink-0 items-center gap-2 rounded-xl bg-accent px-5 text-sm font-extrabold text-white shadow-[0_12px_26px_-17px_rgba(249,115,22,0.7)] hover:bg-orange-600"
        >
          <Play className="h-4 w-4" aria-hidden="true" /> Start Practicing
        </a>
      </div>

      <div className="practice-showcase-shell mt-6 overflow-hidden" tabIndex="0" aria-label="Practice platform previews. Animation pauses while focused.">
        <div className="practice-showcase-track flex gap-4 px-5 sm:gap-5 sm:px-6">
          <div className="flex gap-4 sm:gap-5">
            {screenshots.map((item) => <ScreenshotCard key={item.title} item={item} onOpen={setActiveScreenshot} />)}
          </div>
          <div className="flex gap-4 sm:gap-5" aria-hidden="true">
            {screenshots.map((item) => <ScreenshotCard key={`duplicate-${item.title}`} item={item} duplicate onOpen={setActiveScreenshot} />)}
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 px-5 sm:px-6 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-3 rounded-xl border border-line/10 bg-panel2/55 p-3.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-500/10 text-orange-500"><Icon className="h-4 w-4" /></span>
              <div><p className="text-sm font-extrabold text-ink">{item.value}</p><p className="text-xs text-muted">{item.label}</p></div>
            </div>
          );
        })}
      </div>
    </div>

    {activeScreenshot && (
      <div
        className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/90 p-3 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={`${activeScreenshot.title} enlarged screenshot`}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setActiveScreenshot(null);
        }}
      >
        <div className="relative flex max-h-[94vh] w-full max-w-[1600px] flex-col bg-[#050b14] shadow-2xl">
          <div className="flex min-h-12 items-center justify-between gap-4 border-b border-white/10 px-4 text-white">
            <div className="min-w-0"><p className="truncate text-sm font-extrabold">{activeScreenshot.title}</p><p className="hidden truncate text-xs text-slate-400 sm:block">{activeScreenshot.description}</p></div>
            <button type="button" onClick={() => setActiveScreenshot(null)} autoFocus className="grid h-10 w-10 shrink-0 place-items-center hover:bg-white/10" aria-label="Close enlarged screenshot">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto">
            <img src={activeScreenshot.src} alt={`${activeScreenshot.title} full-size interface`} className="mx-auto block max-h-[calc(94vh-48px)] max-w-full object-contain" />
          </div>
        </div>
      </div>
    )}
    </>
  );
}
