import {
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Flame,
  FolderKanban,
  Home,
  Menu,
  MessageCircle,
  Rocket,
  Target,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import dsLogo from "../assets/DS Logo.png";

const navigation = [
  { label: "Overview", icon: Home },
  { label: "My Learning", icon: BookOpen },
  { label: "Live Classes", icon: CalendarDays },
  { label: "Projects", icon: FolderKanban },
  { label: "Practice Arena", icon: Target },
  { label: "Community", icon: Users },
  { label: "Achievements", icon: Trophy },
];

const week = [
  { day: "M", value: 32 },
  { day: "T", value: 48 },
  { day: "W", value: 42 },
  { day: "T", value: 62 },
  { day: "F", value: 76 },
  { day: "S", value: 94 },
  { day: "S", value: 58 },
];

function ProgressBar({ value, tone = "emerald" }) {
  const color = tone === "orange" ? "bg-orange-500" : tone === "blue" ? "bg-blue-500" : "bg-emerald-500";
  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10" aria-label={`${value}% complete`}>
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function Panel({ children, className = "" }) {
  return <section className={`rounded-[20px] border border-line/10 bg-panel p-5 text-ink shadow-[0_18px_50px_-42px_rgba(15,23,42,.35)] ${className}`}>{children}</section>;
}

export default function DashboardPage({ theme = "light" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLight = theme === "light";

  return (
    <main className={isLight ? "min-h-screen bg-[#f3f7fd] text-[#111a3b]" : "min-h-screen bg-[#020b18] text-white"}>
      <div className="mx-auto max-w-[1580px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <header className={`flex min-h-16 items-center justify-between rounded-[20px] border px-4 sm:px-5 ${isLight ? "border-slate-200 bg-white" : "border-white/10 bg-[#081526]"}`}>
          <div className="flex min-w-0 items-center gap-3">
            <img src={dsLogo} alt="DataSense" className="h-10 w-10 object-contain" />
            <div className="min-w-0">
              <p className="truncate text-sm font-black">DataSense AI Launchpad</p>
              <p className={`text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>Learning dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className={`relative grid h-11 w-11 place-items-center rounded-xl ${isLight ? "bg-slate-50 text-slate-600" : "bg-white/5 text-slate-300"}`} aria-label="Notifications">
              <Bell className="h-5 w-5" /><span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-orange-500" />
            </button>
            <button type="button" onClick={() => setMenuOpen((value) => !value)} className={`grid h-11 w-11 place-items-center rounded-xl lg:hidden ${isLight ? "bg-slate-50 text-slate-700" : "bg-white/5 text-white"}`} aria-label="Toggle dashboard navigation" aria-expanded={menuOpen}>
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        <div className="mt-5 grid gap-5 lg:grid-cols-[230px_minmax(0,1fr)]">
          <aside className={`${menuOpen ? "block" : "hidden"} rounded-[20px] border p-3 lg:block ${isLight ? "border-slate-200 bg-white" : "border-white/10 bg-[#081526]"}`}>
            <nav className="grid gap-1.5" aria-label="Dashboard navigation">
              {navigation.map(({ label, icon: Icon }, index) => (
                <button key={label} type="button" className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-left text-sm font-bold ${index === 0 ? "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300" : isLight ? "text-slate-600 hover:bg-slate-50" : "text-slate-300 hover:bg-white/5"}`}>
                  <Icon className="h-[18px] w-[18px]" />{label}
                </button>
              ))}
            </nav>
            <div className={`mt-5 rounded-2xl p-4 ${isLight ? "bg-orange-50" : "bg-orange-500/10"}`}>
              <Award className="h-6 w-6 text-orange-500" />
              <p className="mt-3 text-sm font-black">Keep building</p>
              <p className={`mt-1 text-xs leading-5 ${isLight ? "text-orange-800/70" : "text-orange-200/70"}`}>One more lesson keeps your weekly streak alive.</p>
            </div>
            <Link to="/" className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 dark:border-white/10 dark:text-slate-300">Back to site</Link>
          </aside>

          <div className="min-w-0">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="text-sm font-bold text-orange-500">Welcome back, builder</p><h1 className="mt-1 text-[28px] font-black tracking-[-0.04em] sm:text-[34px]">Your learning command center</h1></div>
              <p className={`text-sm ${isLight ? "text-slate-500" : "text-slate-400"}`}>Saturday, 1 August</p>
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.4fr_.9fr]">
              <section className="relative isolate min-h-[280px] overflow-hidden rounded-[22px] bg-[#081d50] p-6 text-white sm:p-7">
                <div className="relative z-10 max-w-[520px]">
                  <p className="text-sm font-bold text-blue-200">Your AI learning journey</p>
                  <p className="mt-5 text-xs text-blue-200/80">Current path</p>
                  <h2 className="mt-1 text-2xl font-black">AI Engineer</h2>
                  <div className="mt-6 flex items-center gap-4"><div className="min-w-0 flex-1"><ProgressBar value={68} /></div><span className="text-sm font-black">68%</span></div>
                  <div className="mt-6"><p className="text-xs text-blue-200/80">Next milestone</p><p className="mt-1 text-sm font-bold">Build and deploy an AI web application</p></div>
                </div>
                <div className="absolute bottom-5 right-5 grid h-28 w-28 place-items-center rounded-full bg-blue-400/10 ring-1 ring-white/10 sm:h-36 sm:w-36"><Rocket className="h-16 w-16 rotate-12 text-orange-300 sm:h-20 sm:w-20" /></div>
              </section>

              <Panel>
                <div className="flex items-center justify-between"><h2 className="font-black">Upcoming live class</h2><a href="#live-experts" className="text-xs font-bold text-blue-600">View all</a></div>
                <div className="mt-5 flex gap-4"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600"><CalendarDays className="h-6 w-6" /></span><div><h3 className="font-extrabold leading-6">Building RAG Systems From Scratch</h3><p className={`mt-1 text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>Sunday · 8:00 PM IST</p></div></div>
                <div className="mt-6 flex items-center justify-between"><div className="flex -space-x-2">{["AN", "RS", "MK"].map((name) => <span key={name} className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-orange-100 text-[9px] font-black text-orange-700 dark:border-[#0b1729]">{name}</span>)}</div><span className={`text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>+120 attending</span></div>
                <a href="https://www.skool.com/the-agent-lab-3899" target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-bold text-white">Join live class <ArrowRight className="h-4 w-4" /></a>
              </Panel>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <Panel>
                <div className="flex items-center justify-between"><h2 className="font-black">Continue learning</h2><span className="text-xs font-bold text-emerald-600">12 / 18 lessons</span></div>
                <div className="mt-5 flex items-start gap-4"><span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-violet-50 text-violet-600"><BookOpen className="h-7 w-7" /></span><div className="min-w-0 flex-1"><h3 className="font-extrabold">Agent Builder</h3><p className={`mt-1 text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>Build agents that can think, plan and act.</p><div className="mt-4"><ProgressBar value={65} /></div></div></div>
                <button type="button" className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-slate-200 text-sm font-bold text-blue-700 dark:border-white/10 dark:text-blue-300">Continue course</button>
              </Panel>

              <Panel>
                <div className="flex items-center justify-between"><h2 className="font-black">Active project</h2><span className="text-xs font-bold text-blue-600">Milestone 3/5</span></div>
                <div className="mt-5 flex gap-4"><span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600"><FolderKanban className="h-7 w-7" /></span><div><h3 className="font-extrabold">Build a RAG Assistant</h3><p className={`mt-1 text-xs leading-5 ${isLight ? "text-slate-500" : "text-slate-400"}`}>Create a production-ready assistant using your own data.</p></div></div>
                <div className="mt-5"><ProgressBar value={72} /><div className={`mt-3 flex justify-between text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}><span>72% complete</span><span>Due in 5 days</span></div></div>
              </Panel>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <Panel><div className="flex items-center gap-3"><Flame className="h-6 w-6 text-orange-500" /><div><p className="text-xs font-bold text-orange-500">Practice streak</p><p className="text-xl font-black">5 days</p></div></div><div className="mt-5 flex h-20 items-end justify-between gap-2">{week.map((item, index) => <div key={`${item.day}-${index}`} className="flex flex-1 flex-col items-center gap-2"><span className="w-full rounded-t bg-emerald-400" style={{ height: `${item.value}%` }} /><span className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>{item.day}</span></div>)}</div></Panel>
              <Panel><MessageCircle className="h-6 w-6 text-blue-500" /><h2 className="mt-3 font-black">Community activity</h2><p className={`mt-3 text-sm ${isLight ? "text-slate-600" : "text-slate-300"}`}>32 new discussions</p><p className={`mt-1 text-sm ${isLight ? "text-slate-600" : "text-slate-300"}`}>18 projects shared this week</p><div className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-blue-600"><Users className="h-4 w-4" /> Join the conversation</div></Panel>
              <Panel><CheckCircle2 className="h-6 w-6 text-orange-500" /><h2 className="mt-3 font-black">Recent achievement</h2><p className="mt-3 text-sm font-extrabold">Prompt Engineering Professional</p><p className={`mt-2 text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>Completed this week</p></Panel>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
