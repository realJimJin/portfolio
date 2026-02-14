"use client";

import { ArrowRight, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/projects";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/80 to-slate-100/90 dark:from-slate-950/90 dark:via-slate-950/80 dark:to-slate-900/90 z-10" />
        <div className="w-full h-full bg-slate-100 dark:bg-slate-900 opacity-20 dark:opacity-10" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/30 mb-6 border border-indigo-100 dark:border-indigo-900/50"
          >
            <span>Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6"
          >
            Hi, I&apos;m <span className="text-indigo-600 dark:text-indigo-400">{PERSONAL_INFO.name}</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400">
              {PERSONAL_INFO.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            {PERSONAL_INFO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="group cursor-pointer"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer"
              onClick={() => window.open(PERSONAL_INFO.resumeUrl, "_blank")}
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
          >
            <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full animate-scroll" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
