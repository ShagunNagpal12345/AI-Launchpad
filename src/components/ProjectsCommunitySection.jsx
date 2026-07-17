import {
  ArrowRight,
  Download,
  Heart,
} from "lucide-react";

/* Project icons */
import sentimentProjectIcon from "../assets/community-section-assets/project-icons/sentiment-analysis-app.png";
import resumeProjectIcon from "../assets/community-section-assets/project-icons/ai-resume-analyzer.png";
import stockProjectIcon from "../assets/community-section-assets/project-icons/stock-price-predictor.png";
import ragProjectIcon from "../assets/community-section-assets/project-icons/chatbot-with-rag.png";

/* Member avatars */
import rishaAvatar from "../assets/community-section-assets/member-avatars/member-risha-s.png";
import arjunAvatar from "../assets/community-section-assets/member-avatars/member-arjun-p.png";
import meeraAvatar from "../assets/community-section-assets/member-avatars/member-meera-k.png";
import devAvatar from "../assets/community-section-assets/member-avatars/member-dev-t.png";

/* Skool logo */
import skoolLogo from "../assets/community-section-assets/skool-logo/skool-seeklogo.svg";

/* Community benefit icons */
import discussionsIcon from "../assets/community-section-assets/community-icons/exclusive-discussions.svg";
import studyGroupsIcon from "../assets/community-section-assets/community-icons/study-groups.svg";
import projectFeedbackIcon from "../assets/community-section-assets/community-icons/project-feedback.svg";
import careerSupportIcon from "../assets/community-section-assets/community-icons/career-support.svg";
import liveEventsIcon from "../assets/community-section-assets/community-icons/live-events.svg";
import SplitGradientHeading from "./SplitGradientHeading";

/* Community stat icons */
import membersIcon from "../assets/community-section-assets/stats-icons/members-count.svg";
import onlineIcon from "../assets/community-section-assets/stats-icons/online-count.svg";
import eventsIcon from "../assets/community-section-assets/stats-icons/events-count.svg";

const memberProjects = [
  {
    title: "Sentiment Analysis App",
    member: "Risha S.",
    avatar: rishaAvatar,
    projectIcon: sentimentProjectIcon,
    downloads: "1.2K",
    likes: "128",
  },
  {
    title: "AI Resume Analyzer",
    member: "Arjun P.",
    avatar: arjunAvatar,
    projectIcon: resumeProjectIcon,
    downloads: "960",
    likes: "96",
  },
  {
    title: "Stock Price Predictor",
    member: "Meera K.",
    avatar: meeraAvatar,
    projectIcon: stockProjectIcon,
    downloads: "1.1K",
    likes: "110",
  },
  {
    title: "Chatbot with RAG",
    member: "Dev T.",
    avatar: devAvatar,
    projectIcon: ragProjectIcon,
    downloads: "890",
    likes: "94",
  },
];

const communityBenefits = [
  {
    title: "Exclusive Discussions",
    icon: discussionsIcon,
  },
  {
    title: "Study Groups",
    icon: studyGroupsIcon,
  },
  {
    title: "Project Feedback",
    icon: projectFeedbackIcon,
  },
  {
    title: "Career Support",
    icon: careerSupportIcon,
  },
  {
    title: "Live Events",
    icon: liveEventsIcon,
  },
];

const communityStats = [
  {
    value: "8.5K",
    label: "Members",
    icon: membersIcon,
  },
  {
    value: "320+",
    label: "Online",
    icon: onlineIcon,
  },
  {
    value: "120+",
    label: "Events",
    icon: eventsIcon,
  },
];

function SectionAction({ children, href }) {
  return (
    <a
      href={href}
      className="
        inline-flex
        h-10
        w-full
        shrink-0
        items-center
        justify-center
        gap-1.5
        rounded-[10px]
        border
        border-orange-200
        bg-white
        px-4
        text-[12px]
        font-bold
        text-orange-600
        transition
        duration-200
        hover:-translate-y-0.5
        hover:border-orange-300
        hover:bg-orange-50
        sm:w-auto
      "
    >
      {children}
    </a>
  );
}

