import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  FileBarChart,
  FolderKanban,
  GraduationCap,
  Handshake,
  Lightbulb,
  Presentation,
  Rocket,
  ShieldCheck,
  Users,
  WandSparkles,
} from "lucide-react";

import LearningGuidePage from "./LearningGuidePage";

const config = {
  title: "AI for Professionals",
  badge: "Career track",
  level: "All levels",
  description:
    "Apply AI in business settings through case studies, deployment thinking, communication skills and portfolio-focused project work.",
  primaryCta: "Start professional track",
  duration: "3 hours 55 min",
  metaLabel: "Outcome",
  metaValue: "Career-ready portfolio",
  progress: 31,
  sidebarTitle: "Professional track",
  sidebarIcon: BriefcaseBusiness,
  heroIcon: Rocket,
  lesson: {
    title: "Using AI where work actually happens",
    description:
      "This lesson focuses on embedding AI into meetings, workflows, customer journeys and team decisions rather than treating it as an isolated novelty.",
    duration: "11 min",
    icon: Building2,
  },
  modules: [
    {
      id: 1,
      title: "Business use cases and case studies",
      duration: "1 hr 6 min",
      lessons: [
        { id: "1-1", title: "AI opportunities by function", duration: "14 min", completed: true },
        { id: "1-2", title: "Case study teardown", duration: "18 min", completed: false },
        { id: "1-3", title: "ROI thinking", duration: "16 min", completed: false },
        { id: "1-4", title: "Stakeholder alignment", duration: "18 min", completed: false },
      ],
    },
    {
      id: 2,
      title: "Deploying AI apps responsibly",
      duration: "1 hr 2 min",
      lessons: [
        { id: "2-1", title: "Workflow design", duration: "14 min", completed: false },
        { id: "2-2", title: "Approval and review loops", duration: "14 min", completed: false },
        { id: "2-3", title: "Privacy and compliance", duration: "18 min", completed: false },
        { id: "2-4", title: "Adoption planning", duration: "16 min", completed: false },
      ],
    },
    {
      id: 3,
      title: "Career acceleration",
      duration: "52 min",
      lessons: [
        { id: "3-1", title: "Portfolio storytelling", duration: "14 min", completed: false },
        { id: "3-2", title: "Interview talking points", duration: "12 min", completed: false },
        { id: "3-3", title: "Cross-functional communication", duration: "12 min", completed: false },
        { id: "3-4", title: "Personal action plan", duration: "14 min", completed: false },
      ],
    },
  ],
  outcomes: [
    "Identify practical AI opportunities in business workflows",
    "Translate AI ideas into stakeholder-friendly proposals",
    "Apply responsible deployment thinking outside pure engineering roles",
    "Use case studies to sharpen product and operations judgement",
    "Build stronger AI portfolio narratives for interviews and promotions",
    "Present AI work with more confidence and clarity",
  ],
  sections: [
    {
      title: "Business application",
      description:
        "Professionals need frameworks for selecting the right AI use cases instead of adopting tools purely because they are fashionable.",
      icon: BriefcaseBusiness,
      items: [
        {
          icon: Building2,
          title: "Operational efficiency",
          description: "Use AI to reduce repetitive work and improve turnaround time.",
          points: ["Drafting support", "Triage workflows", "Knowledge retrieval"],
        },
        {
          icon: FileBarChart,
          title: "Decision support",
          description: "Help teams analyse information faster and present clearer options.",
          points: ["Summaries", "Scenario comparison", "Insight extraction"],
        },
        {
          icon: Lightbulb,
          title: "Innovation",
          description: "Accelerate ideation, testing and experimentation for new offerings.",
          points: ["Concept generation", "Rapid research", "Prototype briefs"],
        },
      ],
    },
    {
      title: "Responsible rollout",
      description:
        "Professional success with AI depends on trust, adoption and governance, not just technical novelty.",
      icon: ShieldCheck,
      items: [
        {
          icon: FolderKanban,
          title: "Process design",
          description: "Embed AI into real workflows with clear roles and decision points.",
          points: ["Inputs and outputs", "Review checkpoints", "Escalation paths"],
        },
        {
          icon: Handshake,
          title: "Stakeholder trust",
          description: "Communicate scope, risk and expected impact in a grounded way.",
          points: ["Expectation setting", "Evidence sharing", "Change management"],
        },
        {
          icon: BadgeCheck,
          title: "Compliance awareness",
          description: "Protect data and align with policy while still moving forward.",
          points: ["Privacy checks", "Approval needs", "Documentation habits"],
        },
      ],
    },
    {
      title: "Career impact",
      description:
        "This track helps learners turn AI work into visible professional momentum across roles and industries.",
      icon: GraduationCap,
      items: [
        {
          icon: Presentation,
          title: "Storytelling",
          description: "Present problem, approach, impact and tradeoffs in a compelling sequence.",
          points: ["Context first", "Results clearly", "Lessons learned"],
        },
        {
          icon: Users,
          title: "Collaboration",
          description: "Work across product, operations, data and leadership with shared language.",
          points: ["Audience adaptation", "Cross-team planning", "Decision alignment"],
        },
        {
          icon: WandSparkles,
          title: "Career leverage",
          description: "Use portfolio projects and case studies to open stronger opportunities.",
          points: ["Portfolio curation", "Interview examples", "Promotion narratives"],
        },
      ],
    },
  ],
  codeExample: {
    label: "Project outline",
    title: "A lightweight AI opportunity brief",
    code: `project_brief = {
    "problem": "Support team spends too much time answering repeated questions",
    "solution": "AI assistant grounded on approved help-center articles",
    "success_metric": "Reduce average response time by 25%",
    "risks": ["Outdated answers", "Sensitive data exposure"],
    "owners": ["Support lead", "Operations manager", "AI implementation partner"],
}`,
  },
  exercises: [
    {
      title: "Find one good use case",
      difficulty: "Beginner",
      task: "Pick a team you know and identify one repetitive workflow that AI could improve.",
      hint: "Choose a narrow problem with clear inputs, outputs and success criteria.",
    },
    {
      title: "Write a stakeholder pitch",
      difficulty: "Intermediate",
      task: "Draft a six-line proposal for an internal AI feature including value, risk and next step.",
      hint: "Keep it concrete and tailored to a non-technical decision-maker.",
    },
    {
      title: "Turn a project into a portfolio case study",
      difficulty: "Intermediate",
      task: "Structure a short case study around problem, approach, results and reflection.",
      hint: "Focus on the decisions you made and the outcome you achieved.",
    },
  ],
};

export default function AiForProfessionalsPage({ theme = "light" }) {
  return <LearningGuidePage theme={theme} accent="emerald" config={config} />;
}
