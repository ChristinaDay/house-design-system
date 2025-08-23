// House Design System - Figma Plugin
// Rebuilt with comprehensive design tokens and proper typography handling

figma.showUI(__html__, { width: 420, height: 680 });

// =============================================================================
// DESIGN TOKENS - Extracted from your tokens.css
// =============================================================================

// Color System - Complete palette from tokens.css
const colors = {
  brand: {
    50: "#F3F1FF", 100: "#E6E2FF", 200: "#D1C9FF", 300: "#B5A8FF", 400: "#9B89FF",
    500: "#6D5EF3", 600: "#5B4AE6", 700: "#4A39D9", 800: "#3D2CC2", 900: "#2F1FA3"
  },
  neutral: {
    0: "#FFFFFF", 50: "#FAFAFA", 100: "#F5F5F5", 200: "#E5E5E5", 300: "#D4D4D4",
    400: "#A3A3A3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626",
    900: "#171717", 950: "#0A0A0A"
  },
  accent: {
    50: "#FFF7ED", 100: "#FFEDD5", 200: "#FED7AA", 300: "#FDBA74", 400: "#FB923C",
    500: "#F97316", 600: "#EA580C", 700: "#C2410C", 800: "#9A3412", 900: "#7C2D12"
  },
  success: {
    50: "#F0FDF4", 100: "#DCFCE7", 200: "#BBF7D0", 300: "#86EFAC", 400: "#4ADE80",
    500: "#22C55E", 600: "#16A34A", 700: "#15803D", 800: "#166534", 900: "#14532D"
  },
  warning: {
    50: "#FFFBEB", 100: "#FEF3C7", 200: "#FDE68A", 300: "#FCD34D", 400: "#FBBF24",
    500: "#F59E0B", 600: "#D97706", 700: "#B45309", 800: "#92400E", 900: "#78350F"
  },
  danger: {
    50: "#FEF2F2", 100: "#FEE2E2", 200: "#FECACA", 300: "#FCA5A5", 400: "#F87171",
    500: "#EF4444", 600: "#DC2626", 700: "#B91C1C", 800: "#991B1B", 900: "#7F1D1D"
  }
};

// Typography Scale - Exact values from tokens.css
const typographyScale = {
  fontSize: { 
    xs: 12, sm: 14, base: 16, lg: 18, xl: 20, 
    "2xl": 24, "3xl": 30, "4xl": 36, "5xl": 48, "6xl": 60 
  },
  fontWeight: { 
    light: 300, normal: 400, medium: 500, 
    semibold: 600, bold: 700, extrabold: 800 
  },
  lineHeight: { 
    none: 1, tight: 1.25, snug: 1.375, 
    normal: 1.5, relaxed: 1.625, loose: 2 
  },
  letterSpacing: { 
    tighter: -0.05, tight: -0.025, normal: 0, 
    wide: 0.025, wider: 0.05, widest: 0.1 
  }
};

// Font Families - Semantic mapping to reliable Figma fonts
const fontFamilies = {
  display: {
    name: "Display",
    description: "Luxury, stylized text for hero content",
    fonts: [
      { family: "Arial Black", style: "Regular" },      // Bold, impactful
      { family: "Impact", style: "Regular" },           // Strong presence
      { family: "Helvetica", style: "Bold" },           // Clean bold
    ]
  },
  heading: {
    name: "Heading", 
    description: "Strong, architectural headings",
    fonts: [
      { family: "Arial", style: "Bold" },               // Reliable bold
      { family: "Helvetica", style: "Bold" },           // Clean alternative
      { family: "SF Pro Display", style: "Bold" },      // macOS system
    ]
  },
  body: {
    name: "Body",
    description: "Readable text for content",
    fonts: [
      { family: "Inter", style: "Regular" },            // Popular, readable
      { family: "SF Pro Text", style: "Regular" },      // macOS system
      { family: "Arial", style: "Regular" },            // Universal fallback
    ]
  },
  ui: {
    name: "UI",
    description: "Clean interface elements",
    fonts: [
      { family: "SF Pro Display", style: "Regular" },   // macOS UI font
      { family: "Segoe UI", style: "Regular" },          // Windows UI font
      { family: "Arial", style: "Regular" },            // Universal fallback
    ]
  }
};

