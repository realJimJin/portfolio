import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
      {/* Image placeholder */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-5"
        />
      ) : (
        <div className="w-full h-48 rounded-lg mb-5 bg-gray-50 flex items-center justify-center border border-dashed border-gray-200">
          <span className="text-xs text-gray-300 uppercase tracking-widest">
            Screenshot
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        {project.summary}
      </p>

      <ul className="space-y-2 mb-5">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-600">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-300" />
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-50 border border-gray-100 px-3 py-1 text-xs font-medium text-gray-500"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors"
          >
            {link.label} &rarr;
          </a>
        ))}
      </div>
    </div>
  );
}
