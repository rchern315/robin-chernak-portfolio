import Link from "next/link";
import { notes } from "@/lib/notes";

const tech = [
  "React", "Next.js", "TypeScript", "JavaScript", "Python", "PowerShell",
  "SQL", "Vercel", "Azure DevOps", "GitHub", "Sitecore SXA",
  "Builder.io", "Salsify", "Solr", "Supabase"
];

const projects = [
  {
    title: "BlendBase",
    description: "Full-stack application with authentication, recipe management, ratings, search, and a Supabase backend.",
    tags: ["React", "Supabase", "Vite", "Vercel"],
    live: "https://blendbase.vercel.app",
    github: "https://github.com/rchern315/blendbase",
    kind: "blend"
  },
  {
    title: "Central Intelligence",
    description: "Internal dashboard and automation platform for brand news, data aggregation, analytics, and reporting.",
    tags: ["React", "Supabase", "Data Pipeline", "Vercel"],
    live: "https://central-intelligence-ui.vercel.app/",
    github: "https://github.com/rchern315/central-intelligence-ui",
    kind: "intel"
  },
  {
    title: "Random Ad Generator",
    description: "AI-enabled application for generating ad creative, managing media assets, and reusable ad workflows.",
    tags: ["Next.js", "TypeScript", "AI", "Vercel"],
    live: null,
    github: "https://github.com/rchern315/random-ad-generator",
    kind: "ads"
  }
];

