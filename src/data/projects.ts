export interface Project {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  techStack: string[];
  links: { label: string; url: string }[];
  tags: string[];
  image?: string;
  category: "opensource" | "freelance" | "project";
}

export const projects: Project[] = [
  {
    id: "lichess",
    title: "Lichess — Open-Source Contributor",
    summary:
      "Active contributor to Lichess, the largest free and open-source chess platform serving 10M+ monthly users.",
    bullets: [
      "Merged 10+ pull requests across the Scala/Play backend and TypeScript frontend, improving UI components and game logic.",
      "Collaborated asynchronously with maintainers via GitHub code reviews, following strict contribution guidelines.",
      "Gained deep familiarity with large-scale functional Scala codebases, MongoDB aggregation pipelines, and real-time WebSocket architecture.",
    ],
    techStack: ["Scala", "Play Framework", "TypeScript", "MongoDB", "WebSockets"],
    links: [
      { label: "GitHub Profile", url: "https://github.com/realJimJin" },
      {
        label: "Lichess PRs",
        url: "https://github.com/lichess-org/lila/pulls?q=is%3Apr+author%3ArealJimJin",
      },
    ],
    tags: ["open-source", "chess", "scala", "typescript"],
    category: "opensource",
  },
  {
    id: "hublyst",
    title: "Hublyst.pro — Boston Sublet & Roommate Marketplace",
    summary:
      "Designed and shipped a full-stack marketplace web app connecting Boston-area renters with verified sublets and roommates.",
    bullets: [
      "Built end-to-end with Django and PostgreSQL — from auth flows to listing CRUD, search/filter, and messaging.",
      "Implemented responsive, mobile-first UI with Django templates and deployed to production with CI/CD.",
      "Developed image upload pipeline and integrated key marketplace features including user profiles and listing management.",
    ],
    techStack: [
      "Django",
      "Python",
      "PostgreSQL",
      "HTML/CSS",
      "JavaScript",
    ],
    links: [{ label: "Live Site", url: "https://hublyst.pro" }],
    tags: ["freelance", "full-stack", "marketplace", "django"],
    image: "/images/hublyst.png",
    category: "freelance",
  },
  {
    id: "imlem",
    title: "IMLEM Team Manager",
    summary:
      "Web application for managing Intermediate Math League of Eastern Massachusetts teams, schedules, and scoring.",
    bullets: [
      "Developed a React + Node.js app with role-based auth for coaches, enabling roster management and real-time score tracking.",
      "Designed a normalized PostgreSQL schema for teams, students, meets, and individual/team round scores.",
      "Deployed with Docker Compose and wrote integration tests covering core scoring and roster workflows.",
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/realJimJin/imlem-team-manager",
      },
    ],
    tags: ["project", "full-stack", "react", "node"],
    category: "project",
  },
  {
    id: "dashboards",
    title: "QuickBooks Dashboard Prototype",
    summary:
      "Interactive analytics dashboard prototype for visualizing small-business financial data from QuickBooks exports.",
    bullets: [
      "Built a responsive React dashboard with Chart.js for P&L trends, expense breakdowns, and cash-flow forecasting.",
      "Parsed and normalized CSV/Excel QuickBooks exports into a unified data model with TypeScript utility functions.",
      "Implemented client-side filtering by date range, account category, and custom tags with URL-synced state.",
    ],
    techStack: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/realJimJin/quickbooks-dashboard",
      },
    ],
    tags: ["project", "data-viz", "react", "typescript"],
    category: "project",
  },
];

export const siteConfig = {
  name: "Jim Jin",
  role: "Software Engineer",
  summary:
    "I build reliable, user-facing software and contribute to open-source chess infrastructure. Looking for entry-level SWE roles where I can ship product and grow fast.",
  email: "jimjin@example.com",
  github: "https://github.com/realJimJin",
  linkedin: "https://www.linkedin.com/in/guixuanjin/",
  resumeUrl: "/Jim_Jin_Resume_2026.pdf",
};
