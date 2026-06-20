import { images } from './images'

export const siteMeta = {
  name: 'Gua Diez',
  fullName: 'Guadalupe Diez',
  role: 'Filmmaker - Fotógrafa',
  tagline: 'Portfolio creativo',
  email: 'guadalupediez.ar@gmail.com',
  instagram: '@gua.diez',
  linkedin: 'Guadalupe Diez',
}

export const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'trabajos', label: 'Trabajos' },
  { id: 'contacto', label: 'Contacto' },
]

export const skills = [
  {
    title: 'Edición de Video',
    text: 'Manejo de Premiere Pro, DaVinci Resolve, CapCut e InShot para edición y corrección de color.',
  },
  {
    title: 'Gestión de Redes Sociales',
    text: 'Planificación, programación y seguimiento de contenido para distintas plataformas digitales.',
  },
  {
    title: 'Herramientas Digitales',
    text: 'Uso de Excel, Google Docs, Google Sheets, Canva y otras herramientas de productividad y organización.',
  },
  {
    title: 'Edición de Fotografía',
    text: 'Edición y retoque de imágenes, corrección de color y preparación del contenido para medios digitales.',
  },
]

export const projectCategories = [
  {
    title: 'Audiovisuales',
    text: 'Participación en rodajes, con experiencia en diferentes áreas como AD, camarógrafa, gaffer y eléctrico.',
  },
  {
    title: 'Fotográficos',
    text: 'Cobertura de eventos sociales, sesiones fotográficas y producción de contenido visual para marcas, emprendimientos y proyectos creativos personales.',
  },
]

// The five featured works, in the same order as the original PDF (pages 5–9)
export const works = [
  {
    id: 'ilda',
    page: '05',
    title: 'Ilda',
    subtitle: 'Cortometraje documental (2025)',
    text: 'En el rol de DOP y camarógrafa.',
    big: images.ildaBig,
    bigAlt: 'Fotograma del cortometraje documental Ilda',
    thumbs: [
      { src: images.ildaThumbRed, alt: 'Tela roja en una escalera' },
      { src: images.ildaThumbElevator, alt: 'Panel de ascensor marcando el piso diez' },
    ],
    variant: 'filmstrip',
  },
  {
    id: 'fotografia-documental',
    page: '06',
    title: 'Fotografía',
    subtitle: 'Documental y callejera (2026)',
    text: 'Registros de diferentes marchas y vistas rosarinas.',
    big: images.fotografiaBig,
    bigAlt: 'Cartel de cartón en una marcha: Hoy son carteles en las marchas',
    thumbs: [
      { src: images.fotografiaThumbTrees, alt: 'Cartel: un país sin educación pública es un país sin futuro' },
      { src: images.fotografiaThumbFlag, alt: 'Bandera argentina entre la multitud' },
      { src: images.fotografiaThumbProtester, alt: 'Manifestante con cartel: quiero vivir sin miedo' },
      { src: images.fotografiaThumbHeadscarf, alt: 'Persona con pañuelo floreado de espaldas entre la multitud' },
    ],
    variant: 'collage',
  },
  {
    id: 'por-un-bife',
    page: '07',
    title: 'Por un bife',
    subtitle: 'Cortometraje ficción (2025)',
    text: 'En el rol de AD.',
    big: images.porunbifeBig,
    bigAlt: 'Escena del cortometraje Por un bife, dos personajes conversando',
    thumbs: [
      { src: images.porunbifeThumbPunch, alt: 'Primer plano de un boxeador con guantes' },
      { src: images.porunbifeThumbGloves, alt: 'Manos ajustando guantes de boxeo' },
    ],
    variant: 'filmstrip',
  },
  {
    id: 'sesion-xv',
    page: '08',
    title: 'Sesión XV',
    subtitle: 'Lara (2026)',
    text: '',
    big: images.sesionxvBig,
    bigAlt: 'Retrato a contraluz de Lara apoyada en un muro al atardecer',
    thumbs: [
      { src: images.sesionxvThumbWall, alt: 'Lara apoyada en un muro de piedra' },
      { src: images.sesionxvThumbFlowers, alt: 'Rosas a contraluz con destello de lente' },
    ],
    variant: 'plain',
  },
  {
    id: 'un-par',
    page: '09',
    title: 'Un Par',
    subtitle: 'Cortometraje ficción (2025)',
    text: 'En el rol de AD.',
    big: images.unparBig,
    bigAlt: 'Fotograma del cortometraje Un Par, una bolsa siendo sostenida',
    thumbs: [
      { src: images.unparThumbCap, alt: 'Retrato de un joven con gorra' },
      { src: images.unparThumbBuilding, alt: 'Vista de un edificio entre árboles' },
    ],
    variant: 'filmstrip',
  },
]
