"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, PenLine, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { careerTools } from "../data/siteData";
import SplitGradientHeading from "./SplitGradientHeading";

import InterviewImg from "../assets/Career/Interview.png";
import ResumeImg from "../assets/Career/Resume.png";
import ATSImg from "../assets/Career/ATS.png";
import CoverLetterImg from "../assets/Career/CoverLetter.png";
import SkillCertificationImg from "../assets/Career/SkillCertification.png";

const cardThemes = [
  {
    image: ResumeImg,
    accent: "from-cyan-400 to-teal-400",
    iconBg: "bg-cyan-400/15 text-cyan-100 ring-cyan-300/20",
    button: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
    glow: "group-hover:shadow-cyan-500/20",
    fallback:
      "Build a polished, recruiter-ready resume with strong keywords and clean formatting.",
    chips: ["Resume Score", "ATS Ready", "Better Bullets"],
  },
  {
    image: InterviewImg,
    accent: "from-blue-400 to-indigo-400",
    iconBg: "bg-blue-400/15 text-blue-100 ring-blue-300/20",
    button: "bg-blue-500 text-white hover:bg-blue-400",
    glow: "group-hover:shadow-blue-500/20",
    fallback:
      "Practice realistic interview rounds and improve your answers with AI feedback.",
    chips: ["Mock Rounds", "AI Feedback", "Confidence"],
  },
  {
    image: ATSImg,
    accent: "from-emerald-400 to-teal-400",
    iconBg: "bg-emerald-400/15 text-emerald-100 ring-emerald-300/20",
    button: "bg-emerald-500 text-white hover:bg-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
    fallback:
      "Compare your resume with the job description and identify missing keywords fast.",
    chips: ["JD Match", "Keyword Gaps", "Fix Plan"],
  },
];

const secondaryTools = [
  {
    icon: PenLine,
    title: "Cover Letter Builder",
    text: "Create a tailored cover letter that matches the role and highlights your strengths professionally.",
    button: "Create Cover Letter",
    href: "https://coverletter.careersenseai.com/",
    image: CoverLetterImg,
    accent: "from-orange-400 to-amber-400",
    iconStyle: "bg-orange-400/15 text-orange-100 ring-orange-300/20",
    buttonStyle: "bg-orange-500 text-white hover:bg-orange-400",
    glow: "group-hover:shadow-orange-500/20",
    chips: ["Tailored Draft", "Role Match", "Quick Edits"],
    status: "live",
  },
  {
    icon: ShieldCheck,
    title: "Skill Certification",
    text: "Validate your skills with structured practice, role-based assessments, and certification-ready prep.",
    button: "Explore Certifications",
    href: "https://certifi.careersenseai.com/",
    image: SkillCertificationImg,
    accent: "from-blue-400 to-indigo-400",
    iconStyle: "bg-blue-400/15 text-blue-100 ring-blue-300/20",
    buttonStyle: "bg-indigo-500 text-white hover:bg-indigo-400",
    glow: "group-hover:shadow-blue-500/20",
    chips: ["Assessments", "Proof of Skill", "Certificates"],
    status: "live",
  },
];

const mainToolCards = [
  {
    ...careerTools[0],
    description: careerTools[0]?.text,
    href: "/resume-builder",
    button: "Build Resume",
    status: "coming-soon",
    launchDate: "2026-08-01T00:00:00+05:30",
    launchLabel: "1st August",
  },
  {
    ...careerTools[4],
    description: careerTools[4]?.text,
    href: "/interview-simulator",
    button: "Start Practice",
    status: "coming-soon",
    launchDate: "2026-09-04T00:00:00+05:30",
    launchLabel: "4th September",
  },
  {
    ...careerTools[2],
    description: careerTools[2]?.text,
    href: "https://ats.careersenseai.com/",
    button: "Check ATS Score",
    status: "live",
  },
];

function StatusBadge({ status }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-500/18 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-emerald-50 backdrop-blur-sm shadow-[0_0_0_1px_rgba(16,185,129,0.14)]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.95)]" />
        </span>
        LIVE
      </span>
    );
  }

  return (
    <span className="rounded-full border border-[#ffd28a]/70 bg-[linear-gradient(90deg,rgba(255,214,102,0.92)_0%,rgba(255,158,68,0.92)_54%,rgba(239,90,111,0.92)_100%)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#3d2507] shadow-[0_10px_24px_-18px_rgba(249,115,22,0.75)]">
      Coming Soon
    </span>
  );
}

