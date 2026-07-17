export const classroomIntro = {
  "kicker": "Inside the classroom",
  "title": "Where Learning AI Becomes Building for Real",
  "description": "Dive into hands-on courses, live workshops, and practical paths designed for real-world results.",
  "footer": "8 courses free to start · 13 unlock with Premium · New courses ship every week."
};

export const classroomTracks = [
  {
    "id": "foundations",
    "label": "TRACK 01",
    "title": "Foundations",
    "audience": "For beginners, non-coders & career switchers",
    "outcome": "Go from zero to using AI every single day.",
    "courses": [
      {
        "slug": "claude-code-everyone",
        "title": "Claude Code for Everyone",
        "tier": "prem",
        "modules": 7,
        "format": "7 modules",
        "chips": [
          "Beginner",
          "No-code"
        ],
        "highlights": [
          "Prompting, workflows & thinking with AI from zero",
          "Get Claude to do real work for you daily",
          "No coding or tech background needed"
        ],
        "description": "Claude from zero — learn to think, write, plan, and solve real problems with AI. Built for beginners, marketers, founders, and students. No tech background needed; by the end you’ll use Claude every day like a pro.",
        "image": "/assets/classroom/claude-code-everyone.jpg"
      },
      {
        "slug": "claude-no-code",
        "title": "Claude Code — No Code Needed",
        "tier": "prem",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "Workshop",
          "No-code"
        ],
        "highlights": [
          "Build a full PowerPoint from a single prompt",
          "Turn audio into a pro video (Hyperframes + ElevenLabs)",
          "Ship a hosted portfolio site from your resume"
        ],
        "description": "Claude Code for non-developers — no terminal, no setup. Build three real things live: a PowerPoint from a single prompt, a professional video from audio (Hyperframes + ElevenLabs), and a hosted portfolio site from your resume. Connect Claude to Canva, GitHub, Drive, and Zoom.",
        "image": "/assets/classroom/claude-no-code.jpg"
      },
      {
        "slug": "python-chamber",
        "title": "Python — The Chamber of Scripts",
        "tier": "prem",
        "modules": 52,
        "format": "52 modules",
        "chips": [
          "Python",
          "Foundations"
        ],
        "highlights": [
          "From your first print() to functions & classes",
          "The libraries every AI engineer uses",
          "Build-anything fluency by the end"
        ],
        "description": "Your initiation into Python — from your first print statement to functions, classes, and libraries. The foundational grimoire every AI engineer, data scientist, and developer needs. Emerge with the fluency to build anything.",
        "image": "/assets/classroom/python-chamber.jpg"
      },
      {
        "slug": "nosql-mongodb",
        "title": "NoSQL & MongoDB",
        "tier": "free",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "Data",
          "MongoDB"
        ],
        "highlights": [
          "SQL vs NoSQL & the 4 NoSQL families",
          "MongoDB Atlas + full CRUD with PyMongo",
          "Production OOP: client + repository you can ship"
        ],
        "description": "Master NoSQL and MongoDB from scratch: SQL vs NoSQL, the 4 NoSQL families, MongoDB Atlas setup, full CRUD with PyMongo, query operators, projections, and nested updates — ending with production-grade OOP (a client + repository) you can ship.",
        "image": "/assets/classroom/nosql-mongodb.jpg"
      },
      {
        "slug": "kubernetes",
        "title": "Kubernetes for Beginners",
        "tier": "prem",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "DevOps",
          "Docker"
        ],
        "highlights": [
          "Why one server isn't enough — Docker to K8s",
          "Pods, nodes, clusters & self-healing",
          "Scaling, load balancing & rolling updates"
        ],
        "description": "Docker, cloud, and Kubernetes explained through one app going viral at 2 AM. Learn why one server isn’t enough, how containers solve packaging, and how K8s manages containers at scale — pods, nodes, clusters, self-healing, scaling, load balancing, rolling updates, and rollback.",
        "image": "/assets/classroom/kubernetes.jpg"
      }
    ]
  },
  {
    "id": "build-agents",
    "label": "TRACK 02",
    "title": "Build Agents",
    "audience": "For developers & power users going hands-on",
    "outcome": "Build working agents wired into real tools and APIs.",
    "courses": [
      {
        "slug": "claude-code-builders",
        "title": "Claude Code for Builders",
        "tier": "prem",
        "modules": 4,
        "format": "4 modules",
        "chips": [
          "Claude Code",
          "Automation"
        ],
        "highlights": [
          "Claude Code, agents & automation in depth",
          "Wire Claude into your existing stack",
          "Production-grade workflows that actually ship"
        ],
        "description": "Claude for people who build — engineers, PMs, analysts, and power users who want real technical depth. Claude Code, agents, automation, and production-grade workflows. Wire Claude into your stack and build things that actually run.",
        "image": "/assets/classroom/claude-code-builders.jpg"
      },
      {
        "slug": "agent-builder",
        "title": "Agent Builder: Production Systems",
        "tier": "prem",
        "modules": 28,
        "format": "28 modules",
        "chips": [
          "LangGraph",
          "Capstone"
        ],
        "highlights": [
          "LangGraph orchestration + LangChain v1.0",
          "LangSmith observability & graded assignments",
          "Capstone project with lifetime access"
        ],
        "description": "Go from Python scripts to deploying multi-agent AI systems in production. Master LangGraph orchestration, LangChain v1.0 agents, Deep Agents harness control, and LangSmith observability. Live sessions, graded assignments, a capstone project, and lifetime access.",
        "image": "/assets/classroom/agent-builder.jpg"
      },
      {
        "slug": "deep-agents",
        "title": "Deep Agents",
        "tier": "prem",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "Agent SDK",
          "Advanced"
        ],
        "highlights": [
          "Planning agents that spawn sub-agents in parallel",
          "Virtual file systems & self-recovery",
          "Build a data-analyst agent (Claude Agent SDK)"
        ],
        "description": "Regular agents break on complex tasks. Deep Agents plan like engineers, spawn sub-agents in parallel, manage virtual file systems, and self-recover. Learn the architecture behind Claude Code and build your own data-analyst agent with LangChain Deep Agents and the Claude Agent SDK.",
        "image": "/assets/classroom/deep-agents.jpg"
      },
      {
        "slug": "tool-calling",
        "title": "Tool Calling: The Brain of Agents",
        "tier": "free",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "LangChain",
          "Hands-on"
        ],
        "highlights": [
          "How LLMs decide when to call APIs",
          "Generate JSON args & chain results",
          "Web-search agent with LangChain + Tavily"
        ],
        "description": "Every AI agent runs on one core mechanic: tool calling. Learn how LLMs decide when to call APIs, generate JSON arguments, and chain results into natural answers. Hands-on build with LangChain, a weather API, and a real web-search agent using Tavily.",
        "image": "/assets/classroom/tool-calling.jpg"
      },
      {
        "slug": "langgraph",
        "title": "LangGraph: State & Self-Healing",
        "tier": "free",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "LangGraph",
          "Tracing"
        ],
        "highlights": [
          "State, nodes, edges & self-healing loops",
          "Build a reflection agent end to end",
          "Trace every LLM call with LangSmith"
        ],
        "description": "Linear agent frameworks break in production. LangGraph fixes it with state, nodes, edges, and self-healing loops. Build a real reflection agent end to end, trace every LLM call with LangSmith, and understand why top teams are migrating to LangGraph.",
        "image": "/assets/classroom/langgraph.jpg"
      },
      {
        "slug": "n8n-agent",
        "title": "First AI Agent with n8n",
        "tier": "free",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "n8n",
          "No-code"
        ],
        "highlights": [
          "Auto-ingest Drive files → Supabase embeddings",
          "RAG chat agent with OpenAI + full logging",
          "Email & Slack alerts, exposed as an API"
        ],
        "description": "Build a production-ready AI agent with zero code in n8n. Create an end-to-end workflow that auto-ingests files from Google Drive, embeds them into Supabase, powers a RAG chat agent with OpenAI, logs every conversation, and fires email + Slack alerts — then expose it as an API.",
        "image": "/assets/classroom/n8n-agent.jpg"
      }
    ]
  },
  {
    "id": "ship-to-production",
    "label": "TRACK 03",
    "title": "Ship to Production",
    "audience": "For engineers taking agents live",
    "outcome": "Deploy secure, scalable, observable AI systems.",
    "courses": [
      {
        "slug": "ai-software-architecture",
        "title": "AI Software Architecture",
        "tier": "prem",
        "modules": 3,
        "format": "3 modules",
        "chips": [
          "Architecture",
          "MCP"
        ],
        "highlights": [
          "Agent architecture, MCP servers & orchestrators",
          "Docker, Kubernetes & CI/CD pipelines",
          "Scale from one user to millions"
        ],
        "description": "A two-part workshop on building AI software the way companies actually do it. Covers agent architecture, tools, MCP servers, orchestrators, memory, authentication, Docker, Kubernetes, CI/CD pipelines, and scaling from one user to millions — the full lifecycle from ideation to production.",
        "image": "/assets/classroom/ai-software-architecture.jpg"
      },
      {
        "slug": "ai-memory",
        "title": "AI Memory with LangGraph",
        "tier": "prem",
        "modules": 4,
        "format": "4 modules",
        "chips": [
          "Memory",
          "Deploy"
        ],
        "highlights": [
          "Real memory via trimming & summarization",
          "SQLite → Postgres, FastAPI, Docker Compose",
          "Deploy live to Render with Supabase"
        ],
        "description": "Most chatbots forget everything as the conversation grows. Give your AI real memory end to end: a LangGraph chatbot with trimming and summarization, SQLite persistence, a FastAPI backend, Docker, and a live deploy to Render — then upgrade to production memory with Postgres, Docker Compose, and Supabase.",
        "image": "/assets/classroom/ai-memory.jpg"
      },
      {
        "slug": "agentic-etl",
        "title": "Agentic ETL",
        "tier": "prem",
        "modules": 18,
        "format": "18 modules",
        "chips": [
          "Enterprise",
          "FastAPI"
        ],
        "highlights": [
          "LLM agent migrates Snowflake → GCS via chat",
          "React + FastAPI + LangChain, no static DAGs",
          "Versioning, conflict resolution & tool-calling"
        ],
        "description": "Build a production-style AI agent that migrates data from Snowflake to Google Cloud Storage — no cron jobs, no static DAGs. Using React, FastAPI, and LangChain, create an LLM agent that understands natural language, inspects storage, handles versioning, resolves conflicts, and automates the full pipeline through a chat UI.",
        "image": "/assets/classroom/agentic-etl.jpg"
      },
      {
        "slug": "guardrails",
        "title": "AI Guardrails",
        "tier": "free",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "Security",
          "Guardrails"
        ],
        "highlights": [
          "LangChain middleware to intercept the flow",
          "Redact PII & block prompt injection",
          "Gate dangerous tool calls (+ MCP vs inline)"
        ],
        "description": "Raw models behind your API will answer anything. Secure your own agent with LangChain middleware: intercept the flow, redact and mask PII, block prompt injection, and gate dangerous tool calls. Build a guarded agent end to end, plus a bonus on MCP vs inline tools.",
        "image": "/assets/classroom/guardrails.jpg"
      },
      {
        "slug": "pageindex",
        "title": "PageIndex: The RAG Killer",
        "tier": "free",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "RAG",
          "Retrieval"
        ],
        "highlights": [
          "Why vector search breaks on complex docs",
          "Tree-based reasoning RAG (ToC + summaries)",
          "Iterative LLM navigation, no blind chunking"
        ],
        "description": "Vector search is broken for complex documents — similarity does not mean relevance. Learn PageIndex, a tree-based reasoning RAG that navigates documents the way humans do, using table of contents, section summaries, and iterative LLM reasoning instead of chunking and embeddings.",
        "image": "/assets/classroom/pageindex.jpg"
      }
    ]
  },
  {
    "id": "frontier-engineering",
    "label": "TRACK 04",
    "title": "Frontier Engineering",
    "audience": "For advanced builders at the edge",
    "outcome": "Build frontier multi-agent systems.",
    "courses": [
      {
        "slug": "harness-loop",
        "title": "Harness & Loop Engineering",
        "tier": "prem",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "Frontier",
          "Loops"
        ],
        "highlights": [
          "Model + harness = agent, from the core",
          "Why models differ across Claude Code / Copilot / Codex",
          "Objective vs subjective criteria — when loops pay off"
        ],
        "description": "“I don’t prompt Claude anymore. I have loops that prompt Claude.” Harness and loop engineering from the core: what a harness really is (model + harness = agent), why the same model behaves differently across Claude Code, Copilot, and Codex, objective vs subjective criteria, and when loops save you vs burn tokens.",
        "image": "/assets/classroom/harness-loop.jpg"
      },
      {
        "slug": "dynamic-workflows",
        "title": "Claude Code Dynamic Workflows",
        "tier": "free",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "Opus 4.8",
          "Workflows"
        ],
        "highlights": [
          "Run up to 1000 sub-agents in one command",
          "16 in parallel without polluting context",
          "Save workflows as reusable slash commands"
        ],
        "description": "Anthropic just shipped Dynamic Workflows in Claude Code (Opus 4.8). Run up to 1000 sub-agents in one command, 16 in parallel, without polluting your context — think LangGraph inside a Claude session. Full breakdown, live demo, and how to save workflows as reusable slash commands.",
        "image": "/assets/classroom/dynamic-workflows.jpg"
      },
      {
        "slug": "ralph-loop",
        "title": "RALPH Loop",
        "tier": "prem",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "Autonomous",
          "Spec-driven"
        ],
        "highlights": [
          "Autonomous agents that build, test & ship",
          "Spec-driven dev, PRD files & Git-based memory",
          "Parallel agents at 5× lower token cost"
        ],
        "description": "Go beyond vibe coding with Cursor and Claude Code. Learn the RALPH Loop — an autonomous agent architecture that builds, tests, and ships production-grade code while you sleep. Master spec-driven development, PRD files, Git-based memory, and parallel agents at 5× lower token cost.",
        "image": "/assets/classroom/ralph-loop.jpg"
      },
      {
        "slug": "superpowers",
        "title": "Superpowers for Claude Code",
        "tier": "free",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "Spec-driven",
          "TDD"
        ],
        "highlights": [
          "Spec-driven development (158K★ plugin)",
          "Sub-agent & test-driven coding",
          "Ship production-ready, not just impressive"
        ],
        "description": "Stop vibe coding blindly. Learn spec-driven development with Superpowers — the Claude Code plugin with 158K+ GitHub stars. Sub-agent driven coding, test-driven development, and structured planning so your AI-generated code is production-ready, not just impressive-looking.",
        "image": "/assets/classroom/superpowers.jpg"
      }
    ]
  },
  {
    "id": "this-week-in-ai",
    "label": "ONGOING",
    "title": "This Week in AI",
    "audience": "For everyone — runs alongside every track",
    "outcome": "Never fall behind the fast-moving AI world.",
    "courses": [
      {
        "slug": "this-week-in-ai",
        "title": "This Week in AI",
        "tier": "prem",
        "modules": 1,
        "format": "Live workshop",
        "chips": [
          "Bi-weekly",
          "Live"
        ],
        "highlights": [
          "The launches & breakthroughs that matter",
          "Tools worth your time, hype worth ignoring",
          "How to apply each change to your work now"
        ],
        "description": "Stay ahead without the noise. Every alternate week we break down what actually matters in AI — the launches, the breakthroughs, the tools worth your time, and the hype worth ignoring. Learn what changed, why it matters, and how to apply it to your work right now.",
        "image": "/assets/classroom/this-week-in-ai.jpg"
      }
    ]
  }
];

export const classroomFilters = [
  { id: 'all', label: 'All' },
  ...classroomTracks.map(({ id, title }) => ({ id, label: title })),
];