// Spacing Scale - Complete scale from tokens.css
const spacing = {
  0: 0, px: 1, 0.5: 2, 1: 4, 1.5: 6, 2: 8, 2.5: 10, 3: 12, 3.5: 14,
  4: 16, 5: 20, 6: 24, 7: 28, 8: 32, 9: 36, 10: 40, 11: 44, 12: 48,
  14: 56, 16: 64, 20: 80, 24: 96, 28: 112, 32: 128, 36: 144, 40: 160,
  44: 176, 48: 192, 52: 208, 56: 224, 60: 240, 64: 256, 72: 288, 80: 320, 96: 384
};

// Border Radius - All values from tokens.css
const radius = {
  none: 0, sm: 2, base: 4, md: 6, lg: 8, 
  xl: 12, "2xl": 16, "3xl": 24, full: 9999
};

// Shadow System - All variants from tokens.css
const shadows = {
  xs: { offset: { x: 0, y: 1 }, radius: 2, color: { r: 0, g: 0, b: 0, a: 0.05 } },
  sm: { offset: { x: 0, y: 1 }, radius: 3, color: { r: 0, g: 0, b: 0, a: 0.1 } },
  base: { offset: { x: 0, y: 4 }, radius: 6, color: { r: 0, g: 0, b: 0, a: 0.1 } },
  md: { offset: { x: 0, y: 10 }, radius: 15, color: { r: 0, g: 0, b: 0, a: 0.1 } },
  lg: { offset: { x: 0, y: 20 }, radius: 25, color: { r: 0, g: 0, b: 0, a: 0.1 } },
  xl: { offset: { x: 0, y: 25 }, radius: 50, color: { r: 0, g: 0, b: 0, a: 0.25 } },
  "2xl": { offset: { x: 0, y: 25 }, radius: 50, color: { r: 0, g: 0, b: 0, a: 0.25 } },
  inner: { offset: { x: 0, y: 2 }, radius: 4, color: { r: 0, g: 0, b: 0, a: 0.05 } }
};

// =============================================================================
// FONT LOADING SYSTEM
// =============================================================================

async function loadSystemFonts(): Promise<void> {
  console.log("🎨 Loading House Design System fonts...");
  
  // Step 1: Load system fonts first (required)
  const systemFonts = [
    { family: "Arial", style: "Regular" },
    { family: "Arial", style: "Bold" },
    { family: "Inter", style: "Regular" }
  ];
  
  for (const font of systemFonts) {
    try {
      await figma.loadFontAsync({ family: font.family, style: font.style });
      console.log(`✅ System font: ${font.family} ${font.style}`);
    } catch (error) {
      console.log(`⚠️ System font unavailable: ${font.family} ${font.style}`);
    }
  }
  
  // Step 2: Load your custom House Design System fonts (matching exact file names)
  const customFonts = [
    // Eurostile variants (Display) - Luxury automotive
    { family: "Eurostile Extd", style: "Regular Italic" },
    { family: "Eurostile", style: "Medium Italic" },
    { family: "Eurostile", style: "BoldItalic" },
    
    // Microgramma variants (Heading) - Architectural strength  
    { family: "Microgram DB", style: "Regular" },
    { family: "MicrogrammaEF Extend", style: "Medium" },
    { family: "MicrogrammaEF Extend", style: "Bold" },
    
    // Futura Std variants (UI) - Clean interface
    { family: "Futura Std", style: "Book" },
    { family: "Futura Std", style: "Medium" },
    { family: "Futura Std", style: "Bold" },
  ];
  
  let customFontsLoaded = 0;
  for (const font of customFonts) {
    try {
      await figma.loadFontAsync({ family: font.family, style: font.style });
      console.log(`🎨 Custom font: ${font.family} ${font.style}`);
      customFontsLoaded++;
    } catch (error) {
      console.log(`⚠️ Custom font not available: ${font.family} ${font.style}`);
    }
  }
  
  console.log(`✅ Font loading complete: ${customFontsLoaded}/${customFonts.length} custom fonts loaded`);
}

