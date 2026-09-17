import { ArrowRight, ExternalLink, GitBranch } from 'lucide-react'
import { resources } from '../content'

export function Resources() {
  const localResources = [
    ...resources
  ]

  return <article className="article resources">
    <div className="article-header compact">
      <span className="section-eyebrow">REFERENCIA / FUENTES OFICIALES</span>
      <h1>Recursos de utilidad.</h1>
      <p>Enlaces verificables para profundizar en Azure, arquitectura en cloud y archivos de referencia en profuturo.</p>
    </div>
    <div className="resource-list">
      {localResources.map(([title, description, url]) => <a className="resource-row" href={url} target="_blank" rel="noreferrer" key={title}>
        <div className="resource-icon"><ExternalLink size={18} /></div>
        <div><h3>{title}</h3><p>{description}</p></div>
        <ArrowRight size={18} />
      </a>)}
    </div>
    <div className="github-note">
      <GitBranch size={21} />
      <div><strong>Construido para vivir en GitHub.</strong><p>El contenido es versionable, revisable y publicable desde GitHub Pages sin backend.</p></div>
    </div>
  </article>
}
