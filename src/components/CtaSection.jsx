import { ArrowRight } from 'lucide-react';
import SplitGradientHeading from './SplitGradientHeading';

const shell = 'mx-auto max-w-7xl px-5 lg:px-8';

export default function CtaSection({ theme = "light" }) {
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section className={`py-5 md:py-7 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}>
      <div className={shell}>
        <div
          className={`overflow-hidden rounded-[22px] border px-5 py-5 sm:px-6 ${
            isLight
              ? "border-[#e4e9f1] bg-[linear-gradient(90deg,#eef4ff_0%,#f8fbff_50%,#fff1ea_100%)] shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
              : "border-[#1d2d43] bg-[linear-gradient(90deg,#0b1830_0%,#10203c_50%,#1f1620_100%)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
          }`}
        >
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="max-w-[560px]">
              <SplitGradientHeading
                theme={theme}
                className={`text-[26px] font-extrabold tracking-[-0.04em] sm:text-[30px] ${
                  isLight ? "text-[#13337a]" : "text-white"
                }`}
                plain="Ready to kickstart your AI"
                accent="journey?"
              />
              <p className={`mt-1.5 text-[14px] font-medium sm:text-[15px] ${
                isLight ? "text-[#4e6390]" : "text-slate-300"
              }`}>
                Join thousands of learners building the future with AI.
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <a
                className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#ff7a1a] px-6 text-center text-[15px] font-extrabold text-white shadow-[0_14px_28px_-18px_rgba(249,115,22,0.72)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ef6d10] sm:w-auto sm:min-w-[320px]"
                href="https://www.skool.com/the-agent-lab-3899"
                target="_blank"
                rel="noreferrer"
              >
                Join Now, It&apos;s Free!
                <ArrowRight className="h-4 w-4" />
              </a>

              <div
                aria-hidden="true"
                className={`hidden h-16 w-16 shrink-0 items-center justify-center rounded-full text-[36px] sm:flex ${
                  isLight
                    ? "bg-white/60 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.3)]"
                    : "bg-white/[0.08] shadow-[0_10px_24px_-20px_rgba(0,0,0,0.55)]"
                }`}
              >
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
