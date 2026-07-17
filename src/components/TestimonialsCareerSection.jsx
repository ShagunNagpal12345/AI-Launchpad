import { ArrowRight } from "lucide-react";

/* Social icons */
import youtubeIcon from "../assets/social-testimonials-assets/social-icons/youtube.svg";
import linkedinIcon from "../assets/social-testimonials-assets/social-icons/linkedin.svg";
import instagramIcon from "../assets/social-testimonials-assets/social-icons/instagram.svg";
import topmateIcon from "../assets/social-testimonials-assets/social-icons/tompate.jpeg";
import SplitGradientHeading from "./SplitGradientHeading";

/* Learner avatars */
import snehaAvatar from "../assets/social-testimonials-assets/learner-avatars/sneha-r.png";
import vikramAvatar from "../assets/social-testimonials-assets/learner-avatars/vikram-m.png";
import poojaAvatar from "../assets/social-testimonials-assets/learner-avatars/pooja-s.png";

/* Rating icon */
import starIcon from "../assets/social-testimonials-assets/ui-icons/star.svg";

const socialPlatforms = [
  {
    name: "YouTube",
    value: "42K+",
    label: "Subscribers",
    icon: youtubeIcon,
    href: "https://www.youtube.com/",
  },
  {
    name: "Topmate",
    value: "12K+",
    label: "Community",
    icon: topmateIcon,
    href: "#topmate",
  },
  {
    name: "LinkedIn",
    value: "8K+",
    label: "Followers",
    icon: linkedinIcon,
    href: "https://www.linkedin.com/",
  },
  {
    name: "Instagram",
    value: "15K+",
    label: "Followers",
    icon: instagramIcon,
    href: "https://www.instagram.com/",
  },
];

const learnerTestimonials = [
  {
    name: "Sneha R.",
    role: "ML Engineer",
    quote:
      "DataSense AI Launchpad changed my career path completely! The projects are amazing.",
    avatar: snehaAvatar,
  },
  {
    name: "Vikram M.",
    role: "Data Scientist",
    quote:
      "The live classes and mentors are top-notch. Best place to learn AI hands-on.",
    avatar: vikramAvatar,
  },
  {
    name: "Pooja S.",
    role: "AI Engineer",
    quote:
      "Practice Arena helped me crack multiple interviews. Highly recommended!",
    avatar: poojaAvatar,
  },
];

function HeaderAction({ href, children }) {
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

function SocialCard({ platform, isLight }) {
  return (
    <a
      href={platform.href}
      target={platform.href.startsWith("http") ? "_blank" : undefined}
      rel={platform.href.startsWith("http") ? "noreferrer" : undefined}
      className={`
        group
        flex
        min-h-[260px]
        flex-col
        items-center
        rounded-[18px]
        border
        px-5
        py-6
        text-center
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
      <div className="flex h-[88px] items-center justify-center">
        <img
          src={platform.icon}
          alt={`${platform.name} icon`}
          className="
            h-[72px]
            w-[72px]
            object-contain
            transition
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      <h3 className={`mt-5 text-[16px] font-bold ${isLight ? "text-[#111a3b]" : "text-white"}`}>
        {platform.name}
      </h3>

      <strong
        className={`
          mt-6
          text-[29px]
          font-extrabold
          leading-none
          tracking-[-0.04em]
          ${isLight ? "text-[#111a3b]" : "text-white"}
        `}
      >
        {platform.value}
      </strong>

      <span className={`mt-3 text-[13px] font-medium ${isLight ? "text-[#68748a]" : "text-slate-400"}`}>
        {platform.label}
      </span>
    </a>
  );
}

function RatingStars() {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={starIcon}
          alt=""
          aria-hidden="true"
          className="h-[18px] w-[18px] object-contain"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, isLight }) {
  return (
    <article
      className={`
        flex
        min-h-[320px]
        flex-col
        rounded-[18px]
        border
        px-6
        py-6
        transition
        duration-300
        hover:-translate-y-1
        ${
          isLight
            ? "border-[#e6eaf1] bg-white hover:border-orange-200 hover:shadow-[0_18px_42px_-32px_rgba(249,115,22,0.3)]"
            : "border-[#22344b] bg-[#0c1a2d] hover:border-orange-400/25 hover:shadow-[0_18px_42px_-32px_rgba(249,115,22,0.14)]"
        }
      `}
    >
      <RatingStars />

      <p
        className={`
          mt-6
          text-[15px]
          font-medium
          leading-7
          ${isLight ? "text-[#5f6a7f]" : "text-slate-300"}
        `}
      >
        {testimonial.quote}
      </p>

      <div className="mt-auto flex items-center gap-3 pt-7">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="
            h-12
            w-12
            rounded-full
            border
            border-slate-200/70
            object-cover
          "
        />

        <div>
          <h3 className={`text-[14px] font-bold ${isLight ? "text-[#111a3b]" : "text-white"}`}>
            {testimonial.name}
          </h3>

          <p className={`mt-1 text-[12px] font-medium ${isLight ? "text-[#7a8497]" : "text-slate-400"}`}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsCareerSection({ theme = "light" }) {
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section className={`py-5 md:py-7 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}>
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          {/* Social presence */}
          <article
            className={`rounded-[22px] border px-5 py-6 sm:px-6 ${
              isLight
                ? "border-[#e4e9f1] bg-white shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
                : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
            }`}
          >
            <SplitGradientHeading
              theme={theme}
              className={`text-[24px] font-extrabold tracking-[-0.035em] sm:text-[28px] ${
                isLight ? "text-[#111a3b]" : "text-white"
              }`}
              plain="We're Active"
              accent="Everywhere"
            />

            <div
              className="
                social-scroll
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
              {socialPlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className="
                    w-[78vw]
                    max-w-[220px]
                    shrink-0
                    snap-start
                    sm:w-auto
                    sm:max-w-none
                  "
                >
                  <SocialCard platform={platform} isLight={isLight} />
                </div>
              ))}
            </div>
          </article>

          {/* Testimonials */}
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
                plain="What Our"
                accent="Learners Say"
              />

              <HeaderAction href="#all-testimonials">
                View all
                <ArrowRight className="h-3.5 w-3.5" />
              </HeaderAction>
            </div>

            <div
              className="
                testimonials-scroll
                mt-6
                flex
                snap-x
                snap-mandatory
                gap-4
                overflow-x-auto
                pb-2
                md:grid
                md:grid-cols-3
                md:overflow-visible
              "
            >
              {learnerTestimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="
                    w-[84vw]
                    max-w-[290px]
                    shrink-0
                    snap-start
                    sm:w-[70vw]
                    md:w-auto
                    md:max-w-none
                  "
                >
                  <TestimonialCard testimonial={testimonial} isLight={isLight} />
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
