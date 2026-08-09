export const siteLinks = {
  home: "/",
  projects: "/projects",
  tools: "/tools",
  contribute: "/contribute",
  team: "/team",
  about: "/about",
  docs: "/docs",
  github: "https://github.com/OpenCorex-org",
  discord: "https://discord.gg/EyfpRmEn9v",
  contact: "mailto:info.OpenCorex@gmail.com",
  security: "mailto:info.OpenCorex@gmail.com",
};

export const homeSignals = [
  {
    value: "06",
    label: "flagship tracks",
    detail: "Preparedness, mapping, logistics, and public communication products.",
  },
  {
    value: "05",
    label: "working groups",
    detail: "Distributed ownership across product, engineering, design, and field readiness.",
  },
  {
    value: "05",
    label: "documentation lanes",
    detail: "Clear playbooks for setup, content, review, release, and support workflows.",
  },
  {
    value: "06",
    label: "ways to help",
    detail: "Meaningful contribution paths for builders, writers, researchers, and organizers.",
  },
];

export const heroProofPoints = [
  "Public-first documentation",
  "Mobile-friendly interfaces",
  "Contribution-ready workflows",
];

export const platformPillars = [
  {
    title: "Field-ready by default",
    description:
      "We design for low-bandwidth conditions, high-stress moments, and teams that need clarity faster than they need novelty.",
  },
  {
    title: "Built in the open",
    description:
      "Plans, design decisions, and content structures stay visible so contributors can understand context before they write a single line.",
  },
  {
    title: "Modular enough to scale",
    description:
      "Each track is shaped as a reusable capability, making it easier to ship lightweight pilots without creating long-term maintenance debt.",
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  stage: string;
  summary: string;
  description: string;
  audience: string;
  highlights: string[];
  focus: string[];
  accent: string;
  githubUrl: string;
};

export const siteProjects: Project[] = [
  {
    slug: "corex-agentos",
    name: "CoreX AgentOS",
    category: "AI & Agent Ops",
    stage: "Active development",
    summary: "Open-source AI agent control platform for orchestrating, executing, governing, tracing, and evaluating production AI agents.",
    description: "CoreX AgentOS provides enterprise-grade orchestration, execution tracing, safety governance, and evaluation workflows for multi-agent systems, Model Context Protocol (MCP) integrations, and RAG pipelines.",
    audience: "AI platform engineers, LLM system leads, and enterprise automation developers.",
    highlights: ["Agent Orchestration", "MCP Protocol Support", "LLM Observability", "RAG Governance"],
    focus: ["Orchestration Engine", "Execution Tracing", "Safety Guardrails"],
    accent: "#8D153A",
    githubUrl: "https://github.com/opencorex-org/corex-agentos",
  },
  {
    slug: "corexa",
    name: "Corexa",
    category: "Developer Automation",
    stage: "Beta program",
    summary: "AI-native software engineering platform combining local AI runtimes, autonomous coding agents, repository intelligence, and vector memory.",
    description: "Corexa unifies local LLMs, codebase parsing, vector embeddings, and autonomous coding agents into a cohesive developer desktop experience with zero cloud data leakage.",
    audience: "Software engineers, open-source maintainers, and developer experience teams.",
    highlights: ["Local AI Runtimes", "Repository Intelligence", "Vector Memory", "Autonomous Coding"],
    focus: ["Electron & Rust Runtimes", "Codebase Knowledge Graph", "Model Drivers"],
    accent: "#205493",
    githubUrl: "https://github.com/opencorex-org/corexa",
  },
  {
    slug: "openrevenue",
    name: "OpenRevenue",
    category: "GovTech & Public Sector",
    stage: "Scaling",
    summary: "Configurable tax and revenue administration platform for governments, municipalities, and public sector organizations.",
    description: "OpenRevenue standardizes revenue collection, compliance auditing, municipal tax filing, and public reporting through modular country packs and OpenAPI specification.",
    audience: "Municipal authorities, public finance administrators, and civic technology teams.",
    highlights: ["Modular Country Packs", "OpenAPI Standards", "PostgreSQL Backend", "Tax Compliance"],
    focus: ["Revenue Administration", "Compliance Auditing", "Public Dashboards"],
    accent: "#0F766E",
    githubUrl: "https://github.com/opencorex-org/openrevenue",
  },
  {
    slug: "carbmq-core",
    name: "CrabMQ",
    category: "Data Infrastructure",
    stage: "Core release",
    summary: "High-performance, open-source MQTT broker built for low latency, high throughput, and reliable IoT messaging.",
    description: "CrabMQ provides light footprint publish-subscribe infrastructure for IoT sensors, edge devices, and real-time telemetry streaming.",
    audience: "IoT system architects, embedded systems engineers, and distributed systems teams.",
    highlights: ["Low Latency MQTT", "Memory Safety", "Edge Clustering", "IoT Telemetry"],
    focus: ["MQTT 5.0 Core Protocol", "Clustering & Failover", "Rust / Go Runtimes"],
    accent: "#A95B2A",
    githubUrl: "https://github.com/opencorex-org/carbmq-core",
  },
  {
    slug: "forma",
    name: "Forma",
    category: "Data Infrastructure",
    stage: "Public release",
    summary: "TypeScript data platform giving structure, SQL transparency, and multi-database support to modern applications.",
    description: "Forma delivers strict compile-time type safety across MongoDB, PostgreSQL, and DynamoDB without abstracting away query performance or execution transparency.",
    audience: "Full-stack developers, backend architects, and TypeScript teams.",
    highlights: ["Multi-DB Support", "TypeScript Native", "SQL Transparency", "Zero Runtime Overhead"],
    focus: ["Database Adapters", "Type Generator", "Execution Engine"],
    accent: "#7C3AED",
    githubUrl: "https://github.com/opencorex-org/forma",
  },
  {
    slug: "react-helmet-pro",
    name: "React Helmet Pro",
    category: "Frontend Ecosystem",
    stage: "Production ready",
    summary: "Advanced, modular, SSR-compatible head and metadata manager for React and Next.js applications.",
    description: "React Helmet Pro manages dynamic page title tags, OpenGraph meta, JSON-LD structured data, security headers, and analytics scripts cleanly in modern React applications.",
    audience: "React developers, Next.js leads, and SEO specialists.",
    highlights: ["SSR & Streaming Support", "JSON-LD Builder", "Security Headers", "Zero Memory Leaks"],
    focus: ["React 19 & Next.js Support", "Metadata Validation", "NPM Package"],
    accent: "#D97706",
    githubUrl: "https://github.com/opencorex-org/react-helmet-pro",
  },
  {
    slug: "sheetra",
    name: "Sheetra",
    category: "Developer Automation",
    stage: "Public release",
    summary: "High-performance spreadsheet, CSV, Excel, and JSON data conversion and streaming library.",
    description: "Sheetra enables low-memory stream processing between tabular spreadsheet formats and structured JSON schemas in Node.js and TypeScript environments.",
    audience: "Data integration developers, ETL engineers, and backend teams.",
    highlights: ["XLSX & CSV Processing", "Low Memory Streaming", "TypeScript API", "Zero Heavy Dependencies"],
    focus: ["Stream Parsers", "Schema Mapping", "Format Converters"],
    accent: "#2563EB",
    githubUrl: "https://github.com/opencorex-org/sheetra",
  },
  {
    slug: "rtts",
    name: "RTTS",
    category: "GovTech & Public Sector",
    stage: "Field pilot",
    summary: "Revenue Tax & Transparency System for public tax filing, government dashboards, and spending transparency.",
    description: "RTTS features web dashboards, mobile applications, and AI analytics tools for citizens and public bodies to track government expenditure and submit tax filings.",
    audience: "Civic organizations, public finance auditors, and citizen engagement teams.",
    highlights: ["Public Spending Dashboards", "Cross-Platform Mobile", "AI Analytics", "Multi-Country Adaptability"],
    focus: ["Mobile App & Web", "Auditing Pipelines", "Public Reports"],
    accent: "#059669",
    githubUrl: "https://github.com/opencorex-org/RTTS",
  },
  {
    slug: "decentra-sub",
    name: "DecentraSub",
    category: "Web3 & Decentra Systems",
    stage: "Exploratory",
    summary: "Decentralized subscription platform for streaming content managed by blockchain smart contracts.",
    description: "DecentraSub enables transparent, censorship-resistant subscription payments and decentralized content access control using smart contracts.",
    audience: "Web3 platform builders, decentralized media projects, and independent content creators.",
    highlights: ["On-Chain Subscriptions", "Smart Contract Access", "Non-Custodial Payments", "Decentralized Keys"],
    focus: ["Smart Contract Architecture", "Web3 Providers", "Streaming Gateways"],
    accent: "#DC2626",
    githubUrl: "https://github.com/opencorex-org/decentra-sub",
  },
];

export const deliveryPhases = [
  {
    title: "Listen first",
    description:
      "Every track begins with real operational friction, not abstract feature collecting. We document the problem before we brand the solution.",
  },
  {
    title: "Ship the smallest durable version",
    description:
      "We favor scoped releases with clear ownership, usable defaults, and obvious next steps over oversized launches that are difficult to sustain.",
  },
  {
    title: "Refine in public",
    description:
      "Feedback loops stay visible so design, content, and engineering decisions can evolve with shared context instead of hidden handoffs.",
  },
];

export const aboutPrinciples = [
  {
    title: "Local context matters",
    description:
      "Products only help when they respect local language, local workflows, and the realities of uneven connectivity.",
  },
  {
    title: "Clarity beats complexity",
    description:
      "We aim for interfaces and content structures that reduce hesitation during stressful moments rather than adding another system to decode.",
  },
  {
    title: "Open processes grow stronger teams",
    description:
      "Making decisions visible helps new contributors understand why things are shaped the way they are and where they can improve them.",
  },
  {
    title: "Sustainability is a design problem",
    description:
      "Every new capability needs a practical owner, review loop, and maintenance posture before it becomes part of the platform.",
  },
];

export const roadmapMilestones = [
  {
    year: "2022",
    title: "Early coordination experiments",
    description:
      "Initial collaboration started around shared response templates, local mapping needs, and clearer public-facing updates.",
  },
  {
    year: "2023",
    title: "First modular product tracks",
    description:
      "The team split the work into reusable tracks so data, mapping, and communication could improve independently without fragmenting the experience.",
  },
  {
    year: "2024",
    title: "Community-ready documentation",
    description:
      "Contribution guides, design decisions, and release checklists moved into public workflows to reduce onboarding friction.",
  },
  {
    year: "2026",
    title: "A stronger ecosystem hub",
    description:
      "The website now acts as a clearer front door for the platform, the people behind it, and the work still open for collaboration.",
  },
];

export const operatingModel = [
  {
    title: "Strategy",
    description:
      "Small focused roadmaps define what each track is trying to improve, what success looks like, and what will wait until later.",
  },
  {
    title: "Design",
    description:
      "Content structure, interaction patterns, and edge cases are reviewed together so UX decisions are informed by operational realities.",
  },
  {
    title: "Delivery",
    description:
      "Implementation is split into clear slices with strong defaults, lightweight QA, and release notes that non-engineers can understand.",
  },
  {
    title: "Support",
    description:
      "Documentation, onboarding, and review rituals are treated as product work so contributors can keep momentum after launch week.",
  },
];

export type ContributionTrack = {
  title: string;
  description: string;
  idealFor: string;
  output: string;
  accent: string;
};

export const contributionTracks: ContributionTrack[] = [
  {
    title: "UI and front-end polish",
    description:
      "Refine layout, interaction states, accessibility, and responsive behavior across the public experience.",
    idealFor: "Front-end engineers and interface-minded generalists.",
    output: "Page improvements, reusable sections, and cleaner responsive behavior.",
    accent: "#8D153A",
  },
  {
    title: "Project storytelling",
    description:
      "Turn complex platform work into short, understandable descriptions that help new visitors know why each track matters.",
    idealFor: "Technical writers, product thinkers, and maintainers who enjoy synthesis.",
    output: "Clearer summaries, case studies, and contributor guidance.",
    accent: "#A95B2A",
  },
  {
    title: "Docs and onboarding",
    description:
      "Improve setup guides, review expectations, contribution rituals, and maintenance checklists.",
    idealFor: "Documentation contributors and developer experience advocates.",
    output: "Faster onboarding and fewer repeated support questions.",
    accent: "#205493",
  },
  {
    title: "Research and field validation",
    description:
      "Pressure-test ideas with realistic usage scenarios, accessibility reviews, and operational assumptions.",
    idealFor: "Researchers, QA contributors, and people close to response workflows.",
    output: "Better edge-case coverage and more grounded product decisions.",
    accent: "#0F766E",
  },
  {
    title: "Design systems and visuals",
    description:
      "Strengthen visual consistency, reusable components, and presentation quality across the ecosystem.",
    idealFor: "Designers, front-end engineers, and brand stewards.",
    output: "Sharper hierarchy, stronger cohesion, and more durable patterns.",
    accent: "#7C3AED",
  },
  {
    title: "Community support",
    description:
      "Help newcomers orient themselves, route questions, and keep discussion spaces warm, clear, and useful.",
    idealFor: "Community builders and contributors who enjoy facilitation.",
    output: "A healthier contributor experience from first visit to first merged update.",
    accent: "#D97706",
  },
];

export const reviewChecklist = [
  "Keep sections readable on small screens before polishing desktop details.",
  "Prefer plain language over internal jargon whenever content faces the public.",
  "Pair visual changes with spacing, contrast, and keyboard-flow checks.",
  "Keep content in shared data structures when multiple pages depend on it.",
  "Document follow-up work clearly instead of hiding unfinished assumptions in the UI.",
];

export const qualityStandards = [
  {
    title: "Design quality",
    points: ["Accessible contrast", "Intentional spacing", "Clear hierarchy", "Consistent interaction states"],
  },
  {
    title: "Code quality",
    points: ["Typed data structures", "Reusable sections", "Build-ready pages", "No unnecessary runtime fetches"],
  },
  {
    title: "Content quality",
    points: ["Specific messaging", "Short paragraphs", "Actionable labels", "Honest, non-inflated claims"],
  },
  {
    title: "Release quality",
    points: ["Responsive review", "Link checks", "Metadata updates", "Visible follow-up notes"],
  },
];

export type WorkingGroup = {
  category: "product" | "engineering" | "design" | "community" | "operations";
  name: string;
  summary: string;
  ownership: string;
  cadence: string;
  lookingFor: string;
  priorities: string[];
  accent: string;
};

export const workingGroups: WorkingGroup[] = [
  {
    category: "product",
    name: "Platform Experience",
    summary:
      "Shapes the public experience, information architecture, and how visitors move from interest to action.",
    ownership: "Homepage narrative, section structure, and site-level conversion paths.",
    cadence: "Weekly review with async design notes between sessions.",
    lookingFor: "Product writers, UX thinkers, and front-end contributors.",
    priorities: ["Sharpen landing page flow", "Reduce dead-end pages", "Keep calls to action clear"],
    accent: "#8D153A",
  },
  {
    category: "engineering",
    name: "Data and Delivery Systems",
    summary:
      "Owns the technical patterns that keep project tracks coherent, maintainable, and easy to extend.",
    ownership: "Shared data models, implementation patterns, and release confidence.",
    cadence: "Short build-oriented check-ins with practical issue slices.",
    lookingFor: "TypeScript contributors, maintainers, and systems-minded reviewers.",
    priorities: ["Static content flow", "Reusable page patterns", "Build stability"],
    accent: "#205493",
  },
  {
    category: "design",
    name: "Design Language",
    summary:
      "Maintains visual consistency across cards, sections, responsive layouts, and supporting documentation.",
    ownership: "Color system, typography hierarchy, reusable surfaces, and interaction polish.",
    cadence: "Design critique every two weeks plus lightweight async comments.",
    lookingFor: "UI designers, accessibility reviewers, and design-system contributors.",
    priorities: ["Unified visual rhythm", "Reusable section treatments", "Accessibility checks"],
    accent: "#7C3AED",
  },
  {
    category: "community",
    name: "Community Enablement",
    summary:
      "Keeps onboarding, contribution guidance, and public support channels welcoming and understandable.",
    ownership: "Contributor pathways, starter issues, and public-facing support content.",
    cadence: "Open office-hour rhythm backed by written follow-up notes.",
    lookingFor: "Maintainers, facilitators, documentation writers, and moderators.",
    priorities: ["Faster onboarding", "Clearer help routes", "Contribution recognition"],
    accent: "#D97706",
  },
  {
    category: "operations",
    name: "Response Readiness",
    summary:
      "Grounds product direction in realistic operational needs so polished interfaces still hold up during actual use.",
    ownership: "Scenario validation, checklist logic, and field-oriented content review.",
    cadence: "Scenario-based reviews anchored in practical workflows.",
    lookingFor: "Researchers, field partners, and contributors with response experience.",
    priorities: ["Operational realism", "Checklist quality", "Stress-case review"],
    accent: "#0F766E",
  },
];

export const teamPrinciples = [
  {
    title: "Public by default",
    description: "We document decisions where contributors can actually find them and respond with context, not mystery.",
  },
  {
    title: "Small slices ship faster",
    description: "We prefer focused improvements that can be reviewed well over giant rewrites with vague impact.",
  },
  {
    title: "Ops reality guides product quality",
    description: "Design and engineering decisions stay tethered to the people who need calm, reliable tools under pressure.",
  },
  {
    title: "Warmth is part of the product",
    description: "Clear contributor pathways and kind review habits are essential to the experience, not extras.",
  },
];

export const docsCollections = [
  {
    id: "content-model",
    title: "Content model",
    summary: "How projects, working groups, and documentation are structured from one shared source of truth.",
    bullets: ["Centralized content data", "Typed collections", "Reusable page sections"],
  },
  {
    id: "design-system",
    title: "Design system",
    summary: "The visual rules behind spacing, surfaces, navigation, and responsive behavior across the site.",
    bullets: ["Brand color tokens", "Card hierarchy", "Responsive layout patterns"],
  },
  {
    id: "editorial",
    title: "Editorial standards",
    summary: "A lightweight content voice guide for public pages, labels, and supporting documentation.",
    bullets: ["Plain-language copy", "Short paragraphs", "Specific calls to action"],
  },
  {
    id: "release-flow",
    title: "Release flow",
    summary: "What to check before shipping updates so visual polish does not come at the cost of stability.",
    bullets: ["Local verification", "Responsive review", "Metadata and link checks"],
  },
  {
    id: "support",
    title: "Support paths",
    summary: "Where to direct questions, security concerns, and contributor requests without creating dead ends.",
    bullets: ["Maintainer email", "Security contact", "Community channel routing"],
  },
];

export const cookieStorageItems = [
  {
    name: "opencorex_cookie_consent",
    type: "Cookie",
    purpose: "Stores whether the visitor accepted or declined the cookie banner.",
    duration: "180 days",
  },
  {
    name: "opencorex_cookie_preferences",
    type: "Local storage",
    purpose: "Keeps the visitor's most recent cookie consent decision on this device.",
    duration: "Until cleared by the visitor",
  },
];

export const docsQuickStart = [
  {
    title: "Install dependencies",
    description: "Use the existing package manager lockfile and run the local dev server before making layout changes.",
  },
  {
    title: "Edit shared content",
    description: "Update the canonical content module first whenever multiple pages reuse the same story or metadata.",
  },
  {
    title: "Review in context",
    description: "Check navigation, page flow, and footer handoff so the whole site feels coordinated after each change.",
  },
];

export const footerLinkGroups = [
  {
    title: "Explore",
    links: [
      { label: "Projects", href: siteLinks.projects },
      { label: "About", href: siteLinks.about },
      { label: "Team", href: siteLinks.team },
      { label: "Docs", href: siteLinks.docs },
    ],
  },
  {
    title: "Contribute",
    links: [
      { label: "Contribution Guide", href: siteLinks.contribute },
      { label: "GitHub Organization", href: siteLinks.github },
      { label: "Community Chat", href: siteLinks.discord },
      { label: "Maintainer Contact", href: siteLinks.contact },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Security", href: siteLinks.security },
      { label: "Documentation", href: siteLinks.docs },
      { label: "Project Tracks", href: siteLinks.projects },
      { label: "About OpenCorex", href: siteLinks.about },
    ],
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(siteProjects.map((project) => project.category))),
];

export const contributionSteps = [
  {
    title: "Start with the story",
    description:
      "Read the project and documentation pages first so implementation work lands in the right context and uses the same language as the rest of the platform.",
  },
  {
    title: "Run the site locally",
    description:
      "Install dependencies, start the Next.js app, and review your change across the homepage, navigation, and footer before polishing a single section in isolation.",
  },
  {
    title: "Ship a small durable slice",
    description:
      "Prefer one reviewable improvement at a time: a content refinement, a layout fix, a stronger component, or a clearer support path.",
  },
  {
    title: "Leave the next person context",
    description:
      "Document assumptions, test the responsive flow, and make sure labels, links, and supporting copy explain why the change exists.",
  },
];

export const contributionCommands = [
  {
    command: "pnpm install",
    description: "Install the workspace dependencies defined by the lockfile.",
  },
  {
    command: "pnpm dev",
    description: "Run the local development server for layout and content review.",
  },
  {
    command: "pnpm build",
    description: "Verify that the site compiles cleanly before handoff or release.",
  },
  {
    command: "pnpm lint",
    description: "Run the configured lint checks for TypeScript and React code.",
  },
];

export type CollaborationRoute = {
  label: string;
  href: string;
  description: string;
};

export const collaborationRoutes: CollaborationRoute[] = [
  {
    label: "GitHub organization",
    href: siteLinks.github,
    description:
      "Review repositories, issue history, and implementation context once you know which track you want to improve.",
  },
  {
    label: "Community chat",
    href: siteLinks.discord,
    description:
      "Ask orientation questions, share work in progress, and coordinate with contributors in public.",
  },
  {
    label: "Maintainer contact",
    href: siteLinks.contact,
    description:
      "Use a direct route for onboarding help, collaboration requests, or questions that need a project owner.",
  },
  {
    label: "Security contact",
    href: siteLinks.security,
    description:
      "Route vulnerabilities or sensitive operational concerns through a private channel instead of posting them in public discussion threads.",
  },
];

export const siteSnapshot = [
  {
    value: `${siteProjects.length}`,
    label: "project tracks",
    detail: "Defined initiatives with audiences, stages, and clear operating focus.",
  },
  {
    value: `${workingGroups.length}`,
    label: "working groups",
    detail: "Cross-functional lanes that keep design, delivery, and support visible.",
  },
  {
    value: `${docsCollections.length}`,
    label: "documentation lanes",
    detail: "Shared references for content, design, release, and support quality.",
  },
  {
    value: `${contributionTracks.length}`,
    label: "contribution paths",
    detail: "Clear entry points for engineering, writing, research, and community work.",
  },
];
