import {
  Check,
  ChevronDown,
  Crown,
} from "lucide-react";
import { useState } from "react";
import SplitGradientHeading from "./SplitGradientHeading";

const freePlan = [
  "Access to Community",
  "Selected Resources",
  "Open Live Sessions",
  "Limited Practice Access",
];

const premiumPlan = [
  "All Courses & Learning Tracks",
  "Live Sessions & Recordings",
  "Assignments & Projects",
  "Premium Practice Access",
  "Priority Support & More",
];

const faqs = [
  {
    question: "What is AI Launchpad by Data Sense?",
    answer:
      "AI Launchpad is a practical learning ecosystem where learners can access structured AI courses, live classes, projects, practice arenas, career tools and a builder community.",
  },
  {
    question: "Is the community really free?",
    answer:
      "Yes. You can join the community for free and access selected learning resources, discussions, open sessions and limited practice features.",
  },
  {
    question: "What’s included in the Premium plan?",
    answer:
      "Premium includes complete learning tracks, live sessions and recordings, assignments, projects, premium practice access and priority support.",
  },
  {
    question: "How do live sessions work?",
    answer:
      "Live sessions are scheduled through the community calendar. Premium members can join the sessions and access recordings afterward.",
  },
  {
    question: "Do I get certificates?",
    answer:
      "Certificates can be provided for eligible courses, projects or learning tracks after completing the required lessons and assessments.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. The Premium membership is billed monthly and can be cancelled before the next billing cycle.",
  },
];

function PlanFeature({ children, premium = false }) {
  return (
    <li className="flex items-start gap-3 text-[13px] font-medium leading-5 text-slate-600">
      <span
        className={`
          mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full
          ${
            premium
              ? "bg-orange-50 text-orange-600"
              : "bg-emerald-50 text-emerald-600"
          }
        `}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={2.8} />
      </span>

      <span>{children}</span>
    </li>
  );
}

