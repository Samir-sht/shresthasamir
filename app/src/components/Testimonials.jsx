import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import { testimonials } from '../data/profile.js';

export default function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((next, dir) => {
    setDirection(dir);
    setIndex((current) => (next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timer = setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [reduceMotion]);

  const active = testimonials[index];

  const variants = {
    enter: (dir) => (reduceMotion ? { opacity: 0 } : { opacity: 0, x: dir > 0 ? 64 : -64 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => (reduceMotion ? { opacity: 0 } : { opacity: 0, x: dir > 0 ? -64 : 64 }),
  };

  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Feedback placeholders"
          description="Every card below is a placeholder. Replace them with real feedback once you have permission to publish it."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="glass-card relative overflow-hidden p-8 sm:p-10">
            <span aria-hidden="true" className="absolute right-6 top-6 text-indigo-400/20">
              <Icon name="quote" className="h-14 w-14" />
            </span>

            <div className="relative min-h-[9.5rem]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.blockquote
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="pr-12 text-lg leading-relaxed text-slate-300 sm:pr-16 sm:text-xl">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <footer className="mt-7 flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-indigo-500/25 to-cyan-400/25 text-sm font-semibold text-slate-300"
                    >
                      ?
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{active.author}</p>
                      <p className="text-xs text-slate-500">{active.role}</p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => goTo(index - 1, -1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:-translate-x-0.5 hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>

            <ul className="flex items-center gap-2">
              {testimonials.map((item, dotIndex) => (
                <li key={item.quote + dotIndex}>
                  <button
                    type="button"
                    onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
                    aria-label={`Go to testimonial ${dotIndex + 1}`}
                    aria-current={dotIndex === index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dotIndex === index
                        ? 'w-8 bg-gradient-to-r from-indigo-400 to-cyan-300'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => goTo(index + 1, 1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:translate-x-0.5 hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
