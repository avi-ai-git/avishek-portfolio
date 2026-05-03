import { Link } from "wouter";
import { AppLayout } from "@/components/layout/AppLayout";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Manually curated featured projects for homepage
const FEATURED_SLUGS = [
  "ctrl-alt-deity",
  "fractal-breaths",
  "hikemussbleiben",
  "ai-bootcamp",
];

export default function Home() {
  const featuredProjects = FEATURED_SLUGS
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <AppLayout>
      {/* 1. Hero */}
      <section className="min-h-[100dvh] theme-terminal bg-background flex flex-col justify-center pt-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-none tracking-tighter mb-4 text-foreground">
              AV
              <span
                className="inline-block rounded-full bg-primary"
                style={{
                  width: "0.12em",
                  height: "0.12em",
                  margin: "0 0.05em",
                  verticalAlign: "0.28em",
                }}
              />
              AI
            </h1>
            <p className="text-2xl md:text-4xl font-serif text-muted-foreground mb-4">
              Avishek Chatterjee
            </p>
            <p className="font-mono text-primary text-sm md:text-base tracking-widest uppercase mb-12 flex items-center">
              AI Creative Technologist · Berlin{" "}
              <span className="inline-block w-3 h-5 bg-primary ml-2 cursor-blink" />
            </p>

            <div className="font-mono text-sm md:text-base text-muted-foreground space-y-2 mb-12 border-l border-border pl-4">
              <p>&gt; AI FILMMAKING</p>
              <p>&gt; GENAI WORKSHOPS</p>
              <p>&gt; CAMPAIGN STORYTELLING</p>
              <p>&gt; VISUAL PROTOTYPES</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 font-mono">
              <Link
                href="/work"
                className="bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors text-center"
              >
                View Work
              </Link>
              <a
                href="#contact"
                className="border border-border text-foreground px-8 py-3 hover:border-primary hover:text-primary transition-colors text-center"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Positioning statement */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-serif leading-tight text-foreground"
          >
            I build, teach, and communicate AI through prototypes, campaigns,
            learning systems, and creative workflows.
          </motion.h2>
        </div>
      </section>

      {/* 3. Three Track cards */}
      <section className="py-24 px-6 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TrackCard
              title="Prototype"
              description="Interactive experiments, browser-based tools, AI-assisted front-end workflows, visual and audio systems."
              projects={["Fractal Breaths", "Far Out", "Sounds of Bengal", "GrooveBox DAW"]}
              href="/work?filter=Prototype"
              delay={0.1}
            />
            <TrackCard
              title="Teach"
              description="GenAI bootcamps, workshops, AI education sessions, enablement formats, curriculum, and certificates."
              projects={["NotebookLM Session", "Vibe Coding", "AI Music Production", "AI Bootcamp"]}
              href="/work?filter=Teach"
              delay={0.2}
            />
            <TrackCard
              title="Campaign"
              description="Campaign storytelling, advocacy videos, event launches, multi-channel assets, and content systems."
              projects={["#hikemussbleiben", "HIKE Demo Day 2025"]}
              href="/work?filter=Campaign"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 4. Featured Work */}
      <section className="py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Featured Work
            </h2>
            <Link
              href="/work"
              className="font-mono text-sm text-primary hover:underline hidden sm:block"
            >
              View All Work &rarr;
            </Link>
          </div>

          {/* 1 wide + 2 side by side + 1 wide layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={i === 0 || i === 3}
              />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/work"
              className="font-mono text-sm text-primary hover:underline"
            >
              View All Work &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Real-time AI Music Jam */}
      <section className="py-24 px-6 bg-[#080808] border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
                From the Lab
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white">
                Real-time AI Music Jam
              </h2>
              <p className="text-muted-foreground mt-3 font-mono text-sm max-w-lg">
                Live prompt-based music control using MusicFX DJ Mode — AI as a
                creative instrument, not a generator.
              </p>
            </div>
            <Link
              href="/lab"
              className="font-mono text-sm text-primary hover:underline whitespace-nowrap shrink-0"
            >
              See All Lab Work &rarr;
            </Link>
          </div>

          <div className="w-full aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/oehw1PPcZr4"
              title="Real-time AI Music Jam"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 6. Capabilities block */}
      <section className="py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-16">
            Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <CapabilityItem
              title="AI Creative Workflows"
              description="I design repeatable workflows across text, image, video, sound, and interactive prototypes — from concept to shipped output."
            />
            <CapabilityItem
              title="Visual Storytelling & Campaigns"
              description="I turn complex ideas into clear films, advocacy campaigns, event launches, and content systems built to distribute."
            />
            <CapabilityItem
              title="Workshop & Learning Design"
              description="I design GenAI bootcamps, topic sessions, promptbooks, and practical enablement formats for mixed technical audiences."
            />
            <CapabilityItem
              title="UX, Sound Design & Research"
              description="I bring UX research, interaction design, gamification, and spatial audio production into human-centred experiences."
            />
          </div>
        </div>
      </section>

      {/* 7. Proof strip */}
      <section className="py-16 px-6 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProofItem text="AI short film selected for Artefact AI Film Festival Paris 2025" />
            <ProofItem text="GenAI Bootcamp designed and delivered for 50+ participants" />
            <ProofItem text="GIZ Innovation Fund — Audience Choice Award from 100+ international teams" />
            <ProofItem text="HIKE communications: 1,000+ LinkedIn followers, full multi-channel campaign systems" />
          </div>
        </div>
      </section>

      {/* 8. Selected Tools */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-8">
            Selected Tools & Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Midjourney",
              "Runway",
              "ElevenLabs",
              "Claude",
              "ChatGPT",
              "Gemini",
              "NotebookLM",
              "Suno AI",
              "MusicFX",
              "React",
              "Web Audio API",
              "Cursor",
              "Replit",
              "Figma",
              "Canva",
              "CapCut",
              "Notion",
              "Adobe CC",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 border border-border text-sm font-mono text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact section */}
      <section
        id="contact"
        className="py-32 px-6 theme-terminal bg-[#080808] border-t border-border/20"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif text-white mb-6">
                Let's Build Something.
              </h2>
              <p className="text-xl font-serif text-muted-foreground mb-8">
                Available for creative technologist, AI marketing, AI
                enablement, and AI prototyping roles.
              </p>

              <div className="space-y-4 font-mono text-sm">
                <div>
                  <span className="block text-muted-foreground mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:avishek.chatterjee@aol.com"
                    className="text-primary hover:underline text-lg"
                  >
                    avishek.chatterjee@aol.com
                  </a>
                </div>
                <div>
                  <span className="block text-muted-foreground mb-1">
                    LinkedIn
                  </span>
                  <a
                    href="https://linkedin.com/in/avishek-chatterjee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                  >
                    linkedin.com/in/avishek-chatterjee
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 border border-white/10">
              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs text-muted-foreground mb-2"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white focus:outline-none focus:border-primary font-sans"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs text-muted-foreground mb-2"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white focus:outline-none focus:border-primary font-sans"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-muted-foreground mb-2"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white focus:outline-none focus:border-primary font-sans resize-none"
                  />
                </div>
                <button className="w-full bg-white text-black font-mono py-3 hover:bg-primary hover:text-white transition-colors mt-4">
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

