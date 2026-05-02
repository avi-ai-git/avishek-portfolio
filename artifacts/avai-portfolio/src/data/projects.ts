export type ProjectCategory = 'Prototype' | 'Teach' | 'Campaign' | 'Film' | 'Learning UX';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  oneLiner: string;
  context?: string;
  problem?: string;
  system?: string;
  output?: string;
  result?: string;
  demonstrates?: string;
  tags: string[];
  link?: string;
  isLab?: boolean;
}

export const projects: Project[] = [
  {
    id: "ctrl-alt-deity",
    title: "CTRL+ALT+DEITY.EXE",
    slug: "ctrl-alt-deity",
    category: "Film",
    oneLiner: "End-to-end AI short film built through a generative image, video, voice, sound, and editing pipeline.",
    context: "Festival-selected AI short film exploring AI as a creative production system.",
    problem: "How do you maintain visual consistency across 100+ AI-generated assets across image, video, and audio?",
    system: "Built a full AI media production pipeline — prompt architecture for character and scene consistency, image generation (Midjourney), motion synthesis (Runway), voice production (ElevenLabs), spatial audio design, and editorial assembly.",
    output: "A coherent AI short film with original narrative, visual style, and soundtrack.",
    result: "Selected for Artefact AI Film Festival Paris 2025.",
    demonstrates: "AI filmmaking, prompt architecture, creative production systems, multimodal AI workflows, visual consistency at scale.",
    tags: ["Midjourney", "Runway", "ElevenLabs", "Film"],
    link: "https://artefact-ai-film-festival.com/gallery/ctrl-alt-deity-exe-69307062ca68f"
  },
  {
    id: "fractal-breaths",
    title: "Fractal Breaths",
    slug: "fractal-breaths",
    category: "Prototype",
    oneLiner: "Browser-based generative meditation visual engine with breath-timed animation and ambient soundscapes.",
    context: "A rapid prototype exploring embodied interface design and AI-assisted design-to-code workflows.",
    problem: "Can a browser experience genuinely support real breathing practice — responding to the user's own rhythm?",
    system: "Built with React and Web Audio API. User-controlled inhale/hold/exhale/rest durations. Five visual patterns. Six ambient soundscapes. Color and black-and-white modes. Projector-friendly.",
    output: "A fully functional browser-based breath guide that went from concept to working prototype within hours using AI-assisted coding.",
    result: "Live prototype demonstrating rapid AI-assisted prototyping, embodied UX, and creative coding capability.",
    demonstrates: "Rapid prototyping, AI-assisted design-to-code, creative coding, interactive visual systems, UX thinking.",
    tags: ["React", "Web Audio API", "UX"],
  },
  {
    id: "genai-bootcamp",
    title: "GenAI Bootcamp",
    slug: "genai-bootcamp",
    category: "Teach",
    oneLiner: "Designed and delivered practical GenAI learning formats for the HIKE community.",
    context: "HIKE's first 2-day GenAI bootcamp for founders, students, and community members.",
    problem: "How do you move 50+ people from 'trying tools' to building repeatable AI workflows — without overwhelming them?",
    system: "Designed end-to-end: prompt engineering curriculum, AI production workflow labs (Midjourney, Runway, ElevenLabs, Claude, NotebookLM, Vibe Coding, AI Music), Design Thinking with GenAI promptbook, certificates, digital badges, Notion knowledge hub.",
    output: "Full GenAI bootcamp curriculum, learning materials, promptbook, knowledge hub, and delivery for 50+ participants across founders, students, and teams.",
    result: "50+ participants. 85% completion rate. 7 founding teams coached. Reusable AI systems for the entire HIKE community.",
    demonstrates: "AI enablement, workshop design, curriculum development, learning systems, prompt engineering, practical AI adoption.",
    tags: ["Workshop", "Curriculum", "Prompt Engineering"],
  },
  {
    id: "hike-campaigns",
    title: "HIKE Knowledge Hub & Campaigns",
    slug: "hike-campaigns",
    category: "Campaign",
    oneLiner: "Built communications systems across campaigns, videos, newsletters, events, and Notion knowledge structures.",
    context: "End-to-end communications ownership at HIKE, a startup incubator in Nordhausen.",
    problem: "How do you build consistent, compelling multi-channel communication for a startup ecosystem with limited resources?",
    system: "Owned newsletters, social campaigns (LinkedIn grew to 1,000+ followers, Instagram to 800+), Demo Day event marketing (promo + recap video, landing page, social assets), #hikemussbleiben funding advocacy campaign, Notion editorial systems, Canva templates, analytics via LinkedIn Analytics and Meta Insights.",
    output: "HIKE Demo Day 2025 full campaign package. #hikemussbleiben advocacy video (YouTube). Reusable Canva templates. Notion knowledge hub. StarTH, EXIST Women, HIKEathon content.",
    result: "Funded advocacy campaign. Event campaign assets reused for future Demo Days. LinkedIn to 1,000+ followers. Instagram to 800+ followers.",
    demonstrates: "Campaign storytelling, multi-channel execution, video production, knowledge management, stakeholder communication, content systems.",
    tags: ["Campaign", "Video", "Notion"],
  },
  {
    id: "giz-learning-ux",
    title: "GIZ Learning UX & Innovation",
    slug: "giz-learning-ux",
    category: "Learning UX",
    oneLiner: "Redesigned the AIZ Learning Management System UX and contributed to GIZ Innovation Fund project DEEGRO.w.",
    context: "Institutional UX and digital innovation work within GIZ's learning ecosystem.",
    problem: "How do you improve learner engagement on a legacy LMS while also contributing to cutting-edge educational game innovation?",
    system: "LMS UX audit, redesign, and implementation for AIZ. Contributed to DEEGRO.w — a GIZ Innovation Fund educational game project — from 100+ international teams.",
    output: "Redesigned AIZ LMS. Contributed to DEEGRO.w game innovation project.",
    result: "LMS redesign improved engagement by ~30%. DEEGRO.w won Audience Choice Award and was selected from 100+ international teams.",
    demonstrates: "Institutional UX, learning systems design, public-sector innovation, product storytelling, educational technology.",
    tags: ["UX", "LMS", "Innovation"],
  }
];

