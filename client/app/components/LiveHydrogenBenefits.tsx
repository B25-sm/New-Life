'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './LiveHydrogenBenefits.css'

interface Benefit {
  icon: string
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: 'hydrogen-rich',
    title: 'Hydrogen Rich',
    description: 'Enjoy hydrogen-rich water that boosts energy, enhances hydration, and supports cellular health.',
  },
  {
    icon: 'anti-aging',
    title: 'Anti-Aging',
    description: 'Combat signs of aging naturally with water that helps reduce oxidative stress and supports youthful vitality.',
  },
  {
    icon: 'antioxidants',
    title: 'Antioxidants',
    description: 'Packed with powerful antioxidants that help neutralize harmful free radicals and support overall wellness.',
  },
]

export default function LiveHydrogenBenefits() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1
      return Math.max(0, newIndex)
    })
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, benefits.length - itemsPerView)
      return Math.min(maxIndex, prev + 1)
    })
  }

  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < benefits.length - itemsPerView

  return (
    <section className="live-hydrogen-benefits">
      <div className="live-hydrogen-benefits-container">
        {/* Header */}
        <div className="live-hydrogen-benefits-header">
          <h2 className="live-hydrogen-benefits-title">
            Discover How You Will Benefit From
          </h2>
          <h3 className="live-hydrogen-benefits-subtitle">Live Hydrogen Water™</h3>
        </div>

        {/* Carousel */}
        <div className="live-hydrogen-benefits-carousel-wrapper">
          {/* Previous Button */}
          <button
            className={`live-hydrogen-benefits-nav live-hydrogen-benefits-nav-prev ${
              !canGoPrevious ? 'disabled' : ''
            }`}
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            aria-label="Previous benefits"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="live-hydrogen-benefits-carousel">
            <div
              className="live-hydrogen-benefits-track"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="live-hydrogen-benefit-card">
                  <div
                    className={`live-hydrogen-benefit-icon live-hydrogen-benefit-icon-${benefit.icon}`}
                  >
                    {benefit.icon === 'hydrogen-rich' && <HydrogenRichIcon />}
                    {benefit.icon === 'anti-aging' && <AntiAgingIcon />}
                    {benefit.icon === 'antioxidants' && <AntioxidantsIcon />}
                  </div>
                  <h4 className="live-hydrogen-benefit-title">{benefit.title}</h4>
                  <p className="live-hydrogen-benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            className={`live-hydrogen-benefits-nav live-hydrogen-benefits-nav-next ${
              !canGoNext ? 'disabled' : ''
            }`}
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next benefits"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

// Icon Components
const HydrogenRichIcon = () => (
  <svg viewBox="0 0 60 60" fill="none">
    <defs>
      <linearGradient id="hydrogenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00A8C5" />
        <stop offset="100%" stopColor="#87CEEB" />
      </linearGradient>
    </defs>
    {/* Water Droplet */}
    <path
      d="M18 35 Q18 20 26 15 Q30 10 36 20 Q38 28 30 38 Q26 42 20 40 Z"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    {/* H2O Chemical Structure */}
    <circle cx="42" cy="18" r="6" stroke="white" strokeWidth="2.5" fill="none" />
    <text x="42" y="22" fontSize="12" fill="white" fontWeight="bold" textAnchor="middle">
      O
    </text>
    <circle cx="32" cy="26" r="5" stroke="white" strokeWidth="2" fill="none" />
    <text x="32" y="30" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
      H
    </text>
    <circle cx="52" cy="26" r="5" stroke="white" strokeWidth="2" fill="none" />
    <text x="52" y="30" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
      H
    </text>
    <line x1="37" y1="20" x2="32" y2="24" stroke="white" strokeWidth="2.5" />
    <line x1="47" y1="20" x2="50" y2="24" stroke="white" strokeWidth="2.5" />
  </svg>
)

const AntiAgingIcon = () => (
  <svg viewBox="0 0 60 60" fill="none">
    <defs>
      <linearGradient id="antiAgingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00BCEA" />
        <stop offset="100%" stopColor="#00A8C5" />
      </linearGradient>
    </defs>
    {/* Face/Head */}
    <circle cx="30" cy="25" r="15" stroke="white" strokeWidth="2" fill="none" />
    {/* Eyes */}
    <path d="M23 20 L25 22 L27 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 20 L35 22 L37 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Smile */}
    <path d="M24 28 Q30 32 36 28" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Sparkles/Stars */}
    <g transform="translate(18, 20)">
      <path d="M0 -3 L1 -1 L3 -1 L1 0 L1 2 L0 1 L-1 2 L-1 0 L-3 -1 L-1 -1 Z" fill="white" />
    </g>
    <g transform="translate(42, 20)">
      <path d="M0 -3 L1 -1 L3 -1 L1 0 L1 2 L0 1 L-1 2 L-1 0 L-3 -1 L-1 -1 Z" fill="white" />
    </g>
  </svg>
)

const AntioxidantsIcon = () => (
  <svg viewBox="0 0 60 60" fill="none">
    <defs>
      <linearGradient id="antioxidantsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00BCEA" />
        <stop offset="100%" stopColor="#00A8C5" />
      </linearGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.1)" />
      </filter>
    </defs>
    {/* Central atom */}
    <circle cx="30" cy="30" r="6" stroke="white" strokeWidth="2.5" fill="none" />
    {/* Connected atoms */}
    <circle cx="30" cy="18" r="5" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="30" cy="42" r="5" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="18" cy="30" r="5" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="42" cy="30" r="5" stroke="white" strokeWidth="2" fill="none" />
    {/* Bonds/Connections */}
    <line x1="30" y1="24" x2="30" y2="37" stroke="white" strokeWidth="2.5" />
    <line x1="30" y1="18" x2="30" y2="22" stroke="white" strokeWidth="2.5" />
    <line x1="18" y1="30" x2="24" y2="30" stroke="white" strokeWidth="2.5" />
    <line x1="36" y1="30" x2="42" y2="30" stroke="white" strokeWidth="2.5" />
  </svg>
)