function TrackCard({
  title,
  description,
  projects: projectList,
  delay,
}: {
  title: string;
  description: string;
  projects: string[];
  href: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="p-8 border border-border bg-card hover:border-primary/50 transition-colors h-full flex flex-col"
    >
      <h3 className="text-2xl font-serif mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary inline-block" />
        {title}
      </h3>
      <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
        {description}
      </p>
      <div>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
          Projects
        </p>
        <div className="flex flex-wrap gap-2">
          {projectList.map((p) => (
            <span
              key={p}
              className="text-xs font-mono bg-background border border-border px-2 py-1 text-foreground"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group block ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="border border-border bg-background overflow-hidden hover:border-primary/50 transition-colors h-full">
        <div
          className={`w-full bg-muted relative overflow-hidden ${
            featured ? "aspect-[21/9]" : "aspect-video"
          }`}
        >
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-card">
              <span className="font-mono text-muted-foreground/50 tracking-widest uppercase text-xs">
                {project.placeholder ? "IN DEVELOPMENT" : "IMAGE_ASSET"}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <div className="p-6 md:p-8">
          <Badge
            variant="outline"
            className="mb-4 rounded-none font-mono font-normal text-xs text-primary border-primary/30"
          >
            {project.category}
          </Badge>
          <h3
            className={`${
              featured ? "text-3xl md:text-4xl" : "text-2xl"
            } font-serif mb-3 group-hover:text-primary transition-colors`}
          >
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.oneLiner}
          </p>
        </div>
      </div>
    </Link>
  );
}

function CapabilityItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-l border-primary pl-6 py-2">
      <h4 className="text-xl font-serif mb-3">{title}</h4>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function ProofItem({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-4 py-4 border-t border-background/20 sm:border-t-0 sm:border-l sm:pl-6">
      <div className="text-primary">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <p className="font-serif leading-snug">{text}</p>
    </div>
  );
}
