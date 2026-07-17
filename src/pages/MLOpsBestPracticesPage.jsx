import {
  Activity,
  Boxes,
  CloudCog,
  Container,
  Database,
  FileCheck2,
  GitBranch,
  Gauge,
  History,
  PackageCheck,
  RefreshCcw,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
  TestTube2,
  Workflow,
} from "lucide-react";

import LearningGuidePage from "./LearningGuidePage";

const config = {
  title: "MLOps Best Practices",
  badge: "Production guide",
  level: "Intermediate to advanced",
  description:
    "Learn how to build reliable machine-learning delivery pipelines with reproducible training, automated testing, model registries, deployment controls and production monitoring.",
  primaryCta: "Start MLOps guide",
  duration: "4 hours 45 min",
  metaLabel: "Project",
  metaValue: "Production ML pipeline",
  progress: 5,
  sidebarTitle: "MLOps curriculum",
  sidebarIcon: Workflow,
  heroIcon: Workflow,

  modules: [
    {
      id: 1,
      title: "MLOps Foundations",
      duration: "40 min",
      lessons: [
        {
          id: "1-1",
          title: "What is MLOps?",
          duration: "8 min",
          completed: true,
        },
        {
          id: "1-2",
          title: "ML lifecycle",
          duration: "10 min",
          completed: false,
        },
        {
          id: "1-3",
          title: "Roles and ownership",
          duration: "10 min",
          completed: false,
        },
        {
          id: "1-4",
          title: "Maturity levels",
          duration: "12 min",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Reproducible Development",
      duration: "54 min",
      lessons: [
        {
          id: "2-1",
          title: "Code versioning",
          duration: "10 min",
          completed: false,
        },
        {
          id: "2-2",
          title: "Data versioning",
          duration: "12 min",
          completed: false,
        },
        {
          id: "2-3",
          title: "Environment management",
          duration: "10 min",
          completed: false,
        },
        {
          id: "2-4",
          title: "Experiment tracking",
          duration: "12 min",
          completed: false,
        },
        {
          id: "2-5",
          title: "Model registry",
          duration: "10 min",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "Testing and CI/CD",
      duration: "58 min",
      lessons: [
        {
          id: "3-1",
          title: "Unit tests",
          duration: "10 min",
          completed: false,
        },
        {
          id: "3-2",
          title: "Data-quality tests",
          duration: "12 min",
          completed: false,
        },
        {
          id: "3-3",
          title: "Model validation",
          duration: "12 min",
          completed: false,
        },
        {
          id: "3-4",
          title: "Pipeline tests",
          duration: "12 min",
          completed: false,
        },
        {
          id: "3-5",
          title: "Release automation",
          duration: "12 min",
          completed: false,
        },
      ],
    },
    {
      id: 4,
      title: "Deployment Strategies",
      duration: "58 min",
      lessons: [
        {
          id: "4-1",
          title: "Batch inference",
          duration: "10 min",
          completed: false,
        },
        {
          id: "4-2",
          title: "Online inference",
          duration: "12 min",
          completed: false,
        },
        {
          id: "4-3",
          title: "Canary deployment",
          duration: "12 min",
          completed: false,
        },
        {
          id: "4-4",
          title: "Shadow deployment",
          duration: "12 min",
          completed: false,
        },
        {
          id: "4-5",
          title: "Rollback strategy",
          duration: "12 min",
          completed: false,
        },
      ],
    },
    {
      id: 5,
      title: "Monitoring and Governance",
      duration: "55 min",
      lessons: [
        {
          id: "5-1",
          title: "Service monitoring",
          duration: "10 min",
          completed: false,
        },
        {
          id: "5-2",
          title: "Data drift",
          duration: "12 min",
          completed: false,
        },
        {
          id: "5-3",
          title: "Model performance",
          duration: "12 min",
          completed: false,
        },
        {
          id: "5-4",
          title: "Auditability",
          duration: "10 min",
          completed: false,
        },
        {
          id: "5-5",
          title: "Retraining triggers",
          duration: "11 min",
          completed: false,
        },
      ],
    },
  ],

  lesson: {
    title: "What is MLOps?",
    description:
      "Understand how MLOps connects data science, software engineering and operations to deliver reliable machine-learning systems.",
    duration: "8 minutes",
    icon: Workflow,
  },

  outcomes: [
    "Design a reproducible ML development workflow",
    "Version code, data, features and models",
    "Create automated validation and release pipelines",
    "Choose suitable deployment strategies",
    "Monitor model quality and service health",
    "Define governance, ownership and rollback controls",
  ],

  sections: [
    {
      title: "The production ML lifecycle",
      description:
        "Manage the complete path from experimentation to monitoring and retraining.",
      icon: RefreshCcw,
      items: [
        {
          title: "Develop",
          icon: GitBranch,
          description:
            "Build features, experiments and models in a controlled environment.",
        },
        {
          title: "Validate",
          icon: FileCheck2,
          description:
            "Test data, code, performance, safety and operational readiness.",
        },
        {
          title: "Package",
          icon: Container,
          description:
            "Create reproducible containers, dependencies and model artifacts.",
        },
        {
          title: "Deploy",
          icon: CloudCog,
          description:
            "Release models using controlled batch or online strategies.",
        },
        {
          title: "Monitor",
          icon: Activity,
          description:
            "Track availability, latency, data drift and model performance.",
        },
        {
          title: "Improve",
          icon: History,
          description:
            "Retrain, compare, approve and release improved model versions.",
        },
      ],
    },
    {
      title: "MLOps control points",
      description:
        "Add automated quality gates before models reach production users.",
      icon: ShieldCheck,
      items: [
        {
          title: "Data validation",
          icon: Database,
          description:
            "Validate schema, distributions, freshness and missing values.",
          points: [
            "Reject broken schemas",
            "Detect unexpected categories",
            "Track training-serving skew",
          ],
        },
        {
          title: "Model validation",
          icon: TestTube2,
          description:
            "Compare candidate models against approved baselines.",
          points: [
            "Define minimum metrics",
            "Test critical segments",
            "Evaluate fairness and robustness",
          ],
        },
        {
          title: "Release approval",
          icon: PackageCheck,
          description:
            "Promote only traceable and reproducible model versions.",
          points: [
            "Record source commit",
            "Store training data version",
            "Require approval for production",
          ],
        },
      ],
    },
    {
      title: "Monitoring dimensions",
      description:
        "Monitor the model as both a software service and a statistical system.",
      icon: Gauge,
      items: [
        {
          title: "Service health",
          icon: ServerCog,
          description:
            "Track uptime, latency, throughput, errors and resource usage.",
        },
        {
          title: "Input data",
          icon: Database,
          description:
            "Detect drift, schema changes and invalid feature values.",
        },
        {
          title: "Predictions",
          icon: Boxes,
          description:
            "Monitor score distributions, confidence and unusual outcomes.",
        },
        {
          title: "Business outcomes",
          icon: Activity,
          description:
            "Measure whether the model still supports the intended objective.",
        },
        {
          title: "Model quality",
          icon: SlidersHorizontal,
          description:
            "Evaluate delayed labels, segment performance and degradation.",
        },
      ],
    },
  ],

  codeExample: {
    label: "CI validation example",
    title: "Add a model-quality release gate",
    code: `def validate_candidate(candidate_metrics, baseline_metrics):
    required = {
        "roc_auc": 0.82,
        "recall": 0.70,
        "precision": 0.60,
    }

    for metric, minimum in required.items():
        value = candidate_metrics.get(metric)

        if value is None:
            raise ValueError(f"Missing metric: {metric}")

        if value < minimum:
            raise ValueError(
                f"{metric}={value:.3f} is below {minimum:.3f}"
            )

    if candidate_metrics["roc_auc"] < baseline_metrics["roc_auc"]:
        raise ValueError("Candidate performs below approved baseline")

    return True`,
  },

  exercises: [
    {
      title: "Design an ML pipeline",
      difficulty: "Intermediate",
      task:
        "Design the stages required to train, validate, register and deploy a churn model.",
      hint:
        "Include data validation, training, evaluation, approval, deployment and monitoring.",
    },
    {
      title: "Choose a deployment strategy",
      difficulty: "Intermediate",
      task:
        "Select a release strategy for a high-risk credit decision model.",
      hint:
        "Consider shadow deployment, canary traffic, manual approval and rollback.",
    },
    {
      title: "Define monitoring alerts",
      difficulty: "Advanced",
      task:
        "Create monitoring rules for service failures, drift and performance degradation.",
      hint:
        "Define thresholds, evaluation windows, owners and response actions.",
    },
  ],
};

export default function MLOpsBestPracticesPage({ theme = "light" }) {
  return (
    <LearningGuidePage theme={theme} accent="emerald" config={config} />
  );
}
