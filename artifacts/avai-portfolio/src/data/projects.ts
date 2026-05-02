export type ProjectCategory = 'Prototype' | 'Teach' | 'Campaign' | 'Film' | 'Learning UX';

export interface Video {
  label: string;
  youtubeId: string;
}

export interface ToolGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  oneLiner: string;
  thumbnail?: string;
  youtubeId?: string;
  liveUrl?: string;
  link?: string;
  context?: string;
  problem?: string;
  myRole?: string[];
  process?: string[];
  system?: string;
  tools?: ToolGroup[];
  output?: string;
  result?: string;
  demonstrates?: string;
  hiringAudience?: string;
  videos?: Video[];
  tags: string[];
  isLab?: boolean;
}

export const ytThumb = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

export const projects: Project[] = [
  {
    id: 'ctrl-alt-deity',
    title: 'CTRL+ALT+DEITY.EXE',
    slug: 'ctrl-alt-deity',
    category: 'Film',
    oneLiner:
      'An AI short film produced end-to-end — from script to sound design — selected for Artefact AI Film Festival Paris 2025.',
    thumbnail: ytThumb('YzSH_73PjT0'),
    youtubeId: 'YzSH_73PjT0',
    link: 'https://artefact-ai-film-festival.com/gallery/ctrl-alt-deity-exe-69307062ca68f',
    context:
      'I wanted to tell a human story about grief through a near-future AI lens. I treated GenAI as a production partner — not a gimmick, not a shortcut. Every visual, every voice, every sound was planned as part of a coherent creative vision before generation began.',
    problem:
      'How do you produce a visually consistent, emotionally coherent short film entirely through AI — when every generation run produces something slightly different? The challenge was not "can AI make images" — it was "can 100+ assets from different tools, on different days, feel like one film?"',
    myRole: [
      'Writing and direction',
      'Visual development and prompt design',
      'AI image generation (Midjourney)',
      'AI motion / video synthesis (Runway)',
      'Voice production (ElevenLabs)',
      'Editing and pacing',
      'Sound design and final mix',
    ],
    process: [
      'Script — original sci-fi narrative built around grief and near-future AI',
      'Style tests — developed visual language and tone before production began',
      'Consistency system — prompt architecture to maintain character and world design across shots',
      'Shot generation — image and video generation per scene (Midjourney + Runway)',
      'Assembly edit — timeline construction, pacing, scene sequencing',
      'Sound design — voice (ElevenLabs) + spatial audio + ambient sound layers',
      'Final mix and export',
    ],
    tools: [
      { category: 'Image', items: ['Midjourney'] },
      { category: 'Video / Motion', items: ['Runway'] },
      { category: 'Voice', items: ['ElevenLabs'] },
      { category: 'Editing', items: ['DaVinci Resolve', 'CapCut'] },
    ],
    output:
      'A coherent AI short film with an original story, consistent visual world, original voice performance, and a mixed soundtrack — viewable in full on YouTube and at the Artefact AI Film Festival gallery.',
    result:
      'Selected for Artefact AI Film Festival Paris 2025 (Sci-Fi genre). Screened alongside international AI filmmakers.',
    demonstrates:
      'AI filmmaking, prompt architecture, creative production systems, multimodal AI workflows, visual consistency at scale.',
    hiringAudience:
      'Creative Technologist · AI Creative Producer · Generative AI Producer · Forward Deployed Creative · AI Content Specialist',
    tags: ['Midjourney', 'Runway', 'ElevenLabs', 'Film', 'Sound Design'],
  },
  {
    id: 'fractal-breaths',
    title: 'Fractal Breaths',
    slug: 'fractal-breaths',
    category: 'Prototype',
    oneLiner:
      "A browser-based generative meditation engine — built in hours using AI-assisted coding — that responds to the user's own breathing rhythm.",
    thumbnail: ytThumb('JMQZOoShScQ'),
    youtubeId: 'JMQZOoShScQ',
    liveUrl: 'https://fractal-breaths.netlify.app/',
    context:
      'Fractal Breaths explores two things at once: embodied interface design (can a browser genuinely support breathing practice?) and AI-assisted development (how fast can a concept become a working prototype with AI coding tools?).',
    problem:
      "Can a browser experience genuinely respond to a user's own rhythm — not a pre-set timer, but breath controlled by the person using it? And can that experience hold up visually on a projector or big screen?",
    myRole: [
      'Design and UX concept',
      'Frontend build (React, Web Audio API)',
      'Audio and interaction logic',
      'Deployment (Netlify)',
    ],
    process: [
      'Concept — breathing app as a generative visual engine, not a static timer',
      'AI-assisted prototyping — Google AI Studio + Cursor to accelerate from idea to working code',
      'Visual system — procedural patterns responding to breath phase (inhale, hold, exhale, rest)',
      'Audio system — ambient soundscapes via Web Audio API',
      'UX refinement — user-controlled durations, color/B&W modes, projector-friendly layout',
      'Deployment — shipped live on Netlify',
    ],
    tools: [
      { category: 'AI coding', items: ['Google AI Studio', 'Cursor'] },
      { category: 'Frontend', items: ['React'] },
      { category: 'Audio', items: ['Web Audio API'] },
      { category: 'Deployment', items: ['Netlify'] },
    ],
    output:
      'A fully functional, live browser app with user-controlled inhale / hold / exhale / rest durations, five visual patterns, six ambient soundscapes, color and black-and-white modes, and a projector / fullscreen mode.',
    result:
      'Live at fractal-breaths.netlify.app. Went from concept to deployed prototype in hours using AI-assisted coding workflows.',
    demonstrates:
      'Rapid prototyping, AI-assisted design-to-code, creative coding, interactive visual systems, audio engineering, UX thinking.',
    hiringAudience:
      'Creative Technologist · AI Prototyper · Experience Designer · Forward Deployed Creative',
    tags: ['React', 'Web Audio API', 'Cursor', 'Rapid Prototyping', 'UX'],
  },
  {
    id: 'genai-bootcamp',
    title: 'GenAI Sessions & AI Bootcamp',
    slug: 'genai-bootcamp',
    category: 'Teach',
    oneLiner:
      "Designed and delivered HIKE's GenAI education program — three topic sessions plus a 2-day bootcamp — built for practical workflows and fast adoption.",
    thumbnail: ytThumb('nbsrds0E9Uc'),
    context:
      'HIKE is a startup incubator in Nordhausen. The community includes founders, students, and practitioners — a mixed technical audience who needed real GenAI skills, not a general overview. I designed and delivered the full learning program from scratch.',
    problem:
      "How do you move 50+ people from 'I have heard of ChatGPT' to building repeatable AI workflows — without overwhelming them? Every session had to end with something participants could actually use the next day.",
    myRole: [
      'Session design — agenda, demos, takeaways per topic',
      'Live facilitation and Q&A for all sessions',
      'Prompt and workflow design for each topic',
      'Packaging learnings into repeatable formats',
      'HIKEathon GenAI + Design Thinking coaching (annual 2-day event)',
    ],
    process: [
      'Program design — mapped three topic areas based on community needs',
      'Session 1: NotebookLM — AI-powered research and knowledge management',
      'Session 2: Vibe Coding — building MVPs from prompts to product',
      'Session 3: AI Music Production — generative audio tools for creators',
      '2-day GenAI Bootcamp — deeper practice, guided projects, certificates',
      'Supporting materials — prompt libraries, recap content, Notion knowledge hub',
      'HIKEathon coaching — supported teams through GenAI + Design Thinking sprints',
    ],
    tools: [
      { category: 'Research', items: ['NotebookLM'] },
      { category: 'Coding', items: ['Cursor', 'Replit', 'Gemini Canvas'] },
      { category: 'Audio', items: ['Suno AI', 'MusicFX'] },
      { category: 'Visual AI', items: ['Midjourney', 'Runway', 'ElevenLabs'] },
      { category: 'LLMs', items: ['Claude', 'ChatGPT', 'Gemini'] },
      { category: 'Workshop tools', items: ['Notion', 'Canva'] },
    ],
    output:
      '3 live sessions (NotebookLM, Vibe Coding, AI Music Production) + a 2-day bootcamp + HIKEathon coaching. Supporting materials: prompt libraries, recap content, Notion knowledge hub, digital certificates.',
    result:
      '50+ participants. 85% completion rate. 7 founding teams coached. Reusable AI learning systems for the entire HIKE community.',
    demonstrates:
      'AI enablement, workshop design, curriculum development, learning systems, prompt engineering, practical AI adoption.',
    hiringAudience:
      'AI Enablement Lead · AI Trainer · GenAI Educator · Learning Experience Designer · AI Adoption Consultant',
    videos: [
      { label: 'Session 1 — NotebookLM', youtubeId: 'nbsrds0E9Uc' },
      { label: 'Session 2 — Vibe Coding', youtubeId: 'uJw1flGmltE' },
      { label: 'Session 3 — AI Music Production', youtubeId: 'Kmcr51RulUY' },
    ],
    tags: ['Workshop', 'Curriculum', 'Prompt Engineering', 'NotebookLM', 'Vibe Coding'],
  },
  {
    id: 'hike-campaigns',
    title: 'HIKE Campaign Storytelling',
    slug: 'hike-campaigns',
    category: 'Campaign',
    oneLiner:
      'Two fully executed campaigns — a flagship event launch and a public funding advocacy push — built from script to final cut to multi-channel distribution.',
    thumbnail: ytThumb('PAKv8JecEQg'),
    context:
      'I owned end-to-end marketing and communications at HIKE, a startup incubator in Nordhausen — from campaign strategy to video production to social distribution. These two campaigns represent the clearest evidence of that work.',
    problem:
      'How do you build compelling, consistent multi-channel communication for a startup ecosystem with limited resources — and do it under deadline for both a public event launch and a sensitive funding advocacy push?',
    myRole: [
      'Campaign strategy and narrative development',
      'Script writing and story structure',
      'Video production — concept, shooting, editing, sound, final mix',
      'Landing page copy and visual structure',
      'Social asset creation and platform optimization',
      'Stakeholder coordination with HIKE leadership and external speakers',
    ],
    process: [
      '#hikemussbleiben: Developed script and narrative arc — made the case clear and emotional using real stakeholder voices',
      '#hikemussbleiben: Managed multi-speaker interview footage, edited into cohesive narrative',
      '#hikemussbleiben: Delivered final assets for social distribution and direct advocacy outreach',
      'Demo Day: Defined core narrative for three distinct audiences (startups, investors, community)',
      'Demo Day: Produced promo video (drive sign-ups) + recap video (ongoing promotion)',
      'Demo Day: Created landing page content, visuals, and social cut-downs per platform',
      'Ran feedback loops with HIKE leadership throughout both campaigns',
    ],
    tools: [
      { category: 'Video', items: ['CapCut', 'Adobe Premiere Pro'] },
      { category: 'Design', items: ['Canva', 'Adobe Creative Suite'] },
      { category: 'Planning', items: ['Notion'] },
      { category: 'AI', items: ['Claude', 'ChatGPT'] },
      { category: 'Analytics', items: ['LinkedIn Analytics', 'Meta Insights'] },
    ],
    output:
      '#hikemussbleiben: Funding advocacy video + supporting copy and social captions. Demo Day: Promo video + recap video + complete landing page + LinkedIn and Instagram social assets.',
    result:
      'LinkedIn grew to 1,000+ followers. Instagram grew to 800+ followers. Demo Day campaign assets continue to be reused for future events. #hikemussbleiben video became HIKE\'s core advocacy tool for stakeholder meetings, grant applications, and community engagement.',
    demonstrates:
      'Campaign storytelling, multi-channel execution, video production, stakeholder communication, audience segmentation, content systems.',
    hiringAudience:
      'AI Marketing · Product Marketing · Content Systems · Campaign Manager · Communications',
    videos: [
      { label: '#hikemussbleiben — Funding Advocacy', youtubeId: 'PAKv8JecEQg' },
      { label: 'HIKE Demo Day 2025 — Recap', youtubeId: 'CMLWaej0Ibw' },
    ],
    link: 'https://www.hike-startups.de/demo-day-2025',
    tags: ['Campaign', 'Video', 'Notion', 'Multi-channel', 'Advocacy'],
  },
  {
    id: 'giz-learning-ux',
    title: 'GIZ Learning UX & Innovation',
    slug: 'giz-learning-ux',
    category: 'Learning UX',
    oneLiner:
      'Redesigned the AIZ Learning Management System UX — improving engagement by ~30% — and contributed to a GIZ Innovation Fund project that won the Audience Choice Award from 100+ international teams.',
    context:
      'Work within GIZ\'s learning and innovation ecosystem. Two distinct streams: operational LMS redesign for the AIZ platform and innovation fund project work on DEEGRO.w, an educational game concept selected from a competitive international pool.',
    problem:
      'How do you meaningfully improve learner engagement on a legacy institutional learning platform — where technical constraints are fixed but the UX is not? And separately: how do you turn a complex development education concept into a pitch that wins Audience Choice from 100+ international teams?',
    myRole: [
      'LMS UX audit and pain-point mapping',
      'Redesign proposals — new information architecture and interface approach',
      'Implementation within platform constraints',
      'DEEGRO.w — product storytelling and concept development',
      'Innovation Fund presentation and pitch contribution',
    ],
    process: [
      'LMS audit — mapped existing AIZ LMS pain points and drop-off patterns',
      'Redesign — new information architecture and interface proposals',
      'Implementation — shipped improvements within platform constraints',
      'DEEGRO.w — joined project team, contributed to concept and storytelling',
      'Pitch — presented to GIZ Innovation Fund selection panel against 100+ international teams',
    ],
    tools: [
      { category: 'UX', items: ['Figma', 'Research tools'] },
      { category: 'Presentation', items: ['Canva', 'Adobe CC'] },
    ],
    output:
      'Redesigned AIZ LMS user experience. DEEGRO.w innovation project contribution — concept, storytelling, and pitch.',
    result:
      'LMS redesign improved learner engagement by approximately 30%. DEEGRO.w won Audience Choice Award and was selected from 100+ international teams (GIZ Innovation Fund).',
    demonstrates:
      'Institutional UX, learning systems design, public-sector innovation, product storytelling, educational technology.',
    hiringAudience:
      'Learning UX · Digital Transformation · EdTech · Public Sector Innovation · Product Storytelling',
    tags: ['UX', 'LMS', 'Innovation', 'Public Sector', 'EdTech'],
  },
];

