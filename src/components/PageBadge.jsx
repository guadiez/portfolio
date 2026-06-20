/**
 * The small circular page-number badge ("01.", "02." ...) that sits in the
 * top-right corner of every page in the original PDF.
 */
export default function PageBadge({ number, className = '', light = false }) {
  return (
    <div
      className={`page-badge ${light ? 'text-paper border-paper/70' : 'text-ink border-ink/70'} ${className}`}
    >
      {number}.
    </div>
  )
}
