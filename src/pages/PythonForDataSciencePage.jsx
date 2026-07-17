import {
  BarChart3,
  Braces,
  Code2,
  Database,
  FileSpreadsheet,
  Filter,
  FunctionSquare,
  LineChart,
  Package,
  Table2,
  Terminal,
  WandSparkles,
} from "lucide-react";

import LearningGuidePage from "./LearningGuidePage";

const config = {
  title: "Python for Data Science",
  badge: "Practical handbook",
  level: "Beginner to intermediate",
  description:
    "Learn the Python foundations, data manipulation techniques, visualisation tools and analysis workflows used by modern data professionals.",
  primaryCta: "Start learning Python",
  duration: "4 hours 20 min",
  metaLabel: "Project",
  metaValue: "Data analysis project",
  progress: 12,
  sidebarTitle: "Python curriculum",
  sidebarIcon: Braces,
  heroIcon: Braces,

  modules: [
    {
      id: 1,
      title: "Python Foundations",
      duration: "42 min",
      lessons: [
        {
          id: "1-1",
          title: "Variables and data types",
          duration: "8 min",
          completed: true,
        },
        {
          id: "1-2",
          title: "Lists, tuples and dictionaries",
          duration: "10 min",
          completed: true,
        },
        {
          id: "1-3",
          title: "Conditions and loops",
          duration: "12 min",
          completed: false,
        },
        {
          id: "1-4",
          title: "Functions and modules",
          duration: "12 min",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "NumPy for Numerical Computing",
      duration: "44 min",
      lessons: [
        {
          id: "2-1",
          title: "Creating arrays",
          duration: "10 min",
          completed: false,
        },
        {
          id: "2-2",
          title: "Indexing and slicing",
          duration: "10 min",
          completed: false,
        },
        {
          id: "2-3",
          title: "Vectorised operations",
          duration: "12 min",
          completed: false,
        },
        {
          id: "2-4",
          title: "Aggregation and reshaping",
          duration: "12 min",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "Pandas for Data Analysis",
      duration: "68 min",
      lessons: [
        {
          id: "3-1",
          title: "Series and DataFrames",
          duration: "12 min",
          completed: false,
        },
        {
          id: "3-2",
          title: "Filtering and sorting",
          duration: "12 min",
          completed: false,
        },
        {
          id: "3-3",
          title: "Grouping and aggregation",
          duration: "14 min",
          completed: false,
        },
        {
          id: "3-4",
          title: "Merging datasets",
          duration: "15 min",
          completed: false,
        },
        {
          id: "3-5",
          title: "Missing data",
          duration: "15 min",
          completed: false,
        },
      ],
    },
    {
      id: 4,
      title: "Data Visualisation",
      duration: "50 min",
      lessons: [
        {
          id: "4-1",
          title: "Matplotlib fundamentals",
          duration: "12 min",
          completed: false,
        },
        {
          id: "4-2",
          title: "Line and bar charts",
          duration: "12 min",
          completed: false,
        },
        {
          id: "4-3",
          title: "Distributions and relationships",
          duration: "14 min",
          completed: false,
        },
        {
          id: "4-4",
          title: "Designing clear charts",
          duration: "12 min",
          completed: false,
        },
      ],
    },
    {
      id: 5,
      title: "End-to-End Analysis",
      duration: "56 min",
      lessons: [
        {
          id: "5-1",
          title: "Load and inspect data",
          duration: "10 min",
          completed: false,
        },
        {
          id: "5-2",
          title: "Clean and transform",
          duration: "14 min",
          completed: false,
        },
        {
          id: "5-3",
          title: "Explore patterns",
          duration: "14 min",
          completed: false,
        },
        {
          id: "5-4",
          title: "Present conclusions",
          duration: "18 min",
          completed: false,
        },
      ],
    },
  ],

  lesson: {
    title: "Variables and data types",
    description:
      "Understand how Python stores text, numbers, booleans and collections, and how these types are used in data-analysis workflows.",
    duration: "8 minutes",
    icon: Terminal,
  },

  outcomes: [
    "Write readable Python programs for data tasks",
    "Manipulate arrays using NumPy",
    "Clean and transform datasets with Pandas",
    "Join, group and aggregate tabular data",
    "Create useful visualisations",
    "Complete an end-to-end exploratory analysis",
  ],

  sections: [
    {
      title: "Core Python building blocks",
      description:
        "Master the language features used repeatedly in data-science projects.",
      icon: Code2,
      items: [
        {
          title: "Variables and types",
          icon: Braces,
          description:
            "Store and work with strings, integers, floats, booleans and collections.",
        },
        {
          title: "Control flow",
          icon: Filter,
          description:
            "Use conditions and loops to process data based on rules.",
        },
        {
          title: "Functions",
          icon: FunctionSquare,
          description:
            "Package reusable logic into clear, testable functions.",
        },
        {
          title: "Modules",
          icon: Package,
          description:
            "Organise code and import functionality from Python libraries.",
        },
      ],
    },
    {
      title: "Data-analysis workflow",
      description:
        "Use a repeatable process for understanding and communicating data.",
      icon: Database,
      items: [
        {
          title: "Load",
          icon: FileSpreadsheet,
          description:
            "Read CSV, Excel, JSON and database data into DataFrames.",
        },
        {
          title: "Inspect",
          icon: Table2,
          description:
            "Check dimensions, types, distributions and missing values.",
        },
        {
          title: "Transform",
          icon: WandSparkles,
          description:
            "Clean columns, create features and reshape datasets.",
        },
        {
          title: "Analyse",
          icon: BarChart3,
          description:
            "Group, aggregate and compare important variables.",
        },
        {
          title: "Visualise",
          icon: LineChart,
          description:
            "Create clear charts that reveal patterns and support decisions.",
        },
      ],
    },
  ],

  codeExample: {
    label: "Pandas example",
    title: "Explore and summarise a dataset",
    code: `import pandas as pd

df = pd.read_csv("sales.csv")

print(df.head())
print(df.info())

summary = (
    df.dropna(subset=["revenue"])
      .groupby("region", as_index=False)
      .agg(
          total_revenue=("revenue", "sum"),
          average_order=("revenue", "mean"),
          orders=("order_id", "nunique"),
      )
      .sort_values("total_revenue", ascending=False)
)

print(summary)`,
  },

  exercises: [
    {
      title: "Clean a dataset",
      difficulty: "Beginner",
      task:
        "Load a CSV file, identify missing values and choose suitable cleaning rules.",
      hint:
        "Inspect column types and decide whether to remove, fill or flag missing records.",
    },
    {
      title: "Build a grouped summary",
      difficulty: "Intermediate",
      task:
        "Calculate revenue, order count and average order value by region.",
      hint:
        "Use groupby with named aggregations.",
    },
    {
      title: "Create an analysis report",
      difficulty: "Intermediate",
      task:
        "Produce three charts and write five findings from a business dataset.",
      hint:
        "Choose charts that answer specific questions instead of plotting every column.",
    },
  ],
};

export default function PythonForDataSciencePage({ theme = "light" }) {
  return (
    <LearningGuidePage theme={theme} accent="blue" config={config} />
  );
}
