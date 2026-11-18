import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon.jsx';
import { profile } from '../data/profile.js';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.05 } },
  };
  const item = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <section id="home" className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40">
      {/* Soft gradient glow and floating shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.30),transparent_65%)] blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_65%)] blur-3xl" />
        <div className="absolute left-[3%] top-12 h-24 w-24 animate-float rounded-3xl border border-indigo-400/30 bg-indigo-500/10 backdrop-blur-sm" />
        <div className="absolute right-[10%] top-20 h-16 w-16 animate-drift rounded-full border border-cyan-300/30 bg-cyan-400/10" />
        <div className="absolute bottom-20 left-[8%] h-14 w-14 animate-drift rounded-xl border border-indigo-400/25 bg-indigo-500/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(5,6,15,0.85))]" />
      </div>

      <div className="section-shell">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="text-center lg:text-left">
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Supporting WordPress themes and Masteriyo LMS
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Technical support that
              <span className="gradient-text"> actually resolves the ticket</span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-lg font-semibold text-white">
              {profile.name}
              <span className="mx-2 text-slate-600">·</span>
              <span className="font-medium text-cyan-300">{profile.title}</span>
            </motion.p>

            <motion.p
              variants={item}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0"
            >
              {profile.heroIntro}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.a
                href="#experience"
                whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow sm:w-auto"
              >
                View Experience
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors duration-200 hover:border-cyan-300/50 hover:text-cyan-300 sm:w-auto"
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 lg:justify-start"
            >
              <li className="flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4 text-indigo-400" />
                {profile.location}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" className="h-4 w-4 text-indigo-400" />
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors duration-200 hover:text-cyan-300"
                >
                  {profile.email}
                </a>
              </li>
            </motion.ul>
          </div>

          {/* Profile image placeholder */}
          <motion.div variants={item} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 blur-2xl"
              />
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-card relative flex h-72 w-72 flex-col items-center justify-center gap-3 overflow-hidden rounded-[2rem] border-white/15 sm:h-80 sm:w-80"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/80 to-cyan-400/80 text-3xl font-bold text-ink-950">
                  SS
                </div>
                <p className="text-sm font-medium text-slate-300">Profile photo placeholder</p>
                <p className="px-8 text-center text-xs text-slate-500">
                  Replace this block with your photo in src/components/Hero.jsx
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
