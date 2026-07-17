import {
  Bot,
  BrainCircuit,
  CloudCog,
  Eye,
  GitBranch,
  Globe2,
  MessageSquareText,
  Network,
  Radar,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import LearningGuidePage from "./LearningGuidePage";

const config = {
  title: "Advanced AI",
  badge: "Advanced track",
  level: "Intermediate to advanced",
  description:
    "Explore modern AI systems across language, vision, agents and production workflows, with a strong focus on design choices and responsible deployment.",
  primaryCta: "Explore advanced AI",
  duration: "5 hours 35 min",
  metaLabel: "Project",
  metaValue: "Multimodal AI capstone",
  progress: 9,
  sidebarTitle: "Advanced AI roadmap",
  sidebarIcon: Sparkles,
  heroIcon: BrainCircuit,
  lesson: {
    title: "Where advanced AI systems differ",
    description:
      "Advanced AI combines larger models, richer inputs and more orchestration layers, which makes architecture and governance decisions much more important.",
    duration: "14 min",
    icon: Network,
  },
  modules: [
    {
      id: 1,
      title: "NLP and generative AI",
      duration: "1 hr 22 min",
      lessons: [
        { id: "1-1", title: "Transformer intuition", duration: "18 min", completed: true },
        { id: "1-2", title: "Prompt design patterns", duration: "16 min", completed: false },
        { id: "1-3", title: "Retrieval-augmented generation", duration: "24 min", completed: false },
        { id: "1-4", title: "Evaluation basics", duration: "24 min", completed: false },
      ],
    },
    {
      id: 2,
      title: "Computer vision and multimodal systems",
      duration: "1 hr 6 min",
      lessons: [
        { id: "2-1", title: "Image representations", duration: "14 min", completed: false },
        { id: "2-2", title: "Detection and classification", duration: "18 min", completed: false },
        { id: "2-3", title: "Vision-language workflows", duration: "18 min", completed: false },
        { id: "2-4", title: "Failure cases", duration: "16 min", completed: false },
      ],
    },
    {
      id: 3,
      title: "Agents and MLOps",
      duration: "1 hr 18 min",
      lessons: [
        { id: "3-1", title: "Planning and tool use", duration: "18 min", completed: false },
        { id: "3-2", title: "Safety guardrails", duration: "16 min", completed: false },
        { id: "3-3", title: "Deployment workflows", duration: "22 min", completed: false },
        { id: "3-4", title: "Operational monitoring", duration: "22 min", completed: false },
      ],
    },
  ],
  outcomes: [
    "Understand the main components of transformer-based systems",
    "Compare NLP, vision and multimodal solution strategies",
    "Explain the role of retrieval, tools and orchestration in agent systems",
    "Evaluate advanced AI features with more disciplined criteria",
    "Identify production and governance risks earlier",
    "Design stronger capstone projects for real-world use cases",
  ],
  sections: [
    {
      title: "Generative systems",
      description:
        "Language and multimodal models become more useful when paired with retrieval, good prompts and careful evaluation.",
      icon: MessageSquareText,
      items: [
        {
          icon: Bot,
          title: "Prompting",
          description: "Shape responses using role, context, constraints and output format.",
          points: ["Task framing", "Grounding context", "Structured outputs"],
        },
        {
          icon: Globe2,
          title: "Retrieval",
          description: "Bring external knowledge into the model loop for fresher, safer answers.",
          points: ["Source selection", "Chunking", "Citation-aware responses"],
        },
        {
          icon: Sparkles,
          title: "Generation quality",
          description: "Optimise for usefulness, not just eloquence or length.",
          points: ["Relevance", "Consistency", "Faithfulness"],
        },
      ],
    },
    {
      title: "Multimodal intelligence",
      description:
        "Advanced systems increasingly process text, images and structured data together to solve richer tasks.",
      icon: Eye,
      items: [
        {
          icon: ScanSearch,
          title: "Vision tasks",
          description: "Use AI to classify, detect or interpret visual information at scale.",
          points: ["Classification", "Detection", "Captioning"],
        },
        {
          icon: Radar,
          title: "Signals and context",
          description: "Combine inputs from different sources for better decision quality.",
          points: ["Image plus text", "Metadata fusion", "Context weighting"],
        },
        {
          icon: BrainCircuit,
          title: "Model choice",
          description: "Pick architectures based on data shape, latency and expected failure modes.",
          points: ["Performance tradeoffs", "Compute limits", "Deployment fit"],
        },
      ],
    },
    {
      title: "Production readiness",
      description:
        "Advanced AI work only becomes valuable when systems can be monitored, controlled and improved over time.",
      icon: Workflow,
      items: [
        {
          icon: CloudCog,
          title: "Deployment",
          description: "Package services with clear interfaces and release workflows.",
          points: ["Versioning", "Staged rollout", "Rollback plans"],
        },
        {
          icon: ShieldCheck,
          title: "Safety",
          description: "Reduce harmful output and unsafe actions through layered controls.",
          points: ["Policy checks", "Access limits", "Human review"],
        },
        {
          icon: GitBranch,
          title: "Iteration",
          description: "Use feedback and telemetry to improve system quality after launch.",
          points: ["Tracing", "User feedback", "Regression checks"],
        },
      ],
    },
  ],
  codeExample: {
    label: "RAG outline",
    title: "A simple retrieval-augmented pipeline",
    code: `question = "Summarise the pricing policy"
documents = retriever.search(question, top_k=4)
context = "\\n\\n".join(doc.page_content for doc in documents)

prompt = f"""Answer using the context below.

Context:
{context}

Question:
{question}
"""

response = llm.generate(prompt)`,
  },
  exercises: [
    {
      title: "Design a GenAI workflow",
      difficulty: "Intermediate",
      task: "Plan a document-question-answering feature for an internal knowledge base.",
      hint: "Think about ingestion, retrieval, prompt structure, safeguards and evaluation.",
    },
    {
      title: "Choose a multimodal approach",
      difficulty: "Advanced",
      task: "Recommend an architecture for processing product images and support tickets together.",
      hint: "Consider separate encoders, shared embeddings and how predictions are used.",
    },
    {
      title: "Write a safety checklist",
      difficulty: "Advanced",
      task: "Create a short launch checklist for an AI assistant with tool access.",
      hint: "Include permissions, logging, human fallback and monitoring triggers.",
    },
  ],
};

export default function AdvancedAiPage({ theme = "light" }) {
  return <LearningGuidePage theme={theme} accent="violet" config={config} />;
}
