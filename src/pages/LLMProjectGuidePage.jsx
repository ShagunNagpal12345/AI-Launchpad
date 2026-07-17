import {
  Bot,
  Boxes,
  BriefcaseBusiness,
  BrainCircuit,
  Database,
  FileSearch,
  FolderGit2,
  MessageSquareText,
  Network,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TestTube2,
  Workflow,
} from "lucide-react";

import LearningGuidePage from "./LearningGuidePage";

const config = {
  title: "LLM Project Guide",
  badge: "Build guide",
  level: "Intermediate",
  description:
    "Learn how to plan, build and evaluate an LLM-powered application from use-case selection through prompting, retrieval, testing and production rollout.",
  primaryCta: "Start LLM guide",
  duration: "4 hours 35 min",
  metaLabel: "Project",
  metaValue: "LLM application capstone",
  progress: 14,
  sidebarTitle: "LLM project roadmap",
  sidebarIcon: Sparkles,
  heroIcon: Rocket,
  lesson: {
    title: "What makes an LLM project succeed",
    description:
      "The strongest LLM projects are grounded in a real user task, a measurable outcome and a workflow that balances model capability with reliability.",
    duration: "13 min",
    icon: Bot,
  },
  modules: [
    {
      id: 1,
      title: "Choosing the right use case",
      duration: "58 min",
      lessons: [
        { id: "1-1", title: "Problem framing", duration: "14 min", completed: true },
        { id: "1-2", title: "Task fit for LLMs", duration: "14 min", completed: false },
        { id: "1-3", title: "Success metrics", duration: "14 min", completed: false },
        { id: "1-4", title: "Risk review", duration: "16 min", completed: false },
      ],
    },
    {
      id: 2,
      title: "System design and prompting",
      duration: "1 hr 12 min",
      lessons: [
        { id: "2-1", title: "Prompt architecture", duration: "16 min", completed: false },
        { id: "2-2", title: "Structured outputs", duration: "18 min", completed: false },
        { id: "2-3", title: "Retrieval patterns", duration: "20 min", completed: false },
        { id: "2-4", title: "Fallback strategies", duration: "18 min", completed: false },
      ],
    },
    {
      id: 3,
      title: "Testing and deployment",
      duration: "1 hr 6 min",
      lessons: [
        { id: "3-1", title: "Evaluation datasets", duration: "18 min", completed: false },
        { id: "3-2", title: "Prompt regression checks", duration: "16 min", completed: false },
        { id: "3-3", title: "Guardrails and policy", duration: "14 min", completed: false },
        { id: "3-4", title: "Launch checklist", duration: "18 min", completed: false },
      ],
    },
  ],
  outcomes: [
    "Choose better problem statements for LLM-powered products",
    "Design prompts and retrieval flows that are easier to maintain",
    "Create measurable evaluation criteria before launch",
    "Reduce hallucination risk with stronger system design",
    "Plan production guardrails and fallback behavior",
    "Ship an LLM prototype with clearer technical direction",
  ],
  sections: [
    {
      title: "Use-case strategy",
      description:
        "Not every workflow benefits from an LLM. Good project selection prevents wasted effort and creates clearer product outcomes.",
      icon: Target,
      items: [
        {
          icon: BriefcaseBusiness,
          title: "Business value",
          description: "Focus on tasks where language understanding creates obvious leverage.",
          points: ["Drafting and rewriting", "Summarisation", "Knowledge assistance"],
        },
        {
          icon: Puzzle,
          title: "Task fit",
          description: "Prefer workflows with clear inputs, usable context and reviewable outputs.",
          points: ["Defined user intent", "Low ambiguity", "Reasonable correction cost"],
        },
        {
          icon: ShieldCheck,
          title: "Risk level",
          description: "Escalate carefully when the output affects legal, financial or safety decisions.",
          points: ["Human oversight", "Restricted actions", "Approval steps"],
        },
      ],
    },
    {
      title: "LLM system design",
      description:
        "Strong LLM apps rely on more than a single prompt. Retrieval, memory, formatting and safety controls shape real-world quality.",
      icon: Network,
      items: [
        {
          icon: MessageSquareText,
          title: "Prompt layers",
          description: "Separate system intent, user context and formatting instructions cleanly.",
          points: ["Role and objective", "Context blocks", "Output schema"],
        },
        {
          icon: Database,
          title: "Grounding",
          description: "Use retrieval to anchor answers in trusted source material instead of pure model recall.",
          points: ["Chunking", "Search ranking", "Citation support"],
        },
        {
          icon: Workflow,
          title: "Fallbacks",
          description: "Plan for uncertainty by routing low-confidence cases to safer responses or humans.",
          points: ["Low-confidence detection", "Escalation paths", "Graceful failure"],
        },
      ],
    },
    {
      title: "Launch discipline",
      description:
        "Testing and observability are what turn a clever demo into a trustworthy product.",
      icon: TestTube2,
      items: [
        {
          icon: FileSearch,
          title: "Evaluation sets",
          description: "Create representative examples that reflect the actual work users need done.",
          points: ["Golden samples", "Edge cases", "Failure review"],
        },
        {
          icon: FolderGit2,
          title: "Versioning",
          description: "Track prompts, configurations and evaluation results so changes stay understandable.",
          points: ["Prompt revisions", "Dataset versions", "Release notes"],
        },
        {
          icon: Boxes,
          title: "Deployment workflow",
          description: "Release gradually with logging, monitoring and rollback support.",
          points: ["Canary launch", "Tracing", "Operational alerts"],
        },
      ],
    },
  ],
  codeExample: {
    label: "Project skeleton",
    title: "An LLM app request flow",
    code: `user_query = "Summarise the customer policy update"
documents = retriever.search(user_query, top_k=3)
context = "\\n\\n".join(doc.text for doc in documents)

prompt = f"""You are a policy assistant.
Use only the context below.

Context:
{context}

Task:
Summarise the update in 5 bullet points.
"""

response = llm.generate(prompt)`,
  },
  exercises: [
    {
      title: "Pick the right use case",
      difficulty: "Intermediate",
      task: "Compare three product ideas and choose which one is the strongest fit for an LLM-first approach.",
      hint: "Consider input clarity, acceptable error cost and expected user value.",
    },
    {
      title: "Design a grounded prompt",
      difficulty: "Intermediate",
      task: "Write a prompt for answering HR policy questions using retrieved company documents.",
      hint: "Include role, constraints, citation behavior and a fallback for missing context.",
    },
    {
      title: "Create a launch checklist",
      difficulty: "Advanced",
      task: "Draft a short checklist for testing and releasing an internal LLM feature.",
      hint: "Cover evaluation, guardrails, logging, escalation and rollback.",
    },
  ],
};

export default function LlmProjectGuidePage({ theme = "light" }) {
  return <LearningGuidePage theme={theme} accent="violet" config={config} />;
}
