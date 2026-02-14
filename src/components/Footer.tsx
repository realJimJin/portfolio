import { siteConfig } from "@/data/projects";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-gray-600 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
