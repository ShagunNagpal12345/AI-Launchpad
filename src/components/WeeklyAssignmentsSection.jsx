import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Database,
  MessageSquareMore,
  Sparkles,
  Trophy,
  UploadCloud,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SplitGradientHeading from "./SplitGradientHeading";
import { useAdminContent } from "../content/AdminContentContext";

import arjunAvatar from "../assets/community-section-assets/member-avatars/member-arjun-p.png";
import meeraAvatar from "../assets/community-section-assets/member-avatars/member-meera-k.png";
import rishaAvatar from "../assets/community-section-assets/member-avatars/member-risha-s.png";

const assignmentProofs = Object.values(
  import.meta.glob("../assets/Assignments/Proof/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
);

const skoolCommunityUrl = "https://www.skool.com/the-agent-lab-3899";

const assignments = [
  {
    icon: Sparkles,
    category: "AI Fundamentals",
    tone: "violet",
    title: "Prompt Design Sprint",
    due: "Due this Sunday, 11:59 PM IST",
    description: "Design five effective prompts for real-world use cases.",
    reviewer: "Risha S.",
    avatar: rishaAvatar,
    action: "Start",
  },
  {
    icon: Database,
    category: "Data & SQL",
    tone: "green",
    title: "SQL Practice Challenge",
    due: "Due this Sunday, 11:59 PM IST",
    description: "Solve real-world SQL problems and optimize queries.",
    reviewer: "Arjun P.",
    avatar: arjunAvatar,
    action: "Continue",
  },
  {
    icon: Bot,
    category: "AI Agents",
    tone: "blue",
    title: "Build a Mini AI Agent",
    due: "Due this Sunday, 11:59 PM IST",
    description: "Build an AI agent that can search, summarize, and respond.",
    reviewer: "Meera K.",
    avatar: meeraAvatar,
    action: "Start",
  },
];

const practiceSteps = [
  {
    icon: CalendarDays,
    title: "1. Weekly Assignment",
    text: "New challenges every week across topics, with clear goals and deadlines.",
    tone: "orange",
  },
  {
    icon: UploadCloud,
    title: "2. Submit Work",
    text: "Complete your assignment and submit it before the deadline.",
    tone: "green",
  },
  {
    icon: MessageSquareMore,
    title: "3. Get Feedback",
    text: "Receive detailed mentor feedback and an auto-score where applicable.",
    tone: "violet",
  },
  {
    icon: BarChart3,
    title: "4. Improve & Reattempt",
    text: "Apply the feedback, reattempt, and improve your best score.",
    tone: "blue",
  },
];

const benefits = [
  {
    icon: CalendarDays,
    value: "5+",
    label: "Weekly Assignments / Month",
    text: "Stay consistent. Build real skills.",
    tone: "orange",
  },
  {
    icon: BarChart3,
    label: "Instant Scorecards",
    text: "Get instant results and track your progress.",
    tone: "green",
  },
  {
    icon: BriefcaseBusiness,
    label: "Project-Based Learning",
    text: "Apply concepts to real-world projects and scenarios.",
    tone: "violet",
  },
];

const tones = {
  orange: "bg-orange-500/10 text-orange-500",
  green: "bg-emerald-500/10 text-emerald-500",
  violet: "bg-violet-500/10 text-violet-500",
  blue: "bg-blue-500/10 text-blue-500",
};

const badges = {
  violet: "border-violet-500/20 bg-violet-500/10 text-violet-500",
  green: "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
  blue: "border-blue-500/20 bg-blue-500/10 text-blue-500",
};

function AssignmentCard({ assignment, isLight }) {
  const Icon = assignment.icon;

  return (
    <article
      className={`flex min-w-0 flex-[0_0_100%] snap-start snap-always flex-col rounded-2xl border p-4 sm:flex-[0_0_330px] sm:p-5 lg:min-w-0 lg:flex-auto ${
        isLight
          ? "border-slate-200/90 bg-white shadow-[0_18px_48px_-40px_rgba(15,23,42,0.25)]"
          : "border-white/[0.08] bg-[#0c1a2d] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
      }`}
    >
      <span className={`inline-flex w-fit items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-bold ${badges[assignment.tone]}`}>
        <Icon className="h-4 w-4" aria-hidden="true" />
        {assignment.category}
      </span>

      <h3 className={`mt-4 text-lg font-extrabold tracking-[-0.02em] ${isLight ? "text-[#111a3b]" : "text-white"}`}>
        {assignment.title}
      </h3>

      <p className={`mt-3 flex items-center gap-2 text-sm font-semibold ${isLight ? "text-slate-600" : "text-slate-300"}`}>
        <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
        {assignment.due}
      </p>
      <p className={`mt-3 min-h-[48px] text-sm leading-6 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
        {assignment.description}
      </p>

      <div className={`mt-4 flex flex-col gap-3 border-t pt-4 min-[360px]:flex-row min-[360px]:items-center min-[360px]:justify-between ${isLight ? "border-slate-200" : "border-white/[0.08]"}`}>
        <div className="flex min-w-0 items-center gap-3">
          <img src={assignment.avatar} alt="" loading="lazy" decoding="async" className="h-10 w-10 shrink-0 rounded-full object-cover" />
          <div className="min-w-0">
            <p className={`text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>Review by</p>
            <p className={`truncate text-sm font-bold ${isLight ? "text-[#33415f]" : "text-slate-100"}`}>{assignment.reviewer}</p>
          </div>
        </div>

        <a
          href={skoolCommunityUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-[#f97316] px-4 text-sm font-bold text-white shadow-[0_12px_26px_-17px_rgba(249,115,22,0.7)] hover:bg-[#ea6b12] min-[360px]:w-auto"
        >
          {assignment.action}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function AssignmentProofGallery({ isLight, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [zoom, setZoom] = useState(1);

  const move = (direction) => {
    setActiveIndex((current) => (current + direction + assignmentProofs.length) % assignmentProofs.length);
    setZoom(1);
  };

  const selectImage = (index) => {
    setActiveIndex(index);
    setZoom(1);
  };

  useEffect(() => {
    if (isPaused || assignmentProofs.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => move(1), 4000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      aria-label="Assignments in action"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      className={`mt-6 overflow-hidden rounded-[22px] border px-3 py-5 sm:px-6 ${isLight ? "border-slate-200 bg-white" : "border-white/10 bg-[#081526]"}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-500">Learner submissions</p>
          <h2 className={`mt-1 text-xl font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>Assignments in Action</h2>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setZoom((current) => Math.max(1, current - 0.2))} disabled={zoom <= 1} aria-label="Reduce assignment image size" className={`grid h-11 w-11 place-items-center rounded-xl border disabled:cursor-not-allowed disabled:opacity-35 ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-300"}`}>
            <ZoomOut className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setZoom((current) => Math.min(1.6, current + 0.2))} disabled={zoom >= 1.6} aria-label="Increase assignment image size" className={`grid h-11 w-11 place-items-center rounded-xl border disabled:cursor-not-allowed disabled:opacity-35 ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-300"}`}>
            <ZoomIn className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setZoom(1)} aria-label="Reset assignment image size" className={`hidden min-h-11 rounded-xl border px-3 text-xs font-extrabold sm:inline-flex sm:items-center ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-300"}`}>
            {Math.round(zoom * 100)}%
          </button>
          <button type="button" onClick={onClose} aria-label="Close assignment gallery" className={`grid h-11 w-11 place-items-center rounded-xl border ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-300"}`}>
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative mt-4 h-[250px] overflow-hidden sm:h-[340px] lg:h-[400px] [perspective:1200px]">
        {assignmentProofs.map((image, index) => {
          let offset = index - activeIndex;
          if (offset > assignmentProofs.length / 2) offset -= assignmentProofs.length;
          if (offset < -assignmentProofs.length / 2) offset += assignmentProofs.length;
          const distance = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <button
              type="button"
              key={image}
              onClick={() => (isActive ? setZoom((current) => current === 1 ? 1.4 : 1) : selectImage(index))}
              aria-label={`View assignment proof ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className="absolute left-1/2 top-1/2 w-[64%] max-w-[660px] -translate-x-1/2 -translate-y-1/2 focus-visible:outline focus-visible:outline-4 focus-visible:outline-orange-400"
              style={{
                zIndex: 10 - distance,
                opacity: distance > 2 ? 0 : isActive ? 1 : 0.58,
                transform: `translate(-50%, -50%) translateX(calc(${offset} * clamp(110px, 25vw, 360px))) scale(${isActive ? zoom : distance === 1 ? 0.78 : 0.62}) rotateY(${offset * -12}deg)`,
                transition: "transform 420ms cubic-bezier(0.22,1,0.36,1), opacity 280ms ease-out",
                pointerEvents: distance > 2 ? "none" : "auto",
              }}
            >
              <img src={image} alt={`DataSense live assignment example ${index + 1}`} className={`block max-h-[370px] w-full rounded-xl border object-contain shadow-[0_28px_60px_-30px_rgba(15,23,42,0.55)] ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-[#020b18]"}`} />
            </button>
          );
        })}

        <button type="button" onClick={() => move(-1)} aria-label="Previous assignment image" className={`absolute left-1 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border shadow-lg sm:left-4 ${isLight ? "border-slate-200 bg-white text-[#111a3b]" : "border-white/10 bg-[#0c1a2d] text-white"}`}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Next assignment image" className={`absolute right-1 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border shadow-lg sm:right-4 ${isLight ? "border-slate-200 bg-white text-[#111a3b]" : "border-white/10 bg-[#0c1a2d] text-white"}`}>
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-3 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex gap-2" aria-label="Choose assignment image">
          {assignmentProofs.map((image, index) => (
            <button key={image} type="button" onClick={() => selectImage(index)} aria-label={`Show image ${index + 1}`} className={`h-2.5 rounded-full transition-[width,background-color] ${index === activeIndex ? "w-7 bg-orange-500" : isLight ? "w-2.5 bg-slate-300" : "w-2.5 bg-slate-600"}`} />
          ))}
        </div>
        <a href={skoolCommunityUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 text-sm font-bold text-white sm:w-auto">
          View Live Assignments <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {zoom > 1 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged assignment image ${activeIndex + 1}`}
          className="fixed inset-0 z-[100] flex flex-col bg-[#020813]/95 p-3 sm:p-5"
        >
          <div className="flex shrink-0 items-center justify-between gap-3 rounded-2xl bg-[#0c1a2d] p-2.5 text-white ring-1 ring-white/10 sm:px-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-orange-400">Assignment proof {activeIndex + 1} of {assignmentProofs.length}</p>
              <p className="mt-1 hidden text-xs text-slate-400 sm:block">The complete image remains available by scrolling when enlarged.</p>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setZoom((current) => Math.max(1, current - 0.2))} aria-label="Zoom out enlarged image" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white">
                <ZoomOut className="h-5 w-5" />
              </button>
              <span className="hidden min-w-16 text-center text-sm font-extrabold sm:block">{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={() => setZoom((current) => Math.min(1.6, current + 0.2))} disabled={zoom >= 1.6} aria-label="Zoom in enlarged image" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white disabled:opacity-35">
                <ZoomIn className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => setZoom(1)} aria-label="Close enlarged image and return to gallery" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-3 flex min-h-0 flex-1 items-start justify-center overflow-auto rounded-2xl bg-[#050b16] p-3 sm:p-5">
            <img
              src={assignmentProofs[activeIndex]}
              alt={`Full DataSense live assignment example ${activeIndex + 1}`}
              className="block h-auto rounded-xl bg-white object-contain shadow-2xl"
              style={
                zoom <= 1.2
                  ? { maxHeight: "calc(100vh - 130px)", maxWidth: "92vw", width: "auto" }
                  : { width: `${Math.round(zoom * 70)}vw`, maxWidth: "none" }
              }
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default function WeeklyAssignmentsSection({ theme = "light" }) {
  const { content } = useAdminContent();
  const sectionContent = content.homepageSections.weeklyAssignments;
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const galleryRef = useRef(null);

  const toggleGallery = () => {
    setIsGalleryOpen((current) => !current);
  };

  useEffect(() => {
    if (!isGalleryOpen) return;
    window.requestAnimationFrame(() => galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  }, [isGalleryOpen]);

  return (
    <section
      id="weekly-assignments"
      className={`overflow-x-clip py-4 md:py-5 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}
    >
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="flex flex-col gap-5 px-1 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <SplitGradientHeading
              theme={isLight ? "light" : "dark"}
              className={`text-[clamp(1.75rem,9vw,2.375rem)] font-extrabold leading-[1.12] tracking-[-0.04em] ${isLight ? "text-[#111a3b]" : "text-white"}`}
              plain={sectionContent.heading}
              accent={sectionContent.accentHeading}
            />
            <p className={`mt-3 max-w-[760px] text-[15px] font-medium leading-6 sm:text-base ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              {sectionContent.description}
            </p>
          </div>

          <button
            type="button"
            onClick={toggleGallery}
            aria-expanded={isGalleryOpen}
            aria-controls="assignment-proof-gallery"
            className={`inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl border px-5 text-sm font-bold sm:w-fit ${
              isLight
                ? "border-orange-300 text-orange-600 hover:bg-orange-50"
                : "border-orange-400/40 text-orange-300 hover:bg-orange-500/10"
            }`}
          >
            View Assignments in Action
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {isGalleryOpen && (
          <div id="assignment-proof-gallery" ref={galleryRef}>
            <AssignmentProofGallery isLight={isLight} onClose={() => setIsGalleryOpen(false)} />
          </div>
        )}

        <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,2.35fr)_minmax(320px,1fr)]">
          <div className={`min-w-0 rounded-[20px] border p-3 sm:rounded-[24px] sm:p-5 ${isLight ? "border-slate-200/90 bg-white/65" : "border-white/[0.08] bg-[#081526]"}`}>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500/10 text-orange-500">
                  <CalendarDays className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className={`text-lg font-extrabold sm:text-xl ${isLight ? "text-[#111a3b]" : "text-white"}`}>This Week&apos;s Challenges</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold text-orange-500">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                Resets every Monday
              </span>
            </div>

            <div className="weekly-assignments-scroll mt-5 flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
              {assignments.map((assignment) => (
                <AssignmentCard key={assignment.title} assignment={assignment} isLight={isLight} />
              ))}
            </div>

            <div className={`mt-5 grid gap-3 border-t pt-5 md:grid-cols-3 ${isLight ? "border-slate-200" : "border-white/[0.08]"}`}>
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.label} className={`flex items-center gap-3 rounded-xl p-3 sm:gap-4 sm:p-4 ${isLight ? "bg-white" : "bg-white/[0.035]"}`}>
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${tones[benefit.tone]}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      {benefit.value && <p className={`text-xl font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>{benefit.value}</p>}
                      <p className={`text-sm font-bold ${isLight ? "text-[#33415f]" : "text-slate-100"}`}>{benefit.label}</p>
                      <p className={`mt-1 text-xs leading-5 ${isLight ? "text-slate-500" : "text-slate-400"}`}>{benefit.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className={`min-w-0 rounded-[20px] border p-4 sm:rounded-[24px] sm:p-5 ${isLight ? "border-slate-200/90 bg-white/65" : "border-white/[0.08] bg-[#081526]"}`}>
            <h2 className={`text-xl font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>How Practice Works</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {practiceSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className={`flex items-center gap-4 rounded-xl border p-3.5 ${isLight ? "border-slate-200 bg-white" : "border-white/[0.08] bg-[#0c1a2d]"}`}>
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${tones[step.tone]}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className={`text-sm font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>{step.title}</h3>
                      <p className={`mt-1 text-xs leading-5 ${isLight ? "text-slate-600" : "text-slate-400"}`}>{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`mt-4 flex items-center gap-3 rounded-xl border p-4 ${isLight ? "border-blue-200 bg-blue-50 text-blue-700" : "border-blue-400/20 bg-blue-500/10 text-blue-300"}`}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-500/10">
                <Trophy className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold leading-5">
                Consistency today, mastery tomorrow. Keep showing up and level up!
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