function FreePlanCard({ isLight }) {
  return (
    <article
      className={`
        flex min-h-[360px] flex-col rounded-[20px]
        border p-6
        ${
          isLight
            ? "border-slate-200 bg-white shadow-[0_14px_38px_-30px_rgba(15,23,42,0.24)]"
            : "border-[#22344b] bg-[#0c1a2d] shadow-[0_18px_42px_-34px_rgba(0,0,0,0.55)]"
        }
      `}
    >
      <div className="text-center">
        <h3 className={`text-[24px] font-extrabold tracking-[-0.035em] ${isLight ? "text-[#111a3b]" : "text-white"}`}>
          Free
        </h3>

        <p className={`mt-1 text-[12px] font-medium ${isLight ? "text-slate-500" : "text-slate-400"}`}>
          For learners getting started
        </p>

        <div className="mt-5 flex items-end justify-center gap-2">
          <span className={`text-[42px] font-black leading-none tracking-[-0.05em] ${isLight ? "text-[#111a3b]" : "text-white"}`}>
            $0
          </span>

          <span className={`pb-1 text-[12px] font-semibold ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            Forever
          </span>
        </div>
      </div>

      <ul className="mt-7 space-y-3.5">
        {freePlan.map((item) => (
          <PlanFeature key={item}>{item}</PlanFeature>
        ))}
      </ul>

      <a
        href="https://www.skool.com/the-agent-lab-3899"
        target="_blank"
        rel="noreferrer"
        className={`
          mt-auto inline-flex min-h-[46px] w-full items-center justify-center
          rounded-[11px] border px-5 text-[14px] font-bold
          transition duration-200
          ${
            isLight
              ? "border-slate-200 bg-slate-50 text-[#111a3b] hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100"
              : "border-[#22344b] bg-[#0f1d31] text-white hover:-translate-y-0.5 hover:border-[#2f4b68] hover:bg-[#12233b]"
          }
        `}
      >
        Get Started Free
      </a>
    </article>
  );
}

function PremiumPlanCard({ isLight }) {
  return (
    <article
      className={`
        relative flex min-h-[360px] flex-col overflow-hidden
        rounded-[20px] border p-6
        ${
          isLight
            ? "border-orange-300 bg-white shadow-[0_20px_48px_-30px_rgba(249,115,22,0.38)]"
            : "border-orange-400/25 bg-[#0c1a2d] shadow-[0_20px_48px_-32px_rgba(249,115,22,0.16)]"
        }
      `}
    >
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute inset-x-0 top-0 h-28
          ${isLight ? "bg-gradient-to-b from-orange-50 to-transparent" : "bg-gradient-to-b from-orange-500/10 to-transparent"}
        `}
      />

      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center gap-2">
          <Crown className="h-5 w-5 text-orange-500" />

          <h3 className="text-[24px] font-extrabold tracking-[-0.035em] text-orange-600">
            Premium
          </h3>
        </div>

        <p className={`mt-1 text-[12px] font-medium ${isLight ? "text-slate-500" : "text-slate-400"}`}>
          For serious AI builders
        </p>

        <div className="mt-5 flex items-end justify-center gap-2">
          <span className={`text-[42px] font-black leading-none tracking-[-0.05em] ${isLight ? "text-[#111a3b]" : "text-white"}`}>
            $25
          </span>

          <span className={`pb-1 text-[12px] font-semibold ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            / month
          </span>
        </div>
      </div>

      <ul className="relative z-10 mt-7 space-y-3.5">
        {premiumPlan.map((item) => (
          <PlanFeature key={item} premium>
            {item}
          </PlanFeature>
        ))}
      </ul>

      <a
        href="#premium-checkout"
        className="
          relative z-10 mt-auto inline-flex min-h-[46px] w-full
          items-center justify-center rounded-[11px]
          bg-[#f97316] px-5 text-[14px] font-bold text-white
          shadow-[0_13px_28px_-18px_rgba(249,115,22,0.72)]
          transition duration-200
          hover:-translate-y-0.5 hover:bg-[#ea6b12]
        "
      >
        Go Premium
      </a>
    </article>
  );
}

function FAQItem({ item, open, onToggle, isLight }) {
  return (
    <article
      className={`
        overflow-hidden rounded-[13px]
        border
        transition duration-200
        ${
          isLight
            ? "border-slate-200 bg-white hover:border-blue-200"
            : "border-[#22344b] bg-[#0c1a2d] hover:border-[#2f4b68]"
        }
      `}
    >
      <button
        type="button"
        onClick={onToggle}
        className="
          flex min-h-[52px] w-full items-center justify-between
          gap-5 px-5 py-3.5 text-left
        "
      >
        <span className={`text-[13px] font-semibold ${isLight ? "text-[#26324a]" : "text-white"}`}>
          {item.question}
        </span>

        <ChevronDown
          className={`
            h-4 w-4 shrink-0 transition duration-200
            ${isLight ? "text-slate-500" : "text-slate-400"}
            ${open ? "rotate-180" : ""}
          `}
          strokeWidth={2.2}
        />
      </button>

      <div
        className={`
          grid transition-[grid-template-rows] duration-300
          ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">
          <p className={`border-t px-5 py-4 text-[12px] leading-6 ${
            isLight ? "border-slate-100 text-slate-600" : "border-[#22344b] text-slate-300"
          }`}>
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PricingSection({ theme = "light" }) {
  const [openFaq, setOpenFaq] = useState(0);
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section
      id="pricing"
      className={`py-5 md:py-7 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}
    >
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
          {/* Pricing */}
          <article
            className={`rounded-[22px] border px-5 py-6 sm:px-6 ${
              isLight
                ? "border-[#e4e9f1] bg-white shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
                : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
            }`}
          >
            <SplitGradientHeading
              theme={theme}
              className={`text-[25px] font-extrabold tracking-[-0.04em] sm:text-[29px] ${
                isLight ? "text-[#111a3b]" : "text-white"
              }`}
              plain="Simple, Transparent"
              accent="Pricing"
            />

            <p className={`mt-2 text-[13px] font-medium ${isLight ? "text-slate-500" : "text-slate-400"}`}>
              Choose the plan that&apos;s right for you
            </p>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <FreePlanCard isLight={isLight} />
              <PremiumPlanCard isLight={isLight} />
            </div>
          </article>

          {/* FAQ */}
          <article
            className={`rounded-[22px] border px-5 py-6 sm:px-6 ${
              isLight
                ? "border-[#e4e9f1] bg-white shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
                : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
            }`}
          >
            <SplitGradientHeading
              theme={theme}
              className={`text-[25px] font-extrabold tracking-[-0.04em] sm:text-[29px] ${
                isLight ? "text-[#111a3b]" : "text-white"
              }`}
              plain="Frequently Asked"
              accent="Questions"
            />

            <div className="mt-6 space-y-3">
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.question}
                  item={item}
                  open={openFaq === index}
                  isLight={isLight}
                  onToggle={() =>
                    setOpenFaq((current) =>
                      current === index ? -1 : index,
                    )
                  }
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
