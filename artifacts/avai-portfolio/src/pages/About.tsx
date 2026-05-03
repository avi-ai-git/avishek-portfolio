import { AppLayout } from "@/components/layout/AppLayout";
import { Link } from "wouter";
import { motion } from "framer-motion";

const WHAT_I_DO = [
  {
    label: "AI Films & Visual Storytelling",
    desc: "End-to-end AI film production from script and visual development to voice, sound design, and final cut.",
  },
  {
    label: "AI-Powered Campaigns & Content",
    desc: "Advocacy campaigns, event launches, multi-channel social assets, and content systems built to distribute.",
  },
  {
    label: "AI Workshops & Bootcamps",
    desc: "Curriculum design and live facilitation for GenAI bootcamps, topic sessions, and practical enablement formats.",
  },
  {
    label: "Prompt Engineering",
    desc: "Reusable prompt architectures for visual generation, audio, research, coding workflows, and multi-step AI pipelines.",
  },
  {
    label: "Digital Marketing & Entrepreneurship Coaching",
    desc: "Strategic communications, audience segmentation, and coaching for early-stage founders and startup teams.",
  },
];

const PROJECTS_OVERVIEW = [
  {
    title: "CTRL+ALT+DEITY.EXE",
    slug: "ctrl-alt-deity",
    desc: "An AI-produced sci-fi short film from script to sound design, selected for the Artefact AI Film Festival.",
  },
  {
    title: "GenAI Bootcamp for HIKE",
    slug: "ai-bootcamp",
    desc: "3 GenAI sessions plus a 2-day bootcamp for HIKE, with 50+ participants, certificates, and reusable learning systems.",
  },
  {
    title: "AI Tool of the Month",
    slug: "ai-tool-month",
    desc: "Ongoing format at HIKE exploring individual AI tools through real use cases, social posts, and live demos.",
  },
  {
    title: "#hikemussbleiben",
    slug: "hikemussbleiben",
    desc: "Storytelling video and content for a campaign that supported continued public funding for HIKE.",
  },
  {
    title: "Research on Hyperreal Audio",
    slug: "hyperreal-audio",
    desc: "Master's thesis on psychoacoustics and the threshold where listeners cannot distinguish virtual from real soundscapes.",
  },
];

const BROADER = [
  {
    title: "Research",
    body: "Master's thesis on the psychoacoustics of immersion and hyperreal audio. Qualitative research with 24 participants using spatial audio, Ambisonics, and Binaural techniques in VR and AR-ready environments.",
  },
  {
    title: "Entrepreneurship",
    body: "Coaching for early-stage startups through HIKEathon, the Female Founders Retreat, and the GIZ Innovation Fund Accelerator where my team won Audience Choice from 100+ international teams.",
  },
  {
    title: "Sound Design",
    body: "Spatial audio production, immersive soundscape design, AI voice and music generation, and Web Audio API for browser-based interactive experiences.",
  },
  {
    title: "Community",
    body: "Building and running AI education for a community of founders, practitioners, and students in the German-speaking startup and academic ecosystem.",
  },
];

export default function About() {
  return (
    <AppLayout>
      {/* 1. Hero */}
      <section className="pt-32 pb-20 px-6 bg-card border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-6">
              About
            </span>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight text-foreground max-w-3xl mb-8">
              I design stories, campaigns and experiments with Generative AI.
            </h1>
            <div className="w-12 h-px bg-primary" />
          </motion.div>
        </div>
      </section>

      {/* 2. Bio + photo */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 order-2 md:order-1"
            >
              <div className="w-full aspect-[3/4] bg-card border border-border flex items-end p-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-muted-foreground/30 tracking-widest uppercase">
                    PHOTO_COMING
                  </span>
                </div>
                <div className="relative z-10">
                  <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    Avishek Chatterjee
                  </p>
                  <p className="font-mono text-xs text-primary tracking-widest uppercase mt-1">
                    Berlin
                  </p>
                </div>
              </div>

              {/* Contact sidebar */}
              <div className="mt-8 border-l-2 border-primary pl-4 font-mono text-sm space-y-3">
                <p className="text-foreground">Based in Berlin, Germany</p>
                <p>
                  <a
                    href="mailto:avishek.chatterjee@aol.com"
                    className="text-primary hover:underline"
                  >
                    avishek.chatterjee@aol.com
                  </a>
                </p>
                <p>
                  <a
                    href="https://linkedin.com/in/avishek-chatterjee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-3 order-1 md:order-2"
            >
              <h2 className="text-3xl font-serif mb-8 text-foreground">
                Hi, I'm Avishek
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I work as an Independent Creator in the spaces where design,
                  code, sound, and storytelling overlap. In the last few years
                  AI has become a big part of that practice for me. I use AI as
                  a creative partner. It helps me write, sketch visuals, shape
                  music and sound, and build small experimental tools and
                  applications.
                </p>
                <p>
                  My vision is to keep exploring how different AI systems can be
                  used in a thoughtful way for art and creative workflows, and
                  to share what I learn with others who are curious about making
                  films, music, or interactive art pieces with these new tools.
                </p>
                <p>
                  Most recently I was the AI and Communications lead at HIKE,
                  the Hochschulinkubator Nordhausen, where I designed and ran
                  GenAI bootcamps, produced advocacy campaigns, and built the
                  organisation's content and social media systems from scratch.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 font-mono">
                <Link
                  href="/work"
                  className="bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors text-center text-sm"
                >
                  View Work
                </Link>
                <a
                  href="mailto:avishek.chatterjee@aol.com"
                  className="border border-border text-foreground px-6 py-3 hover:border-primary hover:text-primary transition-colors text-center text-sm"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. What I do */}
      <section className="py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-foreground mb-16"
          >
            What I Do
          </motion.h2>
          <div className="divide-y divide-border">
            {WHAT_I_DO.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-start group"
              >
                <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Selected projects */}
      <section className="py-24 px-6 bg-background border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Selected Projects
            </h2>
            <Link
              href="/work"
              className="font-mono text-sm text-primary hover:underline hidden sm:block"
            >
              All Work &rarr;
            </Link>
          </div>
          <div className="divide-y divide-border">
            {PROJECTS_OVERVIEW.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="py-6"
              >
                <Link
                  href={`/work/${p.slug}`}
                  className="group flex flex-col md:flex-row md:items-center md:gap-12"
                >
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors shrink-0 md:w-64">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-1 md:mt-0 flex-1">
                    {p.desc}
                  </p>
                  <span className="font-mono text-xs text-primary shrink-0 ml-auto hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                    View &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Broader practice */}
      <section className="py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">
            The Broader Practice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {BROADER.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-l border-primary pl-6 py-2"
              >
                <h4 className="text-xl font-serif mb-3 text-foreground">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Available for new work.
              </h2>
              <p className="text-background/60 font-mono text-sm max-w-lg">
                Creative technologist, AI marketing, AI enablement, and
                prototyping roles. Berlin-based, open to remote.
              </p>
            </div>
            <div className="flex flex-col gap-3 font-mono shrink-0">
              <a
                href="mailto:avishek.chatterjee@aol.com"
                className="bg-primary text-white px-8 py-3 hover:bg-primary/90 transition-colors text-sm text-center"
              >
                avishek.chatterjee@aol.com
              </a>
              <a
                href="https://linkedin.com/in/avishek-chatterjee"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-background/30 text-background px-8 py-3 hover:border-background transition-colors text-sm text-center"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
