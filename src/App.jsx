import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminContentProvider } from './content/AdminContentContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LaunchpadVideoSection from './components/LaunchpadVideoSection';
import HeroStatsStrip from './components/HeroStatsStrip';
import EcosystemSection from './components/EcosystemSection';
import ResourcesSection from './components/ResourcesSection';
import LearnAiSection from './components/LearnAiSection';
import WeeklyAssignmentsSection from './components/WeeklyAssignmentsSection';
import ProjectsCommunitySection from './components/ProjectsCommunitySection';
import TestimonialsCareerSection from './components/TestimonialsCareerSection';
import PricingSection from './components/PricingSection';
import AdminGate from './components/AdminGate';
import CtaSection from './components/CtaSection';
import SiteFooter from './components/SiteFooter';

const AdvancedAiPage = lazy(() => import('./pages/AdvancedAiPage'));
const AiForProfessionalsPage = lazy(() => import('./pages/AiForProfessionalsPage'));
const AiFundamentalsPage = lazy(() => import('./pages/AiFundamentalsPage'));
const DeepLearningHandbookPage = lazy(() => import('./pages/DeepLearningHandbookPage'));
const MachineLearningPage = lazy(() => import('./pages/MachineLearningPage'));
const AdminConsolePage = lazy(() => import('./pages/AdminConsolePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ELearningLibrary = lazy(() => import('./pages/ELearningLibrary'));
const ELearningPage = lazy(() => import('./pages/ELearningPage'));
const EbookReaderPage = lazy(() => import('./pages/EbookReaderPage'));
const EvaluationReportPage = lazy(() => import('./pages/EvaluationReportPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const LearningArenaPage = lazy(() => import('./pages/LearningArenaPage'));
const LearnExperiencePage = lazy(() => import('./pages/LearnExperiencePage'));
const BuildCareerPage = lazy(() => import('./pages/BuildCareerPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));

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
              <LaunchpadVideoSection theme={theme} />
              <EcosystemSection theme={theme} />
              <ResourcesSection theme={theme} />
              <LearnAiSection theme={theme} />
              <WeeklyAssignmentsSection theme={theme} />
              <ProjectsCommunitySection theme={theme} />
              <TestimonialsCareerSection theme={theme} />
              <PricingSection theme={theme} />
              <CtaSection theme={theme} />
            </main>
          }
        />
        <Route path="/elearning" element={<ELearningLibrary theme={theme} />} />
        <Route path="/learning/:slug" element={<ELearningPage theme={theme} />} />
        <Route path="/ebooks/:slug" element={<EbookReaderPage theme={theme} />} />
        <Route path="/evaluation-report" element={<EvaluationReportPage theme={theme} />} />
        <Route path="/testimonials" element={<TestimonialsPage theme={theme} />} />
        <Route path="/learning-arena" element={<LearningArenaPage theme={theme} />} />
        <Route path="/learn" element={<LearnExperiencePage theme={theme} />} />
        <Route path="/build-career" element={<BuildCareerPage theme={theme} />} />
        <Route path="/community" element={<CommunityPage theme={theme} />} />
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
