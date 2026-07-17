import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bot,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Copy,
  Download,
  FileText,
  Lightbulb,
  Lock,
  MessageSquareText,
  MonitorPlay,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import dsLogoVideo from "../assets/DS Logo.mp4";
import samplePdf from "../assets/Learning Material/sample.pdf";

const courseModules = [
  {
    id: 1,
    title: "Getting Started with ChatGPT",
    duration: "22 min",
    lessons: [
      {
        id: "1-1",
        title: "What is ChatGPT?",
        duration: "6 min",
        completed: true,
      },
      {
        id: "1-2",
        title: "How ChatGPT generates answers",
        duration: "8 min",
        completed: true,
      },
      {
        id: "1-3",
        title: "Setting up your workspace",
        duration: "8 min",
        completed: true,
      },
    ],
  },
  {
    id: 2,
    title: "Writing Better Prompts",
    duration: "38 min",
    lessons: [
      {
        id: "2-1",
        title: "Anatomy of a strong prompt",
        duration: "10 min",
        completed: true,
      },
      {
        id: "2-2",
        title: "Role, context, task and format",
        duration: "12 min",
        completed: false,
      },
      {
        id: "2-3",
        title: "Few-shot prompting",
        duration: "8 min",
        completed: false,
      },
      {
        id: "2-4",
        title: "Improving weak prompts",
        duration: "8 min",
        completed: false,
      },
    ],
  },
  {
    id: 3,
    title: "ChatGPT for Everyday Work",
    duration: "46 min",
    lessons: [
      {
        id: "3-1",
        title: "Writing and rewriting",
        duration: "10 min",
        completed: false,
      },
      {
        id: "3-2",
        title: "Summarising documents",
        duration: "12 min",
        completed: false,
      },
      {
        id: "3-3",
        title: "Research and idea generation",
        duration: "12 min",
        completed: false,
      },
      {
        id: "3-4",
        title: "Planning and productivity",
        duration: "12 min",
        completed: false,
      },
    ],
  },
  {
    id: 4,
    title: "Using ChatGPT Responsibly",
    duration: "30 min",
    lessons: [
      {
        id: "4-1",
        title: "Hallucinations and verification",
        duration: "10 min",
        completed: false,
      },
      {
        id: "4-2",
        title: "Privacy and sensitive information",
        duration: "10 min",
        completed: false,
      },
      {
        id: "4-3",
        title: "Bias and responsible AI",
        duration: "10 min",
        completed: false,
      },
    ],
  },
  {
    id: 5,
    title: "Build Your Personal AI Workflow",
    duration: "42 min",
    lessons: [
      {
        id: "5-1",
        title: "Create reusable prompt templates",
        duration: "12 min",
        completed: false,
      },
      {
        id: "5-2",
        title: "Design a personal AI assistant",
        duration: "15 min",
        completed: false,
      },
      {
        id: "5-3",
        title: "Final practical assignment",
        duration: "15 min",
        completed: false,
      },
    ],
  },
];

const learningOutcomes = [
  "Understand what ChatGPT can and cannot do",
  "Write clear, structured prompts that produce useful answers",
  "Use ChatGPT for writing, learning, research and productivity",
  "Identify hallucinations and verify important information",
  "Build reusable prompt templates for everyday work",
  "Create a personal AI workflow that saves time",
];

const lessonSections = [
  {
    title: "What is ChatGPT?",
    icon: Bot,
    content:
      "ChatGPT is a conversational AI system that can understand instructions and generate text-based responses. It can help you explain concepts, draft content, analyse information, brainstorm ideas, organise work and solve many language-based tasks.",
  },
  {
    title: "What ChatGPT is good at",
    icon: Sparkles,
    bullets: [
      "Explaining difficult ideas in simpler language",
      "Drafting emails, articles, notes and presentations",
      "Rewriting content for a different tone or audience",
      "Generating ideas, outlines and structured plans",
      "Summarising text that you provide",
      "Helping you learn through questions and examples",
    ],
  },
  {
    title: "What ChatGPT is not",
    icon: ShieldCheck,
    bullets: [
      "It is not automatically correct",
      "It does not replace professional judgement",
      "It may invent facts, links, names or statistics",
      "It should not receive confidential information without approval",
      "It cannot understand your full context unless you provide it",
    ],
  },
];

