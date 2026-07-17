import {
  Activity,
  BrainCircuit,
  Boxes,
  Cpu,
  GitBranch,
  Image,
  Layers3,
  Network,
  ScanSearch,
  SlidersHorizontal,
  Sparkles,
  TextSearch,
} from "lucide-react";

import LearningGuidePage from "./LearningGuidePage";

const config = {
  title: "Deep Learning Handbook",
  badge: "Technical handbook",
  level: "Intermediate to advanced",
  description:
    "Understand neural networks, CNNs, sequence models, transformers, training techniques and the practical decisions required to build deep-learning systems.",
  primaryCta: "Open handbook",
  duration: "5 hours 15 min",
  metaLabel: "Project",
  metaValue: "Neural-network capstone",
  progress: 6,
  sidebarTitle: "Deep-learning curriculum",
  sidebarIcon: BrainCircuit,
  heroIcon: BrainCircuit,

  modules: [
    {
      id: 1,
      title: "Neural Network Foundations",
      duration: "48 min",
      lessons: [
        {
          id: "1-1",
          title: "Neurons and layers",
          duration: "10 min",
          completed: true,
        },
        {
          id: "1-2",
          title: "Forward propagation",
          duration: "12 min",
          completed: false,
        },
        {
          id: "1-3",
          title: "Loss functions",
          duration: "12 min",
          completed: false,
        },
        {
          id: "1-4",
          title: "Backpropagation",
          duration: "14 min",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Training Neural Networks",
      duration: "58 min",
      lessons: [
        {
          id: "2-1",
          title: "Gradient descent",
          duration: "12 min",
          completed: false,
        },
        {
          id: "2-2",
          title: "Optimisers",
          duration: "12 min",
          completed: false,
        },
        {
          id: "2-3",
          title: "Regularisation",
          duration: "12 min",
          completed: false,
        },
        {
          id: "2-4",
          title: "Batch normalisation",
          duration: "10 min",
          completed: false,
        },
        {
          id: "2-5",
          title: "Learning-rate schedules",
          duration: "12 min",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "Computer Vision",
      duration: "66 min",
      lessons: [
        {
          id: "3-1",
          title: "Convolutional layers",
          duration: "14 min",
          completed: false,
        },
        {
          id: "3-2",
          title: "Pooling and feature maps",
          duration: "12 min",
          completed: false,
        },
        {
          id: "3-3",
          title: "Image classification",
          duration: "14 min",
          completed: false,
        },
        {
          id: "3-4",
          title: "Transfer learning",
          duration: "14 min",
          completed: false,
        },
        {
          id: "3-5",
          title: "Data augmentation",
          duration: "12 min",
          completed: false,
        },
      ],
    },
    {
      id: 4,
      title: "Sequences and Transformers",
      duration: "72 min",
      lessons: [
        {
          id: "4-1",
          title: "RNNs and LSTMs",
          duration: "14 min",
          completed: false,
        },
        {
          id: "4-2",
          title: "Attention",
          duration: "14 min",
          completed: false,
        },
        {
          id: "4-3",
          title: "Transformer architecture",
          duration: "18 min",
          completed: false,
        },
        {
          id: "4-4",
          title: "Embeddings",
          duration: "12 min",
          completed: false,
        },
        {
          id: "4-5",
          title: "Fine-tuning",
          duration: "14 min",
          completed: false,
        },
      ],
    },
    {
      id: 5,
      title: "Production Deep Learning",
      duration: "51 min",
      lessons: [
        {
          id: "5-1",
          title: "Model evaluation",
          duration: "10 min",
          completed: false,
        },
        {
          id: "5-2",
          title: "Inference optimisation",
          duration: "12 min",
          completed: false,
        },
        {
          id: "5-3",
          title: "Model compression",
          duration: "10 min",
          completed: false,
        },
        {
          id: "5-4",
          title: "Monitoring drift",
          duration: "10 min",
          completed: false,
        },
        {
          id: "5-5",
          title: "Deployment patterns",
          duration: "9 min",
          completed: false,
        },
      ],
    },
  ],

  lesson: {
    title: "Neurons and layers",
    description:
      "Learn how artificial neurons transform inputs, how layers create representations and how networks map raw data to predictions.",
    duration: "10 minutes",
    icon: Network,
  },

  outcomes: [
    "Explain how neural networks learn",
    "Choose suitable activation and loss functions",
    "Train CNNs for image problems",
    "Understand attention and transformers",
    "Apply regularisation and transfer learning",
    "Optimise models for production inference",
  ],

  sections: [
    {
      title: "Neural-network foundations",
      description:
        "Understand the components that make deep-learning models work.",
      icon: Network,
      items: [
        {
          title: "Input layer",
          icon: Boxes,
          description:
            "Receives the numerical representation of the original data.",
        },
        {
          title: "Hidden layers",
          icon: Layers3,
          description:
            "Learn increasingly useful representations through weighted transformations.",
        },
        {
          title: "Activation functions",
          icon: Activity,
          description:
            "Introduce non-linearity so the network can learn complex patterns.",
        },
        {
          title: "Output layer",
          icon: ScanSearch,
          description:
            "Produces class scores, probabilities, values or generated tokens.",
        },
      ],
    },
    {
      title: "Major deep-learning architectures",
      description:
        "Select architectures based on the structure and objective of the data.",
      icon: Cpu,
      items: [
        {
          title: "Feed-forward networks",
          icon: Network,
          description:
            "Useful for structured inputs and foundational modelling tasks.",
        },
        {
          title: "Convolutional networks",
          icon: Image,
          description:
            "Capture spatial patterns in images and grid-like data.",
        },
        {
          title: "Recurrent networks",
          icon: GitBranch,
          description:
            "Process ordered sequences using hidden state and memory.",
        },
        {
          title: "Transformers",
          icon: Sparkles,
          description:
            "Use attention to model relationships across long sequences.",
        },
        {
          title: "Multimodal models",
          icon: TextSearch,
          description:
            "Combine text, images, audio or other data types.",
        },
      ],
    },
    {
      title: "Training and optimisation",
      description:
        "Improve learning stability, generalisation and training efficiency.",
      icon: SlidersHorizontal,
      items: [
        {
          title: "Optimisers",
          icon: SlidersHorizontal,
          description:
            "Use SGD, Adam or AdamW to update model parameters.",
          points: [
            "Start with AdamW for many modern tasks",
            "Monitor validation loss",
            "Tune learning rate before adding complexity",
          ],
        },
        {
          title: "Regularisation",
          icon: Activity,
          description:
            "Reduce overfitting using dropout, weight decay and augmentation.",
          points: [
            "Compare training and validation curves",
            "Use early stopping",
            "Avoid excessive model capacity",
          ],
        },
        {
          title: "Transfer learning",
          icon: Sparkles,
          description:
            "Adapt pretrained models instead of training from scratch.",
          points: [
            "Freeze the backbone initially",
            "Fine-tune gradually",
            "Use a smaller learning rate",
          ],
        },
      ],
    },
  ],

  codeExample: {
    label: "PyTorch example",
    title: "Build a simple neural network",
    code: `import torch
from torch import nn

class Classifier(nn.Module):
    def __init__(self, input_size, num_classes):
        super().__init__()

        self.network = nn.Sequential(
            nn.Linear(input_size, 128),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(128, 64),
            nn.ReLU(),
            nn.Linear(64, num_classes),
        )

    def forward(self, x):
        return self.network(x)

model = Classifier(
    input_size=20,
    num_classes=3,
)

criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.AdamW(
    model.parameters(),
    lr=1e-3,
)`,
  },

  exercises: [
    {
      title: "Design a network",
      difficulty: "Intermediate",
      task:
        "Design a neural network for classifying customer behaviour into four categories.",
      hint:
        "Define input size, hidden layers, activations, output size and loss function.",
    },
    {
      title: "Diagnose overfitting",
      difficulty: "Intermediate",
      task:
        "Training accuracy rises while validation accuracy falls. Recommend three changes.",
      hint:
        "Consider dropout, weight decay, augmentation, early stopping and model size.",
    },
    {
      title: "Choose an architecture",
      difficulty: "Advanced",
      task:
        "Select an architecture for analysing long customer-support conversations.",
      hint:
        "Consider a pretrained transformer with task-specific fine-tuning.",
    },
  ],
};

export default function DeepLearningHandbookPage({ theme = "light" }) {
  return (
    <LearningGuidePage theme={theme} accent="violet" config={config} />
  );
}
