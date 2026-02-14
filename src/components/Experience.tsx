"use client";

import { Container } from "./ui/Container";
import { EXPERIENCE } from "@/data/projects";
import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Open-source contributions and freelance work that showcase my engineering skills.
          </p>
        </motion.div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-8 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute top-0 left-[-5px] md:left-[-9px] w-3 h-3 md:w-5 md:h-5 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-slate-900 shadow-sm" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  {job.role}
                </h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar className="h-4 w-4" />
                  {job.period}
                </span>
              </div>

              <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
                {job.company}
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
