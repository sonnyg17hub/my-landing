import { useState } from 'react'

const BRAND = 'StunninglyDigital' // palitan mo
const EMAIL = 'stunninglydigital@gmail.com' // palitan mo

const services = [
  { title: 'Landing Page', text: 'One focused page that explains your offer and gets people to message or book you.' },
  { title: 'Business Website', text: 'A multi-page site with your services, gallery, contact details, and a working inquiry form.' },
  { title: 'Funnel + Automation', text: 'Ad or social link, landing page, form, payment, and automatic emails, all connected.' },
]

const steps = [
  { title: 'Fill out the form', text: 'Tell us what you need, your budget, and your deadline.' },
  { title: 'Get a fixed quote', text: 'You receive the scope and price. No surprise charges.' },
  { title: 'We build it', text: 'You see progress and send feedback. Two revision rounds are included.' },
  { title: 'Launch and handover', text: 'We put it online and give you the files and logins.' },
]

const projects = [
  { name: 'Salon Booking Site', type: 'Business Website' },
  { name: 'Online Course Funnel', type: 'Funnel + Automation' },
  { name: 'Resort Landing Page', type: 'Landing Page' },
]

const plans = [
  { name: 'Starter', price: '₱5,999', note: 'Landing Page', items: ['1 page', 'Mobile responsive', 'Contact form', '1 revision round'] },
  { name: 'Business', price: '₱12,999', note: 'Business Website', items: ['Up to 5 pages', 'Inquiry form + email alerts', 'Basic SEO setup', '2 revision rounds'], featured: true },
  { name: 'Funnel', price: '₱29,999', note: 'Funnel + Automation', items: ['Landing + thank-you pages', 'Payment integration', 'Automated emails', '2 revision rounds'] },
]

const faqs = [
  { q: 'How long does a project take?', a: 'Landing pages take 3 to 5 days. Websites and funnels take 1 to 2 weeks, depending on the scope.' },
  { q: 'How do I pay?', a: 'A 50% deposit starts the project and the balance is due before handover. GCash, bank transfer, PayPal, and card are accepted.' },
  { q: 'Do I own the website?', a: 'Yes. After final payment, you receive the source files and all account access.' },
  { q: 'Can you work with clients outside the Philippines?', a: 'Yes. Everything is handled online, so we work with clients in any time zone.' },
]

function scrollToStart(e) {
  if (e) e.preventDefault()
  document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Week 2: dito natin ikokonekta ang Supabase
    setSent(true)
  }

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">{BRAND}</a>
        <button className="btn btn-small" onClick={scrollToStart}>Get started</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>Websites and apps that bring in customers, delivered at a fixed price.</h1>
              <p className="lead">
                We build landing pages, business websites, and sales funnels for small businesses
                in the Philippines and abroad. Pick a package, answer a short form, and we take it from there.
              </p>
              <button className="btn btn-light" onClick={scrollToStart}>Start your project</button>
            </div>
            <div className="mock" aria-hidden="true">
              <div className="mock-bar"><i /><i /><i /></div>
              <div className="mock-body">
                <b className="m1" /><b className="m2" /><b className="m3" />
                <span className="m-btn" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2>What we build</h2>
            <div className="grid">
              {services.map((s) => (
                <article className="card" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <a href="#get-started" onClick={scrollToStart}>Ask about this</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <h2>How it works</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2>Sample projects</h2>
            <div className="grid">
              {projects.map((p) => (
                <article className="project" key={p.name}>
                  <div className="thumb" />
                  <h3>{p.name}</h3>
                  <p>{p.type}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <h2>Pricing</h2>
            <div className="grid">
              {plans.map((p) => (
                <article className={'plan' + (p.featured ? ' featured' : '')} key={p.name}>
                  <h3>{p.name}</h3>
                  <p className="note">{p.note}</p>
                  <p className="price">{p.price}</p>
                  <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  <button className={'btn ' + (p.featured ? 'btn-light' : 'btn-dark')} onClick={scrollToStart}>
                    Choose {p.name}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap narrow">
            <h2>Questions</h2>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section start" id="get-started">
          <div className="wrap narrow">
            <h2>Tell us about your project</h2>
            {sent ? (
              <p className="lead">Thanks. The form is not connected yet, but this is where your request will be saved.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label>Your name<input required type="text" placeholder="Juan Dela Cruz" /></label>
                <label>Email<input required type="email" placeholder="you@email.com" /></label>
                <label>Package
                  <select defaultValue="">
                    <option value="" disabled>Choose one</option>
                    <option>Landing Page</option>
                    <option>Business Website</option>
                    <option>Funnel + Automation</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>What do you need?<textarea rows="4" placeholder="Describe your business and what you want built." /></label>
                <button className="btn btn-light" type="submit">Send request</button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} {BRAND}</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </footer>
    </>
  )
}
