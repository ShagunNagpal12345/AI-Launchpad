import { ArrowRight } from "lucide-react";

import aiLaunchpadDarkIcon from "../assets/ai-ecosystem-section-assets/icons/dark/ai-launchpad.png";
import sqlPracticeDarkIcon from "../assets/ai-ecosystem-section-assets/icons/dark/sql-practice-arena.png";
import codingPracticeDarkIcon from "../assets/ai-ecosystem-section-assets/icons/dark/coding-practice-arena.png";
import gamingArenaDarkIcon from "../assets/ai-ecosystem-section-assets/icons/dark/gaming-arena.png";
import careerToolsDarkIcon from "../assets/ai-ecosystem-section-assets/icons/dark/career-tools.png";
import communityDarkIcon from "../assets/ai-ecosystem-section-assets/icons/dark/community.png";

import aiLaunchpadLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/ai-launchpad.png";
import liveClassesLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/live-classes.png";
import practiceArenaLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/practice-arena.png";
import gamingArenaLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/gaming-arena.png";
import driveResourcesLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/drive-resources.png";
import communityLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/community.png";
import SplitGradientHeading from "./SplitGradientHeading";
import { useAdminContent } from "../content/AdminContentContext";
import { DEFAULT_ADMIN_CONTENT } from "../content/defaultAdminContent";

const shell = "mx-auto max-w-[1480px] px-4 sm:px-5 lg:px-6";

const darkItems = [
  {
    title: "AI Launchpad",
    description: "Step-by-step AI learning paths & live classes",
    icon: aiLaunchpadDarkIcon,
    href: "#ai-launchpad",
    featured: true,
  },
  {
    title: "SQL Practice Arena",
    description: "500+ SQL questions across real-world topics",
    icon: sqlPracticeDarkIcon,
    href: "#sql-practice",
  },
  {
    title: "Coding Practice Arena",
    description: "Python & coding challenges to level up skills",
    icon: codingPracticeDarkIcon,
    href: "#practice",
  },
  {
    title: "Gaming Arena",
    description: "Learn by playing SQL games & challenges",
    icon: gamingArenaDarkIcon,
    href: "#games",
  },
  {
    title: "Career Tools",
    description: "Build resumes, prep for interviews & get hired",
    icon: careerToolsDarkIcon,
    href: "#career-tools",
  },
  {
    title: "Community",
    description: "Connect, share & grow with 463+ builders",
    icon: communityDarkIcon,
    href: "#community",
  },
];

const lightItems = [
  {
    title: "AI Launchpad",
    description: "Structured learning paths for every level",
    cta: "Start Learning",
    icon: aiLaunchpadLightIcon,
    href: "#ai-launchpad",
  },
  {
    title: "Live Classes",
    description: "Learn live with experts & doubt sessions",
    cta: "Join Live",
    icon: liveClassesLightIcon,
    href: "#live-classes",
  },
  {
    title: "Practice Arena",
    description: "Hands-on practice & real-world problems",
    cta: "Practice Now",
    icon: practiceArenaLightIcon,
    href: "#practice",
  },
  {
    title: "Gaming Arena",
    description: "Learn by playing AI-powered games",
    cta: "Play & Learn",
    icon: gamingArenaLightIcon,
    href: "#games",
  },
  {
    title: "Drive & Resources",
    description: "Premium study materials & resources",
    cta: "Browse Now",
    icon: driveResourcesLightIcon,
    href: "#resources",
  },
  {
    title: "Community",
    description: "Connect, collaborate & grow together",
    cta: "Join Community",
    icon: communityLightIcon,
    href: "#community",
  },
];

function DarkEcosystemCard({ item }) {
  return (
    <a
      href={item.href}
      className="
        group flex min-h-[280px] min-w-0 flex-col rounded-[18px]
        border border-white/[0.08] bg-[#0d182b] px-4 py-6 text-center
        shadow-[0_16px_38px_-28px_rgba(0,0,0,0.45)]
        transition duration-300
        hover:-translate-y-1
        hover:border-blue-400/25
        hover:shadow-[0_20px_45px_-28px_rgba(37,99,235,0.28)]
        sm:min-h-[300px] sm:px-5 sm:py-7
        md:min-h-[355px]
      "
    >
      <div className="flex min-h-[96px] items-center justify-center sm:min-h-[104px] md:min-h-[112px]">
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          className="h-[72px] w-[72px] object-contain transition duration-300 group-hover:scale-105 sm:h-[78px] sm:w-[78px] md:h-[82px] md:w-[82px]"
        />
      </div>

      <h3 className="mt-2 text-[17px] font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-[18px]">
        {item.title}
      </h3>

      <p className="mx-auto mt-3 max-w-[200px] text-[13px] font-medium leading-[1.55] text-slate-300 sm:mt-4 sm:text-[14px]">
        {item.description}
      </p>

      <div className="mt-auto inline-flex min-h-[44px] items-center justify-center gap-2 pt-5 text-[13px] font-bold text-sky-300 sm:pt-6 sm:text-[14px]">
        <span>{item.cta}</span>

        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2.3}
        />
      </div>
    </a>
  );
}

