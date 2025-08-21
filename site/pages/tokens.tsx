import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { ThemeProvider } from "../components/ThemeProvider";

const colorPalettes = {
  brand: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
  neutral: ["0", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"],
  accent: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
  success: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
  warning: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
  danger: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
};

const spacingValues = ["0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "12", "16", "20", "24"];

const radiusValues = ["none", "sm", "base", "md", "lg", "xl", "2xl", "3xl", "full"];

const shadowValues = ["xs", "sm", "base", "md", "lg", "xl", "2xl", "inner"];

const fontSizes = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];

const fontWeights = ["light", "normal", "medium", "semibold", "bold", "extrabold"];

// Helper functions for font size descriptions
function getSizeUsage(size: string): string {
  const usageMap: Record<string, string> = {
    xs: "Captions, fine print, secondary information",
    sm: "Small text, labels, metadata",
    base: "Body text, paragraphs, main content",
    lg: "Large body text, emphasis, subheadings",
    xl: "Subheadings, section titles, important text",
    "2xl": "Page headings, major section titles",
    "3xl": "Hero headings, page titles, prominent displays",
    "4xl": "Large hero text, marketing headlines",
    "5xl": "Extra large displays, billboard text",
    "6xl": "Massive displays, very prominent text"
  };
  return usageMap[size] || "General text";
}

function getSizeCharacteristics(size: string): string {
  const charMap: Record<string, string> = {
    xs: "Very small, requires good contrast, best for limited space",
    sm: "Small but readable, good for secondary information",
    base: "Standard reading size, optimal for body text and accessibility",
    lg: "Larger than body text, good for emphasis without being overwhelming",
    xl: "Prominent but not dominant, excellent for section headers",
    "2xl": "Large and attention-grabbing, perfect for page titles",
    "3xl": "Very prominent, use sparingly for main page headings",
    "4xl": "Extremely large, reserved for hero sections and major announcements",
    "5xl": "Massive scale, use only for maximum impact",
    "6xl": "Maximum scale, very limited use cases"
  };
  return charMap[size] || "Standard text characteristics";
}

function getWeightUsage(weight: string): string {
  const usageMap: Record<string, string> = {
    light: "Subtle text, secondary information, fine print",
    normal: "Body text, general content, default weight",
    medium: "Emphasis, subheadings, important text",
    semibold: "Strong emphasis, section headers, key information",
    bold: "Headings, titles, very important text",
    extrabold: "Hero text, maximum emphasis, prominent displays"
  };
  return usageMap[weight] || "General text weight";
}

function getWeightCharacteristics(weight: string): string {
  const charMap: Record<string, string> = {
    light: "Thin and elegant, good for subtle hierarchy",
    normal: "Standard weight, optimal for readability",
    medium: "Slightly heavier, good for emphasis without being overwhelming",
    semibold: "Heavy enough for headers, maintains readability",
    bold: "Strong presence, excellent for titles and headings",
    extrabold: "Maximum weight, use sparingly for maximum impact"
  };
  return charMap[weight] || "Standard weight characteristics";
}

function getShadowUsage(shadow: string): string {
  const usageMap: Record<string, string> = {
    xs: "Subtle depth, small elements, fine details",
    sm: "Light elevation, cards, subtle depth",
    base: "Standard depth, buttons, form elements",
    md: "Medium elevation, dropdowns, modals",
    lg: "Strong depth, large cards, prominent elements",
    xl: "Heavy elevation, hero sections, major components",
    "2xl": "Maximum depth, very prominent displays",
    inner: "Inset shadows, pressed states, form inputs"
  };
  return usageMap[shadow] || "General shadow usage";
}

function getRadiusUsage(radius: string): string {
  const usageMap: Record<string, string> = {
    none: "Sharp edges, technical interfaces, data tables",
    sm: "Subtle rounding, small elements, fine details",
    base: "Standard rounding, buttons, form elements",
    md: "Medium rounding, cards, content areas",
    lg: "Large rounding, modals, major components",
    xl: "Heavy rounding, hero sections, prominent displays",
    "2xl": "Very heavy rounding, organic shapes",
    "3xl": "Maximum rounding, pill shapes, organic design",
    full: "Complete rounding, circles, pill buttons"
  };
  return usageMap[radius] || "General radius usage";
}

function getSpacingUsage(value: string): string {
  const usageMap: Record<string, string> = {
    "0": "No spacing, elements touch each other",
    "px": "1px spacing, minimal separation",
    "0.5": "2px spacing, very tight spacing",
    "1": "4px spacing, tight spacing for related elements",
    "1.5": "6px spacing, close spacing",
    "2": "8px spacing, standard spacing between elements",
    "2.5": "10px spacing, comfortable spacing",
    "3": "12px spacing, good breathing room",
    "3.5": "14px spacing, generous spacing",
    "4": "16px spacing, standard section spacing",
    "5": "20px spacing, comfortable section spacing",
    "6": "24px spacing, good section separation",
    "7": "28px spacing, generous section spacing",
    "8": "32px spacing, major section spacing",
    "9": "36px spacing, large section spacing",
    "10": "40px spacing, very large section spacing",
    "12": "48px spacing, hero section spacing",
    "16": "64px spacing, page section spacing",
    "20": "80px spacing, major page spacing",
    "24": "96px spacing, maximum page spacing"
  };
  return usageMap[value] || "General spacing usage";
}

function ColorPalette({ name, shades }: { name: string; shades: string[] }) {
  const [hexValues, setHexValues] = useState<Record<string, string>>({});

  useEffect(() => {
    // Get computed hex values for display
    const computedHexes: Record<string, string> = {};
    shades.forEach(shade => {
      const cssVar = `--color-${name}-${shade}`;
      const computedValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar);
      if (computedValue) {
        computedHexes[shade] = computedValue.trim();
      }
    });
    setHexValues(computedHexes);
  }, [name, shades]);

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-700 capitalize">{name}</h3>
      <div className="grid grid-cols-5 gap-2">
        {shades.map((shade) => (
          <div key={shade} className="space-y-1">
            <div
              className="h-12 w-full rounded border border-gray-200"
              style={{ 
                backgroundColor: `var(--color-${name}-${shade}) !important`,
                height: '48px' // Explicit height since Tailwind h-12 isn't working
              }}
            />
            <p className="text-xs text-gray-500 text-center">{shade}</p>
            <p className="text-xs text-gray-400 text-center">var(--color-{name}-{shade})</p>
            {hexValues[shade] && (
              <p className="text-xs font-mono text-gray-600 text-center">{hexValues[shade]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SpacingDemo() {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Spacing Scale</h3>
      
      {/* Basic Spacing Values */}
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-800">Basic Spacing Values</h4>
        <div className="grid grid-cols-2 gap-4">
          {spacingValues.slice(0, 10).map((value) => (
            <div key={value} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-gray-700 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">{value}</span>
                <code className="text-xs bg-gray-100 px-3 py-1 rounded font-mono text-gray-700">
                  var(--spacing-{value})
                </code>
              </div>
              <div className="flex items-center space-x-4">
                <div
                  className="bg-indigo-200 h-6 rounded flex items-center justify-center"
                  style={{ width: `var(--spacing-${value})` }}
                >
                  <span className="text-xs text-indigo-800 font-mono">{value}</span>
                </div>
                <div className="text-sm text-gray-500">
                  Width: <code className="bg-gray-100 px-1 rounded">var(--spacing-${value})</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Component Context Examples */}
      <div className="space-y-6">
        <h4 className="text-md font-medium text-gray-800">Component Context Examples</h4>
        
        {/* Button Spacing */}
        <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
          <h5 className="text-sm font-semibold text-gray-700 mb-4">Button Spacing</h5>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 w-16">Padding:</span>
              <div className="flex space-x-2">
                <button className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">2px</button>
                <button className="px-3 py-2 bg-blue-100 text-blue-800 rounded text-xs">3px</button>
                <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded text-xs">4px</button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500 w-16">Gap:</span>
              <div className="flex space-x-2">
                <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded">Button</button>
                <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded">Button</button>
                <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded">Button</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card Spacing */}
        <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
          <h5 className="text-sm font-semibold text-gray-700 mb-4">Card Spacing</h5>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h6 className="font-medium mb-2">Tight (4px)</h6>
              <p className="text-sm text-gray-600">Content with minimal spacing</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h6 className="font-medium mb-3">Standard (6px)</h6>
              <p className="text-sm text-gray-600">Content with comfortable spacing</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg">
              <h6 className="font-medium mb-4">Generous (8px)</h6>
              <p className="text-sm text-gray-600">Content with generous spacing</p>
            </div>
          </div>
        </div>

        {/* Form Spacing */}
        <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
          <h5 className="text-sm font-semibold text-gray-700 mb-4">Form Spacing</h5>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter email" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter password" />
            </div>
            <div className="pt-2">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md">Sign In</button>
            </div>
          </div>
        </div>

        {/* Layout Spacing */}
        <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
          <h5 className="text-sm font-semibold text-gray-700 mb-4">Layout Spacing</h5>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-200 rounded flex items-center justify-center text-sm">Logo</div>
              <div className="flex-1">
                <h6 className="font-medium">Header Section</h6>
                <p className="text-sm text-gray-600">Navigation and branding with 6px spacing</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h6 className="font-medium mb-4">Content Section</h6>
              <p className="text-sm text-gray-600 mb-4">Main content area with 6px section spacing</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded">Feature 1</div>
                <div className="p-4 bg-gray-50 rounded">Feature 2</div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacing Relationships */}
        <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
          <h5 className="text-sm font-semibold text-gray-700 mb-4">Spacing Relationships</h5>
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500 w-16">2px → 4px:</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-indigo-200 rounded"></div>
                <div className="w-4 h-2 bg-indigo-300 rounded"></div>
              </div>
              <span className="text-xs text-gray-600">2x relationship</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500 w-16">4px → 8px:</span>
              <div className="flex space-x-2">
                <div className="w-4 h-2 bg-indigo-200 rounded"></div>
                <div className="w-8 h-2 bg-indigo-300 rounded"></div>
              </div>
              <span className="text-xs text-gray-600">2x relationship</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500 w-16">8px → 16px:</span>
              <div className="flex space-x-4">
                <div className="w-8 h-2 bg-indigo-200 rounded"></div>
                <div className="w-16 h-2 bg-indigo-300 rounded"></div>
              </div>
              <span className="text-xs text-gray-600">2x relationship</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TypographyDemo() {
  return (
    <div className="space-y-6">
      {/* Font Family Overview - At the TOP for immediate visibility */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Font Families</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg bg-blue-50 shadow-sm">
            <h4 className="text-lg font-bold text-blue-900 mb-3">Default Font</h4>
            <p className="text-xl text-gray-900 mb-3">
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-sm text-blue-700 font-mono bg-white p-2 rounded border mb-3">
              San Francisco, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif
            </p>
            <p className="text-sm text-gray-700 font-medium">Body text, headings, UI elements</p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg bg-green-50 shadow-sm">
            <h4 className="text-lg font-bold text-green-900 mb-3">Monospace Font</h4>
            <p className="text-xl text-gray-900 font-mono mb-3">
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-sm text-green-700 font-mono bg-white p-2 rounded border mb-3">
              SF Mono, Monaco, Consolas, Liberation Mono, monospace
            </p>
            <p className="text-sm text-gray-700 font-medium">Code, technical content, data tables</p>
          </div>
        </div>
      </div>

      {/* Font Sizes with immediate context */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Font Sizes</h3>
        <div className="space-y-4">
          {fontSizes.map((size) => (
            <div key={size} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-bold text-gray-700 w-16 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{size}</span>
                  <span className="text-sm text-gray-600">{getSizeUsage(size)}</span>
                </div>
                <code className="text-xs bg-gray-100 px-3 py-1 rounded font-mono text-gray-700">
                  var(--typography-fontSize-{size})
                </code>
              </div>
              <p
                className="text-gray-900 border-l-4 border-blue-400 pl-4 py-2 bg-blue-50 rounded-r"
                style={{ fontSize: `var(--typography-fontSize-${size})` }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Font Weights with immediate context */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Font Weights</h3>
        <div className="space-y-4">
          {fontWeights.map((weight) => (
            <div key={weight} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-bold text-gray-700 w-20 bg-green-100 text-green-800 px-3 py-1 rounded-full">{weight}</span>
                  <span className="text-sm text-gray-600">{getWeightUsage(weight)}</span>
                </div>
                <code className="text-xs bg-gray-100 px-3 py-1 rounded font-mono text-gray-700">
                  var(--typography-fontWeight-{weight})
                </code>
              </div>
              <p
                className="text-lg text-gray-900 border-l-4 border-green-400 pl-4 py-2 bg-green-50 rounded-r"
                style={{ fontWeight: `var(--typography-fontWeight-${weight})` }}
              >
                Typography specimen
              </p>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

function ShadowDemo() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Shadow Scale</h3>
      <div className="grid grid-cols-2 gap-6">
        {shadowValues.map((shadow) => (
          <div key={shadow} className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold text-gray-700 bg-purple-100 text-purple-800 px-3 py-1 rounded-full">{shadow}</span>
              <code className="text-xs bg-gray-100 px-3 py-1 rounded font-mono text-gray-700">
                var(--shadow-{shadow})
              </code>
            </div>
            <div
              className="h-24 w-full bg-white rounded-lg border border-gray-200 flex items-center justify-center"
              style={{ boxShadow: `var(--shadow-${shadow})` }}
            >
              <span className="text-sm text-gray-500">Shadow Preview</span>
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center">
              {getShadowUsage(shadow)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RadiusDemo() {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Border Radius Scale</h3>
      
      {/* Real Component Examples - Now at the top! */}
      <div className="space-y-6">
        <h4 className="text-md font-medium text-gray-800">Real Component Examples</h4>
        
        {/* Buttons with different radius */}
        <div className="space-y-6">
          <h5 className="text-sm font-medium text-gray-700">Buttons</h5>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Sharp (none)</h6>
              <button className="px-5 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors" style={{ borderRadius: 'var(--radius-none)' }}>
                Sharp Button
              </button>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Subtle (sm)</h6>
              <button className="px-5 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors" style={{ borderRadius: 'var(--radius-sm)' }}>
                Subtle Button
              </button>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Standard (base)</h6>
              <button className="px-5 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors" style={{ borderRadius: 'var(--radius-base)' }}>
                Standard Button
              </button>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Rounded (lg)</h6>
              <button className="px-5 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors" style={{ borderRadius: 'var(--radius-lg)' }}>
                Rounded Button
              </button>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Pill (full)</h6>
              <button className="px-5 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors" style={{ borderRadius: 'var(--radius-full)' }}>
                Pill Button
              </button>
            </div>
          </div>
        </div>

        {/* Cards with different radius */}
        <div className="space-y-6">
          <h5 className="text-sm font-medium text-gray-700">Cards</h5>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Sharp Card (none)</h6>
              <div className="p-6 bg-white border border-gray-200 shadow-sm" style={{ borderRadius: 'var(--radius-none)' }}>
                <h6 className="font-semibold text-gray-900 mb-3 text-base">Sharp Card</h6>
                <p className="text-sm text-gray-600 leading-relaxed">This card has sharp corners for a technical, precise feel.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Standard Card (base)</h6>
              <div className="p-6 bg-white border border-gray-200 shadow-sm" style={{ borderRadius: 'var(--radius-base)' }}>
                <h6 className="font-semibold text-gray-900 mb-3 text-base">Standard Card</h6>
                <p className="text-sm text-gray-600 leading-relaxed">This card has standard rounded corners for general use.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Rounded Card (lg)</h6>
              <div className="p-6 bg-white border border-gray-200 shadow-sm" style={{ borderRadius: 'var(--radius-lg)' }}>
                <h6 className="font-semibold text-gray-900 mb-3 text-base">Rounded Card</h6>
                <p className="text-sm text-gray-600 leading-relaxed">This card has larger rounded corners for a softer feel.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Organic Card (3xl)</h6>
              <div className="p-6 bg-white border border-gray-200 shadow-sm" style={{ borderRadius: 'var(--radius-3xl)' }}>
                <h6 className="font-semibold text-gray-900 mb-3 text-base">Organic Card</h6>
                <p className="text-sm text-gray-600 leading-relaxed">This card has very rounded corners for an organic, friendly feel.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form inputs with different radius */}
        <div className="space-y-6">
          <h5 className="text-sm font-medium text-gray-700">Form Inputs</h5>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Sharp Input (none)</h6>
              <input 
                type="text" 
                placeholder="Sharp input" 
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                style={{ borderRadius: 'var(--radius-none)' }}
              />
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Standard Input (base)</h6>
              <input 
                type="text" 
                placeholder="Standard input" 
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                style={{ borderRadius: 'var(--radius-base)' }}
              />
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Rounded Input (lg)</h6>
              <input 
                type="text" 
                placeholder="Rounded input" 
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                style={{ borderRadius: 'var(--radius-lg)' }}
              />
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Pill Input (full)</h6>
              <input 
                type="text" 
                placeholder="Pill input" 
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                style={{ borderRadius: 'var(--radius-full)' }}
              />
            </div>
          </div>
        </div>

        {/* Avatars with different radius */}
        <div className="space-y-6">
          <h5 className="text-sm font-medium text-gray-700">Avatars</h5>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Square Avatar (none)</h6>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-blue-500 flex items-center justify-center text-white font-bold text-lg" style={{ borderRadius: 'var(--radius-none)' }}>
                  CD
                </div>
                <span className="text-sm font-medium text-gray-700">Square Avatar</span>
              </div>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Rounded Avatar (base)</h6>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-blue-500 flex items-center justify-center text-white font-bold text-lg" style={{ borderRadius: 'var(--radius-base)' }}>
                  CD
                </div>
                <span className="text-sm font-medium text-gray-700">Rounded Avatar</span>
              </div>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Circle Avatar (full)</h6>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-blue-500 flex items-center justify-center text-white font-bold text-lg" style={{ borderRadius: 'var(--radius-full)' }}>
                  CD
                </div>
                <span className="text-sm font-medium text-gray-700">Circle Avatar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges with different radius */}
        <div className="space-y-6">
          <h5 className="text-sm font-medium text-gray-700">Badges & Tags</h5>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Sharp Badge (none)</h6>
              <div className="flex space-x-3">
                <span className="px-3 py-2 bg-gray-100 text-gray-800 text-xs font-medium" style={{ borderRadius: 'var(--radius-none)' }}>
                  Technical
                </span>
                <span className="px-3 py-2 bg-blue-100 text-blue-800 text-xs font-medium" style={{ borderRadius: 'var(--radius-none)' }}>
                  Sharp
                </span>
              </div>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Standard Badge (base)</h6>
              <div className="flex space-x-3">
                <span className="px-3 py-2 bg-gray-100 text-gray-800 text-xs font-medium" style={{ borderRadius: 'var(--radius-base)' }}>
                  Standard
                </span>
                <span className="px-3 py-2 bg-blue-100 text-blue-800 text-xs font-medium" style={{ borderRadius: 'var(--radius-base)' }}>
                  Normal
                </span>
              </div>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Rounded Badge (lg)</h6>
              <div className="flex space-x-3">
                <span className="px-3 py-2 bg-gray-100 text-gray-800 text-xs font-medium" style={{ borderRadius: 'var(--radius-lg)' }}>
                  Rounded
                </span>
                <span className="px-3 py-2 bg-blue-100 text-blue-800 text-xs font-medium" style={{ borderRadius: 'var(--radius-lg)' }}>
                  Soft
                </span>
              </div>
            </div>
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h6 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Pill Badge (full)</h6>
              <div className="flex space-x-3">
                <span className="px-3 py-2 bg-gray-100 text-gray-800 text-xs font-medium" style={{ borderRadius: 'var(--radius-full)' }}>
                  Pill
                </span>
                <span className="px-3 py-2 bg-blue-100 text-blue-800 text-xs font-medium" style={{ borderRadius: 'var(--radius-full)' }}>
                  Organic
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="space-y-4">
          <h5 className="text-sm font-medium text-gray-700">Usage Guidelines</h5>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="space-y-3">
              <div>
                <h6 className="text-sm font-medium text-gray-800">Sharp Corners (none, sm)</h6>
                <p className="text-xs text-gray-600">Use for technical interfaces, data tables, and when you need a precise, professional feel.</p>
              </div>
              <div>
                <h6 className="text-sm font-medium text-gray-800">Standard Corners (base, md)</h6>
                <p className="text-xs text-gray-600">Default choice for most UI elements like buttons, cards, and form inputs.</p>
              </div>
              <div>
                <h6 className="text-sm font-medium text-gray-800">Rounded Corners (lg, xl)</h6>
                <p className="text-xs text-gray-600">Great for friendly interfaces, mobile apps, and when you want a softer, approachable feel.</p>
              </div>
              <div>
                <h6 className="text-sm font-medium text-gray-800">Organic Corners (2xl, 3xl, full)</h6>
                <p className="text-xs text-gray-600">Perfect for modern, organic designs, hero sections, and when you want maximum visual impact.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Radius Values - Now at the bottom for reference */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-gray-800">Basic Radius Values</h4>
          <div className="grid grid-cols-3 gap-6">
            {radiusValues.map((radius) => (
              <div key={radius} className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-gray-700 bg-orange-100 text-orange-800 px-3 py-1 rounded-full">{radius}</span>
                  <code className="text-xs bg-gray-100 px-3 py-1 rounded font-mono text-gray-700">
                    var(--radius-{radius})
                  </code>
                </div>
                <div
                  className="h-20 w-full bg-blue-200 flex items-center justify-center"
                  style={{ borderRadius: `var(--radius-${radius})` }}
                >
                  <span className="text-sm text-gray-700">Radius Preview</span>
                </div>
                <p className="text-sm text-gray-600 mt-3 text-center">
                  {getRadiusUsage(radius)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentShowcase() {
  const [variant, setVariant] = useState<"solid" | "outline" | "ghost" | "accent">("solid");
  const [size, setSize] = useState<"xs" | "sm" | "md" | "lg">("md");
  const [destructive, setDestructive] = useState(false);

  return (
    <div className="space-y-6">
      <h3 className="text-sm font-medium text-gray-700">Button Component Testing</h3>
      
      <div className="space-y-4">
        <div className="flex space-x-4">
          <div className="space-y-2">
            <label className="text-xs text-gray-600">Variant</label>
            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value as "solid" | "outline" | "ghost" | "accent")}
              className="px-3 py-1 text-sm border border-gray-300 rounded"
            >
              <option value="solid">Solid</option>
              <option value="outline">Outline</option>
              <option value="ghost">Ghost</option>
              <option value="accent">Accent</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs text-gray-600">Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value as "xs" | "sm" | "md" | "lg")}
              className="px-3 py-1 text-sm border border-gray-300 rounded"
            >
              <option value="xs">Extra Small</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-gray-600">Destructive</label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={destructive}
                onChange={(e) => setDestructive(e.target.checked)}
                className="rounded"
              />
              <span className="text-xs">Enable</span>
            </label>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant={variant} size={size} destructive={destructive}>
              Primary Action
            </Button>
            <Button variant={variant} size={size} destructive={destructive}>
              Secondary Action
            </Button>
            <Button variant={variant} size={size} destructive={destructive} disabled>
              Disabled
            </Button>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-medium text-gray-600">All Variants ({size} size)</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="solid" size={size}>Solid</Button>
              <Button variant="outline" size={size}>Outline</Button>
              <Button variant="ghost" size={size}>Ghost</Button>
              <Button variant="accent" size={size}>Accent</Button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-medium text-gray-600">All Sizes ({variant} variant)</h4>
            <div className="flex flex-wrap gap-2 items-center">
              <Button variant={variant} size="xs">Extra Small</Button>
              <Button variant={variant} size="sm">Small</Button>
              <Button variant={variant} size="md">Medium</Button>
              <Button variant={variant} size="lg">Large</Button>
            </div>
          </div>

          {destructive && (
            <div className="space-y-3">
              <h4 className="text-xs font-medium text-gray-600">Destructive Variants</h4>
              <div className="flex flex-wrap gap-2">
                <Button variant="solid" size={size} destructive>Delete</Button>
                <Button variant="outline" size={size} destructive>Remove</Button>
                <Button variant="ghost" size={size} destructive>Clear</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TokensPage() {
  const [activeSection, setActiveSection] = useState("colors");

  const sections = [
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "spacing", label: "Spacing" },
    { id: "shadows", label: "Shadows" },
    { id: "radius", label: "Radius" },
    { id: "components", label: "Components" },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Design Token Playground
            </h1>
            <p className="text-gray-600">
              Experiment with your design system tokens and see them in action
            </p>
          </div>

          <div className="flex space-x-8">
            {/* Navigation */}
            <div className="w-48 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                    activeSection === section.id
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
              {activeSection === "colors" && (
                <div className="space-y-8">
                  {Object.entries(colorPalettes).map(([name, shades]) => (
                    <ColorPalette key={name} name={name} shades={shades} />
                  ))}
                </div>
              )}

              {activeSection === "typography" && <TypographyDemo />}
              {activeSection === "spacing" && <SpacingDemo />}
              {activeSection === "shadows" && <ShadowDemo />}
              {activeSection === "radius" && <RadiusDemo />}
              {activeSection === "components" && <ComponentShowcase />}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}