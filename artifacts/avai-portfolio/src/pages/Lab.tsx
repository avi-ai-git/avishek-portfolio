import { AppLayout } from "@/components/layout/AppLayout";
import { labExperiments } from "@/data/projects";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function Lab() {
  return (
    <AppLayout>
      <div className="pt-32 pb-16 px-6 theme-terminal bg-[#0a0a0a] min-h-[50vh] flex flex-col justify-center border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="font-mono text-primary mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary animate-pulse rounded-full" />
            EXPERIMENTAL
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">AI Lab</h1>
          <p className="text-xl font-mono text-muted-foreground max-w-2xl leading-relaxed">
            Smaller experiments, creative tech explorations, prompt engineering tests, and public
            learning formats.
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
                className="group border border-border bg-card hover:border-primary transition-colors flex flex-col"
              >
                {/* Thumbnail or YouTube preview */}
                {exp.thumbnail ? (
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={exp.thumbnail}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {exp.youtubeId && (
                      <a
                        href={`https://www.youtube.com/watch?v=${exp.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <span className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </span>
                      </a>
                    )}
                    <div className="absolute top-3 right-3 font-mono text-[10px] text-white/50 bg-black/50 px-2 py-0.5">
                      EXP_{i.toString().padStart(3, "0")}
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-background border-b border-border flex items-center justify-between px-6">
                    <span className="font-mono text-muted-foreground/30 text-xs tracking-widest uppercase">
                      NO_PREVIEW
                    </span>
                    <span className="font-mono text-muted-foreground text-xs">
                      EXP_{i.toString().padStart(3, "0")}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-5">
                    <Badge
                      variant="outline"
                      className="rounded-none font-mono font-normal text-xs border-border bg-background"
                    >
                      {exp.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6 text-sm">
                    {exp.oneLiner}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50 justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-muted-foreground px-2 py-1 bg-background border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {exp.liveUrl && (
                      <a
                        href={exp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
                      >
                        Live <ExternalLink size={11} />
                      </a>
                    )}
                    {exp.youtubeId && !exp.liveUrl && (
                      <a
                        href={`https://www.youtube.com/watch?v=${exp.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
                      >
                        Watch <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
