Got it — let’s do a fully expanded plan in Markdown, where each milestone is broken into very clear, detailed steps. This way you can drop the file into Cursor and work through it milestone by milestone.

Here’s the PLAN.md:

⸻


# Design System → Figma Plugin → Live Prototype → React Components

This plan breaks down the project into **milestones**, each with detailed steps, deliverables, and notes.  
It’s designed to be tackled iteratively — you can stop at the end of any milestone and still have a working artifact.

---

## Milestone 1 — Foundations (Tokens + Primitives)

### Goals
- Capture your in-house design system into tokens (colors, spacing, typography, etc.).
- Export those tokens so both Figma and React can use them.
- Create a single source of truth.

### Steps
1. **Create tokens folder**

/packages
/tokens
tokens.json
build.js

2. **Write tokens.json**
Start small: colors, radius, spacing.
```json
{
  "color": {
    "brand": { "500": "#6D5EF3" },
    "neutral": { "0": "#FFFFFF", "900": "#000000" }
  },
  "radius": { "md": "8px" },
  "space": { "4": "16px" }
}

	3.	Build script
Translate JSON → CSS variables.
Example build.js:

import fs from "fs";
const tokens = JSON.parse(fs.readFileSync("./tokens.json", "utf8"));
let css = ":root {\n";
for (const [group, values] of Object.entries(tokens)) {
  for (const [name, val] of Object.entries(values)) {
    if (typeof val === "object") {
      for (const [sub, subVal] of Object.entries(val)) {
        css += `  --${group}-${name}-${sub}: ${subVal};\n`;
      }
    } else {
      css += `  --${group}-${name}: ${val};\n`;
    }
  }
}
css += "}\n";
fs.writeFileSync("./tokens.css", css);
console.log("✅ Built tokens.css");


	4.	Run build

node build.js


	5.	Import into React

import "../tokens/tokens.css";



Deliverables
	•	tokens.json (source of truth)
	•	tokens.css (usable in code)
	•	Ready for use in Figma Variables later

⸻

Milestone 2 — Component Schema

Goals
	•	Define how components are described in a machine-readable way.
	•	Map props → tokens → Figma + React.

Steps
	1.	Create schema folder

/packages
  /schema
    components.json


	2.	Write minimal schema
Example: Button

{
  "button": {
    "anatomy": ["root", "label"],
    "props": {
      "variant": ["solid", "outline"],
      "size": ["sm", "md"]
    },
    "tokens": {
      "solid": {
        "bg": "color.brand.500",
        "text": "color.neutral.0",
        "radius": "radius.md",
        "px": "space.4"
      },
      "outline": {
        "border": "color.neutral.900",
        "text": "color.neutral.900",
        "radius": "radius.md",
        "px": "space.4"
      }
    }
  }
}


	3.	Validate schema
	•	Props are clear and finite.
	•	Tokens point to your tokens.json.
	•	Can be read by both Figma plugin and React generator.

Deliverables
	•	components.json describing at least one component.

⸻

Milestone 3 — React Components

Goals
	•	Create real React components that consume tokens.
	•	Begin with Button as the test case.

Steps
	1.	Set up UI package

/packages
  /ui
    Button.tsx


	2.	Implement Button

type ButtonProps = {
  variant?: "solid" | "outline";
  size?: "sm" | "md";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant="solid", size="md", className, ...rest }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium";
  const sizeCls = size === "sm" ? "h-8 px-[var(--space-4)]" : "h-10 px-[var(--space-4)]";
  const variantCls =
    variant === "solid"
      ? "bg-[var(--color-brand-500)] text-[var(--color-neutral-0)] rounded-[var(--radius-md)]"
      : "border border-[var(--color-neutral-900)] text-[var(--color-neutral-900)] rounded-[var(--radius-md)]";

  return <button className={`${base} ${sizeCls} ${variantCls} ${className||""}`} {...rest} />;
}


	3.	Test in site
	•	Add /site/pages/button.tsx.
	•	Import <Button> and test both variants.

Deliverables
	•	A working Button component.
	•	Tokens used in live styling.

⸻

Milestone 4 — Figma Plugin (MVP)

Goals
	•	Create a Figma plugin that can insert components using your schema + tokens.
	•	Start with Button.

Steps
	1.	Create plugin folder

/plugin
  manifest.json
  code.ts
  ui.html


	2.	Manifest.json

{
  "name": "In-House System",
  "id": "in.house.plugin",
  "api": "1.0.0",
  "main": "code.js",
  "ui": "ui.html",
  "editorType": ["figma", "figjam"]
}


	3.	UI (simple HTML for now)

<button id="insert">Insert Button</button>
<script>
  document.getElementById("insert").onclick = () => {
    parent.postMessage({ pluginMessage: { type: "insert", component: "button" } }, "*");
  };
</script>


	4.	Code.ts

figma.ui.onmessage = (msg) => {
  if (msg.type === "insert" && msg.component === "button") {
    const frame = figma.createFrame();
    frame.resize(100, 40);
    frame.cornerRadius = 8; // replace with tokens later
    const text = figma.createText();
    text.characters = "Button";
    frame.appendChild(text);
    figma.currentPage.appendChild(frame);
  }
};



Deliverables
	•	Plugin that inserts a simple Button frame into Figma.

⸻

Milestone 5 — Live Prototype Playground

Goals
	•	Public site to demo components + themes.
	•	Allow prop and theme switching.

Steps
	1.	Site setup

/site
  pages/index.tsx
  pages/button.tsx


	2.	Add prop toggles
Example:

import { useState } from "react";
import { Button } from "ui/Button";

export default function ButtonPage() {
  const [variant, setVariant] = useState("solid");
  const [size, setSize] = useState("md");
  return (
    <div>
      <select value={variant} onChange={e=>setVariant(e.target.value)}>
        <option value="solid">Solid</option>
        <option value="outline">Outline</option>
      </select>
      <select value={size} onChange={e=>setSize(e.target.value)}>
        <option value="sm">Small</option>
        <option value="md">Medium</option>
      </select>
      <Button variant={variant} size={size}>Hello</Button>
    </div>
  );
}


	3.	Theme toggle
	•	Add [data-theme="light"] and [data-theme="dark"] with different :root CSS vars.
	•	Toggle via a button.

Deliverables
	•	Interactive demo site.
	•	Users can flip props + theme and see changes instantly.

⸻

Milestone 6 — QA + Governance

Goals
	•	Ensure consistency between Figma + code.
	•	Add testing and versioning.

Steps
	1.	Visual regression testing with Chromatic or Playwright.
	2.	Accessibility tests with React Testing Library.
	3.	Weekly token diff check to catch drift.
	4.	Semantic versioning for tokens and components.
	5.	Docs for both designers and developers.

Deliverables
	•	Stable release pipeline.
	•	Clear guidelines for updates.
	•	Versioned design system.

⸻

Suggested Timeline
	•	Day 1: Milestone 1 (tokens) + Milestone 2 (schema)
	•	Day 2: Milestone 3 (React Button)
	•	Day 3: Milestone 4 (Plugin MVP)
	•	Day 4: Milestone 5 (Prototype site)
	•	Day 5: Milestone 6 (QA + governance)

⸻

Repo Structure

/packages
  /tokens        # JSON tokens + build to CSS/TS
  /schema        # components.json
  /ui            # React components
/plugin          # Figma plugin (manifest, code.ts, ui.html)
/site            # Next.js site playground

---

## 📅 Project Diary - August 21, 2025

### ✅ **Milestone A & B COMPLETED!**

**What We Built:**
- **Design Tokens System**: `packages/tokens/` with JSON → CSS variables
- **Button Component**: React component with variant/size props using CSS variables
- **Live Playground**: Next.js site with real-time component testing
- **Theme System**: Light/dark mode toggle working
- **Figma Plugin Stub**: Basic plugin structure ready for testing

**Key Files Created:**
```
/packages
  /tokens
    tokens.json          # Design tokens source
    build.js            # JSON → CSS converter
    tokens.css          # Generated CSS variables
  /schema
    components.json     # Component definitions
  /ui
    Button.tsx         # React Button component
    index.ts           # Package exports

