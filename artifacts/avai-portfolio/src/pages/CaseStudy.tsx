import { AppLayout } from "@/components/layout/AppLayout";
import { projects, ytThumb } from "@/data/projects";
import { Link, useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import NotFound from "./not-found";

function YouTubeEmbed({ id, label }: { id: string; label?: string }) {
  return (
    <div className="w-full">
      {label && (
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">{label}</p>
      )}
      <div className="relative w-full aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={label ?? "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    </div>
  );
}

export default function CaseStudy() {
  const [match, params] = useRoute("/work/:slug");

  if (!match || !params?.slug) return <NotFound />;

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <NotFound />;

  return (
    <AppLayout>
      <article className="pt-24 pb-24 bg-background">
        {/* Header */}
        <div className="px-6 pt-12 pb-16 bg-card border-b border-border">
          <div className="container mx-auto max-w-4xl">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary mb-12 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Work
            </Link>

            <Badge
              variant="outline"
              className="mb-6 rounded-none font-mono font-normal text-xs text-primary border-primary/30 px-3 py-1"
            >
              {project.category}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed max-w-3xl">
              {project.oneLiner}
            </p>

            {project.hiringAudience && (
              <p className="font-mono text-xs text-muted-foreground mt-6 tracking-wide">
                {project.hiringAudience}
              </p>
            )}

            <div className="flex flex-wrap gap-3 mt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-colors"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm bg-foreground text-background px-6 py-3 hover:bg-primary hover:text-white transition-colors"
                >
                  View Project <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hero — YouTube embed or thumbnail */}
        <div className="container mx-auto max-w-6xl px-6 mt-12">
          {project.youtubeId ? (
            <YouTubeEmbed id={project.youtubeId} />
          ) : project.thumbnail ? (
            <div className="w-full aspect-[21/9] overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[21/9] w-full bg-muted border border-border flex items-center justify-center">
              <span className="font-mono text-muted-foreground/50 tracking-widest uppercase text-xs">
                ASSET PLACEHOLDER
              </span>
            </div>
          )}
        </div>

        {/* Main content */}
        <div className="container mx-auto max-w-4xl px-6 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <aside className="md:col-span-1 space-y-10 font-mono text-sm">
              {project.myRole && project.myRole.length > 0 && (
                <div>
                  <h4 className="text-muted-foreground uppercase tracking-widest text-xs mb-4 border-b border-border pb-2">
                    My Role
                  </h4>
                  <ul className="space-y-2">
                    {project.myRole.map((r) => (
                      <li key={r} className="text-foreground leading-snug flex gap-2">
                        <span className="text-primary mt-1 shrink-0">—</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.tools && project.tools.length > 0 && (
                <div>
                  <h4 className="text-muted-foreground uppercase tracking-widest text-xs mb-4 border-b border-border pb-2">
                    Tools
                  </h4>
                  <div className="space-y-4">
                    {project.tools.map((group) => (
                      <div key={group.category}>
                        <p className="text-muted-foreground text-[10px] uppercase tracking-widest mb-1">
                          {group.category}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="bg-card border border-border px-2 py-0.5 text-foreground text-xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.tags && project.tags.length > 0 && (
                <div>
                  <h4 className="text-muted-foreground uppercase tracking-widest text-xs mb-4 border-b border-border pb-2">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-card border border-border px-2 py-1 text-foreground text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            {/* Main prose */}
            <div className="md:col-span-2 space-y-14">
              {project.context && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-4">Context</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{project.context}</p>
                </section>
              )}

              {project.problem && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-4">The Challenge</h3>
                  <p className="text-lg leading-relaxed border-l-2 border-primary pl-6 py-2 italic font-serif text-foreground/80">
                    {project.problem}
                  </p>
                </section>
              )}

              {project.process && project.process.length > 0 && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-6">Process</h3>
                  <ol className="space-y-4">
                    {project.process.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="font-mono text-primary text-sm shrink-0 pt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-muted-foreground leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Multi-video grid — handles both landscape and portrait Shorts */}
              {project.videos && project.videos.length > 0 && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-8">Episodes</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                    {project.videos.map((v) =>
                      v.isShort ? (
                        <div key={v.youtubeId} className="flex flex-col items-center">
                          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3 self-start">
                            {v.label}
                          </p>
                          <div className="relative w-full max-w-[260px] aspect-[9/16] bg-black mx-auto">
                            <iframe
                              src={`https://www.youtube.com/embed/${v.youtubeId}`}
                              title={v.label}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full border-0"
                            />
                          </div>
                        </div>
                      ) : (
                        <YouTubeEmbed key={v.youtubeId} id={v.youtubeId} label={v.label} />
                      )
                    )}
                  </div>
                </section>
              )}

              {project.output && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-4">Output</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{project.output}</p>
                </section>
              )}

              {project.result && (
                <section>
                  <h3 className="text-2xl font-serif text-foreground mb-4">Result</h3>
                  <p className="text-lg leading-relaxed font-medium text-foreground">{project.result}</p>
                </section>
              )}

              {project.demonstrates && (
                <section className="border-t border-border pt-10">
                  <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
                    What this demonstrates
                  </h3>
                  <p className="text-foreground leading-relaxed">{project.demonstrates}</p>
                </section>
              )}
            </div>
          </div>
        </div>
      </article>

      <section className="py-24 bg-card border-t border-border px-6 text-center">
        <h2 className="text-3xl font-serif mb-4">Ready to build something similar?</h2>
        <p className="text-muted-foreground font-serif mb-8">
          Available for creative technologist, AI marketing, AI enablement, and AI prototyping roles.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-primary text-white font-mono px-8 py-4 hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </AppLayout>
  );
}
