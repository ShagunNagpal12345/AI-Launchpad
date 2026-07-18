import {
  ArrowRight,
  Play,
} from "lucide-react";

import heroBackDark from "../assets/hero/herobackdark.png";
import heroBackDarkVideo from "../assets/hero/herobackdark.mp4";
import heroBackLight from "../assets/hero/herobacklight.png";
import heroBackLightVideo from "../assets/hero/herobacklight.mp4";
import { useAdminContent } from "../content/AdminContentContext";

export default function Hero({ theme = "dark" }) {
  const { content } = useAdminContent();
  const heroContent = content.hero;
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
            <span className="block">{heroContent.heading}</span>

            <span
              className={`mt-1 block bg-clip-text text-transparent ${
                isLight
                  ? "bg-[linear-gradient(90deg,#268df2_0%,#1fc7d4_24%,#35c97d_45%,#d3d94e_65%,#ff9a2f_82%,#ef5a6f_100%)] [text-shadow:0_10px_22px_rgba(38,141,242,0.10)]"
                  : "bg-[linear-gradient(90deg,#58a9f5_0%,#53d5df_22%,#67d39a_42%,#ffd45c_62%,#ff9b54_80%,#f2556f_100%)]"
              }`}
            >
              {heroContent.accentHeading}
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
            {heroContent.subheading}
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
              {heroContent.primaryButtonLabel}
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
              {heroContent.secondaryButtonLabel}

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


// import {
//   ArrowRight,
//   Play,
//   Star,
//   Users,
// } from "lucide-react";

// import { useAdminContent } from "../content/AdminContentContext";
// import HeroAnimation from "./heroanimation";

// function TestimonialCard({ isLight }) {
//   return (
//     <article
//       className={`
//         mt-8
//         max-w-[470px]
//         rounded-2xl
//         border
//         p-4
//         shadow-[0_18px_45px_-32px_rgba(15,23,42,0.32)]
//         ${
//           isLight
//             ? "border-slate-100 bg-white/95"
//             : "border-white/10 bg-white/[0.05]"
//         }
//       `}
//     >
//       <div className="flex items-center gap-4">
//         <div
//           className="
//             grid
//             h-14
//             w-14
//             shrink-0
//             place-items-center
//             rounded-full
//             bg-gradient-to-br
//             from-orange-100
//             to-amber-50
//             text-sm
//             font-extrabold
//             text-[#071635]
//           "
//         >
//           RV
//         </div>

//         <div className="min-w-0 flex-1">
//           <blockquote
//             className={`
//               text-[12px]
//               font-medium
//               leading-5
//               ${
//                 isLight
//                   ? "text-[#20304f]"
//                   : "text-slate-200"
//               }
//             `}
//           >
//             “I went from watching tutorials to shipping my first AI agent in
//             just 3 weeks.”
//           </blockquote>

//           <div className="mt-3 flex items-end justify-between gap-4">
//             <div>
//               <div
//                 className={`
//                   text-[11px]
//                   font-bold
//                   ${
//                     isLight
//                       ? "text-[#071635]"
//                       : "text-white"
//                   }
//                 `}
//               >
//                 Rohan Verma
//               </div>

//               <div
//                 className={`
//                   mt-1
//                   text-[9px]
//                   ${
//                     isLight
//                       ? "text-slate-500"
//                       : "text-slate-400"
//                   }
//                 `}
//               >
//                 AI Engineer
//               </div>
//             </div>

//             <div className="flex gap-0.5 text-orange-400">
//               {Array.from({ length: 5 }).map((_, index) => (
//                 <Star
//                   key={index}
//                   className="h-3.5 w-3.5 fill-current"
//                   strokeWidth={1.5}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function Hero({ theme = "light" }) {
//   const { content } = useAdminContent();

//   const heroContent = content.hero;
//   const isLight = theme === "light";

//   return (
//     <section
//       id="top"
//       className={`
//         relative
//         isolate
//         overflow-hidden
//         py-8
//         lg:py-12
//         ${
//           isLight
//             ? "bg-[#f5f8fe]"
//             : "bg-[#030b18]"
//         }
//       `}
//     >
//       <div
//         aria-hidden="true"
//         className={`
//           pointer-events-none
//           absolute
//           inset-0
//           ${
//             isLight
//               ? "bg-[radial-gradient(circle_at_65%_25%,rgba(213,226,255,0.8),transparent_38%),radial-gradient(circle_at_15%_90%,rgba(230,235,255,0.9),transparent_34%)]"
//               : "bg-[radial-gradient(circle_at_70%_25%,rgba(30,64,175,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(79,70,229,0.12),transparent_30%)]"
//           }
//         `}
//       />

//       <div
//         className="
//           relative
//           mx-auto
//           max-w-[1540px]
//           px-5
//           sm:px-8
//           lg:px-10
//         "
//       >
//         <div
//           className="
//             grid
//             items-start
//             gap-10
//             xl:grid-cols-[0.78fr_1.22fr]
//             xl:gap-8
//           "
//         >
//           <div className="pt-1 xl:pt-3">
//             <div
//               className={`
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 px-3
//                 py-2
//                 text-[11px]
//                 font-medium
//                 ${
//                   isLight
//                     ? "border-orange-100 bg-white/75 text-[#33415f]"
//                     : "border-white/10 bg-white/[0.04] text-slate-300"
//                 }
//               `}
//             >
//               <span
//                 className="
//                   grid
//                   h-7
//                   w-7
//                   place-items-center
//                   rounded-full
//                   bg-orange-50
//                   text-orange-500
//                 "
//               >
//                 <Users className="h-4 w-4" />
//               </span>

//               <span>
//                 Join{" "}
//                 <strong className="font-extrabold text-blue-600">
//                   50,000+ builders
//                 </strong>{" "}
//                 learning AI the right way
//               </span>
//             </div>

//             <h1
//               className={`
//                 mt-8
//                 max-w-[560px]
//                 text-[45px]
//                 font-black
//                 leading-[1.02]
//                 tracking-[-0.055em]
//                 sm:text-[58px]
//                 xl:text-[64px]
//                 ${
//                   isLight
//                     ? "text-[#071635]"
//                     : "text-white"
//                 }
//               `}
//             >
//               <span className="block">
//                 {heroContent.heading}
//               </span>

//               <span
//                 className={`
//                   mt-3
//                   block
//                   bg-clip-text
//                   text-transparent
//                   ${
//                     isLight
//                       ? "bg-[linear-gradient(90deg,#3264f6_0%,#10b9de_30%,#39c975_57%,#f5a800_100%)]"
//                       : "bg-[linear-gradient(90deg,#5a88ff_0%,#35d3eb_30%,#5de39b_58%,#ffbd32_100%)]"
//                   }
//                 `}
//               >
//                 {heroContent.accentHeading}
//               </span>
//             </h1>

//             <p
//               className={`
//                 mt-7
//                 max-w-[550px]
//                 text-[16px]
//                 font-medium
//                 leading-[1.75]
//                 sm:text-[18px]
//                 ${
//                   isLight
//                     ? "text-[#34435f]"
//                     : "text-slate-300"
//                 }
//               `}
//             >
//               {heroContent.subheading}
//             </p>

//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <a
//                 href="https://www.skool.com/the-agent-lab-3899"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   inline-flex
//                   min-h-[58px]
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-xl
//                   bg-gradient-to-b
//                   from-[#ff8a25]
//                   to-[#ff6b00]
//                   px-8
//                   text-[15px]
//                   font-bold
//                   text-white
//                   shadow-[0_16px_35px_-15px_rgba(249,115,22,0.8)]
//                   transition
//                   duration-200
//                   hover:-translate-y-0.5
//                   hover:shadow-[0_20px_42px_-15px_rgba(249,115,22,0.9)]
//                 "
//               >
//                 {heroContent.primaryButtonLabel}

//                 <ArrowRight
//                   className="h-[18px] w-[18px]"
//                   strokeWidth={2.2}
//                 />
//               </a>

//               <a
//                 href="#ecosystem"
//                 className={`
//                   inline-flex
//                   min-h-[58px]
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-xl
//                   border
//                   px-8
//                   text-[15px]
//                   font-bold
//                   transition
//                   duration-200
//                   hover:-translate-y-0.5
//                   ${
//                     isLight
//                       ? "border-slate-200 bg-white text-[#071635] shadow-sm hover:border-slate-300"
//                       : "border-white/15 bg-white/[0.05] text-white hover:border-white/25 hover:bg-white/[0.08]"
//                   }
//                 `}
//               >
//                 {heroContent.secondaryButtonLabel}

//                 <span
//                   className={`
//                     grid
//                     h-6
//                     w-6
//                     place-items-center
//                     rounded-full
//                     ${
//                       isLight
//                         ? "bg-[#071635] text-white"
//                         : "bg-white text-[#071635]"
//                     }
//                   `}
//                 >
//                   <Play
//                     className="ml-0.5 h-3 w-3"
//                     fill="currentColor"
//                     strokeWidth={0}
//                   />
//                 </span>
//               </a>
//             </div>

//             <TestimonialCard isLight={isLight} />
//           </div>

//           <div className="min-w-0">
//             <HeroAnimation theme={theme} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }