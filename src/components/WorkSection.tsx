import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <section id="work" className="py-20 px-6 bg-gray-50/50">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Featured Work"
          subtitle="A curated selection of projects I've built and contributed to."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