// Apply semantic fonts with proper custom fonts and fallbacks
async function applyFont(
  textNode: TextNode, 
  fontType: keyof typeof fontFamilies, 
  weight: keyof typeof typographyScale.fontWeight = "normal"
): Promise<void> {
  const family = fontFamilies[fontType];
  
  // Map weight to specific font files for each family
  let customFontName = "";
  let customStyle = "Regular";
  
  switch (fontType) {
    case "display":
      // Use Eurostile for display text (luxury automotive)
      if (weight === "bold" || weight === "extrabold") {
        customFontName = "Eurostile";
        customStyle = "BoldItalic";
      } else if (weight === "medium" || weight === "semibold") {
        customFontName = "Eurostile";
        customStyle = "Medium Italic";
      } else {
        customFontName = "Eurostile Extd";
        customStyle = "Regular Italic";
      }
      break;
      
    case "heading":
      // Use Microgramma variants for headings (architectural strength)
      if (weight === "bold" || weight === "extrabold") {
        customFontName = "MicrogrammaEF Extend";
        customStyle = "Bold";
      } else if (weight === "medium" || weight === "semibold") {
        customFontName = "MicrogrammaEF Extend";
        customStyle = "Medium";
      } else {
        customFontName = "Microgram DB";
        customStyle = "Regular";
      }
      break;
      
    case "body":
      // Use Inter for body text (loaded and reliable)
      const interStyle = (weight === "bold" || weight === "extrabold") ? "Bold" : "Regular";
      try {
        textNode.fontName = { family: "Inter", style: interStyle };
        console.log(`✅ Applied ${fontType}: Inter ${interStyle}`);
        return;
      } catch (error) {
        customFontName = ""; // Will fall back to Arial
      }
      break;
      
    case "ui":
      // Use Futura Std for UI text (clean interface)
      if (weight === "bold" || weight === "extrabold") {
        customFontName = "Futura Std";
        customStyle = "Bold";
      } else if (weight === "medium" || weight === "semibold") {
        customFontName = "Futura Std";
        customStyle = "Medium";
      } else {
        customFontName = "Futura Std";
        customStyle = "Book";
      }
      break;
  }
  
  // Try custom font first
  if (customFontName) {
    try {
      textNode.fontName = { family: customFontName, style: customStyle };
      console.log(`✅ Applied ${fontType}: ${customFontName} ${customStyle}`);
      return;
    } catch (error) {
      console.log(`⚠️ Custom font ${customFontName} ${customStyle} not available, using fallback`);
    }
  }
  
  // Fallback to Arial with appropriate weight
  const arialStyle = (weight === "bold" || weight === "extrabold") ? "Bold" : "Regular";
  try {
    textNode.fontName = { family: "Arial", style: arialStyle };
    console.log(`🔄 Applied ${fontType}: Arial ${arialStyle} (fallback)`);
  } catch (error) {
    console.log(`❌ Even Arial failed for ${fontType}`);
  }
}

// Apply complete typography styling
function applyTypography(
  textNode: TextNode,
  size: keyof typeof typographyScale.fontSize,
  weight: keyof typeof typographyScale.fontWeight = "normal",
  lineHeight: keyof typeof typographyScale.lineHeight = "normal",
  letterSpacing: keyof typeof typographyScale.letterSpacing = "normal"
): void {
  // Font size
  textNode.fontSize = typographyScale.fontSize[size];
  
  // Line height (converted to pixels)
  const lineHeightValue = typographyScale.lineHeight[lineHeight] * typographyScale.fontSize[size];
  textNode.lineHeight = { value: lineHeightValue, unit: "PIXELS" };
  
  // Letter spacing (converted to pixels)
  const letterSpacingValue = typographyScale.letterSpacing[letterSpacing] * typographyScale.fontSize[size];
  textNode.letterSpacing = { value: letterSpacingValue, unit: "PIXELS" };
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

function hexToRgb(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255
    };
  }
  return { r: 0, g: 0, b: 0 };
}

