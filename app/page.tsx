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
            <div><b>⌘</b><span>Build<br />Applications</span></div>
            <div><b>⚙</b><span>Automate<br />Workflows</span></div>
            <div><b>⌁</b><span>Integrate<br />Systems</span></div>
            <div><b>AI</b><span>Apply<br />AI</span></div>
          </div>
        </aside>
      </section>

      <section className="tech-strip">
        <div className="section-label">TECH STACK</div>
        <div className="tech-grid">
          {tech.map((item) => <div className="tech-card" key={item}>{item}</div>)}
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
