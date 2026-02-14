import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function FreelanceSection() {
  const freelanceProjects = projects.filter((p) => p.category === "freelance");

  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Freelance"
          subtitle="Client work — designed, built, and shipped from scratch."
        />
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-3xl">
          {freelanceProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