function createShadow(shadowType: keyof typeof shadows): DropShadowEffect | InnerShadowEffect {
  const shadow = shadows[shadowType];
  if (shadowType === "inner") {
    return {
      type: "INNER_SHADOW",
      color: shadow.color,
      offset: shadow.offset,
      radius: shadow.radius,
      visible: true,
      blendMode: "NORMAL"
    };
  }
  return {
    type: "DROP_SHADOW",
    color: shadow.color,
    offset: shadow.offset,
    radius: shadow.radius,
    visible: true,
    blendMode: "NORMAL"
  };
}

// =============================================================================
// COMPONENT CREATION FUNCTIONS
// =============================================================================

async function createButton(): Promise<void> {
  console.log("🔘 Creating Button component...");
  
  const button = figma.createFrame();
  button.name = "Button • Primary Solid";
  button.resize(120, spacing[10] as number); // height: var(--spacing-10)
  button.cornerRadius = radius.md;
  
  // Brand color background
  button.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[500]) }];
  
  // Add shadow
  button.effects = [createShadow("sm")];
  
  // Create button text
  const text = figma.createText();
  text.characters = "Button";
  text.x = spacing[4] as number; // px-4
  text.y = ((spacing[10] as number) - typographyScale.fontSize.base) / 2; // Center vertically
  
  // Apply typography
  await applyFont(text, "ui", "medium");
  applyTypography(text, "base", "medium", "none", "normal");
  text.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
  
  button.appendChild(text);
  figma.currentPage.appendChild(button);
  figma.currentPage.selection = [button];
  
  console.log("✅ Button component created");
}

async function createInput(): Promise<void> {
  console.log("📝 Creating Input component...");
  
  const input = figma.createFrame();
  input.name = "Input • Text Field";
  input.resize(240, spacing[10] as number);
  input.cornerRadius = radius.base;
  
  // Background and border
  input.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
  input.strokes = [{ type: "SOLID", color: hexToRgb(colors.neutral[300]) }];
  input.strokeWeight = 1;
  
  // Placeholder text
  const placeholder = figma.createText();
  placeholder.characters = "Enter text...";
  placeholder.x = spacing[3] as number;
  placeholder.y = ((spacing[10] as number) - typographyScale.fontSize.base) / 2;
  
  await applyFont(placeholder, "body", "normal");
  applyTypography(placeholder, "base", "normal", "normal", "normal");
  placeholder.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[400]) }];
  
  input.appendChild(placeholder);
  figma.currentPage.appendChild(input);
  
  console.log("✅ Input component created");
}

async function createCard(): Promise<void> {
  console.log("🃏 Creating Card component...");
  
  const card = figma.createFrame();
  card.name = "Card • Content Container";
  card.resize(320, 240);
  card.cornerRadius = radius.lg;
  
  // Background and shadow
  card.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
  card.effects = [createShadow("base")];
  
  let currentY = spacing[6] as number;
  
  // Card title
  const title = figma.createText();
  title.characters = "Card Title";
  title.x = spacing[6] as number;
  title.y = currentY;
  
  await applyFont(title, "heading", "bold");
  applyTypography(title, "lg", "bold", "tight", "normal");
  title.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
  
  card.appendChild(title);
  currentY += spacing[8] as number;
  
  // Card content
  const content = figma.createText();
  content.characters = "This is a card component showcasing the House Design System. It demonstrates proper typography hierarchy, spacing, and visual styling with luxury automotive aesthetics.";
  content.x = spacing[6] as number;
  content.y = currentY;
  content.resize(280, 120);
  
  await applyFont(content, "body", "normal");
  applyTypography(content, "base", "normal", "relaxed", "normal");
  content.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
  
  card.appendChild(content);
  figma.currentPage.appendChild(card);
  
  console.log("✅ Card component created");
}

async function createBadge(): Promise<void> {
  console.log("🏷️ Creating Badge component...");
  
  const badge = figma.createFrame();
  badge.name = "Badge • Status Indicator";
  badge.resize(80, spacing[6] as number);
  badge.cornerRadius = radius.full;
  
  // Badge styling
  badge.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[100]) }];
  
  // Badge text
  const text = figma.createText();
  text.characters = "Badge";
  text.x = spacing[3] as number;
  text.y = ((spacing[6] as number) - typographyScale.fontSize.xs) / 2;
  
  await applyFont(text, "ui", "medium");
  applyTypography(text, "xs", "medium", "none", "wide");
  text.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[700]) }];
  
  badge.appendChild(text);
  figma.currentPage.appendChild(badge);
  
  console.log("✅ Badge component created");
}

