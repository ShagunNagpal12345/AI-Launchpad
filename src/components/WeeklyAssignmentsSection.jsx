import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  Database,
  MessageSquareMore,
  Sparkles,
  Trophy,
  UploadCloud,
} from "lucide-react";
import SplitGradientHeading from "./SplitGradientHeading";

import arjunAvatar from "../assets/community-section-assets/member-avatars/member-arjun-p.png";
import meeraAvatar from "../assets/community-section-assets/member-avatars/member-meera-k.png";
import rishaAvatar from "../assets/community-section-assets/member-avatars/member-risha-s.png";

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
      className={`flex min-w-[282px] snap-start flex-col rounded-2xl border p-4 sm:min-w-[330px] sm:p-5 lg:min-w-0 ${
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

      <div className={`mt-4 flex items-center justify-between gap-3 border-t pt-4 ${isLight ? "border-slate-200" : "border-white/[0.08]"}`}>
        <div className="flex min-w-0 items-center gap-3">
          <img src={assignment.avatar} alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" />
          <div className="min-w-0">
            <p className={`text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>Review by</p>
            <p className={`truncate text-sm font-bold ${isLight ? "text-[#33415f]" : "text-slate-100"}`}>{assignment.reviewer}</p>
          </div>
        </div>

        <a
          href="https://practice.datasenseai.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-[#f97316] px-4 text-sm font-bold text-white shadow-[0_12px_26px_-17px_rgba(249,115,22,0.7)] hover:bg-[#ea6b12]"
        >
          {assignment.action}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function WeeklyAssignmentsSection({ theme = "light" }) {
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section
      id="weekly-assignments"
      className={`py-4 md:py-5 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}
    >
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="flex flex-col gap-5 px-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <SplitGradientHeading
              theme={isLight ? "light" : "dark"}
              className={`text-[32px] font-extrabold leading-tight tracking-[-0.04em] sm:text-[38px] ${isLight ? "text-[#111a3b]" : "text-white"}`}
              plain="Weekly Assignments &"
              accent="Practice"
            />
            <p className={`mt-3 max-w-[760px] text-[15px] font-medium leading-6 sm:text-base ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Learn by doing with hands-on assignments, quizzes, deadlines, and expert feedback.
            </p>
          </div>

          <a
            href="https://practice.datasenseai.com/"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-xl border px-5 text-sm font-bold ${
              isLight
                ? "border-orange-300 text-orange-600 hover:bg-orange-50"
                : "border-orange-400/40 text-orange-300 hover:bg-orange-500/10"
            }`}
          >
            View all assignments
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,2.35fr)_minmax(320px,1fr)]">
          <div className={`rounded-[24px] border p-4 sm:p-5 ${isLight ? "border-slate-200/90 bg-white/65" : "border-white/[0.08] bg-[#081526]"}`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500/10 text-orange-500">
                  <CalendarDays className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className={`text-xl font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>This Week&apos;s Challenges</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold text-orange-500">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                Resets every Monday
              </span>
            </div>

            <div className="weekly-assignments-scroll mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
              {assignments.map((assignment) => (
                <AssignmentCard key={assignment.title} assignment={assignment} isLight={isLight} />
              ))}
            </div>

            <div className={`mt-5 grid gap-3 border-t pt-5 md:grid-cols-3 ${isLight ? "border-slate-200" : "border-white/[0.08]"}`}>
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.label} className={`flex items-center gap-4 rounded-xl p-4 ${isLight ? "bg-white" : "bg-white/[0.035]"}`}>
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

          <aside className={`rounded-[24px] border p-5 ${isLight ? "border-slate-200/90 bg-white/65" : "border-white/[0.08] bg-[#081526]"}`}>
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
