figma.showUI(__html__, { width: 352, height: 600 });

// Typography System - Luxury Automotive Aesthetic
const typography = {
  display: {
    family: "Eurostile",
    fallback: "Arial Black",
    weights: { bold: 700, medium: 500 }
  },
  heading: {
    family: "Microgramma",
    fallback: "Arial Black", 
    weights: { bold: 700, medium: 500 }
  },
  body: {
    family: "Inter",
    fallback: "SF Pro Text",
    weights: { regular: 400, medium: 500, semibold: 600 }
  },
  ui: {
    family: "Futura",
    fallback: "SF Pro Display",
    weights: { medium: 500, bold: 700 }
  }
};

// Font loading with fallbacks
async function loadFonts() {
  try {
    // Try to load premium fonts first
    await figma.loadFontAsync({ family: "Eurostile", style: "Bold" });
    await figma.loadFontAsync({ family: "Microgramma", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Futura", style: "Medium" });
  } catch (error) {
    // Fall back to system fonts
    await figma.loadFontAsync({ family: "SF Pro Display", style: "Bold" });
    await figma.loadFontAsync({ family: "SF Pro Text", style: "Regular" });
  }
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === "insert" && msg.component) {
    try {
      // Load fonts first
      await loadFonts();
      
      switch (msg.component) {
        case "button":
          await createButton();
          break;
        case "input":
          await createInput();
          break;
        case "textarea":
          await createTextarea();
          break;
        case "select":
          await createSelect();
          break;
        case "checkbox":
          await createCheckbox();
          break;
        case "radio":
          await createRadio();
          break;
        case "card":
          await createCard();
          break;
        case "badge":
          await createBadge();
          break;
        case "divider":
          await createDivider();
          break;
        case "avatar":
          await createAvatar();
          break;
        case "alert":
          await createAlert();
          break;
        case "tabs":
          await createTabs();
          break;
        default:
          figma.notify("❌ Unknown component type");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      figma.notify("❌ Error creating component: " + errorMessage);
    }
  }
};

async function createButton() {
  // Create a button frame with luxury automotive styling
  const frame = figma.createFrame();
  frame.name = "Button";
  frame.resize(140, 44); // Slightly larger for luxury feel
  frame.cornerRadius = 8; // Refined radius
  
  // Set background color (deep, sophisticated)
  frame.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.15 } }]; // Deep charcoal
  
  // Create button text with luxury typography
  const text = figma.createText();
  text.characters = "BUTTON";
  text.fontSize = 14;
  
  // Use luxury automotive typography
  try {
    text.fontName = { family: "Eurostile", style: "Bold" };
  } catch {
    text.fontName = { family: "SF Pro Display", style: "Bold" };
  }
  
  text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // Pure white
  text.letterSpacing = { value: 1, unit: "PIXELS" }; // Luxury spacing
  
  // Center the text
  text.x = (frame.width - text.width) / 2;
  text.y = (frame.height - text.height) / 2;
  
  frame.appendChild(text);
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Button component");
}

async function createInput() {
  // Create input frame with refined styling
  const frame = figma.createFrame();
  frame.name = "Input Field";
  frame.resize(220, 40); // Slightly larger for luxury feel
  frame.cornerRadius = 6;
  
  // Set background color (sophisticated white)
  frame.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.98 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  frame.strokeWeight = 1;
  
  // Create placeholder text with luxury typography
  const text = figma.createText();
  text.characters = "ENTER TEXT...";
  text.fontSize = 13;
  
  try {
    text.fontName = { family: "Microgramma", style: "Medium" };
  } catch {
    text.fontName = { family: "SF Pro Text", style: "Medium" };
  }
  
  text.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.55 } }];
  text.letterSpacing = { value: 0.5, unit: "PIXELS" };
  
  // Position text with luxury spacing
  text.x = 14;
  text.y = (frame.height - text.height) / 2;
  
  frame.appendChild(text);
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Input component");
}

async function createTextarea() {
  // Create textarea frame with luxury styling
  const frame = figma.createFrame();
  frame.name = "Textarea";
  frame.resize(220, 90);
  frame.cornerRadius = 6;
  
  // Set background color (sophisticated white)
  frame.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.98 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  frame.strokeWeight = 1;
  
  // Create placeholder text with luxury typography
  const text = figma.createText();
  text.characters = "ENTER YOUR MESSAGE...";
  text.fontSize = 13;
  
  try {
    text.fontName = { family: "Microgramma", style: "Medium" };
  } catch {
    text.fontName = { family: "SF Pro Text", style: "Medium" };
  }
  
  text.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.55 } }];
  text.letterSpacing = { value: 0.5, unit: "PIXELS" };
  
  // Position text with luxury spacing
  text.x = 14;
  text.y = 14;
  
  frame.appendChild(text);
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Textarea component");
}

