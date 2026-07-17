import {
  Activity,
  BarChart3,
  BrainCircuit,
  ChartColumn,
  CircleDashed,
  Database,
  Filter,
  GitBranch,
  LineChart,
  ScanSearch,
  SlidersHorizontal,
  Target,
  TestTube2,
  TrendingUp,
} from "lucide-react";

import LearningGuidePage from "./LearningGuidePage";

const config = {
  title: "Machine Learning",
  badge: "Core track",
  level: "Beginner to intermediate",
  description:
    "Learn how machine-learning systems are trained, evaluated and improved using supervised and unsupervised approaches grounded in practical workflows.",
  primaryCta: "Start machine learning",
  duration: "5 hours",
  metaLabel: "Project",
  metaValue: "End-to-end ML capstone",
  progress: 24,
  sidebarTitle: "ML curriculum",
  sidebarIcon: BrainCircuit,
  heroIcon: BrainCircuit,
  lesson: {
    title: "From features to predictions",
    description:
      "This lesson shows how structured input data becomes a prediction and why feature quality strongly shapes model performance.",
    duration: "15 min",
    icon: Activity,
  },
  modules: [
    {
      id: 1,
      title: "Supervised learning essentials",
      duration: "1 hr 20 min",
      lessons: [
        { id: "1-1", title: "Classification vs regression", duration: "14 min", completed: true },
        { id: "1-2", title: "Features and labels", duration: "16 min", completed: false },
        { id: "1-3", title: "Train-test split", duration: "16 min", completed: false },
        { id: "1-4", title: "Baseline models", duration: "18 min", completed: false },
      ],
    },
    {
      id: 2,
      title: "Unsupervised learning",
      duration: "58 min",
      lessons: [
        { id: "2-1", title: "Clustering intuition", duration: "14 min", completed: false },
        { id: "2-2", title: "Segmentation use cases", duration: "14 min", completed: false },
        { id: "2-3", title: "Dimensionality reduction", duration: "16 min", completed: false },
        { id: "2-4", title: "Interpreting cluster output", duration: "14 min", completed: false },
      ],
    },
    {
      id: 3,
      title: "Evaluation and iteration",
      duration: "1 hr 6 min",
      lessons: [
        { id: "3-1", title: "Accuracy and error metrics", duration: "16 min", completed: false },
        { id: "3-2", title: "Bias and variance", duration: "18 min", completed: false },
        { id: "3-3", title: "Feature engineering", duration: "16 min", completed: false },
        { id: "3-4", title: "Capstone review", duration: "16 min", completed: false },
      ],
    },
  ],
  outcomes: [
    "Describe the difference between supervised and unsupervised learning",
    "Prepare simple datasets for model training and evaluation",
    "Choose basic metrics for classification and regression problems",
    "Spot common issues like underfitting, overfitting and leakage",
    "Explain feature engineering decisions more clearly",
    "Build confidence for project-based ML practice",
  ],
  sections: [
    {
      title: "Supervised learning",
      description:
        "Supervised learning maps known examples to known outcomes, making it one of the most practical entry points into ML work.",
      icon: Target,
      items: [
        {
          icon: ChartColumn,
          title: "Regression",
          description: "Predict continuous values such as revenue, demand or response time.",
          points: ["Numeric targets", "Error minimisation", "Trend analysis"],
        },
        {
          icon: CircleDashed,
          title: "Classification",
          description: "Assign categories like churn, fraud or sentiment labels.",
          points: ["Probability scores", "Threshold decisions", "Confusion matrix thinking"],
        },
        {
          icon: Database,
          title: "Training data",
          description: "Well-labelled data matters more than fancy models in early stages.",
          points: ["Quality labels", "Representative samples", "Consistent schema"],
        },
      ],
    },
    {
      title: "Unsupervised learning",
      description:
        "Unsupervised methods find structure without labelled answers, helping teams explore patterns hidden in raw data.",
      icon: ScanSearch,
      items: [
        {
          icon: Filter,
          title: "Clustering",
          description: "Group similar records to discover audience segments or usage patterns.",
          points: ["Distance measures", "Cluster counts", "Business interpretation"],
        },
        {
          icon: SlidersHorizontal,
          title: "Feature reduction",
          description: "Reduce noise and simplify high-dimensional datasets before modelling.",
          points: ["Compression", "Visualisation", "Signal preservation"],
        },
        {
          icon: GitBranch,
          title: "Exploration",
          description: "Use unsupervised methods to inform hypotheses and downstream experiments.",
          points: ["Pattern discovery", "Outlier review", "Faster iteration"],
        },
      ],
    },
    {
      title: "Evaluation discipline",
      description:
        "Strong evaluation habits prevent misleading wins and help teams decide whether a model is ready to trust.",
      icon: TestTube2,
      items: [
        {
          icon: BarChart3,
          title: "Metrics",
          description: "Pick metrics that align with the business decision the model supports.",
          points: ["Precision and recall", "RMSE and MAE", "Operational tradeoffs"],
        },
        {
          icon: LineChart,
          title: "Validation",
          description: "Test performance on unseen data to estimate real-world behaviour.",
          points: ["Holdout sets", "Cross-validation", "Drift awareness"],
        },
        {
          icon: TrendingUp,
          title: "Improvement loop",
          description: "Treat model building as an iterative process, not a one-shot task.",
          points: ["Baseline first", "Measure changes", "Document results"],
        },
      ],
    },
  ],
  codeExample: {
    label: "Training sketch",
    title: "A simple classification workflow",
    code: `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

X_train, X_test, y_train, y_test = train_test_split(
    features, labels, test_size=0.2, random_state=42
)

model = RandomForestClassifier(n_estimators=200, random_state=42)
model.fit(X_train, y_train)

predictions = model.predict(X_test)`,
  },
  exercises: [
    {
      title: "Choose a model type",
      difficulty: "Beginner",
      task: "Decide whether three sample business problems are classification or regression tasks.",
      hint: "Look at whether the target is a label or a numeric value.",
    },
    {
      title: "Audit a dataset split",
      difficulty: "Intermediate",
      task: "Review a training and test split and identify two ways leakage could happen.",
      hint: "Look for duplicated records, future information or target-derived features.",
    },
    {
      title: "Compare two model results",
      difficulty: "Intermediate",
      task: "Given precision, recall and accuracy for two models, recommend which one to ship.",
      hint: "Base the decision on the business cost of false positives and false negatives.",
    },
  ],
};

export default function MachineLearningPage({ theme = "light" }) {
  return <LearningGuidePage theme={theme} accent="emerald" config={config} />;
}
