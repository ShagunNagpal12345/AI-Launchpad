import { ArrowRight } from "lucide-react";

import aiForEveryoneIcon from "../assets/learning-goal-icons/ai-for-everyone.png";
import claudeCodeForBuildersIcon from "../assets/learning-goal-icons/claude-code-for-builders.png";
import aiForNonCodersIcon from "../assets/learning-goal-icons/ai-for-non-coders.png";
import agenticAiIcon from "../assets/learning-goal-icons/agentic-ai.png";
import multiagentOrchestrationIcon from "../assets/learning-goal-icons/multiagent-orchestration.png";
import aiSoftwareDevelopmentIcon from "../assets/learning-goal-icons/ai-software-development.png";
import devopsIcon from "../assets/learning-goal-icons/devops.png";
import n8nExpertIcon from "../assets/learning-goal-icons/n8n-expert.png";
import aiArchitectIcon from "../assets/learning-goal-icons/ai-architect.png";
import pythonProIcon from "../assets/learning-goal-icons/python-pro.png";
import sqlMasterIcon from "../assets/learning-goal-icons/sql-master.png";
import SplitGradientHeading from "./SplitGradientHeading";
import { useAdminContent } from "../content/AdminContentContext";
import { DEFAULT_ADMIN_CONTENT } from "../content/defaultAdminContent";

const goalIcons = [
  aiForEveryoneIcon,
  claudeCodeForBuildersIcon,
  aiForNonCodersIcon,
  agenticAiIcon,
  multiagentOrchestrationIcon,
  aiSoftwareDevelopmentIcon,
  devopsIcon,
  n8nExpertIcon,
  aiArchitectIcon,
  pythonProIcon,
  sqlMasterIcon,
];

const accents = [
  {
    border: "group-hover:border-orange-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(249,115,22,0.45)]",
  },
  {
    border: "group-hover:border-orange-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(249,115,22,0.45)]",
  },
  {
    border: "group-hover:border-orange-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(249,115,22,0.45)]",
  },
  {
    border: "group-hover:border-violet-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(139,92,246,0.45)]",
  },
  {
    border: "group-hover:border-indigo-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(99,102,241,0.45)]",
  },
  {
    border: "group-hover:border-blue-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(59,130,246,0.45)]",
  },
  {
    border: "group-hover:border-cyan-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(6,182,212,0.45)]",
  },
  {
    border: "group-hover:border-emerald-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(16,185,129,0.45)]",
  },
  {
    border: "group-hover:border-fuchsia-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(217,70,239,0.45)]",
  },
  {
    border: "group-hover:border-sky-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(14,165,233,0.45)]",
  },
  {
    border: "group-hover:border-lime-200",
    glow: "group-hover:shadow-[0_18px_40px_-24px_rgba(132,204,22,0.45)]",
  },
];

const goalHrefByTitle = {
  "AI for Everyone": "/resources/chatgpt-for-everyone",
  "Claude Code for Builders": "#",
  "AI for Non Coders": "#",
  "Agentic AI": "#",
  "Multiagent Orchestration": "#",
  "AI Software Development": "#",
  Devops: "#",
  "N8N Expert": "#",
  "AI Architect": "#",
  "Python Pro": "/resources/python-for-data-science",
  "SQL Master": "#",
};

function resolveGoalHref(goal) {
  const mappedHref = goalHrefByTitle[goal.title];
  const href = goal.href?.trim();

  if (!mappedHref) {
    return href || "#";
  }

  if (!href || href === "#") {
    return mappedHref;
  }

  // Repair older saved admin content where a goal still points to the wrong legacy page.
  if (
    goal.title === "Machine Learning" &&
    href === "/resources/llm-project-guide"
  ) {
    return mappedHref;
  }

  return href;
}

export default function GoalsSection({ theme = "light" }) {
  const { content } = useAdminContent();
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);
  const defaultGoalItems = DEFAULT_ADMIN_CONTENT.goals.items;
  const goalItems =
    content.goals.items?.length === defaultGoalItems.length
      ? content.goals.items
      : defaultGoalItems;

  return (
    <section
      className={`py-10 md:py-16 transition-colors duration-300 ${
        isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div
          className={`
            relative overflow-hidden rounded-[24px] border px-4 py-8 sm:px-6 sm:py-10 md:py-12
            ${
              isLight
                ? "border-[#e7ebf2] bg-white/90 backdrop-blur-sm shadow-[0_16px_55px_-42px_rgba(15,23,42,0.15)]"
                : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.8)]"
            }
          `}
        >
          <SplitGradientHeading
            theme={theme}
            className={`text-center text-[24px] font-bold tracking-tight sm:text-[28px] md:text-[32px] ${
              isLight ? "text-[#101a3d]" : "text-white"
            }`}
            plain={content.goals.heading}
            accent={content.goals.accentHeading}
          />

          <div
            className="
              goals-scroll
              -mx-4
              mt-8
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              px-4
              pb-6
              sm:mx-0
              sm:mt-10
              sm:px-0
              md:flex-wrap
              md:justify-center
              md:overflow-visible
              md:pb-2
              lg:gap-5
            "
          >
            {goalItems.map((goal, index) => {
              const icon = goal.icon || goalIcons[index];
              const accent = accents[index % accents.length];
              const href = resolveGoalHref(goal);

              return (
                <a
                  key={goal.title}
                  href={href}
                  className={`
                    group relative flex min-h-[220px] w-[75vw] max-w-[220px] shrink-0 snap-start
                    flex-col items-center rounded-[20px] border px-5 pb-6 pt-6 text-center
                    transition-all duration-400 ease-out hover:-translate-y-1.5 
                    sm:w-[45vw] sm:max-w-[240px] md:w-auto md:flex-1 md:basis-[200px] lg:max-w-[240px]
                    ${accent.border} ${accent.glow}
                    ${
                      isLight
                        ? "border-[#e8ecf2] bg-white shadow-sm hover:shadow-[0_12px_30px_-15px_rgba(15,23,42,0.15)]"
                        : "border-white/[0.06] bg-[#0c1a2d] hover:border-white/[0.12]"
                    }
                  `}
                >
                  {/* Subtle background pad for the icon */}
                  <div
                    className={`
                      mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-2xl
                      transition-transform duration-500 ease-out group-hover:scale-110
                      ${isLight ? "bg-slate-50" : "bg-white/[0.02]"}
                    `}
                  >
                    <img
                      src={icon}
                      alt={`${goal.title} icon`}
                      className="h-[48px] w-[48px] object-contain sm:h-[52px] sm:w-[52px]"
                    />
                  </div>

                  <h3
                    className={`mt-1 min-h-[44px] text-[15px] font-bold leading-tight tracking-tight sm:text-[16px] ${
                      isLight ? "text-[#101a3d]" : "text-white"
                    }`}
                  >
                    {goal.title}
                  </h3>

                  <p
                    className={`mt-2 text-[12px] font-medium leading-relaxed sm:text-[13px] ${
                      isLight ? "text-[#64748b]" : "text-slate-400"
                    }`}
                  >
                    {goal.description}
                  </p>

                  {goal.cta && (
                    <div
                      className={`
                        mt-auto flex items-center justify-center gap-1.5 pt-5 text-[13px] font-bold 
                        opacity-0 translate-y-2 transition-all duration-300 ease-out
                        group-hover:translate-y-0 group-hover:opacity-100
                        ${isLight ? "text-blue-600" : "text-sky-400"}
                      `}
                    >
                      {goal.cta}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}