export const labExperiments: Project[] = [
  {
    id: 'groovebox-magic',
    title: 'GrooveBox Magic',
    slug: 'groovebox-magic',
    category: 'Prototype',
    oneLiner:
      'A browser-based 16-step music sequencer with a playable UI, timing engine, and sound synthesis — built with React and Web Audio API.',
    liveUrl: 'https://groovebox-magic.netlify.app/',
    tags: ['React', 'Web Audio API', 'AI-assisted', 'Music'],
    isLab: true,
  },
  {
    id: 'ai-music-jam',
    title: 'Real-time AI Music Jam',
    slug: 'ai-music-jam',
    category: 'Prototype',
    oneLiner:
      'A live AI music experiment exploring prompt-based music control as an interactive creative instrument using MusicFX DJ Mode.',
    thumbnail: ytThumb('oehw1PPcZr4'),
    youtubeId: 'oehw1PPcZr4',
    tags: ['MusicFX', 'AI Music', 'Live Performance', 'Prompting'],
    isLab: true,
  },
  {
    id: 'prompt-eng-systems',
    title: 'Prompt Engineering Systems',
    slug: 'prompt-eng-systems',
    category: 'Teach',
    oneLiner:
      'Reusable prompt systems for creative production and AI education — from visual generation to multi-step AI workflows.',
    tags: ['Prompt Architecture', 'Systems', 'Education'],
    isLab: true,
  },
  {
    id: 'ai-tool-month',
    title: 'AI Tool of the Month',
    slug: 'ai-tool-month',
    category: 'Teach',
    oneLiner:
      'A recurring AI tool exploration format: practical use cases, honest limitations, and adoption potential — for the HIKE community.',
    tags: ['Content', 'Tool Scouting', 'Enablement'],
    isLab: true,
  },
  {
    id: 'nano-banana',
    title: 'Nano Banana Prompt Drop',
    slug: 'nano-banana',
    category: 'Campaign',
    oneLiner:
      'Public thought-leadership prompt drops making concrete AI use cases tangible for the German-speaking generative AI community.',
    tags: ['Social', 'Content', 'Prompting', 'Thought Leadership'],
    isLab: true,
  },
];
