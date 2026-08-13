import { Section, Button } from '../components/UI.jsx'
export default function NotFound() {
  return (
    <Section>
      <p className="eyebrow text-magenta">404</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">That page isn’t here.</h1>
      <p className="mt-4 max-w-lg text-muted">It may have moved, or the link may be out of date. The homepage will get you back on track.</p>
      <div className="mt-8"><Button to="/">Back to the homepage</Button></div>
    </Section>
  )
}
