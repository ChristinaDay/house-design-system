# Figma Plugin Architecture Guide
*House Design System Plugin Documentation*

## Overview

This document explains how our House Design System Figma plugin is structured, how the files work together, and the development workflow for making changes.

## Project Structure

```
House Design System/
├── plugin/                    # Main plugin directory
│   ├── manifest.json         # Plugin metadata & configuration
│   ├── code.ts              # TypeScript source code (what we edit)
│   ├── code.js              # Compiled JavaScript (what Figma runs)
│   ├── ui.html              # Plugin user interface
│   ├── tsconfig.json        # TypeScript compiler settings
│   ├── package.json         # Dependencies & build scripts
│   └── node_modules/        # Installed dependencies
├── site/                     # Design token playground (Next.js)
├── fonts/                    # Custom font files
└── journals/                 # Documentation & notes
```

## Core Plugin Files

### 1. `manifest.json` - Plugin Metadata
**Purpose**: Tells Figma how to load and run the plugin

```json
{
  "name": "House Design System",
  "id": "house.design.system.plugin",
  "api": "1.0.0",
  "main": "code.js",              ← Entry point (compiled JS)
  "ui": "ui.html",                ← User interface file
  "editorType": ["figma", "figjam"],
  "capabilities": [],
  "enableProposedApi": false
}
```

**Key Points**:
- `main` points to the compiled JavaScript file, NOT the TypeScript source
- `ui` specifies the HTML file for the plugin interface
- Changes here require plugin reload in Figma

### 2. `code.ts` - Plugin Logic (TypeScript Source)
**Purpose**: Contains all plugin functionality, design tokens, and component creation logic

**Structure**:
```typescript
// Design Tokens (extracted from tokens.css)
const colors = { ... }
const typography = { ... }
const spacing = { ... }

// Font Loading System
async function loadDesignSystemFonts() { ... }

// Component Creation Functions
async function createButton() { ... }
async function createCard() { ... }

// Message Handling
figma.ui.onmessage = async (msg) => { ... }
```

**Key Points**:
- This is what we edit when making changes
- Must be compiled to JavaScript before Figma can use it
- Contains complete design token system
- Handles font loading with fallbacks

### 3. `code.js` - Compiled JavaScript
**Purpose**: The actual code that Figma executes

**Important**:
- 🚨 **This is what Figma actually runs, NOT the TypeScript file**
- Generated automatically by TypeScript compiler
- Must be regenerated whenever `code.ts` changes
- If compilation fails, changes won't take effect

### 4. `ui.html` - Plugin Interface
**Purpose**: The visual interface users see in Figma

**Structure**:
```html
<!-- CSS using design tokens -->
<style>
  :root {
    --color-brand-500: #6D5EF3;
    /* ... other tokens ... */
  }
</style>

<!-- Component buttons -->
<div class="component-item" onclick="createComponent('create-button')">
  Button
</div>

<!-- JavaScript for communication -->
<script>
  function createComponent(type) {
    parent.postMessage({ pluginMessage: { type: type } }, '*');
  }
</script>
```

**Key Points**:
- Uses design tokens for consistent styling
- Sends messages to `code.js` via `postMessage`
- Organized by component categories

## Plugin Workflow

### User Interaction Flow
```
1. User clicks button in ui.html
         ↓
2. ui.html sends message to code.js via postMessage
         ↓
3. code.js receives message in figma.ui.onmessage handler
         ↓
4. code.js executes appropriate function (e.g., createButton)
         ↓
5. Function creates Figma elements using design tokens
         ↓
6. code.js sends success/error notification back to ui.html
         ↓
7. ui.html displays status to user
```

### Message Communication
**UI to Plugin Code**:
```javascript
// ui.html
parent.postMessage({ 
  pluginMessage: { type: 'create-button' } 
}, '*');
```

**Plugin Code Response**:
```typescript
// code.ts
figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case 'create-button':
      await createButton();
      figma.notify("✅ Button created!");
      break;
  }
};
```

## Development Workflow

### Making Changes to Plugin Logic

1. **Edit TypeScript Source**:
   ```bash
   # Edit the source file
   code.ts
   ```

2. **Compile to JavaScript**:
   ```bash
   cd plugin/
   npx tsc
   ```

3. **Reload Plugin in Figma**:
   - Close and reopen plugin in Figma
   - Or use Figma's plugin development tools

### ⚠️ Common Issues

**Changes Not Taking Effect**:
- Check if TypeScript compilation succeeded
- Verify `code.js` was actually updated
- Ensure plugin was reloaded in Figma

**Compilation Errors**:
- Check TypeScript errors with `npx tsc`
- Verify `tsconfig.json` settings
- Check for syntax errors in `code.ts`

**Font Loading Issues**:
- Custom fonts may not be available in Figma
- Plugin uses fallback fonts when custom fonts fail
- Check console for font loading messages

## Design Token System

### Token Structure
Our design tokens are organized in JavaScript objects:

```typescript
const colors = {
  brand: { 50: "#F3F1FF", 500: "#6D5EF3", ... },
  neutral: { 0: "#FFFFFF", 900: "#171717", ... },
  // ... other color palettes
};

const typography = {
  fontSize: { xs: 12, base: 16, xl: 20, ... },
  fontWeight: { normal: 400, bold: 700, ... },
  // ... other typography properties
};
```

### Font Family Handling
**Important**: Figma typography tokens handle size/weight/spacing but NOT font families.

```typescript
const fontFamilies = {
  display: {
    fonts: [
      { family: "Eurostile-Regular-Italic", style: "Regular" },
      // ... variants
    ],
    fallback: "Arial Black"
  },
  // ... other font types
};
```

### Component Creation
Each component uses design tokens:

```typescript
async function createButton() {
  const button = figma.createFrame();
  button.resize(120, spacing[10]);           // Design token spacing
  button.cornerRadius = radius.md;           // Design token radius
  button.fills = [{ 
    type: "SOLID", 
    color: hexToRgb(colors.brand[500])      // Design token color
  }];
  
  const text = figma.createText();
  await applyFont(text, "ui", "medium");     // Custom font system
  applyTypography(text, "base", "medium");   // Typography tokens
}
```

## Troubleshooting

### Typography Component Errors
**Common Issues**:
- Font loading failures (custom fonts not available)
- Complex spacing calculations
- Text overflow or positioning problems

**Solutions**:
- Check font loading in browser console
- Verify typography token values
- Test with system fonts first

### Plugin Not Loading
**Check**:
1. `manifest.json` syntax is valid
2. `code.js` exists and is up-to-date
3. Plugin is properly installed in Figma
4. No JavaScript errors in console

### Changes Not Appearing
**Verify**:
1. TypeScript compiled successfully (`npx tsc`)
2. `code.js` file timestamp is recent
3. Plugin was reloaded in Figma
4. No compilation errors

## File Dependencies

```
code.ts  →  [tsc compile]  →  code.js  →  [Figma loads]  →  Plugin runs
   ↑                                                           ↓
   └── We edit this                                           └── Users see this

ui.html  →  [Figma loads]  →  Plugin UI  →  [postMessage]  →  code.js
   ↑                                                           ↓
   └── We edit this                                           └── Executes functions
```

## Next Steps

When debugging issues:
1. Check which file actually needs editing (`code.ts` vs `ui.html`)
2. Verify compilation worked (`code.js` updated)
3. Test with simplified examples first
4. Use browser/Figma console for error messages
5. Ensure plugin reload after changes

---

*This documentation should be updated as the plugin architecture evolves.*