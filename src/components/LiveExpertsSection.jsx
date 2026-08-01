import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckSquare2,
  Clock3,
  MessageCircleQuestion,
  Radio,
  UserRound,
  UsersRound,
  Video,
} from "lucide-react";
import { useAdminContent } from "../content/AdminContentContext";

const liveClasses = [
  {
    day: "Mon",
    schedule: "Week 1",
    level: "Beginner",
    levelTone: "green",
    title: "Prompt Engineering Foundations",
    time: "7:00 PM – 8:30 PM IST",
    mentor: "Satvik",
    role: "AI Engineer",
    initials: "SA",
    action: "Join Live",
  },
  {
    day: "Wed",
    schedule: "Week 2",
    level: "Intermediate",
    levelTone: "violet",
    title: "Agent Builder: Multi-Agent Workflows",
    time: "7:00 PM – 8:30 PM IST",
    mentor: "Shagun",
    role: "Partner BI",
    initials: "SH",
    action: "Join Live",
  },
  {
    day: "Sat",
    schedule: "Week 3 & 4",
    level: "Advanced",
    levelTone: "blue",
    title: "Building RAG Systems From Scratch",
    time: "11:00 AM – 12:30 PM IST",
    mentor: "Satvik",
    role: "AI Engineer",
    initials: "SA",
    action: "Join Live",
  },
];

const supportItems = [
  {
    icon: MessageCircleQuestion,
    title: "Weekly Office Hours",
    text: "Get your doubts cleared live",
    tone: "blue",
  },
  {
    icon: CheckSquare2,
    title: "Project Feedback",
    text: "Receive expert reviews on your work",
    tone: "green",
  },
  {
    icon: MessageCircleQuestion,
    title: "Q&A Sessions",
    text: "Ask questions and get clarity",
    tone: "violet",
  },
  {
    icon: UserRound,
    title: "Personal Guidance",
    text: "1:1 mentorship for faster growth",
    tone: "orange",
  },
];

const highlights = [
  {
    icon: CalendarDays,
    value: "8–10",
    label: "Live Sessions / Month",
    text: "Interactive classes across all tracks",
    tone: "orange",
  },
  {
    icon: UsersRound,
    value: "25+",
    label: "Expert Mentors",
    text: "Industry professionals & AI builders",
    tone: "green",
  },
  {
    icon: Video,
    value: "100%",
    label: "Session Recordings Available",
    text: "Watch, revise and learn at your pace",
    tone: "violet",
  },
];

const tones = {
  orange: {
    icon: "bg-orange-500/10 text-orange-500",
    badgeLight: "border-orange-500/20 bg-orange-500/10 text-orange-600",
    badgeDark: "border-orange-400/25 bg-orange-400/10 text-orange-300",
  },
  green: {
    icon: "bg-emerald-500/10 text-emerald-500",
    badgeLight: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600",
    badgeDark: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-500",
    badgeLight: "border-violet-500/20 bg-violet-500/10 text-violet-600",
    badgeDark: "border-violet-400/25 bg-violet-400/10 text-violet-300",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-500",
    badgeLight: "border-blue-500/20 bg-blue-500/10 text-blue-600",
    badgeDark: "border-blue-400/25 bg-blue-400/10 text-blue-300",
  },
};

