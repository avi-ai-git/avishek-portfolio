import { AppLayout } from "@/components/layout/AppLayout";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <AppLayout>
      <div className="pt-32 pb-24 px-6 bg-card border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-foreground">
            Avishek Chatterjee
          </h1>
          <p className="text-2xl font-serif text-muted-foreground leading-relaxed">
            Berlin-based AI Creative Technologist working across generative AI, campaign storytelling, AI education, content systems, and interactive prototyping.
          </p>
        </div>
      </div>
      
      <div className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <div className="aspect-[3/4] w-full bg-muted border border-border mb-6 flex items-center justify-center">
                 <span className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase">PORTRAIT</span>
              </div>
              <div className="font-mono text-sm space-y-3 border-l-2 border-primary pl-4">
                <p className="text-foreground">Based in Berlin, DE</p>
                <p><a href="mailto:avishek.chatterjee@aol.com" className="text-primary hover:underline">Email Me</a></p>
                <p><a href="https://linkedin.com/in/avishek-chatterjee" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">LinkedIn Profile</a></p>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-12 prose prose-lg prose-headings:font-serif prose-p:font-sans prose-p:text-muted-foreground prose-strong:text-foreground">
              <section>
                <h2 className="text-3xl font-serif text-foreground mb-6">Background</h2>
                <p>
                  I build, teach, and communicate AI through prototypes, campaigns, learning systems, and visual workflows. 
                  My focus is on making emerging technology practical, understandable, and creatively useful for teams.
                </p>
              </section>
              
              <section>
                <h2 className="text-3xl font-serif text-foreground mb-6">Core Strengths</h2>
                <ul className="space-y-4 list-none pl-0">
                  {[
                    "Translating complex technology into clear stories",
                    "Building useful AI workflows",
                    "Designing workshops and learning experiences",
                    "Producing visual & content systems",
                    "Rapid prototyping with AI coding tools"
                  ].map((strength, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1"><ArrowRight size={16} /></span>
                      <span className="text-foreground">{strength}</span>
                    </li>
                  ))}
                </ul>
              </section>
              
              <section className="pt-12 border-t border-border">
                <h2 className="text-3xl font-serif text-foreground mb-8">Technical & Creative Stack</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <StackCategory 
                    title="LLMs & Logic" 
                    tools={["Claude", "ChatGPT", "Gemini", "NotebookLM"]} 
                  />
                  <StackCategory 
                    title="Visual & Video" 
                    tools={["Midjourney", "Runway", "ComfyUI", "Canva", "CapCut", "Adobe CC"]} 
                  />
                  <StackCategory 
                    title="Audio" 
                    tools={["ElevenLabs", "Suno AI", "Web Audio API"]} 
                  />
                  <StackCategory 
                    title="Dev & Prototyping" 
                    tools={["Cursor", "Replit", "React", "TypeScript"]} 
                  />
                  <StackCategory 
                    title="Systems" 
                    tools={["Notion", "n8n", "Zapier"]} 
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function StackCategory({ title, tools }: { title: string, tools: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {tools.map(tool => (
          <span key={tool} className="text-sm font-mono border border-border bg-card px-2 py-1 text-foreground">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
