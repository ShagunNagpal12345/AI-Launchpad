import {
  ArrowRight,
  Bot,
  FileCheck2,
  GraduationCap,
  Image,
  MessageCircleMore,
  Network,
  PanelsTopLeft,
  PenTool,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import SplitGradientHeading from "./SplitGradientHeading";
import { useAdminContent } from "../content/AdminContentContext";

const tools = [
  { icon: MessageCircleMore, title: "Prompt Lab", text: "Craft, test, and optimize prompts for any use case.", tone: "violet" },
  { icon: Image, title: "Image Generator", text: "Create polished images from text in seconds.", tone: "green" },
  { icon: PenTool, title: "Icon Generator", text: "Design useful icons for your projects.", tone: "orange" },
  { icon: PanelsTopLeft, title: "Website Builder", text: "Build responsive websites with AI in minutes.", tone: "blue" },
  { icon: Bot, title: "AI Chat Playground", text: "Chat with AI models and explore new ideas.", tone: "violet" },
  { icon: Network, title: "Workflow Creator", text: "Automate tasks with AI workflows and templates.", tone: "green" },
];

const toneStyles = {
  violet: "bg-violet-500/10 text-violet-500",
  green: "bg-emerald-500/10 text-emerald-500",
  orange: "bg-orange-500/10 text-orange-500",
  blue: "bg-blue-500/10 text-blue-500",
};

const toolkitItems = ["Prompt Lab", "Image Studio", "Icon Maker", "Website Generator", "Chat Playground"];

function ToolCard({ tool, isLight }) {
  const Icon = tool.icon;
  return (
    <article className={`flex min-h-[174px] flex-col rounded-[18px] border p-4 ${isLight ? "border-slate-200/90 bg-white shadow-[0_18px_48px_-40px_rgba(15,23,42,0.25)]" : "border-white/[0.08] bg-[#0c1a2d] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"}`}>
      <div className="flex items-start gap-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${toneStyles[tool.tone]}`}><Icon className="h-6 w-6" aria-hidden="true" /></span>
        <div><h3 className={`text-sm font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>{tool.title}</h3><p className={`mt-1 text-xs leading-5 ${isLight ? "text-slate-600" : "text-slate-400"}`}>{tool.text}</p></div>
      </div>
      <a href="https://www.skool.com/the-agent-lab-3899" target="_blank" rel="noreferrer" className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 text-xs font-extrabold text-orange-500 hover:text-orange-600">
        Try now <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </article>
  );
}

function ToolkitPreview({ isLight }) {
  return (
    <div className={`relative min-h-[270px] overflow-hidden rounded-2xl border p-4 ${isLight ? "border-slate-200 bg-[#fbfcfe]" : "border-white/[0.08] bg-[#07111f]"}`} aria-label="AI Toolkit dashboard preview">
      <div className={`flex items-center justify-between border-b pb-3 text-xs font-extrabold ${isLight ? "border-slate-200 text-[#111a3b]" : "border-white/10 text-white"}`}><span>DataSense <span className="text-blue-500">AI Toolkit</span></span><span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-[10px] text-white">S</span></div>
      <div className="mt-3 grid grid-cols-[86px_1fr] gap-3">
        <div className="grid content-start gap-2">
          {["Dashboard", "All Tools", "Creations", "Templates", "Settings"].map((item, index) => <span key={item} className={`rounded-md px-2 py-1.5 text-[9px] font-semibold ${index === 0 ? toneStyles.violet : isLight ? "text-slate-500" : "text-slate-400"}`}>{item}</span>)}
        </div>
        <div>
          <h4 className={`text-sm font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>Welcome back, Builder!</h4>
          <p className={`mt-1 text-[9px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>What will you build today?</p>
          <div className={`mt-3 rounded-lg border px-3 py-2 text-[9px] ${isLight ? "border-slate-200 bg-white text-slate-400" : "border-white/10 bg-white/[0.03] text-slate-500"}`}>Search tools or type a command…</div>
          <p className={`mt-4 text-[10px] font-bold ${isLight ? "text-[#33415f]" : "text-slate-200"}`}>Quick Access</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {tools.slice(0, 3).map((tool) => { const Icon = tool.icon; return <div key={tool.title} className={`grid min-h-[64px] place-items-center rounded-lg p-2 text-center ${toneStyles[tool.tone]}`}><Icon className="h-4 w-4" /><span className="text-[8px] font-bold">{tool.title}</span></div>; })}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2"><span className={`h-8 rounded-lg ${isLight ? "bg-slate-100" : "bg-white/[0.04]"}`} /><span className={`h-8 rounded-lg ${isLight ? "bg-slate-100" : "bg-white/[0.04]"}`} /></div>
        </div>
      </div>
    </div>
  );
}

export default function AiInteractiveToolsSection({ theme = "light" }) {
  const { content } = useAdminContent();
  const sectionContent = content.homepageSections.aiTools;
  const isLight = ["light", "day", "white"].includes(String(theme).toLowerCase());
  const panelClass = isLight ? "border-slate-200/90 bg-white shadow-[0_18px_48px_-40px_rgba(15,23,42,0.25)]" : "border-white/[0.08] bg-[#0c1a2d] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]";

  return (
    <section id="ai-interactive-tools" className={`py-4 md:py-5 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}>
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="flex flex-col gap-4 px-1 sm:flex-row sm:items-start sm:justify-between">
          <div><SplitGradientHeading theme={theme} className={`text-[26px] font-extrabold leading-tight tracking-[-0.035em] sm:text-[29px] ${isLight ? "text-[#111a3b]" : "text-white"}`} plain={sectionContent.heading} accent={sectionContent.accentHeading} /><p className={`mt-2 max-w-[760px] text-[14px] font-medium leading-5 ${isLight ? "text-slate-600" : "text-slate-300"}`}>{sectionContent.description}</p></div>
          <a href={sectionContent.ctaHref} target="_blank" rel="noreferrer" className={`inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-xl border px-5 text-sm font-bold ${isLight ? "border-orange-300 text-orange-600 hover:bg-orange-50" : "border-orange-400/40 text-orange-300 hover:bg-orange-500/10"}`}>{sectionContent.ctaLabel} <ArrowRight className="h-4 w-4" /></a>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.02fr_1fr]">
          <article className={`grid gap-5 rounded-[22px] border p-4 md:grid-cols-[0.78fr_1.22fr] ${panelClass}`}>
            <div className="flex flex-col">
              <span className="inline-flex w-fit items-center gap-2 rounded-lg bg-violet-500/10 px-3 py-1.5 text-xs font-bold text-violet-500"><Star className="h-4 w-4 fill-current" /> Featured</span>
              <h3 className={`mt-4 text-2xl font-extrabold tracking-[-0.03em] ${isLight ? "text-[#111a3b]" : "text-white"}`}>AI Builder Toolkit</h3>
              <p className={`mt-3 text-sm leading-6 ${isLight ? "text-slate-600" : "text-slate-300"}`}>Create, experiment, and ship with powerful AI utilities in one focused workspace.</p>
              <div className="mt-4 flex flex-wrap gap-2">{toolkitItems.map((item) => <span key={item} className={`rounded-lg border px-2.5 py-1.5 text-[11px] font-bold ${isLight ? "border-slate-200 bg-white text-[#33415f]" : "border-white/10 bg-white/[0.04] text-slate-300"}`}>{item}</span>)}</div>
              <a href="https://www.skool.com/the-agent-lab-3899" target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-[10px] bg-[#f97316] px-5 text-sm font-bold text-white shadow-[0_12px_26px_-17px_rgba(249,115,22,0.7)] hover:bg-[#ea6b12]">Open Toolkit <ArrowRight className="h-4 w-4" /></a>
            </div>
            <ToolkitPreview isLight={isLight} />
          </article>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => <ToolCard key={tool.title} tool={tool} isLight={isLight} />)}
          </div>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {[
            { icon: Wrench, value: "50+", label: "Hands-On Utilities", text: "From content generation to automation tools.", tone: "violet" },
            { icon: GraduationCap, label: "Built for Learning", text: "Guidance, templates, and examples to help you learn by doing.", tone: "green" },
            { icon: FileCheck2, label: "Real-World Output", text: "Export, share, and use your creations in real projects.", tone: "orange" },
          ].map((item) => { const Icon = item.icon; return <div key={item.label} className={`flex min-h-[94px] items-center gap-4 rounded-2xl border p-4 ${panelClass}`}><span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${toneStyles[item.tone]}`}><Icon className="h-6 w-6" /></span><div>{item.value && <p className={`text-xl font-extrabold ${isLight ? "text-[#111a3b]" : "text-white"}`}>{item.value}</p>}<p className={`text-sm font-bold ${isLight ? "text-[#33415f]" : "text-slate-100"}`}>{item.label}</p><p className={`mt-1 text-xs leading-5 ${isLight ? "text-slate-500" : "text-slate-400"}`}>{item.text}</p></div></div>; })}
        </div>
      </div>
    </section>
  );
}
