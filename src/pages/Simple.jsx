import PageHero from '../components/PageHero.jsx'
import { Section, SectionHead, CardGrid, Button } from '../components/UI.jsx'

// A data-driven template. Every remaining flowchart page can be described as
// a hero + a list of sections, which keeps 30-odd pages from becoming 30-odd components.
export default function Simple({ hero, sections = [], actions = [] }) {
  return (
    <>
      <PageHero {...hero}>
        {actions.map((a) => (
          <Button key={a.label} to={a.to} variant={a.variant}>{a.label}</Button>
        ))}
      </PageHero>
      {sections.map((s, i) => (
        <Section key={s.title} ground={i % 2 === 1 ? 'white' : 'paper'}>
          <SectionHead eyebrow={s.eyebrow} t={s.t} title={s.title} intro={s.intro} />
          {s.items && <CardGrid cols={s.cols ?? 3} items={s.items} />}
        </Section>
      ))}
    </>
  )
}
