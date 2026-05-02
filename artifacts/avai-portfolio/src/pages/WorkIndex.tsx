import { AppLayout } from "@/components/layout/AppLayout";
import { projects, ProjectCategory } from "@/data/projects";
import { useState } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS: ("All" | ProjectCategory)[] = [
  "All",
  "Prototype",
  "Teach",
  "Campaign",
  "Film",
  "UX / Sound",
];

export default function WorkIndex() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <AppLayout>
      <div className="pt-32 pb-16 px-6 bg-card min-h-[40vh] border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-foreground">
            Selected Work
          </h1>
          <p className="text-xl md:text-2xl font-serif text-muted-foreground max-w-2xl">
            Case studies spanning creative production, interactive prototypes,
            learning systems, and campaign storytelling.
          </p>
        </div>
      </div>

      <div className="py-12 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 font-mono text-sm border transition-colors ${
                  filter === f
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="group flex flex-col h-full border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="aspect-video w-full bg-muted relative overflow-hidden">
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card">
                          <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest uppercase">
                            {project.placeholder ? "IN DEVELOPMENT" : "NO PREVIEW"}
                          </span>
                          <span className="font-mono text-xs text-primary/50 tracking-widest">
                            {project.category}
                          </span>
                        </div>
                      )}
                      {project.placeholder && (
                        <div className="absolute top-3 left-3">
                          <span className="font-mono text-[10px] bg-foreground/80 text-background px-2 py-0.5 tracking-widest uppercase">
                            Coming Soon
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <Badge
                        variant="outline"
                        className="mb-4 self-start rounded-none font-mono font-normal text-[10px] text-primary border-primary/30"
                      >
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                        {project.oneLiner}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
