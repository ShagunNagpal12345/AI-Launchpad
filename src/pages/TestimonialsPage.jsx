import { useMemo, useState } from "react";
import { ExternalLink, Quote, Search, Star } from "lucide-react";
import ContentPageHero from "../components/ContentPageHero";
import { testimonials } from "../data/testimonials";

export default function TestimonialsPage({ theme = "light" }) {
  const isLight = theme === "light";
  const [query, setQuery] = useState("");
  const visibleTestimonials = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return testimonials;
    return testimonials.filter(({ name, date, quote }) =>
      `${name} ${date} ${quote}`.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <main className={`min-h-screen ${isLight ? "bg-[#f7f9fc] text-[#111a3b]" : "bg-[#020b18] text-white"}`}>
      <ContentPageHero
        theme={theme}
        eyebrow="Verified Topmate feedback"
        plain="What learners say"
        accent="about DataSense"
        description="Real feedback from learners who joined DataSense workshops, classes, and mentorship sessions."
        sections={[{ label: "Search feedback", href: "#testimonial-search" }, { label: "Learner stories", href: "#testimonials-list" }]}
      />

      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-extrabold text-orange-700">
            <Star className="h-4 w-4" fill="currentColor" /> 4.7/5 · {testimonials.length} testimonials
          </div>
          <a href="https://topmate.io/datasense" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#ef6c28] px-4 text-sm font-bold text-white">
            View on Topmate <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div id="testimonial-search" className="mx-auto mt-8 max-w-xl scroll-mt-20">
          <label className={`flex min-h-12 items-center gap-3 rounded-2xl border px-4 ${isLight ? "border-slate-200 bg-white" : "border-white/10 bg-white/[0.04]"}`}>
            <Search className="h-5 w-5 text-slate-400" aria-hidden="true" />
            <span className="sr-only">Search testimonials</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by learner or feedback"
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
            />
          </label>
          {query && <p className="mt-2 text-center text-xs font-semibold text-slate-500">{visibleTestimonials.length} results</p>}
        </div>

        <section id="testimonials-list" aria-label="Learner testimonials" className="mt-10 grid scroll-mt-20 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <article key={`${testimonial.name}-${testimonial.date}-${index}`} className={`flex min-h-[260px] flex-col rounded-[20px] border p-6 ${isLight ? "border-slate-200 bg-white shadow-[0_18px_50px_-40px_rgba(15,23,42,0.35)]" : "border-white/10 bg-[#0c1a2d]"}`}>
              <Quote className="h-8 w-8 text-[#ef6c28]" aria-hidden="true" />
              <p className={`mt-5 flex-1 text-[15px] leading-7 ${isLight ? "text-slate-600" : "text-slate-300"}`}>{testimonial.quote}</p>
              <div className={`mt-6 border-t pt-4 ${isLight ? "border-slate-100" : "border-white/10"}`}>
                <h2 className="font-extrabold">{testimonial.name}</h2>
                <p className={`mt-1 text-xs font-semibold ${isLight ? "text-slate-400" : "text-slate-500"}`}>{testimonial.date} · {testimonial.rating}/5</p>
              </div>
            </article>
          ))}
        </section>

        {visibleTestimonials.length === 0 && (
          <p className={`py-16 text-center ${isLight ? "text-slate-500" : "text-slate-400"}`}>No testimonials match your search.</p>
        )}
      </div>
    </main>
  );
}
