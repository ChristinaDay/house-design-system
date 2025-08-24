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
        description: "Strong, architectural headings",
        fonts: [
            { family: "Microgramma D Extended", style: "Bold" }, // Swapped: Now Microgramma for display
            { family: "Inter", style: "Extrabold" }, // Strong fallback
            { family: "Arial", style: "Bold" }, // Universal fallback
        ]
    },
    heading: {
        name: "Heading",
        description: "Luxury, stylized text for hero content",
        fonts: [
            { family: "Eurostile", style: "BoldItalic" }, // Swapped: Now Eurostile for headings
            { family: "Inter", style: "Bold" }, // Strong fallback
            { family: "Arial", style: "Bold" }, // Universal fallback
        ]
    },
    body: {
        name: "Body",
        description: "Readable text for content",
        fonts: [
            { family: "Inter", style: "Regular" }, // Popular, readable
            { family: "SF Pro Text", style: "Regular" }, // macOS system
            { family: "Arial", style: "Regular" }, // Universal fallback
        ]
    },
    ui: {
        name: "UI",
        description: "Clean interface elements",
        fonts: [
            { family: "SF Pro Display", style: "Regular" }, // macOS UI font
            { family: "Segoe UI", style: "Regular" }, // Windows UI font
            { family: "Arial", style: "Regular" }, // Universal fallback
        ]
    }
};
// Spacing Scale - Complete scale from tokens.css
const spacing = {
    0: 0, px: 1, 0.5: 2, 1: 4, 1.5: 6, 2: 8, 2.5: 10, 3: 12, 3.5: 14,
    4: 16, 5: 20, 6: 24, 7: 28, 8: 32, 9: 36, 10: 40, 11: 44, 12: 48,
    14: 56, 16: 64, 20: 80, 24: 96, 28: 112, 32: 128, 36: 144, 40: 160,
    44: 176, 48: 192, 52: 208, 56: 224
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
async function loadSystemFonts() {
    console.log("🎨 Loading House Design System fonts...");
    // Step 1: Load system fonts first (required)
    const systemFonts = [
        { family: "Arial", style: "Regular" },
        { family: "Arial", style: "Bold" },
        { family: "Inter", style: "Regular" },
        { family: "Inter", style: "Bold" },
        { family: "Inter", style: "Extrabold" },
        { family: "SF Pro Display", style: "Bold" },
        { family: "MicrogrammaEF Extend", style: "Medium" }
    ];
    for (const font of systemFonts) {
        try {
            await figma.loadFontAsync({ family: font.family, style: font.style });
            console.log(`✅ System font: ${font.family} ${font.style}`);
        }
        catch (error) {
            console.log(`⚠️ System font unavailable: ${font.family} ${font.style}`);
        }
    }
    // Step 2: Load your custom House Design System fonts (matching exact file names)
    const customFonts = [
        // Microgramma variants (Display) - Architectural strength
        { family: "Microgramma D Extended", style: "Bold" },
        { family: "Microgramma", style: "Regular" },
        { family: "Microgramma", style: "Medium" },
        { family: "Microgramma", style: "Bold" },
        // Eurostile variants (Heading) - Luxury automotive
        { family: "Eurostile", style: "Regular Italic" },
        { family: "Eurostile", style: "Medium Italic" },
        { family: "Eurostile", style: "BoldItalic" },
        // Futura variants (UI) - Clean interface
        { family: "Futura", style: "Regular" },
        { family: "Futura", style: "Medium" },
    ];
    let customFontsLoaded = 0;
    for (const font of customFonts) {
        try {
            await figma.loadFontAsync({ family: font.family, style: font.style });
            console.log(`🎨 Custom font loaded successfully: ${font.family} ${font.style}`);
            customFontsLoaded++;
        }
        catch (error) {
            console.log(`⚠️ Custom font failed to load: ${font.family} ${font.style} - Error: ${error}`);
        }
    }
    console.log(`✅ Font loading complete: ${customFontsLoaded}/${customFonts.length} custom fonts loaded`);
}
// Apply semantic fonts with proper custom fonts and fallbacks
async function applyFont(textNode, fontType, weight = "normal") {
    const family = fontFamilies[fontType];
    console.log(`🎨 Applying font: ${fontType}, weight: ${weight}`);
    // Map weight to specific font files for each family
    let customFontName = "";
    let customStyle = "Regular";
    switch (fontType) {
        case "display":
            // Use Microgramma for display text (architectural strength)
            if (weight === "bold" || weight === "extrabold") {
                customFontName = "Microgramma D Extended";
                customStyle = "Bold";
            }
            else if (weight === "medium" || weight === "semibold") {
                customFontName = "Microgramma D Extended";
                customStyle = "Bold";
            }
            else {
                customFontName = "Microgramma D Extended";
                customStyle = "Bold";
            }
            break;
        case "heading":
            // Use Eurostile variants for headings (luxury automotive)
            if (weight === "bold" || weight === "extrabold") {
                customFontName = "Eurostile";
                customStyle = "BoldItalic";
            }
            else if (weight === "medium" || weight === "semibold") {
                customFontName = "Eurostile";
                customStyle = "Medium Italic";
            }
            else {
                customFontName = "Eurostile Extd";
                customStyle = "Regular Italic";
            }
            break;
        case "body":
            // Use Inter for body text (loaded and reliable)
            const interStyle = (weight === "bold" || weight === "extrabold") ? "Bold" : "Regular";
            try {
                textNode.fontName = { family: "Inter", style: interStyle };
                console.log(`✅ Applied ${fontType}: Inter ${interStyle}`);
                return;
            }
            catch (error) {
                customFontName = ""; // Will fall back to Arial
            }
            break;
        case "ui":
            // Use Futura for UI text (clean interface)
            if (weight === "bold" || weight === "extrabold") {
                customFontName = "Futura";
                customStyle = "Medium";
            }
            else if (weight === "medium" || weight === "semibold") {
                customFontName = "Futura";
                customStyle = "Medium";
            }
            else {
                customFontName = "Futura";
                customStyle = "Regular";
            }
            break;
    }
    // Try custom font first
    if (customFontName) {
        try {
            textNode.fontName = { family: customFontName, style: customStyle };
            console.log(`✅ Applied ${fontType}: ${customFontName} ${customStyle}`);
            return;
        }
        catch (error) {
            console.log(`⚠️ Custom font ${customFontName} ${customStyle} not available, using fallback`);
        }
    }
    // Fallback to Arial with appropriate weight
    const arialStyle = (weight === "bold" || weight === "extrabold") ? "Bold" : "Regular";
    try {
        textNode.fontName = { family: "Arial", style: arialStyle };
        console.log(`🔄 Applied ${fontType}: Arial ${arialStyle} (fallback)`);
    }
    catch (error) {
        console.log(`❌ Even Arial failed for ${fontType}`);
    }
}
// Apply complete typography styling
function applyTypography(textNode, size, weight = "normal", lineHeight = "normal", letterSpacing = "normal") {
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
function hexToRgb(hex) {
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
function parseRgba(rgba) {
    const match = rgba.match(/rgba?\(([^)]+)\)/);
    if (!match)
        return { r: 0, g: 0, b: 0, a: 1 };
    const values = match[1].split(',').map(v => parseFloat(v.trim()));
    return {
        r: values[0] / 255,
        g: values[1] / 255,
        b: values[2] / 255,
        a: values.length > 3 ? values[3] : 1
    };
}
function createShadow(shadowType) {
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
async function createButton() {
    console.log("🔘 Creating Button component...");
    const button = figma.createFrame();
    button.name = "Button • Primary Solid";
    button.resize(120, spacing[10]); // height: var(--spacing-10)
    button.cornerRadius = radius.md;
    // Brand color background
    button.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[500]) }];
    // Add shadow
    button.effects = [createShadow("sm")];
    // Create button text
    const text = figma.createText();
    text.characters = "Button";
    text.x = spacing[4]; // px-4
    text.y = (spacing[10] - typographyScale.fontSize.base) / 2; // Center vertically
    // Apply typography
    await applyFont(text, "ui", "medium");
    applyTypography(text, "base", "medium", "none", "normal");
    text.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    button.appendChild(text);
    figma.currentPage.appendChild(button);
    figma.currentPage.selection = [button];
    console.log("✅ Button component created");
}
async function createInput() {
    console.log("📝 Creating Input component...");
    const input = figma.createFrame();
    input.name = "Input • Text Field";
    input.resize(240, spacing[10]);
    input.cornerRadius = radius.base;
    // Background and border
    input.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    input.strokes = [{ type: "SOLID", color: hexToRgb(colors.neutral[300]) }];
    input.strokeWeight = 1;
    // Placeholder text
    const placeholder = figma.createText();
    placeholder.characters = "Enter text...";
    placeholder.x = spacing[3];
    placeholder.y = (spacing[10] - typographyScale.fontSize.base) / 2;
    await applyFont(placeholder, "body", "normal");
    applyTypography(placeholder, "base", "normal", "normal", "normal");
    placeholder.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[400]) }];
    input.appendChild(placeholder);
    figma.currentPage.appendChild(input);
    console.log("✅ Input component created");
}
async function createCard() {
    console.log("🃏 Creating Card component...");
    const card = figma.createFrame();
    card.name = "Card • Content Container";
    card.resize(320, 240);
    card.cornerRadius = radius.lg;
    // Background and shadow
    card.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    card.effects = [createShadow("base")];
    let currentY = spacing[6];
    // Card title
    const title = figma.createText();
    title.characters = "Card Title";
    title.x = spacing[6];
    title.y = currentY;
    await applyFont(title, "heading", "bold");
    applyTypography(title, "lg", "bold", "tight", "normal");
    title.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
    card.appendChild(title);
    currentY += spacing[8];
    // Card content
    const content = figma.createText();
    content.characters = "This is a card component showcasing the House Design System. It demonstrates proper typography hierarchy, spacing, and visual styling with luxury automotive aesthetics.";
    content.x = spacing[6];
    content.y = currentY;
    content.resize(280, 120);
    await applyFont(content, "body", "normal");
    applyTypography(content, "base", "normal", "relaxed", "normal");
    content.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
    card.appendChild(content);
    figma.currentPage.appendChild(card);
    console.log("✅ Card component created");
}
async function createBadge() {
    console.log("🏷️ Creating Badge component...");
    const badge = figma.createFrame();
    badge.name = "Badge • Status Indicator";
    badge.resize(80, spacing[6]);
    badge.cornerRadius = radius.full;
    // Badge styling
    badge.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[100]) }];
    // Badge text
    const text = figma.createText();
    text.characters = "Badge";
    text.x = spacing[3];
    text.y = (spacing[6] - typographyScale.fontSize.xs) / 2;
    await applyFont(text, "ui", "medium");
    applyTypography(text, "xs", "medium", "none", "wide");
    text.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[700]) }];
    badge.appendChild(text);
    figma.currentPage.appendChild(badge);
    console.log("✅ Badge component created");
}
async function createAlert() {
    console.log("⚠️ Creating Alert component...");
    const alert = figma.createFrame();
    alert.name = "Alert • Information";
    alert.resize(400, spacing[20]);
    alert.cornerRadius = radius.base;
    // Alert styling
    alert.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[50]) }];
    alert.strokes = [{ type: "SOLID", color: hexToRgb(colors.brand[200]) }];
    alert.strokeWeight = 1;
    let currentY = spacing[4];
    // Alert title
    const title = figma.createText();
    title.characters = "Information";
    title.x = spacing[4];
    title.y = currentY;
    await applyFont(title, "heading", "semibold");
    applyTypography(title, "base", "semibold", "tight", "normal");
    title.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[800]) }];
    alert.appendChild(title);
    currentY += spacing[6];
    // Alert message
    const message = figma.createText();
    message.characters = "This is an informational alert demonstrating the House Design System's alert component with proper color usage and typography.";
    message.x = spacing[4];
    message.y = currentY;
    message.resize(360, 40);
    await applyFont(message, "body", "normal");
    applyTypography(message, "sm", "normal", "normal", "normal");
    message.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[700]) }];
    alert.appendChild(message);
    figma.currentPage.appendChild(alert);
    console.log("✅ Alert component created");
}
async function createAccordion() {
    console.log("📋 Creating Accordion component...");
    const accordion = figma.createFrame();
    accordion.name = "Accordion • Collapsible Content";
    accordion.resize(400, 280);
    accordion.cornerRadius = radius.lg;
    accordion.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    accordion.strokes = [{ type: "SOLID", color: hexToRgb(colors.neutral[200]) }];
    accordion.strokeWeight = 1;
    let currentY = 0;
    // Create 3 accordion items
    const items = [
        { title: "Performance Specifications", content: "Advanced engine performance metrics and technical specifications" },
        { title: "Interior Features", content: "Luxury interior appointments and comfort technologies" },
        { title: "Safety Systems", content: "Comprehensive safety and driver assistance systems" }
    ];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // Item container
        const itemContainer = figma.createFrame();
        itemContainer.name = `Accordion Item ${i + 1}`;
        itemContainer.resize(400, 80);
        itemContainer.x = 0;
        itemContainer.y = currentY;
        itemContainer.fills = [];
        // Header with title and icon
        const header = figma.createFrame();
        header.name = "Header";
        header.resize(400, 48);
        header.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[50]) }];
        header.strokes = [{ type: "SOLID", color: hexToRgb(colors.neutral[200]) }];
        header.strokeWeight = i === items.length - 1 ? 0 : 1;
        header.strokeAlign = "INSIDE";
        // Title text
        const titleText = figma.createText();
        titleText.characters = item.title;
        titleText.x = spacing[4];
        titleText.y = (48 - typographyScale.fontSize.base) / 2;
        await applyFont(titleText, "heading", "medium");
        applyTypography(titleText, "base", "medium", "normal", "normal");
        titleText.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
        header.appendChild(titleText);
        // Chevron icon (simple triangle)
        const chevron = figma.createPolygon();
        chevron.pointCount = 3;
        chevron.resize(12, 8);
        chevron.x = 360;
        chevron.y = 20;
        chevron.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[500]) }];
        chevron.rotation = Math.PI; // Point down
        header.appendChild(chevron);
        itemContainer.appendChild(header);
        // Content area (collapsed by default, first item expanded)
        if (i === 0) {
            const content = figma.createFrame();
            content.name = "Content";
            content.resize(400, 32);
            content.y = 48;
            content.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
            const contentText = figma.createText();
            contentText.characters = item.content;
            contentText.x = spacing[4];
            contentText.y = spacing[2];
            contentText.resize(360, 24);
            await applyFont(contentText, "body", "normal");
            applyTypography(contentText, "sm", "normal", "relaxed", "normal");
            contentText.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
            content.appendChild(contentText);
            itemContainer.appendChild(content);
            itemContainer.resize(400, 80);
        }
        else {
            itemContainer.resize(400, 48);
        }
        accordion.appendChild(itemContainer);
        currentY += i === 0 ? 80 : 48;
    }
    accordion.resize(400, currentY);
    figma.currentPage.appendChild(accordion);
    console.log("✅ Accordion component created");
}
async function createDialog() {
    console.log("💬 Creating Dialog component...");
    // Create overlay backdrop
    const overlay = figma.createFrame();
    overlay.name = "Dialog Overlay";
    overlay.resize(600, 400);
    overlay.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, opacity: 0.5 }];
    // Create dialog content
    const dialog = figma.createFrame();
    dialog.name = "Dialog • Modal Window";
    dialog.resize(420, 280);
    dialog.cornerRadius = radius.lg;
    dialog.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    dialog.effects = [createShadow("2xl")];
    // Center the dialog
    dialog.x = (overlay.width - dialog.width) / 2;
    dialog.y = (overlay.height - dialog.height) / 2;
    let currentY = spacing[6];
    // Dialog header
    const title = figma.createText();
    title.characters = "Confirm Action";
    title.x = spacing[6];
    title.y = currentY;
    await applyFont(title, "heading", "bold");
    applyTypography(title, "lg", "bold", "tight", "normal");
    title.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
    dialog.appendChild(title);
    currentY += spacing[8];
    // Dialog description
    const description = figma.createText();
    description.characters = "This action will permanently delete the selected items from your design system. This action cannot be undone.";
    description.x = spacing[6];
    description.y = currentY;
    description.resize(340, 48);
    await applyFont(description, "body", "normal");
    applyTypography(description, "sm", "normal", "relaxed", "normal");
    description.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
    dialog.appendChild(description);
    currentY += 72;
    // Button group
    const buttonGroup = figma.createFrame();
    buttonGroup.name = "Button Group";
    buttonGroup.resize(340, 36);
    buttonGroup.x = spacing[6];
    buttonGroup.y = currentY;
    buttonGroup.fills = [];
    buttonGroup.layoutMode = "HORIZONTAL";
    buttonGroup.counterAxisSizingMode = "FIXED";
    buttonGroup.primaryAxisSizingMode = "FIXED";
    buttonGroup.itemSpacing = spacing[3];
    buttonGroup.primaryAxisAlignItems = "MAX";
    // Cancel button
    const cancelButton = figma.createFrame();
    cancelButton.name = "Cancel Button";
    cancelButton.resize(80, 36);
    cancelButton.cornerRadius = radius.md;
    cancelButton.fills = [];
    cancelButton.strokes = [{ type: "SOLID", color: hexToRgb(colors.neutral[300]) }];
    cancelButton.strokeWeight = 1;
    const cancelText = figma.createText();
    cancelText.characters = "Cancel";
    cancelText.x = (80 - 42) / 2; // Approximate centering
    cancelText.y = (36 - typographyScale.fontSize.sm) / 2;
    await applyFont(cancelText, "ui", "medium");
    applyTypography(cancelText, "sm", "medium", "none", "normal");
    cancelText.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[700]) }];
    cancelButton.appendChild(cancelText);
    buttonGroup.appendChild(cancelButton);
    // Confirm button
    const confirmButton = figma.createFrame();
    confirmButton.name = "Confirm Button";
    confirmButton.resize(80, 36);
    confirmButton.cornerRadius = radius.md;
    confirmButton.fills = [{ type: "SOLID", color: hexToRgb(colors.danger[500]) }];
    const confirmText = figma.createText();
    confirmText.characters = "Delete";
    confirmText.x = (80 - 38) / 2; // Approximate centering
    confirmText.y = (36 - typographyScale.fontSize.sm) / 2;
    await applyFont(confirmText, "ui", "medium");
    applyTypography(confirmText, "sm", "medium", "none", "normal");
    confirmText.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    confirmButton.appendChild(confirmText);
    buttonGroup.appendChild(confirmButton);
    dialog.appendChild(buttonGroup);
    overlay.appendChild(dialog);
    figma.currentPage.appendChild(overlay);
    console.log("✅ Dialog component created");
}
async function createTabs() {
    console.log("📑 Creating Tabs component...");
    const tabs = figma.createFrame();
    tabs.name = "Tabs • Navigation Tabs";
    tabs.resize(480, 320);
    tabs.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    // Tab list (navigation)
    const tabList = figma.createFrame();
    tabList.name = "Tab List";
    tabList.resize(480, 44);
    tabList.fills = [];
    tabList.strokes = [{ type: "SOLID", color: hexToRgb(colors.neutral[200]) }];
    tabList.strokeWeight = 1;
    tabList.strokeAlign = "INSIDE";
    const tabItems = ["Overview", "Specifications", "Gallery", "Reviews"];
    const tabWidth = 120;
    for (let i = 0; i < tabItems.length; i++) {
        const tab = figma.createFrame();
        tab.name = `Tab ${i + 1}`;
        tab.resize(tabWidth, 44);
        tab.x = i * tabWidth;
        tab.fills = i === 0 ? [{ type: "SOLID", color: hexToRgb(colors.neutral[50]) }] : [];
        // Active tab indicator
        if (i === 0) {
            const indicator = figma.createRectangle();
            indicator.resize(tabWidth, 2);
            indicator.y = 42;
            indicator.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[500]) }];
            tab.appendChild(indicator);
        }
        const tabText = figma.createText();
        tabText.characters = tabItems[i];
        tabText.x = (tabWidth - (tabItems[i].length * 8)) / 2; // Approximate centering
        tabText.y = (44 - typographyScale.fontSize.sm) / 2;
        await applyFont(tabText, "ui", i === 0 ? "medium" : "normal");
        applyTypography(tabText, "sm", i === 0 ? "medium" : "normal", "normal", "normal");
        tabText.fills = [{ type: "SOLID", color: hexToRgb(i === 0 ? colors.brand[600] : colors.neutral[600]) }];
        tab.appendChild(tabText);
        tabList.appendChild(tab);
    }
    tabs.appendChild(tabList);
    // Tab content
    const content = figma.createFrame();
    content.name = "Tab Content";
    content.resize(480, 276);
    content.y = 44;
    content.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    // Content for active tab (Overview)
    const contentTitle = figma.createText();
    contentTitle.characters = "Vehicle Overview";
    contentTitle.x = spacing[6];
    contentTitle.y = spacing[6];
    await applyFont(contentTitle, "heading", "bold");
    applyTypography(contentTitle, "lg", "bold", "tight", "normal");
    contentTitle.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
    content.appendChild(contentTitle);
    const contentText = figma.createText();
    contentText.characters = "Experience the pinnacle of luxury automotive engineering. This vehicle represents the perfect fusion of performance, elegance, and cutting-edge technology designed for the most discerning drivers.";
    contentText.x = spacing[6];
    contentText.y = spacing[6] + 40;
    contentText.resize(420, 80);
    await applyFont(contentText, "body", "normal");
    applyTypography(contentText, "base", "normal", "relaxed", "normal");
    contentText.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
    content.appendChild(contentText);
    tabs.appendChild(content);
    figma.currentPage.appendChild(tabs);
    console.log("✅ Tabs component created");
}
async function createDropdown() {
    console.log("⬇️ Creating Dropdown Menu component...");
    const dropdown = figma.createFrame();
    dropdown.name = "Dropdown Menu";
    dropdown.resize(220, 280);
    dropdown.fills = [];
    // Trigger button
    const trigger = figma.createFrame();
    trigger.name = "Dropdown Trigger";
    trigger.resize(160, 36);
    trigger.cornerRadius = radius.md;
    trigger.fills = [];
    trigger.strokes = [{ type: "SOLID", color: hexToRgb(colors.neutral[300]) }];
    trigger.strokeWeight = 1;
    const triggerText = figma.createText();
    triggerText.characters = "Vehicle Options";
    triggerText.x = spacing[3];
    triggerText.y = (36 - typographyScale.fontSize.sm) / 2;
    await applyFont(triggerText, "ui", "medium");
    applyTypography(triggerText, "sm", "medium", "normal", "normal");
    triggerText.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[700]) }];
    trigger.appendChild(triggerText);
    // Chevron down icon
    const chevron = figma.createPolygon();
    chevron.pointCount = 3;
    chevron.resize(8, 6);
    chevron.x = 140;
    chevron.y = 15;
    chevron.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[500]) }];
    trigger.appendChild(chevron);
    dropdown.appendChild(trigger);
    // Dropdown menu
    const menu = figma.createFrame();
    menu.name = "Dropdown Menu";
    menu.resize(200, 240);
    menu.x = 0;
    menu.y = 44;
    menu.cornerRadius = radius.md;
    menu.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    menu.strokes = [{ type: "SOLID", color: hexToRgb(colors.neutral[200]) }];
    menu.strokeWeight = 1;
    menu.effects = [createShadow("lg")];
    const menuItems = [
        { text: "Performance Package", icon: "⚡" },
        { text: "Luxury Interior", icon: "✨" },
        { text: "Sport Exterior", icon: "🏎️" },
        { text: "Technology Suite", icon: "📱" },
        { text: "Safety Plus", icon: "🛡️" },
        { text: "Custom Paint", icon: "🎨" }
    ];
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        const menuItem = figma.createFrame();
        menuItem.name = `Menu Item ${i + 1}`;
        menuItem.resize(200, 40);
        menuItem.y = i * 40;
        menuItem.fills = [];
        // Hover state for first item
        if (i === 0) {
            menuItem.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[50]) }];
        }
        const itemText = figma.createText();
        itemText.characters = `${item.icon} ${item.text}`;
        itemText.x = spacing[3];
        itemText.y = (40 - typographyScale.fontSize.sm) / 2;
        await applyFont(itemText, "ui", "normal");
        applyTypography(itemText, "sm", "normal", "normal", "normal");
        itemText.fills = [{ type: "SOLID", color: hexToRgb(i === 0 ? colors.brand[700] : colors.neutral[700]) }];
        menuItem.appendChild(itemText);
        menu.appendChild(menuItem);
    }
    dropdown.appendChild(menu);
    figma.currentPage.appendChild(dropdown);
    console.log("✅ Dropdown Menu component created");
}
async function createProgressBar() {
    console.log("📊 Creating Progress component...");
    const container = figma.createFrame();
    container.name = "Progress • Loading Indicator";
    container.resize(320, 120);
    container.fills = [];
    let currentY = 0;
    // Title
    const title = figma.createText();
    title.characters = "Installation Progress";
    title.x = 0;
    title.y = currentY;
    await applyFont(title, "heading", "medium");
    applyTypography(title, "base", "medium", "normal", "normal");
    title.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
    container.appendChild(title);
    currentY += 32;
    // Progress bar background
    const progressBg = figma.createFrame();
    progressBg.name = "Progress Background";
    progressBg.resize(320, 8);
    progressBg.y = currentY;
    progressBg.cornerRadius = radius.full;
    progressBg.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[200]) }];
    // Progress bar fill (68% complete)
    const progressFill = figma.createFrame();
    progressFill.name = "Progress Fill";
    progressFill.resize(218, 8); // 68% of 320
    progressFill.cornerRadius = radius.full;
    progressFill.fills = [{ type: "SOLID", color: hexToRgb(colors.brand[500]) }];
    progressBg.appendChild(progressFill);
    container.appendChild(progressBg);
    currentY += 20;
    // Progress text
    const progressText = figma.createText();
    progressText.characters = "68% Complete";
    progressText.x = 0;
    progressText.y = currentY;
    await applyFont(progressText, "ui", "medium");
    applyTypography(progressText, "sm", "medium", "normal", "normal");
    progressText.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
    container.appendChild(progressText);
    currentY += 28;
    // Status text
    const status = figma.createText();
    status.characters = "Installing vehicle performance modules...";
    status.x = 0;
    status.y = currentY;
    await applyFont(status, "body", "normal");
    applyTypography(status, "sm", "normal", "normal", "normal");
    status.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[500]) }];
    container.appendChild(status);
    figma.currentPage.appendChild(container);
    console.log("✅ Progress component created");
}
async function createSwitch() {
    console.log("🔄 Creating Switch component...");
    const container = figma.createFrame();
    container.name = "Switch • Toggle Control";
    container.resize(280, 120);
    container.fills = [];
    let currentY = 0;
    // Create multiple switch examples
    const switches = [
        { label: "Performance Mode", enabled: true },
        { label: "Eco Driving", enabled: false },
        { label: "Night Vision", enabled: true }
    ];
    for (let i = 0; i < switches.length; i++) {
        const switchData = switches[i];
        const switchContainer = figma.createFrame();
        switchContainer.name = `Switch ${i + 1}`;
        switchContainer.resize(280, 32);
        switchContainer.y = currentY;
        switchContainer.fills = [];
        // Label
        const label = figma.createText();
        label.characters = switchData.label;
        label.x = 0;
        label.y = (32 - typographyScale.fontSize.base) / 2;
        await applyFont(label, "body", "medium");
        applyTypography(label, "base", "medium", "normal", "normal");
        label.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
        switchContainer.appendChild(label);
        // Switch track
        const track = figma.createFrame();
        track.name = "Switch Track";
        track.resize(44, 24);
        track.x = 220;
        track.y = 4;
        track.cornerRadius = 12;
        track.fills = [{ type: "SOLID", color: hexToRgb(switchData.enabled ? colors.brand[500] : colors.neutral[300]) }];
        // Switch thumb
        const thumb = figma.createEllipse();
        thumb.name = "Switch Thumb";
        thumb.resize(20, 20);
        thumb.x = switchData.enabled ? 22 : 2;
        thumb.y = 2;
        thumb.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
        thumb.effects = [createShadow("sm")];
        track.appendChild(thumb);
        switchContainer.appendChild(track);
        container.appendChild(switchContainer);
        currentY += 40;
    }
    figma.currentPage.appendChild(container);
    console.log("✅ Switch component created");
}
async function createColorPalette() {
    console.log("🎨 Creating Color Palette component...");
    const palette = figma.createFrame();
    palette.name = "Color Palette • House Design System";
    palette.resize(1200, 800);
    palette.cornerRadius = radius.lg;
    palette.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[0]) }];
    let currentY = spacing[6];
    const leftMargin = spacing[6];
    const swatchSize = 60;
    const swatchSpacing = 8;
    // Main title
    const title = figma.createText();
    title.characters = "House Design System Color Palette";
    title.x = leftMargin;
    title.y = currentY;
    await applyFont(title, "display", "bold");
    applyTypography(title, "2xl", "bold", "tight", "normal");
    title.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
    palette.appendChild(title);
    currentY += 50;
    // Subtitle
    const subtitle = figma.createText();
    subtitle.characters = "Luxury Automotive Color System";
    subtitle.x = leftMargin;
    subtitle.y = currentY;
    await applyFont(subtitle, "heading", "medium");
    applyTypography(subtitle, "base", "medium", "normal", "normal");
    subtitle.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
    palette.appendChild(subtitle);
    currentY += 40;
    // UI Colors and Gradients Section
    const uiTitle = figma.createText();
    uiTitle.characters = "Plugin UI Colors & Gradients";
    uiTitle.x = leftMargin;
    uiTitle.y = currentY;
    await applyFont(uiTitle, "heading", "bold");
    applyTypography(uiTitle, "lg", "bold", "tight", "normal");
    uiTitle.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
    palette.appendChild(uiTitle);
    currentY += 35;
    // UI Colors row
    const uiColorsRow = figma.createFrame();
    uiColorsRow.name = "UI Colors & Gradients";
    uiColorsRow.x = leftMargin;
    uiColorsRow.y = currentY;
    uiColorsRow.resize(1100, 120);
    uiColorsRow.fills = [];
    // Define UI colors and gradients used in the plugin
    const uiElements = [
        { name: "Brand Purple", color: colors.brand[500], type: "solid" },
        { name: "Light Purple", color: colors.brand[100], type: "solid" },
        { name: "Red Orange", color: colors.accent[700], type: "solid" },
        { name: "Bright Orange", color: colors.accent[400], type: "solid" },
        { name: "Deep Black", color: colors.neutral[950], type: "solid" },
        { name: "Purple→Light", gradient: [colors.brand[500], colors.brand[100]], type: "gradient" },
        { name: "Red→Orange→White", gradient: ["#CC3700", "#FF6B35", "#FFFFFF"], type: "gradient" },
        { name: "Glass Effect", gradient: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"], type: "gradient" }
    ];
    let uiX = 0;
    for (const element of uiElements) {
        const swatchGroup = figma.createFrame();
        swatchGroup.name = element.name;
        swatchGroup.resize(swatchSize + 16, swatchSize + 45);
        swatchGroup.x = uiX;
        swatchGroup.y = 0;
        swatchGroup.fills = [];
        // Color/gradient swatch
        const swatch = figma.createRectangle();
        swatch.resize(swatchSize, swatchSize);
        swatch.x = 8;
        swatch.y = 0;
        swatch.cornerRadius = radius.md;
        if (element.type === "solid") {
            swatch.fills = [{ type: "SOLID", color: hexToRgb(element.color) }];
        }
        else if (element.type === "gradient" && element.gradient) {
            const gradientStops = element.gradient.map((color, index) => {
                let colorWithAlpha;
                if (color.startsWith("rgba") || color.startsWith("rgb")) {
                    colorWithAlpha = parseRgba(color);
                }
                else {
                    const baseColor = hexToRgb(color);
                    colorWithAlpha = { r: baseColor.r, g: baseColor.g, b: baseColor.b, a: 1 };
                }
                return {
                    color: colorWithAlpha,
                    position: index / (element.gradient.length - 1)
                };
            });
            swatch.fills = [{
                    type: "GRADIENT_LINEAR",
                    gradientTransform: [[1, 0, 0], [0, 1, 0]],
                    gradientStops: gradientStops
                }];
        }
        swatch.strokes = [{ type: "SOLID", color: hexToRgb(colors.neutral[200]) }];
        swatch.strokeWeight = 1;
        swatchGroup.appendChild(swatch);
        // Label
        const label = figma.createText();
        label.characters = element.name;
        label.x = 8;
        label.y = swatchSize + 4;
        label.resize(swatchSize, 12);
        await applyFont(label, "ui", "medium");
        applyTypography(label, "xs", "medium", "none", "normal");
        label.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[700]) }];
        label.textAlignHorizontal = "CENTER";
        swatchGroup.appendChild(label);
        // Usage note
        const usage = figma.createText();
        usage.characters = element.type === "gradient" ? "Gradient" : "Solid";
        usage.x = 8;
        usage.y = swatchSize + 18;
        usage.resize(swatchSize, 10);
        await applyFont(usage, "ui", "normal");
        applyTypography(usage, "xs", "normal", "none", "normal");
        usage.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[500]) }];
        usage.textAlignHorizontal = "CENTER";
        swatchGroup.appendChild(usage);
        uiColorsRow.appendChild(swatchGroup);
        uiX += swatchSize + 24;
    }
    palette.appendChild(uiColorsRow);
    currentY += 140;
    // Color families to display
    const colorFamilies = [
        { name: "Brand Colors", colors: colors.brand, description: "Primary brand identity colors" },
        { name: "Neutral Colors", colors: colors.neutral, description: "Text, backgrounds, and borders" },
        { name: "Accent Colors", colors: colors.accent, description: "Secondary highlights and accents" },
        { name: "Success Colors", colors: colors.success, description: "Success states and confirmations" },
        { name: "Warning Colors", colors: colors.warning, description: "Warnings and cautions" },
        { name: "Danger Colors", colors: colors.danger, description: "Errors and destructive actions" }
    ];
    for (const family of colorFamilies) {
        // Family title
        const familyTitle = figma.createText();
        familyTitle.characters = family.name;
        familyTitle.x = leftMargin;
        familyTitle.y = currentY;
        await applyFont(familyTitle, "heading", "bold");
        applyTypography(familyTitle, "lg", "bold", "tight", "normal");
        familyTitle.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
        palette.appendChild(familyTitle);
        currentY += 28;
        // Family description
        const familyDesc = figma.createText();
        familyDesc.characters = family.description;
        familyDesc.x = leftMargin;
        familyDesc.y = currentY;
        await applyFont(familyDesc, "body", "normal");
        applyTypography(familyDesc, "sm", "normal", "normal", "normal");
        familyDesc.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
        palette.appendChild(familyDesc);
        currentY += 24;
        // Create color swatches
        const swatchContainer = figma.createFrame();
        swatchContainer.name = `${family.name} Swatches`;
        swatchContainer.x = leftMargin;
        swatchContainer.y = currentY;
        swatchContainer.fills = [];
        let swatchX = 0;
        const swatchKeys = Object.keys(family.colors).sort((a, b) => {
            const aNum = parseInt(a);
            const bNum = parseInt(b);
            return aNum - bNum;
        });
        for (const colorKey of swatchKeys) {
            const colorValue = family.colors[colorKey];
            // Swatch container
            const swatchGroup = figma.createFrame();
            swatchGroup.name = `${family.name.split(' ')[0]}-${colorKey}`;
            swatchGroup.resize(swatchSize + 16, swatchSize + 40);
            swatchGroup.x = swatchX;
            swatchGroup.y = 0;
            swatchGroup.fills = [];
            // Color swatch
            const swatch = figma.createRectangle();
            swatch.resize(swatchSize, swatchSize);
            swatch.x = 8;
            swatch.y = 0;
            swatch.cornerRadius = radius.md;
            swatch.fills = [{ type: "SOLID", color: hexToRgb(colorValue) }];
            swatch.strokes = [{ type: "SOLID", color: hexToRgb(colors.neutral[200]) }];
            swatch.strokeWeight = 1;
            swatchGroup.appendChild(swatch);
            // Color name
            const colorName = figma.createText();
            colorName.characters = colorKey;
            colorName.x = 8;
            colorName.y = swatchSize + 4;
            colorName.resize(swatchSize, 12);
            await applyFont(colorName, "ui", "medium");
            applyTypography(colorName, "xs", "medium", "none", "normal");
            colorName.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[700]) }];
            colorName.textAlignHorizontal = "CENTER";
            swatchGroup.appendChild(colorName);
            // Hex value
            const hexValue = figma.createText();
            hexValue.characters = colorValue.toUpperCase();
            hexValue.x = 8;
            hexValue.y = swatchSize + 18;
            hexValue.resize(swatchSize, 12);
            await applyFont(hexValue, "ui", "normal");
            applyTypography(hexValue, "xs", "normal", "none", "normal");
            hexValue.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[500]) }];
            hexValue.textAlignHorizontal = "CENTER";
            swatchGroup.appendChild(hexValue);
            swatchContainer.appendChild(swatchGroup);
            swatchX += swatchSize + 16 + swatchSpacing;
        }
        // Set container size
        swatchContainer.resize(swatchX - swatchSpacing, swatchSize + 40);
        palette.appendChild(swatchContainer);
        currentY += swatchSize + 64;
    }
    // Usage guidelines
    currentY += 20;
    const guidelines = figma.createText();
    guidelines.characters = "Usage Guidelines:\n• Use brand colors for primary actions and key elements\n• Neutral colors provide hierarchy and structure\n• Status colors communicate state and feedback\n• Maintain proper contrast ratios for accessibility";
    guidelines.x = leftMargin;
    guidelines.y = currentY;
    guidelines.resize(800, 100);
    await applyFont(guidelines, "body", "normal");
    applyTypography(guidelines, "sm", "normal", "relaxed", "normal");
    guidelines.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
    palette.appendChild(guidelines);
    currentY += 100;
    // Final container size
    palette.resize(1200, currentY + spacing[6]);
    figma.currentPage.appendChild(palette);
    figma.viewport.scrollAndZoomIntoView([palette]);
    console.log("✅ Color Palette component created");
}
async function createTypographySpecimen() {
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
        currentY += typographyScale.fontSize["4xl"] + 2; // Only 2px below main title
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
        divider.resize(specimen.width - leftMargin - rightMargin, 2);
        divider.fills = [{
                type: "GRADIENT_LINEAR",
                gradientTransform: [
                    [1, 0, 0],
                    [0, 1, 0]
                ],
                gradientStops: [
                    { position: 0, color: { r: 0.976, g: 0.455, b: 0.086, a: 1 } }, // Red-orange (accent-500)
                    { position: 0.5, color: { r: 0.976, g: 0.455, b: 0.086, a: 1 } }, // Red-orange (accent-500) - extends the red-orange
                    { position: 0.8, color: { r: 0.984, g: 0.749, b: 0.141, a: 1 } }, // Yellow gold (warning-400)
                    { position: 1, color: { r: 0.984, g: 0.749, b: 0.141, a: 0 } } // Transparent fade
                ]
            }];
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
            { text: "Microgramma Bold Display", size: "4xl", weight: "bold" },
            { text: "Microgramma Medium Display", size: "3xl", weight: "medium" },
            { text: "Microgramma Regular Display", size: "2xl", weight: "normal" }
        ];
        for (const sample of displaySamples) {
            const textElement = figma.createText();
            textElement.characters = sample.text;
            textElement.x = leftMargin;
            textElement.y = currentY;
            textElement.textCase = "UPPER";
            await applyFont(textElement, "display", sample.weight);
            applyTypography(textElement, sample.size, sample.weight, "tight", "normal");
            textElement.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[900]) }];
            specimen.appendChild(textElement);
            currentY += typographyScale.fontSize[sample.size] + 20;
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
            { text: "Eurostile Bold Heading", size: "2xl", weight: "bold" },
            { text: "Eurostile Medium Heading", size: "xl", weight: "medium" },
            { text: "Eurostile Regular Heading", size: "lg", weight: "normal" }
        ];
        for (const sample of headingSamples) {
            const textElement = figma.createText();
            textElement.characters = sample.text;
            textElement.x = leftMargin;
            textElement.y = currentY;
            textElement.textCase = "UPPER";
            await applyFont(textElement, "heading", sample.weight);
            applyTypography(textElement, sample.size, sample.weight, "normal", "normal");
            textElement.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[800]) }];
            specimen.appendChild(textElement);
            currentY += typographyScale.fontSize[sample.size] + 18;
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
            await applyFont(textElement, "ui", sample.weight);
            applyTypography(textElement, sample.size, sample.weight, "normal", "normal");
            textElement.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[800]) }];
            specimen.appendChild(textElement);
            currentY += typographyScale.fontSize[sample.size] + 16;
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
            { size: "6xl", label: "6XL • 56px" },
            { size: "5xl", label: "5XL • 48px" },
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
            applyTypography(scaleItem, sample.size, "normal", "normal", "normal");
            scaleItem.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[600]) }];
            specimen.appendChild(scaleItem);
            currentY += typographyScale.fontSize[sample.size] + 12;
        }
        figma.currentPage.appendChild(specimen);
        figma.viewport.scrollAndZoomIntoView([specimen]);
    }
    catch (error) {
        console.error("❌ Typography specimen error:", error);
        figma.notify(`❌ Error creating typography specimen: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
}
async function createEditorialHeadline() {
    console.log("🏍️ Creating 80s Motorcycle Magazine Editorial Headline...");
    try {
        const headline = figma.createFrame();
        headline.name = "Editorial Headline • 80s Motorcycle Magazine";
        headline.resize(800, 400);
        headline.cornerRadius = 8;
        headline.fills = [{
                type: "SOLID",
                color: hexToRgb(colors.neutral[900])
            }];
        // Add gold accent border
        headline.strokeWeight = 2;
        headline.strokes = [{
                type: "SOLID",
                color: hexToRgb(colors.warning[500])
            }];
        // Main headline "SPEED"
        const mainHeadline = figma.createText();
        mainHeadline.characters = "SPEED";
        mainHeadline.x = 40;
        mainHeadline.y = 60;
        await applyFont(mainHeadline, "display", "extrabold");
        applyTypography(mainHeadline, "5xl", "extrabold", "none", "wider");
        mainHeadline.fills = [{
                type: "GRADIENT_LINEAR",
                gradientTransform: [
                    [1, 0, 0],
                    [0, 1, 0]
                ],
                gradientStops: [
                    { position: 0, color: { r: 1, g: 1, b: 1, a: 1 } }, // Pure white at top
                    { position: 1, color: { r: 0.898, g: 0.898, b: 0.898, a: 1 } } // Light gray at bottom
                ]
            }];
        headline.appendChild(mainHeadline);
        // Sub-headline "& STYLE"
        const subHeadline = figma.createText();
        subHeadline.characters = "& STYLE";
        subHeadline.x = 40;
        subHeadline.y = 60 + typographyScale.fontSize["5xl"] + 2; // 2px below SPEED
        await applyFont(subHeadline, "heading", "medium");
        applyTypography(subHeadline, "3xl", "medium", "none", "wide");
        subHeadline.fills = [{ type: "SOLID", color: hexToRgb(colors.warning[400]) }];
        headline.appendChild(subHeadline);
        // Tagline
        const tagline = figma.createText();
        tagline.characters = "The Ultimate Guide to Motorcycle Fashion";
        tagline.x = 40;
        tagline.y = subHeadline.y + typographyScale.fontSize["3xl"] + 20; // 20px below & STYLE
        await applyFont(tagline, "body", "medium");
        applyTypography(tagline, "lg", "medium", "normal", "normal");
        tagline.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[300]) }];
        headline.appendChild(tagline);
        // Add gold accent stripe at top
        const accentStripe = figma.createRectangle();
        accentStripe.x = 0;
        accentStripe.y = 0;
        accentStripe.resize(headline.width, 3);
        accentStripe.fills = [{
                type: "SOLID",
                color: hexToRgb(colors.warning[500])
            }];
        headline.appendChild(accentStripe);
        // Center the frame in the viewport
        figma.viewport.scrollAndZoomIntoView([headline]);
        console.log("✅ Editorial headline created successfully!");
    }
    catch (error) {
        console.error("❌ Editorial headline error:", error);
        figma.notify(`❌ Error creating editorial headline: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
}
async function createMainHeading() {
    console.log("🏠 Creating Main Heading Style Component...");
    try {
        const heading = figma.createFrame();
        heading.name = "Main Heading Style • House Design System";
        heading.resize(600, 400);
        heading.cornerRadius = 8;
        heading.fills = [{
                type: "SOLID",
                color: hexToRgb(colors.neutral[50])
            }];
        // Add subtle border
        heading.strokeWeight = 1;
        heading.strokes = [{
                type: "SOLID",
                color: hexToRgb(colors.neutral[200])
            }];
        // Main heading text "HOUSE DESIGN"
        const mainHeading = figma.createText();
        mainHeading.characters = "HOUSE DESIGN";
        mainHeading.x = 40;
        mainHeading.y = 40;
        mainHeading.textCase = "UPPER";
        await applyFont(mainHeading, "display", "extrabold");
        applyTypography(mainHeading, "3xl", "extrabold", "none", "wider");
        mainHeading.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[950]) }];
        // Add red and orange drop shadows to the left
        mainHeading.effects = [
            { type: "DROP_SHADOW", color: { r: 0.976, g: 0.455, b: 0.086, a: 1 }, offset: { x: -4, y: 0 }, radius: 0, visible: true, blendMode: "NORMAL" }, // Red-Orange (behind)
            { type: "DROP_SHADOW", color: { r: 0.86, g: 0.15, b: 0.15, a: 1 }, offset: { x: -2, y: 0 }, radius: 0, visible: true, blendMode: "NORMAL" } // Deep Red (on top)
        ];
        heading.appendChild(mainHeading);
        // Sub heading text "SYSTEM" in black
        const subHeading = figma.createText();
        subHeading.characters = "SYSTEM";
        subHeading.x = 40;
        subHeading.y = 40 + typographyScale.fontSize["3xl"] + 2; // 2px below main heading
        subHeading.textCase = "UPPER";
        // Use Eurostile Bold, 20pt, 1px letter spacing
        subHeading.fontName = { family: "Eurostile", style: "BoldItalic" };
        subHeading.fontSize = 20;
        subHeading.letterSpacing = { value: 1, unit: "PIXELS" };
        subHeading.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[950]) }];
        heading.appendChild(subHeading);
        // Create gradient underline for "SYSTEM"
        const underline = figma.createRectangle();
        underline.name = "System Underline";
        underline.resize(subHeading.width, 3); // 3px height for the underline
        underline.x = 40;
        underline.y = 40 + typographyScale.fontSize["3xl"] + 2 + typographyScale.fontSize.xl + 4; // Position below text with 4px gap
        // Transparent to sky blue to royal blue gradient
        underline.fills = [{
                type: "GRADIENT_LINEAR",
                gradientTransform: [
                    [1, 0, 0],
                    [0, 0, 0]
                ],
                gradientStops: [
                    { position: 0, color: { r: 0.12, g: 0.25, b: 0.67, a: 0 } }, // Transparent royal blue
                    { position: 0.5, color: { r: 0.055, g: 0.647, b: 0.914, a: 1 } }, // Sky blue
                    { position: 1, color: { r: 0.12, g: 0.25, b: 0.67, a: 1 } } // Solid royal blue
                ]
            }];
        heading.appendChild(underline);
        // Second copy with blue/sky blue shadows and yellow-orange-red underline
        const mainHeading2 = figma.createText();
        mainHeading2.characters = "HOUSE DESIGN";
        mainHeading2.x = 40;
        mainHeading2.y = 40 + typographyScale.fontSize["3xl"] + 2 + typographyScale.fontSize.xl + 4 + 3 + 40; // Position below first underline with 40px gap
        mainHeading2.textCase = "UPPER";
        await applyFont(mainHeading2, "display", "extrabold");
        applyTypography(mainHeading2, "3xl", "extrabold", "none", "wider");
        mainHeading2.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[950]) }];
        // Add blue and sky blue drop shadows to the left
        mainHeading2.effects = [
            { type: "DROP_SHADOW", color: { r: 0.055, g: 0.647, b: 0.914, a: 1 }, offset: { x: -4, y: 0 }, radius: 0, visible: true, blendMode: "NORMAL" }, // Sky Blue (behind)
            { type: "DROP_SHADOW", color: { r: 0.12, g: 0.25, b: 0.67, a: 1 }, offset: { x: -2, y: 0 }, radius: 0, visible: true, blendMode: "NORMAL" } // Royal Blue (on top)
        ];
        heading.appendChild(mainHeading2);
        // Second sub heading text "SYSTEM" in black
        const subHeading2 = figma.createText();
        subHeading2.characters = "SYSTEM";
        subHeading2.x = 40;
        subHeading2.y = mainHeading2.y + typographyScale.fontSize["3xl"] + 2; // 2px below main heading
        subHeading2.textCase = "UPPER";
        // Use Eurostile Bold, 20pt, 1px letter spacing
        subHeading2.fontName = { family: "Eurostile", style: "BoldItalic" };
        subHeading2.fontSize = 20;
        subHeading2.letterSpacing = { value: 1, unit: "PIXELS" };
        subHeading2.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[950]) }];
        heading.appendChild(subHeading2);
        // Create second gradient underline for "SYSTEM" - transparent to yellow to orange to red
        const underline2 = figma.createRectangle();
        underline2.name = "System Underline 2";
        underline2.resize(subHeading2.width, 3); // 3px height for the underline
        underline2.x = 40;
        underline2.y = subHeading2.y + typographyScale.fontSize.xl + 4; // Position below text with 4px gap
        // Transparent to yellow to orange to red gradient
        underline2.fills = [{
                type: "GRADIENT_LINEAR",
                gradientTransform: [
                    [1, 0, 0],
                    [0, 0, 0]
                ],
                gradientStops: [
                    { position: 0, color: { r: 0.984, g: 0.749, b: 0.141, a: 0 } }, // Transparent yellow
                    { position: 0.33, color: { r: 0.984, g: 0.749, b: 0.141, a: 1 } }, // Yellow
                    { position: 0.66, color: { r: 0.976, g: 0.455, b: 0.086, a: 1 } }, // Orange
                    { position: 1, color: { r: 0.86, g: 0.15, b: 0.15, a: 1 } } // Red
                ]
            }];
        heading.appendChild(underline2);
        // Third copy with 42pt font and -3px letter spacing
        const mainHeading3 = figma.createText();
        mainHeading3.characters = "HOUSE DESIGN";
        mainHeading3.x = 40;
        mainHeading3.y = mainHeading2.y + 80; // Simple 80px gap below second version
        mainHeading3.textCase = "UPPER";
        await applyFont(mainHeading3, "display", "extrabold");
        mainHeading3.fontSize = 42; // 42pt font size
        mainHeading3.letterSpacing = { value: -3, unit: "PIXELS" }; // -3px letter spacing
        mainHeading3.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[950]) }];
        // No drop shadows - let the rainbow gradient be the star
        mainHeading3.effects = [];
        heading.appendChild(mainHeading3);
        // Third sub heading text "SYSTEM" in black
        const subHeading3 = figma.createText();
        subHeading3.characters = "SYSTEM";
        subHeading3.x = 40;
        subHeading3.y = mainHeading2.y + 80 + typographyScale.fontSize["3xl"] + 2; // 2px below the letter group
        subHeading3.textCase = "UPPER";
        // Use Eurostile Bold, 20pt, 1px letter spacing
        subHeading3.fontName = { family: "Eurostile", style: "BoldItalic" };
        subHeading3.fontSize = 20;
        subHeading3.letterSpacing = { value: 1, unit: "PIXELS" };
        subHeading3.fills = [{ type: "SOLID", color: hexToRgb(colors.neutral[950]) }];
        heading.appendChild(subHeading3);
        // Create third gradient underline for "SYSTEM" - rainbow that fades to transparent on left
        const underline3 = figma.createRectangle();
        underline3.name = "System Underline 3";
        underline3.resize(subHeading3.width, 3); // 3px height for the underline
        underline3.x = 40;
        underline3.y = subHeading3.y + typographyScale.fontSize.xl + 4; // Position below text with 4px gap
        // Rainbow gradient that fades to transparent on the left
        underline3.fills = [{
                type: "GRADIENT_LINEAR",
                gradientTransform: [
                    [1, 0, 0],
                    [0, 0, 0]
                ],
                gradientStops: [
                    { position: 0, color: { r: 1, g: 0, b: 0, a: 0 } }, // Transparent red
                    { position: 0.2, color: { r: 1, g: 0, b: 0, a: 1 } }, // Red (extended)
                    { position: 0.45, color: { r: 1, g: 0.5, b: 0, a: 1 } }, // Orange (more extended)
                    { position: 0.7, color: { r: 1, g: 1, b: 0, a: 1 } }, // Yellow (much more extended)
                    { position: 0.85, color: { r: 0, g: 1, b: 0, a: 1 } }, // Green (compressed by half)
                    { position: 0.925, color: { r: 0, g: 0, b: 1, a: 1 } }, // Blue (compressed by half)
                    { position: 1, color: { r: 0.5, g: 0, b: 1, a: 1 } } // Purple (compressed by half)
                ]
            }];
        heading.appendChild(underline3);
        // Center the frame in the viewport
        figma.viewport.scrollAndZoomIntoView([heading]);
        console.log("✅ Main heading style created successfully!");
    }
    catch (error) {
        console.error("❌ Main heading error:", error);
        figma.notify(`❌ Error creating main heading: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
}
// =============================================================================
// PLUGIN INITIALIZATION & MESSAGE HANDLING
// =============================================================================
async function initializePlugin() {
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
            case "create-color-palette":
                figma.notify("Creating color palette...");
                await createColorPalette();
                figma.notify("✅ Color palette created!");
                break;
            case "create-editorial-headline":
                figma.notify("Creating editorial headline...");
                await createEditorialHeadline();
                figma.notify("✅ Editorial headline created!");
                break;
            case "create-main-heading":
                figma.notify("Creating main heading style...");
                await createMainHeading();
                figma.notify("✅ Main heading style created!");
                break;
            case "create-accordion":
                figma.notify("Creating accordion...");
                await createAccordion();
                figma.notify("✅ Accordion created!");
                break;
            case "create-dialog":
                figma.notify("Creating dialog...");
                await createDialog();
                figma.notify("✅ Dialog created!");
                break;
            case "create-tabs":
                figma.notify("Creating tabs...");
                await createTabs();
                figma.notify("✅ Tabs created!");
                break;
            case "create-dropdown":
                figma.notify("Creating dropdown...");
                await createDropdown();
                figma.notify("✅ Dropdown created!");
                break;
            case "create-progress":
                figma.notify("Creating progress...");
                await createProgressBar();
                figma.notify("✅ Progress created!");
                break;
            case "create-switch":
                figma.notify("Creating switch...");
                await createSwitch();
                figma.notify("✅ Switch created!");
                break;
            default:
                console.log(`❌ Unknown message: ${msg.type}`);
                figma.notify("❌ Unknown component type");
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("❌ Error:", error);
        figma.notify(`❌ Error: ${errorMessage}`);
    }
};
// Initialize the plugin
initializePlugin();
