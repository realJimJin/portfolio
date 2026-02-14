import { siteConfig } from "@/data/projects";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50/50">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6">
            About
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I&apos;m {siteConfig.name}, a software engineer who loves building
              things that people actually use. My strongest work lives at the
              intersection of full-stack web development and open-source
              contribution.
            </p>
            <p>
              I&apos;ve contributed 10+ merged PRs to{" "}
              <a
                href="https://lichess.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors"
              >
                Lichess
              </a>
              , the largest free chess platform, working across Scala and
              TypeScript codebases. I&apos;ve also shipped a production
              marketplace app for a freelance client and built data-driven
              dashboards and team management tools.
            </p>
            <p>
              I&apos;m especially interested in roles at chess-related companies
              (Chess.com, Lichess, etc.) and any team that values clean code,
              fast iteration, and open-source culture.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Scala",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "Tailwind CSS",
              "Docker",
              "Git",
              "REST APIs",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
