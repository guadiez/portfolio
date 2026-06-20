import { FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'
import BurstShape from './BurstShape'
import PageBadge from './PageBadge'
import { projectCategories } from '../data/content'
import { images } from '../data/images'

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-paper overflow-hidden"
    >
      <PageBadge number="04" className="absolute top-6 right-6 md:top-10 md:right-10 z-10" />

      <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="relative">
            <BurstShape className="burst w-[260px] md:w-[360px] -top-12 -left-10" fill="#dedad1" />
            <Reveal as="h2" className="font-display text-ink text-6xl sm:text-7xl md:text-8xl leading-[0.9] relative z-[1] mb-12 md:mb-16">
              Proyectos
            </Reveal>
          </div>

          <div className="relative z-[1] space-y-10 max-w-[44ch]">
            <Reveal>
              <h3 className="font-display text-ink text-2xl md:text-3xl mb-2">
                Audiovisuales
              </h3>
              <p className="text-ink/80 text-[15px] leading-relaxed">
                Participación en rodajes, con experiencia en diferentes áreas
                como AD, camarógrafa, gaffer y eléctrico.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-display text-ink text-2xl md:text-3xl mb-2">
                Fotográficos
              </h3>
              <p className="text-ink/80 text-[15px] leading-relaxed">
                Cobertura de eventos sociales, sesiones fotográficas y
                producción de contenido visual para marcas, emprendimientos y
                proyectos creativos personales.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stacked photo cards */}
        <div className="relative h-[420px] sm:h-[480px] md:h-[520px] max-w-[520px] w-full mx-auto">
          <Reveal
            delay={0.05}
            className="img-zoom absolute top-0 left-0 w-[64%] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={images.proyectoFireflies}
              alt="Luciérnagas en un campo al atardecer"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Reveal>

          <Reveal
            delay={0.18}
            className="img-zoom absolute top-[34%] right-0 w-[58%] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={images.proyectoReedsMoon}
              alt="Luna entre juncos durante la noche"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Reveal>

          <Reveal
            delay={0.3}
            className="img-zoom absolute bottom-0 left-[10%] w-[58%] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={images.proyectoDog}
              alt="Perro mirando hacia un costado sobre el pasto"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </Reveal>

          <Reveal
            delay={0.45}
            className="absolute -bottom-10 right-0 sm:right-4 flex items-center gap-2 text-ink/80"
          >
            <span className="text-sm md:text-base font-body">
              Algunos de mis trabajos
            </span>
            <FiArrowRight aria-hidden="true" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
