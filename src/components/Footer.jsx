import { siteMeta } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-ink text-paper/70 px-6 md:px-12 py-7">
      <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs eyebrow tracking-[0.12em]">
        <p>
          © {year} {siteMeta.fullName}
        </p>
        <button
          onClick={scrollTop}
          className="hover:text-paper transition-colors"
        >
          Volver arriba ↑
        </button>
      </div>
    </footer>
  )
}
