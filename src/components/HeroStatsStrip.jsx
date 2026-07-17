import { heroStats } from '../data/siteData';

export default function HeroStatsStrip({ theme = 'dark' }) {
  const isLight = theme === 'light';

  return (
    <section className="relative z-20 -mt-6 px-5 pb-5 sm:px-8 lg:-mt-9 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div
          className={`overflow-hidden rounded-[1.6rem] border shadow-[0_24px_52px_-34px_rgba(15,23,42,0.42)] ${
            isLight
              ? 'border-slate-200/80 bg-white/90 backdrop-blur-sm'
              : 'border-white/10 bg-[#081427]/88 backdrop-blur-md'
          }`}
        >
          <div className="grid md:grid-cols-2 xl:grid-cols-5">
            {heroStats.map(({ value, label, icon: Icon, tone }) => (
              <div
                key={label}
                className={`flex items-center gap-4 px-5 py-5 ${
                  isLight ? 'border-slate-200/80' : 'border-white/8'
                } border-b last:border-b-0 md:[&:nth-last-child(-n+1)]:border-b-0 xl:border-b-0 xl:border-r xl:last:border-r-0`}
              >
                <div
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${
                    tone === 'blue'
                      ? isLight
                        ? 'bg-sky-100 text-sky-500 ring-4 ring-sky-50'
                        : 'bg-sky-500/12 text-sky-400 ring-4 ring-sky-500/8'
                      : isLight
                        ? 'bg-orange-100 text-orange-500 ring-4 ring-orange-50'
                        : 'bg-orange-500/12 text-orange-400 ring-4 ring-orange-500/8'
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <div className={`text-[1.55rem] font-black leading-none sm:text-[1.7rem] ${isLight ? 'text-[#08132f]' : 'text-white'}`}>
                    {value}
                  </div>
                  <div className={`mt-1.5 text-[0.92rem] font-semibold leading-tight ${isLight ? 'text-[#566581]' : 'text-[#b9c5d7]'}`}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
