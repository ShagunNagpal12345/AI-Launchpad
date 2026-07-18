import {
  Rocket, Database, Code2, Gamepad2, BriefcaseBusiness, Users,
  BrainCircuit, BadgeCheck, Lightbulb, UserRoundCog, Radar, CalendarDays,
  BookOpenCheck, Trophy, Video, Link, Camera, ThumbsUp, MessageCircle,
  FileText, SearchCheck, ScanSearch, Mic2, Award, Bot, Network, Boxes, Sparkles
} from 'lucide-react';

export const navItems = [
  { label: 'Learn AI', href: '/#learn-ai' },
  { label: 'Classroom', href: '/#classroom' },
  { label: 'Live Classes', href: '/#live-classes' },
  { label: 'Practice', href: '/#practice' },
  { label: 'Resources', href: '/#resources' },
  { label: 'Career Tools', href: '/#career-tools' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Community', href: '/#community' },
  { label: 'Pricing', href: '/#pricing' }
];

export const stats = [
  ['500+', 'AIBuilders'], ['100+', 'Live Sessions Completed'], ['500+', 'SQL Questions'], ['200+', '5 Star Reviews'], ['8–10', 'Live Sessions / Month']
];

export const heroStats = [
  { value: '500+', label: 'AI Builders', icon: Users, tone: 'orange' },
  { value: '100+', label: 'Live Sessions Completed', icon: BookOpenCheck, tone: 'orange' },
  { value: '20+', label: 'Projects Delivered.', icon: Database, tone: 'blue' },
  { value: '200+', label: '5 Star Reviews by Topmate ', icon: Sparkles, tone: 'orange' },
  { value: '8–10', label: 'Live Sessions / Month', icon: Radar, tone: 'orange' }
];

export const ecosystem = [
  { icon: Rocket, title: 'AI Launchpad', text: 'Step-by-step AI learning paths, live classes and projects.' },
  { icon: Database, title: 'SQL Practice Arena', text: '500+ real-world SQL questions from basics to advanced.' },
  { icon: Code2, title: 'Coding Practice Arena', text: 'Python and coding challenges to strengthen fundamentals.' },
  { icon: Gamepad2, title: 'Gaming Arena', text: 'Learn SQL through missions, cases and competitive games.' },
  { icon: BriefcaseBusiness, title: 'Career Tools', text: 'Resume, ATS, cover letter and interview preparation tools.' },
  { icon: Users, title: 'Community', text: 'Learn, share and grow with an active builder community.' }
];

export const goals = [
  {
    title: "AI for Beginners",
    description: "Start your AI journey",
  },
  {
    title: "Machine Learning",
    description: "Build ML models from scratch",
  },
  {
    title: "Deep Learning",
    description: "Dive into neural networks",
  },
  {
    title: "NLP & GenAI",
    description: "Work with LLMs & NLP",
  },
  {
    title: "Computer Vision",
    description: "Build AI that sees",
  },
  {
    title: "Data Science",
    description: "Analyze data & derive insights",
  },
  {
    title: "AI for Professionals",
    description: "Upskill & grow your career",
  },
];

export const tracks = [
  { step: 'Track 1', title: 'AI Fundamentals', tone: 'blue', items: ['AI basics', 'LLMs 101', 'Prompting', 'AI tools'], badge: 'Free' },
  { step: 'Track 2', title: 'AI Application Development', tone: 'purple', items: ['Claude Code', 'Agent Builder', 'RAG', 'LangChain'], badge: 'Premium' },
  { step: 'Track 3', title: 'Advanced AI Systems', tone: 'orange', items: ['LangGraph', 'Multi-agent systems', 'Evaluation', 'AI safety'], badge: 'Premium' },
  { step: 'Track 4', title: 'Stay Ahead & Innovate', tone: 'green', items: ['AI This Week', 'Research deep dives', 'MCP', 'Future of AI'], badge: 'Free' }
];

export const events = [
  { date: '24', mon: 'JUL', title: 'Build AI Agents with Claude Code', meta: 'Sat · 7:00 PM IST', badge: 'Premium' },
  { date: '28', mon: 'JUL', title: 'LangGraph Deep Dive', meta: 'Tue · 8:00 PM IST', badge: 'Premium' },
  { date: '01', mon: 'AUG', title: 'RAG Systems from Scratch', meta: 'Sat · 7:00 PM IST', badge: 'Free' },
  { date: '05', mon: 'AUG', title: 'AI This Week — Latest Updates', meta: 'Wed · 7:00 PM IST', badge: 'Free' }
];

export const materials = [
  { icon: Bot, title: 'Claude Code for Builders', type: 'Course', access: 'Premium' },
  { icon: Sparkles, title: 'AI This Week', type: 'News', access: 'Free' },
  { icon: Boxes, title: 'Agent Builder from Scratch', type: 'Course', access: 'Premium' },
  { icon: Network, title: 'MCP Explained', type: 'Guide', access: 'Free' },
  { icon: BookOpenCheck, title: 'Prompt Engineering Mastery', type: 'Guide', access: 'Premium' },
  { icon: BrainCircuit, title: 'RAG Best Practices', type: 'Course', access: 'Premium' }
];

export const projects = [
  ['AI Resume Screener', 'Python · Streamlit', 'AI-powered resume screening and ranking.'],
  ['Chat With Your Data', 'Python · RAG', 'Ask questions across CSV and SQL data.'],
  ['AI Legal Assistant', 'LangChain · OpenAI', 'Legal document analysis and research agent.'],
  ['Multi-Agent Researcher', 'LangGraph · Python', 'A multi-agent system for deep research.']
];

export const social = [
  { icon: Users, name: 'Skool', action: 'Join', primary: true },
  { icon: Link, name: 'LinkedIn', action: 'Follow' },
  { icon: Camera, name: 'Instagram', action: 'Follow' },
  { icon: Video, name: 'YouTube', action: 'Subscribe' },
  { icon: ThumbsUp, name: 'Facebook', action: 'Like' },
  { icon: MessageCircle, name: 'Topmate', action: 'Book' }
];

export const careerTools = [
  { icon: FileText, title: 'Resume Builder', text: 'Create ATS-friendly resumes.' },
  { icon: BookOpenCheck, title: 'Cover Letter Builder', text: 'Write tailored cover letters.' },
  { icon: SearchCheck, title: 'ATS Checker', text: 'Improve resume readiness.' },
  { icon: ScanSearch, title: 'JD Match', text: 'Compare resumes with job descriptions.' },
  { icon: Mic2, title: 'Interview Simulator', text: 'Practise role-specific interviews.' },
  { icon: Award, title: 'Skill Certification', text: 'Showcase verified skills.' }
];

export const testimonials = [
  ['Rohit S.', 'Data Analyst', 'AI Launchpad changed the way I learn. The projects, community and live sessions are excellent.'],
  ['Sneha P.', 'Data Scientist', 'The SQL Practice Arena helped me prepare for product-company interviews with confidence.'],
  ['Arjun M.', 'ML Engineer', 'A practical place to learn AI by building real projects with real people.']
];
