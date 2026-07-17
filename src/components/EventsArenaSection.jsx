import PracticeArena from './PracticeArena';
import { events } from '../data/siteData';

const shell = 'mx-auto max-w-7xl px-5 lg:px-8';
const section = 'py-20 md:py-28';

export default function EventsArenaSection() {
  return (
    <section id="live-classes" className={`${section} border-y border-line/10 bg-panel/35`}>
      <div className={`${shell} grid gap-5 lg:grid-cols-[.8fr_1.2fr]`}>
        <div className="rounded-3xl border border-line/10 bg-panel p-6">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-ink">Upcoming Live Classes</h3>
            <a className="text-sm text-accent2" href="#community">
              View all
            </a>
          </div>

          <div className="space-y-3">
            {events.map((event) => (
              <div key={event.title} className="flex gap-4 rounded-2xl border border-line/10 bg-panel2/55 p-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-orange-400/25 bg-orange-400/10 text-center">
                  <div>
                    <div className="text-[10px] text-accent2">{event.mon}</div>
                    <div className="text-xl font-black text-ink">{event.date}</div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-ink">{event.title}</div>
                  <div className="mt-1 text-xs text-muted">
                    {event.meta} · {event.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PracticeArena />
      </div>
    </section>
  );
}
