import Link from "next/link";
import { notes } from "@/lib/notes";

const capabilities = [
  { title: "Applications", text: "React, Next.js, TypeScript, APIs, authentication, data-backed workflows, and the glue that turns separate services into one useful product." },
  { title: "Platforms", text: "Enterprise CMS, headless architecture, search, deployment workflows, environment troubleshooting, and systems that have to keep working after launch." },
  { title: "Automation", text: "PowerShell, Python, SQL, validation frameworks, migration tooling, and scripts built to make repetitive work somebody else's problem." },
  { title: "AI", text: "AI-enabled applications, Python APIs, model integrations, prototyping, and the platform questions behind operating AI responsibly at scale." }
];

const projects = [
  {
    title: "BlendBase",
    type: "Full-Stack Application",
    description: "A recipe platform with Supabase authentication, OAuth, PostgreSQL-backed CRUD workflows, reviews, ratings, image storage, protected routes, and a responsive React interface.",
    tags: ["React", "Supabase", "PostgreSQL", "Vite", "Vercel"],
    github: "https://github.com/rchern315/blendbase",
    live: "https://blendbase.vercel.app",
    accent: "blend"
  },
  {
    title: "Central Intelligence",
    type: "Data & Platform Application",
    description: "A data-driven dashboard architecture that separates ingestion and processing from the UI, uses Supabase as the shared data layer, and presents news, sentiment, market data, filters, and charts.",
    tags: ["React", "Supabase", "Data Pipeline", "Recharts", "Vercel"],
    github: "https://github.com/rchern315/central-intelligence-ui",
    live: "https://central-intelligence-ui.vercel.app/",
    accent: "intel"
  },
  {
    title: "AdSpark",
    type: "AI-Enabled Product",
    description: "An evolving Next.js application for AI-assisted ad creation, media management, configurable placements, and reusable ad-delivery workflows.",
    tags: ["Next.js", "TypeScript", "AI APIs", "Media", "Vercel"],
    github: "https://github.com/rchern315/random-ad-generator",
    live: null,
    accent: "spark"
  }
];

