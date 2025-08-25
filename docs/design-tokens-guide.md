# House Design System - Design Tokens Guide

> A comprehensive guide to using the House Design System design tokens in your web projects.

## 🚀 Quick Start

### Installation
```bash
npm install @house-design-system/tokens
```

### Basic Usage
```javascript
import { colors, typography, spacing, radius, shadows } from '@house-design-system/tokens';

const buttonStyle = {
  backgroundColor: colors.brand[500],
  padding: `${spacing[4]} ${spacing[6]}`,
  borderRadius: radius.lg,
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize.lg,
  boxShadow: shadows.md
};
```

## 🎨 Color System

### Brand Colors (Purple Scale)
```javascript
colors.brand = {
  50: "#F3F1FF",   // Lightest purple
  100: "#E6E2FF",  // Very light purple
  200: "#D1C9FF",  // Light purple
  300: "#B5A8FF",  // Medium light purple
  400: "#9B89FF",  // Medium purple
  500: "#6D5EF3",  // Primary brand color
  600: "#5B4AE6",  // Dark purple
  700: "#4A39D9",  // Darker purple
  800: "#3D2CC2",  // Very dark purple
  900: "#2F1FA3"   // Darkest purple
}
```

### Neutral Colors (Grayscale)
```javascript
colors.neutral = {
  0: "#FFFFFF",    // Pure white
  50: "#FAFAFA",   // Off-white
  100: "#F5F5F5",  // Very light gray
  200: "#E5E5E5",  // Light gray
  300: "#D4D4D4",  // Medium light gray
  400: "#A3A3A3",  // Medium gray
  500: "#737373",  // True gray
  600: "#525252",  // Medium dark gray
  700: "#404040",  // Dark gray
  800: "#262626",  // Very dark gray
  900: "#171717",  // Almost black
  950: "#0A0A0A"   // Deep black
}
```

### Accent Colors (Orange Scale)
```javascript
colors.accent = {
  50: "#FFF7ED",   // Lightest orange
  100: "#FFEDD5",  // Very light orange
  200: "#FED7AA",  // Light orange
  300: "#FDBA74",  // Medium light orange
  400: "#FB923C",  // Medium orange
  500: "#F97316",  // Primary accent
  600: "#EA580C",  // Dark orange
  700: "#C2410C",  // Darker orange
  800: "#9A3412",  // Very dark orange
  900: "#7C2D12"   // Darkest orange
}
```

### Success Colors (Green Scale)
```javascript
colors.success = {
  50: "#F0FDF4",   // Lightest green
  100: "#DCFCE7",  // Very light green
  200: "#BBF7D0",  // Light green
  300: "#86EFAC",  // Medium light green
  400: "#4ADE80",  // Medium green
  500: "#22C55E",  // Primary success
  600: "#16A34A",  // Dark green
  700: "#15803D",  // Darker green
  800: "#166534",  // Very dark green
  900: "#14532D"   // Darkest green
}
```

### Warning Colors (Yellow Scale)
```javascript
colors.warning = {
  50: "#FFFBEB",   // Lightest yellow
  100: "#FEF3C7",  // Very light yellow
  200: "#FDE68A",  // Light yellow
  300: "#FCD34D",  // Medium light yellow
  400: "#FBBF24",  // Medium yellow
  500: "#F59E0B",  // Primary warning
  600: "#D97706",  // Dark yellow
  700: "#B45309",  // Darker yellow
  800: "#92400E",  // Very dark yellow
  900: "#78350F"   // Darkest yellow
}
```

### Danger Colors (Red Scale)
```javascript
colors.danger = {
  50: "#FEF2F2",   // Lightest red
  100: "#FEE2E2",  // Very light red
  200: "#FECACA",  // Light red
  300: "#FCA5A5",  // Medium light red
  400: "#F87171",  // Medium red
  500: "#EF4444",  // Primary danger
  600: "#DC2626",  // Dark red
  700: "#B91C1C",  // Darker red
  800: "#991B1B",  // Very dark red
  900: "#7F1D1D"   // Darkest red
}
```

## 📝 Typography System

### Font Families
```javascript
typography.fontFamily = {
  display: "Microgramma, Arial Black, sans-serif",    // Strong, architectural headings
  heading: "Eurostile, Arial Black, sans-serif",      // Luxury, stylized text
  body: "Inter, SF Pro Text, Arial, sans-serif",      // Readable content
  ui: "SF Pro Display, Segoe UI, Arial, sans-serif"   // Interface elements
}
```

### Font Sizes
```javascript
typography.fontSize = {
  xs: "12px",      // Extra small
  sm: "14px",      // Small
  base: "16px",    // Base size
  lg: "18px",      // Large
  xl: "20px",      // Extra large
  "2xl": "24px",   // 2X large
  "3xl": "30px",   // 3X large
  "4xl": "36px",   // 4X large
  "5xl": "48px",   // 5X large
  "6xl": "60px"    // 6X large
}
```

### Font Weights
```javascript
typography.fontWeight = {
  light: 300,      // Light
  normal: 400,     // Regular
  medium: 500,     // Medium
  semibold: 600,   // Semi-bold
  bold: 700,       // Bold
  extrabold: 800   // Extra bold
}
```

### Line Heights
```javascript
typography.lineHeight = {
  none: 1,         // Single line
  tight: 1.25,     // Tight spacing
  snug: 1.375,     // Snug spacing
  normal: 1.5,     // Normal spacing
  relaxed: 1.625,  // Relaxed spacing
  loose: 2         // Loose spacing
}
```