const promptFramework = [
  {
    name: "Role",
    description: "Tell ChatGPT who it should act as.",
    example: "Act as an experienced career coach.",
  },
  {
    name: "Context",
    description: "Provide the background information it needs.",
    example:
      "I am a data analyst with three years of experience applying for a senior role.",
  },
  {
    name: "Task",
    description: "Clearly state what you want it to do.",
    example: "Rewrite my professional summary.",
  },
  {
    name: "Constraints",
    description: "Set boundaries such as length, tone or exclusions.",
    example: "Keep it below 80 words and avoid generic buzzwords.",
  },
  {
    name: "Format",
    description: "Describe how the final answer should be presented.",
    example: "Return one final paragraph followed by three alternatives.",
  },
];

const exercises = [
  {
    title: "Improve a weak prompt",
    difficulty: "Beginner",
    task: 'Improve this prompt: "Write an email."',
    hint: "Add the recipient, purpose, tone, context and required length.",
  },
  {
    title: "Create a reusable template",
    difficulty: "Beginner",
    task: "Create a prompt template for summarising meeting notes.",
    hint: "Include decisions, actions, owners, deadlines and unresolved questions.",
  },
  {
    title: "Build a personal assistant prompt",
    difficulty: "Intermediate",
    task: "Design a prompt that helps plan your workday based on priorities and available time.",
    hint: "Ask for tasks, deadlines, estimated effort and calendar constraints.",
  },
];

const promptExample = `Act as an experienced learning coach.

Context:
I am completely new to generative AI and have 30 minutes per day to learn.

Task:
Create a 14-day beginner learning plan for understanding and using ChatGPT.

Requirements:
- Keep each day practical
- Include one concept and one exercise per day
- Avoid technical jargon
- Include a small final project

Format:
Return the answer as a table with Day, Concept, Exercise and Outcome.`;

function ThemeClasses(theme) {
  const value = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(value);

  return {
    isLight,
    page: isLight ? "bg-[#f6f8fc]" : "bg-[#020b18]",
    panel: isLight
      ? "border-slate-200 bg-white"
      : "border-white/[0.08] bg-[#0b182b]",
    panelSoft: isLight
      ? "border-slate-200 bg-[#f8fafc]"
      : "border-white/[0.07] bg-white/[0.03]",
    text: isLight ? "text-[#111a3b]" : "text-white",
    muted: isLight ? "text-slate-600" : "text-slate-400",
    subtle: isLight ? "text-slate-500" : "text-slate-500",
  };
}

