import Icon from './Icon.jsx';
import { navLinks, profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/80 py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-xs text-slate-500">
            {profile.title} · {profile.location}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-medium text-slate-400 transition-colors duration-200 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Samir Shrestha on LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-cyan-300"
          >
            <Icon name="linkedin" className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.name}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-cyan-300"
          >
            <Icon name="mail" className="h-5 w-5" />
          </a>
        </div>
      </div>

      <p className="section-shell mt-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
