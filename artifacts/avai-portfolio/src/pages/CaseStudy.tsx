import { AppLayout } from "@/components/layout/AppLayout";
import { projects } from "@/data/projects";
import { Link, useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import NotFound from "./not-found";

export default function CaseStudy() {
  const [match, params] = useRoute("/work/:slug");
  
  if (!match || !params?.slug) return <NotFound />;
  
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) return <NotFound />;

  return (
    <AppLayout>
      <article className="pt-24 pb-24 bg-background">
        {/* Header */}
        <div className="px-6 pt-12 pb-16 bg-card border-b border-border">
          <div className="container mx-auto max-w-4xl">
            <Link href="/work" className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary mb-12 transition-colors">
              <ArrowLeft size={16} /> Back to Work
            </Link>
            
            <Badge variant="outline" className="mb-6 rounded-none font-mono font-normal text-xs text-primary border-primary/30 px-3 py-1">
              {project.category}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed">
              {project.oneLiner}
            </p>
            
            {project.link && (
              <div className="mt-8">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm bg-foreground text-background px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Live Project <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto max-w-6xl px-6 -mt-8 relative z-10">
          <div className="aspect-[21/9] w-full bg-muted border border-border shadow-xl relative flex items-center justify-center">
             <span className="font-mono text-muted-foreground/50 tracking-widest uppercase">HERO_ASSET_PLACEHOLDER</span>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-4xl px-6 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Meta Sidebar */}
            <div className="md:col-span-1 space-y-8 font-mono text-sm">
              <div>
                <h4 className="text-muted-foreground uppercase tracking-widest text-xs mb-3 border-b border-border pb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-card border border-border px-2 py-1 text-foreground">{tag}</span>
                  ))}
                </div>
              </div>
              
              {project.demonstrates && (
                <div>
                  <h4 className="text-muted-foreground uppercase tracking-widest text-xs mb-3 border-b border-border pb-2">Demonstrates</h4>
                  <p className="text-foreground leading-relaxed">{project.demonstrates}</p>
                </div>
              )}
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2 space-y-16 prose prose-lg prose-headings:font-serif prose-p:font-sans prose-p:text-muted-foreground prose-strong:text-foreground">
              {project.context && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-4">Context</h3>
                  <p className="text-lg leading-relaxed">{project.context}</p>
                </section>
              )}
              
              {project.problem && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-4">The Challenge</h3>
                  <p className="text-lg leading-relaxed border-l-2 border-primary pl-6 py-2 italic font-serif">
                    {project.problem}
                  </p>
                </section>
              )}
              
              {/* Mid-content image break */}
              <div className="aspect-video w-full bg-muted border border-border my-12 flex items-center justify-center">
                 <span className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase">SECONDARY_ASSET</span>
              </div>
              
              {project.system && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-4">System & Approach</h3>
                  <p className="text-lg leading-relaxed">{project.system}</p>
                </section>
              )}
              
              {/* Optional Breathing Orb demo for Fractal Breaths */}
              {project.slug === 'fractal-breaths' && (
                <div className="my-16 p-8 theme-terminal bg-[#050505] border border-border/20 flex flex-col items-center">
                  <p className="font-mono text-primary text-xs tracking-widest mb-8">LIVE PREVIEW</p>
                  <div className="w-48 h-48 rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_50px_rgba(255,0,0,0.2)] animate-breathe mix-blend-screen mb-8"></div>
                  <div className="flex gap-4 font-mono text-[10px] text-muted-foreground">
                    <span>Inhale</span><span>Hold</span><span>Exhale</span><span>Rest</span>
                  </div>
                </div>
              )}
              
              {project.output && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-4">Output</h3>
                  <p className="text-lg leading-relaxed">{project.output}</p>
                </section>
              )}
              
              {project.result && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-4">Result</h3>
                  <p className="text-lg leading-relaxed font-medium text-foreground">{project.result}</p>
                </section>
              )}
            </div>
          </div>
        </div>
      </article>
      
      {/* Next Project Teaser area could go here */}
      <section className="py-24 bg-card border-t border-border px-6 text-center">
        <h2 className="text-3xl font-serif mb-8">Ready to build something similar?</h2>
        <a href="#contact" className="inline-block bg-primary text-primary-foreground font-mono px-8 py-4 hover:bg-primary/90 transition-colors">
          Get in Touch
        </a>
      </section>
    </AppLayout>
  );
}