function useInViewOnce() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function getTimeLeft(targetDate) {
  const distance = new Date(targetDate).getTime() - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    isLive: false,
  };
}

function CountdownModal({ tool, isLight, onClose }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(tool.launchDate));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(tool.launchDate));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [tool.launchDate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
    >
      <div
        className={`w-full max-w-xl rounded-[24px] border p-6 shadow-[0_35px_90px_-45px_rgba(15,23,42,0.9)] sm:p-8 ${
          isLight
            ? "border-[#d9e2f0] bg-white text-slate-900"
            : "border-[#28415c] bg-[#071726] text-white"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#ff7218]">
              Coming Soon
            </p>
            <h3
              id="coming-soon-title"
              className="mt-2 text-[28px] font-black tracking-[-0.04em]"
            >
              {tool.title}
            </h3>
            <p
              className={`mt-3 max-w-lg text-sm leading-6 ${
                isLight ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Launching on {tool.launchLabel}. The countdown below shows exactly
              how long is left.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold transition ${
              isLight
                ? "border-slate-200 text-slate-500 hover:bg-slate-100"
                : "border-slate-700 text-slate-300 hover:bg-slate-800"
            }`}
            aria-label="Close popup"
          >
            ×
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className={`rounded-[18px] border px-4 py-5 text-center ${
                isLight
                  ? "border-[#e4e9f1] bg-[#f8fafc]"
                  : "border-[#22344b] bg-[#0b1728]"
              }`}
            >
              <div className="text-[28px] font-black tracking-[-0.05em] text-[#ff7218]">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div
                className={`mt-1 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                  isLight ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {timeLeft.isLive ? (
          <p className="mt-5 text-sm font-semibold text-emerald-500">
            This section is now live.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function MainToolCard({ tool, index, isVisible, isLight, onComingSoonClick }) {
  const theme = cardThemes[index % cardThemes.length];
  const isComingSoon = tool.status === "coming-soon";

  return (
    <article
      className={`group relative min-h-[320px] overflow-hidden rounded-[18px] border transition-all duration-500 ease-out hover:-translate-y-1 sm:min-h-[305px] lg:min-h-[315px] ${
        isLight
          ? "border-[#e6eaf1] bg-white shadow-[0_14px_34px_-30px_rgba(15,23,42,0.24)] hover:border-blue-200 hover:shadow-[0_18px_42px_-32px_rgba(37,99,235,0.2)]"
          : "border-[#22344b] bg-[#0b1728] shadow-[0_18px_42px_-34px_rgba(0,0,0,0.55)] hover:border-[#2f4b68] hover:shadow-[0_22px_48px_-34px_rgba(37,99,235,0.18)]"
      } ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <img
        src={theme.image}
        alt={`${tool.title} visual`}
        className="absolute inset-0 h-full w-full object-cover opacity-1 transition duration-500 ease-out group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(180deg,rgba(248,250,252,0.02),rgba(15,23,42,0.24)_45%,rgba(15,23,42,0.78))]" />
      <div className="absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_22%_16%,rgba(255,255,255,0.3),transparent_30%)]" />

      <div
        className={`absolute left-5 top-5 h-1 w-16 rounded-full bg-gradient-to-r ${theme.accent}`}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex justify-end">
            <StatusBadge status={tool.status} />
          </div>

          <h3 className="mt-12 max-w-[13ch] text-[20px] font-bold leading-[1.08] tracking-tight text-white sm:text-[24px] lg:text-[26px]">
            {tool.title}
          </h3>

          <p className="mt-2.5 max-w-[36ch] text-[12px] font-medium leading-5 text-white/75 sm:text-[13px] sm:leading-5">
            {tool.description || theme.fallback}
          </p>
        </div>

        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {theme.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold text-white/75 ring-1 ring-white/10 backdrop-blur-md"
              >
                {chip}
              </span>
            ))}
          </div>

          {isComingSoon ? (
            <button
              type="button"
              onClick={() => onComingSoonClick(tool)}
              className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-[11px] bg-[#ff7218] px-4 py-2.5 text-[13px] font-extrabold text-white shadow-[0_13px_28px_-18px_rgba(249,115,22,0.72)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ee6814] active:scale-95 sm:w-auto sm:text-[13px]"
            >
              {tool.button}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          ) : (
            <a
              href={tool.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-[11px] bg-[#ff7218] px-4 py-2.5 text-[13px] font-extrabold text-white shadow-[0_13px_28px_-18px_rgba(249,115,22,0.72)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ee6814] active:scale-95 sm:w-auto sm:text-[13px]"
            >
              {tool.button}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function SecondaryToolCard({ item, index, isVisible, isLight }) {
  return (
    <article
      className={`group relative min-h-[320px] overflow-hidden rounded-[18px] border transition-all duration-500 ease-out hover:-translate-y-1 sm:min-h-[305px] lg:min-h-[315px] ${
        isLight
          ? "border-[#e6eaf1] bg-white shadow-[0_14px_34px_-30px_rgba(15,23,42,0.24)] hover:border-blue-200 hover:shadow-[0_18px_42px_-32px_rgba(37,99,235,0.2)]"
          : "border-[#22344b] bg-[#0b1728] shadow-[0_18px_42px_-34px_rgba(0,0,0,0.55)] hover:border-[#2f4b68] hover:shadow-[0_22px_48px_-34px_rgba(37,99,235,0.18)]"
      } ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${360 + index * 110}ms` }}
    >
      <img
        src={item.image}
        alt={`${item.title} visual`}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(180deg,rgba(248,250,252,0.02),rgba(15,23,42,0.24)_45%,rgba(15,23,42,0.78))]" />
      <div className="absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_22%_16%,rgba(255,255,255,0.3),transparent_30%)]" />
      <div
        className={`absolute left-5 top-5 h-1 w-16 rounded-full bg-gradient-to-r ${item.accent}`}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex justify-end">
            <StatusBadge status={item.status} />
          </div>

          <h3 className="mt-12 max-w-[13ch] text-[20px] font-bold leading-[1.08] tracking-tight text-white sm:text-[24px] lg:text-[26px]">
            {item.title}
          </h3>

          <p className="mt-2.5 max-w-[36ch] text-[12px] font-medium leading-5 text-white/75 sm:text-[13px] sm:leading-5">
            {item.text}
          </p>
        </div>

        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {item.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold text-white/75 ring-1 ring-white/10 backdrop-blur-md"
              >
                {chip}
              </span>
            ))}
          </div>

          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-[11px] bg-[#ff7218] px-4 py-2.5 text-[13px] font-extrabold text-white shadow-[0_13px_28px_-18px_rgba(249,115,22,0.72)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ee6814] active:scale-95 sm:w-auto sm:text-[13px]"
          >
            {item.button}
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ToolsSection({ theme = "light" }) {
  const { ref, isVisible } = useInViewOnce();
  const [activeComingSoonTool, setActiveComingSoonTool] = useState(null);
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section
      id="career-tools"
      ref={ref}
      className={`py-5 md:py-7 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}
    >
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className={`rounded-[22px] border px-5 py-6 sm:px-6 ${
          isLight
            ? "border-[#e4e9f1] bg-white shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
            : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
        }`}>
      <div className="relative mx-auto flex max-w-[1320px] flex-col justify-center">
        <div
          className={`mx-auto mb-6 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
        
          <SplitGradientHeading
            theme={theme}
            className={`text-[24px] font-extrabold tracking-[-0.035em] sm:text-[28px] ${
              isLight ? "text-[#111a3b]" : "text-white"
            }`}
            plain="Everything You Need to"
            accent="Get Hired"
          />

          <p className={`mx-auto mt-2 max-w-2xl text-[13px] font-medium leading-6 ${
            isLight ? "text-slate-500" : "text-slate-400"
          }`}>
            Build resumes, prepare for interviews, check ATS readiness, and earn
            certifications with one focused workflow.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mainToolCards.map((tool, index) => (
            <MainToolCard
              key={tool.title}
              tool={tool}
              index={index}
              isVisible={isVisible}
              isLight={isLight}
              onComingSoonClick={setActiveComingSoonTool}
            />
          ))}
        </div>

        <div className="mt-3 grid gap-4 lg:grid-cols-2">
          {secondaryTools.map((item, index) => (
            <SecondaryToolCard
              key={item.title}
              item={item}
              index={index}
              isVisible={isVisible}
              isLight={isLight}
            />
          ))}
        </div>
      </div>
      </div>
      {activeComingSoonTool ? (
        <CountdownModal
          tool={activeComingSoonTool}
          isLight={isLight}
          onClose={() => setActiveComingSoonTool(null)}
        />
      ) : null}
      </div>
    </section>
  );
}
