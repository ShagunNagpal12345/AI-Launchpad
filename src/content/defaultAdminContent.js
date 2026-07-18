import aiLaunchpadLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/ai-launchpad.png";
import liveClassesLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/live-classes.png";
import practiceArenaLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/practice-arena.png";
import gamingArenaLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/gaming-arena.png";
import driveResourcesLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/drive-resources.png";
import communityLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/community.png";
import weeklyAssignmentsLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/WeeklyAssignments.png";
import realWorldProjectsLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/Real-WorldProjects.png";
import scorecardLearningReportsLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/Scorecard-LearningReports.png";
import personalizedCareerPathLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/PersonalizedCareerPath.png";
import mentorFeedbackDoubtSupportLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/MentorFeedback-DoubtSupport.png";
import skillAssessmentsCertificationsLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/SkillAssessments-Certifications.png";
import peerReviewsLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/PeerReviews.png";
import careerToolkitLightIcon from "../assets/ai-ecosystem-section-assets/icons/light/CareerToolkit.png";
import aiForEveryoneIcon from "../assets/learning-goal-icons/ai-for-everyone.png";
import claudeCodeForBuildersIcon from "../assets/learning-goal-icons/claude-code-for-builders.png";
import aiForNonCodersIcon from "../assets/learning-goal-icons/ai-for-non-coders.png";
import agenticAiIcon from "../assets/learning-goal-icons/agentic-ai.png";
import multiagentOrchestrationIcon from "../assets/learning-goal-icons/multiagent-orchestration.png";
import aiSoftwareDevelopmentIcon from "../assets/learning-goal-icons/ai-software-development.png";
import devopsIcon from "../assets/learning-goal-icons/devops.png";
import n8nExpertIcon from "../assets/learning-goal-icons/n8n-expert.png";
import aiArchitectIcon from "../assets/learning-goal-icons/ai-architect.png";
import pythonProIcon from "../assets/learning-goal-icons/python-pro.png";
import sqlMasterIcon from "../assets/learning-goal-icons/sql-master.png";
import youtubeIcon from "../assets/social-testimonials-assets/social-icons/youtube.svg";
import linkedinIcon from "../assets/social-testimonials-assets/social-icons/linkedin.svg";
import instagramIcon from "../assets/social-testimonials-assets/social-icons/instagram.svg";
import topmateIcon from "../assets/social-testimonials-assets/social-icons/tompate.jpeg";
import snehaAvatar from "../assets/social-testimonials-assets/learner-avatars/sneha-r.png";
import vikramAvatar from "../assets/social-testimonials-assets/learner-avatars/vikram-m.png";
import poojaAvatar from "../assets/social-testimonials-assets/learner-avatars/pooja-s.png";
import { classroomIntro, classroomTracks } from "../data/classroomData";