const experience = [
  {
    years: "2024 — Present",
    role: "Full-Stack Software Engineer",
    company: "Central Garden & Pet",
    text: "Expanded scope across application development, platform support, automation, integrations, DevOps, data workflows, production reliability, and AI-enabled solutions across a large enterprise portfolio."
  },
  {
    years: "2016 — 2023",
    role: "Senior Front-End Engineer",
    company: "Central Garden & Pet",
    text: "Led front-end engineering across enterprise brands, building reusable component systems, CMS solutions, integrations, accessible interfaces, and shared engineering patterns."
  },
  {
    years: "2014 — 2016",
    role: "Front-End Developer",
    company: "Central Garden & Pet",
    text: "Built responsive digital experiences and reusable front-end components while supporting CMS implementations, accessibility, browser compatibility, and production troubleshooting."
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Robin Chernak home">RC<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#notes">Engineering Notes</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <div className="eyebrow">FULL-STACK SOFTWARE ENGINEER</div>
          <h1>I build systems that <span>work in the real world.</span></h1>
          <p className="hero-lede">
            Applications, internal tools, automation, integrations, platform reliability, and AI-enabled systems — with a soft spot for the problems that start with, “Okay, this is weird.”
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">See my work</a>
            <a className="button secondary" href="https://github.com/rchern315" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div className="focus-row">
            <span>Full-Stack</span><span>Platform Engineering</span><span>AI</span><span>Automation</span><span>DevOps</span><span>Data & Integrations</span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="terminal-bar"><span /><span /><span /></div>
          <div className="terminal-body">
            <div className="terminal-label">robin.profile()</div>
            <pre>{'{\n  role: "Full-Stack Software Engineer",\n  experience: "12+ years",\n  portfolio: "65+ sites & brands",\n  likes: ["solving the weird stuff", "automation",\n          "clean architecture", "shipping useful things"],\n  currentlyExploring: "AI platforms"\n}'}</pre>
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="section-heading">
          <div><div className="eyebrow">WHAT I DO</div><h2>More than “web stuff.”</h2></div>
          <p>I work across the application, data, platform, and operational layers — wherever the problem actually lives.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article className="capability-card" key={item.title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <div><div className="eyebrow">SELECTED WORK</div><h2>Projects with some teeth.</h2></div>
          <p>Not a wall of tutorial projects. These are the builds that best represent how I think about applications, systems, and engineering tradeoffs.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={"project-card " + project.accent} key={project.title}>
              <div className="project-visual">
                <div className="project-browser">
                  <div className="browser-dots"><span /><span /><span /></div>
                  <div className="visual-content">
                    <span>{project.type}</span>
                    <strong>{project.title}</strong>
                    <div className="visual-lines"><i /><i /><i /></div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo ↗</a>}
                  <a href={project.github} target="_blank" rel="noreferrer">View code ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="case-studies">
        <div className="section-heading">
          <div><div className="eyebrow">CASE STUDIES</div><h2>Real problems. Sanitized details.</h2></div>
          <p>Enterprise work is often more interesting than what can safely be published in a public repo. These case studies focus on the engineering problem and approach without exposing proprietary code or internal data.</p>
        </div>
        <div className="case-grid">
          <article className="case-card">
            <div className="case-icon">QA</div>
            <div><span>Product Data · Automation</span><h3>Automating downstream product QA</h3><p>Built a modular validation framework to compare source product data with rendered downstream output, surface mismatches, and generate review-friendly reports.</p><a href="#notes">Read the engineering note ↓</a></div>
          </article>
          <article className="case-card">
            <div className="case-icon">OPS</div>
            <div><span>Reliability · DevOps</span><h3>Debugging across the whole request path</h3><p>Troubleshooting production issues across application code, deployments, IIS, search/indexing, infrastructure, APIs, and data — because the browser is not always where the bug started.</p><a href="#notes">Read the engineering note ↓</a></div>
          </article>
          <article className="case-card">
            <div className="case-icon">AI</div>
            <div><span>AI · Platform Thinking</span><h3>Building AI into products without outsourcing judgment</h3><p>Using AI both as an engineering accelerator and as an application capability, while keeping architecture, security, maintainability, observability, and human ownership in the loop.</p><a href="#notes">Read the engineering note ↓</a></div>
          </article>
        </div>
      </section>

      <section className="section" id="notes">
        <div className="section-heading">
          <div><div className="eyebrow">ENGINEERING NOTES</div><h2>Things I learned the non-boring way.</h2></div>
          <p>Practical notes from building, debugging, automating, and occasionally asking a system why it chose chaos today.</p>
        </div>
        <div className="notes-grid">
          {notes.map((note) => (
            <Link href={"/engineering-notes/" + note.slug} className="note-card" key={note.slug}>
              <span>{note.eyebrow}</span><h3>{note.title}</h3><p>{note.summary}</p>
              <div>{note.readingTime} <b>Read →</b></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <div><div className="eyebrow">EXPERIENCE</div><h2>Built over time. Broadened on purpose.</h2></div>
          <p>My foundation is front-end engineering. My work grew from there into integrations, automation, platform operations, data, full-stack development, and AI.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.years + item.role}>
              <div className="timeline-years">{item.years}</div><div className="timeline-dot" />
              <div className="timeline-content"><h3>{item.role}</h3><span>{item.company}</span><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div><div className="eyebrow">ABOUT</div><h2>I like figuring out how the pieces connect.</h2></div>
        <div className="about-copy">
          <p>I am a self-taught software engineer with 12+ years of professional experience, supplemented by college coursework and continued technical training.</p>
          <p>What keeps me interested is not one framework or one layer of the stack. It is the systems thinking: where the data comes from, what transforms it, what can fail, how teams operate it, and how to make the next person&apos;s job easier.</p>
          <p>I also genuinely enjoy building things. Sometimes that is an enterprise automation framework. Sometimes it is an AI prototype. Sometimes it starts because I thought, “There has to be a better way to do this.”</p>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-card">
          <div className="eyebrow">LET&apos;S CONNECT</div>
          <h2>Have an interesting problem?</h2>
          <p>I am always interested in conversations around full-stack engineering, platforms, automation, AI, and the weird technical problems that do not fit neatly into one box.</p>
          <div className="hero-actions">
            <a className="button primary" href="https://www.linkedin.com/in/robin-chernak-967aa1150/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="button secondary" href="https://github.com/rchern315" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Robin Chernak</span>
        <span>Built with Next.js, TypeScript, and an unreasonable dislike of repetitive work.</span>
      </footer>
    </main>
  );
}
