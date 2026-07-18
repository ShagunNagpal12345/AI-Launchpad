import { ArrowRight } from "lucide-react";

/* Social icons */
import youtubeIcon from "../assets/social-testimonials-assets/social-icons/youtube.svg";
import linkedinIcon from "../assets/social-testimonials-assets/social-icons/linkedin.svg";
import instagramIcon from "../assets/social-testimonials-assets/social-icons/instagram.svg";
import topmateIcon from "../assets/social-testimonials-assets/social-icons/tompate.jpeg";
import SplitGradientHeading from "./SplitGradientHeading";
import { useAdminContent } from "../content/AdminContentContext";

/* Learner avatars */
import snehaAvatar from "../assets/social-testimonials-assets/learner-avatars/sneha-r.png";
import vikramAvatar from "../assets/social-testimonials-assets/learner-avatars/vikram-m.png";
import poojaAvatar from "../assets/social-testimonials-assets/learner-avatars/pooja-s.png";

/* Rating icon */
import starIcon from "../assets/social-testimonials-assets/ui-icons/star.svg";

const socialPlatforms = [
  {
    name: "YouTube",
    value: "125K+",
    label: "Viewers",
    icon: youtubeIcon,
    href: "https://www.youtube.com/",
  },
  {
    name: "Topmate",
    value: "5K+",
    label: "Bookings",
    icon: topmateIcon,
    href: "#topmate",
  },
  {
    name: "LinkedIn",
    value: "5K+",
    label: "Followers",
    icon: linkedinIcon,
    href: "https://www.linkedin.com/",
  },
  {
    name: "Instagram",
    value: "25K+",
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
        min-h-[192px]
        flex-col
        items-center
        rounded-[18px]
        border
        px-3
        py-4
        text-center
        transition
        duration-300
        hover:-translate-y-1
        sm:min-h-[228px]
        sm:px-5
        sm:py-5
        md:min-h-[248px]
        md:py-6
        ${
          isLight
            ? "border-[#e6eaf1] bg-white hover:border-blue-200 hover:shadow-[0_18px_42px_-32px_rgba(37,99,235,0.34)]"
            : "border-[#22344b] bg-[#0c1a2d] hover:border-[#2f4b68] hover:shadow-[0_18px_42px_-32px_rgba(37,99,235,0.18)]"
        }
      `}
    >
      <div className="flex h-[58px] items-center justify-center sm:h-[72px] md:h-[88px]">
        <img
          src={platform.icon}
          alt={`${platform.name} icon`}
          className="
            h-[46px]
            w-[46px]
            object-contain
            transition
            duration-300
            group-hover:scale-105
            sm:h-[58px]
            sm:w-[58px]
            md:h-[72px]
            md:w-[72px]
          "
        />
      </div>

      <h3 className={`mt-3 text-[13px] font-bold sm:mt-4 sm:text-[15px] md:mt-5 md:text-[16px] ${isLight ? "text-[#111a3b]" : "text-white"}`}>
        {platform.name}
      </h3>

      <strong
        className={`
          mt-3.5
          text-[20px]
          font-extrabold
          leading-none
          tracking-[-0.04em]
          sm:mt-4
          sm:text-[24px]
          md:mt-6
          md:text-[29px]
          ${isLight ? "text-[#111a3b]" : "text-white"}
        `}
      >
        {platform.value}
      </strong>

      <span className={`mt-2 text-[11px] font-medium sm:mt-2.5 sm:text-[12px] md:mt-3 md:text-[13px] ${isLight ? "text-[#68748a]" : "text-slate-400"}`}>
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
        min-h-[unset]
        flex-col
        rounded-[18px]
        border
        px-4
        py-4
        transition
        duration-300
        hover:-translate-y-1
        sm:min-h-[276px]
        sm:px-5
        sm:py-5
        md:min-h-[308px]
        md:px-6
        md:py-6
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
          mt-4
          text-[13px]
          font-medium
          leading-5
          sm:mt-5
          sm:text-[14px]
          sm:leading-6
          md:mt-6
          md:text-[15px]
          md:leading-7
          ${isLight ? "text-[#5f6a7f]" : "text-slate-300"}
        `}
      >
        {testimonial.quote}
      </p>

      <div className="mt-5 flex items-center gap-3 pt-0 sm:mt-auto sm:pt-6 md:pt-7">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="
            h-10
            w-10
            rounded-full
            border
            border-slate-200/70
            object-cover
            sm:h-11
            sm:w-11
            md:h-12
            md:w-12
          "
        />

        <div>
          <h3 className={`text-[12px] font-bold sm:text-[13px] md:text-[14px] ${isLight ? "text-[#111a3b]" : "text-white"}`}>
            {testimonial.name}
          </h3>

          <p className={`mt-1 text-[10px] font-medium sm:text-[11px] md:text-[12px] ${isLight ? "text-[#7a8497]" : "text-slate-400"}`}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsCareerSection({ theme = "light" }) {
  const { content } = useAdminContent();
  const normalizedTheme = String(theme).toLowerCase();
  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  return (
    <section className={`py-4 md:py-7 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}>
      <div className="mx-auto max-w-[1580px] px-4 sm:px-5 lg:px-6">
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          {/* Social presence */}
          <article
            className={`rounded-[22px] border px-4 py-5 sm:px-6 sm:py-6 ${
              isLight
                ? "border-[#e4e9f1] bg-white shadow-[0_16px_55px_-44px_rgba(15,23,42,0.25)]"
                : "border-[#1d2d43] bg-[linear-gradient(145deg,#071426,#051121)] shadow-[0_22px_65px_-48px_rgba(0,0,0,0.9)]"
            }`}
          >
            <SplitGradientHeading
              theme={theme}
              className={`text-[21px] font-extrabold tracking-[-0.035em] sm:text-[24px] md:text-[28px] ${
                isLight ? "text-[#111a3b]" : "text-white"
              }`}
              plain={content.social.heading}
              accent={content.social.accentHeading}
            />

            <div
              className="
                mt-5
                grid
                grid-cols-2
                gap-3
                sm:mt-6
                sm:gap-4
                lg:grid-cols-4
              "
            >
              {content.social.items.map((platform) => (
                <div key={platform.name}>
                  <SocialCard platform={platform} isLight={isLight} />
                </div>
              ))}
            </div>
          </article>

          {/* Testimonials */}
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
                plain={content.testimonials.heading}
                accent={content.testimonials.accentHeading}
              />

              <HeaderAction href="#all-testimonials">
                {content.testimonials.ctaLabel}
                <ArrowRight className="h-3.5 w-3.5" />
              </HeaderAction>
            </div>

            <div
              className="
                mt-5
                grid
                grid-cols-1
                gap-3
                sm:mt-6
                sm:gap-4
                sm:grid-cols-2
                md:grid
                md:grid-cols-3
              "
            >
              {content.testimonials.items.map((testimonial) => (
                <div key={testimonial.name}>
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
