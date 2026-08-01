import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminContentProvider } from './content/AdminContentContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroStatsStrip from './components/HeroStatsStrip';
import EcosystemSection from './components/EcosystemSection';
import GoalsSection from './components/GoalsSection';
import LearnAiSection from './components/LearnAiSection';
import InsideClassroom from './components/InsideClassroom';
import LiveExpertsSection from './components/LiveExpertsSection';
import EventsArenaSection from './components/EventsArenaSection';
import PracticeSection from './components/PracticeSection';
import WeeklyAssignmentsSection from './components/WeeklyAssignmentsSection';
import ResourcesSection from './components/ResourcesSection';
import ToolsSection from './components/ToolsSection';
import AiInteractiveToolsSection from './components/AiInteractiveToolsSection';
import ProjectsCommunitySection from './components/ProjectsCommunitySection';
import CareerRoadmapSection from './components/CareerRoadmapSection';
import TestimonialsCareerSection from './components/TestimonialsCareerSection';
import PricingSection from './components/PricingSection';
import DataSenseStudio from './components/datasensestudio';
import AdminGate from './components/AdminGate';
import CtaSection from './components/CtaSection';
import SiteFooter from './components/SiteFooter';

const AdvancedAiPage = lazy(() => import('./pages/AdvancedAiPage'));
const AiForProfessionalsPage = lazy(() => import('./pages/AiForProfessionalsPage'));
const AiFundamentalsPage = lazy(() => import('./pages/AiFundamentalsPage'));
const ChatGPTForEveryonePage = lazy(() => import('./pages/ChatGPTForEveryonePage'));
const DeepLearningHandbookPage = lazy(() => import('./pages/DeepLearningHandbookPage'));
const LLMProjectGuidePage = lazy(() => import('./pages/LLMProjectGuidePage'));
const MachineLearningPage = lazy(() => import('./pages/MachineLearningPage'));
const MLOpsBestPracticesPage = lazy(() => import('./pages/MLOpsBestPracticesPage'));
const PythonForDataSciencePage = lazy(() => import('./pages/PythonForDataSciencePage'));
const AdminConsolePage = lazy(() => import('./pages/AdminConsolePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

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

  useEffect(() => {
    const resetHorizontalScroll = () => {
      const scrollTop = window.scrollY;
      window.scrollTo(0, scrollTop);

      if (document.scrollingElement) {
        document.scrollingElement.scrollLeft = 0;
      }
    };

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    resetHorizontalScroll();
    window.addEventListener('pageshow', resetHorizontalScroll);
    window.addEventListener('resize', resetHorizontalScroll);
    window.addEventListener('orientationchange', resetHorizontalScroll);

    return () => {
      window.removeEventListener('pageshow', resetHorizontalScroll);
      window.removeEventListener('resize', resetHorizontalScroll);
      window.removeEventListener('orientationchange', resetHorizontalScroll);
    };
  }, []);

  return (
    <AdminContentProvider>
      <div
        className="min-h-screen bg-base text-ink transition-colors duration-300"
        style={{ backgroundImage: 'var(--page-gradient)' }}
      >
        <Navbar theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
        <Suspense fallback={<div className="grid min-h-[50vh] place-items-center px-5 text-sm font-semibold text-muted">Loading…</div>}>
        <Routes>
        <Route
          path="/dashboard"
          element={
            <AdminGate areaName="Dashboard">
              <DashboardPage theme={theme} />
            </AdminGate>
          }
        />
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
              <LiveExpertsSection theme={theme} />
              <EventsArenaSection />
              <WeeklyAssignmentsSection theme={theme} />
              <PracticeSection theme={theme} />
              <ResourcesSection theme={theme} />
              <ToolsSection theme={theme} />
              <AiInteractiveToolsSection theme={theme} />
              <ProjectsCommunitySection theme={theme} />
              <CareerRoadmapSection theme={theme} />
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
        </Suspense>
        <SiteFooter theme={theme} />
      </div>
    </AdminContentProvider>
  );
}
