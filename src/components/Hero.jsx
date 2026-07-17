import {
  ArrowRight,
  Play,
} from "lucide-react";

import heroBackDark from "../assets/hero/herobackdark.png";
import heroBackDarkVideo from "../assets/hero/herobackdark.mp4";
import heroBackLight from "../assets/hero/herobacklight.png";
import heroBackLightVideo from "../assets/hero/herobacklight.mp4";

export default function Hero({ theme = "dark" }) {
  const isLight = theme === "light";
  const heroBackground = isLight ? heroBackLight : heroBackDark;
  const heroBackgroundVideo = isLight ? heroBackLightVideo : heroBackDarkVideo;

  return (
    <section
      id="top"
      className={`relative isolate overflow-hidden ${
        isLight ? "bg-[#f8fafc]" : "bg-[#030b18]"
      }`}
    >
      {/* Desktop background */}
      <video
        key={heroBackgroundVideo}
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
        poster={heroBackground}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          h-full
          w-full
          select-none
          object-cover
          object-center
          lg:block
        "
      >
        <source src={heroBackgroundVideo} type="video/mp4" />
      </video>

      {/* Very light readability blend.
          Do not use a strong full-screen overlay because it dulls the artwork. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 hidden lg:block ${
          isLight
            ? "bg-gradient-to-r from-[#f8fafc]/40 via-transparent to-transparent"
            : "bg-gradient-to-r from-[#030b18]/30 via-transparent to-transparent"
        }`}
      />

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[560px]
          max-w-[1440px]
          items-center
          px-4
          py-12
          sm:px-8
          sm:py-14
          lg:min-h-[500px]
          lg:px-10
          lg:py-12
          xl:min-h-[540px]
          xl:px-12
          2xl:min-h-[570px]
        "
      >
        {/* Left-side content only */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-[650px]
            lg:w-[50%]
            lg:max-w-[610px]
          "
        >
          <h1
            className={`
              text-[30px]
              font-extrabold
              leading-[1.06]
              tracking-[-0.045em]
              sm:text-[42px]
              lg:text-[50px]
              xl:text-[56px]
              ${
                isLight
                  ? "text-[#06143a]"
                  : "text-white"
              }
            `}
          >
            <span className="block">Stop Watching AI Tutorials.</span>

            <span
              className={`mt-1 block bg-clip-text text-transparent ${
                isLight
                  ? "bg-[linear-gradient(90deg,#268df2_0%,#1fc7d4_24%,#35c97d_45%,#d3d94e_65%,#ff9a2f_82%,#ef5a6f_100%)] [text-shadow:0_10px_22px_rgba(38,141,242,0.10)]"
                  : "bg-[linear-gradient(90deg,#58a9f5_0%,#53d5df_22%,#67d39a_42%,#ffd45c_62%,#ff9b54_80%,#f2556f_100%)]"
              }`}
            >
              Build What Matters.
            </span>
          </h1>

          <p
            className={`
              mt-6
              max-w-[570px]
              text-[16px]
              font-medium
              leading-[1.55]
              sm:text-[17px]
              lg:text-[18px]
              ${
                isLight
                  ? "text-[#34435f]"
                  : "text-[#c4ccda]"
              }
            `}
          >
            A practical AI learning ecosystem with live classes, projects,
            practice arenas, and a builder community to help you go from
            learning to building real-world solutions.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="https://www.skool.com/the-agent-lab-3899"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-lg
                bg-gradient-to-b
                from-[#ff8a25]
                to-[#f36a0a]
                px-7
                text-[15px]
                font-bold
                text-white
                shadow-[0_12px_30px_-12px_rgba(249,115,22,0.85)]
                transition
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_16px_36px_-12px_rgba(249,115,22,0.95)]
                sm:w-auto
              "
            >
              Join Free on Skool
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
            </a>

            <a
              href="#ecosystem"
              className={`
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-lg
                border
                px-7
                text-[15px]
                font-bold
                transition
                duration-200
                hover:-translate-y-0.5
                ${
                  isLight
                    ? `
                      border-[#cbd3df]
                      bg-white/80
                      text-[#101b35]
                      shadow-[0_8px_20px_-14px_rgba(15,23,42,0.3)]
                      hover:bg-white
                    `
                    : `
                      border-white/25
                      bg-[#071222]/70
                      text-white
                      shadow-[0_8px_20px_-14px_rgba(0,0,0,0.9)]
                      backdrop-blur-sm
                      hover:border-white/40
                      hover:bg-[#0b1729]/90
                    `
                }
                sm:w-auto
              `}
            >
              Explore the Platform

              <span
                className={`
                  grid
                  h-[20px]
                  w-[20px]
                  place-items-center
                  rounded-full
                  ${
                    isLight
                      ? "bg-[#101b35] text-white"
                      : "bg-white text-[#071222]"
                  }
                `}
              >
                <Play
                  className="ml-[1px] h-[10px] w-[10px]"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </span>
            </a>
          </div>

        </div>

        {/* Mobile artwork */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-[-34%]
            top-[49%]
            z-0
            w-[122%]
            opacity-30
            sm:right-[-15%]
            sm:top-[45%]
            sm:w-[85%]
            lg:hidden
          "
        >
          <img
            src={heroBackground}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
