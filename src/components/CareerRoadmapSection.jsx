import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Box,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Download,
  ExternalLink,
  FileBarChart,
  FileText,
  Images,
  Medal,
  ShieldCheck,
  Target,
  TrendingUp,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import SplitGradientHeading from "./SplitGradientHeading";
import { useAdminContent } from "../content/AdminContentContext";
import { useEffect, useRef, useState } from "react";
import evaluationReport from "../assets/Assignments/Evaluation_Report.pdf";

const classImages = Object.values(
  import.meta.glob("../assets/Assignments/Class/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }),
);

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

function ClassGallery({ isLight, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [zoom, setZoom] = useState(1);

  const move = (direction) => {
    setActiveIndex((current) => (current + direction + classImages.length) % classImages.length);
    setZoom(1);
  };

  const selectImage = (index) => {
    setActiveIndex(index);
    setZoom(1);
  };

  useEffect(() => {
    if (isPaused || classImages.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => move(1), 4000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      aria-label="Classes in action"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      className={`mt-6 overflow-hidden rounded-[22px] border px-3 py-5 sm:px-6 ${isLight ? "border-slate-200 bg-white" : "border-white/10 bg-[#081526]"}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-500">Learning experience</p>
          <h2 className={`mt-1 text-xl font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>Classes in Action</h2>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setZoom((current) => Math.max(1, current - 0.2))} disabled={zoom <= 1} aria-label="Reduce class image size" className={`grid h-11 w-11 place-items-center rounded-xl border disabled:cursor-not-allowed disabled:opacity-35 ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-300"}`}><ZoomOut className="h-5 w-5" /></button>
          <button type="button" onClick={() => setZoom((current) => Math.min(1.6, current + 0.2))} disabled={zoom >= 1.6} aria-label="Increase class image size" className={`grid h-11 w-11 place-items-center rounded-xl border disabled:cursor-not-allowed disabled:opacity-35 ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-300"}`}><ZoomIn className="h-5 w-5" /></button>
          <button type="button" onClick={() => setZoom(1)} aria-label="Reset class image size" className={`hidden min-h-11 rounded-xl border px-3 text-xs font-extrabold sm:inline-flex sm:items-center ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-300"}`}>{Math.round(zoom * 100)}%</button>
          <button type="button" onClick={onClose} aria-label="Close class gallery" className={`grid h-11 w-11 place-items-center rounded-xl border ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-300"}`}><X className="h-5 w-5" /></button>
        </div>
      </div>

      <div className="relative mt-4 h-[250px] overflow-hidden sm:h-[340px] lg:h-[400px] [perspective:1200px]">
        {classImages.map((image, index) => {
          let offset = index - activeIndex;
          if (offset > classImages.length / 2) offset -= classImages.length;
          if (offset < -classImages.length / 2) offset += classImages.length;
          const distance = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <button
              type="button"
              key={image}
              onClick={() => (isActive ? setZoom((current) => current === 1 ? 1.4 : 1) : selectImage(index))}
              aria-label={`View class image ${index + 1}`}
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
              <img src={image} alt={`DataSense class example ${index + 1}`} className={`block max-h-[370px] w-full rounded-xl border object-contain shadow-[0_28px_60px_-30px_rgba(15,23,42,0.55)] ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-[#020b18]"}`} />
            </button>
          );
        })}

        <button type="button" onClick={() => move(-1)} aria-label="Previous class image" className={`absolute left-1 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border shadow-lg sm:left-4 ${isLight ? "border-slate-200 bg-white text-[#111a3b]" : "border-white/10 bg-[#0c1a2d] text-white"}`}><ChevronLeft className="h-6 w-6" /></button>
        <button type="button" onClick={() => move(1)} aria-label="Next class image" className={`absolute right-1 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border shadow-lg sm:right-4 ${isLight ? "border-slate-200 bg-white text-[#111a3b]" : "border-white/10 bg-[#0c1a2d] text-white"}`}><ChevronRight className="h-6 w-6" /></button>
      </div>

      <div className="mt-3 flex justify-center gap-2" aria-label="Choose class image">
        {classImages.map((image, index) => (
          <button key={image} type="button" onClick={() => selectImage(index)} aria-label={`Show class image ${index + 1}`} className={`h-2.5 rounded-full transition-[width,background-color] ${index === activeIndex ? "w-7 bg-orange-500" : isLight ? "w-2.5 bg-slate-300" : "w-2.5 bg-slate-600"}`} />
        ))}
      </div>

      {zoom > 1 && (
        <div role="dialog" aria-modal="true" aria-label={`Enlarged class image ${activeIndex + 1}`} className="fixed inset-0 z-[100] flex flex-col bg-[#020813]/95 p-3 sm:p-5">
          <div className="flex shrink-0 items-center justify-between gap-3 rounded-2xl bg-[#0c1a2d] p-2.5 text-white ring-1 ring-white/10 sm:px-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-orange-400">Class image {activeIndex + 1} of {classImages.length}</p>
              <p className="mt-1 hidden text-xs text-slate-400 sm:block">Scroll to explore the complete image while enlarged.</p>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setZoom((current) => Math.max(1, current - 0.2))} aria-label="Zoom out enlarged class image" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white"><ZoomOut className="h-5 w-5" /></button>
              <span className="hidden min-w-16 text-center text-sm font-extrabold sm:block">{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={() => setZoom((current) => Math.min(1.6, current + 0.2))} disabled={zoom >= 1.6} aria-label="Zoom in enlarged class image" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white disabled:opacity-35"><ZoomIn className="h-5 w-5" /></button>
              <button type="button" onClick={() => setZoom(1)} aria-label="Close enlarged class image" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white"><X className="h-5 w-5" /></button>
            </div>
          </div>
          <div className="mt-3 flex min-h-0 flex-1 items-start justify-center overflow-auto rounded-2xl bg-[#050b16] p-3 sm:p-5">
            <img src={classImages[activeIndex]} alt={`Full DataSense class example ${activeIndex + 1}`} className="block h-auto rounded-xl bg-white object-contain shadow-2xl" style={zoom <= 1.2 ? { maxHeight: "calc(100vh - 130px)", maxWidth: "92vw", width: "auto" } : { width: `${Math.round(zoom * 70)}vw`, maxWidth: "none" }} />
          </div>
        </div>
      )}
    </section>
  );
}

export default function CareerRoadmapSection({ theme = "light" }) {
  const { content } = useAdminContent();
  const sectionContent = content.homepageSections.careerRoadmap;
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);
  const [isClassGalleryOpen, setIsClassGalleryOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const galleryRef = useRef(null);
  const reportRef = useRef(null);
  const panelClass = isLight
    ? "border-slate-200/90 bg-white shadow-[0_18px_48px_-40px_rgba(15,23,42,0.25)]"
    : "border-white/[0.08] bg-[#0c1a2d] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]";

  useEffect(() => {
    if (!isClassGalleryOpen) return;
    window.requestAnimationFrame(() => galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  }, [isClassGalleryOpen]);

  useEffect(() => {
    if (!isReportOpen) return;
    window.requestAnimationFrame(() => reportRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  }, [isReportOpen]);

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
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button type="button" onClick={() => { setIsClassGalleryOpen((current) => !current); setIsReportOpen(false); }} aria-expanded={isClassGalleryOpen} aria-controls="class-image-gallery" className={`inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl border px-5 text-sm font-bold sm:w-fit ${isLight ? "border-orange-300 text-orange-600 hover:bg-orange-50" : "border-orange-400/40 text-orange-300 hover:bg-orange-500/10"}`}>
              View Classes in Action <Images className="h-4 w-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => { setIsReportOpen((current) => !current); setIsClassGalleryOpen(false); }} aria-expanded={isReportOpen} aria-controls="inline-evaluation-report" className={`inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl border px-5 text-sm font-bold sm:w-fit ${isLight ? "border-orange-300 text-orange-600 hover:bg-orange-50" : "border-orange-400/40 text-orange-300 hover:bg-orange-500/10"}`}>
              View Evaluation Report <FileText className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {isClassGalleryOpen && <div id="class-image-gallery" ref={galleryRef}><ClassGallery isLight={isLight} onClose={() => setIsClassGalleryOpen(false)} /></div>}

        {isReportOpen && (
          <section id="inline-evaluation-report" ref={reportRef} aria-label="Evaluation report" className={`mt-6 overflow-hidden rounded-[22px] border ${isLight ? "border-slate-200 bg-white" : "border-white/10 bg-[#081526]"}`}>
            <div className={`flex flex-col gap-4 border-b p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 ${isLight ? "border-slate-200" : "border-white/10"}`}>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-500">Personalized assessment</p>
                <h3 className={`mt-1 text-xl font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>Evaluation Report</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={evaluationReport} target="_blank" rel="noreferrer" className={`inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 text-sm font-bold ${isLight ? "border-slate-200 text-[#0b2d61]" : "border-white/10 text-white"}`}>Open PDF <ExternalLink className="h-4 w-4" /></a>
                <a href={evaluationReport} download="DataSense_Evaluation_Report.pdf" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-orange-500 px-4 text-sm font-bold text-white">Download <Download className="h-4 w-4" /></a>
                <button type="button" onClick={() => setIsReportOpen(false)} aria-label="Close evaluation report" className={`grid h-11 w-11 place-items-center rounded-xl border ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-300"}`}><X className="h-5 w-5" /></button>
              </div>
            </div>
            <object data={evaluationReport} type="application/pdf" aria-label="DataSense Evaluation Report" className="h-[72vh] min-h-[560px] w-full">
              <div className="grid min-h-[560px] place-items-center px-6 py-16 text-center">
                <div>
                  <FileText className="mx-auto h-12 w-12 text-orange-500" />
                  <h4 className={`mt-4 text-lg font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>PDF preview is unavailable in this browser</h4>
                  <a href={evaluationReport} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-orange-500 px-5 text-sm font-bold text-white">Open PDF <ExternalLink className="h-4 w-4" /></a>
                </div>
              </div>
            </object>
          </section>
        )}

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
