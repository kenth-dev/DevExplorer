# Product Requirements Document (PRD)
## DevExplorer — Interactive Programming Language Explorer for Senior High School Students

**Version:** 1.0  
**Date:** March 9, 2026  
**Status:** Draft  

---

## 1. Overview

### 1.1 Product Summary

DevExplorer is a single-page educational web application designed for Senior High School students as an introduction to programming languages. It showcases the syntax of multiple programming languages in an interactive, VS Code-inspired IDE simulation, helping students understand what programming looks like and which career paths each language leads to.

### 1.2 Target Audience

- Senior High School students (ages 15–18)
- No prior programming experience assumed
- Likely browsing on desktop at school or mobile at home

### 1.3 Goals

- Demystify programming by showing familiar "Hello World" code in multiple languages
- Help students identify which language aligns with their career interests
- Create a visually engaging experience that makes coding feel exciting and approachable
- Serve as a guided, self-paced exploration tool

---

## 2. Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Framework | React + TypeScript | Type safety, component reusability |
| Build Tool | Vite | Fast dev server, optimized production builds |
| Styling | Tailwind CSS | Utility-first, great for dark/cyberpunk themes |
| Syntax Highlighting | Prism.js or Shiki | Professional language-aware code coloring |
| Animation | Framer Motion (light use) | Smooth, performant transitions |
| Deployment Target | Vercel / Netlify / GitHub Pages | Static site, zero backend needed |

> **Note:** Shiki is recommended over Prism.js for this project because it uses VS Code's exact tokenizer engine and produces identical syntax colors to real VS Code — reinforcing the IDE illusion. It also supports all 12 target languages out of the box.

---

## 3. Design System

### 3.1 Theme: Dark Cyberpunk Terminal

| Token | Value | Usage |
|---|---|---|
| Background | `#0d0d1a` | Page background |
| Surface | `#12121f` | IDE panels, cards |
| Surface Elevated | `#1a1a2e` | Active tabs, hover states |
| Border | `#2a2a4a` | Panel borders, dividers |
| Accent Cyan | `#00f5ff` | Primary neon glow, active states |
| Accent Purple | `#bd00ff` | Secondary highlights |
| Accent Green | `#00ff88` | Code strings, success states |
| Text Primary | `#e2e8f0` | Body text |
| Text Muted | `#64748b` | Comments, placeholder text |
| Font — UI | `Inter` or `JetBrains Mono` | Navigation, labels |
| Font — Code | `JetBrains Mono` or `Fira Code` | All code content |

### 3.2 Animation Philosophy

Keep it **subtle and performant**. No heavy effects. All animations should use CSS transforms and opacity only (GPU-accelerated). No JavaScript-driven per-frame animations.

| Effect | Where | Implementation |
|---|---|---|
| Neon glow pulse | Accent text, borders | CSS `box-shadow` keyframe, 3s loop |
| Typing cursor blink | Hero subheading | CSS `opacity` keyframe |
| Fade + slide up | Section entrance | Framer Motion, `once: true`, 400ms |
| Tab transition | IDE editor area | CSS `opacity` + `translateY`, 150ms |
| Hover glow | Language file items, cards | CSS `transition` on `box-shadow` |
| Glitch text | "HELLO WORLD" hero title | CSS glitch keyframe, subtle, plays once on load |

---

## 4. Page Sections

### 4.1 Section 1 — Hero

**Purpose:** Hook the student with a memorable, visually bold introduction.

**Layout:** Full viewport height (`100vh`), centered content, dark background with subtle grid or dot pattern.

**Content:**

```
[Glitch animation, large display font]
HELLO WORLD

[Subheading with typing cursor]
This is the first line of code most programmers learn.

[Body text]
Printing is how programming languages display text on screen.
Here is how to print "Hello World" in different programming languages ↓
```

**Visual Details:**
- "HELLO WORLD" uses the accent cyan color with a subtle neon glow and a one-time glitch animation on page load
- Subheading has a blinking cursor at the end
- A subtle animated grid or scanline overlay on the background (CSS only, low opacity)
- A scroll-down arrow CTA that bounces gently

---

### 4.2 Section 2 — Interactive IDE

**Purpose:** The core interactive feature. A simulated VS Code-style IDE where students explore Hello World syntax across 12 programming languages.

