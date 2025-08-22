"use strict";
figma.showUI(__html__, { width: 352, height: 600 });
figma.ui.onmessage = async (msg) => {
    if (msg.type === "insert" && msg.component) {
        try {
            // Load the font first
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
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
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            figma.notify("❌ Error creating component: " + errorMessage);
        }
    }
};
async function createButton() {
    // Create a button frame with shadcn-style sizing
    const frame = figma.createFrame();
    frame.name = "Button";
    frame.resize(120, 40); // shadcn standard height
    frame.cornerRadius = 6; // shadcn standard radius
    // Set background color (shadcn-style primary)
    frame.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }]; // Dark gray for better contrast
    // Create button text
    const text = figma.createText();
    text.characters = "Button";
    text.fontSize = 14;
    // Set font to Inter Regular (now loaded)
    text.fontName = { family: "Inter", style: "Regular" };
    text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White text
    // Center the text with shadcn-style padding
    text.x = (frame.width - text.width) / 2;
    text.y = (frame.height - text.height) / 2;
    frame.appendChild(text);
    // Add to current page
    figma.currentPage.appendChild(frame);
    // Select the new button
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Button component");
}
async function createInput() {
    // Create input frame with shadcn-style sizing
    const frame = figma.createFrame();
    frame.name = "Input Field";
    frame.resize(200, 36); // shadcn standard height
    frame.cornerRadius = 6; // shadcn standard radius
    // Set background color (white with shadcn-style border)
    frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    frame.strokeWeight = 1;
    // Create placeholder text
    const text = figma.createText();
    text.characters = "Enter text...";
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: "Regular" };
    text.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }]; // Gray placeholder
    // Position text with shadcn-style padding (12px horizontal)
    text.x = 12;
    text.y = (frame.height - text.height) / 2;
    frame.appendChild(text);
    // Add to current page
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Input component");
}
async function createTextarea() {
    // Create textarea frame
    const frame = figma.createFrame();
    frame.name = "Textarea";
    frame.resize(200, 80); // Wider and taller for multi-line
    frame.cornerRadius = 6; // shadcn standard radius
    // Set background color (white with shadcn-style border)
    frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    frame.strokeWeight = 1;
    // Create placeholder text
    const text = figma.createText();
    text.characters = "Enter your message here...";
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: "Regular" };
    text.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
    // Position text with shadcn-style padding
    text.x = 12;
    text.y = 12;
    frame.appendChild(text);
    // Add to current page
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Textarea component");
}
async function createSelect() {
    // Create select frame
    const frame = figma.createFrame();
    frame.name = "Select Dropdown";
    frame.resize(200, 36); // shadcn standard height
    frame.cornerRadius = 6; // shadcn standard radius
    // Set background color (white with shadcn-style border)
    frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    frame.strokeWeight = 1;
    // Create select text
    const text = figma.createText();
    text.characters = "Select option...";
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: "Regular" };
    text.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
    // Create dropdown arrow
    const arrow = figma.createText();
    arrow.characters = "▼";
    arrow.fontSize = 12;
    arrow.fontName = { family: "Inter", style: "Regular" };
    arrow.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
    // Position elements
    text.x = 12;
    text.y = (frame.height - text.height) / 2;
    arrow.x = frame.width - 24;
    arrow.y = (frame.height - arrow.height) / 2;
    frame.appendChild(text);
    frame.appendChild(arrow);
    // Add to current page
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Select component");
}
async function createCheckbox() {
    // Create checkbox frame
    const frame = figma.createFrame();
    frame.name = "Checkbox";
    frame.resize(16, 16); // Standard checkbox size
    frame.cornerRadius = 3; // Slightly rounded corners
    // Set background color (white with border)
    frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    frame.strokeWeight = 1;
    // Add to current page
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Checkbox component");
}
async function createRadio() {
    // Create radio frame
    const frame = figma.createFrame();
    frame.name = "Radio Button";
    frame.resize(16, 16); // Standard radio size
    frame.cornerRadius = 8; // Perfect circle
    // Set background color (white with border)
    frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    frame.strokeWeight = 1;
    // Add to current page
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Radio Button component");
}
async function createCard() {
    // Create card frame with shadcn-style sizing
    const frame = figma.createFrame();
    frame.name = "Card";
    frame.resize(240, 160);
    frame.cornerRadius = 8; // shadcn standard radius
    // Set background color (white with shadcn-style border)
    frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    frame.strokes = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.9 } }];
    frame.strokeWeight = 1;
    // Create card title
    const title = figma.createText();
    title.characters = "Card Title";
    title.fontSize = 16; // shadcn standard heading size
    title.fontName = { family: "Inter", style: "Regular" };
    title.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.1 } }];
    // Create card content
    const content = figma.createText();
    content.characters = "This is a card component with some sample content to demonstrate the design system.";
    content.fontSize = 14; // shadcn standard body size
    content.fontName = { family: "Inter", style: "Regular" };
    content.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    // Position elements with shadcn-style spacing (16px padding)
    title.x = 16;
    title.y = 16;
    content.x = 16;
    content.y = 48; // 16px from title + 16px spacing
    content.resize(208, 96); // Constrain width for proper text wrapping
    frame.appendChild(title);
    frame.appendChild(content);
    // Add to current page
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Card component");
}
async function createBadge() {
    // Create badge frame with shadcn-style sizing
    const frame = figma.createFrame();
    frame.name = "Badge";
    frame.resize(80, 20); // shadcn standard height
    frame.cornerRadius = 10; // Pill shape for badges
    // Set background color (shadcn-style secondary)
    frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
    frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    frame.strokeWeight = 1;
    // Create badge text
    const text = figma.createText();
    text.characters = "Badge";
    text.fontSize = 12; // shadcn standard small text
    text.fontName = { family: "Inter", style: "Regular" };
    text.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }];
    // Center the text
    text.x = (frame.width - text.width) / 2;
    text.y = (frame.height - text.height) / 2;
    frame.appendChild(text);
    // Add to current page
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Badge component");
}
async function createDivider() {
    // Create divider frame
    const frame = figma.createFrame();
    frame.name = "Divider";
    frame.resize(200, 1); // Horizontal line
    // Set background color (subtle gray)
    frame.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.9 } }];
    // Add to current page
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Divider component");
}
async function createAvatar() {
    // Create avatar frame
    const frame = figma.createFrame();
    frame.name = "Avatar";
    frame.resize(40, 40); // Standard avatar size
    frame.cornerRadius = 20; // Perfect circle
    // Set background color (shadcn-style secondary)
    frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
    frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    frame.strokeWeight = 1;
    // Create avatar initials
    const text = figma.createText();
    text.characters = "JD";
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: "Regular" };
    text.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }];
    // Center the text
    text.x = (frame.width - text.width) / 2;
    text.y = (frame.height - text.height) / 2;
    frame.appendChild(text);
    // Add to current page
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Avatar component");
}
async function createAlert() {
    // Create alert frame
    const frame = figma.createFrame();
    frame.name = "Alert";
    frame.resize(240, 60);
    frame.cornerRadius = 6; // shadcn standard radius
    // Set background color (info blue)
    frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.98, b: 1 } }];
    frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.9, b: 1 } }];
    frame.strokeWeight = 1;
    // Create alert text
    const text = figma.createText();
    text.characters = "This is an informational alert message.";
    text.fontSize = 14;
    text.fontName = { family: "Inter", style: "Regular" };
    text.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.4, b: 0.8 } }];
    // Position text with padding
    text.x = 12;
    text.y = (frame.height - text.height) / 2;
    text.resize(216, 20);
    frame.appendChild(text);
    // Add to current page
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.notify("✅ Inserted Alert component");
}
async function createTabs() {
    // Create tabs container
    const frame = figma.createFrame();
    frame.name = "Tabs";
    frame.resize(240, 40);
    // Set background color (transparent)
    frame.fills = [];
    // Create tab buttons
    const tab1 = figma.createFrame();
    tab1.name = "Tab 1";
    tab1.resize(80, 32);
    tab1.cornerRadius = 6;
    tab1.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
    const tab2 = figma.createFrame();
    tab2.name = "Tab 2";
    tab2.resize(80, 32);
    tab2.cornerRadius = 6;
    tab2.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
    tab2.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    tab2.strokeWeight = 1;
    const tab3 = figma.createFrame();
    tab3.name = "Tab 3";
    tab3.resize(80, 32);
    tab3.cornerRadius = 6;
    tab3.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
    tab3.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.8 } }];
    tab3.strokeWeight = 1;
    // Add tab text
    const text1 = figma.createText();
    text1.characters = "Tab 1";
    text1.fontSize = 14;
    text1.fontName = { family: "Inter", style: "Regular" };
    text1.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    const text2 = figma.createText();
    text2.characters = "Tab 2";
    text2.fontSize = 14;
    text2.fontName = { family: "Inter", style: "Regular" };
    text2.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }];
    const text3 = figma.createText();
    text3.characters = "Tab 3";
    text3.fontSize = 14;
    text3.fontName = { family: "Inter", style: "Regular" };
    text3.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }];
    // Position tabs
    tab1.x = 0;
    tab1.y = 4;
    tab2.x = 80;
    tab2.y = 4;
    tab3.x = 160;
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
    figma.notify("✅ Inserted Tabs component");
}
