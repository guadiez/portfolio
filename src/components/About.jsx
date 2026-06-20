import Reveal from './Reveal'
import BurstShape from './BurstShape'
import PageBadge from './PageBadge'
import { images } from '../data/images'

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-paper overflow-hidden"
    >
      <PageBadge number="02" className="absolute top-6 right-6 md:top-10 md:right-10 z-10" />

      <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-16 md:gap-12 items-center">
        <div className="relative">
          <BurstShape
            className="burst w-[220px] md:w-[320px] -top-10 -left-10 md:-left-16"
          />

          <Reveal as="h2" className="font-display text-ink text-5xl sm:text-6xl md:text-7xl leading-[0.95] relative z-[1]">
            Un poco
            <br />
            sobre mí
          </Reveal>

          <Reveal
            delay={0.15}
            as="div"
            className="relative z-[1] mt-8 space-y-5 text-ink/85 text-[15px] md:text-base leading-relaxed max-w-[46ch]"
          >
            <p>
              A los 6 años empecé a estudiar teatro y a actuar en cortometrajes
              independientes. Con el tiempo, me interesó más el detrás de
              cámara, por lo que me enfoqué en la fotografía y en sus aspectos
              técnicos. En la secundaria, mi interés por el cine se profundizó
              al graduarme como Bachiller en Artes Visuales, lo que me impulsó
              a estudiar la Tecnicatura en Realización Audiovisual.
            </p>
            <p>
              Actualmente mi foco es la fotografía documental. También,
              trabajo en fotografía social, para marcas, entre otros.
              Paralelamente, realizo cortometrajes, principalmente de
              ficción, como otra forma de desarrollar mi mirada y mi interés
              por la narrativa audiovisual.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[420px]">
          <div className="filmstrip img-zoom aspect-[3/5]">
            <img
              src={images.aboutPortrait}
              alt="Guadalupe Diez sosteniendo una cámara fotográfica"
              loading="lazy"
              className="grayscale"
            />
          </div>
          <p className="mt-4 text-ink/80 text-sm leading-snug">
            Guadalupe, 21 años.
            <br />
            Rosario, Santa Fe
          </p>
        </Reveal>
      </div>
    </section>
  )
}
