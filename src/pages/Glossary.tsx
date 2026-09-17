import { useState } from 'react'
import { ExternalLink, Search } from 'lucide-react'
import { glossary } from '../content'

export function Glossary() {
  const [term, setTerm] = useState('')
  const [category, setCategory] = useState('Todas')
  const categories = ['Todas', ...Array.from(new Set(glossary.map((entry) => entry[2])))]
  const entries = glossary.filter(([name, definition, group]) => (category === 'Todas' || group === category) && `${name} ${definition}`.toLowerCase().includes(term.toLowerCase()))

  return <article className="article glossary">
    <div className="article-header compact">
      <span className="section-eyebrow">REFERENCIA / GLOSARIO</span>
      <h1>Palabras que conviene conocer.</h1>
      <p>Primero una definición sencilla, después una explicación técnica. El contexto se construye término por término.</p>
    </div>
    <div className="filter-row">
      <div className="search-wrap inline"><Search size={17} /><input value={term} onChange={(event) => setTerm(event.target.value)} placeholder="Buscar términos" aria-label="Buscar en el glosario" /></div>
      <div className="filters">{categories.map((item) => <button className={category === item ? 'selected' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    </div>
    <div className="glossary-grid">{entries.map(([name, definition, group]) => <div className="term-card" key={name}>
      <span className="tag">{group.toUpperCase()}</span><h3>{name}</h3><p>{definition}</p>
      <a href="https://learn.microsoft.com/azure/" target="_blank" rel="noreferrer">Referencia relacionada <ExternalLink size={13} /></a>
    </div>)}</div>
  </article>
}
