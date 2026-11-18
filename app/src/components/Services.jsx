import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { services } from '../data/profile.js';

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your team and your users"
          description="The support work I do every day, from the first reported symptom to a documented answer other users can find on their own."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.07} className="h-full">
              <article className="glass-card group relative h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-glow">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:text-white">
                    <Icon name={service.icon} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
