import ContentPageHero from "../components/ContentPageHero";
import EventsArenaSection from "../components/EventsArenaSection";
import PracticeSection from "../components/PracticeSection";

export default function LearningArenaPage({ theme = "light" }) {
  const isLight = theme === "light";

  return (
    <main className={isLight ? "bg-[#f7f9fc]" : "bg-[#020b18]"}>
      <ContentPageHero
        theme={theme}
        eyebrow="Learn by doing"
        plain="Your Learning"
        accent="Arena"
        description="Practise real skills, solve challenges, and turn every lesson into measurable progress."
        sections={[{ label: "Practice experience", href: "#practice-showcase" }, { label: "SQL & gaming arenas", href: "#practice" }]}
      />

      <EventsArenaSection />
      <PracticeSection theme={theme} />
    </main>
  );
}