function LightEcosystemCard({ item }) {
  return (
    <a
      href={item.href}
      className="
        group flex min-h-[280px] min-w-0 flex-col rounded-[18px]
        border border-[#e7ebf2] bg-white px-4 py-6 text-center
        shadow-[0_10px_35px_-26px_rgba(15,23,42,0.28)]
        transition duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-[0_20px_45px_-28px_rgba(37,99,235,0.35)]
        sm:min-h-[300px] sm:px-5 sm:py-7
        md:min-h-[355px]
      "
    >
      <div className="flex min-h-[96px] items-center justify-center sm:min-h-[102px] md:min-h-[105px]">
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          className="h-[74px] w-[74px] object-contain transition duration-300 group-hover:scale-105 sm:h-[82px] sm:w-[82px] md:h-[88px] md:w-[88px]"
        />
      </div>

      <h3 className="mt-2 text-[17px] font-extrabold leading-tight tracking-[-0.025em] text-[#0b1639] sm:text-[18px]">
        {item.title}
      </h3>

      <p className="mx-auto mt-3 max-w-[200px] text-[13px] font-medium leading-[1.55] text-[#69758d] sm:mt-4 sm:text-[14px]">
        {item.description}
      </p>

      <div className="mt-auto inline-flex min-h-[44px] items-center justify-center gap-2 pt-5 text-[13px] font-bold text-[#3575e8] sm:pt-6 sm:text-[14px]">
        <span>{item.cta}</span>

        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2.3}
        />
      </div>
    </a>
  );
}

export default function EcosystemSection({ theme = "dark" }) {
  const { content } = useAdminContent();
  const isLight = theme === "light";
  const defaultItems = DEFAULT_ADMIN_CONTENT.ecosystem.items;
  const storedItems = content.ecosystem.items || [];
  const storedItemMap = new Map(storedItems.map((item) => [item.title, item]));
  const mergedItems = defaultItems.map(
    (item) => storedItemMap.get(item.title) || item,
  );
  const extraItems = storedItems.filter(
    (item) =>
      !defaultItems.some(
        (defaultItem) => defaultItem.title === item.title,
      ),
  );
  const items = [...mergedItems, ...extraItems];
  const loopingItems = [...items, ...items];

  return (
    <section
      id="ecosystem"
      className={`py-8 md:py-14 ${
        isLight ? "bg-[#f8fafc]" : "bg-[#030b18]"
      }`}
    >
      <div className={shell}>
        <div
          className={`
            overflow-hidden rounded-[22px] border px-3 py-6 sm:px-5 sm:py-7 md:py-8
            ${
              isLight
                ? `
                  border-[#e5eaf2]
                  bg-white/80
                  shadow-[0_18px_70px_-45px_rgba(15,23,42,0.25)]
                `
                : `
                  border-white/[0.06]
                  bg-[linear-gradient(145deg,rgba(7,20,38,0.98),rgba(5,17,32,0.98))]
                  shadow-[0_25px_80px_-50px_rgba(0,0,0,0.9)]
                `
            }
          `}
        >
          <SplitGradientHeading
            theme={theme}
            className={`text-center text-[22px] font-black tracking-[-0.035em] sm:text-[26px] md:text-[30px] ${
              isLight ? "text-[#0a1538]" : "text-white"
            }`}
            plain={content.ecosystem.heading}
            accent={content.ecosystem.accentHeading}
          />

          <div
            className="
              ecosystem-marquee-shell relative mt-6 overflow-hidden pb-3
              sm:mt-7
            "
          >
            <div
              className="
                ecosystem-marquee-track flex w-max gap-3
                sm:gap-4
              "
            >
            {loopingItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                aria-hidden={index >= items.length}
                className="w-[78vw] max-w-[250px] shrink-0 sm:w-[50vw] sm:max-w-[260px] lg:w-[240px] lg:max-w-[240px] xl:w-[228px] xl:max-w-[228px]"
              >
                {isLight ? <LightEcosystemCard item={item} /> : <DarkEcosystemCard item={item} />}
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