function CourseSidebar({
  theme,
  selectedLesson,
  setSelectedLesson,
  openModules,
  setOpenModules,
}) {
  const styles = ThemeClasses(theme);

  return (
    <aside
      className={`
        overflow-hidden rounded-[22px] border
        ${styles.panel}
        lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)]
      `}
    >
      <div className="border-b border-slate-200/70 p-5 dark:border-white/[0.07]">
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.16em] ${styles.subtle}`}>
              Course curriculum
            </p>
            <h2 className={`mt-2 text-lg font-extrabold ${styles.text}`}>
              5 modules · 17 lessons
            </h2>
          </div>

          <BookOpen className="h-5 w-5 text-blue-500" />
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className={styles.muted}>Course progress</span>
            <span className="text-blue-600">24%</span>
          </div>

          <div
            className={`mt-2 h-2 overflow-hidden rounded-full ${
              styles.isLight ? "bg-slate-100" : "bg-white/[0.06]"
            }`}
          >
            <div className="h-full w-[24%] rounded-full bg-blue-500" />
          </div>
        </div>
      </div>

      <div className="overflow-y-auto">
        {courseModules.map((module) => {
          const open = openModules.includes(module.id);

          return (
            <div
              key={module.id}
              className="border-b border-slate-200/70 last:border-0 dark:border-white/[0.07]"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenModules((current) =>
                    current.includes(module.id)
                      ? current.filter((id) => id !== module.id)
                      : [...current, module.id],
                  )
                }
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
              >
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-500">
                    Module {module.id}
                  </p>
                  <h3 className={`mt-1 text-sm font-bold ${styles.text}`}>
                    {module.title}
                  </h3>
                  <p className={`mt-1 text-xs ${styles.subtle}`}>
                    {module.lessons.length} lessons · {module.duration}
                  </p>
                </div>

                <ChevronDown
                  className={`mt-1 h-4 w-4 shrink-0 transition ${
                    open ? "rotate-180" : ""
                  } ${styles.subtle}`}
                />
              </button>

              {open && (
                <div className="px-3 pb-3">
                  {module.lessons.map((lesson) => {
                    const selected = selectedLesson === lesson.id;

                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        onClick={() => setSelectedLesson(lesson.id)}
                        className={`
                          flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left
                          transition
                          ${
                            selected
                              ? styles.isLight
                                ? "bg-blue-50"
                                : "bg-blue-500/10"
                              : styles.isLight
                                ? "hover:bg-slate-50"
                                : "hover:bg-white/[0.03]"
                          }
                        `}
                      >
                        <span
                          className={`
                            grid h-7 w-7 shrink-0 place-items-center rounded-full
                            ${
                              lesson.completed
                                ? "bg-emerald-500 text-white"
                                : selected
                                  ? "bg-blue-500 text-white"
                                  : styles.isLight
                                    ? "bg-slate-100 text-slate-500"
                                    : "bg-white/[0.06] text-slate-400"
                            }
                          `}
                        >
                          {lesson.completed ? (
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          ) : selected ? (
                            <Play className="ml-0.5 h-3 w-3" fill="currentColor" />
                          ) : (
                            <Lock className="h-3 w-3" />
                          )}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span
                            className={`block truncate text-xs font-semibold ${
                              selected ? "text-blue-600" : styles.text
                            }`}
                          >
                            {lesson.title}
                          </span>
                          <span className={`mt-1 block text-[11px] ${styles.subtle}`}>
                            {lesson.duration}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function InfoPill({ icon: Icon, label, value, theme }) {
  const styles = ThemeClasses(theme);

  return (
    <div className="flex items-center gap-3">
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl ${
          styles.isLight ? "bg-blue-50 text-blue-600" : "bg-blue-500/10 text-blue-400"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>

      <div>
        <p className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${styles.subtle}`}>
          {label}
        </p>
        <p className={`mt-0.5 text-sm font-bold ${styles.text}`}>{value}</p>
      </div>
    </div>
  );
}