export const labExperiments: Project[] = [
  {
    id: "groovebox-magic",
    title: "GrooveBox Magic",
    slug: "groovebox-magic",
    category: "Prototype",
    oneLiner: "Interactive music sequencer prototype built with React and Web Audio API.",
    tags: ["React", "Web Audio API", "AI-assisted"],
    isLab: true
  },
  {
    id: "ai-music-gen",
    title: "AI Music Generation with Live Prompt Mixing",
    slug: "ai-music-gen",
    category: "Prototype",
    oneLiner: "A live AI music experiment exploring prompt-based music control as an interactive creative instrument.",
    tags: ["Audio AI", "Prompting", "Live"],
    isLab: true
  },
  {
    id: "prompt-eng-systems",
    title: "Prompt Engineering Systems",
    slug: "prompt-eng-systems",
    category: "Teach",
    oneLiner: "Prompt systems for creative production and AI education — reusable templates.",
    tags: ["Systems", "Prompting", "Education"],
    isLab: true
  },
  {
    id: "ai-tool-month",
    title: "AI Tool of the Month",
    slug: "ai-tool-month",
    category: "Teach",
    oneLiner: "A recurring AI tool exploration format focused on practical use cases, limitations, and adoption.",
    tags: ["Content", "Enablement"],
    isLab: true
  },
  {
    id: "nano-banana",
    title: "Nano Banana Prompt Drop",
    slug: "nano-banana",
    category: "Campaign",
    oneLiner: "Public thought-leadership prompt series making concrete AI use cases tangible.",
    tags: ["Social", "Content", "Prompting"],
    isLab: true
  }
];
