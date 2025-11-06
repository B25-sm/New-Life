'use client'

import { useMemo } from 'react'

interface BubbleBackgroundProps {
  showBackground?: boolean
  className?: string
}

export default function BubbleBackground({ 
  showBackground = false,
  className = '' 
}: BubbleBackgroundProps) {
  // Generate bubbles with consistent properties using useMemo for performance
  const bubbles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 20, // 20px to 100px
      left: Math.random() * 100, // 0% to 100%
      delay: Math.random() * 15, // 0s to 15s
      duration: Math.random() * 25 + 10, // 10s to 35s
      opacity: Math.random() * 0.4 + 0.1, // 0.1 to 0.5
      horizontalMovement: (Math.random() - 0.5) * 100, // -50px to 50px
    }))
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {showBackground && (
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to bottom, #00BCEA, #00B0D8, #00A4C6)'
          }}
        />
      )}
      <div className="absolute inset-0">
        {bubbles.map((bubble) => {
          const highlightX = Math.random() * 30 + 20 // 20% to 50%
          const highlightY = Math.random() * 30 + 20 // 20% to 50%
          return (
            <div
              key={bubble.id}
              className="absolute rounded-full bubble-float"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                bottom: '-120px',
                opacity: bubble.opacity,
                background: `
                  radial-gradient(ellipse ${bubble.size * 0.6}px ${bubble.size * 0.6}px at ${highlightX}% ${highlightY}%, 
                    rgba(255, 255, 255, 0.85) 0%, 
                    rgba(255, 255, 255, 0.5) 12%, 
                    rgba(230, 240, 255, 0.3) 25%, 
                    rgba(173, 216, 230, 0.15) 45%, 
                    rgba(135, 206, 250, 0.08) 65%, 
                    transparent 100%)
                `,
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: `
                  inset -${Math.max(2, bubble.size * 0.12)}px -${Math.max(2, bubble.size * 0.12)}px ${bubble.size * 0.35}px rgba(255, 255, 255, 0.6),
                  inset ${bubble.size * 0.18}px ${bubble.size * 0.18}px ${bubble.size * 0.45}px rgba(255, 255, 255, 0.35),
                  inset ${bubble.size * 0.25}px ${bubble.size * 0.25}px ${bubble.size * 0.3}px rgba(255, 255, 255, 0.2),
                  0 ${bubble.size * 0.06}px ${bubble.size * 0.15}px rgba(0, 0, 0, 0.08),
                  0 0 ${bubble.size * 0.25}px rgba(173, 216, 230, 0.3)
                `,
                animation: `bubble-rise ${bubble.duration}s ease-in-out infinite`,
                animationDelay: `${bubble.delay}s`,
                '--horizontal-move': `${bubble.horizontalMovement}px`,
              } as React.CSSProperties}
            >
              {/* Inner highlight for realistic bubble effect */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: `${bubble.size * 0.35}px`,
                  height: `${bubble.size * 0.35}px`,
                  top: `${highlightY * 0.75}%`,
                  left: `${highlightX * 0.85}%`,
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.5) 40%, transparent 80%)',
                  filter: 'blur(1.5px)',
                }}
              />
              {/* Secondary smaller highlight */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: `${bubble.size * 0.15}px`,
                  height: `${bubble.size * 0.15}px`,
                  top: `${highlightY * 0.6}%`,
                  left: `${highlightX * 1.1}%`,
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
                  filter: 'blur(1px)',
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

