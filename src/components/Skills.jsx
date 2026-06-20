import { motion } from 'framer-motion'
import {
  SiDavinciresolve,
  SiCanva,
  SiGooglesheets,
  SiGoogledocs,
  SiInstagram,
  SiYoutube,
} from 'react-icons/si'
import { FiImage, FiSliders } from 'react-icons/fi'
import Reveal from './Reveal'
import Stagger, { staggerItem } from './Stagger'
import BurstShape from './BurstShape'
import PageBadge from './PageBadge'
import { skills } from '../data/content'

const iconDefs = [
  { Icon: SiDavinciresolve, color: '#233' },
  { Icon: FiSliders, color: '#141414' },
  { Icon: SiCanva, color: '#00C4CC' },
  { Icon: SiInstagram, color: '#E1306C' },
  { Icon: SiYoutube, color: '#FF0000' },
  { Icon: SiGooglesheets, color: '#0F9D58' },
  { Icon: SiGoogledocs, color: '#4285F4' },
  { Icon: FiImage, color: '#141414' },
]

// Arrange the icons evenly around a circle, well outside the laptop in the
// middle, so none of them ever overlaps the screen.
const RADIUS = 42 // % from center
const floatingIcons = iconDefs.map((def, i) => {
  const angle = (i / iconDefs.length) * Math.PI * 2 - Math.PI / 2
  const top = 50 + RADIUS * Math.sin(angle)
  const left = 50 + RADIUS * Math.cos(angle)
  return { ...def, top: `${top}%`, left: `${left}%` }
})

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-paper overflow-hidden"
    >
      <PageBadge number="03" className="absolute top-6 right-6 md:top-10 md:right-10 z-10" />

      <div className="max-w-[1320px] mx-auto grid md:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
        <div>
          <div className="relative">
            <BurstShape className="burst w-[200px] md:w-[280px] -top-8 -left-8" />
            <Reveal as="h2" className="font-display text-ink text-5xl sm:text-6xl md:text-7xl leading-[0.95] relative z-[1] mb-12 md:mb-16">
              Mis
              <br />
              habilidades
            </Reveal>
          </div>

          <Stagger className="relative z-[1] grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {skills.map((skill) => (
              <motion.div key={skill.title} variants={staggerItem}>
                <h3 className="font-display text-ink text-xl md:text-2xl mb-2">
                  {skill.title}
                </h3>
                <p className="text-ink/75 text-sm leading-relaxed max-w-[32ch]">
                  {skill.text}
                </p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* Laptop + floating tool icons */}
        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[480px] aspect-square hidden sm:block">
          {floatingIcons.map(({ Icon, color, top, left }, i) => (
            <div
              key={i}
              className="absolute"
              style={{ top, left, transform: 'translate(-50%, -50%)' }}
            >
              <motion.div
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + (i % 3),
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              >
                <Icon size={24} color={color} aria-hidden="true" />
              </motion.div>
            </div>
          ))}

          {/* Laptop silhouette, pure CSS */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[58%]">
              <div className="rounded-t-xl border-[6px] border-ink/90 bg-ink/5 aspect-[16/10]" />
              <div className="h-3 bg-ink/90 rounded-b-md relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/4 h-full bg-ink/40 rounded-b" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Simplified stack list for small screens, no floating layout */}
        <div className="sm:hidden flex flex-wrap gap-3 justify-center">
          {floatingIcons.map(({ Icon, color }, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center"
            >
              <Icon size={22} color={color} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