async function createAlert(): Promise<void> {
  console.log("⚠️ Creating Alert component...");
  
  const alert = figma.createFrame();
  alert.name = "Alert • Information";
  alert.resize(400, spacing[20] as number);
  alert.cornerRadius = radius.base;
  
  // Alert styling
  alert.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[50]) }];
  alert.strokes = [{ type: "SOLID", color: hexToRgb(colors.brand[200]) }];
  alert.strokeWeight = 1;
  
  let currentY = spacing[4] as number;
  
  // Alert title
  const title = figma.createText();
  title.characters = "Information";
  title.x = spacing[4] as number;
  title.y = currentY;
  
  await applyFont(title, "heading", "semibold");
  applyTypography(title, "base", "semibold", "tight", "normal");
  title.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[800]) }];
  
  alert.appendChild(title);
  currentY += spacing[6] as number;
  
  // Alert message
  const message = figma.createText();
  message.characters = "This is an informational alert demonstrating the House Design System's alert component with proper color usage and typography.";
  message.x = spacing[4] as number;
  message.y = currentY;
  message.resize(360, 40);
  
  await applyFont(message, "body", "normal");
  applyTypography(message, "sm", "normal", "normal", "normal");
  message.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[700]) }];
  
  alert.appendChild(message);
  figma.currentPage.appendChild(alert);
  
  console.log("✅ Alert component created");
}

