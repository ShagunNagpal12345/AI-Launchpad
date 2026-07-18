import { Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SplitGradientHeading from "./SplitGradientHeading";

const learningHighlights = [
  "Step-by-step roadmap",
  "Hands-on projects",
  "Quizzes & assignments",
  "Mentor support",
  "Certificates",
];

const learningTracks = [
  {
    title: "AI Fundamentals",
    href: "/learn-ai/ai-fundamentals",
    items: [
      "Python for AI",
      "GenAI Basics",
      "Prompt Engineering",
      "LLM Fundamentals",
      "RAG Basics",
      "Agentic AI Intro",
    ],
    accent: "blue",
  },
  {
    title: "Agent Builder",
    href: "/learn-ai/machine-learning",
    items: [
      "LangChain",
      "LangGraph",
      "Deep Agents",
      "Human-in-the-Loop",
      "Time Travel & Checkpointing",
      "Multi-Agent Systems",
      "Tool Calling & MCP",
      "Memory & State",
      "Telemetry & Observability",
      "Evaluation & Testing",
      "Guardrails",
      "Agent Deployment",
    ],
    accent: "green",
  },
  {
    title: "Frontier Enginering",
    href: "/learn-ai/deep-learning",
    items: [
      "Backend Design",
      "Frontend Design",
      "API Management",
      "Databases & Vector Stores",
      "System Design",
      "Microservices",
      "CI/CD",
      "Containerization",
    ],
    accent: "violet",
  },
  {
    title: "Advanced AI",
    href: "/learn-ai/advanced-ai",
    items: [
      "NLP & GenAI",
      "Computer Vision",
      "RL & Agents",
      "Fine-Tuning",
      "Model Optimization",
      "MLOps",
      "LLMOps",
      "Distributed Training",
      "Multimodal AI",
      "Model Serving",
      "AI Safety & Alignment",
      "Capstone Project",
    ],
    accent: "orange",
  },
  {
    title: "AI for Professionals",
    href: "/learn-ai/ai-for-professionals",
    items: [
      "Enterprise AI Strategy",
      "Industry Use Cases",
      "AI Product Management",
      "Building AI Apps",
      "Deploying AI at Scale",
      "AI Governance & Compliance",
      "Cost & ROI",
      "Best Practices",
      "Case Studies",
      "Career Growth",
    ],
    accent: "cyan",
  },
];

const accentStyles = {
  blue: {
    title: "text-[#2868d8]",
    dot: "bg-[#2868d8]",
    footer: "text-[#2868d8]",
    border: "border-[#dce9ff]",
    header: "bg-[#f7faff]",
  },
  green: {
    title: "text-[#087d72]",
    dot: "bg-[#087d72]",
    footer: "text-[#087d72]",
    border: "border-[#d8f2ea]",
    header: "bg-[#f7fcfa]",
  },
  violet: {
    title: "text-[#6841dc]",
    dot: "bg-[#6841dc]",
    footer: "text-[#6841dc]",
    border: "border-[#e8defc]",
    header: "bg-[#faf8ff]",
  },
  orange: {
    title: "text-[#ed6426]",
    dot: "bg-[#ed6426]",
    footer: "text-[#ed6426]",
    border: "border-[#f9dfcd]",
    header: "bg-[#fffaf6]",
  },
  cyan: {
    title: "text-[#1789a7]",
    dot: "bg-[#1789a7]",
    footer: "text-[#1789a7]",
    border: "border-[#d4eef3]",
    header: "bg-[#f6fcfd]",
  },
};

function LevelLegend({ isLight }) {
  const levels = [
    { label: "Beginner", color: "bg-[#347bdc]" },
    { label: "Intermediate", color: "bg-[#159a90]" },
    { label: "Advanced", color: "bg-[#6b3fd8]" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
      {levels.map((level) => (
        <div
          key={level.label}
          className={`flex items-center gap-2 text-[14px] font-semibold ${
            isLight ? "text-[#58637a]" : "text-slate-300"
          }`}
        >
          <span
            className={`grid h-7 w-7 shrink-0 place-items-center rounded-[7px] ${level.color}`}
          >
            <Check className="h-4 w-4 text-white" strokeWidth={3} />
          </span>

          <span className="whitespace-nowrap">{level.label}</span>
        </div>
      ))}
    </div>
  );
}

function TrackCard({ track, isLight }) {
  const accent = accentStyles[track.accent];

  return (
    <Link
      to={track.href}
      className={`
        flex h-full min-w-0 flex-col overflow-hidden rounded-[18px] border
        transition duration-300 hover:-translate-y-1
        ${
          isLight
            ? `
              ${accent.border}
              bg-white
              shadow-[0_12px_30px_-25px_rgba(15,23,42,0.22)]
            `
            : `
              border-white/[0.08]
              bg-[#0c1a2c]
              hover:border-blue-400/25
            `
        }
      `}
    >
      <div
        className={`
          flex min-h-[98px] items-center justify-center border-b px-3 text-center
          ${
            isLight
              ? `${accent.header} border-[#edf0f4]`
              : "border-white/[0.07] bg-white/[0.02]"
          }
        `}
      >
        <h3
          className={`
            max-w-full text-[18px] font-extrabold leading-[1.2]
            tracking-[-0.03em]
            ${isLight ? accent.title : "text-white"}
          `}
        >
          {track.title}
        </h3>
      </div>

      <ul className="flex-1 space-y-5 px-5 py-7">
        {track.items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-[13px] font-medium leading-5 ${
              isLight ? "text-[#4e596f]" : "text-slate-300"
            }`}
          >
            <span
              className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${
                isLight ? accent.dot : "bg-sky-400"
              }`}
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>

    </Link>
  );
}

export default function LearnAiSection({ theme = "light" }) {
  const normalizedTheme = String(theme).toLowerCase();

  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section
      id="learn-ai"
      className={`py-8 md:py-10 ${
        isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-5 lg:px-6">
        <div
          className={`
            overflow-hidden rounded-[28px] border px-5 py-8
            sm:px-7 lg:px-9 lg:py-10
            ${
              isLight
                ? `
                  border-[#e2e8f0]
                  bg-white
                  shadow-[0_22px_70px_-52px_rgba(15,23,42,0.3)]
                `
                : `
                  border-[#1d2d43]
                  bg-[linear-gradient(145deg,#071426,#051121)]
                `
            }
          `}
        >
          {/* Header */}
          <div className="grid items-center gap-5 lg:grid-cols-[280px_1fr_auto]">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <SplitGradientHeading
                theme={theme}
                className={`text-[27px] font-black tracking-[-0.04em] sm:text-[31px] ${
                  isLight ? "text-[#111a3b]" : "text-white"
                }`}
                plain="AI"
                accent="Launchpad"
              />

              <span
                className={`whitespace-nowrap text-[15px] font-semibold ${
                  isLight ? "text-[#596276]" : "text-slate-400"
                }`}
              >
                (Tracks)
              </span>
            </div>

            <LevelLegend isLight={isLight} />

            <a
              href="#curriculum"
              className={`
                inline-flex h-12 w-full items-center justify-center gap-2 rounded-[12px]
                border px-5 text-[14px] font-bold transition
                hover:-translate-y-0.5
                sm:w-auto
                ${
                  isLight
                    ? `
                      border-orange-200 bg-white text-[#ef6c28]
                      hover:border-orange-300 hover:bg-orange-50
                    `
                    : `
                      border-orange-400/25 bg-orange-400/10
                      text-orange-300 hover:bg-orange-400/15
                    `
                }
              `}
            >
              View all
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* Main content */}
          <div className="mt-8 grid gap-8 xl:grid-cols-[340px_minmax(0,1fr)]">
            <aside className="text-center xl:text-left">
              <p
                className={`mx-auto max-w-[300px] text-[18px] font-semibold leading-[1.55] xl:mx-0 ${
                  isLight ? "text-[#4f596d]" : "text-slate-300"
                }`}
              >
                Structured learning paths with curated courses, projects &
                assessments.
              </p>

              <ul className="mt-9 space-y-5">
                {learningHighlights.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 text-[15px] font-medium ${
                      isLight ? "text-[#667086]" : "text-slate-300"
                    }`}
                  >
                    <span
                      className={`
                        grid h-7 w-7 shrink-0 place-items-center rounded-full
                        ${
                          isLight
                            ? "bg-[#eef5ff] text-[#3677df]"
                            : "bg-sky-400/10 text-sky-400"
                        }
                      `}
                    >
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </aside>

            <div
              className="
                tracks-scroll flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2
                md:grid md:grid-cols-2 md:overflow-visible
                xl:grid-cols-5 xl:pb-0
              "
            >
              {learningTracks.map((track) => (
                <div
                  key={track.title}
                  className="
                    w-[84vw] max-w-[270px] shrink-0 snap-start
                    sm:w-[70vw]
                    md:w-auto md:max-w-none md:min-w-0
                  "
                >
                  <TrackCard track={track} isLight={isLight} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
