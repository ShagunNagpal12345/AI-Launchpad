import {
  Award,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Flame,
  FolderKanban,
  Gauge,
  Home,
  Settings,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const navigationItems = [
  {
    label: "Home",
    icon: Home,
    active: true,
  },
  {
    label: "My Learning",
    icon: BookOpen,
  },
  {
    label: "Live Classes",
    icon: CalendarDays,
  },
  {
    label: "Projects",
    icon: FolderKanban,
  },
  {
    label: "Practice Arena",
    icon: Target,
  },
  {
    label: "Community",
    icon: Users,
  },
  {
    label: "Achievements",
    icon: Trophy,
  },
  {
    label: "Resources",
    icon: Database,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

const attendeeColors = [
  "bg-orange-200",
  "bg-emerald-200",
  "bg-blue-200",
  "bg-violet-200",
];

function DataSenseLogo({ isLight }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        <path
          d="M24 4 40 13v19L24 42 8 32V13L24 4Z"
          fill="none"
          stroke="#31b77a"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <path
          d="M24 4 40 13 24 22 8 13 24 4Z"
          fill="none"
          stroke="#ef526f"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <path
          d="m8 13 16 9v20L8 32V13Z"
          fill="none"
          stroke="#4ba5e8"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <path
          d="m40 13-16 9 8 5-8 5"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div>
        <div
          className={`
            text-[15px]
            font-black
            leading-none
            ${
              isLight
                ? "text-[#071635]"
                : "text-white"
            }
          `}
        >
          DataSense
        </div>

        <div
          className="
            mt-1
            text-[8px]
            font-extrabold
            uppercase
            tracking-[0.22em]
            text-orange-500
          "
        >
          AI Launchpad
        </div>
      </div>
    </div>
  );
}

function UserAvatar() {
  return (
    <div
      className="
        grid
        h-7
        w-7
        place-items-center
        rounded-full
        border-2
        border-white
        bg-gradient-to-br
        from-orange-200
        to-amber-100
        text-[9px]
        font-bold
        text-[#071635]
      "
    >
      AS
    </div>
  );
}

function ProgressBar({
  value,
  dark = false,
}) {
  return (
    <div
      className={`
        h-1.5
        overflow-hidden
        rounded-full
        ${
          dark
            ? "bg-white/15"
            : "bg-slate-100"
        }
      `}
    >
      <div
        className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-emerald-400
          to-teal-400
          transition-all
          duration-1000
        "
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}

function Sidebar({ isLight }) {
  return (
    <aside
      className={`
        hidden
        w-[132px]
        shrink-0
        border-r
        px-3
        py-4
        xl:block
        ${
          isLight
            ? "border-slate-100"
            : "border-white/10"
        }
      `}
    >
      <nav className="mt-2 space-y-1.5">
        {navigationItems.map(
          ({
            label,
            icon: Icon,
            active,
          }) => (
            <div
              key={label}
              className={`
                flex
                items-center
                gap-2
                rounded-lg
                px-2.5
                py-2
                text-[10px]
                font-semibold
                transition
                duration-200
                ${
                  active
                    ? isLight
                      ? "bg-blue-50 text-blue-700"
                      : "bg-blue-500/15 text-blue-300"
                    : isLight
                      ? "text-slate-600 hover:bg-slate-50"
                      : "text-slate-400 hover:bg-white/[0.04]"
                }
              `}
            >
              <Icon
                className="h-3.5 w-3.5"
                strokeWidth={2}
              />

              <span>{label}</span>
            </div>
          ),
        )}
      </nav>
    </aside>
  );
}

function RocketIllustration() {
  return (
    <div className="absolute bottom-7 right-7">
      <div className="relative grid h-20 w-20 place-items-center">
        <div className="absolute bottom-0 h-6 w-20 rounded-[50%] bg-blue-500/20" />

        <div className="relative -rotate-6">
          <div
            className="
              relative
              h-16
              w-9
              rounded-[50%_50%_38%_38%]
              bg-gradient-to-b
              from-white
              to-slate-300
              shadow-lg
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-4
                h-4
                w-4
                -translate-x-1/2
                rounded-full
                border-[3px]
                border-indigo-500
                bg-indigo-200
              "
            />

            <div
              className="
                absolute
                -bottom-5
                left-1/2
                h-7
                w-3
                -translate-x-1/2
                bg-gradient-to-b
                from-orange-400
                via-orange-500
                to-transparent
                [clip-path:polygon(50%_100%,0_0,100%_0)]
              "
            />

            <div className="absolute -left-3 bottom-2 h-6 w-4 rounded-l-full bg-indigo-400" />
            <div className="absolute -right-3 bottom-2 h-6 w-4 rounded-r-full bg-indigo-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

function JourneyCard() {
  return (
    <article
      className="
        relative
        min-h-[198px]
        overflow-hidden
        rounded-2xl
        bg-[#04133e]
        p-5
        text-white
      "
    >
      <div className="relative z-10 max-w-[68%]">
        <p className="text-[12px] font-semibold text-white/90">
          Your AI Learning Journey
        </p>

        <p className="mt-5 text-[10px] text-white/65">
          Current Path
        </p>

        <h3 className="mt-1 text-[18px] font-extrabold">
          AI Engineer
        </h3>

        <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-3">
          <ProgressBar
            value={68}
            dark
          />

          <span className="text-[11px] font-bold">
            68%
          </span>
        </div>

        <p className="mt-6 text-[10px] text-white/65">
          Next Milestone
        </p>

        <p className="mt-1 text-[11px] font-medium">
          Build &amp; Deploy an AI Web App
        </p>
      </div>

      <RocketIllustration />
    </article>
  );
}

function AttendeeAvatars({ isLight }) {
  return (
    <div className="flex items-center">
      {attendeeColors.map(
        (color, index) => (
          <div
            key={color}
            className={`
              grid
              h-6
              w-6
              place-items-center
              rounded-full
              border-2
              ${
                isLight
                  ? "border-white"
                  : "border-[#071329]"
              }
              ${color}
              ${
                index
                  ? "-ml-2"
                  : ""
              }
            `}
          >
            <Users className="h-3 w-3 text-slate-700" />
          </div>
        ),
      )}
    </div>
  );
}

function UpcomingClassCard({ isLight }) {
  return (
    <article
      className={`
        rounded-2xl
        border
        p-4
        ${
          isLight
            ? "border-slate-100 bg-white"
            : "border-white/10 bg-white/[0.04]"
        }
      `}
    >
      <div className="flex items-center justify-between">
        <h3
          className={`
            text-[12px]
            font-bold
            ${
              isLight
                ? "text-[#071635]"
                : "text-white"
            }
          `}
        >
          Upcoming Live Class
        </h3>

        <button
          type="button"
          className="text-[9px] font-semibold text-blue-600"
        >
          View All
        </button>
      </div>

      <div className="mt-5 flex gap-3">
        <div
          className="
            grid
            h-12
            w-12
            shrink-0
            place-items-center
            rounded-xl
            bg-blue-50
            text-blue-600
          "
        >
          <CalendarDays className="h-5 w-5" />
        </div>

        <div>
          <h4
            className={`
              text-[11px]
              font-bold
              leading-5
              ${
                isLight
                  ? "text-[#071635]"
                  : "text-white"
              }
            `}
          >
            Building RAG Systems
            <br />
            From Scratch
          </h4>

          <p
            className={`
              mt-2
              text-[9px]
              ${
                isLight
                  ? "text-slate-500"
                  : "text-slate-400"
              }
            `}
          >
            Sunday, 26 May · 8:00 PM IST
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center">
          <AttendeeAvatars isLight={isLight} />

          <span
            className={`
              ml-2
              whitespace-nowrap
              text-[9px]
              ${
                isLight
                  ? "text-slate-500"
                  : "text-slate-400"
              }
            `}
          >
            +120 attending
          </span>
        </div>

        <button
          type="button"
          className="
            shrink-0
            rounded-lg
            bg-gradient-to-r
            from-blue-600
            to-indigo-500
            px-4
            py-2
            text-[9px]
            font-bold
            text-white
          "
        >
          Join Live Class
        </button>
      </div>
    </article>
  );
}

function ContinueLearningCard({ isLight }) {
  return (
    <article
      className={`
        rounded-2xl
        border
        p-4
        ${
          isLight
            ? "border-slate-100 bg-white"
            : "border-white/10 bg-white/[0.04]"
        }
      `}
    >
      <div className="flex gap-4">
        <div
          className="
            grid
            h-[78px]
            w-[78px]
            shrink-0
            place-items-center
            rounded-xl
            bg-gradient-to-br
            from-indigo-700
            to-violet-950
          "
        >
          <Code2 className="h-8 w-8 text-cyan-300" />
        </div>

        <div className="min-w-0 flex-1">
          <h4
            className={`
              text-[12px]
              font-bold
              ${
                isLight
                  ? "text-[#071635]"
                  : "text-white"
              }
            `}
          >
            Agent Builder
          </h4>

          <p
            className={`
              mt-2
              text-[9px]
              ${
                isLight
                  ? "text-slate-500"
                  : "text-slate-400"
              }
            `}
          >
            Build AI agents that can think, plan and act
          </p>

          <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-3">
            <ProgressBar value={65} />

            <span
              className={`
                text-[10px]
                font-bold
                ${
                  isLight
                    ? "text-[#071635]"
                    : "text-white"
                }
              `}
            >
              65%
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <span
              className={`
                text-[9px]
                ${
                  isLight
                    ? "text-slate-500"
                    : "text-slate-400"
                }
              `}
            >
              12 / 18 Lessons Completed
            </span>

            <button
              type="button"
              className={`
                rounded-lg
                border
                px-4
                py-2
                text-[9px]
                font-semibold
                ${
                  isLight
                    ? "border-slate-200 text-[#071635]"
                    : "border-white/15 text-white"
                }
              `}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ActiveProjectCard({ isLight }) {
  return (
    <article
      className={`
        rounded-2xl
        border
        p-4
        ${
          isLight
            ? "border-slate-100 bg-white"
            : "border-white/10 bg-white/[0.04]"
        }
      `}
    >
      <div className="flex gap-4">
        <div
          className="
            grid
            h-12
            w-12
            shrink-0
            place-items-center
            rounded-xl
            bg-gradient-to-br
            from-emerald-400
            to-teal-500
            text-white
          "
        >
          <Code2 className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <h4
            className={`
              text-[12px]
              font-bold
              ${
                isLight
                  ? "text-[#071635]"
                  : "text-white"
              }
            `}
          >
            Build a RAG Assistant
          </h4>

          <p
            className={`
              mt-2
              text-[9px]
              leading-4
              ${
                isLight
                  ? "text-slate-500"
                  : "text-slate-400"
              }
            `}
          >
            Create a production-ready AI assistant with your own data
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-3">
        <ProgressBar value={72} />

        <span
          className={`
            text-[10px]
            font-bold
            ${
              isLight
                ? "text-[#071635]"
                : "text-white"
            }
          `}
        >
          72%
        </span>
      </div>

      <div
        className={`
          mt-4
          flex
          items-center
          justify-between
          text-[9px]
          ${
            isLight
              ? "text-slate-500"
              : "text-slate-400"
          }
        `}
      >
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
          Milestone 3/5
        </span>

        <span className="flex items-center gap-1.5">
          <Gauge className="h-3.5 w-3.5" />
          Due in 5 days
        </span>
      </div>
    </article>
  );
}

function SmallCard({
  title,
  children,
  isLight,
}) {
  return (
    <article
      className={`
        rounded-xl
        border
        p-3
        ${
          isLight
            ? "border-slate-100 bg-white"
            : "border-white/10 bg-white/[0.04]"
        }
      `}
    >
      <h4
        className={`
          text-[10px]
          font-bold
          ${
            isLight
              ? "text-[#071635]"
              : "text-white"
          }
        `}
      >
        {title}
      </h4>

      <div className="mt-3">
        {children}
      </div>
    </article>
  );
}

function PracticeStreak({ isLight }) {
  const barHeights = [
    18,
    28,
    22,
    35,
    44,
    56,
    68,
  ];

  return (
    <SmallCard
      title="Practice Streak"
      isLight={isLight}
    >
      <div className="flex items-end justify-between">
        <div>
          <div
            className={`
              flex
              items-center
              gap-2
              text-[11px]
              font-bold
              ${
                isLight
                  ? "text-[#071635]"
                  : "text-white"
              }
            `}
          >
            <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
            5 Days
          </div>

          <p className="mt-2 text-[8px] text-slate-500">
            Keep it up!
          </p>
        </div>

        <div className="flex h-12 items-end gap-1">
          {barHeights.map(
            (height, index) => (
              <span
                key={index}
                className="
                  w-2
                  rounded-t
                  bg-gradient-to-t
                  from-emerald-400
                  to-green-300
                "
                style={{
                  height,
                }}
              />
            ),
          )}
        </div>
      </div>
    </SmallCard>
  );
}

function CommunityActivity({ isLight }) {
  return (
    <SmallCard
      title="Community Activity"
      isLight={isLight}
    >
      <p className="text-[9px] text-slate-500">
        32 new discussions
      </p>

      <p className="mt-1 text-[9px] text-slate-500">
        18 projects shared this week
      </p>

      <div className="mt-3 flex items-center">
        <AttendeeAvatars isLight={isLight} />

        <span className="ml-2 text-[8px] text-slate-500">
          +86
        </span>
      </div>
    </SmallCard>
  );
}

function RecentAchievement({ isLight }) {
  return (
    <SmallCard
      title="Recent Achievement"
      isLight={isLight}
    >
      <div className="flex items-center gap-3">
        <div
          className="
            grid
            h-10
            w-10
            shrink-0
            place-items-center
            rounded-full
            border-2
            border-orange-400
            bg-orange-50
            text-orange-500
          "
        >
          <Award className="h-5 w-5" />
        </div>

        <div>
          <p
            className={`
              text-[9px]
              font-bold
              leading-4
              ${
                isLight
                  ? "text-[#071635]"
                  : "text-white"
              }
            `}
          >
            Prompt Engineering
            <br />
            Professional
          </p>

          <p className="mt-1 text-[8px] text-slate-500">
            Completed on 18 May 2024
          </p>
        </div>
      </div>
    </SmallCard>
  );
}

export default function HeroAnimation({
  theme = "light",
}) {
  const isLight = theme === "light";

  return (
    <div
      className={`
        overflow-hidden
        rounded-[24px]
        border
        shadow-[0_28px_70px_-36px_rgba(15,23,42,0.28)]
        ${
          isLight
            ? "border-slate-100 bg-white/95"
            : "border-white/10 bg-[#071329]/95"
        }
      `}
    >
      <header
        className={`
          flex
          h-[62px]
          items-center
          justify-between
          border-b
          px-5
          ${
            isLight
              ? "border-slate-100"
              : "border-white/10"
          }
        `}
      >
        <div className="flex items-center gap-10">
          <DataSenseLogo isLight={isLight} />

          <span
            className={`
              text-[13px]
              font-bold
              ${
                isLight
                  ? "text-[#071635]"
                  : "text-white"
              }
            `}
          >
            Dashboard
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell
              className={`
                h-4
                w-4
                ${
                  isLight
                    ? "text-[#071635]"
                    : "text-white"
                }
              `}
            />

            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
          </div>

          <UserAvatar />

          <span
            className={`
              hidden
              text-[9px]
              font-medium
              sm:inline
              ${
                isLight
                  ? "text-[#071635]"
                  : "text-white"
              }
            `}
          >
            Ananya Singh
          </span>

          <ChevronDown
            className={`
              h-3
              w-3
              ${
                isLight
                  ? "text-slate-500"
                  : "text-slate-400"
              }
            `}
          />
        </div>
      </header>

      <div className="flex">
        <Sidebar isLight={isLight} />

        <main className="min-w-0 flex-1 p-4">
          <div className="grid gap-4 md:grid-cols-[1.25fr_1fr]">
            <JourneyCard />

            <UpcomingClassCard isLight={isLight} />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[1.25fr_1fr]">
            <section>
              <h3
                className={`
                  mb-3
                  text-[11px]
                  font-bold
                  ${
                    isLight
                      ? "text-[#071635]"
                      : "text-white"
                  }
                `}
              >
                Continue Learning
              </h3>

              <ContinueLearningCard isLight={isLight} />
            </section>

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h3
                  className={`
                    text-[11px]
                    font-bold
                    ${
                      isLight
                        ? "text-[#071635]"
                        : "text-white"
                    }
                  `}
                >
                  Active Project
                </h3>

                <button
                  type="button"
                  className="text-[9px] font-semibold text-blue-600"
                >
                  View All
                </button>
              </div>

              <ActiveProjectCard isLight={isLight} />
            </section>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <PracticeStreak isLight={isLight} />

            <CommunityActivity isLight={isLight} />

            <RecentAchievement isLight={isLight} />
          </div>
        </main>
      </div>
    </div>
  );
}