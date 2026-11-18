import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skillGroups } from '../data/profile.js';

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(79,70,229,0.14),transparent_70%)] blur-3xl"
      />

      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to a support desk"
          description="Grouped by how I use them day to day — from the first reply in a chat to the knowledge base article that stops the question coming back."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08} className="h-full">
              <article className="glass-card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30 hover:shadow-glow">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon name={group.icon} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-cyan-300/40 hover:text-white"
                      >
                        {skill}
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
