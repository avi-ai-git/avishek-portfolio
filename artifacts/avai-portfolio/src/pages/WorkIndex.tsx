import { AppLayout } from "@/components/layout/AppLayout";
import { projects, labExperiments, ProjectCategory } from "@/data/projects";
import { useState } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const FILTERS: ("All" | ProjectCategory)[] = ["All", "Prototype", "Teach", "Campaign", "Film", "Learning UX"];

export default function WorkIndex() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  
  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);
  
  return (
    <AppLayout>
      <div className="pt-32 pb-16 px-6 bg-card min-h-[40vh] border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-foreground">Selected Work</h1>
          <p className="text-xl md:text-2xl font-serif text-muted-foreground max-w-2xl">
            Case studies spanning creative production, interactive prototypes, and learning systems.
          </p>
        </div>
      </div>
      
      <div className="py-12 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 font-mono text-sm border transition-colors ${
                  filter === f 
                    ? "bg-foreground text-background border-foreground" 
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/work/${project.slug}`} className="group flex flex-col h-full border border-border hover:border-primary/50 transition-colors">
                  <div className="aspect-video w-full bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase">IMAGE</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <Badge variant="outline" className="mb-4 self-start rounded-none font-mono font-normal text-[10px] text-primary border-primary/30">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {project.oneLiner}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-muted-foreground uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
