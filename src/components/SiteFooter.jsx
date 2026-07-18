import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import dsLogoPng from "../assets/DS Logo.png";

const footerGroups = [
  {
    title: "Platform",
    links: [
      { label: "Learn AI", href: "#learn-ai" },
      { label: "Practice", href: "#practice" },
      { label: "Projects", href: "#projects" },
      { label: "Live Classes", href: "#live-classes" },
      { label: "Career Tools", href: "#career-tools" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "AI Courses", href: "#learn-ai" },
      { label: "SQL Arena", href: "#practice" },
      { label: "Guides", href: "#resources" },
      { label: "Blog", href: "#blog" },
      { label: "AI This Week", href: "#ai-this-week" },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "Skool Community",
        href: "https://www.skool.com/the-agent-lab-3899",
        external: true,
      },
      { label: "Events", href: "#events" },
      { label: "Leaderboard", href: "#leaderboard" },
      { label: "Members", href: "#community" },
      { label: "Support", href: "#support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Data Sense", href: "#about" },
      { label: "Our Mission", href: "#mission" },
      { label: "Contact Us", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Admin Console", href: "/admin", internal: true },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
  { label: "GitHub", href: "https://github.com/fnusatvik07", icon: Github },
  { label: "Twitter", href: "https://twitter.com/", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
];

function BrandMark({ isLight }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl">
        <img src={dsLogoPng} alt="Data Sense logo" className="h-12 w-12 object-contain" />
      </div>

      <div>
        <div
          className={`text-[22px] font-black leading-none tracking-[-0.035em] ${
            isLight ? "text-[#111a3b]" : "text-white"
          }`}
        >
          DataSense
        </div>

        <div
          className={`mt-1 text-[11px] font-extrabold uppercase tracking-[0.22em] ${
            isLight ? "text-[#ff7a1a]" : "text-[#ff934d]"
          }`}
        >
          AI Launchpad
        </div>
      </div>
    </div>
  );
}

function FooterColumn({ group, isLight }) {
  return (
    <div>
      <h3
        className={`text-[14px] font-extrabold ${
          isLight ? "text-[#111a3b]" : "text-white"
        }`}
      >
        {group.title}
      </h3>

      <ul className="mt-4 space-y-2.5">
        {group.links.map((link) => (
          <li key={link.label}>
            {link.internal ? (
              <Link
                to={link.href}
                className={`text-[13px] font-medium transition-colors ${
                  isLight
                    ? "text-slate-600 hover:text-blue-600"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className={`text-[13px] font-medium transition-colors ${
                  isLight
                    ? "text-slate-600 hover:text-blue-600"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter({ theme = "light" }) {
  const normalizedTheme = String(theme).trim().toLowerCase();

  const isLight = ["light", "day", "white"].includes(normalizedTheme);

  function handleSubscribe(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();

    if (!email) return;

    console.log("Newsletter subscription:", email);
    form.reset();
  }

  return (
    <footer
      className={
        isLight
          ? "border-t border-slate-200 bg-[#f8fafc]"
          : "border-t border-white/[0.08] bg-[#020d1c]"
      }
    >
      <div className="mx-auto max-w-[1580px] px-5 py-10 lg:px-8 lg:py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,.72fr)_1.6fr] lg:gap-8">
          <div>
            <BrandMark isLight={isLight} />

            <p
              className={`mt-5 max-w-[260px] text-[13px] font-medium leading-6 ${
                isLight ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Empowering builders to learn AI, practise skills and build
              career-ready projects.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`grid h-9 w-9 place-items-center rounded-[9px] border transition duration-200 hover:-translate-y-0.5 ${
                    isLight
                      ? "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      : "border-white/[0.1] bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.1} />
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <FooterColumn
              key={group.title}
              group={group}
              isLight={isLight}
            />
          ))}

          <div>
            <h3
              className={`text-[18px] font-extrabold tracking-[-0.025em] ${
                isLight ? "text-[#111a3b]" : "text-white"
              }`}
            >
              Stay in the loop
            </h3>

            <p
              className={`mt-3 max-w-[310px] text-[13px] font-medium leading-6 ${
                isLight ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Get the latest AI updates and live-session details.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-5 flex max-w-[400px] flex-col gap-2 xl:flex-row"
            >
              <div className="relative min-w-0 flex-1">
                <Mail
                  className={`pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 ${
                    isLight ? "text-slate-400" : "text-slate-500"
                  }`}
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className={`h-12 w-full rounded-[10px] border pl-10 pr-4 text-[13px] outline-none transition ${
                    isLight
                      ? "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                      : "border-white/[0.12] bg-white/[0.06] text-white placeholder:text-slate-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="h-12 shrink-0 rounded-[10px] bg-[#f97316] px-6 text-[13px] font-bold text-white transition hover:bg-[#ea6b12]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className={`mt-9 border-t pt-5 text-center text-[12px] font-medium ${
            isLight
              ? "border-slate-200 text-slate-500"
              : "border-white/[0.08] text-slate-500"
          }`}
        >
          © 2026 Data Sense. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