export default function ChatGPTForEveryonePage({ theme = "light" }) {
  const styles = ThemeClasses(theme);
  const [selectedLesson, setSelectedLesson] = useState("1-1");
  const [openModules, setOpenModules] = useState([1, 2]);
  const [copied, setCopied] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const totalLessons = useMemo(
    () => courseModules.reduce((total, module) => total + module.lessons.length, 0),
    [],
  );

  const completedLessons = useMemo(
    () =>
      courseModules.reduce(
        (total, module) =>
          total + module.lessons.filter((lesson) => lesson.completed).length,
        0,
      ),
    [],
  );

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(promptExample);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className={`min-h-screen ${styles.page}`}>
      <section className="border-b border-slate-200/70 dark:border-white/[0.07]">
        <div className="mx-auto max-w-[1500px] px-5 py-5 lg:px-8">
          <a
            href="/"
            className={`inline-flex items-center gap-2 text-sm font-semibold ${styles.muted}`}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to learning materials
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8">
        <div
          className={`
            overflow-hidden rounded-[28px] border
            ${styles.panel}
          `}
        >
          <div className="grid lg:grid-cols-[1.3fr_.7fr]">
            <div className="p-7 sm:p-9 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
                  Beginner friendly
                </span>
                <span
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    styles.isLight
                      ? "border-slate-200 text-slate-600"
                      : "border-white/[0.08] text-slate-300"
                  }`}
                >
                  Free course
                </span>
              </div>

              <h1
                className={`mt-6 max-w-4xl text-[40px] font-black leading-[1.02] tracking-[-0.055em] sm:text-[54px] ${styles.text}`}
              >
                ChatGPT for Everyone
              </h1>

              <p className={`mt-5 max-w-3xl text-lg leading-8 ${styles.muted}`}>
                Learn how to use ChatGPT confidently for work, learning,
                creativity and everyday productivity—without needing a technical
                background.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#course-content"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_15px_30px_-15px_rgba(37,99,235,0.75)] transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  <Play className="h-4 w-4" fill="currentColor" />
                  Continue learning
                </a>

                <a
                  href={samplePdf}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    inline-flex items-center gap-2 rounded-xl border px-6 py-3.5
                    text-sm font-bold transition hover:-translate-y-0.5
                    ${
                      styles.isLight
                        ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        : "border-white/[0.09] bg-white/[0.03] text-white hover:bg-white/[0.06]"
                    }
                  `}
                >
                  <Download className="h-4 w-4" />
                  Download course guide
                </a>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <InfoPill
                  icon={Clock3}
                  label="Duration"
                  value="2 hours 58 min"
                  theme={theme}
                />
                <InfoPill
                  icon={MonitorPlay}
                  label="Lessons"
                  value={`${totalLessons} lessons`}
                  theme={theme}
                />
                <InfoPill
                  icon={Users}
                  label="Level"
                  value="Beginner"
                  theme={theme}
                />
                <InfoPill
                  icon={Trophy}
                  label="Certificate"
                  value="Included"
                  theme={theme}
                />
              </div>
            </div>

            <div
              className={`
                relative flex min-h-[360px] items-center justify-center overflow-hidden
                ${
                  styles.isLight
                    ? "bg-[radial-gradient(circle_at_50%_45%,#dbeafe,transparent_58%),linear-gradient(145deg,#eff6ff,#f8fafc)]"
                    : "bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,0.3),transparent_58%),linear-gradient(145deg,#0a1c35,#071426)]"
                }
              `}
            >
              <div
                className={`
                  absolute h-64 w-64 rounded-full border
                  ${
                    styles.isLight
                      ? "border-blue-200 bg-white/70"
                      : "border-blue-400/20 bg-blue-400/5"
                  }
                `}
              />

              <div
                className={`
                  relative grid h-40 w-40 place-items-center rounded-[34px] border
                  shadow-[0_30px_70px_-35px_rgba(37,99,235,0.65)]
                  ${
                    styles.isLight
                      ? "border-blue-200 bg-white"
                      : "border-blue-400/20 bg-[#0b1c33]"
                  }
                `}
              >
                <MessageSquareText className="h-20 w-20 text-blue-500" strokeWidth={1.35} />
              </div>

              <span className="absolute left-[16%] top-[18%] h-3 w-3 rounded-full bg-cyan-400" />
              <span className="absolute right-[17%] top-[27%] h-4 w-4 rounded-full bg-violet-400" />
              <span className="absolute bottom-[20%] left-[24%] h-2.5 w-2.5 rounded-full bg-orange-400" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="course-content"
        className="mx-auto grid max-w-[1500px] gap-7 px-5 pb-16 lg:grid-cols-[340px_minmax(0,1fr)] lg:px-8"
      >
        <CourseSidebar
          theme={theme}
          selectedLesson={selectedLesson}
          setSelectedLesson={setSelectedLesson}
          openModules={openModules}
          setOpenModules={setOpenModules}
        />

        <div className="space-y-7">
          <section className={`rounded-[22px] border p-6 sm:p-8 ${styles.panel}`}>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-500">
                  Module 1 · Lesson 1
                </p>
                <h2
                  className={`mt-3 text-3xl font-black tracking-[-0.04em] ${styles.text}`}
                >
                  What is ChatGPT?
                </h2>
                <p className={`mt-3 max-w-3xl leading-7 ${styles.muted}`}>
                  Understand the basic idea behind ChatGPT, where it is useful
                  and the important limitations every learner should know.
                </p>
              </div>

              <span
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${
                  styles.isLight
                    ? "bg-slate-100 text-slate-600"
                    : "bg-white/[0.05] text-slate-300"
                }`}
              >
                <Clock3 className="h-3.5 w-3.5" />
                6 minutes
              </span>
            </div>

            <div
              className={`
                mt-7 grid min-h-[380px] place-items-center overflow-hidden rounded-[20px] border
                ${
                  styles.isLight
                    ? "border-slate-200 bg-[linear-gradient(145deg,#eff6ff,#f8fafc)]"
                    : "border-white/[0.07] bg-[linear-gradient(145deg,#071426,#0b1c33)]"
                }
              `}
            >
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="grid h-20 w-20 place-items-center rounded-full bg-blue-600 text-white shadow-[0_20px_50px_-18px_rgba(37,99,235,0.9)] transition hover:scale-105"
                aria-label="Play lesson"
              >
                <Play className="ml-1 h-7 w-7" fill="currentColor" />
              </button>
            </div>
          </section>

          <section className={`rounded-[22px] border p-6 sm:p-8 ${styles.panel}`}>
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-blue-500" />
              <h2 className={`text-xl font-extrabold ${styles.text}`}>
                What you will learn
              </h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {learningOutcomes.map((outcome) => (
                <div
                  key={outcome}
                  className={`flex items-start gap-3 rounded-xl border p-4 ${styles.panelSoft}`}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <p className={`text-sm font-medium leading-6 ${styles.muted}`}>
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className={`rounded-[22px] border p-6 sm:p-8 ${styles.panel}`}>
            <h2 className={`text-2xl font-black tracking-[-0.035em] ${styles.text}`}>
              Lesson notes
            </h2>

            <div className="mt-7 space-y-7">
              {lessonSections.map(({ title, icon: Icon, content, bullets }) => (
                <article key={title}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-xl ${
                        styles.isLight
                          ? "bg-blue-50 text-blue-600"
                          : "bg-blue-500/10 text-blue-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className={`text-lg font-extrabold ${styles.text}`}>{title}</h3>
                  </div>

                  {content && (
                    <p className={`mt-4 leading-7 ${styles.muted}`}>{content}</p>
                  )}

                  {bullets && (
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {bullets.map((bullet) => (
                        <li key={bullet} className={`flex items-start gap-3 text-sm ${styles.muted}`}>
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                          <span className="leading-6">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className={`rounded-[22px] border p-6 sm:p-8 ${styles.panel}`}>
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 h-6 w-6 text-orange-500" />
              <div>
                <h2 className={`text-2xl font-black tracking-[-0.035em] ${styles.text}`}>
                  The five-part prompt framework
                </h2>
                <p className={`mt-2 leading-7 ${styles.muted}`}>
                  Better results come from giving ChatGPT clearer instructions.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {promptFramework.map((item, index) => (
                <article
                  key={item.name}
                  className={`rounded-[18px] border p-5 ${styles.panelSoft}`}
                >
                  <span className="text-xs font-black text-blue-500">
                    0{index + 1}
                  </span>
                  <h3 className={`mt-3 font-extrabold ${styles.text}`}>{item.name}</h3>
                  <p className={`mt-2 text-sm leading-6 ${styles.muted}`}>
                    {item.description}
                  </p>
                  <p
                    className={`mt-4 rounded-lg p-3 text-xs leading-5 ${
                      styles.isLight
                        ? "bg-white text-slate-600"
                        : "bg-black/20 text-slate-300"
                    }`}
                  >
                    {item.example}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className={`rounded-[22px] border p-6 sm:p-8 ${styles.panel}`}>
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-500">
                  Prompt example
                </p>
                <h2 className={`mt-2 text-2xl font-black ${styles.text}`}>
                  Build a structured learning plan
                </h2>
              </div>

              <button
                type="button"
                onClick={copyPrompt}
                className={`
                  inline-flex items-center gap-2 rounded-xl border px-4 py-2.5
                  text-xs font-bold transition
                  ${
                    styles.isLight
                      ? "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      : "border-white/[0.08] bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]"
                  }
                `}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy prompt"}
              </button>
            </div>

            <pre
              className={`
                mt-6 overflow-x-auto whitespace-pre-wrap rounded-[18px] border p-5
                font-mono text-[13px] leading-6
                ${
                  styles.isLight
                    ? "border-slate-200 bg-[#0f172a] text-slate-200"
                    : "border-white/[0.08] bg-black/30 text-slate-200"
                }
              `}
            >
              {promptExample}
            </pre>
          </section>

          <section className={`rounded-[22px] border p-6 sm:p-8 ${styles.panel}`}>
            <h2 className={`text-2xl font-black tracking-[-0.035em] ${styles.text}`}>
              Practice exercises
            </h2>
            <p className={`mt-2 ${styles.muted}`}>
              Apply the lesson before moving to the next module.
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {exercises.map((exercise, index) => (
                <article
                  key={exercise.title}
                  className={`flex flex-col rounded-[18px] border p-5 ${styles.panelSoft}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-black text-blue-500">
                      Exercise {index + 1}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                        exercise.difficulty === "Beginner"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-violet-50 text-violet-700"
                      }`}
                    >
                      {exercise.difficulty}
                    </span>
                  </div>

                  <h3 className={`mt-4 font-extrabold ${styles.text}`}>
                    {exercise.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-6 ${styles.muted}`}>
                    {exercise.task}
                  </p>

                  <div
                    className={`mt-auto rounded-xl p-3 pt-5 text-xs leading-5 ${styles.subtle}`}
                  >
                    <strong className={styles.text}>Hint:</strong> {exercise.hint}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={`rounded-[22px] border p-6 sm:p-8 ${styles.panel}`}>
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div className="flex items-start gap-4">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
                    styles.isLight
                      ? "bg-orange-50 text-orange-600"
                      : "bg-orange-500/10 text-orange-400"
                  }`}
                >
                  <FileText className="h-6 w-6" />
                </span>

                <div>
                  <h2 className={`text-lg font-extrabold ${styles.text}`}>
                    ChatGPT for Everyone course guide
                  </h2>
                  <p className={`mt-1 text-sm ${styles.muted}`}>
                    Download the lesson notes, prompt frameworks and exercises.
                  </p>
                </div>
              </div>

              <a
                href={samplePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                <Download className="h-4 w-4" />
                Open PDF
              </a>
            </div>
          </section>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              className={`
                inline-flex items-center gap-2 rounded-xl border px-5 py-3
                text-sm font-bold
                ${
                  styles.isLight
                    ? "border-slate-200 bg-white text-slate-600"
                    : "border-white/[0.08] bg-white/[0.03] text-slate-300"
                }
              `}
            >
              <ArrowLeft className="h-4 w-4" />
              Previous lesson
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_-16px_rgba(37,99,235,0.75)] transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Mark complete & continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm">
          <div
            className={`relative w-full max-w-5xl overflow-hidden rounded-[28px] border shadow-2xl ${styles.panel}`}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className={`absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border transition ${
                styles.isLight
                  ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  : "border-white/[0.08] bg-[#0b182b]/90 text-white hover:bg-[#12233e]"
              }`}
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full bg-black">
              <video
                key={dsLogoVideo}
                src={dsLogoVideo}
                controls
                autoPlay
                playsInline
                className="h-full w-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