export const DEFAULT_ADMIN_CONTENT = {
  hero: {
    heading: "Stop Watching AI Tutorials.",
    accentHeading: "Build What Matters.",
    subheading:
      "A practical AI learning ecosystem with live classes, projects, practice arenas, and a builder community to help you go from learning to building real-world solutions.",
    primaryButtonLabel: "Join Free on Skool",
    secondaryButtonLabel: "Explore the Platform",
  },
  cardGrid: {
    sectionName: "Card Grid",
    items: [
      {
        title: "Structured Learning",
        text: "Organize your landing-page cards with consistent headings and descriptions.",
      },
      {
        title: "Fast Updates",
        text: "Add or revise card content in one place without touching code.",
      },
      {
        title: "Simple Editing",
        text: "Give admins a quick way to maintain section copy as the site evolves.",
      },
    ],
  },
  ecosystem: {
    heading: "AI Learning",
    accentHeading: "Hub Ecosystem",
    items: [
      {
        title: "AI Launchpad",
        description: "Structured learning paths for every level",
        cta: "Start Learning",
        href: "#ai-launchpad",
        icon: aiLaunchpadLightIcon,
      },
      {
        title: "Weekly Assignments",
        description: "Stay consistent with guided weekly tasks that keep your learning momentum strong.",
        cta: "See Assignments",
        href: "#classroom",
        icon: weeklyAssignmentsLightIcon,
      },
      {
        title: "Live Classes",
        description: "Learn live with experts & doubt sessions",
        cta: "Join Live",
        href: "#live-classes",
        icon: liveClassesLightIcon,
      },
      {
        title: "Real-World Projects",
        description: "Build practical portfolio projects that reflect real AI workflows and outcomes.",
        cta: "Explore Projects",
        href: "#projects",
        icon: realWorldProjectsLightIcon,
      },
      {
        title: "Practice Arena",
        description: "Hands-on practice & real-world problems",
        cta: "Practice Now",
        href: "#practice",
        icon: practiceArenaLightIcon,
      },
      {
        title: "Scorecard & Learning Reports",
        description: "Track progress with scorecards and learning reports that highlight real improvement.",
        cta: "View Reports",
        href: "#resources",
        icon: scorecardLearningReportsLightIcon,
      },
      {
        title: "Gaming Arena",
        description: "Learn by playing AI-powered games",
        cta: "Play & Learn",
        href: "#games",
        icon: gamingArenaLightIcon,
      },
      {
        title: "Personalized Career Path",
        description: "Follow a roadmap shaped around your goals, level, and next career step.",
        cta: "See Roadmap",
        href: "#learn-ai",
        icon: personalizedCareerPathLightIcon,
      },
      {
        title: "Drive & Resources",
        description: "Premium study materials & resources",
        cta: "Browse Now",
        href: "#resources",
        icon: driveResourcesLightIcon,
      },
      {
        title: "Mentor Feedback & Doubt Support",
        description: "Get timely mentor guidance and doubt support whenever you feel blocked.",
        cta: "Get Support",
        href: "#community",
        icon: mentorFeedbackDoubtSupportLightIcon,
      },
      {
        title: "Community",
        description: "Connect, collaborate & grow together",
        cta: "Join Community",
        href: "#community",
        icon: communityLightIcon,
      },
      {
        title: "Skill Assessments & Certifications",
        description: "Validate your skills with assessments and earn proof you can showcase confidently.",
        cta: "Check Skills",
        href: "#career-tools",
        icon: skillAssessmentsCertificationsLightIcon,
      },
      {
        title: "Peer Reviews",
        description: "Improve faster through peer feedback, collaboration, and shared learning loops.",
        cta: "Join Reviews",
        href: "#community",
        icon: peerReviewsLightIcon,
      },
      {
        title: "Career Toolkit",
        description: "Access resume, interview, and job-readiness tools built for practical career growth.",
        cta: "Open Toolkit",
        href: "#career-tools",
        icon: careerToolkitLightIcon,
      },
    ],
  },
  goals: {
    heading: "Choose your",
    accentHeading: "learning goal",
    items: [
      {
        title: "AI for Everyone",
        description: "Build confidence with practical everyday AI skills.",
        href: "#",
        icon: aiForEveryoneIcon,
      },
      {
        title: "Claude Code for Builders",
        description: "Use Claude Code to ship faster with AI-assisted workflows.",
        href: "#",
        icon: claudeCodeForBuildersIcon,
      },
      {
        title: "AI for Non Coders",
        description: "Create powerful AI outcomes without writing code.",
        href: "#",
        icon: aiForNonCodersIcon,
      },
      {
        title: "Agentic AI",
        description: "Design AI systems that can plan, act, and iterate.",
        href: "#",
        icon: agenticAiIcon,
      },
      {
        title: "Multiagent Orchestration",
        description: "Coordinate multiple AI agents across complex tasks.",
        href: "#",
        icon: multiagentOrchestrationIcon,
      },
      {
        title: "AI Software Development",
        description: "Build modern software products with AI at the core.",
        href: "#",
        icon: aiSoftwareDevelopmentIcon,
      },
      {
        title: "Devops",
        description: "Automate delivery, deployment, and infrastructure with confidence.",
        href: "#",
        icon: devopsIcon,
      },
      {
        title: "N8N Expert",
        description: "Create advanced no-code and low-code automation systems.",
        href: "#",
        icon: n8nExpertIcon,
      },
      {
        title: "AI Architect",
        description: "Design scalable AI systems, workflows, and platforms.",
        href: "#",
        icon: aiArchitectIcon,
      },
      {
        title: "Python Pro",
        description: "Master Python for AI, automation, and real-world projects.",
        href: "#",
        icon: pythonProIcon,
      },
      {
        title: "SQL Master",
        description: "Query, model, and solve business problems with SQL.",
        href: "#",
        icon: sqlMasterIcon,
      },
    ],
  },
  classroom: {
    intro: {
      ...classroomIntro,
      heading: "Where Learning AI Becomes",
      accentHeading: "Building for Real",
    },
    tracks: classroomTracks,
  },
  liveClasses: {
    heading: "Upcoming Live Classes",
    viewAllLabel: "View all",
    events: [
      {
        date: "24",
        mon: "JUL",
        title: "Build AI Agents with Claude Code",
        meta: "Sat · 7:00 PM IST",
        badge: "Premium",
      },
      {
        date: "28",
        mon: "JUL",
        title: "LangGraph Deep Dive",
        meta: "Tue · 8:00 PM IST",
        badge: "Premium",
      },
      {
        date: "01",
        mon: "AUG",
        title: "RAG Systems from Scratch",
        meta: "Sat · 7:00 PM IST",
        badge: "Free",
      },
      {
        date: "05",
        mon: "AUG",
        title: "AI This Week — Latest Updates",
        meta: "Wed · 7:00 PM IST",
        badge: "Free",
      },
    ],
  },
  social: {
    heading: "We're Active",
    accentHeading: "Everywhere",
    items: [
      {
        name: "YouTube",
        value: "125K+",
        label: "Viewers",
        href: "https://www.youtube.com/",
        icon: youtubeIcon,
      },
      {
        name: "Topmate",
        value: "5K+",
        label: "Bookings",
        href: "#topmate",
        icon: topmateIcon,
      },
      {
        name: "LinkedIn",
        value: "5K+",
        label: "Followers",
        href: "https://www.linkedin.com/",
        icon: linkedinIcon,
      },
      {
        name: "Instagram",
        value: "25K+",
        label: "Followers",
        href: "https://www.instagram.com/",
        icon: instagramIcon,
      },
    ],
  },
  testimonials: {
    heading: "What Our",
    accentHeading: "Learners Say",
    ctaLabel: "View all",
    items: [
      {
        name: "Sneha R.",
        role: "ML Engineer",
        quote:
          "DataSense AI Launchpad changed my career path completely! The projects are amazing.",
        avatar: snehaAvatar,
      },
      {
        name: "Vikram M.",
        role: "Data Scientist",
        quote:
          "The live classes and mentors are top-notch. Best place to learn AI hands-on.",
        avatar: vikramAvatar,
      },
      {
        name: "Pooja S.",
        role: "AI Engineer",
        quote:
          "Practice Arena helped me crack multiple interviews. Highly recommended!",
        avatar: poojaAvatar,
      },
    ],
  },
  pricing: {
    heading: "Simple, Transparent",
    accentHeading: "Pricing",
    subheading: "Choose the plan that's right for you",
    freePlan: {
      name: "Free",
      tagline: "For learners getting started",
      price: "$0",
      cadence: "Forever",
      ctaLabel: "Get Started Free",
      features: [
        "Access to Community",
        "Selected Resources",
        "Open Live Sessions",
        "Limited Practice Access",
      ],
    },
    premiumPlan: {
      name: "Premium",
      tagline: "For serious AI builders",
      price: "$25",
      cadence: "/ month",
      ctaLabel: "Go Premium",
      features: [
        "All Courses & Learning Tracks",
        "Live Sessions & Recordings",
        "Assignments & Projects",
        "Premium Practice Access",
        "Priority Support & More",
      ],
    },
  },
  faq: {
    heading: "Frequently Asked",
    accentHeading: "Questions",
    items: [
      {
        question: "What is AI Launchpad by Data Sense?",
        answer:
          "AI Launchpad is a practical learning ecosystem where learners can access structured AI courses, live classes, projects, practice arenas, career tools and a builder community.",
      },
      {
        question: "Is the community really free?",
        answer:
          "Yes. You can join the community for free and access selected learning resources, discussions, open sessions and limited practice features.",
      },
      {
        question: "What’s included in the Premium plan?",
        answer:
          "Premium includes complete learning tracks, live sessions and recordings, assignments, projects, premium practice access and priority support.",
      },
      {
        question: "How do live sessions work?",
        answer:
          "Live sessions are scheduled through the community calendar. Premium members can join the sessions and access recordings afterward.",
      },
      {
        question: "Do I get certificates?",
        answer:
          "Certificates can be provided for eligible courses, projects or learning tracks after completing the required lessons and assessments.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. The Premium membership is billed monthly and can be cancelled before the next billing cycle.",
      },
    ],
  },
  dataSenseStudio: {
    heading: "DataSense",
    accentHeading: "Studio",
    subscribeLabel: "Subscribe to Channel",
    tabs: [
      {
        name: "Videos",
        url: "https://www.youtube.com/@Senseofdata/videos",
      },
      {
        name: "Shorts",
        url: "https://www.youtube.com/@Senseofdata/shorts",
      },
      {
        name: "Live",
        url: "https://www.youtube.com/@Senseofdata/streams",
      },
      {
        name: "Courses",
        url: "https://www.youtube.com/@Senseofdata/courses",
      },
      {
        name: "Playlists",
        url: "https://www.youtube.com/@Senseofdata/playlists",
      },
      {
        name: "Posts",
        url: "https://www.youtube.com/@Senseofdata/posts",
      },
    ],
    videos: [
      {
        id: "WcMu3mGwwgU",
        title: "Claude Fable 5 vs Opus 4.8 vs GPT-5.5 Codex - Who Builds Better?",
        channel: "DataSense",
        views: "240K Views",
        duration: "--:--",
        category: "AI Battle",
        iconKey: "brain",
      },
      {
        id: "1nRxNtpRc-M",
        title: "Claude Code for Beginners: Build Slides, Videos & Websites With No Code",
        channel: "DataSense",
        views: "12K views",
        duration: "12:45",
        category: "Career Guide",
        iconKey: "alert",
      },
      {
        id: "wgdeJUm38yU",
        title: "Python Project 1: Build Snake Game in Python",
        channel: "DataSense",
        views: "12K Views",
        duration: "--:--",
        category: "Python",
        iconKey: "code",
      },
      {
        id: "GYNal5k6Nlo",
        title: "AWS for FREE on Your Laptop • 47 Services • No Credit Card",
        channel: "DataSense",
        views: "18K Views",
        duration: "--:--",
        category: "Cloud",
        iconKey: "database",
      },
      {
        id: "F1B3KRG-A1w",
        title: "Claude Fable 5 vs GPT-5.5 Play Chess: One Broke the Rules",
        channel: "DataSense",
        views: "100K Views",
        duration: "--:--",
        category: "AI Challenge",
        iconKey: "brain",
      },
      {
        id: "b8kFTTFh-_I",
        title: "How to Upload a Project to GitHub from Your Laptop",
        channel: "DataSense",
        views: "8K Views",
        duration: "--:--",
        category: "GitHub",
        iconKey: "code",
      },
    ],
  },
};
