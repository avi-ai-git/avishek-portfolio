import { AppLayout } from "@/components/layout/AppLayout";
import { labExperiments } from "@/data/projects";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Lab() {
  return (
    <AppLayout>
      <div className="pt-32 pb-16 px-6 theme-terminal bg-[#0a0a0a] min-h-[50vh] flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="font-mono text-primary mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary animate-pulse rounded-full"></span>
            EXPERIMENTAL
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">AI Lab</h1>
          <p className="text-xl font-mono text-muted-foreground max-w-2xl leading-relaxed">
            Smaller experiments, creative tech explorations, prompt engineering tests, and public learning formats.
          </p>
        </div>
      </div>
      
      <div className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labExperiments.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group border border-border p-8 bg-card hover:border-primary transition-colors flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="outline" className="rounded-none font-mono font-normal text-xs border-border bg-background">
                    {exp.category}
                  </Badge>
                  <span className="font-mono text-muted-foreground text-xs">EXP_{i.toString().padStart(3, '0')}</span>
                </div>
                
                <h3 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed flex-1 mb-8">
                  {exp.oneLiner}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground px-2 py-1 bg-background border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