function LiveClassCard({ item, isLight }) {
  return (
    <article
      className={`flex min-w-[286px] snap-start flex-col rounded-2xl border p-5 sm:min-w-[330px] xl:min-w-0 ${
        isLight
          ? "border-[#dfe5ee] bg-white shadow-[0_14px_36px_-30px_rgba(15,23,42,0.45)]"
          : "border-white/10 bg-[#0b1729] shadow-[0_18px_45px_-32px_rgba(0,0,0,0.9)]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${tones[item.levelTone].icon}`}>
            <CalendarDays className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <span className={`truncate text-sm font-semibold ${isLight ? "text-[#53627e]" : "text-slate-300"}`}>
            {item.schedule}
          </span>
        </div>
        <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${isLight ? tones[item.levelTone].badgeLight : tones[item.levelTone].badgeDark}`}>
          <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
          {item.level}
        </span>
      </div>

      <h3 className={`mt-5 min-h-[56px] text-xl font-extrabold leading-7 tracking-[-0.02em] ${isLight ? "text-[#09183a]" : "text-white"}`}>
        {item.title}
      </h3>

      <div className={`mt-3 flex items-center gap-2 border-b pb-5 text-sm font-semibold ${isLight ? "border-[#e7ebf1] text-[#53627e]" : "border-white/10 text-slate-300"}`}>
        <Clock3 className="h-[18px] w-[18px]" aria-hidden="true" />
        {item.time}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-indigo-500/15 text-sm font-extrabold text-indigo-500">
            {item.initials}
          </span>
          <div className="min-w-0">
            <p className={`truncate text-sm font-extrabold ${isLight ? "text-[#09183a]" : "text-white"}`}>{item.mentor}</p>
            <p className={`truncate text-xs ${isLight ? "text-[#65738c]" : "text-slate-400"}`}>{item.role}</p>
          </div>
        </div>

        <a
          href="https://www.skool.com/the-agent-lab-3899"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-4 text-sm font-bold text-white shadow-[0_12px_24px_-14px_rgba(249,115,22,0.9)] hover:bg-orange-600"
        >
          <span className="hidden sm:inline">{item.action}</span>
          <Radio className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only sm:hidden">{item.action}</span>
        </a>
      </div>
    </article>
  );
}

export default function LiveExpertsSection({ theme = "light" }) {
  const { content } = useAdminContent();
  const sectionContent = content.homepageSections.liveExperts;
  const isLight = theme === "light";

  return (
    <section
      id="live-experts"
      className={`py-4 md:py-5 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}
    >
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div
          className={`live-experts-compact overflow-hidden rounded-[24px] border p-5 sm:p-7 ${
            isLight
              ? "border-slate-200/90 bg-white shadow-[0_18px_48px_-40px_rgba(15,23,42,0.25)]"
              : "border-white/[0.08] bg-[#0c1a2d] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
          }`}
        >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className={`text-[26px] font-extrabold leading-tight tracking-[-0.035em] sm:text-[29px] ${isLight ? "text-[#111a3b]" : "text-white"}`}>
              {sectionContent.heading} <span className="text-orange-500">{sectionContent.accentHeading}</span>
            </h2>
            <p className={`mt-3 max-w-[720px] text-[14px] font-medium leading-6 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              {sectionContent.description}
            </p>
          </div>

          <a
            href={sectionContent.ctaHref}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-xl border px-5 text-sm font-extrabold ${
              isLight
                ? "border-orange-300 text-orange-600 hover:bg-orange-50"
                : "border-orange-400/40 text-orange-300 hover:bg-orange-500/10"
            }`}
          >
            {sectionContent.ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)]">
          <div className={`min-w-0 rounded-2xl border p-4 sm:p-5 ${isLight ? "border-[#dfe5ee] bg-[#fbfcfe]" : "border-white/10 bg-[#07111f]"}`}>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 px-1">
              <div className="flex items-center gap-3">
                <h3 className={`text-lg font-extrabold ${isLight ? "text-[#09183a]" : "text-white"}`}>Upcoming Live Classes</h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-500">
                  <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" /> Live
                </span>
              </div>
              <div className="flex gap-2" aria-label="Class days">
                {liveClasses.map((item, index) => (
                  <span
                    key={item.day}
                    className={`grid min-h-11 min-w-14 place-items-center rounded-lg border px-3 text-sm font-bold ${
                      index === 0
                        ? "border-orange-400 bg-orange-500/10 text-orange-500"
                        : isLight
                          ? "border-[#dfe5ee] text-[#5c6c88]"
                          : "border-white/10 text-slate-300"
                    }`}
                  >
                    {item.day}
                  </span>
                ))}
              </div>
            </div>

            <div className="live-experts-scroll -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 xl:grid xl:grid-cols-3 xl:overflow-visible xl:pb-0">
              {liveClasses.map((item) => (
                <LiveClassCard key={item.title} item={item} isLight={isLight} />
              ))}
            </div>
          </div>

          <aside className={`rounded-2xl border p-5 sm:p-6 ${isLight ? "border-[#dfe5ee] bg-[#fbfcfe]" : "border-white/10 bg-[#07111f]"}`}>
            <h3 className={`text-lg font-extrabold ${isLight ? "text-[#09183a]" : "text-white"}`}>Mentor Support</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {supportItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className={`flex items-center gap-4 rounded-xl p-4 ${isLight ? "bg-white" : "bg-white/[0.035]"}`}>
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${tones[item.tone].icon}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className={`font-extrabold ${isLight ? "text-[#3d4d69]" : "text-slate-100"}`}>{item.title}</h4>
                      <p className={`mt-0.5 text-sm leading-5 ${isLight ? "text-[#60708b]" : "text-slate-400"}`}>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className={`flex items-center gap-4 rounded-2xl border p-5 ${isLight ? "border-[#dfe5ee] bg-white" : "border-white/10 bg-[#0b1729]"}`}>
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${tones[item.tone].icon}`}>
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <p className={`text-2xl font-black tracking-[-0.03em] ${isLight ? "text-[#09183a]" : "text-white"}`}>{item.value}</p>
                  <p className={`mt-0.5 text-sm font-extrabold ${isLight ? "text-[#3d4d69]" : "text-slate-200"}`}>{item.label}</p>
                  <p className={`mt-1 text-xs leading-5 ${isLight ? "text-[#60708b]" : "text-slate-400"}`}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </section>
  );
}
