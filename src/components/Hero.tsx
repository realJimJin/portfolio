import { siteConfig } from "@/data/projects";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="max-w-2xl text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-4">
          {siteConfig.role}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          {siteConfig.name}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
          {siteConfig.summary}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={siteConfig.resumeUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