#### 4.2.1 IDE Structure

```
┌─────────────────────────────────────────────────────────────┐
│  [Title Bar]  DevExplorer IDE          [● ● ●] window dots  │
├──────────────┬──────────────────────────────────────────────┤
│              │ [Tab Bar] Welcome ×  |  python.py ×  | ...   │
│  [Sidebar]   ├──────────────────────────────────────────────┤
│              │                                              │
│  EXPLORER    │         [Editor Area]                        │
│              │                                              │
│  ▼ PROGRAMMING│        (Shows Welcome tab or file content)  │
│    LANGUAGES │                                              │
│              │                                              │
│   python.py  │                                              │
│   javascript │                                              │
│   php.php    │                                              │
│   java.java  │                                              │
│   c.c        │                                              │
│   cpp.cpp    │                                              │
│   typescript │                                              │
│   ruby.rb    │                                              │
│   go.go      │                                              │
│   rust.rs    │                                              │
│   swift.swift│                                              │
│              ├──────────────────────────────────────────────┤
│              │ [Status Bar] ◉ main  UTF-8  language name    │
└──────────────┴──────────────────────────────────────────────┘
```

#### 4.2.2 IDE Components

**Title Bar**
- Project name: `DevExplorer IDE`
- Decorative macOS-style window dots (red, yellow, green) — non-functional
- Subtle gradient border bottom

**Sidebar — File Explorer**
- Header label: `EXPLORER`
- One folder: `📁 PROGRAMMING LANGUAGES` (always open, not collapsible)
- 12 file items with language-appropriate icons or colored dots
- Active file is highlighted with accent color left border
- Hover state: soft glow on file row

**Tab Bar**
- Starts with one tab: `Welcome` (always present, cannot be closed)
- New tabs open when a file is clicked
- Tabs are closeable with `×` button (except Welcome)
- Active tab has bottom border in accent cyan
- Tab overflow: horizontal scroll (no wrapping)

**Editor Area**
- Line numbers column (text-muted color)
- Code content with full syntax highlighting via Shiki
- Monospace font throughout
- Scrollable vertically if content is long

**Status Bar**
- Left: branch icon + `main`
- Right: encoding (`UTF-8`) + current language name
- Thin bar at bottom, dark surface color

#### 4.2.3 Welcome Tab Content

The Welcome tab is shown by default and explains how to use the IDE. It should be styled as a markdown-like document rendered inside the editor — not code, but formatted text.

```
Welcome to DevExplorer IDE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👋 What is this?
This is an interactive code explorer built for students like you.
Here you can browse real programming syntax in a simulated code editor.

📁 How to explore languages
Look at the left sidebar under "PROGRAMMING LANGUAGES"
Click any file to open it in a new tab and see the code!

💬 What are comments?
Comments are notes that programmers write in their code for humans to read.
The computer ignores them completely.
In most languages, comments start with // or #

    // This is a comment in JavaScript, Java, C, C++, Go, Rust, Swift
    # This is a comment in Python, Ruby
    -- This is a comment in some other languages

📌 What will I see in each file?
Each file contains a "Hello World" program — the very first thing most
programmers learn to write. It also includes comments explaining:
  • What the language is used for
  • Where it is most popular
  • Who typically uses it

🚀 Ready to start?
Click any language file on the left to begin exploring!
```

#### 4.2.4 Language Files

Each language file contains:
1. A block comment at the top explaining the language (what it's for, where it's used)
2. The Hello World print statement
3. Inline comments annotating what each line does

**Language file specifications:**

| File | Language | Color Accent | Primary Use (shown in comment) |
|---|---|---|---|
| `python.py` | Python | Yellow | Data Science, AI, Automation |
| `javascript.js` | JavaScript | Yellow | Web (Frontend + Backend) |
| `php.php` | PHP | Indigo | Web Backend, CMS (WordPress) |
| `java.java` | Java | Orange | Android, Enterprise Software |
| `c.c` | C | Blue | Operating Systems, Embedded |
| `cpp.cpp` | C++ | Blue | Game Engines, Systems Programming |
| `typescript.ts` | TypeScript | Blue | Large-scale Web Applications |
| `ruby.rb` | Ruby | Red | Web Apps (Rails), Scripting |
| `go.go` | Go | Cyan | Cloud Infrastructure, APIs |
| `rust.rs` | Rust | Orange | Systems, WebAssembly, Safety-critical |
| `swift.swift` | Swift | Orange | iOS / macOS App Development |