function ProjectCard({ project, isLight }) {
  return (
    <article
      className={`
        group
        flex
        min-h-[280px]
        flex-col
        overflow-hidden
        rounded-[16px]
        border
        transition
        duration-300
        hover:-translate-y-1
        ${
          isLight
            ? "border-[#e6eaf1] bg-white hover:border-blue-200 hover:shadow-[0_18px_42px_-32px_rgba(37,99,235,0.34)]"
            : "border-[#22344b] bg-[#0c1a2d] hover:border-[#2f4b68] hover:shadow-[0_18px_42px_-32px_rgba(37,99,235,0.18)]"
        }
      `}
    >
      <div className="flex min-h-[118px] items-center justify-center px-4 pt-4">
        <img
          src={project.projectIcon}
          alt={`${project.title} project`}
          className="
            h-[92px]
            w-[92px]
            object-contain
            transition
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4">
        <h3
          className={`
            mx-auto
            min-h-[42px]
            max-w-[160px]
            text-center
            text-[15px]
            font-bold
            leading-[1.3]
            tracking-[-0.02em]
            ${isLight ? "text-[#111a3b]" : "text-white"}
          `}
        >
          {project.title}
        </h3>

        <div className="mt-5 flex items-center gap-2.5">
          <img
            src={project.avatar}
            alt={project.member}
            className="
              h-9
              w-9
              rounded-full
              border
              border-slate-200
              object-cover
            "
          />

          <span className={`text-[13px] font-semibold ${isLight ? "text-[#5d687d]" : "text-slate-300"}`}>
            {project.member}
          </span>
        </div>

        <div
          className={`
            mt-auto
            flex
            items-center
            justify-between
            border-t
            pt-4
            text-[12px]
            font-semibold
            ${isLight ? "border-[#edf0f4] text-[#778196]" : "border-[#22344b] text-slate-400"}
          `}
        >
          <span className="inline-flex items-center gap-1.5">
            <Download className="h-4 w-4" strokeWidth={2} />
            {project.downloads}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Heart className="h-4 w-4" strokeWidth={2} />
            {project.likes}
          </span>
        </div>
      </div>
    </article>
  );
}

function CommunityStat({ stat, index, isLight }) {
  return (
    <div
      className={`
        flex
        min-w-0
        flex-1
        flex-col
        items-center
        px-3
        text-center
        ${
          index > 0
            ? isLight
              ? "sm:border-l sm:border-[#edf0f4]"
              : "sm:border-l sm:border-[#22344b]"
            : ""
        }
      `}
    >
      <img
        src={stat.icon}
        alt=""
        aria-hidden="true"
        className="h-10 w-10 object-contain"
      />

      <strong
        className={`
          mt-2
          text-[22px]
          font-extrabold
          leading-none
          tracking-[-0.035em]
          ${isLight ? "text-[#111a3b]" : "text-white"}
        `}
      >
        {stat.value}
      </strong>

      <span className={`mt-2 text-[11px] font-medium ${isLight ? "text-[#778196]" : "text-slate-400"}`}>
        {stat.label}
      </span>
    </div>
  );
}

function CommunityBenefit({ benefit, isLight }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={benefit.icon}
        alt=""
        aria-hidden="true"
        className="h-9 w-9 shrink-0 object-contain"
      />

      <span className={`text-[14px] font-semibold ${isLight ? "text-[#5a657a]" : "text-slate-300"}`}>
        {benefit.title}
      </span>
    </div>
  );
}

