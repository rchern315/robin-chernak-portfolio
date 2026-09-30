import Link from "next/link";

const tech = [
  "React", "Next.js", "TypeScript", "JavaScript", "Python", "PowerShell",
  "SQL", "Vercel", "Azure DevOps", "GitHub", "Sitecore SXA", "Builder.io",
  "Salsify", "Solr", "Supabase"
];

const projects = [
  {
    title: "BlendBase",
    image: "/mockup/blendbase.jpg",
    description: "Full-stack application with authentication, recipe management, ratings, search, and a Supabase backend.",
    tags: ["React", "TypeScript", "Vite", "Supabase", "Tailwind"],
    live: "https://blendbase.vercel.app",
    github: "https://github.com/rchern315/blendbase",
    cta: "Live Demo ↗"
  },
  {
    title: "Central Intelligence",
    image: "/mockup/central-intelligence.jpg",
    description: "Internal dashboard and automation platform for brand news, data aggregation, and analytics.",
    tags: ["Next.js", "React", "Supabase", "TypeScript", "Vercel"],
    live: "https://central-intelligence-ui.vercel.app/",
    github: "https://github.com/rchern315/central-intelligence-ui",
    cta: "View Project →"
  },
  {
    title: "Random Ad Generator",
    image: "/mockup/random-ad-generator.jpg",
    description: "AI-enabled application for generating ad creative, managing media assets, and multi-platform content.",
    tags: ["Next.js", "TypeScript", "AI", "Vercel", "Tailwind"],
    live: null,
    github: "https://github.com/rchern315/random-ad-generator",
    cta: "View Code"
  }
];

