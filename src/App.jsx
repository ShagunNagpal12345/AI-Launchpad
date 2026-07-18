import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminContentProvider } from './content/AdminContentContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroStatsStrip from './components/HeroStatsStrip';
import EcosystemSection from './components/EcosystemSection';
import GoalsSection from './components/GoalsSection';
import LearnAiSection from './components/LearnAiSection';
import InsideClassroom from './components/InsideClassroom';
import EventsArenaSection from './components/EventsArenaSection';
import PracticeSection from './components/PracticeSection';
import ResourcesSection from './components/ResourcesSection';
import ToolsSection from './components/ToolsSection';
import ProjectsCommunitySection from './components/ProjectsCommunitySection';
import TestimonialsCareerSection from './components/TestimonialsCareerSection';
import PricingSection from './components/PricingSection';
import DataSenseStudio from './components/datasensestudio';
import AdminGate from './components/AdminGate';
import CtaSection from './components/CtaSection';
import SiteFooter from './components/SiteFooter';
import AdvancedAiPage from './pages/AdvancedAiPage';
import AiForProfessionalsPage from './pages/AiForProfessionalsPage';
import AiFundamentalsPage from './pages/AiFundamentalsPage';
import ChatGPTForEveryonePage from './pages/ChatGPTForEveryonePage';
import DeepLearningHandbookPage from './pages/DeepLearningHandbookPage';
import LLMProjectGuidePage from './pages/LLMProjectGuidePage';
import MachineLearningPage from './pages/MachineLearningPage';
import MLOpsBestPracticesPage from './pages/MLOpsBestPracticesPage';
import PythonForDataSciencePage from './pages/PythonForDataSciencePage';
import AdminConsolePage from './pages/AdminConsolePage';

const defaultTheme = 'light';
const rootThemeTargets = ['documentElement', 'body'];

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }

    return window.localStorage.getItem('theme') || defaultTheme;
  });

  useEffect(() => {
    rootThemeTargets.forEach((target) => {
      document[target].setAttribute('data-theme', theme);
    });

    const appRoot = document.getElementById('root');
    appRoot?.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <AdminContentProvider>
      <div
        className="min-h-screen bg-base text-ink transition-colors duration-300"
        style={{ backgroundImage: 'var(--page-gradient)' }}
      >
        <Navbar theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
        <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero theme={theme} />
              <HeroStatsStrip theme={theme} />
              <EcosystemSection theme={theme} />
              <GoalsSection theme={theme} />
              <LearnAiSection theme={theme} />
              <InsideClassroom theme={theme} />
              <EventsArenaSection />
              <PracticeSection theme={theme} />
              <ResourcesSection theme={theme} />
              <ToolsSection theme={theme} />
              <ProjectsCommunitySection theme={theme} />
              <TestimonialsCareerSection theme={theme} />
              <PricingSection theme={theme} />
              <DataSenseStudio theme={theme} />
              <CtaSection theme={theme} />
            </main>
          }
        />
        <Route
          path="/resources/chatgpt-for-everyone"
          element={<ChatGPTForEveryonePage theme={theme} />}
        />
        <Route
          path="/resources/llm-project-guide"
          element={<LLMProjectGuidePage theme={theme} />}
        />
        <Route
          path="/resources/machine-learning-cheatsheet"
          element={<MachineLearningPage theme={theme} />}
        />
        <Route
          path="/resources/python-for-data-science"
          element={<PythonForDataSciencePage theme={theme} />}
        />
        <Route
          path="/resources/deep-learning-handbook"
          element={<DeepLearningHandbookPage theme={theme} />}
        />
        <Route
          path="/resources/mlops-best-practices"
          element={<MLOpsBestPracticesPage theme={theme} />}
        />
        <Route
          path="/learn-ai/ai-fundamentals"
          element={<AiFundamentalsPage theme={theme} />}
        />
        <Route
          path="/learn-ai/machine-learning"
          element={<MachineLearningPage theme={theme} />}
        />
        <Route
          path="/learn-ai/deep-learning"
          element={<DeepLearningHandbookPage theme={theme} />}
        />
        <Route
          path="/learn-ai/advanced-ai"
          element={<AdvancedAiPage theme={theme} />}
        />
        <Route
          path="/learn-ai/ai-for-professionals"
          element={<AiForProfessionalsPage theme={theme} />}
        />
        <Route
          path="/admin"
          element={
            <AdminGate>
              <AdminConsolePage theme={theme} />
            </AdminGate>
          }
        />
        </Routes>
        <SiteFooter theme={theme} />
      </div>
    </AdminContentProvider>
  );
}
