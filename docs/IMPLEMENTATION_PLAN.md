# Implementation Plan — AV.AI Portfolio

---

## Phase 1: Data Layer (DONE — now updating with real content)

### src/data/projects.ts
Extended Project interface to include:
- thumbnail: YouTube thumbnail URL or asset import path
- youtubeId: primary video embed ID
- videos: array of {label, youtubeId} for multi-video case studies
- liveUrl: live demo link (separate from festival/external link)
- myRole: array of role items
- process: array of process steps
- tools: array of {category, items}
- hiringAudience: string

### File locations
- src/data/projects.ts — all project data (Tier 1 + 2)
- src/data/lab.ts — lab experiments

---

## Phase 2: Components

### Layout components (complete)
- src/components/layout/Navbar.tsx
- src/components/layout/Footer.tsx
- src/components/layout/AppLayout.tsx

### Page components (updating with real content)
- src/pages/Home.tsx — real thumbnails on ProjectCard
- src/pages/WorkIndex.tsx — real thumbnails on cards
- src/pages/CaseStudy.tsx — YouTube embeds, real images, role/process/tools sections
- src/pages/Lab.tsx — YouTube thumbnails on lab cards
- src/pages/About.tsx

---

## Phase 3: Assets

### YouTube thumbnails (used as img src, no API key needed)
Format: https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg

| Project | Video ID |
|---|---|
| CTRL+ALT+DEITY.EXE (film) | YzSH_73PjT0 |
| Fractal Breaths (demo) | JMQZOoShScQ |
| AI Music Jam | oehw1PPcZr4 |
| #hikemussbleiben | PAKv8JecEQg |
| HIKE Demo Day | CMLWaej0Ibw |
| Session 1 NotebookLM | nbsrds0E9Uc |
| Session 2 Vibe Coding | uJw1flGmltE |
| Session 3 AI Music | Kmcr51RulUY |

### Local assets (copied to public/)
- GrooveBox Magic screenshots

---

## Phase 4: Case Study page upgrades
- Hero image replaced with YouTube thumbnail or img
- YouTube embed block added where video exists
- Role list displayed as bullet list in sidebar
- Process steps displayed as numbered sequence
- Tools displayed as grouped badges
- Multi-video grids for GenAI Bootcamp case study

---

## Priority order
1. Update projects.ts with full real content + thumbnails
2. Update ProjectCard to show real thumbnails
3. Update CaseStudy.tsx to show video embeds + structured sections
4. Update Lab.tsx with real thumbnails
5. Remaining editorial polish
