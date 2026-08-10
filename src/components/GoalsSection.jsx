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

              return (
                <article
                  key={goal.title}
                  className={`
                    relative flex min-h-[220px] w-[75vw] max-w-[220px] shrink-0 snap-start
                    flex-col items-center rounded-[20px] border px-5 pb-6 pt-6 text-center
                    sm:w-[45vw] sm:max-w-[240px] md:w-auto md:flex-1 md:basis-[200px] lg:max-w-[240px]
                    ${
                      isLight
                        ? "border-[#e8ecf2] bg-white shadow-sm"
                        : "border-white/[0.06] bg-[#0c1a2d]"
                    }
                  `}
                >
                  {/* Subtle background pad for the icon */}
                  <div
                    className={`
                      mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-2xl
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

                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