**Example — python.py:**
```python
# ============================================
# Python
# ============================================
# Created by: Guido van Rossum (1991)
# 
# WHERE IS PYTHON USED?
#   - Data Science and Machine Learning (most popular language for AI)
#   - Web Development (Django, Flask frameworks)
#   - Automation and scripting
#   - Scientific research and academia
#
# Python is known for its clean, readable syntax —
# it reads almost like plain English.
# ============================================

# The print() function displays text on the screen
print("Hello, World!")

# That's it! In Python, one line is all you need.
# No semicolons, no curly braces — just clean code.
```

#### 4.2.5 Mobile Behavior

On screens < 768px:
- Sidebar is hidden by default
- A top bar shows a dropdown/button to select a language file
- Editor takes full width
- Tab bar still shows, simplified (only show active tab name)
- Status bar hidden on mobile

---

### 4.3 Section 3 — Career Path Cards

**Purpose:** Help students map languages to real career paths so they can start thinking about their future direction.

**Layout:** Responsive grid — 3 columns on desktop, 2 on tablet, 1 on mobile.

**Cards:**

| Career Path | Languages Used | Description |
|---|---|---|
| 🌐 Web Development | JavaScript, TypeScript, PHP, Ruby | Build websites, web apps, and online platforms |
| 📱 Mobile Development | Swift, Java, Kotlin | Create apps for iPhone and Android devices |
| 🤖 AI & Data Science | Python, R | Train machine learning models, analyze data |
| 🎮 Game Development | C++, C#, Lua | Build video games and game engines |
| ☁️ Cloud & DevOps | Go, Python, Bash | Manage servers, build APIs, automate infrastructure |
| 🔒 Cybersecurity | Python, C, Bash | Protect systems, find vulnerabilities, ethical hacking |
| 🖥️ Systems Programming | C, C++, Rust | Build operating systems, compilers, low-level tools |
| 🏢 Enterprise Software | Java, C#, TypeScript | Large-scale business applications |

**Card Structure:**
```
┌──────────────────────────┐
│  [Icon]  Career Title    │
│ ─────────────────────    │
│ Short 1-line description │
│                          │
│  Languages:              │
│  [tag] [tag] [tag]       │
└──────────────────────────┘
```

Language tags are colored pills that match the language's accent color from the IDE section. Hovering a card shows a subtle neon border glow.

---

### 4.4 Footer

- Project name: `DevExplorer`
- Short tagline: `Built to inspire the next generation of developers.`
- Optional: GitHub repo link

---

## 5. Component Architecture (React)

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx           # Full hero section
│   │   └── GlitchText.tsx     # Animated glitch title
│   │
│   ├── IDE/
│   │   ├── IDE.tsx            # Container, manages open tabs + active file state
│   │   ├── TitleBar.tsx       # Window title + decorative dots
│   │   ├── Sidebar.tsx        # File explorer + file list
│   │   ├── TabBar.tsx         # Open tabs + close button
│   │   ├── Editor.tsx         # Code/welcome content display
│   │   ├── WelcomeTab.tsx     # Welcome screen content
│   │   ├── StatusBar.tsx      # Bottom status bar
│   │   └── LineNumbers.tsx    # Line number column
│   │
│   ├── CareerCards/
│   │   ├── CareerSection.tsx  # Section wrapper + grid
│   │   └── CareerCard.tsx     # Individual card
│   │
│   └── Footer/
│       └── Footer.tsx
│
├── data/
│   ├── languages.ts           # Language metadata + code content
│   └── careers.ts             # Career path data
│
├── hooks/
│   └── useTabs.ts             # Tab open/close/switch logic
│
├── types/
│   └── index.ts               # Shared TypeScript interfaces
│
├── styles/
│   └── globals.css            # Tailwind base + custom keyframes
│
└── App.tsx
```

---

## 6. Data Structures (TypeScript)

```typescript
// types/index.ts

export interface Language {
  id: string;               // e.g. "python"
  label: string;            // e.g. "Python"
  filename: string;         // e.g. "python.py"
  extension: string;        // e.g. ".py"
  shikiLanguage: string;    // e.g. "python" (Shiki identifier)
  accentColor: string;      // Tailwind color class
  code: string;             // Full file content as string
  usedFor: string[];        // Short tags: ["Data Science", "AI"]
}