const stats = [
  ["65+", "Websites & Brands", "Supported"],
  ["Automation", "Hours of Manual Work", "Reduced"],
  ["Data Integration", "Multiple Systems", "Connected"],
  ["Scalable Solutions", "Enterprise &", "Production Environments"],
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top">Robin Chernak</a>
        <nav>
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s Connect</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="hero-intro">Hi, I&apos;m</p>
          <h1>Robin Chernak</h1>
          <h2>Full-Stack Software Engineer</h2>
          <p className="hero-text">
            Building applications, internal tools, automation, integrations,
            and AI-enabled systems across complex enterprise environments.
          </p>

          <div className="hero-focus">
            <span>Full-Stack Engineering</span>
            <span>Platform Engineering</span>
            <span>AI</span>
            <span>Automation</span>
            <span>DevOps</span>
            <span>Data &amp; Integrations</span>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View My Work →</a>
            <a className="button button-secondary" href="https://github.com/rchern315" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>

        <div className="hero-right">
          <img src="/mockup/hero-right.jpg" alt="Problem-solving quote and capabilities" />
        </div>
      </section>

      <section className="tech-section">
        <img src="/mockup/tech-stack.jpg" alt="Tech stack" className="tech-image" />
      </section>

      <section className="projects-section" id="projects">
        <div className="section-head">
          <div>
            <p className="eyebrow">FEATURED PROJECTS</p>
          </div>
          <a href="https://github.com/rchern315" target="_blank" rel="noreferrer" className="inline-link">View all projects →</a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title + " preview"} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="action-row">
                  {project.live ? (
                    <a className="button button-primary small" href={project.live} target="_blank" rel="noreferrer">{project.cta}</a>
                  ) : null}
                  <a className="button button-secondary small" href={project.github} target="_blank" rel="noreferrer">View Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="middle-grid">
        <div className="about-box" id="about">
          <img src="/mockup/about-avatar.jpg" alt="Robin Chernak" className="about-avatar" />
          <div>
            <h3>About Me</h3>
            <p>
              I&apos;m a Full-Stack Software Engineer focused on building reliable systems,
              automating complex workflows, integrating enterprise platforms, and solving
              problems across application, data, infrastructure, and AI layers.
            </p>
            <a href="#experience" className="inline-link accent">Learn more about my background →</a>
          </div>
        </div>

        <div className="numbers-box">
          <p className="eyebrow">BY THE NUMBERS</p>
          <div className="stats-grid">
            {stats.map(([value, line1, line2]) => (
              <div className="stat-card" key={value + line1}>
                <strong>{value}</strong>
                <span>{line1}</span>
                <span>{line2}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bottom-grid" id="case-studies">
        <div className="case-box">
          <div className="section-head small-gap">
            <h3>Case Studies</h3>
            <a href="#notes" className="inline-link">View all case studies →</a>
          </div>

          <div className="case-list">
            <article className="case-card">
              <div className="case-icon">▦</div>
              <div>
                <h4>Enterprise Product Data QA Automation</h4>
                <p>Automated validation framework for Salsify product data across multiple brands, reducing manual QA and improving data consistency.</p>
                <Link href="/engineering-notes/product-qa-salsify-downstream-platforms">Read Case Study →</Link>
              </div>
            </article>

            <article className="case-card">
              <div className="case-icon">⇄</div>
              <div>
                <h4>Enterprise Platform Support &amp; Stability</h4>
                <p>Troubleshot and resolved production issues across IIS, Solr, search, app pools, deployments, and integrations, improving platform reliability and stability.</p>
                <Link href="/engineering-notes/troubleshooting-enterprise-platforms">Read Case Study →</Link>
              </div>
            </article>
          </div>
        </div>

        <div className="connect-box" id="contact">
          <div className="connect-copy">
            <h3>Let&apos;s Connect</h3>
            <p>I&apos;m always interested in discussing new opportunities, interesting projects, or ways to collaborate.</p>
            <div className="contact-actions">
              <a className="button button-primary small" href="https://www.linkedin.com/in/robin-chernak-967aa1150/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button button-secondary small" href="https://github.com/rchern315" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <img src="/mockup/contact-bg.jpg" alt="Reno skyline" className="contact-bg" />
        </div>
      </section>

      <section className="notes-section" id="notes">
        <div className="section-head small-gap">
          <div>
            <p className="eyebrow">ENGINEERING NOTES</p>
            <h3>Things I learned the non-boring way.</h3>
          </div>
        </div>

        <div className="notes-grid">
          <Link href="/engineering-notes/product-qa-salsify-downstream-platforms" className="note-card">
            <span>Automation · Data · Integrations</span>
            <h4>Building a Product QA Framework Across Salsify and Downstream Platforms</h4>
            <p>The product existed. The SKU existed. The page existed. Somehow, none of them agreed with each other.</p>
            <b>Read →</b>
          </Link>
          <Link href="/engineering-notes/troubleshooting-enterprise-platforms" className="note-card">
            <span>Platform Engineering · Reliability</span>
            <h4>How I Troubleshoot Enterprise Platforms Across Application, Data, and Infrastructure Layers</h4>
            <p>A broken page is not always a front-end problem. Sometimes the browser is just where the crime scene happens to be.</p>
            <b>Read →</b>
          </Link>
          <Link href="/engineering-notes/ai-as-an-engineering-tool" className="note-card">
            <span>AI · Software Engineering</span>
            <h4>Using AI as an Engineering Tool — Not a Substitute for Engineering</h4>
            <p>I use AI a lot. I also do not hand it the keys, close my eyes, and hope production is still there in the morning.</p>
            <b>Read →</b>
          </Link>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <p className="eyebrow">EXPERIENCE</p>
        <h3>Built over time. Broadened on purpose.</h3>
        <div className="experience-grid">
          <article><span>2024 — Present</span><h4>Full-Stack Software Engineer</h4><p>Application development, automation, integrations, DevOps, data workflows, production reliability, and AI-enabled solutions.</p></article>
          <article><span>2016 — 2023</span><h4>Senior Front-End Engineer</h4><p>Enterprise front-end architecture, reusable component systems, CMS solutions, integrations, accessibility, and shared engineering patterns.</p></article>
          <article><span>2014 — 2016</span><h4>Front-End Developer</h4><p>Responsive interfaces, reusable components, CMS implementation, accessibility, browser compatibility, and production support.</p></article>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Robin Chernak</span>
        <span>Built with Next.js and TypeScript.</span>
      </footer>
    </main>
  );
}
