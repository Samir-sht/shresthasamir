import Counter from './Counter.jsx';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { profile, stats } from '../data/profile.js';

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="A support specialist who is comfortable in the code"
          description="Not a WordPress developer — a technical support professional who reads code, reproduces issues and explains fixes in plain language."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal className="glass-card p-7 sm:p-9">
            <p className="text-base leading-relaxed text-slate-300">{profile.aboutParagraph}</p>

            <div className="mt-8 flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
                <Icon name="cap" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{profile.education.degree}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {profile.education.school}, {profile.education.city}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-cyan-300/80">
                  Graduated {profile.education.year}
                </p>
              </div>
            </div>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat, index) => (
              <Reveal as="li" key={stat.label} delay={index * 0.1}>
                <div className="glass-card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow">
                  <p className="text-4xl font-extrabold tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} className="gradient-text" />
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
