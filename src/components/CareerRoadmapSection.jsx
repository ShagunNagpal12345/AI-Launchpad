import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Box,
  BriefcaseBusiness,
  Check,
  Clock3,
  Code2,
  FileBarChart,
  FileText,
  Medal,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import SplitGradientHeading from "./SplitGradientHeading";
import { useAdminContent } from "../content/AdminContentContext";

const roadmap = [
  { icon: BookOpen, title: "AI Foundations", text: "Learn core AI concepts, tools & Python basics", status: "Completed", tone: "green" },
  { icon: Code2, title: "Guided Practice", text: "Practice with quizzes, labs & mock tests", status: "Completed", tone: "green" },
  { icon: Box, title: "Real Projects", text: "Build end-to-end projects & real-world solutions", status: "In Progress", tone: "blue" },
  { icon: Medal, title: "Skill Certification", text: "Validate your skills with structured assessments", status: "Upcoming", tone: "violet" },
  { icon: BriefcaseBusiness, title: "Career Toolkit", text: "Prepare resumes, cover letters & interviews", status: "Upcoming", tone: "orange" },
];

const certificates = [
  { title: "AI Fundamentals Certificate", status: "Completed", meta: "Certificate earned", tone: "green" },
  { title: "SQL for AI Professionals", status: "In Progress", meta: "76% completed", tone: "blue" },
  { title: "Machine Learning Practitioner", status: "Upcoming", meta: "Unlocks after SQL", tone: "violet" },
];

const toneStyles = {
  green: { icon: "bg-emerald-500/10 text-emerald-500", badge: "bg-emerald-500/10 text-emerald-500" },
  blue: { icon: "bg-blue-500/10 text-blue-500", badge: "bg-blue-500/10 text-blue-500" },
  violet: { icon: "bg-violet-500/10 text-violet-500", badge: "bg-violet-500/10 text-violet-500" },
  orange: { icon: "bg-orange-500/10 text-orange-500", badge: "bg-orange-500/10 text-orange-500" },
};

