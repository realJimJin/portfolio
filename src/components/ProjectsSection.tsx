import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const personalProjects = projects.filter((p) => p.category === "project");

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          subtitle="Personal and academic projects that showcase end-to-end engineering."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {personalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