export interface CareerPath {
  id: string;
  title: string;
  icon: string;             // Emoji or icon name
  description: string;
  languages: string[];      // Array of language IDs
}

export interface Tab {
  id: string;               // Matches language.id, or "welcome"
  label: string;            // Tab display name
  closeable: boolean;
}
```

---

## 7. State Management

No external state library needed. Use React `useState` and `useReducer` only.

| State | Location | Description |
|---|---|---|
| `openTabs` | `IDE.tsx` | Array of open `Tab` objects |
| `activeTabId` | `IDE.tsx` | Currently visible tab ID |
| `activeFileId` | `IDE.tsx` | Currently selected file in sidebar |

**Default state on mount:**
- `openTabs = [{ id: "welcome", label: "Welcome", closeable: false }]`
- `activeTabId = "welcome"`

**On file click in sidebar:**
1. If file tab already open → switch to it
2. If not open → push new tab to `openTabs`, set as `activeTabId`

**On tab close:**
1. Remove from `openTabs`
2. If it was active → switch to previous tab or Welcome

---

## 8. Performance Constraints

- No heavy animations (no matrix rain, no particle systems)
- Shiki syntax highlighting must be loaded asynchronously — show a loading skeleton in editor while Shiki initializes
- All language code content is stored as static strings in `data/languages.ts` — no runtime fetching
- Images/icons: SVG only, no raster images
- Lighthouse Performance target: ≥ 90 on desktop, ≥ 80 on mobile
- First Contentful Paint target: < 1.5s

---

## 9. Accessibility

- All interactive elements (file items, tabs, cards) are keyboard navigable
- `aria-label` on all icon-only buttons
- Sufficient color contrast on all text (WCAG AA minimum)
- Tab order follows visual flow

---

## 10. Out of Scope (v1.0)

- User authentication or saved progress
- Editable code (read-only IDE only)
- Running/executing code
- Dark/light theme toggle
- Backend or database of any kind
- More than 11 languages

---

## 11. Prompt for VS Code Copilot / Claude Opus

When prompting your AI assistant inside VS Code with the empty project folder, use the following base prompt:

```
You are helping me build a single-page web application called DevExplorer.
It is an educational tool for Senior High School students to explore programming
language syntax and career paths.

Tech stack: React, TypeScript, Vite, Tailwind CSS, Shiki (syntax highlighting),
Framer Motion (subtle animations only).

Design theme: Dark cyberpunk terminal. Primary background #0d0d1a, accent cyan
#00f5ff, accent purple #bd00ff. Font: JetBrains Mono for code, Inter for UI.

The app has three sections:
1. Hero — "HELLO WORLD" with glitch animation, subheading with typing cursor
2. IDE Simulator — VS Code-style editor with sidebar file explorer (11 language
   files), tab system, Welcome tab, syntax highlighting, line numbers, status bar
3. Career Cards — grid of 8 career paths showing which languages are used

For the IDE:
- Sidebar shows a folder "PROGRAMMING LANGUAGES" with 11 clickable language files
- Clicking a file opens a new tab showing Hello World code with comments
- Welcome tab is default and explains how to use the IDE
- Tab system: open on click, closeable, switch on click, Welcome uncloseable
- Mobile: hide sidebar, show language dropdown instead

All animations must be subtle and CSS/GPU-accelerated only. No heavy effects.
Target Lighthouse Performance score ≥ 90 on desktop.

Please begin by scaffolding the full project structure with all components,
data files, and types as defined. Start with the data layer (languages.ts,
careers.ts) first, then components bottom-up.
```

---

## 12. Milestones

| Phase | Deliverable |
|---|---|
| 1 | Project scaffold: Vite + React + TS + Tailwind setup, folder structure, types |
| 2 | Data layer: `languages.ts` (all 11 files with full code), `careers.ts` |
| 3 | IDE component: Sidebar + TabBar + Editor + WelcomeTab + StatusBar |
| 4 | Hero section: GlitchText + typing animation |
| 5 | Career cards section |
| 6 | Mobile responsiveness pass |
| 7 | Performance audit + Lighthouse check |
| 8 | Final polish: animations, spacing, typography |
