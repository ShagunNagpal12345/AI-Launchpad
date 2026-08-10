import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContentPageHero from "../components/ContentPageHero";
import GoalsSection from "../components/GoalsSection";
import InsideClassroom from "../components/InsideClassroom";
import LearnAiSection from "../components/LearnAiSection";
import LiveExpertsSection from "../components/LiveExpertsSection";
import ResourcesSection from "../components/ResourcesSection";
import WeeklyAssignmentsSection from "../components/WeeklyAssignmentsSection";

export default function LearnExperiencePage({ theme = "light" }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#classroom-page-top") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.hash]);

  return (
    <main id="classroom-page-top">
      <ContentPageHero theme={theme} eyebrow="Learn with confidence" plain="Your complete" accent="learning experience" description="Choose a path, learn with experts, practise every week, and track your progress from first lesson to job-ready skill." sections={[{ label: "Choose your goal", href: "#learning-goals" }, { label: "Live experts", href: "#live-experts" }, { label: "Weekly assignments", href: "#weekly-assignments" }, { label: "Learning tracks", href: "#learn-ai" }, { label: "Enter classroom", href: "#classroom" }]} />
      <GoalsSection theme={theme} />
      <LiveExpertsSection theme={theme} />
      <WeeklyAssignmentsSection theme={theme} />
      <LearnAiSection theme={theme} />
      <InsideClassroom theme={theme} />
      <ResourcesSection theme={theme} />
    </main>
  );
}
