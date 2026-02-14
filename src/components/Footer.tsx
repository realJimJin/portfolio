import { Container } from "./ui/Container";
import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold text-slate-900 dark:text-slate-50">Jim Jin</span>
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Jim Jin. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
