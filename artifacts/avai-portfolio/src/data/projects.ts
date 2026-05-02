export type ProjectCategory = 'Prototype' | 'Teach' | 'Campaign' | 'Film' | 'UX / Sound';

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
  tools?: ToolGroup[];
  output?: string;
  result?: string;
  demonstrates?: string;
  hiringAudience?: string;
  videos?: Video[];
  tags: string[];
  isLab?: boolean;
  featured?: boolean;
  placeholder?: boolean;
}

export const ytThumb = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

export const projects: Project[] = [

  // ─── FILM ────────────────────────────────────────────────────────────────

  {
    id: 'ctrl-alt-deity',
    title: 'CTRL+ALT+DEITY.EXE',
    slug: 'ctrl-alt-deity',
    category: 'Film',
    featured: true,
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

  // ─── PROTOTYPE ───────────────────────────────────────────────────────────

  {
    id: 'fractal-breaths',
    title: 'Fractal Breaths',
    slug: 'fractal-breaths',
    category: 'Prototype',
    featured: true,
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
    id: 'far-out',
    title: 'Far Out',
    slug: 'far-out',
    category: 'Prototype',
    thumbnail: '/farout-preview.png',
    oneLiner:
      'A cinematic browser experience built around the aesthetics of deep space — dark, atmospheric, and vibe-coded from concept to deployment.',
    liveUrl: 'https://farout.netlify.app/',
    context:
      'Far Out is a rapid creative prototype exploring what it feels like to be at the edge of known space. The brief was purely aesthetic: build something that feels cinematic, mysterious, and intentional — using AI-assisted tools to go from idea to shipped experience as fast as possible.',
    problem:
      'Can a browser experience feel genuinely cinematic — not just visually dark, but tonally coherent — when built without a traditional design or development team, using only AI-assisted tools and a clear creative direction?',
    myRole: [
      'Concept and creative direction',
      'Visual design — typography, motion, atmosphere',
      'Frontend build (AI-assisted)',
      'Copywriting and tone of voice',
      'Deployment (Netlify)',
    ],
    process: [
      'Concept — "what does the edge of space feel like as a browser experience?"',
      'Visual direction — deep black, cinematic serif typography, minimal motion, maximum atmosphere',
      'Build — AI-assisted coding with Cursor, rapid iteration on feel and pacing',
      'Copy — "INITIALIZE LINK... Awaiting confirmation..." as the only text, to hold tension',
      'Deployment — live on Netlify',
    ],
    tools: [
      { category: 'AI coding', items: ['Cursor', 'Google AI Studio'] },
      { category: 'Frontend', items: ['React', 'CSS animations'] },
      { category: 'Deployment', items: ['Netlify'] },
    ],
    output:
      'A fully deployed cinematic browser experience — dark, minimal, atmospheric. Live at farout.netlify.app.',
    result:
      'Live and deployed. Demonstrates design-to-code speed and tonal control in a browser environment.',
    demonstrates:
      'Creative direction, vibe-coded rapid prototyping, visual atmosphere, AI-assisted frontend development, design instinct.',
    hiringAudience:
      'Creative Technologist · AI Prototyper · Experience Designer · Forward Deployed Creative',
    tags: ['Creative Coding', 'Vibe Coding', 'Cursor', 'Atmosphere', 'Rapid Prototyping'],
  },

  {
    id: 'sounds-of-bengal',
    title: 'Sounds of Bengal',
    slug: 'sounds-of-bengal',
    category: 'Prototype',
    thumbnail: '/sounds-of-bengal-preview.png',
    oneLiner:
      'An interactive browser experience built for Bengali New Year — tap to awaken the sounds of the festival, blending cultural memory with generative audio and immersive design.',
    liveUrl: 'https://sounds-of-bengal.netlify.app/',
    context:
      'Built for Pohela Boishakh (Bengali New Year 1432), Sounds of Bengal is a personal creative project exploring how AI-assisted tools and Web Audio can honour cultural traditions in a browser. The prompt was specific: what does the festival feel like, sonically and visually, when you build it from scratch with generative tools?',
    problem:
      'How do you translate the texture of a cultural festival — the sounds, the warmth, the Bengali script on screen — into a browser experience that feels intentional, not superficial? And how do you build it fast enough that it ships for the actual occasion?',
    myRole: [
      'Concept and creative direction',
      'Cultural research and aesthetic decisions',
      'Frontend build — interaction design, motion, typography',
      'Sound design and audio curation',
      'Bengali copywriting and visual identity',
      'Deployment (Netlify)',
    ],
    process: [
      'Concept — a festival entry experience: dark, warm, atmospheric, interactive',
      'Visual design — Bengali script ("উৎসবে স্বাগতম"), festival instrument iconography, deep warm palette',
      'Interaction design — "Tap anywhere to awaken the sounds of Bengal" as the core mechanic',
      'Audio layer — ambient festival soundscapes triggered by user interaction',
      'AI-assisted build — rapid development with Cursor from visual concept to deployed experience',
      'Deployed for Pohela Boishakh 1432',
    ],
    tools: [
      { category: 'AI coding', items: ['Cursor'] },
      { category: 'Frontend', items: ['React', 'CSS animations'] },
      { category: 'Audio', items: ['Web Audio API'] },
      { category: 'Deployment', items: ['Netlify'] },
    ],
    output:
      'A fully deployed interactive browser experience — Bengali-language, atmospheric, touch-triggered, and sound-responsive. Live at sounds-of-bengal.netlify.app.',
    result:
      'Live and deployed for Pohela Boishakh 1432. Demonstrates cultural sensitivity, rapid prototyping, and generative audio design in a browser environment.',
    demonstrates:
      'Cultural creative technology, interactive sound design, vibe-coded prototyping, Bengali cultural context, AI-assisted frontend development.',
    hiringAudience:
      'Creative Technologist · AI Prototyper · Experience Designer · Cultural Tech · Interactive Sound',
    tags: ['Cultural Tech', 'Web Audio', 'Bengali', 'Interactive', 'Vibe Coding'],
  },

  {
    id: 'groovebox-daw',
    title: 'GrooveBox DAW',
    slug: 'groovebox-daw',
    category: 'Prototype',
    placeholder: true,
    oneLiner:
      'An AI-powered digital audio workstation being built in the browser — combining step sequencing, generative audio, and real-time AI prompting.',
    context:
      'GrooveBox DAW extends the earlier GrooveBox Magic sequencer prototype into a fuller AI-assisted music production environment. The goal is a browser-native DAW where AI generation and human input work together in real time.',
    problem:
      'Most AI music tools are black boxes — you prompt, you get audio, done. GrooveBox DAW explores what it looks like when the musician stays in control of the creative loop, using AI as a generative layer rather than a replacement.',
    myRole: [
      'Concept and product direction',
      'Frontend architecture',
      'Audio engine design (Web Audio API)',
      'AI tool integration',
      'UX and interaction design',
    ],
    process: [
      'GrooveBox Magic (published) — 16-step sequencer with timing engine and sound synthesis',
      'DAW architecture — planning multi-track, pattern-based composition workflow',
      'AI integration — exploring real-time generative audio layers (MusicFX, Suno)',
      'TODO — in active development',
    ],
    tools: [
      { category: 'Frontend', items: ['React'] },
      { category: 'Audio', items: ['Web Audio API', 'Tone.js'] },
      { category: 'AI Audio', items: ['Suno AI', 'MusicFX'] },
      { category: 'AI coding', items: ['Cursor', 'Replit'] },
    ],
    liveUrl: 'https://groovebox-magic.netlify.app/',
    output: 'Live GrooveBox Magic sequencer (Netlify). GrooveBox DAW — in development.',
    result: 'Active development. GrooveBox Magic live and playable at groovebox-magic.netlify.app.',
    demonstrates:
      'Creative coding, browser audio engineering, AI-assisted development, product thinking, generative music systems.',
    hiringAudience:
      'Creative Technologist · AI Music Tools · Browser Audio · Forward Deployed Creative',
    tags: ['React', 'Web Audio API', 'AI Music', 'DAW', 'Creative Coding'],
  },

  {
    id: 'ai-interview-app',
    title: 'AI Interview Practice App',
    slug: 'ai-interview-app',
    category: 'Prototype',
    oneLiner:
      'A Python/Streamlit app that judges interview answers in real time using 5 prompt techniques — built as part of the Turing College AI Engineering program and code-reviewed by a Nord Security engineer.',
    liveUrl: 'https://ai-interview-practice-app-made-by-avi-ai.streamlit.app/',
    context:
      'My first proper backend engineering project — not front-end where everything is visual and you can see what is breaking. Streamlit, Python, server-side logic, real API calls, every click with a cost. Built as part of the Turing College AI Engineering program.',
    problem:
      'Building the app was one skill. Thinking about who might misuse it, what could break, and what happens when nobody is watching is another. I spent two weeks on the first part and almost no time on the second.',
    myRole: [
      'Product concept and specification',
      'Python / Streamlit development',
      'Prompt engineering — 5 distinct evaluation techniques',
      'API integration (OpenRouter)',
      'Input validation and UX logic',
      'Security review response and iteration',
    ],
    process: [
      'Concept — paste a job description, type your answer, get AI judgment using 5 prompt techniques',
      'Build — Python/Streamlit app with real API calls via OpenRouter',
      'Deploy — shipped live on Streamlit, felt good about it, submitted for review',
      'Code review — Vytautas Bunevičius (Nord Security engineer) clicked start 20 times in a row. Every click: a paid API call. No limit. No check.',
      'Holes found — no rate limiting, prompt injection bypass worked in German, Lithuanian, Polish, and via rephrasing',
      'Lesson — a list of banned phrases is not a real safeguard. Building is one skill; thinking about abuse is another',
      'Next — rate limiting, better abuse protection, stronger prompt-injection handling, logging, cleaner structure',
    ],
    tools: [
      { category: 'Backend', items: ['Python', 'Streamlit'] },
      { category: 'AI', items: ['OpenRouter', 'Claude', 'ChatGPT'] },
      { category: 'Prompt design', items: ['5 evaluation techniques'] },
      { category: 'Program', items: ['Turing College AI Engineering'] },
    ],
    output:
      'Live Streamlit app: paste a job description, type your answer, receive AI judgment via 5 prompt techniques. Code review from a professional engineer at Nord Security.',
    result:
      'Live at streamlit.app. Got a real professional code review that exposed API abuse risks and prompt injection gaps. The review fixed my blind spots in 45 minutes.',
    demonstrates:
      'Python development, Streamlit, prompt engineering, API integration, security thinking, learning from professional code review, backend awareness.',
    hiringAudience:
      'AI Engineer · Creative Technologist · Prompt Engineer · AI Product Builder · AI Enablement',
    tags: ['Python', 'Streamlit', 'Prompt Engineering', 'OpenRouter', 'AI Engineering'],
  },

  // ─── TEACH ───────────────────────────────────────────────────────────────

  {
    id: 'notebooklm-session',
    title: 'AI Research with NotebookLM',
    slug: 'notebooklm-session',
    category: 'Teach',
    featured: true,
    oneLiner:
      'A 90-minute live session teaching founders and practitioners how to use NotebookLM for AI-powered research, knowledge synthesis, and learning — delivered at HIKE Nordhausen.',
    thumbnail: ytThumb('nbsrds0E9Uc'),
    youtubeId: 'nbsrds0E9Uc',
    context:
      'Session 1 of the HIKE GenAI program. NotebookLM represents a shift in how people can interact with large bodies of knowledge — but most practitioners were using it like a search engine. This session reframed it as a research and synthesis tool.',
    problem:
      'How do you teach a room of mixed-technical practitioners to genuinely change how they process information — in 90 minutes, with zero setup, and with something they can use the next morning?',
    myRole: [
      'Session design — agenda, demos, key learning outcomes',
      'Live facilitation and Q&A',
      'Prompt and workflow design for the topic',
      'Supporting materials — recap and prompt library',
    ],
    process: [
      'Scoped the session around real practitioner use cases: research synthesis, meeting prep, podcast creation',
      'Designed live demos using real HIKE-relevant documents as sources',
      'Walked through Audio Overview, source-grounded Q&A, and custom prompt patterns',
      'Ran live Q&A and built a shared prompt library during the session',
      'Packaged takeaways into a Notion recap for async use',
    ],
    tools: [
      { category: 'Tool taught', items: ['NotebookLM'] },
      { category: 'Workshop', items: ['Notion', 'Canva'] },
      { category: 'LLMs', items: ['Gemini', 'Claude'] },
    ],
    output:
      'One 90-minute live session with recording. Prompt library. Notion recap. Reusable session template.',
    result:
      'Part of the HIKE GenAI program serving 50+ participants. Session recording on YouTube.',
    demonstrates:
      'AI education, workshop facilitation, curriculum design, knowledge management, practical AI adoption.',
    hiringAudience:
      'AI Enablement Lead · AI Trainer · GenAI Educator · Learning Experience Designer',
    tags: ['NotebookLM', 'Workshop', 'AI Research', 'Knowledge Management', 'Facilitation'],
  },

  {
    id: 'vibe-coding-session',
    title: 'Vibe Coding — MVP from Prompt to Product',
    slug: 'vibe-coding-session',
    category: 'Teach',
    oneLiner:
      'A live session on AI-assisted development — teaching non-technical participants to build real working apps from prompts using Cursor, Replit, and Gemini Canvas.',
    thumbnail: ytThumb('uJw1flGmltE'),
    youtubeId: 'uJw1flGmltE',
    context:
      'Session 2 of the HIKE GenAI program. "Vibe coding" — using AI coding tools to build functional software without traditional programming knowledge — had just become a real possibility. This session made it tangible for a non-technical audience.',
    problem:
      'How do you demonstrate that a non-developer can go from idea to working deployed app in under an hour — without making it feel like magic, and without losing the room?',
    myRole: [
      'Session design — live build structure and pacing',
      'Live facilitation and real-time debugging in front of the room',
      'Tool selection and workflow design',
      'Supporting materials — prompt patterns and session recap',
    ],
    process: [
      'Scoped a build that would be visually impressive but genuinely achievable in session',
      'Live-built a working web app from a prompt using Cursor + Replit',
      'Narrated every decision — what to prompt, what to fix, what to ship',
      'Walked through debugging and iteration as a teachable loop',
      'Showed deployment to a live URL within the session window',
    ],
    tools: [
      { category: 'AI coding', items: ['Cursor', 'Replit', 'Gemini Canvas'] },
      { category: 'Workshop', items: ['Notion', 'Canva'] },
      { category: 'LLMs', items: ['Claude', 'Gemini'] },
    ],
    output:
      'One 90-minute live session with recording. Prompt workflow templates. Session recap. Working deployed app built live.',
    result:
      'Part of the HIKE GenAI program. Recording on YouTube. Participants built their first AI-assisted prototypes within a week of the session.',
    demonstrates:
      'AI-assisted development, live teaching, rapid prototyping demonstration, non-technical AI enablement.',
    hiringAudience:
      'AI Enablement Lead · AI Trainer · Creative Technologist · GenAI Educator',
    tags: ['Vibe Coding', 'Cursor', 'Replit', 'Workshop', 'AI Development'],
  },

  {
    id: 'ai-music-session',
    title: 'AI Music Production for Creators',
    slug: 'ai-music-session',
    category: 'Teach',
    oneLiner:
      'A live session on generative audio tools for creators — covering Suno AI, MusicFX, and real-time prompt-based music as a creative instrument.',
    thumbnail: ytThumb('Kmcr51RulUY'),
    youtubeId: 'Kmcr51RulUY',
    context:
      'Session 3 of the HIKE GenAI program. AI music tools had crossed a quality threshold where they were genuinely useful to creators, not just a curiosity. This session made them accessible to a mixed audience of founders, marketers, and practitioners.',
    problem:
      'How do you teach people to use AI music tools in a way that produces something they can actually use — campaign audio, demo soundtracks, presentation backgrounds — rather than just playing with a toy?',
    myRole: [
      'Session design — focus on practical output over exploration',
      'Live facilitation and demos',
      'Prompt architecture for music generation',
      'Workflow design: from idea to usable audio asset',
    ],
    process: [
      'Framed AI music as a production workflow, not a generation toy',
      'Live demos: generating campaign audio, background tracks, jingles from text prompts',
      'Walked through Suno AI for full tracks and MusicFX for real-time prompt mixing',
      'Showed how to refine, layer, and export AI-generated audio',
      'Connected the session to real use cases: social video, pitch decks, event content',
    ],
    tools: [
      { category: 'AI Audio', items: ['Suno AI', 'MusicFX'] },
      { category: 'Taught', items: ['ElevenLabs', 'Audacity'] },
      { category: 'Workshop', items: ['Notion', 'Canva'] },
    ],
    output:
      'One 90-minute live session with recording. Prompt workflow for music generation. Session recap with tool links and prompt templates.',
    result:
      'Part of the HIKE GenAI program. Recording on YouTube. Participants left with working audio assets and a repeatable prompting workflow.',
    demonstrates:
      'AI audio production, workshop design, creative tool enablement, practical AI adoption.',
    hiringAudience:
      'AI Enablement Lead · AI Music · Creative Technologist · GenAI Educator',
    tags: ['Suno AI', 'MusicFX', 'AI Music', 'Workshop', 'Audio Production'],
  },

  {
    id: 'ai-bootcamp',
    title: 'GenAI Bootcamp — 2 Days, Practical AI',
    slug: 'ai-bootcamp',
    category: 'Teach',
    oneLiner:
      'Designed and facilitated a 2-day intensive GenAI bootcamp for HIKE — covering research, coding, content, and creative AI workflows, with certificates and real project outputs.',
    thumbnail: ytThumb('nbsrds0E9Uc'),
    context:
      'The HIKE GenAI Bootcamp followed the three topic sessions and went deeper — two full days of guided practice, individual and team projects, and structured output. Designed for a mixed audience of founders, students, and practitioners.',
    problem:
      'How do you take people past "I understand AI tools" to "I have built something with AI that I will actually use" — in two days, with mixed skill levels, without losing cohesion or energy?',
    myRole: [
      'Full program design — agenda, tracks, project briefs, certificate structure',
      'Live facilitation across both days',
      'Prompt and workflow design per track',
      'Coaching and Q&A during project work sessions',
      'HIKEathon GenAI + Design Thinking coaching (annual 2-day event)',
    ],
    process: [
      'Day 1: Research + Content — deep dives on NotebookLM, content systems, and AI-assisted writing',
      'Day 2: Build + Create — vibe coding, AI music, and multimedia project work',
      'Project sessions — each participant built a real deliverable',
      'Certificate ceremony — digital badges for completion',
      'HIKEathon track — coached 7 founding teams through GenAI + Design Thinking sprints',
    ],
    tools: [
      { category: 'Research', items: ['NotebookLM'] },
      { category: 'Coding', items: ['Cursor', 'Replit', 'Gemini Canvas'] },
      { category: 'Audio', items: ['Suno AI', 'MusicFX'] },
      { category: 'Visual AI', items: ['Midjourney', 'Runway', 'ElevenLabs'] },
      { category: 'LLMs', items: ['Claude', 'ChatGPT', 'Gemini'] },
      { category: 'Workshop', items: ['Notion', 'Canva'] },
    ],
    output:
      '2-day bootcamp. 3 topic sessions (NotebookLM, Vibe Coding, AI Music). HIKEathon coaching. Digital certificates. Prompt libraries. Notion knowledge hub.',
    result:
      '50+ participants. 85% completion rate. 7 founding teams coached. Reusable learning systems for the HIKE community.',
    demonstrates:
      'AI enablement, curriculum development, learning systems, workshop design, practical AI adoption at scale.',
    hiringAudience:
      'AI Enablement Lead · AI Trainer · GenAI Educator · Learning Experience Designer · AI Adoption Consultant',
    tags: ['Bootcamp', 'Curriculum', 'AI Enablement', 'Workshop', 'Certificates'],
  },

  // ─── CAMPAIGN ────────────────────────────────────────────────────────────

  {
    id: 'hikemussbleiben',
    title: '#hikemussbleiben',
    slug: 'hikemussbleiben',
    category: 'Campaign',
    featured: true,
    oneLiner:
      'A funding advocacy campaign for HIKE — script, multi-speaker video, and social assets built to make an institutional case feel human and urgent.',
    thumbnail: ytThumb('PAKv8JecEQg'),
    youtubeId: 'PAKv8JecEQg',
    context:
      'HIKE faced a funding decision that could determine whether the incubator continued operating. I was responsible for all external communications. The campaign needed to be credible, emotional, and fast — built under pressure for an audience that included politicians, funders, and the local startup community.',
    problem:
      'How do you build a funding advocacy video that feels genuine — not like a PR piece — when you are working with real stakeholder voices, a fixed deadline, and no production budget?',
    myRole: [
      'Campaign strategy and narrative development',
      'Script writing and story structure',
      'Multi-speaker interview filming and direction',
      'Video editing — assembly, narrative arc, pacing',
      'Sound design and final mix',
      'Social asset adaptation for LinkedIn and Instagram',
    ],
    process: [
      'Narrative framing — defined the story: HIKE is more than an incubator, it is infrastructure',
      'Script and interview guide — wrote questions that would draw out real, quotable answers',
      'Filming — coordinated multi-speaker sessions with founders, coaches, and HIKE staff',
      'Edit — assembled 8+ hours of footage into a single coherent narrative',
      'Sound — mixed voice, ambient audio, and music for emotional arc',
      'Social — cut platform-specific versions for LinkedIn and Instagram distribution',
    ],
    tools: [
      { category: 'Video', items: ['CapCut', 'Adobe Premiere Pro'] },
      { category: 'Design', items: ['Canva', 'Adobe Creative Suite'] },
      { category: 'AI', items: ['Claude', 'ChatGPT'] },
    ],
    output:
      'Funding advocacy video. Platform-specific social cuts. Stakeholder distribution package. Supporting copy and captions.',
    result:
      'Video became HIKE\'s core advocacy tool for stakeholder meetings, grant applications, and community engagement. LinkedIn grew to 1,000+ followers.',
    demonstrates:
      'Campaign storytelling, video production, stakeholder communication, narrative structure, multi-speaker editing.',
    hiringAudience:
      'AI Marketing · Product Marketing · Content Systems · Campaign Manager · Communications',
    tags: ['Campaign', 'Video Production', 'Advocacy', 'Storytelling', 'Multi-channel'],
  },

  {
    id: 'hike-demo-day',
    title: 'HIKE Demo Day 2025',
    slug: 'hike-demo-day',
    category: 'Campaign',
    oneLiner:
      'Full campaign for HIKE Demo Day 2025 — promo video, recap video, landing page, and social assets for three distinct audiences: startups, investors, and the broader community.',
    thumbnail: ytThumb('CMLWaej0Ibw'),
    youtubeId: 'CMLWaej0Ibw',
    liveUrl: 'https://www.hike-startups.de/demo-day-2025',
    context:
      'HIKE Demo Day is the annual flagship event where startups pitch to investors and the public. I owned all external communications — from driving sign-ups before the event to keeping the community engaged after it.',
    problem:
      'How do you build campaign assets for a single event that serve three completely different audience needs — prospective investors, applying startups, and a general community — without losing a coherent event identity?',
    myRole: [
      'Campaign strategy and audience segmentation',
      'Landing page copy and visual structure',
      'Promo video — concept, shoot, edit, sound, final cut',
      'Recap video — filming on the day, edit, delivery',
      'Social asset creation — LinkedIn and Instagram cut-downs',
      'Stakeholder coordination with HIKE leadership and external speakers',
    ],
    process: [
      'Defined three audience narratives: startups (apply), investors (attend), community (follow along)',
      'Landing page — wrote and structured copy for hike-startups.de/demo-day-2025',
      'Promo video — produced for sign-up conversion before the event',
      'On-day filming — captured startup pitches, audience, and key moments',
      'Recap video — assembled post-event for ongoing community promotion',
      'Social cut-downs — adapted for LinkedIn format (square, subtitled, punchy) and Instagram',
    ],
    tools: [
      { category: 'Video', items: ['CapCut', 'Adobe Premiere Pro'] },
      { category: 'Design', items: ['Canva', 'Adobe Creative Suite'] },
      { category: 'AI', items: ['Claude', 'ChatGPT'] },
      { category: 'Analytics', items: ['LinkedIn Analytics', 'Meta Insights'] },
    ],
    output:
      'Promo video + recap video + full landing page + LinkedIn and Instagram social assets. All assets reused for subsequent events.',
    result:
      'Instagram grew to 800+ followers. Campaign assets continue to be reused for future HIKE events. Demo Day sold out sign-ups.',
    demonstrates:
      'Multi-channel campaign execution, video production, audience segmentation, landing page copy, social content systems.',
    hiringAudience:
      'AI Marketing · Product Marketing · Content Systems · Campaign Manager · Communications',
    tags: ['Campaign', 'Event Marketing', 'Video', 'Landing Page', 'Social'],
    link: 'https://www.hike-startups.de/demo-day-2025',
  },

  // ─── UX / SOUND ──────────────────────────────────────────────────────────

  {
    id: 'deegrow',
    title: 'DEEGRO.w! — Environmental Gamification',
    slug: 'deegrow',
    category: 'UX / Sound',
    oneLiner:
      'A gamification experience designed to raise environmental awareness — selected from 100+ international teams for the GIZ Innovation Fund and awarded Audience Choice.',
    context:
      'GIZ Innovation Fund Accelerator Programme 2023–24. One of six teams selected from 25+ international submissions. €10K funded. The challenge: translate complex environmental systems (deforestation, soil fertility, climate impact) into an engaging interactive experience accessible to rural communities.',
    problem:
      'How do you make climate systems tangible and motivating for people whose daily decisions directly shape those systems — without making the experience feel like a lecture or a warning?',
    myRole: [
      'UI/UX design — user journey mapping for multiple player roles',
      'Gamification mechanics — resource systems, decision consequences, role-play structures',
      'Rapid prototyping — LoFi board game → MidFi digital prototype → HiFi mobile design',
      'Co-creation facilitation — user testing and contextual feedback integration',
      'Product storytelling and pitch contribution',
      'Innovation Fund presentation and jury pitch',
    ],
    process: [
      'LoFi — board game prototype for rapid concept testing with users',
      'Iteration — co-creation sessions and contextual feedback integration',
      'MidFi — digital prototype with multiple player flows (Mayor, Ambassador, CEO, Contractor)',
      'HiFi — mobile game design for Android with resource systems, seasonal simulation, and multiple endings',
      'Visual design — UI for resource meters, event notifications, and ecosystem health indicators',
      'Pitch — presented to GIZ Innovation Fund jury against 100+ international teams',
    ],
    tools: [
      { category: 'Design', items: ['Figma'] },
      { category: 'Prototyping', items: ['Physical prototyping', 'Figma'] },
      { category: 'Presentation', items: ['Canva', 'Adobe CC'] },
    ],
    output:
      'LoFi board game concept. MidFi digital prototype. HiFi Android mobile game design with full UI, multiple player roles, resource systems, and branching endings. Pitch deck. GIZ Innovation Fund presentation.',
    result:
      'Audience Choice Award — competitive public vote. 1 of 6 teams selected from 25+ international applicants. €10K funded. Advanced through 3-phase accelerator. Designed for scalable deployment across African communities.',
    demonstrates:
      'UX design, gamification, rapid prototyping, user research, co-creation, product storytelling, innovation fund work.',
    hiringAudience:
      'UX Designer · Product Designer · Learning UX · Social Impact Tech · EdTech · Public Sector Innovation',
    tags: ['UX Design', 'Gamification', 'GIZ', 'Prototyping', 'Environmental Design'],
  },

  {
    id: 'hyperreal-audio',
    title: 'Research & Design for Hyperreal Audio',
    slug: 'hyperreal-audio',
    category: 'UX / Sound',
    oneLiner:
      "Master's thesis research on the psychoacoustics of immersion — investigating how spatial audio design creates the 'hyperreal' state where listeners cannot distinguish virtual from real soundscapes.",
    link: 'https://drive.google.com/file/d/1PTpqpzcgR6kwyUgYsSvLFj1ay5lJMQd5/view?usp=drive_link',
    context:
      'A rigorous qualitative investigation into how human perception of reality is altered in VR/AR-ready auditory environments. The project combines advanced spatial audio production (Ambisonics and Binaural) with user-centric design research into the "hyperreal" state — the threshold where a listener cannot distinguish a recorded soundscape from physical reality.',
    problem:
      'What are the specific design decisions that cause a listener to fully enter a hyperreal immersive state — and which decisions break it? And can those decisions be systematized into a design framework for spatial audio?',
    myRole: [
      'Research design — within-subjects study across two physical locations',
      'Spatial audio production — two high-fidelity scenes using Ambisonics and Binaural techniques',
      'DAW production — Reaper with IEM Binaural Decoder and Dear VR Pro',
      'Hardware operation — Zoom H3-VR, Roland CS-10EM, HRTF rendering',
      'Qualitative research — 24 semi-structured interviews, thematic analysis',
      'Thesis writing and design framework development',
    ],
    process: [
      'Produced two distinct auditory scenes: Scene 1 (Binaural) and Scene 2 (Ambisonics)',
      'Designed within-subjects study protocol — Eyes Open vs Eyes Closed, near-field vs far-field sound placement',
      'Conducted 24 semi-structured interviews across two physical locations (in-situ and ex-situ)',
      'Applied thematic analysis to identify what drives and breaks immersion',
      'Mapped findings to Bolter and Grusin\'s Immediacy-Hypermediacy framework',
      'Derived design principles: memory-driven realism, adaptive audio necessity, near-field rendering priority',
    ],
    tools: [
      { category: 'DAW', items: ['Reaper'] },
      { category: 'Spatial Audio', items: ['IEM Binaural Decoder', 'Dear VR Pro'] },
      { category: 'Hardware', items: ['Zoom H3-VR', 'Roland CS-10EM'] },
      { category: 'Format', items: ['Ambisonics (B-Format/AmbiX)', 'Binaural', 'HRTF'] },
      { category: 'Research', items: ['Thematic Analysis', 'Semi-structured Interviews'] },
    ],
    output:
      'Two high-fidelity spatial audio scenes. Within-subjects study with 24 participants. Full thesis with design framework. Binaural and Ambisonics audio samples. Design principles for hyperreal audio environments.',
    result:
      'Completed Master\'s thesis. Design framework applicable to VR/AR audio, adaptive sound engines, and spatial audio production. Full thesis and audio samples available on Google Drive.',
    demonstrates:
      'Spatial audio production, UX research methodology, psychoacoustics, VR/AR audio design, qualitative research, design framework development.',
    hiringAudience:
      'Sound Designer · Spatial Audio Engineer · VR/AR Audio · UX Researcher · Immersive Experience Designer',
    tags: ['Spatial Audio', 'Binaural', 'Ambisonics', 'UX Research', 'VR/AR Audio'],
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
