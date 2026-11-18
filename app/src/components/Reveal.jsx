import { motion, useReducedMotion } from 'framer-motion';

/**
 * Fade-and-rise wrapper that plays once when the element scrolls into view.
 * With prefers-reduced-motion the content simply renders in place.
 */
export default function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
