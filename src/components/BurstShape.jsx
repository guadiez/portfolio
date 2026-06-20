/**
 * Recreates the irregular grey "torn paper" burst shape that sits behind
 * several headings in the original PDF (Sobre mí, Habilidades, Proyectos,
 * Fotografía). Pure SVG so it scales cleanly at any size.
 */
export default function BurstShape({ className = '', fill = '#dedad1' }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M200 0 L222 130 L320 40 L260 160 L400 150 L268 200 L400 250 L260 240 L320 360 L222 270 L200 400 L178 270 L80 360 L140 240 L0 250 L132 200 L0 150 L140 160 L80 40 L178 130 Z"
        fill={fill}
      />
    </svg>
  )
}
