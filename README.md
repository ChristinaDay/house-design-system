# House Design System

A comprehensive design system that bridges design tokens, Figma plugins, and React components with a live playground for experimentation.

## 🎯 Project Overview

This project implements a complete design system workflow:
1. **Design Tokens** → Centralized source of truth for design decisions
2. **Figma Plugin** → Design tool integration
3. **Live Prototype** → Next.js playground for testing tokens and components
4. **React Components** → Reusable UI components that consume design tokens

## 🏗️ Project Structure

```
House Design System/
├── packages/
│   ├── tokens/           # Design tokens (JSON + CSS variables)
│   ├── schema/           # Component schema definitions
│   └── ui/               # React component library
├── plugin/               # Figma plugin for design system integration
├── site/                 # Next.js playground and documentation
└── journals/             # Project documentation and planning
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Figma (for plugin testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "House Design System"
   ```

2. **Install dependencies**
   ```bash
   # Install site dependencies
   cd site
   npm install
   
   # Install plugin dependencies (if needed)
   cd ../plugin
   npm install
   ```

3. **Start the development server**
   ```bash
   cd ../site
   npm run dev
   ```

4. **Open the playground**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Tokens

### Structure
Design tokens are defined in `packages/tokens/tokens.json` and include:
- **Colors**: Brand, neutral, accent, success, warning, danger scales
- **Typography**: Font sizes, weights, and families
- **Spacing**: Consistent spacing scale (0px to 96px)
- **Shadows**: Elevation and depth variations
- **Radius**: Border radius scale for rounded corners

### Usage
```css
/* CSS Variables */
.button {
  background-color: var(--color-brand-500);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
```

## 🔌 Figma Plugin

The Figma plugin allows designers to:
- Insert design system components directly into Figma
- Maintain consistency between design and development
- Bridge the gap between design tools and code

### Development
```bash
cd plugin
npm run build
```

## 🧪 Live Playground

The Next.js playground provides:
- **Token Showcase**: Visual representation of all design tokens
- **Component Testing**: Interactive testing of UI components
- **Spacing Examples**: Real component contexts for spacing
- **Typography Demo**: Font families, sizes, and weights
- **Shadow & Radius**: Visual previews of elevation and rounding

### Features
- **Color Swatches**: With hex codes and CSS variables
- **Typography**: Font families with specific names (San Francisco, SF Mono)
- **Spacing**: Component context examples (buttons, cards, forms)
- **Shadows**: Visual previews with usage descriptions
- **Radius**: Border radius examples with usage guidance

## 🧩 React Components

### Button Component
```tsx
import { Button } from '../components/ui/Button';

<Button variant="solid" size="md" destructive>
  Delete Item
</Button>
```

**Variants**: solid, outline, ghost, accent
**Sizes**: xs, sm, md, lg
**Props**: destructive, disabled

## 📚 Available Scripts

### Site (Next.js Playground)
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

### Plugin
```bash
npm run build    # Build Figma plugin
npm run watch    # Watch for changes
```

## 🎯 Design System Principles

1. **Token-First**: All design decisions start with design tokens
2. **Component-Driven**: Reusable components that consume tokens
3. **Visual Consistency**: Unified spacing, typography, and color systems
4. **Developer Experience**: Clear documentation and live examples
5. **Design Integration**: Figma plugin for seamless design workflow

## 🔄 Development Workflow

1. **Update Design Tokens** in `packages/tokens/tokens.json`
2. **Rebuild CSS Variables** (if needed)
3. **Test in Playground** at `/tokens`
4. **Update Components** to use new tokens
5. **Commit Changes** with descriptive messages

## 📝 Contributing

1. Make changes to design tokens or components
2. Test in the live playground
3. Commit with clear messages describing the changes
4. Update documentation as needed

## 📄 License

This project is part of your design system development process.

## 🆘 Support

For questions or issues:
1. Check the playground for examples
2. Review the design token definitions
3. Test components in the interactive demo

---

**Built with**: Next.js, React, TypeScript, Tailwind CSS, Figma Plugin API
