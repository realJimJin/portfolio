import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import FreelanceSection from "@/components/FreelanceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <OpenSourceSection />
      <FreelanceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
