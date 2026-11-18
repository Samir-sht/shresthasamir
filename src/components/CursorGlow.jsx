import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Soft glow that trails the pointer. Desktop only: it is skipped on touch
 * devices, on small screens, and when the visitor prefers reduced motion.
 */
export default function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 260, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (reduceMotion) return undefined;

    const query = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
    const sync = () => setEnabled(query.matches);
    sync();
    query.addEventListener('change', sync);

    return () => query.removeEventListener('change', sync);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return undefined;

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-[55] -ml-[150px] -mt-[150px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.16),rgba(34,211,238,0.08)_45%,transparent_70%)] blur-xl"
    />
  );
}
