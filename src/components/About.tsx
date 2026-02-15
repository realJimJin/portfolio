"use client";

import { Container } from "./ui/Container";
import { PERSONAL_INFO } from "@/data/projects";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt="Jim Jin"
                className="w-full h-auto object-cover rounded-2xl transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl mb-6">
              About Me
            </h2>
            <div className="prose prose-lg prose-slate dark:prose-invert text-slate-600 dark:text-slate-300">
              <p className="mb-4">{PERSONAL_INFO.bio}</p>
              <p className="mb-4">
                I&apos;m based in{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {PERSONAL_INFO.location}
                </span>{" "}
                and I&apos;m especially interested in roles at chess-related companies (Chess.com,
                Lichess, etc.) and any team that values clean code, fast iteration, and open-source
                culture.
              </p>
              <p>
                Outside of engineering, I run chess and math after-school programs at a private
                school in Cambridge. I plan curriculum, coordinate logistics, and communicate
                with students, parents, and staff—experience that&apos;s strengthened my ability
                to explain complex ideas clearly, stay organized under constraints, and lead
                projects with high ownership.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              {PERSONAL_INFO.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
