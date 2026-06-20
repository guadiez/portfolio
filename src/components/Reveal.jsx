import { forwardRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Fades + slides content in gently as it scrolls into view.
 * Wrap any element/section content with this for a consistent,
 * subtle scroll-reveal across the whole site.
 */
const Reveal = forwardRef(function Reveal(
  {
    children,
    delay = 0,
    y = 28,
    duration = 0.8,
    className = '',
    as = 'div',
    once = true,
    amount = 0.2,
  },
  ref
) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
})

export default Reveal
