"use strict";
figma.showUI(__html__, { width: 300, height: 200 });
figma.ui.onmessage = (msg) => {
    if (msg.type === "insert" && msg.component === "button") {
        // Create a button frame with proper sizing
        const frame = figma.createFrame();
        frame.name = "Button";
        frame.resize(120, 48);
        frame.cornerRadius = 8; // This will be our --radius-base token
        // Set background color (our brand blue)
        frame.fills = [{ type: 'SOLID', color: { r: 0.427, g: 0.369, b: 0.953 } }]; // #6D5EF3
        // Create button text
        const text = figma.createText();
        text.characters = "Button";
        text.fontSize = 14;
        // Set font to a system font that looks good
        text.fontName = { family: "Inter", style: "Medium" };
        text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // White text
        // Center the text in the button
        text.x = (frame.width - text.width) / 2;
        text.y = (frame.height - text.height) / 2;
        frame.appendChild(text);
        // Add to current page
        figma.currentPage.appendChild(frame);
        // Select the new button
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Button component");
    }
};
