import { ArrowRight } from "lucide-react";

/* Social icons */
import youtubeIcon from "../assets/social-testimonials-assets/social-icons/youtube.svg";
import linkedinIcon from "../assets/social-testimonials-assets/social-icons/linkedin.svg";
import instagramIcon from "../assets/social-testimonials-assets/social-icons/instagram.svg";
import topmateIcon from "../assets/social-testimonials-assets/social-icons/tompate.jpeg";
import facebookIcon from "../assets/social-testimonials-assets/social-icons/facebook.svg";
import whatsappIcon from "../assets/social-testimonials-assets/social-icons/whatsapp.svg";
import discordIcon from "../assets/social-testimonials-assets/social-icons/discord.svg";
import skoolIcon from "../assets/community-section-assets/skool-logo/skool-seeklogo.svg";
import SplitGradientHeading from "./SplitGradientHeading";
import { useAdminContent } from "../content/AdminContentContext";
import { testimonials } from "../data/testimonials";

/* Rating icon */
import starIcon from "../assets/social-testimonials-assets/ui-icons/star.svg";

const socialPlatforms = [
  {
    name: "YouTube",
    value: "125K+",
    label: "Viewers",
    icon: youtubeIcon,
    href: "https://www.youtube.com/@Senseofdata",
  },
  {
    name: "Topmate",
    value: "5K+",
    label: "Bookings",
    icon: topmateIcon,
    href: "https://topmate.io/datasense",
  },
  {
    name: "LinkedIn",
    value: "5K+",
    label: "Followers",
    icon: linkedinIcon,
    href: "https://www.linkedin.com/company/data-sense-lms/",
  },
  {
    name: "Instagram",
    value: "25K+",
    label: "Followers",
    icon: instagramIcon,
    href: "https://www.instagram.com/senseofdata/",
  },
];

const socialHrefByName = Object.fromEntries(
  socialPlatforms.map(({ name, href }) => [name, href]),
);

const additionalSocialPlatforms = [
  {
    name: "Facebook",
    value: "Follow",
    label: "Our Page",
    icon: facebookIcon,
    href: "https://www.facebook.com/people/Data-Sense/61550202884240/",
  },
  {
    name: "WhatsApp",
    value: "Join",
    label: "Community",
    icon: whatsappIcon,
    href: "https://chat.whatsapp.com/KK6a61YIea259m3WYedVZe",
  },
  {
    name: "Skool",
    value: "Learn",
    label: "With Builders",
    icon: skoolIcon,
    href: "https://www.skool.com/the-agent-lab-3899",
  },
  {
    name: "Discord",
    value: "Connect",
    label: "Coming Soon",
    icon: discordIcon,
    href: "",
  },
];

const featuredTestimonialKeys = [
  ["Rajesh Kumar Sharma", "2 May 2026"],
  ["Priyanka Neogi", "3 Aug 2025"],
  ["Karnica Jain", "3 Aug 2025"],
];

const featuredTestimonials = featuredTestimonialKeys
  .map(([name, date]) =>
    testimonials.find(
      (testimonial) => testimonial.name.startsWith(name) && testimonial.date === date,
    ),
  )
  .filter(Boolean);

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
  const CardElement = platform.href ? "a" : "div";

  return (
    <CardElement
      href={platform.href || undefined}
      target={platform.href?.startsWith("http") ? "_blank" : undefined}
      rel={platform.href?.startsWith("http") ? "noreferrer" : undefined}
      aria-label={platform.href ? undefined : `${platform.name} — link coming soon`}
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
    </CardElement>
  );
}

function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, index) => (
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
      <RatingStars rating={testimonial.rating} />

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

      <div className={`mt-5 border-t pt-4 sm:mt-auto sm:pt-5 ${isLight ? "border-slate-100" : "border-white/10"}`}>
        <div>
          <h3 className={`text-[12px] font-bold sm:text-[13px] md:text-[14px] ${isLight ? "text-[#111a3b]" : "text-white"}`}>
            {testimonial.name}
          </h3>

          <p className={`mt-1 text-[10px] font-medium sm:text-[11px] md:text-[12px] ${isLight ? "text-[#7a8497]" : "text-slate-400"}`}>
            {testimonial.date} · Verified Topmate feedback
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
  const visibleSocialPlatforms = [
    ...content.social.items,
    ...additionalSocialPlatforms.filter(
      (additionalPlatform) =>
        !content.social.items.some(
          (platform) => platform.name === additionalPlatform.name,
        ),
    ),
  ];

  return (
    <section id="testimonials" className={`scroll-mt-20 py-4 md:py-7 ${isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}`}>
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
              {visibleSocialPlatforms.map((platform) => (
                <div key={platform.name}>
                  <SocialCard
                    platform={{
                      ...platform,
                      href: socialHrefByName[platform.name] || platform.href,
                    }}
                    isLight={isLight}
                  />
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

              <HeaderAction href="/testimonials">
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
              {featuredTestimonials.map((testimonial) => (
                <div key={`${testimonial.name}-${testimonial.date}`}>
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
