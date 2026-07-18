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
        min-h-[238px]
        flex-col
        overflow-hidden
        rounded-[16px]
        border
        transition
        duration-300
        hover:-translate-y-1
        sm:min-h-[252px]
        md:min-h-[268px]
        ${
          isLight
            ? "border-[#e6eaf1] bg-white hover:border-blue-200 hover:shadow-[0_18px_42px_-32px_rgba(37,99,235,0.34)]"
            : "border-[#22344b] bg-[#0c1a2d] hover:border-[#2f4b68] hover:shadow-[0_18px_42px_-32px_rgba(37,99,235,0.18)]"
        }
      `}
    >
      <div className="flex min-h-[86px] items-center justify-center px-3 pt-4 sm:min-h-[96px] sm:px-4 md:min-h-[110px]">
        <img
          src={project.projectIcon}
          alt={`${project.title} project`}
          className="
            h-[62px]
            w-[62px]
            object-contain
            transition
            duration-300
            group-hover:scale-105
            sm:h-[72px]
            sm:w-[72px]
            md:h-[86px]
            md:w-[86px]
          "
        />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3.5 sm:px-4 sm:pb-4">
        <h3
          className={`
            mx-auto
            min-h-[34px]
            max-w-[132px]
            text-center
            text-[13px]
            font-bold
            leading-[1.25]
            tracking-[-0.02em]
            sm:min-h-[38px]
            sm:max-w-[145px]
            sm:text-[14px]
            md:min-h-[42px]
            md:max-w-[160px]
            md:text-[15px]
            ${isLight ? "text-[#111a3b]" : "text-white"}
          `}
        >
          {project.title}
        </h3>

        <div className="mt-3.5 flex items-center gap-2 sm:mt-4 md:mt-5">
          <img
            src={project.avatar}
            alt={project.member}
            className="
              h-7
              w-7
              rounded-full
              border
              border-slate-200
              object-cover
              sm:h-8
              sm:w-8
              md:h-9
              md:w-9
            "
          />

          <span className={`text-[11px] font-semibold sm:text-[12px] md:text-[13px] ${isLight ? "text-[#5d687d]" : "text-slate-300"}`}>
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
            pt-3
            text-[10px]
            font-semibold
            sm:pt-3.5
            sm:text-[11px]
            md:pt-4
            md:text-[12px]
            ${isLight ? "border-[#edf0f4] text-[#778196]" : "border-[#22344b] text-slate-400"}
          `}
        >
          <span className="inline-flex items-center gap-1">
            <Download className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2} />
            {project.downloads}
          </span>

          <span className="inline-flex items-center gap-1">
            <Heart className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2} />
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
        rounded-[14px]
        px-2
        py-3
        text-center
        sm:px-3
        sm:py-0
        ${
          index > 0
            ? isLight
              ? "border border-[#edf0f4] sm:border-l sm:border-y-0 sm:border-r-0 sm:border-[#edf0f4]"
              : "border border-[#22344b] sm:border-l sm:border-y-0 sm:border-r-0 sm:border-[#22344b]"
            : isLight
              ? "border border-[#edf0f4] sm:border-0"
              : "border border-[#22344b] sm:border-0"
        }
      `}
    >
      <img
        src={stat.icon}
        alt=""
        aria-hidden="true"
        className="h-8 w-8 object-contain sm:h-10 sm:w-10"
      />

      <strong
        className={`
          mt-2
          text-[18px]
          font-extrabold
          leading-none
          tracking-[-0.035em]
          sm:text-[22px]
          ${isLight ? "text-[#111a3b]" : "text-white"}
        `}
      >
        {stat.value}
      </strong>

      <span className={`mt-1.5 text-[10px] font-medium sm:mt-2 sm:text-[11px] ${isLight ? "text-[#778196]" : "text-slate-400"}`}>
        {stat.label}
      </span>
    </div>
  );
}

function CommunityBenefit({ benefit, isLight }) {
  return (
    <div className="flex items-center gap-3 rounded-[14px] px-2 py-1.5 sm:px-0 sm:py-0">
      <img
        src={benefit.icon}
        alt=""
        aria-hidden="true"
        className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
      />

      <span className={`text-[13px] font-semibold sm:text-[14px] ${isLight ? "text-[#5a657a]" : "text-slate-300"}`}>
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
      className={`py-4 md:py-7 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}
    >
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
          {/* Projects panel */}
          <article
            className={`rounded-[22px] border px-4 py-5 sm:px-6 sm:py-6 ${
              isLight
                ? "border-[#e4e9f1] bg-white shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
                : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
            }`}
          >
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <SplitGradientHeading
                theme={theme}
                className={`text-[21px] font-extrabold tracking-[-0.035em] sm:text-[24px] md:text-[28px] ${
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
                mt-5
                grid
                grid-cols-2
                gap-3
                sm:mt-6
                sm:gap-4
                md:grid-cols-2
                lg:grid-cols-4
              "
            >
              {memberProjects.map((project) => (
                <div key={project.title}>
                  <ProjectCard project={project} isLight={isLight} />
                </div>
              ))}
            </div>
          </article>

          {/* Skool community panel */}
          <article
            id="community"
            className={`rounded-[22px] border px-4 py-5 sm:px-6 sm:py-6 ${
              isLight
                ? "border-[#e4e9f1] bg-white shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
                : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
            }`}
          >
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <SplitGradientHeading
                theme={theme}
                className={`text-[21px] font-extrabold tracking-[-0.035em] sm:text-[24px] md:text-[28px] ${
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
                mt-5
                grid
                gap-4
                sm:mt-6
                sm:gap-6
                lg:grid-cols-[1.08fr_.92fr]
                lg:items-stretch
              "
            >
              {/* Skool card */}
              <div
                className={`
                  flex
                  min-h-[unset]
                  flex-col
                  items-center
                  rounded-[18px]
                  border
                  px-4
                  py-5
                  text-center
                  sm:min-h-[260px]
                  sm:px-5
                  ${isLight ? "border-[#e6eaf1] bg-[#fcfdff]" : "border-[#22344b] bg-[#0c1a2d]"}
                `}
              >
                <img
                  src={skoolLogo}
                  alt="Skool"
                  className="h-[46px] w-auto max-w-[160px] object-contain sm:h-[54px] sm:max-w-[190px]"
                />

                <h3
                  className={`
                    mt-2
                    text-[15px]
                    font-bold
                    tracking-[-0.02em]
                    sm:text-[16px]
                    ${isLight ? "text-[#111a3b]" : "text-white"}
                  `}
                >
                  AI Learning Community
                </h3>

                <div className="mt-5 grid w-full grid-cols-1 gap-2.5 sm:mt-6 sm:grid-cols-3 sm:gap-4 md:flex md:items-start md:justify-center md:gap-0">
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
                    mt-5
                    inline-flex
                    min-h-[46px]
                    w-full
                    max-w-[300px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[11px]
                    bg-[#ff7218]
                    px-6
                    text-[14px]
                    font-bold
                    text-white
                    shadow-[0_13px_28px_-17px_rgba(249,115,22,0.72)]
                    transition
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#ee6814]
                    sm:min-h-[48px]
                    sm:text-[15px]
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
                  min-h-[unset]
                  flex-col
                  justify-center
                  gap-3
                  rounded-[18px]
                  px-4
                  py-4
                  sm:px-5
                  sm:gap-4
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
