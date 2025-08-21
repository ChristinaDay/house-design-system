figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  if (msg.type === "insert" && msg.component === "button") {
    const frame = figma.createFrame();
    frame.resize(100, 40);
    frame.cornerRadius = 8;

    const text = figma.createText();
    text.characters = "Button";
    frame.appendChild(text);

    figma.currentPage.appendChild(frame);
    figma.notify("Inserted Button frame");
  }
};