const stats = [
  { value: "65+", label: "Websites & Brands Supported" },
  { value: "Automation", label: "Manual Work Reduced" },
  { value: "Data Integration", label: "Systems Connected" },
  { value: "Scalable Solutions", label: "Built for Enterprise Use" }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-name" href="#top">Robin Chernak</a>
        <nav aria-label="Primary navigation">
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s Connect</a>
      </header>

      <section className="hero section" id="top">
        <div className="hero-main">
          <div className="hero-kicker">Hi, I&apos;m</div>
          <h1>Robin Chernak</h1>
          <h2>Full-Stack Software Engineer</h2>
          <p>
            Building applications, internal tools, automation, integrations,
            and AI-enabled systems across complex enterprise environments.
          </p>
          <div className="focus-line">
            <span>Full-Stack Engineering</span>
            <span>Platform Engineering</span>
            <span>AI</span>
            <span>Automation</span>
            <span>DevOps</span>
            <span>Data & Integrations</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#work">View My Work →</a>
            <a className="button secondary" href="https://github.com/rchern315" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>

        <aside className="hero-side">
          <blockquote>
            “I enjoy solving complex problems and building solutions that are scalable,
            reliable, and make engineering teams more efficient.”
          </blockquote>
          <div className="hero-rule" />
          <div className="hero-capabilities">
            <div>
              <b className="capability-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M9 3h6v3h3v3h3v6h-3v3h-3v3H9v-3H6v-3H3V9h3V6h3V3Z"/><circle cx="12" cy="12" r="3"/><path d="M12 6v3M12 15v3M6 12h3M15 12h3"/></svg>
              </b>
              <span>Build<br />Applications</span>
            </div>
            <div>
              <b className="capability-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="6.5" ry="2.5"/><path d="M5.5 5v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V5M5.5 11v5c0 1.4 2.9 2.5 6.5 2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><path d="M17.5 13.5v1.2M17.5 20.3v1.2M13.5 17.5h1.2M20.3 17.5h1.2M14.7 14.7l.9.9M19.4 19.4l.9.9M20.3 14.7l-.9.9M15.6 19.4l-.9.9"/></svg>
              </b>
              <span>Automate<br />Workflows</span>
            </div>
            <div>
              <b className="capability-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="7" r="2.5"/><circle cx="19" cy="17" r="2.5"/><path d="M7.4 11.2 16.6 7.8M7.4 12.8l9.2 3.4"/></svg>
              </b>
              <span>Integrate<br />Systems</span>
            </div>
            <div>
              <b className="capability-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.6A3.7 3.7 0 0 0 4 12a3.7 3.7 0 0 0 2 3.4V16a3.5 3.5 0 0 0 3.5 3.5M14.5 4.5A3.5 3.5 0 0 1 18 8v.6a3.7 3.7 0 0 1 2 3.4 3.7 3.7 0 0 1-2 3.4V16a3.5 3.5 0 0 1-3.5 3.5M12 4v16M8.5 8.5c1.1.2 2 .9 2.5 1.8M15.5 8.5c-1.1.2-2 .9-2.5 1.8M8.5 15.5c1.1-.2 2-.9 2.5-1.8M15.5 15.5c-1.1-.2-2-.9-2.5-1.8"/></svg>
              </b>
              <span>Apply<br />AI</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="tech-strip" aria-label="Tech stack">
        <div className="tech-marquee">
          <div className="tech-marquee-track">
            <img
              className="tech-stack-image"
              src="/mockup/tech-stack-exact.png"
              alt="Tech stack: React, Next.js, TypeScript, JavaScript, Python, PowerShell, SQL, Vercel, Azure DevOps, GitHub, Sitecore SXA, Builder.io, Salsify, Solr, and Supabase"
            />
            <img
              className="tech-stack-image"
              src="/mockup/tech-stack-exact.png"
              alt=""
              aria-hidden="true"
            />
            <img
              className="tech-stack-image"
              src="/mockup/tech-stack-exact.png"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-topline">
          <div className="section-label">FEATURED PROJECTS</div>
          <a href="https://github.com/rchern315" target="_blank" rel="noreferrer">View all projects →</a>
        </div>

        <div className="featured-grid">
          {projects.map((project) => (
            <article className="featured-card" key={project.title}>
              <div className={"project-shot " + project.kind}>
                <img
                  src={
                    project.kind === "blend"
                      ? "/projects/blendbase.svg"
                      : project.kind === "intel"
                        ? "/projects/central-intelligence.svg"
                        : "/projects/random-ad-generator.svg"
                  }
                  alt={project.title + " project preview"}
                />
              </div>
              <div className="featured-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  {project.live && <a className="small-button primary" href={project.live} target="_blank" rel="noreferrer">Live Demo ↗</a>}
                  <a className="small-button secondary" href={project.github} target="_blank" rel="noreferrer">View Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-stats section" id="about">
        <div className="about-panel">
          <div className="mini-avatar">RC</div>
          <div>
            <h3>About Me</h3>
            <p>
              I&apos;m a Full-Stack Software Engineer focused on building reliable systems,
              automating complex workflows, integrating enterprise platforms, and solving
              problems across application, data, infrastructure, and AI layers.
            </p>
            <a href="#experience">Learn more about my background →</a>
          </div>
        </div>

        <div className="stats-panel">
          <div className="section-label">BY THE NUMBERS</div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bottom-grid section" id="case-studies">
        <div>
          <div className="section-topline">
            <h3>Case Studies</h3>
            <a href="#notes">View engineering notes →</a>
          </div>
          <div className="case-list">
            <article>
              <div className="case-badge">QA</div>
              <div>
                <h4>Enterprise Product Data QA Automation</h4>
                <p>Automated validation across source and downstream systems, reducing manual QA and improving data consistency.</p>
                <Link href="/engineering-notes/product-qa-salsify-downstream-platforms">Read Case Study →</Link>
              </div>
            </article>
            <article>
              <div className="case-badge">OPS</div>
              <div>
                <h4>Enterprise Platform Support & Stability</h4>
                <p>Troubleshooting production issues across IIS, search, deployments, integrations, infrastructure, and application layers.</p>
                <Link href="/engineering-notes/troubleshooting-enterprise-platforms">Read Case Study →</Link>
              </div>
            </article>
          </div>
        </div>

        <div className="contact-panel" id="contact">
          <div className="contact-copy">
            <h3>Let&apos;s Connect</h3>
            <p>I&apos;m always interested in discussing new opportunities, interesting projects, or ways to collaborate.</p>
            <div className="contact-links">
              <a className="small-button primary" href="https://www.linkedin.com/in/robin-chernak-967aa1150/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="small-button secondary" href="https://github.com/rchern315" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="contact-art" aria-hidden="true" />
        </div>
      </section>

      <section className="section notes-section" id="notes">
        <div className="section-topline">
          <div>
            <div className="section-label">ENGINEERING NOTES</div>
            <h3>Things I learned the non-boring way.</h3>
          </div>
        </div>
        <div className="notes-grid">
          {notes.map((note) => (
            <Link className="note-card" href={"/engineering-notes/" + note.slug} key={note.slug}>
              <span>{note.eyebrow}</span>
              <h4>{note.title}</h4>
              <p>{note.summary}</p>
              <b>Read →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-label">EXPERIENCE</div>
        <h3>Built over time. Broadened on purpose.</h3>
        <div className="experience-grid">
          <article><span>2024 — Present</span><h4>Full-Stack Software Engineer</h4><p>Application development, automation, integrations, DevOps, data workflows, production reliability, and AI-enabled solutions.</p></article>
          <article><span>2016 — 2023</span><h4>Senior Front-End Engineer</h4><p>Enterprise front-end architecture, reusable component systems, CMS solutions, integrations, accessibility, and shared engineering patterns.</p></article>
          <article><span>2014 — 2016</span><h4>Front-End Developer</h4><p>Responsive interfaces, reusable components, CMS implementation, accessibility, browser compatibility, and production support.</p></article>
        </div>
      </section>

      <footer>
        <span>© 2026 Robin Chernak</span>
        <span>Built with Next.js and TypeScript.</span>
      </footer>
    </main>
  );
}
