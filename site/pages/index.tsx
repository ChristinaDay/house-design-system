import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { useTheme } from '../components/ThemeProvider'

export default function Home() {
  const [variant, setVariant] = useState<'solid' | 'outline' | 'ghost' | 'accent'>('solid')
  const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg'>('md')
  const [destructive, setDestructive] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--color-neutral-0)', color: 'var(--color-neutral-900)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">House Design System</h1>
          <nav className="space-x-4">
            <Link href="/tokens" className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
              Token Playground
            </Link>
          </nav>
        </div>
        
        <div className="mb-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Theme Toggle</h2>
          <button 
            onClick={toggleTheme}
            className="px-4 py-2 border rounded"
          >
            Current: {theme} (Click to toggle)
          </button>
        </div>

        <div className="mb-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Button Component</h2>
          
          <div className="mb-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Variant:</label>
              <select 
                value={variant} 
                onChange={(e) => setVariant(e.target.value as 'solid' | 'outline' | 'ghost' | 'accent')}
                className="px-3 py-2 border rounded"
              >
                <option value="solid">Solid</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
                <option value="accent">Accent</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Size:</label>
              <select 
                value={size} 
                onChange={(e) => setSize(e.target.value as 'xs' | 'sm' | 'md' | 'lg')}
                className="px-3 py-2 border rounded"
              >
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  checked={destructive}
                  onChange={(e) => setDestructive(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm font-medium">Destructive</span>
              </label>
            </div>
          </div>

          <div className="space-x-4">
            <Button variant={variant} size={size} destructive={destructive}>
              Hello World
            </Button>
            <Button variant={variant} size={size} destructive={destructive}>
              Click me
            </Button>
          </div>
        </div>

        <div className="mb-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Typography Showcase</h2>
          
          {/* Font Families */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Font Families</h3>
            <div className="space-y-2">
              <div className="font-sans text-lg">Inter (Sans) - The quick brown fox jumps over the lazy dog</div>
              <div className="font-mono text-lg">JetBrains Mono (Mono) - The quick brown fox jumps over the lazy dog</div>
              <div className="font-display text-lg">Inter Display (Display) - The quick brown fox jumps over the lazy dog</div>
            </div>
          </div>

          {/* Font Sizes */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Font Sizes</h3>
            <div className="space-y-2">
              <div className="text-xs">Extra Small (xs) - The quick brown fox</div>
              <div className="text-sm">Small (sm) - The quick brown fox</div>
              <div className="text-base">Base (base) - The quick brown fox</div>
              <div className="text-lg">Large (lg) - The quick brown fox</div>
              <div className="text-xl">Extra Large (xl) - The quick brown fox</div>
              <div className="text-2xl">2XL - The quick brown fox</div>
              <div className="text-3xl">3XL - The quick brown fox</div>
              <div className="text-4xl">4XL - The quick brown fox</div>
              <div className="text-5xl">5XL - The quick brown fox</div>
              <div className="text-6xl">6XL - The quick brown fox</div>
            </div>
          </div>

          {/* Font Weights */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Font Weights</h3>
            <div className="space-y-2">
              <div className="font-light text-lg">Light (300) - The quick brown fox</div>
              <div className="font-normal text-lg">Normal (400) - The quick brown fox</div>
              <div className="font-medium text-lg">Medium (500) - The quick brown fox</div>
              <div className="font-semibold text-lg">Semibold (600) - The quick brown fox</div>
              <div className="font-bold text-lg">Bold (700) - The quick brown fox</div>
              <div className="font-extrabold text-lg">Extrabold (800) - The quick brown fox</div>
            </div>
          </div>

          {/* Line Heights */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Line Heights</h3>
            <div className="space-y-2 max-w-md">
              <div className="leading-none">None (1.0) - This is a longer text to demonstrate line height. The quick brown fox jumps over the lazy dog.</div>
              <div className="leading-tight">Tight (1.25) - This is a longer text to demonstrate line height. The quick brown fox jumps over the lazy dog.</div>
              <div className="leading-snug">Snug (1.375) - This is a longer text to demonstrate line height. The quick brown fox jumps over the lazy dog.</div>
              <div className="leading-normal">Normal (1.5) - This is a longer text to demonstrate line height. The quick brown fox jumps over the lazy dog.</div>
              <div className="leading-relaxed">Relaxed (1.625) - This is a longer text to demonstrate line height. The quick brown fox jumps over the lazy dog.</div>
              <div className="leading-loose">Loose (2.0) - This is a longer text to demonstrate line height. The quick brown fox jumps over the lazy dog.</div>
            </div>
          </div>

          {/* Letter Spacing */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Letter Spacing</h3>
            <div className="space-y-2">
              <div className="tracking-tighter text-lg">Tighter (-0.05em) - The quick brown fox</div>
              <div className="tracking-tight text-lg">Tight (-0.025em) - The quick brown fox</div>
              <div className="tracking-normal text-lg">Normal (0em) - The quick brown fox</div>
              <div className="tracking-wide text-lg">Wide (0.025em) - The quick brown fox</div>
              <div className="tracking-wider text-lg">Wider (0.05em) - The quick brown fox</div>
              <div className="tracking-widest text-lg">Widest (0.1em) - The quick brown fox</div>
            </div>
          </div>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Current Tokens</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Brand Color:</strong> <span style={{ color: 'var(--color-brand-500)' }}>var(--color-brand-500)</span>
            </div>
            <div>
              <strong>Radius:</strong> <span>var(--radius-md)</span>
            </div>
            <div>
              <strong>Spacing:</strong> <span>var(--spacing-4)</span>
            </div>
            <div>
              <strong>Typography:</strong> <span>var(--typography-fontSize-base)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
