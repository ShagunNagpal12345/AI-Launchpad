import { Menu, Moon, Sun, Users, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data/siteData';
import dsLogoPng from '../assets/DS Logo.png';

export default function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/10 bg-base/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-10 xl:px-12">
        <a
          href="/#top"
          className="flex min-w-0 items-center gap-2.5 font-bold text-ink sm:gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="grid h-11 w-11 place-items-center overflow-hidden sm:h-12 sm:w-12">
            <img src={dsLogoPng} alt="Data Sense logo" className="h-10 w-10 object-contain sm:h-11 sm:w-11" />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate text-[0.98rem] sm:text-[1rem]">DataSense</span>
            <span className="mt-0.5 block text-[9px] font-extrabold uppercase tracking-[.16em] text-[#ff7a1a] sm:text-[10px] sm:tracking-[.18em]">
              AI Launchpad
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-line/10 bg-panel2/70 px-3 text-sm font-semibold text-ink"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 text-accent2" /> : <Moon className="h-4 w-4 text-azure" />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <a href="https://www.skool.com/the-agent-lab-3899" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-bold text-slate-950 shadow-glow sm:flex"><Users className="h-4 w-4" />Join Skool</a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line/10 bg-panel2/70 text-ink lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-line/10 bg-base/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl border border-line/10 bg-panel2/60 px-4 py-3 text-sm font-semibold text-ink transition hover:bg-panel2"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://www.skool.com/the-agent-lab-3899"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-slate-950 shadow-glow"
            >
              <Users className="h-4 w-4" />
              Join Skool
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