### Letter Spacing
```javascript
typography.letterSpacing = {
  tighter: -0.05,  // Tighter spacing
  tight: -0.025,   // Tight spacing
  normal: 0,       // Normal spacing
  wide: 0.025,     // Wide spacing
  wider: 0.05,     // Wider spacing
  widest: 0.1      // Widest spacing
}
```

## 📏 Spacing System

### Spacing Scale
```javascript
spacing = {
  4: "1rem",       // 16px
  6: "1.5rem",     // 24px
  8: "2rem",       // 32px
  10: "2.5rem",    // 40px
  12: "3rem",      // 48px
  16: "4rem",      // 64px
  20: "5rem",      // 80px
  24: "6rem",      // 96px
  32: "8rem",      // 128px
  40: "10rem",     // 160px
  48: "12rem",     // 192px
  56: "14rem"      // 224px
}
```

## 🔲 Border Radius System

### Radius Scale
```javascript
radius = {
  none: "0px",     // No radius
  sm: "0.125rem",  // 2px
  base: "0.25rem", // 4px
  md: "0.375rem",  // 6px
  lg: "0.5rem",    // 8px
  xl: "0.75rem",   // 12px
  "2xl": "1rem",   // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px"   // Fully rounded
}
```

## 🌟 Shadow System

### Shadow Scale
```javascript
shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",                    // Small shadow
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", // Base shadow
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Medium shadow
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // Large shadow
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // Extra large shadow
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",           // 2X large shadow
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",            // Inner shadow
  none: "none"                                                  // No shadow
}
```

## 💻 Usage Examples

### React Component
```jsx
import React from 'react';
import { colors, spacing, typography, radius } from '@house-design-system/tokens';

const Button = ({ children, variant = 'primary' }) => {
  const buttonStyle = {
    backgroundColor: variant === 'primary' ? colors.brand[500] : colors.neutral[200],
    color: variant === 'primary' ? colors.neutral[0] : colors.neutral[900],
    padding: `${spacing[4]} ${spacing[6]}`,
    borderRadius: radius.lg,
    fontFamily: typography.fontFamily.ui,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };

  return (
    <button style={buttonStyle}>
      {children}
    </button>
  );
};
```

### CSS Custom Properties
```css
/* Import the tokens */
@import '@house-design-system/tokens/tokens.css';

.my-component {
  background-color: var(--color-brand-500);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-family: var(--typography-fontFamily-heading);
  font-size: var(--typography-fontSize-lg);
  box-shadow: var(--shadow-md);
}

.my-component:hover {
  background-color: var(--color-brand-600);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### JavaScript Object
```javascript
import tokens from '@house-design-system/tokens/tokens.json';

const theme = {
  primary: tokens.colors.brand[500],
  secondary: tokens.colors.neutral[600],
  spacing: tokens.spacing[4],
  borderRadius: tokens.radius.lg
};

// Apply to DOM element
const element = document.querySelector('.my-element');
element.style.backgroundColor = theme.primary;
element.style.padding = theme.spacing;
element.style.borderRadius = theme.borderRadius;
```

## 🎯 Common Patterns

### Color Combinations
```javascript
// Primary button
const primaryButton = {
  backgroundColor: colors.brand[500],
  color: colors.neutral[0],
  border: `1px solid ${colors.brand[600]}`
};

// Secondary button
const secondaryButton = {
  backgroundColor: colors.neutral[100],
  color: colors.neutral[900],
  border: `1px solid ${colors.neutral[300]}`
};

// Success button
const successButton = {
  backgroundColor: colors.success[500],
  color: colors.neutral[0],
  border: `1px solid ${colors.success[600]}`
};
```

### Typography Scale
```javascript
// Heading hierarchy
const h1 = {
  fontFamily: typography.fontFamily.display,
  fontSize: typography.fontSize["4xl"],
  fontWeight: typography.fontWeight.extrabold,
  lineHeight: typography.lineHeight.tight,
  letterSpacing: typography.letterSpacing.wide
};

const h2 = {
  fontFamily: typography.fontFamily.heading,
  fontSize: typography.fontSize["3xl"],
  fontWeight: typography.fontWeight.bold,
  lineHeight: typography.lineHeight.tight
};

const body = {
  fontFamily: typography.fontFamily.body,
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.normal,
  lineHeight: typography.lineHeight.normal
};
```

### Spacing Patterns
```javascript
// Card layout
const card = {
  padding: spacing[6],
  marginBottom: spacing[4],
  borderRadius: radius.lg
};

// Form layout
const form = {
  padding: spacing[8],
  gap: spacing[4]
};

// Button groups
const buttonGroup = {
  gap: spacing[3],
  padding: spacing[4]
};
```

## 🔧 Integration Methods

### 1. NPM Package (Recommended)
```bash
npm install @house-design-system/tokens
```

### 2. CSS Import
```css
@import '@house-design-system/tokens/tokens.css';
```

### 3. Direct Import
```javascript
import { colors, spacing, typography } from '@house-design-system/tokens';
```

### 4. JSON Import
```javascript
import tokens from '@house-design-system/tokens/tokens.json';
```

## 📚 Additional Resources

- **Figma Plugin**: Install the House Design System plugin in Figma
- **Component Library**: Use pre-built components with consistent styling
- **Design Tokens**: All tokens are available in the `packages/tokens/` directory
- **CSS Variables**: Use CSS custom properties for dynamic theming

## 🤝 Contributing

The House Design System is designed to be:
- **Consistent**: All components follow the same design principles
- **Scalable**: Tokens can be easily extended and modified
- **Accessible**: Colors and typography meet accessibility standards
- **Professional**: Suitable for luxury automotive and high-end brands

---

*For more information, visit the [House Design System repository](https://github.com/house-design-system/figma-plugin)*
