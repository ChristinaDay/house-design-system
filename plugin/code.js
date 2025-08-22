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
                case "card":
                    await createCard();
                    break;
                case "badge":
                    await createBadge();
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