async function createSelect() {
  // Create select frame with luxury styling
  const frame = figma.createFrame();
  frame.name = "Select Dropdown";
  frame.resize(220, 40);
  frame.cornerRadius = 6;
  
  // Set background color (sophisticated white)
  frame.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.98 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  frame.strokeWeight = 1;
  
  // Create select text with luxury typography
  const text = figma.createText();
  text.characters = "SELECT OPTION...";
  text.fontSize = 13;
  
  try {
    text.fontName = { family: "Microgramma", style: "Medium" };
  } catch {
    text.fontName = { family: "SF Pro Text", style: "Medium" };
  }
  
  text.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.55 } }];
  text.letterSpacing = { value: 0.5, unit: "PIXELS" };
  
  // Create dropdown arrow with luxury styling
  const arrow = figma.createText();
  arrow.characters = "▼";
  arrow.fontSize = 12;
  
  try {
    arrow.fontName = { family: "Futura", style: "Medium" };
  } catch {
    arrow.fontName = { family: "SF Pro Display", style: "Medium" };
  }
  
  arrow.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.35 } }];
  
  // Position elements with luxury spacing
  text.x = 14;
  text.y = (frame.height - text.height) / 2;
  
  arrow.x = frame.width - 26;
  arrow.y = (frame.height - arrow.height) / 2;
  
  frame.appendChild(text);
  frame.appendChild(arrow);
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Select component");
}

async function createCheckbox() {
  // Create checkbox frame with luxury styling
  const frame = figma.createFrame();
  frame.name = "Checkbox";
  frame.resize(18, 18);
  frame.cornerRadius = 3;
  
  // Set background color (sophisticated white)
  frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  frame.strokeWeight = 1;
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Checkbox component");
}

async function createRadio() {
  // Create radio frame with luxury styling
  const frame = figma.createFrame();
  frame.name = "Radio Button";
  frame.resize(18, 18);
  frame.cornerRadius = 9;
  
  // Set background color (sophisticated white)
  frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  frame.strokeWeight = 1;
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Radio Button component");
}

async function createCard() {
  // Create card frame with luxury automotive styling
  const frame = figma.createFrame();
  frame.name = "Card";
  frame.resize(260, 180);
  frame.cornerRadius = 10;
  
  // Set background color (sophisticated white)
  frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.15, g: 0.15, b: 0.2 } }];
  frame.strokeWeight = 1;
  
  // Create card title with luxury typography
  const title = figma.createText();
  title.characters = "CARD TITLE";
  title.fontSize = 18;
  
  try {
    title.fontName = { family: "Eurostile", style: "Bold" };
  } catch {
    title.fontName = { family: "SF Pro Display", style: "Bold" };
  }
  
  title.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.15 } }];
  title.letterSpacing = { value: 1, unit: "PIXELS" };
  
  // Create card content with luxury typography
  const content = figma.createText();
  content.characters = "This is a luxury automotive card component with sophisticated typography and refined spacing.";
  content.fontSize = 14;
  
  try {
    content.fontName = { family: "Inter", style: "Regular" };
  } catch {
    content.fontName = { family: "SF Pro Text", style: "Regular" };
  }
  
  content.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.35 } }];
  content.lineHeight = { value: 20, unit: "PIXELS" };
  
  // Position elements with luxury spacing
  title.x = 18;
  title.y = 18;
  
  content.x = 18;
  content.y = 52;
  content.resize(224, 110);
  
  frame.appendChild(title);
  frame.appendChild(content);
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Card component");
}

async function createBadge() {
  // Create badge frame with luxury automotive styling
  const frame = figma.createFrame();
  frame.name = "Badge";
  frame.resize(90, 24);
  frame.cornerRadius = 12;
  
  // Set background color (sophisticated accent)
  frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.97 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  frame.strokeWeight = 1;
  
  // Create badge text with luxury typography
  const text = figma.createText();
  text.characters = "BADGE";
  text.fontSize = 11;
  
  try {
    text.fontName = { family: "Microgramma", style: "Bold" };
  } catch {
    text.fontName = { family: "SF Pro Text", style: "Bold" };
  }
  
  text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  text.letterSpacing = { value: 0.5, unit: "PIXELS" };
  
  // Center the text
  text.x = (frame.width - text.width) / 2;
  text.y = (frame.height - text.height) / 2;
  
  frame.appendChild(text);
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Badge component");
}

async function createDivider() {
  // Create divider frame with luxury styling
  const frame = figma.createFrame();
  frame.name = "Divider";
  frame.resize(220, 2);
  
  // Set background color (sophisticated gray)
  frame.fills = [{ type: 'SOLID', color: { r: 0.85, g: 0.85, b: 0.87 } }];
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Divider component");
}