async function createTypographySpecimen(): Promise<void> {
  console.log("📖 Creating Comprehensive House Design System Typography Showcase...");
  
  try {
    const specimen = figma.createFrame();
    specimen.name = "Typography Showcase • House Design System";
    specimen.resize(900, 1400);
    specimen.cornerRadius = radius.lg;
    specimen.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    
    let currentY = 40;
    const leftMargin = 40;
    const rightMargin = 40;
    
    // Main title
    const title = figma.createText();
    title.characters = "House Design System";
    title.x = leftMargin;
    title.y = currentY;
    
    await applyFont(title, "display", "bold");
    applyTypography(title, "4xl", "bold", "tight", "normal");
    title.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
    
    specimen.appendChild(title);
    currentY += 70;
    
    // Subtitle
    const subtitle = figma.createText();
    subtitle.characters = "Luxury Automotive Typography System";
    subtitle.x = leftMargin;
    subtitle.y = currentY;
    
    await applyFont(subtitle, "heading", "medium");
    applyTypography(subtitle, "xl", "medium", "normal", "normal");
    subtitle.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
    
    specimen.appendChild(subtitle);
    currentY += 60;
    
    // Divider
    const divider = figma.createRectangle();
    divider.x = leftMargin;
    divider.y = currentY;
    divider.resize(specimen.width - leftMargin - rightMargin, 1);
    divider.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[200]) }];
    specimen.appendChild(divider);
    currentY += 40;
    
    // Display Typography Section
    const displaySection = figma.createText();
    displaySection.characters = "Display Typography";
    displaySection.x = leftMargin;
    displaySection.y = currentY;
    
    await applyFont(displaySection, "ui", "bold");
    applyTypography(displaySection, "sm", "bold", "normal", "wide");
    displaySection.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[500]) }];
    
    specimen.appendChild(displaySection);
    currentY += 35;
    
    // Display samples - all weights and sizes
    const displaySamples = [
      { text: "Eurostile Bold Display", size: "4xl", weight: "bold" },
      { text: "Eurostile Medium Display", size: "3xl", weight: "medium" },
      { text: "Eurostile Regular Display", size: "2xl", weight: "normal" }
    ];
    
    for (const sample of displaySamples) {
      const textElement = figma.createText();
      textElement.characters = sample.text;
      textElement.x = leftMargin;
      textElement.y = currentY;
      
      await applyFont(textElement, "display", sample.weight as keyof typeof typographyScale.fontWeight);
      applyTypography(textElement, sample.size as keyof typeof typographyScale.fontSize, sample.weight as keyof typeof typographyScale.fontWeight, "tight", "normal");
      textElement.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
      
      specimen.appendChild(textElement);
      currentY += typographyScale.fontSize[sample.size as keyof typeof typographyScale.fontSize] + 20;
    }
    
    currentY += 30;
    
    // Heading Typography Section
    const headingSection = figma.createText();
    headingSection.characters = "Heading Typography";
    headingSection.x = leftMargin;
    headingSection.y = currentY;
    
    await applyFont(headingSection, "ui", "bold");
    applyTypography(headingSection, "sm", "bold", "normal", "wide");
    headingSection.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[500]) }];
    
    specimen.appendChild(headingSection);
    currentY += 35;
    
    // Heading samples
    const headingSamples = [
      { text: "Microgramma Bold Heading", size: "2xl", weight: "bold" },
      { text: "Microgramma Medium Heading", size: "xl", weight: "medium" },
      { text: "Microgramma Regular Heading", size: "lg", weight: "normal" }
    ];
    
    for (const sample of headingSamples) {
      const textElement = figma.createText();
      textElement.characters = sample.text;
      textElement.x = leftMargin;
      textElement.y = currentY;
      
      await applyFont(textElement, "heading", sample.weight as keyof typeof typographyScale.fontWeight);
      applyTypography(textElement, sample.size as keyof typeof typographyScale.fontSize, sample.weight as keyof typeof typographyScale.fontWeight, "normal", "normal");
      textElement.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[800]) }];
      
      specimen.appendChild(textElement);
      currentY += typographyScale.fontSize[sample.size as keyof typeof typographyScale.fontSize] + 18;
    }
    
    currentY += 30;
    
    // Body Typography Section
    const bodySection = figma.createText();
    bodySection.characters = "Body Typography";
    bodySection.x = leftMargin;
    bodySection.y = currentY;
    
    await applyFont(bodySection, "ui", "bold");
    applyTypography(bodySection, "sm", "bold", "normal", "wide");
    bodySection.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[500]) }];
    
    specimen.appendChild(bodySection);
    currentY += 35;
    
    // Body text samples
    const bodyText = figma.createText();
    bodyText.characters = "Inter Regular • This is body text designed for optimal readability in longer passages. It maintains excellent legibility at various sizes and provides a clean, modern foundation for content.";
    bodyText.x = leftMargin;
    bodyText.y = currentY;
    bodyText.resize(specimen.width - leftMargin - rightMargin, bodyText.height);
    
    await applyFont(bodyText, "body", "normal");
    applyTypography(bodyText, "base", "normal", "relaxed", "normal");
    bodyText.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[700]) }];
    
    specimen.appendChild(bodyText);
    currentY += 80;
    
    const bodyBold = figma.createText();
    bodyBold.characters = "Inter Bold • This is bold body text for emphasis within content blocks.";
    bodyBold.x = leftMargin;
    bodyBold.y = currentY;
    bodyBold.resize(specimen.width - leftMargin - rightMargin, bodyBold.height);
    
    await applyFont(bodyBold, "body", "bold");
    applyTypography(bodyBold, "base", "bold", "relaxed", "normal");
    bodyBold.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[700]) }];
    
    specimen.appendChild(bodyBold);
    currentY += 60;
    
    // UI Typography Section
    const uiSection = figma.createText();
    uiSection.characters = "UI Typography";
    uiSection.x = leftMargin;
    uiSection.y = currentY;
    
    await applyFont(uiSection, "ui", "bold");
    applyTypography(uiSection, "sm", "bold", "normal", "wide");
    uiSection.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[500]) }];
    
    specimen.appendChild(uiSection);
    currentY += 35;
    
    // UI samples
    const uiSamples = [
      { text: "FuturaStd Bold • Button Text", size: "base", weight: "bold" },
      { text: "FuturaStd Medium • Navigation", size: "sm", weight: "medium" },
      { text: "FuturaStd Regular • Labels", size: "xs", weight: "normal" }
    ];
    
    for (const sample of uiSamples) {
      const textElement = figma.createText();
      textElement.characters = sample.text;
      textElement.x = leftMargin;
      textElement.y = currentY;
      
      await applyFont(textElement, "ui", sample.weight as keyof typeof typographyScale.fontWeight);
      applyTypography(textElement, sample.size as keyof typeof typographyScale.fontSize, sample.weight as keyof typeof typographyScale.fontWeight, "normal", "normal");
      textElement.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[800]) }];
      
      specimen.appendChild(textElement);
      currentY += typographyScale.fontSize[sample.size as keyof typeof typographyScale.fontSize] + 16;
    }
    
    currentY += 30;
    
    // Typography Scale Reference
    const scaleSection = figma.createText();
    scaleSection.characters = "Typography Scale Reference";
    scaleSection.x = leftMargin;
    scaleSection.y = currentY;
    
    await applyFont(scaleSection, "ui", "bold");
    applyTypography(scaleSection, "sm", "bold", "normal", "wide");
    scaleSection.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[500]) }];
    
    specimen.appendChild(scaleSection);
    currentY += 35;
    
    // Typography scale samples showing all sizes
    const scaleSamples = [
      { size: "4xl", label: "4XL • 36px" },
      { size: "3xl", label: "3XL • 30px" },
      { size: "2xl", label: "2XL • 24px" },
      { size: "xl", label: "XL • 20px" },
      { size: "lg", label: "LG • 18px" },
      { size: "base", label: "Base • 16px" },
      { size: "sm", label: "SM • 14px" },
      { size: "xs", label: "XS • 12px" }
    ];
    
    for (const sample of scaleSamples) {
      const scaleItem = figma.createText();
      scaleItem.characters = `Aa ${sample.label}`;
      scaleItem.x = leftMargin;
      scaleItem.y = currentY;
      
      await applyFont(scaleItem, "ui", "normal");
      applyTypography(scaleItem, sample.size as keyof typeof typographyScale.fontSize, "normal", "normal", "normal");
      scaleItem.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
      
      specimen.appendChild(scaleItem);
      currentY += typographyScale.fontSize[sample.size as keyof typeof typographyScale.fontSize] + 12;
    }
    
    figma.currentPage.appendChild(specimen);
    figma.viewport.scrollAndZoomIntoView([specimen]);
    
  } catch (error) {
    console.error("❌ Typography specimen error:", error);
    figma.notify(`❌ Error creating typography specimen: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
}

// =============================================================================
// PLUGIN INITIALIZATION & MESSAGE HANDLING
// =============================================================================

async function initializePlugin(): Promise<void> {
  console.log("🏠 Initializing House Design System Plugin...");
  await loadSystemFonts();
  console.log("✅ Plugin ready! Using semantic font mapping with system fonts.");
}

figma.ui.onmessage = async (msg) => {
  console.log(`📨 Message received: ${msg.type}`);
  
  try {
    switch (msg.type) {
      case "create-button":
        figma.notify("Creating button...");
        await createButton();
        figma.notify("✅ Button created!");
        break;
        
      case "create-input":
        figma.notify("Creating input...");
        await createInput();
        figma.notify("✅ Input created!");
        break;
        
      case "create-card":
        figma.notify("Creating card...");
        await createCard();
        figma.notify("✅ Card created!");
        break;
        
      case "create-badge":
        figma.notify("Creating badge...");
        await createBadge();
        figma.notify("✅ Badge created!");
        break;
        
      case "create-alert":
        figma.notify("Creating alert...");
        await createAlert();
        figma.notify("✅ Alert created!");
        break;
        
      case "create-typography-specimen":
        figma.notify("Creating typography specimen...");
        await createTypographySpecimen();
        figma.notify("✅ Typography specimen created!");
        break;
        
      default:
        console.log(`❌ Unknown message: ${msg.type}`);
        figma.notify("❌ Unknown component type");
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("❌ Error:", error);
    figma.notify(`❌ Error: ${errorMessage}`);
  }
};

// Initialize the plugin
initializePlugin();