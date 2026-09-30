import Link from "next/link";
import { notFound } from "next/navigation";
import { getNote, notes } from "@/lib/notes";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export default async function EngineeringNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) notFound();

  return (
    <main className="article-shell">
      <nav className="article-nav">
        <Link href="/">← Back to portfolio</Link>
      </nav>

      <article className="article">
        <div className="article-kicker">{note.eyebrow}</div>
        <h1>{note.title}</h1>
        <p className="article-deck">{note.summary}</p>
        <div className="article-meta">
          <span>{note.date}</span>
          <span>{note.readingTime}</span>
        </div>

        {note.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.code && <pre>{section.code}</pre>}
          </section>
        ))}
      </article>
    </main>
  );
}
