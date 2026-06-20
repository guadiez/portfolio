import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navItems, siteMeta } from '../data/content'
import useActiveSection from '../hooks/useActiveSection'
import useScrolled from '../hooks/useScrolled'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(40)
  const active = useActiveSection(navItems.map((n) => n.id))

  const handleClick = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(20,20,20,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 py-4 md:py-5">
        <button
          onClick={() => handleClick('inicio')}
          className="font-display text-xl md:text-2xl tracking-wide text-ink"
          aria-label="Ir al inicio"
        >
          Gua Diez
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleClick(item.id)}
                className="text-[13px] eyebrow tracking-[0.18em] text-ink/70 hover:text-ink transition-colors duration-300"
              >
                {item.label}
              </button>
              {active === item.id && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-ink"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${siteMeta.email}`}
          className="hidden md:inline-block text-[12px] eyebrow tracking-[0.18em] border border-ink/70 rounded-full px-5 py-2 hover:bg-ink hover:text-paper transition-colors duration-300"
        >
          Contactar
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-ink block origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-ink block"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-ink block origin-center"
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-paper border-t border-ink/10"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`text-lg font-body ${
                      active === item.id ? 'text-ink font-semibold' : 'text-ink/60'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${siteMeta.email}`}
                  className="inline-block text-[12px] eyebrow tracking-[0.18em] border border-ink/70 rounded-full px-5 py-2"
                >
                  Contactar
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
