import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import SplitGradientHeading from "./SplitGradientHeading";
import { useAdminContent } from "../content/AdminContentContext";

import chatGptThumbnail from "../assets/Elearnings/ChatGPT.png";
import deepLearningThumbnail from "../assets/Elearnings/DeepLearning.png";
import llmProjectThumbnail from "../assets/Elearnings/LLMProject.png";
import machineLearningThumbnail from "../assets/Elearnings/MachineLearning.png";
import mlOpsThumbnail from "../assets/Elearnings/MLOps.png";
import pythonDataScienceThumbnail from "../assets/Elearnings/Python4DS.png";

const learningMaterials = [
  {
    title: "ChatGPT for Everyone",
    type: "Ebook",
    fileType: "PDF",
    href: "/elearning",
    isInternal: true,
    thumbnail: chatGptThumbnail,
  },
  {
    title: "LLM Project Guide",
    type: "Guide",
    fileType: "PDF",
    href: "/elearning",
    isInternal: true,
    thumbnail: llmProjectThumbnail,
  },
  {
    title: "Machine Learning Cheatsheet",
    type: "Cheatsheet",
    fileType: "PDF",
    href: "/elearning",
    isInternal: true,
    thumbnail: machineLearningThumbnail,
  },
  {
    title: "Python for Data Science",
    type: "Ebook",
    fileType: "PDF",
    href: "/elearning",
    isInternal: true,
    thumbnail: pythonDataScienceThumbnail,
  },
  {
    title: "Deep Learning Handbook",
    type: "Ebook",
    fileType: "PDF",
    href: "/elearning",
    isInternal: true,
    thumbnail: deepLearningThumbnail,
  },
  {
    title: "MLOps Best Practices",
    type: "Guide",
    fileType: "PDF",
    href: "/elearning",
    isInternal: true,
    thumbnail: mlOpsThumbnail,
  },
];

const materialStyles = [
  {
    type: "bg-blue-50 text-blue-600 border-blue-100",
    hover: "hover:border-blue-200",
  },
  {
    type: "bg-indigo-50 text-indigo-600 border-indigo-100",
    hover: "hover:border-indigo-200",
  },
  {
    type: "bg-violet-50 text-violet-600 border-violet-100",
    hover: "hover:border-violet-200",
  },
  {
    type: "bg-cyan-50 text-cyan-700 border-cyan-100",
    hover: "hover:border-cyan-200",
  },
  {
    type: "bg-blue-50 text-blue-600 border-blue-100",
    hover: "hover:border-blue-200",
  },
  {
    type: "bg-indigo-50 text-indigo-600 border-indigo-100",
    hover: "hover:border-indigo-200",
  },
];

function MaterialCard({ material, index, isLight }) {
  const style = materialStyles[index % materialStyles.length];
  return (
    <Link
      to={material.href}
      className={`
        group
        flex
        min-h-[210px]
        w-[84vw]
        max-w-[260px]
        shrink-0
        snap-start
        flex-col
        rounded-[16px]
        border
        overflow-hidden
        transition
        duration-300
        hover:-translate-y-0.5
        sm:w-[70vw]
        md:w-auto
        md:max-w-none
        ${style.hover}
        ${
          isLight
            ? `
              border-[#e5eaf1]
              bg-white
              shadow-[0_10px_28px_-24px_rgba(15,23,42,0.25)]
              hover:shadow-[0_18px_36px_-28px_rgba(37,99,235,0.3)]
            `
            : `
              border-white/[0.08]
              bg-[#0c1a2d]
              hover:border-blue-400/25
              hover:shadow-[0_18px_40px_-30px_rgba(59,130,246,0.45)]
            `
        }
      `}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#07172f]">
        <img
          src={material.thumbnail}
          alt={`${material.title} thumbnail`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
        />
        <span className="absolute right-2.5 top-2.5 rounded-full border border-white/20 bg-[#07172f]/90 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white">
          Free
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 py-3.5">
      <div className="flex items-start justify-between gap-3">
        <h3
          className={`
            text-[14px]
            font-bold
            leading-[1.25]
            tracking-[-0.02em]
            ${
              isLight
                ? "text-[#111a3b]"
                : "text-white"
            }
          `}
        >
          {material.title}
        </h3>

        <ExternalLink
          className={`
            mt-0.5
            h-4
            w-4
            shrink-0
            opacity-0
            transition
            duration-200
            group-hover:opacity-100
            ${
              isLight
                ? "text-blue-600"
                : "text-sky-400"
            }
          `}
          strokeWidth={2}
        />
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-3">
        <span
          className={`
            rounded-full
            border
            px-3
            py-1.5
            text-[11px]
            font-semibold
            ${isLight ? style.type : "border-sky-400/15 bg-sky-400/10 text-sky-300"}
          `}
        >
          {material.type}
        </span>

        <span
          className={`
            rounded-full
            border
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.08em]
            ${
              isLight
                ? "border-slate-200 bg-slate-50 text-slate-600"
                : "border-white/[0.08] bg-white/[0.04] text-slate-400"
            }
          `}
        >
          {material.fileType}
        </span>
      </div>
      </div>
    </Link>
  );
}

export default function ResourcesSection({ theme = "light" }) {
  const { content } = useAdminContent();
  const sectionContent = content.homepageSections.resources;
  const normalizedTheme = String(theme).toLowerCase();

  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section
      id="resources"
      className="scroll-mt-24 py-5 md:py-7"
    >
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="px-1 py-4 sm:px-2">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SplitGradientHeading
              theme={theme}
              className={`
                text-[24px]
                font-extrabold
                tracking-[-0.035em]
                sm:text-[28px]
                ${
                  isLight
                    ? "text-[#111a3b]"
                    : "text-white"
                }
              `}
              plain="Free E-Learning"
              accent="Materials"
            />

            <Link
              to="/elearning#elearning-top"
              className={`
                inline-flex
                shrink-0
                items-center
                gap-1.5
                rounded-[10px]
                border
                self-stretch
                px-4
                py-2
                text-[13px]
                font-bold
                transition
                hover:-translate-y-0.5
                sm:self-auto
                ${
                  isLight
                    ? `
                      border-orange-200
                      bg-white
                      text-orange-600
                      hover:border-orange-300
                      hover:bg-orange-50
                    `
                    : `
                      border-orange-400/25
                      bg-orange-400/10
                      text-orange-300
                      hover:bg-orange-400/15
                    `
                }
              `}
            >
              {sectionContent.ctaLabel}
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>

          <div
            className="
              materials-scroll
              mt-5
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              pb-2
              sm:grid
              sm:grid-cols-2
              sm:overflow-visible
              lg:grid-cols-3
              xl:grid-cols-6
            "
          >
            {learningMaterials.map((material, index) => (
              <MaterialCard
                key={material.title}
                material={material}
                index={index}
                isLight={isLight}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
