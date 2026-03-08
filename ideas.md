# Design Ideas — Tapang Ivo Tanku Personal Website

## Context
Academic personal website for Dr. Tapang Ivo Tanku, PhD Researcher at University at Buffalo, SUNY.
Focus: International Security, AI, Political Science, Crisis Bargaining.
Tone: Scholarly, authoritative, intellectually serious — not a tech startup portfolio.

---

<response>
<text>
## Idea A — "The Scholar's Codex"

**Design Movement:** Neo-Brutalist Academic — raw structure meets intellectual gravitas

**Core Principles:**
1. Stark contrast between ink-black text and off-white parchment — no softening
2. Asymmetric column layouts that feel like a journal layout, not a website
3. Bold typographic hierarchy as the primary visual element
4. Deliberate use of ruled lines and section dividers as structural ornaments

**Color Philosophy:**
- Background: warm off-white (#F7F4EF) — parchment, not sterile white
- Primary text: near-black (#1A1A1A)
- Accent: deep burgundy (#7C2D3B) — academic authority, not tech blue
- Secondary: muted slate (#4A5568)
- Highlight: aged gold (#B8962E) for citations and links

**Layout Paradigm:**
- Left-heavy asymmetric grid: large name/title block on left, nav on right
- Sections use alternating full-bleed and contained widths
- Timeline for experience rendered as a vertical ruled ledger

**Signature Elements:**
1. Thick horizontal rules with small diamond ornaments at section breaks
2. Monospaced font for labels/metadata (institution names, years, tags)
3. Pull-quote style callouts for research abstracts

**Interaction Philosophy:**
- Hover states reveal underlines that draw in from left
- Smooth scroll with no jarring jumps
- Active nav item marked with a small filled circle

**Animation:**
- Fade-up on scroll (subtle, 400ms, no bounce)
- Nav underline slides in on hover (200ms ease)
- No parallax or heavy motion

**Typography System:**
- Display: Playfair Display (serif, bold) — headings, name
- Body: Source Serif 4 (readable, scholarly)
- Mono: JetBrains Mono (tags, years, labels)
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## Idea B — "Deep Field" (CHOSEN)

**Design Movement:** Dark Academic Cosmos — the intersection of rigorous scholarship and the vast unknown

**Core Principles:**
1. Deep navy/midnight background evokes both the cosmos and the gravitas of security studies
2. Crisp white and luminous accent text creates high-contrast readability
3. Subtle particle/star field background reinforces the "deep research" aesthetic
4. Clean geometric structure with generous whitespace — disciplined, not cluttered

**Color Philosophy:**
- Background: deep navy #0B1120 (near-black with blue undertone — depth without pure black)
- Hero gradient: #0B1120 → #0F1E3C (subtle depth shift)
- Primary text: #F0F4FF (cool white — crisp against dark)
- Accent: #4A9EFF (electric blue — intelligence, precision, technology)
- Secondary accent: #7ECBA1 (soft teal — warmth, approachability)
- Muted text: rgba(240,244,255,0.6)
- Card backgrounds: rgba(255,255,255,0.04) with subtle border

**Layout Paradigm:**
- Full-width hero with photo on right, text on left (asymmetric split)
- Sticky top navigation with blur backdrop
- Sections alternate between dark and slightly lighter dark backgrounds
- Experience rendered as a vertical timeline with connecting line
- Skills in a clean grid of category cards

**Signature Elements:**
1. Subtle animated star/particle field in hero background
2. Glowing accent borders on cards and active nav items
3. Monospaced font for technical labels, years, and tags

**Interaction Philosophy:**
- Cards lift slightly on hover with glow intensification
- Nav items get an underline glow on hover
- Smooth section transitions

**Animation:**
- Hero text fades up on load (staggered, 600ms)
- Scroll-triggered fade-up for sections (threshold 0.1)
- Star particles animate slowly (no distracting motion)
- Card hover: translateY(-4px) + box-shadow intensify (200ms ease)

**Typography System:**
- Display: Fraunces (variable serif — scholarly, distinctive, not generic)
- Body: DM Sans (clean, modern, highly legible)
- Mono: JetBrains Mono (tags, years, code references)
</text>
<probability>0.09</probability>
</response>

<response>
<text>
## Idea C — "Meridian"

**Design Movement:** Swiss International + Academic Minimalism

**Core Principles:**
1. Pure white background with maximum typographic clarity
2. A single strong accent color used sparingly for maximum impact
3. Grid-based layout with deliberate column breaks
4. Information hierarchy through size and weight, not color

**Color Philosophy:**
- Background: pure white #FFFFFF
- Text: #111827 (near-black)
- Accent: #1D4ED8 (classic academic blue — trustworthy, institutional)
- Border/divider: #E5E7EB
- Muted: #6B7280

**Layout Paradigm:**
- Narrow left sidebar for navigation (fixed on desktop)
- Main content scrolls in the right 75% of the screen
- Dense information layout — academic CV style

**Signature Elements:**
1. Thin 1px ruled lines as section separators
2. Small square bullets for list items
3. Year/date labels in small caps

**Interaction Philosophy:**
- Minimal — content is the focus
- Hover states are subtle color shifts only

**Animation:**
- None beyond basic scroll fade

**Typography System:**
- Display: GT Sectra (editorial serif)
- Body: Inter (clean, readable)
- Mono: Fira Code
</text>
<probability>0.05</probability>
</response>

---

## Selected Design: **Idea B — "Deep Field"**

Dark Academic Cosmos aesthetic. Deep navy background, electric blue accents, Fraunces + DM Sans typography, animated star field hero, asymmetric layout with photo on right.