async function createAvatar() {
  // Create avatar frame with luxury automotive styling
  const frame = figma.createFrame();
  frame.name = "Avatar";
  frame.resize(44, 44);
  frame.cornerRadius = 22;
  
  // Set background color (sophisticated accent)
  frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.97 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  frame.strokeWeight = 1;
  
  // Create avatar initials with luxury typography
  const text = figma.createText();
  text.characters = "JD";
  text.fontSize = 16;
  
  try {
    text.fontName = { family: "Eurostile", style: "Bold" };
  } catch {
    text.fontName = { family: "SF Pro Display", style: "Bold" };
  }
  
  text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  text.letterSpacing = { value: 0.5, unit: "PIXELS" };
  
  // Center the text
  text.x = (frame.width - text.width) / 2;
  text.y = (frame.height - text.height) / 2;
  
  frame.appendChild(text);
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Avatar component");
}

async function createAlert() {
  // Create alert frame with luxury automotive styling
  const frame = figma.createFrame();
  frame.name = "Alert";
  frame.resize(260, 70);
  frame.cornerRadius = 8;
  
  // Set background color (sophisticated info blue)
  frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.97, b: 1 } }];
  frame.strokes = [{ type: 'SOLID', color: { r: 0.7, g: 0.8, b: 0.9 } }];
  frame.strokeWeight = 1;
  
  // Create alert text with luxury typography
  const text = figma.createText();
  text.characters = "This is a luxury automotive alert message with sophisticated typography.";
  text.fontSize = 14;
  
  try {
    text.fontName = { family: "Inter", style: "Medium" };
  } catch {
    text.fontName = { family: "SF Pro Text", style: "Medium" };
  }
  
  text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.3, b: 0.6 } }];
  text.lineHeight = { value: 20, unit: "PIXELS" };
  
  // Position text with luxury spacing
  text.x = 16;
  text.y = (frame.height - text.height) / 2;
  text.resize(228, 40);
  
  frame.appendChild(text);
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Alert component");
}

async function createTabs() {
  // Create tabs container with luxury automotive styling
  const frame = figma.createFrame();
  frame.name = "Tabs";
  frame.resize(260, 44);
  
  // Set background color (transparent)
  frame.fills = [];
  
  // Create tab buttons with luxury styling
  const tab1 = figma.createFrame();
  tab1.name = "Tab 1";
  tab1.resize(86, 36);
  tab1.cornerRadius = 6;
  tab1.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.15 } }];
  
  const tab2 = figma.createFrame();
  tab2.name = "Tab 2";
  tab2.resize(86, 36);
  tab2.cornerRadius = 6;
  tab2.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.98 } }];
  tab2.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  tab2.strokeWeight = 1;
  
  const tab3 = figma.createFrame();
  tab3.name = "Tab 3";
  tab3.resize(86, 36);
  tab3.cornerRadius = 6;
  tab3.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.98 } }];
  tab3.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.25 } }];
  tab3.strokeWeight = 1;
  
  // Add tab text with luxury typography
  const text1 = figma.createText();
  text1.characters = "TAB 1";
  text1.fontSize = 13;
  
  try {
    text1.fontName = { family: "Microgramma", style: "Bold" };
  } catch {
    text1.fontName = { family: "SF Pro Text", style: "Bold" };
  }
  
  text1.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  text1.letterSpacing = { value: 0.5, unit: "PIXELS" };
  
  const text2 = figma.createText();
  text2.characters = "TAB 2";
  text2.fontSize = 13;
  
  try {
    text2.fontName = { family: "Microgramma", style: "Medium" };
  } catch {
    text2.fontName = { family: "SF Pro Text", style: "Medium" };
  }
  
  text2.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.35 } }];
  text2.letterSpacing = { value: 0.5, unit: "PIXELS" };
  
  const text3 = figma.createText();
  text3.characters = "TAB 3";
  text3.fontSize = 13;
  
  try {
    text3.fontName = { family: "Microgramma", style: "Medium" };
  } catch {
    text3.fontName = { family: "SF Pro Text", style: "Medium" };
  }
  
  text3.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.35 } }];
  text3.letterSpacing = { value: 0.5, unit: "PIXELS" };
  
  // Position tabs with luxury spacing
  tab1.x = 0;
  tab1.y = 4;
  
  tab2.x = 87;
  tab2.y = 4;
  
  tab3.x = 174;
  tab3.y = 4;
  
  // Center text in tabs
  text1.x = (tab1.width - text1.width) / 2;
  text1.y = (tab1.height - text1.height) / 2;
  
  text2.x = (tab2.width - text2.width) / 2;
  text2.y = (tab2.height - text2.height) / 2;
  
  text3.x = (tab3.width - text3.width) / 2;
  text3.y = (tab3.height - text3.height) / 2;
  
  // Assemble tabs
  tab1.appendChild(text1);
  tab2.appendChild(text2);
  tab3.appendChild(text3);
  
  frame.appendChild(tab1);
  frame.appendChild(tab2);
  frame.appendChild(tab3);
  
  // Add to current page
  figma.currentPage.appendChild(frame);
  figma.currentPage.selection = [frame];
  
  figma.notify("✅ Inserted Luxury Tabs component");
}