function RoadmapStep({ step, index, isLight }) {
  const Icon = step.icon;
  return (
    <div className="relative grid grid-cols-[36px_42px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[38px_44px_minmax(0,1fr)_auto]">
      <span className={`relative z-10 grid h-9 w-9 place-items-center rounded-full text-xs font-extrabold sm:h-[38px] sm:w-[38px] ${toneStyles[step.tone].icon}`}>
        {index + 1}
      </span>
      <span className={`grid h-[42px] w-[42px] place-items-center rounded-xl sm:h-11 sm:w-11 ${toneStyles[step.tone].icon}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0 py-1">
        <h3 className={`text-sm font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>{step.title}</h3>
        <p className={`mt-0.5 text-xs leading-4 ${isLight ? "text-slate-600" : "text-slate-400"}`}>{step.text}</p>
      </div>
      <span className={`col-start-3 row-start-2 mb-1 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold sm:col-start-4 sm:row-start-1 sm:mb-0 ${toneStyles[step.tone].badge}`}>
        {step.status}
        {step.status === "Completed" ? <Check className="h-3.5 w-3.5" /> : <Clock3 className="h-3.5 w-3.5" />}
      </span>
    </div>
  );
}

export default function CareerRoadmapSection({ theme = "light" }) {
  const { content } = useAdminContent();
  const sectionContent = content.homepageSections.careerRoadmap;
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);
  const panelClass = isLight
    ? "border-slate-200/90 bg-white shadow-[0_18px_48px_-40px_rgba(15,23,42,0.25)]"
    : "border-white/[0.08] bg-[#0c1a2d] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]";

  return (
    <section id="career-roadmap" className={`py-4 md:py-5 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}>
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="flex flex-col gap-4 px-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <SplitGradientHeading theme={theme} className={`text-[26px] font-extrabold leading-tight tracking-[-0.035em] sm:text-[29px] ${isLight ? "text-[#111a3b]" : "text-white"}`} plain={sectionContent.heading} accent={sectionContent.accentHeading} />
            <p className={`mt-2 max-w-[820px] text-[14px] font-medium leading-5 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              {sectionContent.description}
            </p>
          </div>
          <a href={sectionContent.ctaHref} target="_blank" rel="noreferrer" className={`inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-xl border px-5 text-sm font-bold ${isLight ? "border-orange-300 text-orange-600 hover:bg-orange-50" : "border-orange-400/40 text-orange-300 hover:bg-orange-500/10"}`}>
            {sectionContent.ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.25fr_0.9fr]">
          <div className="grid gap-3 xl:grid-rows-[minmax(0,1fr)_auto]">
            <article className={`flex flex-col rounded-[22px] border p-4 ${panelClass}`}>
              <h3 className={`text-lg font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>Your AI Career Roadmap</h3>
              <div className="relative mt-3 flex flex-1 flex-col justify-between gap-1">
                <span className={`pointer-events-none absolute bottom-[18px] left-[17px] top-[18px] w-px sm:left-[18px] ${isLight ? "bg-slate-200" : "bg-white/10"}`} aria-hidden="true" />
                {roadmap.map((step, index) => <RoadmapStep key={step.title} step={step} index={index} isLight={isLight} />)}
              </div>
            </article>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: TrendingUp, value: "82%", label: "Learning Progress", text: "you’re doing great!", tone: "green" },
                { icon: ShieldCheck, value: "5", label: "Certifications", text: "2 completed • 1 in progress", tone: "violet" },
                { icon: FileBarChart, label: "Personalized Reports", text: "Detailed insights to track and improve", tone: "blue" },
              ].map((item) => {
                const Icon = item.icon;
                return <div key={item.label} className={`flex min-h-[104px] items-center gap-3 rounded-2xl border p-3 ${panelClass}`}>
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${toneStyles[item.tone].icon}`}><Icon className="h-5 w-5" /></span>
                  <div className="flex min-h-[68px] flex-col justify-center">{item.value && <p className={`text-xl font-extrabold leading-5 ${isLight ? "text-[#111a3b]" : "text-white"}`}>{item.value}</p>}<p className={`mt-1 text-sm font-bold leading-5 ${isLight ? "text-[#33415f]" : "text-slate-100"}`}>{item.label}</p><p className={`mt-1 text-xs leading-4 ${isLight ? "text-slate-500" : "text-slate-400"}`}>{item.text}</p></div>
                </div>;
              })}
            </div>
          </div>

          <div className="grid gap-3">
            <article className={`rounded-[22px] border p-4 ${panelClass}`}>
              <h3 className={`text-lg font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>Progress Overview</h3>
              <div className="mt-3 grid items-center gap-4 sm:grid-cols-[130px_1fr]">
                <div className="text-center">
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#22c55e_0_82%,rgba(148,163,184,0.18)_82%_100%)]">
                    <div className={`grid h-[84px] w-[84px] place-items-center rounded-full text-2xl font-black ${isLight ? "bg-white text-[#111a3b]" : "bg-[#0c1a2d] text-white"}`}>82%</div>
                  </div>
                  <p className={`mt-3 text-xs font-bold ${isLight ? "text-slate-600" : "text-slate-300"}`}>Overall Progress</p>
                </div>
                <div className="grid gap-2">
                  {[
                    { icon: BriefcaseBusiness, label: "Current Path", value: "AI Engineer Track", tone: "green" },
                    { icon: Target, label: "Upcoming Milestone", value: "Build & Deploy AI Project", tone: "blue" },
                    { icon: TrendingUp, label: "Learning Streak", value: "12 days", tone: "violet" },
                  ].map((item) => { const Icon = item.icon; return <div key={item.label} className="flex items-center gap-3"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${toneStyles[item.tone].icon}`}><Icon className="h-5 w-5" /></span><div><p className={`text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>{item.label}</p><p className={`text-sm font-bold ${isLight ? "text-[#111a3b]" : "text-white"}`}>{item.value}</p></div></div>; })}
                </div>
              </div>
            </article>

            <article className={`rounded-[22px] border p-4 ${panelClass}`}>
              <div className="flex items-center justify-between gap-4"><h3 className={`text-lg font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>Certificates & Assessments</h3><a href="https://www.skool.com/the-agent-lab-3899" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-orange-500">View all <ArrowRight className="h-3.5 w-3.5" /></a></div>
              <div className="mt-3 grid gap-2">
                {certificates.map((certificate) => <div key={certificate.title} className={`flex flex-col gap-2 rounded-xl border p-2.5 sm:flex-row sm:items-center ${isLight ? "border-slate-200 bg-[#fbfcfe]" : "border-white/[0.08] bg-white/[0.025]"}`}>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${toneStyles[certificate.tone].icon}`}><Medal className="h-5 w-5" /></span>
                  <div className="min-w-0 flex-1"><p className={`truncate text-sm font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>{certificate.title}</p><p className={`mt-0.5 text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>DataSense AI Launchpad</p></div>
                  <span className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${toneStyles[certificate.tone].badge}`}>{certificate.status}</span>
                  <span className={`text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>{certificate.meta}</span>
                </div>)}
              </div>
              <div className={`mt-3 flex items-center gap-3 rounded-xl p-2.5 ${isLight ? "bg-slate-50 text-slate-600" : "bg-white/[0.025] text-slate-300"}`}><FileText className="h-5 w-5 text-blue-500" /><span className="text-xs font-semibold">Downloadable certificates and detailed skill reports are included.</span></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
