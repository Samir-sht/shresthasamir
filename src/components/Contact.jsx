import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/profile.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyForm = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell me how I can help.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return errors;
}

const contactDetails = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: 'phone',
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  { icon: 'pin', label: 'Location', value: profile.location },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(emptyForm);
    }
  };

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors duration-200 focus:bg-white/[0.06] ${
      errors[field] ? 'border-rose-400/60' : 'border-white/10 hover:border-white/20'
    }`;

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(34,211,238,0.12),transparent_70%)] blur-3xl"
      />

      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your support desk"
          description="Send a message and I will get back to you. For anything urgent, email or call me directly."
        />

        {/* Animated call-to-action banner */}
        <Reveal className="mt-14">
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600/25 via-ink-800/60 to-cyan-500/20 p-8 text-center shadow-card backdrop-blur-xl sm:p-10"
          >
            <motion.span
              aria-hidden="true"
              animate={
                reduceMotion ? undefined : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }
              }
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(99,102,241,0.18),transparent,rgba(34,211,238,0.18),transparent)] bg-[length:200%_100%]"
            />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Looking for a support engineer who closes the loop?
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
                I confirm every fix with the user before a ticket is closed — and write the article
                that keeps the same question from coming back.
              </p>
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow"
              >
                Email me directly
                <Icon name="arrow" className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="h-full">
            <div className="glass-card flex h-full flex-col gap-4 p-7 sm:p-8">
              <h3 className="text-lg font-semibold text-white">Contact details</h3>

              <ul className="space-y-4">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300">
                      <Icon name={detail.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm font-medium text-slate-200 transition-colors duration-200 hover:text-cyan-300"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-200">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Samir Shrestha on LinkedIn"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <Icon name="linkedin" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <form onSubmit={handleSubmit} noValidate className="glass-card h-full p-7 sm:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={fieldClass('name')}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-2 text-xs text-rose-300">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={fieldClass('email')}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-2 text-xs text-rose-300">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="How can I help?"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${fieldClass('message')} resize-y`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-2 text-xs text-rose-300">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-glow"
                >
                  Send message
                  <Icon name="arrow" className="h-4 w-4" />
                </motion.button>

                <p aria-live="polite" className="min-h-[1.25rem] text-center text-xs">
                  {submitted ? (
                    <span className="text-cyan-300">
                      Thanks — your details look good. This form validates in the browser only, so
                      please also email {profile.email}.
                    </span>
                  ) : (
                    <span className="text-slate-500">
                      Front-end validation only — no message is sent anywhere yet.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
