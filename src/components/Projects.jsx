import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { projects } from '../data/profile.js';

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Sample work placeholders"
          description="These three cards are placeholders. Swap in your own articles, guides and builds — nothing here is published work yet."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <article className="glass-card group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-glow">
                {/* Hover preview panel */}
                <div className="relative h-40 overflow-hidden border-b border-white/10 bg-gradient-to-br from-indigo-500/15 via-ink-800 to-cyan-400/10">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_60%)] opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <span className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-ink-950/60 text-cyan-300 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                    <Icon name={project.icon} />
                  </span>
                  <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-ink-950/70 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-300 backdrop-blur">
                    Placeholder
                  </span>
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink-950/80 px-5 py-3 text-xs font-medium text-cyan-200 backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
                    Replace with your own project
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors duration-200 group-hover:border-cyan-300/30"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
