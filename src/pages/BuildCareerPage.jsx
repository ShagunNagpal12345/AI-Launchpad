import AiInteractiveToolsSection from "../components/AiInteractiveToolsSection";
import CareerRoadmapSection from "../components/CareerRoadmapSection";
import ContentPageHero from "../components/ContentPageHero";
import ToolsSection from "../components/ToolsSection";

export default function BuildCareerPage({ theme = "light" }) {
  return (
    <main>
      <ContentPageHero theme={theme} eyebrow="Build real capability" plain="Tools for your" accent="career growth" description="Create portfolio-ready work, use practical AI tools, earn certifications, and follow a clear roadmap toward your next role." sections={[{ label: "Career tools", href: "#career-tools" }, { label: "AI builder toolkit", href: "#ai-interactive-tools" }, { label: "Career roadmap", href: "#career-roadmap" }]} />
      <ToolsSection theme={theme} />
      <AiInteractiveToolsSection theme={theme} />
      <CareerRoadmapSection theme={theme} />
    </main>
  );
}
