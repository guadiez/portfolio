import { motion } from 'framer-motion'
import { FiInstagram } from 'react-icons/fi'
import { siteMeta } from '../data/content'
import PageBadge from './PageBadge'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 paper-grain overflow-hidden"
    >
      <PageBadge number="01" className="absolute top-6 right-6 md:top-10 md:right-10 z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-[1] max-w-[1320px] mx-auto w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-wrap items-baseline gap-x-6 md:gap-x-10 gap-y-2"
        >
          <h1 className="font-display text-ink text-[13vw] leading-[0.85] md:text-[9vw] xl:text-[7.5rem]">
            Gua
          </h1>
          <h1 className="font-display text-ink text-[13vw] leading-[0.85] md:text-[9vw] xl:text-[7.5rem] -rotate-1">
            Diez
          </h1>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-4 md:mt-6 flex flex-wrap items-center gap-x-8 gap-y-2"
        >
          <p className="eyebrow text-grey-dark text-sm md:text-base tracking-[0.3em]">
            Portfolio creativo
          </p>
          <p className="font-display text-ink text-2xl md:text-4xl">
            Filmmaker - Fotógrafa
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="relative z-[1] mt-8 sm:mt-16 md:mt-24 flex items-center justify-between max-w-[1320px] mx-auto w-full"
      >
        <a
          href={`mailto:${siteMeta.email}`}
          className="eyebrow text-grey-dark text-[11px] md:text-sm tracking-[0.18em] hover:text-ink transition-colors"
        >
          {siteMeta.email}
        </a>
        <a
          href="https://instagram.com/gua.diez"
          target="_blank"
          rel="noreferrer"
          className="eyebrow flex items-center gap-2 text-grey-dark text-[11px] md:text-sm tracking-[0.18em] hover:text-ink transition-colors"
        >
          <FiInstagram aria-hidden="true" />
          {siteMeta.instagram}
        </a>
      </motion.div>

      {/* Subtle scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-grey"
      >
        <span className="eyebrow text-[10px] tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-grey"
        />
      </motion.div>
    </section>
  )
}