export default function ProjectsCommunitySection({ theme = "light" }) {
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section
      id="projects"
      className={`py-5 md:py-7 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}
    >
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
          {/* Projects panel */}
          <article
            className={`rounded-[22px] border px-5 py-6 sm:px-6 ${
              isLight
                ? "border-[#e4e9f1] bg-white shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
                : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
            }`}
          >
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <SplitGradientHeading
                theme={theme}
                className={`text-[24px] font-extrabold tracking-[-0.035em] sm:text-[28px] ${
                  isLight ? "text-[#111a3b]" : "text-white"
                }`}
                plain="Projects by Our"
                accent="Members"
              />

              <SectionAction href="#all-projects">
                View all
                <ArrowRight className="h-3.5 w-3.5" />
              </SectionAction>
            </div>

            <div
              className="
                projects-scroll
                mt-6
                flex
                snap-x
                snap-mandatory
                gap-4
                overflow-x-auto
                pb-2
                sm:grid
                sm:grid-cols-2
                sm:overflow-visible
                lg:grid-cols-4
              "
            >
              {memberProjects.map((project) => (
                <div
                  key={project.title}
                  className="
                    w-[82vw]
                    max-w-[230px]
                    shrink-0
                    snap-start
                    sm:w-[68vw]
                    md:w-auto
                    sm:max-w-none
                  "
                >
                  <ProjectCard project={project} isLight={isLight} />
                </div>
              ))}
            </div>
          </article>

          {/* Skool community panel */}
          <article
            id="community"
            className={`rounded-[22px] border px-5 py-6 sm:px-6 ${
              isLight
                ? "border-[#e4e9f1] bg-white shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
                : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
            }`}
          >
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <SplitGradientHeading
                theme={theme}
                className={`text-[24px] font-extrabold tracking-[-0.035em] sm:text-[28px] ${
                  isLight ? "text-[#111a3b]" : "text-white"
                }`}
                plain="Our Community on"
                accent="Skool"
              />

              <SectionAction href="https://www.skool.com/the-agent-lab-3899">
                Join Now
              </SectionAction>
            </div>

            <div
              className="
                mt-6
                grid
                gap-6
                lg:grid-cols-[1.08fr_.92fr]
                lg:items-stretch
              "
            >
              {/* Skool card */}
              <div
                className={`
                  flex
                  min-h-[280px]
                  flex-col
                  items-center
                  rounded-[18px]
                  border
                  px-5
                  py-5
                  text-center
                  ${isLight ? "border-[#e6eaf1] bg-[#fcfdff]" : "border-[#22344b] bg-[#0c1a2d]"}
                `}
              >
                <img
                  src={skoolLogo}
                  alt="Skool"
                  className="h-[54px] w-auto max-w-[190px] object-contain"
                />

                <h3
                  className={`
                    mt-2
                    text-[16px]
                    font-bold
                    tracking-[-0.02em]
                    ${isLight ? "text-[#111a3b]" : "text-white"}
                  `}
                >
                  AI Learning Community
                </h3>

                <div className="mt-6 grid w-full grid-cols-3 gap-4 sm:flex sm:items-start sm:justify-center sm:gap-0">
                  {communityStats.map((stat, index) => (
                    <CommunityStat
                      key={stat.label}
                      stat={stat}
                      index={index}
                      isLight={isLight}
                    />
                  ))}
                </div>

                <a
                  href="https://www.skool.com/the-agent-lab-3899"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-auto
                    inline-flex
                    min-h-[48px]
                    w-full
                    max-w-[300px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[11px]
                    bg-[#ff7218]
                    px-6
                    text-[15px]
                    font-bold
                    text-white
                    shadow-[0_13px_28px_-17px_rgba(249,115,22,0.72)]
                    transition
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#ee6814]
                  "
                >
                  Join on Skool
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Benefits */}
              <div
                className={`
                  flex
                  min-h-[280px]
                  flex-col
                  justify-center
                  gap-4
                  rounded-[18px]
                  px-3
                  py-4
                  sm:px-5
                  ${isLight ? "bg-[#fbfcfe]" : "bg-[#0c1a2d] border border-[#22344b]"}
                `}
              >
                {communityBenefits.map((benefit) => (
                  <CommunityBenefit
                    key={benefit.title}
                    benefit={benefit}
                    isLight={isLight}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
