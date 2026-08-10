import ContentPageHero from "../components/ContentPageHero";
import DataSenseStudio from "../components/datasensestudio";
import ProjectsCommunitySection from "../components/ProjectsCommunitySection";
import TestimonialsCareerSection from "../components/TestimonialsCareerSection";

export default function CommunityPage({ theme = "light" }) {
  return (
    <main>
      <ContentPageHero theme={theme} eyebrow="Learn together" plain="Projects, people &" accent="community" description="Explore real member repositories, learn with an active peer community, and see how learners turn consistent practice into meaningful outcomes." sections={[{ label: "Member projects", href: "#projects" }, { label: "Success stories", href: "#testimonials" }, { label: "DataSense Studio", href: "#youtube-studio" }]} />
      <ProjectsCommunitySection theme={theme} />
      <TestimonialsCareerSection theme={theme} />
      <DataSenseStudio theme={theme} />
    </main>
  );
}
