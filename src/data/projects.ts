import { Github, Linkedin, Mail, Layout, Server, Database, Cpu } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Jim Jin",
  title: "Software Engineer",
  subtitle:
    "Vibe coder & full-stack developer. I steer AI coding agents to ship real products fast. Open-source contributor to Lichess. Looking for entry-level SWE roles where I can build and grow.",
  bio: "I'm a vibe coder—I steer AI coding agents to build and ship real products fast. I'm strongest in full-stack web development and enjoy working in real production codebases—shipping features, fixing bugs, and improving reliability. I've contributed 10+ merged PRs to Lichess, working across Scala and TypeScript, and I've also shipped and maintain a production marketplace app for a freelance client. I like clean code, fast iteration, and building UI that feels polished and responsive.",
  location: "Boston, MA",
  email: "jimjin135@gmail.com",
  resumeUrl: "/Jim_Jin_Resume_2026.pdf",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/realJimJin",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/guixuanjin/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:jimjin135@gmail.com",
      icon: Mail,
    },
  ],
};

export const SKILLS = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Python", "Django", "Scala", "REST APIs"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    category: "DevOps & Tools",
    icon: Cpu,
    items: ["Docker", "Git", "CI/CD", "Vercel", "Linux"],
  },
];

export const EXPERIENCE = [
  {
    company: "Hublyst.pro (Contract)",
    role: "Full-Stack Developer",
    period: "2025 - Present",
    description:
      "Paid contract work for a realtor — designed and shipped a full-stack marketplace web app connecting Boston-area renters with verified sublets and roommates. Built end-to-end with Django and PostgreSQL — from auth flows to listing CRUD, search/filter, and messaging. Implemented responsive, mobile-first UI and deployed to production.",
    technologies: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"],
  },
  {
    company: "Green City Growers",
    role: "Data / Software Engineer",
    period: "2025 - Present",
    description:
      "Prototyped internal dashboards and automation concepts across finance, operations, and sales; explored Zoho One + QuickBooks Online integration patterns for invoicing and reporting. Produced stakeholder-ready outputs focused on measurable outcomes (downloadable exports, KPI views) to support operational decision-making. Documented implementation options and next steps for data pipelines, reporting cadence, and system ownership to enable a clean handoff.",
    technologies: ["Zoho One", "QuickBooks Online", "Python", "Data Pipelines", "Dashboards"],
  },
  {
    company: "Lichess.org",
    role: "Open-Source Contributor",
    period: "2026 - Present",
    description:
      "Active contributor to the largest free and open-source chess platform serving 10M+ monthly users. Merged 10+ pull requests across the Scala/Play backend and TypeScript frontend, improving UI components and game logic. Collaborated asynchronously with maintainers via GitHub code reviews.",
    technologies: ["Scala", "Play Framework", "TypeScript", "MongoDB", "WebSockets"],
  },
];

export const PROJECTS = [
  {
    title: "Lichess Contributions",
    description:
      "10+ merged PRs to the world's largest free chess platform. Worked on Scala backend services, TypeScript frontend components, and MongoDB aggregation pipelines.",
    image: "/images/lichess.svg",
    tags: ["Scala", "TypeScript", "MongoDB", "Open Source"],
    demoUrl: "https://lichess.org",
    repoUrl: "https://github.com/lichess-org/lila/pulls?q=is%3Apr+author%3ArealJimJin",
  },
  {
    title: "Hublyst.pro",
    description:
      "Boston sublet & roommate marketplace with 100+ users, built as paid contract work for a realtor. Full-stack Django app with auth, listing management, search/filter, image uploads, and user profiles.",
    image: "/images/hublyst.png",
    tags: ["Django", "Python", "PostgreSQL"],
    demoUrl: "https://hublyst.pro",
    repoUrl: "",
  },
  {
    title: "IMLEM Team Manager",
    description:
      "Web app for managing Intermediate Math League teams, schedules, and scoring. Role-based auth for coaches, real-time score tracking, and normalized PostgreSQL schema.",
    image: "",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    demoUrl: "",
    repoUrl: "https://github.com/realJimJin/imlem-team-manager",
  },
  {
    title: "QuickBooks Dashboard",
    description:
      "Internal analytics dashboard built at Green City Growers for visualizing financial data from QuickBooks Online. Features P&L trends, expense breakdowns, KPI views, and downloadable exports to support operational decision-making.",
    image: "",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    demoUrl: "",
    repoUrl: "https://github.com/realJimJin/quickbooks-dashboard",
  },
];
