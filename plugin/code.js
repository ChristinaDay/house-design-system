"use strict";
// Figma Plugin for House Design System
// Luxury Automotive Aesthetic with System Typography
figma.showUI(__html__, { width: 400, height: 600 });
// Typography System - Luxury Automotive Aesthetic
const typography = {
    display: {
        family: "Arial Black",
        fallback: "Arial",
        weights: { bold: 700, medium: 500 }
    },
    heading: {
        family: "Arial Black",
        fallback: "Arial",
        weights: { bold: 700, medium: 500 }
    },
    body: {
        family: "SF Pro Text",
        fallback: "Arial",
        weights: { regular: 400, medium: 500, semibold: 600 }
    },
    ui: {
        family: "SF Pro Display",
        fallback: "Arial",
        weights: { medium: 500, bold: 700 }
    }
};
// Font loading with system fonts
async function loadFonts() {
    try {
        // Load system fonts that are available in Figma
        await figma.loadFontAsync({ family: "Arial Black", style: "Regular" });
        await figma.loadFontAsync({ family: "SF Pro Display", style: "Bold" });
        await figma.loadFontAsync({ family: "SF Pro Text", style: "Regular" });
        console.log("✅ System fonts loaded successfully");
    }
    catch (error) {
        console.log("⚠️ Some fonts failed to load, using fallbacks");
        // Fall back to basic fonts
        await figma.loadFontAsync({ family: "Arial", style: "Regular" });
    }
}
// Component creation functions
async function createButton() {
    try {
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
        // Use Arial Black for that bold, automotive feel
        try {
            text.fontName = { family: "Arial Black", style: "Regular" };
        }
        catch (_a) {
            text.fontName = { family: "Arial", style: "Bold" };
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
        figma.notify("✅ Inserted Luxury Button with Automotive Typography");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating button: ${errorMessage}`);
        console.error("Button creation error:", error);
    }
}
async function createInput() {
    try {
        const frame = figma.createFrame();
        frame.name = "Input";
        frame.resize(200, 44);
        frame.cornerRadius = 6;
        frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.97 } }];
        frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.85 } }];
        frame.strokeWeight = 1;
        const text = figma.createText();
        text.characters = "Input text";
        text.fontSize = 14;
        text.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.35 } }];
        // Use Arial Black for placeholder text
        try {
            text.fontName = { family: "Arial Black", style: "Regular" };
        }
        catch (_a) {
            text.fontName = { family: "Arial", style: "Regular" };
        }
        text.x = 12;
        text.y = (frame.height - text.height) / 2;
        frame.appendChild(text);
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Input with Automotive Typography");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating input: ${errorMessage}`);
        console.error("Input creation error:", error);
    }
}
async function createCard() {
    try {
        const frame = figma.createFrame();
        frame.name = "Card";
        frame.resize(240, 160);
        frame.cornerRadius = 12;
        frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        frame.strokes = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.95 } }];
        frame.strokeWeight = 1;
        const title = figma.createText();
        title.characters = "CARD TITLE";
        title.fontSize = 18;
        title.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.15 } }];
        // Use Arial Black for card title
        try {
            title.fontName = { family: "Arial Black", style: "Regular" };
        }
        catch (_a) {
            title.fontName = { family: "Arial", style: "Bold" };
        }
        title.letterSpacing = { value: 0.5, unit: "PIXELS" };
        title.x = 16;
        title.y = 16;
        frame.appendChild(title);
        const content = figma.createText();
        content.characters = "Card content goes here with some sample text to show the layout.";
        content.fontSize = 14;
        content.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.45 } }];
        content.fontName = { family: "SF Pro Text", style: "Regular" };
        content.x = 16;
        content.y = 50;
        content.resize(208, 94);
        frame.appendChild(content);
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Card with Automotive Typography");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating card: ${errorMessage}`);
        console.error("Card creation error:", error);
    }
}
async function createBadge() {
    try {
        const frame = figma.createFrame();
        frame.name = "Badge";
        frame.resize(80, 24);
        frame.cornerRadius = 12;
        frame.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.15 } }];
        const text = figma.createText();
        text.characters = "BADGE";
        text.fontSize = 12;
        text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        // Use Arial Black for badge text
        try {
            text.fontName = { family: "Arial Black", style: "Regular" };
        }
        catch (_a) {
            text.fontName = { family: "Arial", style: "Bold" };
        }
        text.letterSpacing = { value: 0.5, unit: "PIXELS" };
        text.x = (frame.width - text.width) / 2;
        text.y = (frame.height - text.height) / 2;
        frame.appendChild(text);
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Badge with Automotive Typography");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating badge: ${errorMessage}`);
        console.error("Badge creation error:", error);
    }
}
async function createTextarea() {
    try {
        const frame = figma.createFrame();
        frame.name = "Textarea";
        frame.resize(200, 100);
        frame.cornerRadius = 6;
        frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.97 } }];
        frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.85 } }];
        frame.strokeWeight = 1;
        const text = figma.createText();
        text.characters = "Textarea content with multiple lines to demonstrate the component.";
        text.fontSize = 14;
        text.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.35 } }];
        text.fontName = { family: "SF Pro Text", style: "Regular" };
        text.x = 12;
        text.y = 12;
        text.resize(176, 76);
        frame.appendChild(text);
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Textarea");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating textarea: ${errorMessage}`);
        console.error("Textarea creation error:", error);
    }
}
async function createSelect() {
    try {
        const frame = figma.createFrame();
        frame.name = "Select";
        frame.resize(200, 44);
        frame.cornerRadius = 6;
        frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.97 } }];
        frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.85 } }];
        frame.strokeWeight = 1;
        const text = figma.createText();
        text.characters = "Select option";
        text.fontSize = 14;
        text.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.35 } }];
        text.fontName = { family: "SF Pro Text", style: "Regular" };
        text.x = 12;
        text.y = (frame.height - text.height) / 2;
        frame.appendChild(text);
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Select");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating select: ${errorMessage}`);
        console.error("Select creation error:", error);
    }
}
async function createCheckbox() {
    try {
        const frame = figma.createFrame();
        frame.name = "Checkbox";
        frame.resize(20, 20);
        frame.cornerRadius = 4;
        frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.85 } }];
        frame.strokeWeight = 1;
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Checkbox");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating checkbox: ${errorMessage}`);
        console.error("Checkbox creation error:", error);
    }
}
async function createRadio() {
    try {
        const frame = figma.createFrame();
        frame.name = "Radio";
        frame.resize(20, 20);
        frame.cornerRadius = 10;
        frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        frame.strokes = [{ type: 'SOLID', color: { r: 0.8, g: 0.8, b: 0.85 } }];
        frame.strokeWeight = 1;
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Radio");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating radio: ${errorMessage}`);
        console.error("Radio creation error:", error);
    }
}
async function createDivider() {
    try {
        const frame = figma.createFrame();
        frame.name = "Divider";
        frame.resize(200, 1);
        frame.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.95 } }];
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Divider");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating divider: ${errorMessage}`);
        console.error("Divider creation error:", error);
    }
}
async function createAvatar() {
    try {
        const frame = figma.createFrame();
        frame.name = "Avatar";
        frame.resize(40, 40);
        frame.cornerRadius = 20;
        frame.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.15 } }];
        const text = figma.createText();
        text.characters = "U";
        text.fontSize = 18;
        text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        // Use Arial Black for avatar initial
        try {
            text.fontName = { family: "Arial Black", style: "Regular" };
        }
        catch (_a) {
            text.fontName = { family: "Arial", style: "Bold" };
        }
        text.x = (frame.width - text.width) / 2;
        text.y = (frame.height - text.height) / 2;
        frame.appendChild(text);
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Avatar with Automotive Typography");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating avatar: ${errorMessage}`);
        console.error("Avatar creation error:", error);
    }
}
async function createAlert() {
    try {
        const frame = figma.createFrame();
        frame.name = "Alert";
        frame.resize(240, 80);
        frame.cornerRadius = 8;
        frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.97, b: 1 } }];
        frame.strokes = [{ type: 'SOLID', color: { r: 0.7, g: 0.8, b: 1 } }];
        frame.strokeWeight = 1;
        const title = figma.createText();
        title.characters = "ALERT";
        title.fontSize = 16;
        title.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.15 } }];
        // Use Arial Black for alert title
        try {
            title.fontName = { family: "Arial Black", style: "Regular" };
        }
        catch (_a) {
            title.fontName = { family: "Arial", style: "Bold" };
        }
        title.letterSpacing = { value: 0.5, unit: "PIXELS" };
        title.x = 16;
        title.y = 16;
        frame.appendChild(title);
        const content = figma.createText();
        content.characters = "This is an alert message with important information.";
        content.fontSize = 14;
        content.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.45 } }];
        content.fontName = { family: "SF Pro Text", style: "Regular" };
        content.x = 16;
        content.y = 40;
        content.resize(208, 32);
        frame.appendChild(content);
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Alert with Automotive Typography");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating alert: ${errorMessage}`);
        console.error("Alert creation error:", error);
    }
}
async function createTabs() {
    try {
        const frame = figma.createFrame();
        frame.name = "Tabs";
        frame.resize(240, 60);
        frame.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.99 } }];
        const tab1 = figma.createFrame();
        tab1.name = "Tab 1";
        tab1.resize(80, 40);
        tab1.cornerRadius = 6;
        tab1.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.15 } }];
        tab1.x = 16;
        tab1.y = 10;
        const tab1Text = figma.createText();
        tab1Text.characters = "TAB 1";
        tab1Text.fontSize = 14;
        tab1Text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        // Use Arial Black for active tab
        try {
            tab1Text.fontName = { family: "Arial Black", style: "Regular" };
        }
        catch (_a) {
            tab1Text.fontName = { family: "Arial", style: "Bold" };
        }
        tab1Text.letterSpacing = { value: 0.5, unit: "PIXELS" };
        tab1Text.x = (tab1.width - tab1Text.width) / 2;
        tab1Text.y = (tab1.height - tab1Text.height) / 2;
        tab1.appendChild(tab1Text);
        const tab2 = figma.createFrame();
        tab2.name = "Tab 2";
        tab2.resize(80, 40);
        tab2.cornerRadius = 6;
        tab2.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.97 } }];
        tab2.strokes = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.95 } }];
        tab2.strokeWeight = 1;
        tab2.x = 104;
        tab2.y = 10;
        const tab2Text = figma.createText();
        tab2Text.characters = "TAB 2";
        tab2Text.fontSize = 14;
        tab2Text.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.45 } }];
        tab2Text.fontName = { family: "SF Pro Text", style: "Regular" };
        tab2Text.x = (tab2.width - tab2Text.width) / 2;
        tab2Text.y = (tab2.height - tab2Text.height) / 2;
        tab2.appendChild(tab2Text);
        frame.appendChild(tab1);
        frame.appendChild(tab2);
        figma.currentPage.appendChild(frame);
        figma.currentPage.selection = [frame];
        figma.notify("✅ Inserted Tabs with Automotive Typography");
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error creating tabs: ${errorMessage}`);
        console.error("Tabs creation error:", error);
    }
}
// Message handler for component creation
figma.ui.onmessage = async (msg) => {
    try {
        // Load fonts first
        await loadFonts();
        // Handle component creation based on message
        switch (msg.type) {
            case 'create-button':
                await createButton();
                break;
            case 'create-input':
                await createInput();
                break;
            case 'create-card':
                await createCard();
                break;
            case 'create-badge':
                await createBadge();
                break;
            case 'create-textarea':
                await createTextarea();
                break;
            case 'create-select':
                await createSelect();
                break;
            case 'create-checkbox':
                await createCheckbox();
                break;
            case 'create-radio':
                await createRadio();
                break;
            case 'create-divider':
                await createDivider();
                break;
            case 'create-avatar':
                await createAvatar();
                break;
            case 'create-alert':
                await createAlert();
                break;
            case 'create-tabs':
                await createTabs();
                break;
            default:
                figma.notify("❌ Unknown component type");
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        figma.notify(`❌ Error: ${errorMessage}`);
        console.error("Plugin error:", error);
    }
};
