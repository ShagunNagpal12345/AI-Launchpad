import {
  ArrowRight,
} from "lucide-react";

import { goals } from "../data/siteData";

import beginnerIcon from "../assets/learning-goal-icons/ai-for-beginners.png";
import professionalIcon from "../assets/learning-goal-icons/ai-for-professionals.png";
import computerVisionIcon from "../assets/learning-goal-icons/computer-vision.png";
import dataScienceIcon from "../assets/learning-goal-icons/data-science.png";
import deepLearningIcon from "../assets/learning-goal-icons/deep-learning.png";
import machineLearningIcon from "../assets/learning-goal-icons/machine-learning.png";
import nlpGenaiIcon from "../assets/learning-goal-icons/nlp-genai.png";
import SplitGradientHeading from "./SplitGradientHeading";

const goalIcons = [
  beginnerIcon,
  machineLearningIcon,
  deepLearningIcon,
  nlpGenaiIcon,
  computerVisionIcon,
  dataScienceIcon,
  professionalIcon,
];

const accents = [
  {
    border: "group-hover:border-orange-200",
    glow: "group-hover:shadow-[0_18px_38px_-28px_rgba(249,115,22,0.45)]",
  },
  {
    border: "group-hover:border-orange-200",
    glow: "group-hover:shadow-[0_18px_38px_-28px_rgba(249,115,22,0.45)]",
  },
  {
    border: "group-hover:border-orange-200",
    glow: "group-hover:shadow-[0_18px_38px_-28px_rgba(249,115,22,0.45)]",
  },
  {
    border: "group-hover:border-violet-200",
    glow: "group-hover:shadow-[0_18px_38px_-28px_rgba(139,92,246,0.45)]",
  },
  {
    border: "group-hover:border-indigo-200",
    glow: "group-hover:shadow-[0_18px_38px_-28px_rgba(99,102,241,0.45)]",
  },
  {
    border: "group-hover:border-blue-200",
    glow: "group-hover:shadow-[0_18px_38px_-28px_rgba(59,130,246,0.45)]",
  },
  {
    border: "group-hover:border-cyan-200",
    glow: "group-hover:shadow-[0_18px_38px_-28px_rgba(6,182,212,0.45)]",
  },
];

export default function GoalsSection({ theme = "light" }) {
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section className={`py-8 md:py-10 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-5 lg:px-6">
        <div
          className={`
            rounded-[20px] border px-3 py-7 sm:px-5 md:py-8
            ${
              isLight
                ? "border-[#e7ebf2] bg-white/90 shadow-[0_16px_55px_-42px_rgba(15,23,42,0.28)]"
                : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
            }
          `}
        >
          <SplitGradientHeading
            theme={theme}
            className={`text-center text-[25px] font-bold tracking-[-0.035em] sm:text-[28px] ${
              isLight ? "text-[#101a3d]" : "text-white"
            }`}
            plain="Choose your"
            accent="learning goal"
          />

          <div
            className="
              goals-scroll
              mt-7
              flex
              snap-x
              snap-mandatory
              gap-3
              overflow-x-auto
              pb-2
              md:grid
              md:grid-cols-4
              md:overflow-visible
              xl:grid-cols-7
            "
          >
            {goals.map((goal, index) => {
              const icon = goalIcons[index];
              const accent = accents[index];

              return (
                <a
                  key={goal.title}
                  href={goal.href || "#"}
                  className={`
                    group flex min-h-[205px] w-[82vw] max-w-[210px] shrink-0 snap-start
                    flex-col items-center rounded-[16px] border px-4 pb-5 pt-5 text-center
                    transition duration-300 hover:-translate-y-1 ${accent.border} ${accent.glow}
                    sm:w-[68vw] md:w-auto md:max-w-none
                    ${
                      isLight
                        ? "border-[#e8ecf2] bg-white shadow-[0_10px_28px_-24px_rgba(15,23,42,0.25)]"
                        : "border-white/[0.08] bg-[#0c1a2d] hover:border-blue-400/25"
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      h-[68px]
                      w-[82px]
                      items-center
                      justify-center
                      overflow-hidden
                    "
                  >
                    <img
                      src={icon}
                      alt={`${goal.title} icon`}
                      className="
                        h-[64px]
                        w-[64px]
                        object-contain
                        transition
                        duration-300
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <h3
                    className={`mt-3 min-h-[44px] text-[15px] font-bold leading-[1.25] tracking-[-0.02em] ${
                      isLight ? "text-[#101a3d]" : "text-white"
                    }`}
                  >
                    {goal.title}
                  </h3>

                  <p
                    className={`mt-3 max-w-[150px] text-[12px] font-medium leading-[1.5] ${
                      isLight ? "text-[#778198]" : "text-slate-400"
                    }`}
                  >
                    {goal.description}
                  </p>

                  {goal.cta && (
                    <div
                      className={`mt-auto flex items-center gap-1.5 pt-4 text-[12px] font-bold opacity-0 transition duration-200 group-hover:opacity-100 ${
                        isLight ? "text-blue-600" : "text-sky-400"
                      }`}
                    >
                      {goal.cta}

                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={2.2}
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
