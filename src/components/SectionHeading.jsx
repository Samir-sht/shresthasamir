import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const centered = align === 'center';

  return (
    <header className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/90">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <div
          className={`mt-6 h-px w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 ${
            centered ? 'mx-auto' : ''
          }`}
        />
      </Reveal>
    </header>
  );
}