/plugin
  manifest.json        # Figma plugin config
  ui.html             # Plugin UI
  code.ts             # Plugin logic

/site
  /components
    /ui
      Button.tsx       # Local Button for playground
    ThemeProvider.tsx  # Theme context
  /pages
    _app.tsx          # App wrapper
    index.tsx         # Main playground
  /styles
    globals.css       # CSS variables + utilities
  package.json        # Next.js dependencies
  next.config.js      # Next.js config
  tsconfig.json       # TypeScript config
```

**What's Working:**
- 🎨 Button component with live variant/size switching
- 🌓 Theme toggle (light/dark) with CSS variable updates
- 📊 Token preview showing CSS variables in action
- 🚀 Real-time updates as you change props
- 🔧 Build system for tokens (JSON → CSS)

**Technical Wins:**
- Solved import path issues between packages
- Set up proper Next.js configuration
- Created working theme context with CSS variables
- Established token → component → playground pipeline

**Next Steps Available:**
1. **Expand Tokens**: Add typography, shadows, more colors
2. **More Components**: Input, Card, etc.
3. **Test Figma Plugin**: Load plugin in Figma
4. **Schema Expansion**: Add more component definitions

**Current Status**: Foundation complete! Design system is live and interactive. Ready for component expansion and Figma integration.

---