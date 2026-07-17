import {
  Binary,
  BookOpenCheck,
  Bot,
  Brain,
  Braces,
  Calculator,
  CheckCircle2,
  Code2,
  Compass,
  Database,
  FunctionSquare,
  Lightbulb,
  Sigma,
  Sparkles,
  Target,
} from "lucide-react";

import LearningGuidePage from "./LearningGuidePage";

const config = {
  title: "AI Fundamentals",
  badge: "Beginner track",
  level: "Beginner",
  description:
    "Build a strong base in Python, core math, statistics and AI concepts before moving into model building and advanced workflows.",
  primaryCta: "Start fundamentals",
  duration: "4 hours 10 min",
  metaLabel: "Project",
  metaValue: "AI basics mini project",
  progress: 18,
  sidebarTitle: "Fundamentals roadmap",
  sidebarIcon: Compass,
  heroIcon: Brain,
  lesson: {
    title: "How AI systems learn from data",
    description:
      "This lesson introduces the relationship between data, rules, patterns and predictions so learners understand what makes AI useful and where its limits begin.",
    duration: "12 min",
    icon: Bot,
  },
  modules: [
    {
      id: 1,
      title: "Python and problem solving",
      duration: "52 min",
      lessons: [
        { id: "1-1", title: "Variables and data types", duration: "10 min", completed: true },
        { id: "1-2", title: "Functions and loops", duration: "14 min", completed: false },
        { id: "1-3", title: "Working with files", duration: "12 min", completed: false },
        { id: "1-4", title: "Mini coding exercise", duration: "16 min", completed: false },
      ],
    },
    {
      id: 2,
      title: "Math and statistics foundations",
      duration: "1 hr 8 min",
      lessons: [
        { id: "2-1", title: "Linear algebra intuition", duration: "16 min", completed: false },
        { id: "2-2", title: "Probability basics", duration: "16 min", completed: false },
        { id: "2-3", title: "Averages and variance", duration: "18 min", completed: false },
        { id: "2-4", title: "Reading charts critically", duration: "18 min", completed: false },
      ],
    },
    {
      id: 3,
      title: "AI concepts and workflows",
      duration: "58 min",
      lessons: [
        { id: "3-1", title: "What AI can do", duration: "12 min", completed: false },
        { id: "3-2", title: "Training vs inference", duration: "14 min", completed: false },
        { id: "3-3", title: "Common AI use cases", duration: "14 min", completed: false },
        { id: "3-4", title: "Mini project briefing", duration: "18 min", completed: false },
      ],
    },
  ],
  outcomes: [
    "Understand the core building blocks behind modern AI systems",
    "Write simple Python code used in AI learning exercises",
    "Interpret basic statistics and probability in model evaluation",
    "Differentiate AI, machine learning and deep learning",
    "Complete a beginner-friendly AI mini project with confidence",
    "Build the foundation needed for later learning tracks",
  ],
  sections: [
    {
      title: "Python foundations",
      description:
        "Python is the working language for most AI courses and tooling. Learners focus on practical fluency rather than theory for theory’s sake.",
      icon: Braces,
      items: [
        {
          icon: Code2,
          title: "Readable syntax",
          description: "Start with code patterns that are easy to trace, test and reuse.",
          points: ["Variables and expressions", "Loops and conditions", "Functions and imports"],
        },
        {
          icon: FunctionSquare,
          title: "Reusable logic",
          description: "Break a workflow into simple steps and package them as functions.",
          points: ["Inputs and outputs", "Default arguments", "Organising utilities"],
        },
        {
          icon: Database,
          title: "Data handling",
          description: "Work with lists, dictionaries and simple tabular data before scaling up.",
          points: ["Structured records", "Iteration patterns", "Basic validation"],
        },
      ],
    },
    {
      title: "Math that matters",
      description:
        "The goal is to build intuition for the calculations AI systems rely on, without overwhelming beginners with abstract notation.",
      icon: Sigma,
      items: [
        {
          icon: Calculator,
          title: "Probability",
          description: "Estimate uncertainty and understand why predictions are rarely absolute.",
          points: ["Likelihood thinking", "Conditional reasoning", "Risk awareness"],
        },
        {
          icon: Binary,
          title: "Vectors and matrices",
          description: "Learn how features and weights are represented in compact numeric form.",
          points: ["Rows and columns", "Feature vectors", "Matrix operations"],
        },
        {
          icon: CheckCircle2,
          title: "Statistics",
          description: "Use descriptive metrics to summarise patterns and compare outcomes.",
          points: ["Mean and median", "Variance", "Sampling basics"],
        },
      ],
    },
    {
      title: "AI mindset",
      description:
        "A strong beginner track explains not just how to use tools, but how to think critically about them.",
      icon: Lightbulb,
      items: [
        {
          icon: Sparkles,
          title: "Capabilities",
          description: "Recognise where AI is powerful for automation, support and discovery.",
          points: ["Pattern recognition", "Prediction", "Language assistance"],
        },
        {
          icon: Target,
          title: "Limitations",
          description: "Stay alert to weak data, overconfidence and misleading outputs.",
          points: ["Bias risks", "Hallucinations", "Overfitting basics"],
        },
        {
          icon: BookOpenCheck,
          title: "Learning workflow",
          description: "Move from concepts to exercises to small projects for faster retention.",
          points: ["Short study loops", "Practice often", "Reflect on mistakes"],
        },
      ],
    },
  ],
  codeExample: {
    label: "Python warm-up",
    title: "A tiny rule-based predictor",
    code: `study_hours = 6
practice_sessions = 3

if study_hours >= 5 and practice_sessions >= 2:
    result = "Strong progress"
else:
    result = "Needs more practice"

print(result)`,
  },
  exercises: [
    {
      title: "Explain AI simply",
      difficulty: "Beginner",
      task: "Write a three-sentence explanation of AI, ML and deep learning for a school student.",
      hint: "Use plain language and one real-life example for each term.",
    },
    {
      title: "Create a Python helper",
      difficulty: "Beginner",
      task: "Write a function that classifies exam scores into pass, merit and distinction.",
      hint: "Use conditionals and return a label based on score ranges.",
    },
    {
      title: "Read a dataset summary",
      difficulty: "Intermediate",
      task: "Review a small table of customer data and identify two patterns and one risk.",
      hint: "Look at averages, missing values and unusual entries.",
    },
  ],
};

export default function AiFundamentalsPage({ theme = "light" }) {
  return <LearningGuidePage theme={theme} accent="blue" config={config} />;
}
