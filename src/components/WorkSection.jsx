import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'
import PageBadge from './PageBadge'

function FilmThumb({ src, alt, className = '' }) {
  return (
    <div className={`filmstrip img-zoom aspect-[4/3] ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

function PlainThumb({ src, alt, className = '' }) {
  return (
    <div className={`img-zoom rounded-xl overflow-hidden shadow-2xl aspect-[4/3] ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
    </div>
  )
}

export default function WorkSection({ work }) {
  const { page, title, subtitle, text, big, bigAlt, thumbs, variant } = work
  const imgWrapRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imgWrapRef,
    offset: ['start end', 'end start'],
  })
  // Very subtle parallax: the photo drifts a few percent as the section scrolls.
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <section
      id={work.id}
      className="relative min-h-screen flex flex-col md:flex-row bg-paper overflow-hidden"
    >
      <PageBadge
        number={page}
        light
        className="absolute top-6 right-6 md:top-8 md:right-8 z-20 mix-blend-difference"
      />

      {/* Left column: thumbnails + title block */}
      <div className="relative z-10 w-full md:w-[40%] lg:w-[36%] px-6 md:px-10 pt-24 pb-12 md:py-20 flex flex-col justify-center order-2 md:order-1">
        {variant === 'collage' ? (
          <Reveal className="grid grid-cols-2 gap-3 mb-8 max-w-[420px]">
            {thumbs.map((t, i) => (
              <PlainThumb
                key={i}
                src={t.src}
                alt={t.alt}
                className={i % 2 === 1 ? 'mt-6' : ''}
              />
            ))}
          </Reveal>
        ) : (
          <div className="relative mb-10 h-[230px] sm:h-[260px] max-w-[420px]">
            <Reveal className="absolute top-0 left-0 w-[68%]">
              {variant === 'filmstrip' ? (
                <FilmThumb src={thumbs[0].src} alt={thumbs[0].alt} />
              ) : (
                <PlainThumb src={thumbs[0].src} alt={thumbs[0].alt} />
              )}
            </Reveal>
            <Reveal delay={0.15} className="absolute bottom-0 right-0 w-[58%]">
              {variant === 'filmstrip' ? (
                <FilmThumb src={thumbs[1].src} alt={thumbs[1].alt} />
              ) : (
                <PlainThumb src={thumbs[1].src} alt={thumbs[1].alt} />
              )}
            </Reveal>
          </div>
        )}

        <Reveal delay={0.1}>
          <h2 className="font-display text-ink text-5xl sm:text-6xl leading-[0.92] mb-2">
            {title}
          </h2>
          <p className="eyebrow text-grey-dark text-xs md:text-sm tracking-[0.18em] mb-4">
            {subtitle}
          </p>
          {text && (
            <p className="text-ink/85 text-[15px] md:text-base max-w-[34ch]">{text}</p>
          )}
        </Reveal>
      </div>

      {/* Right column: full-bleed big photo */}
      <Reveal
        as="div"
        y={0}
        ref={imgWrapRef}
        className="img-zoom relative w-full md:w-[60%] lg:w-[64%] h-[55vh] md:h-screen order-1 md:order-2"
      >
        <motion.img
          style={{ y }}
          src={big}
          alt={bigAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-[112%] -top-[6%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </Reveal>
    </section>
  )
}
