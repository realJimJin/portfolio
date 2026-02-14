import { projects, siteConfig } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function OpenSourceSection() {
  const ossProjects = projects.filter((p) => p.category === "opensource");

  return (
    <section id="opensource" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Open Source"
          subtitle="Contributing to projects used by millions of chess players worldwide."
        />

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-3xl">
          {ossProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stockfish placeholder */}
        <div className="mt-10 rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-6 max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700">
                Stockfish — Coming Soon
              </h4>
              <p className="mt-1 text-sm text-gray-400">
                Planning contributions to the Stockfish chess engine. This space
                will be updated with merged PRs and technical details.
              </p>
            </div>
          </div>
        </div>

        {/* GitHub profile link */}
        <div className="mt-8">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors"
          >
            View all contributions on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
