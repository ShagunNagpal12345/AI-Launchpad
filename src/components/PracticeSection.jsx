import { ArrowRight, Trophy } from "lucide-react";
import SplitGradientHeading from "./SplitGradientHeading";

import sqlBackgroundLight from "../assets/Games/SQL.png";
import sqlBackgroundDark from "../assets/Games/SQL2.png";
import sqlCasinoImage from "../assets/Games/Casino.png";
import sqlBureauImage from "../assets/Games/SBI.png";

const sqlTags = [
  "Joins",
  "Window Functions",
  "CTEs",
  "Aggregations",
  "Case Studies",
  "Interview Practice",
];

const games = [
  {
    title: "SQL Casino",
    description: "Solve queries and win chips. Beat the house.",
    achievementLabel: "Top Player:",
    achievementValue: "data_wizard",
    image: sqlCasinoImage,
    accent: "violet",
  },
  {
    title: "SQL Bureau of Investigation",
    description: "Solve cases using SQL. Find the truth.",
    achievementLabel: "Top Detective:",
    achievementValue: "query_master",
    image: sqlBureauImage,
    accent: "orange",
  },
];

function SqlPracticeCard({ isLight }) {
  const sqlBackground = isLight ? sqlBackgroundLight : sqlBackgroundDark;

  return (
    <article
      className={`relative isolate min-h-[440px] overflow-hidden rounded-[24px] border ${
        isLight
          ? "border-slate-200/90 bg-white shadow-[0_18px_48px_-40px_rgba(15,23,42,0.25)]"
          : "border-white/[0.08] bg-[#0c1a2d] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
      }`}
    >
      <img
        src={sqlBackground}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 h-full w-full
          object-cover object-center opacity-[0.68]
        "
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${
          isLight
            ? "bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.96)_46%,rgba(255,255,255,0.74)_72%,rgba(255,255,255,0.38)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(7,17,30,0.78)_0%,rgba(7,17,30,0.74)_34%,rgba(7,17,30,0.66)_58%,rgba(7,17,30,0.52)_100%)] sm:bg-[linear-gradient(90deg,rgba(7,17,30,0.96)_0%,rgba(7,17,30,0.86)_42%,rgba(7,17,30,0.58)_68%,rgba(7,17,30,0.24)_100%)]"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-28 ${
          isLight
            ? "bg-gradient-to-t from-white/85 to-transparent"
            : "bg-gradient-to-t from-[#07111e]/92 to-transparent"
        }`}
      />

      <div className="relative z-10 flex min-h-[440px] flex-col p-5 sm:p-7">
        <div className="max-w-[560px]">
          <div className="flex flex-wrap items-center gap-3">
        <SplitGradientHeading
          theme={isLight ? "light" : "dark"}
          className={`text-[26px] font-extrabold leading-tight tracking-[-0.035em] sm:text-[29px] ${
            isLight ? "text-[#111a3b]" : "text-white"
          }`}
          plain="SQL Practice"
          accent="Arena"
        />

            <span
              className="
                rounded-[9px] border border-orange-200 bg-orange-50/90
                px-3.5 py-1.5 text-[16px] font-extrabold text-orange-600
              "
            >
              500+
            </span>
          </div>

          <p className={`mt-4 max-w-[520px] text-[14px] font-medium leading-6 ${
            isLight ? "text-slate-600" : "text-slate-300"
          }`}>
            500+ unique SQL questions across all key topics
          </p>

          <div className="mt-6 flex max-w-[560px] flex-wrap gap-2.5">
            {sqlTags.map((tag) => (
              <span
                key={tag}
                className={`rounded-[9px] border px-4 py-2 text-[12px] font-semibold backdrop-blur-sm ${
                  isLight
                    ? "border-slate-200 bg-white/75 text-slate-600 shadow-[0_6px_16px_-14px_rgba(15,23,42,0.25)]"
                    : "border-white/[0.08] bg-white/[0.06] text-slate-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://practice.datasenseai.com/"
            target="_blank"
            rel="noreferrer"
            className="
              mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-[11px]
              bg-[#f97316] px-6 py-3.5 text-[14px] font-bold text-white
              shadow-[0_12px_26px_-17px_rgba(249,115,22,0.7)]
              transition duration-200 hover:-translate-y-0.5 hover:bg-[#ea6b12]
              sm:w-auto
            "
          >
            Start Practising SQL
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </div>

        <p className={`mt-auto pt-7 text-[11px] font-medium tracking-[0.01em] ${
          isLight ? "text-slate-500" : "text-slate-400"
        }`}>
          Track progress&nbsp;&nbsp;•&nbsp;&nbsp;Earn badges&nbsp;&nbsp;•&nbsp;&nbsp;Improve daily
        </p>
      </div>
    </article>
  );
}

function GameCard({ game, isLight }) {
  const isViolet = game.accent === "violet";

  return (
    <article
      className={`
        group overflow-hidden rounded-[17px] border
        transition duration-300 hover:-translate-y-0.5
        ${
          isViolet
            ? isLight
              ? "border-violet-200/80 bg-white hover:shadow-[0_16px_36px_-30px_rgba(124,58,237,0.34)]"
              : "border-violet-400/20 bg-[#0f1c30] hover:shadow-[0_16px_36px_-30px_rgba(124,58,237,0.2)]"
            : isLight
              ? "border-orange-200/90 bg-white hover:shadow-[0_16px_36px_-30px_rgba(249,115,22,0.3)]"
              : "border-orange-400/20 bg-[#0f1c30] hover:shadow-[0_16px_36px_-30px_rgba(249,115,22,0.18)]"
        }
      `}
    >
      <div className="relative h-[175px] overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="
            h-full w-full object-cover
            transition duration-500 group-hover:scale-[1.02]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t from-black/12 via-transparent to-transparent
          "
        />
      </div>

      <div className="flex min-h-[190px] flex-col px-5 pb-5 pt-4">
        <h3
          className={`text-[18px] font-extrabold leading-[1.18] tracking-[-0.03em] ${
            isLight ? "text-[#111a3b]" : "text-white"
          }`}
        >
          {game.title}
        </h3>

        <p className={`mt-3 text-[13px] font-medium leading-5 ${
          isLight ? "text-slate-600" : "text-slate-300"
        }`}>
          {game.description}
        </p>

        <div
          className={`mt-auto flex items-center gap-2.5 border-t pt-4 text-[11px] font-medium ${
            isLight ? "border-slate-200/80 text-slate-500" : "border-white/[0.08] text-slate-400"
          }`}
        >
          <span
            className={`
              grid h-8 w-8 shrink-0 place-items-center rounded-full
              ${
                isViolet
                  ? "bg-violet-50 text-violet-600"
                  : "bg-orange-50 text-orange-600"
              }
            `}
          >
            <Trophy className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>

          <span>
            {game.achievementLabel}{" "}
            <strong
              className={
                isViolet ? "text-violet-700" : "text-orange-700"
              }
            >
              {game.achievementValue}
            </strong>
          </span>
        </div>
      </div>
    </article>
  );
}

function GamingArenaCard({ isLight }) {
  return (
    <article
      className={`min-h-[440px] rounded-[24px] border p-6 ${
        isLight
          ? "border-slate-200/90 bg-white shadow-[0_18px_48px_-40px_rgba(15,23,42,0.25)]"
          : "border-white/[0.08] bg-[#0c1a2d] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
      }`}
    >
      <div>
        <SplitGradientHeading
          theme={isLight ? "light" : "dark"}
          className={`text-[26px] font-extrabold leading-tight tracking-[-0.035em] sm:text-[29px] ${
            isLight ? "text-[#111a3b]" : "text-white"
          }`}
          plain="Gaming"
          accent="Arena"
        />

        <p className={`mt-2 text-[13px] font-medium leading-5 ${
          isLight ? "text-slate-600" : "text-slate-300"
        }`}>
          Learn SQL by playing. Compete. Climb the leaderboard.
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {games.map((game) => (
          <GameCard key={game.title} game={game} isLight={isLight} />
        ))}
      </div>

      <a
        href="https://datasenseai.com/games-arena"
        target="_blank"
        rel="noreferrer"
        className="
          mx-auto mt-4 flex w-fit items-center gap-2
          text-[12px] font-semibold text-blue-600
          transition duration-200 hover:gap-3 hover:text-blue-700
        "
      >
        Explore All Games
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
      </a>
    </article>
  );
}

export default function PracticeSection({ theme = "light" }) {
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section
      id="practice"
      className={`py-4 md:py-5 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}
    >
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <SqlPracticeCard isLight={isLight} />
          <GamingArenaCard isLight={isLight} />
        </div>
      </div>
    </section>
  );
}
