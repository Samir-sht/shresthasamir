import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { experience } from '../data/profile.js';

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Where I have worked"
          description="Two years across support desks and front-end teams — the mix is why I can read the code behind a reported issue."
        />

        <ol className="relative mt-16 space-y-10 border-l border-white/10 pl-8 sm:pl-12">
          <li
            aria-hidden="true"
            className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-indigo-500 via-cyan-400/50 to-transparent"
          />

          {experience.map((job, index) => (
            <Reveal as="li" key={`${job.company}-${job.period}`} delay={index * 0.08}>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[2.3rem] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:-left-[3.55rem] ${
                    job.current
                      ? 'border-cyan-300 bg-cyan-400/30'
                      : 'border-indigo-400/60 bg-ink-900'
                  }`}
                >
                  {job.current && (
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-cyan-300" />
                  )}
                </span>

                <article className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-glow sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                      <p className="mt-1 text-sm font-medium text-cyan-300">
                        {job.company}
                        <span className="mx-2 text-slate-600">·</span>
                        <span className="font-normal text-slate-400">{job.location}</span>
                      </p>
                    </div>
                    <p
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        job.current
                          ? 'border-cyan-300/40 bg-cyan-400/10 text-cyan-200'
                          : 'border-white/10 bg-white/[0.04] text-slate-400'
                      }`}
                    >
                      {job.period}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
