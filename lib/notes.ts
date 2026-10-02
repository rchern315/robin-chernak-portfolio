export type NoteSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  code?: string;
};

export type EngineeringNote = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  date: string;
  readingTime: string;
  sections: NoteSection[];
};

export const notes: EngineeringNote[] = [
  {
    slug: "content-analytics-cms-taxonomy-ga4",
    title: "Connecting Published Content, Marketing Taxonomy, and GA4 Without Turning the CMS Into an Analytics Database",
    eyebrow: "Full-Stack · Data · CMS Integrations",
    summary:
      "A Brand team wanted better insight into its article library. The challenge was connecting what was published, how Marketing classified it, and how it performed without creating another CMS maintenance burden.",
    date: "October 2026",
    readingTime: "7 min read",
    sections: [
      {
        heading: "The Brand wanted more insight into its article content",
        paragraphs: [
          "The request sounded straightforward: give the Brand a better way to understand its article library and performance.",
          "Analytics could show page-level traffic and engagement, but that was only part of the story. The Brand also had its own Marketing taxonomy—funnel stage, article type, content pillar, publish date, and other classifications that gave the numbers business context.",
          "The missing piece was a reliable way to connect those classifications to what was actually published on the website and then connect both to performance data."
        ]
      },
      {
        heading: "The first approach created a maintenance problem",
        paragraphs: [
          "One possible solution was to push the Marketing taxonomy into the CMS and expose those values through the site's analytics implementation.",
          "Technically, that could work. Operationally, it meant making the CMS responsible for Marketing classifications that would continue changing as articles were added, updated, or retagged.",
          "It also created tighter coupling between content management and analytics at a time when sites were expected to move between CMS platforms. I wanted to see whether the business problem could be solved without making the CMS own all of that additional data."
        ]
      },
      {
        heading: "Separate the three sources of truth",
        paragraphs: [
          "I built a proof of concept around a simpler idea: let each system or team remain responsible for the data it already owns.",
          "The CMS answers what content is actually published. The Brand owns the Marketing taxonomy that explains what the content means. GA4 provides the performance data.",
          "The application normalizes and joins those datasets instead of forcing all three concerns through the CMS."
        ],
        code: `CMS
Published content inventory
        ↓
        ┐
Brand taxonomy ──→ Normalized data layer ──→ Content Analytics
        ┘
        ↑
GA4 performance`
      },
      {
        heading: "The CMS integration stays deliberately small",
        paragraphs: [
          "For the Sitecore proof of concept, I created a read-only PowerShell extraction that reads the published web database and sends article inventory to a protected Next.js server-side API endpoint.",
          "The endpoint authenticates the request, validates and normalizes the records, and stores the inventory in Supabase so it can be joined with the other datasets.",
          "The integration was validated end to end against real published CMS data. It does not modify content, add Marketing fields, change templates, publish items, or require the CMS to understand the Marketing taxonomy."
        ],
        code: `Published Sitecore content
        ↓
Read-only PowerShell extraction
        ↓
Protected Next.js API
        ↓
Supabase normalized inventory`
      },
      {
        heading: "Marketing taxonomy remains Brand-owned",
        paragraphs: [
          "The Brand's existing tagging workbook remains the source for classifications such as funnel stage, article type, pillar, and publish date.",
          "The application validates that data before saving it. That means a taxonomy change is a Marketing data change rather than a CMS development and publishing task.",
          "URLs are normalized so the Brand taxonomy can be matched to both the published-content inventory and page-level analytics."
        ]
      },
      {
        heading: "GA4 adds performance, not content existence",
        paragraphs: [
          "GA4 supplies metrics such as views, active users, engagement, and key events. The application joins those metrics to the same normalized article paths.",
          "Keeping the CMS inventory separate also solves an important data-quality problem: an article can be published and receive no tracked activity during a reporting period. A lack of GA4 activity should not be interpreted as proof that the content does not exist.",
          "With the datasets separated, the application can distinguish published content with no tracked activity from content that is not part of the published inventory."
        ]
      },
      {
        heading: "Designing for the next CMS instead of the current one",
        paragraphs: [
          "I intentionally kept the normalized inventory independent of Sitecore-specific concepts.",
          "When a site moves to another CMS, the ingestion method can change while the taxonomy, analytics matching, validation, and reporting layers remain the same. A Builder.io implementation, for example, can feed published content through its APIs or webhooks into the same normalized inventory model.",
          "That turns the CMS integration into a replaceable boundary instead of making the entire analytics solution CMS-specific."
        ]
      },
      {
        heading: "What the POC demonstrates",
        bullets: [
          "Full-stack Next.js application with server-side API endpoints",
          "Read-only Sitecore content extraction",
          "Supabase persistence and authentication",
          "Marketing taxonomy validation and normalization",
          "GA4 page-level analytics ingestion and matching",
          "Published-content coverage and data-quality reporting",
          "CMS-independent architecture designed for future Builder.io integration"
        ],
        paragraphs: [
          "The larger lesson was not about a particular CMS or analytics tool. It was about ownership and boundaries.",
          "The CMS should be authoritative for published content. Marketing should own Marketing classifications. Analytics should own performance. The application becomes useful because it connects those domains without unnecessarily making one system responsible for all of them."
        ]
      }
    ]
  },
  {
    slug: "product-qa-salsify-downstream-platforms",
    title: "Building a Product QA Framework Across Salsify and Downstream Platforms",
    eyebrow: "Automation · Data · Integrations",
    summary:
      "The product existed. The SKU existed. The page existed. Somehow, none of them agreed with each other.",
    date: "September 2026",
    readingTime: "6 min read",
    sections: [
      {
        heading: "The product existed. The SKU existed. The page existed.",
        paragraphs: [
          "And somehow, according to QA, absolutely none of them agreed with each other.",
          "Welcome to product-data integration.",
          "If you have ever worked with a PIM, a CMS, a storefront, and a few scheduled imports in between, you already know where this is going. One system says the product is correct. Another says it is missing. The website says something completely different. Then somebody opens a spreadsheet and starts checking rows manually.",
          "I decided that was a terrible way to spend an afternoon."
        ]
      },
      {
        heading: "The problem",
        paragraphs: [
          "When product data moves through several systems, a successful import does not automatically mean the final customer-facing result is correct. Fields can be missing, mapped differently, attached to the wrong variant, or simply stale downstream.",
          "I needed a repeatable way to compare source product data with what actually made it to the rendered product page."
        ],
        code: `Salsify
   ↓
Product export
   ↓
Website platform
   ↓
Rendered product detail page`
      },
      {
        heading: "The approach",
        paragraphs: [
          "I built a PowerShell-based QA framework that treats the process as a pipeline instead of one giant script. Each step has one job: load the targets, load the source data, match products, inspect the destination, validate fields, and generate a report.",
          "The destination layer is intentionally platform-neutral. I care about the final rendered result more than which CMS produced it."
        ],
        code: `QA Spreadsheet
      ↓
Salsify Export
      ↓
Product Matching
      ↓
Destination Loader
      ↓
Validation Engine
      ↓
Excel Report`
      },
      {
        heading: "Matching is its own problem",
        paragraphs: [
          "A failed comparison and a failed match are not the same thing. URLs change. Variants share parent pages. SKUs can live in structured data instead of visible content.",
          "So the framework identifies the product first, then validates it. If the match is uncertain, that becomes an explicit result instead of a misleading pass or fail."
        ]
      },
      {
        heading: "Results people can actually use",
        bullets: [
          "PASS — expected and actual values match.",
          "FAIL — values differ, the page cannot be loaded, or the product cannot be matched.",
          "WARNING — something is missing but may not be a critical failure.",
          "SKIPPED — the source does not contain a value worth comparing."
        ],
        paragraphs: [
          "The final Excel workbook includes summary, product-level, field-level, and unmatched-product views. Developers can dig into the exact mismatch while someone else can start with the overall health of the import."
        ]
      },
      {
        heading: "Why PowerShell?",
        paragraphs: [
          "Because it fit the job. The workflow involved files, JSON, URLs, comparisons, Windows-based tooling, and Excel output. PowerShell handled all of that without needing a larger application stack.",
          "The interesting engineering decision was not the language. It was keeping the pieces modular enough that the framework could grow."
        ]
      },
      {
        heading: "What I took away from it",
        paragraphs: [
          "The biggest lesson was simple: validate the thing the user actually receives.",
          "A green import job is nice. A correct final result is better.",
          "That idea applies well beyond product data. Any workflow that crosses multiple systems benefits from checking the output at the point where people or downstream services actually consume it."
        ]
      }
    ]
  },
  {
    slug: "troubleshooting-enterprise-platforms",
    title: "How I Troubleshoot Enterprise Platforms Across Application, Data, and Infrastructure Layers",
    eyebrow: "Platform Engineering · Reliability",
    summary:
      "A broken page is not always a front-end problem. Sometimes the browser is just where the crime scene happens to be.",
    date: "September 2026",
    readingTime: "7 min read",
    sections: [
      {
        heading: "The browser is often just the crime scene",
        paragraphs: [
          "Some production issues are easy to categorize. A CSS problem is probably front end. A failed query smells like data. A broken deployment points toward CI/CD.",
          "The fun ones are the problems that refuse to stay in their lane.",
          "A page can look broken because of a database record, search index, application pool, scheduled import, API, deployment pipeline, environment setting, or infrastructure dependency. The browser is simply where somebody notices."
        ]
      },
      {
        heading: "Start with the symptom, not the assumption",
        paragraphs: [
          "One of the fastest ways to waste time is deciding what the problem is before gathering evidence.",
          "Instead, I ask one question: where is the last place in the flow where the data or behavior is still correct?"
        ],
        code: `Source System
    ↓
Import Process
    ↓
CMS / API
    ↓
Search Index
    ↓
Application
    ↓
Browser`
      },
      {
        heading: "Work backward",
        paragraphs: [
          "If the browser output is wrong, I trace backward until I find the first layer that is right. That prevents fixing things that were never broken.",
          "If the source and CMS are correct but search is stale, rewriting the import will not help. If QA fails and production works, I compare environments instead of guessing."
        ]
      },
      {
        heading: "Separate bad data from bad handling",
        bullets: [
          "Incorrect source data",
          "Incorrect field mapping",
          "Stale indexed data",
          "Application logic",
          "Caching",
          "Unexpected API responses",
          "Presentation logic"
        ],
        paragraphs: [
          "Several of those can create the exact same visual symptom. The first useful split is whether the application received the wrong data or handled the right data incorrectly."
        ]
      },
      {
        heading: "Infrastructure matters",
        paragraphs: [
          "I have worked through issues involving IIS, application pools, deployment pipelines, load balancing, Solr/SearchStax, WAF configuration, scheduled processes, and environment configuration.",
          "You do not have to own every layer to understand how it affects your application. That systems view is often what turns a long debugging session into a short one."
        ]
      },
      {
        heading: "Logs before vibes",
        paragraphs: [
          "I prefer evidence over random changes. HTTP status codes, deployment logs, application logs, database values, API responses, timestamps, index state, and environment differences each eliminate possibilities.",
          "A 502 tells a different story than a 404. A successful build followed by a failing application tells a different story than a failed build. Every good observation makes the search space smaller."
        ]
      },
      {
        heading: "Do not just fix the incident",
        paragraphs: [
          "The best outcome is not simply making the error disappear. I want to know what failed, why, how we found it, whether we can detect it sooner, and whether some of the recovery can be automated.",
          "Over time, that changes troubleshooting from repeated firefighting into platform improvement."
        ]
      }
    ]
  },
  {
    slug: "ai-as-an-engineering-tool",
    title: "Using AI as an Engineering Tool — Not a Substitute for Engineering",
    eyebrow: "AI · Software Engineering",
    summary:
      "I use AI a lot. I also do not hand it the keys, close my eyes, and hope production is still there in the morning.",
    date: "September 2026",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Yes, I use AI. A lot.",
        paragraphs: [
          "I also do not hand it the repo, close my eyes, and hope production is still there in the morning.",
          "AI has become one of my most useful engineering tools, but there is a big difference between using it to accelerate good engineering and using it to replace engineering judgment.",
          "I want the first one."
        ]
      },
      {
        heading: "Where it helps me most",
        bullets: [
          "Exploring implementation approaches",
          "Debugging and narrowing down errors",
          "Reviewing unfamiliar code or syntax",
          "Generating test scenarios and edge cases",
          "Refactoring repetitive work",
          "Documenting systems",
          "Prototyping ideas quickly",
          "Comparing tradeoffs before I commit to an approach"
        ],
        paragraphs: [
          "In those situations, AI is a very fast collaborator. It can get me from question to useful starting point quickly."
        ]
      },
      {
        heading: "A starting point is not a final answer",
        paragraphs: [
          "Generated code still has to survive the same questions as code written any other way.",
          "Does it fit the architecture? Is it secure? Does it handle failure? Can somebody else maintain it? Is there a simpler approach? What happens when the happy path stops being happy?",
          "Those questions are still the engineer's job."
        ]
      },
      {
        heading: "I also build AI into products",
        paragraphs: [
          "AI is not only something I use while coding. I also integrate AI capabilities into applications and internal tools using APIs and platform services.",
          "That introduces a different set of engineering problems: model selection, prompt and response handling, secrets, cost, observability, permissions, fallbacks, and how much autonomy the system should actually have."
        ]
      },
      {
        heading: "Why I care about the platform side",
        paragraphs: [
          "A cool demo can call a model. An enterprise platform has to answer who is allowed to call it, what data they can access, how much it costs, what gets logged, what happens when a provider fails, and how the whole thing can be stopped when necessary.",
          "That is the part of AI engineering I find especially interesting: turning model access into something reliable enough to operate."
        ]
      },
      {
        heading: "The rule I keep coming back to",
        paragraphs: [
          "Use AI to move faster, but keep ownership of the decision.",
          "I want AI to remove friction from engineering, not remove engineering from the process."
        ]
      }
    ]
  }
];

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug);
}
