import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'
import Reveal from './Reveal'
import PageBadge from './PageBadge'
import { siteMeta } from '../data/content'

const links = [
  { Icon: FiInstagram, label: siteMeta.instagram, href: 'https://instagram.com/gua.diez' },
  { Icon: FiLinkedin, label: siteMeta.linkedin, href: 'https://www.linkedin.com/' },
  { Icon: FiMail, label: siteMeta.email, href: `mailto:${siteMeta.email}` },
]

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-28 bg-paper paper-grain overflow-hidden"
    >
      <PageBadge number="10" className="absolute top-6 right-6 md:top-10 md:right-10 z-10" />

      <div className="relative z-[1] max-w-[1320px] mx-auto w-full">
        <Reveal>
          <h2 className="font-display text-ink text-[13vw] sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.92] text-center md:text-left">
            ¡Trabajemos
            <br />
            juntos!
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-10 md:gap-12 items-start max-w-[1100px] md:mx-0 mx-auto">
          <Reveal delay={0.1}>
            <p className="text-ink/85 text-base md:text-lg leading-relaxed max-w-[36ch]">
              ¿Tenés una propuesta, proyecto o consulta? No dudes en
              contactarme a través de cualquiera de estos medios!
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-4">
            {links.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center gap-3 text-ink/80 hover:text-ink transition-colors w-full max-w-full"
              >
                <span className="w-9 h-9 shrink-0 rounded-full border border-ink/40 flex items-center justify-center group-hover:border-ink group-hover:bg-ink group-hover:text-paper transition-colors">
                  <Icon size={16} aria-hidden="true" />
                </span>
                <span className="eyebrow text-sm tracking-[0.12em] break-all">{label}</span>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

