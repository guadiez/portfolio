import { works } from '../data/content'
import WorkSection from './WorkSection'

export default function ProjectGallery() {
  return (
    <div id="trabajos" className="relative">
      {works.map((work) => (
        <WorkSection key={work.id} work={work} />
      ))}
    </div>
  )
}
