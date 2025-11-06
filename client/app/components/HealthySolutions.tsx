'use client'

import Image from 'next/image'
import './HealthySolutions.css'

export default function HealthySolutions() {
  return (
    <section className="healthy-solutions">
      <div className="healthy-solutions-container">
        {/* Header */}
        <h2 className="healthy-solutions-heading">
          Life Ionizer Healthy Water Solutions
        </h2>
        
        {/* Description Paragraph */}
        <p className="healthy-solutions-description">
          Say goodbye to chlorine, sediment, and heavy metals. Our Whole House Solutions provide the ultimate in water purification and filtration, protecting your family's health, leaving your skin and hair softer, and extending the life of your appliances.
        </p>

        {/* Main Grid: Left Cards, Center Product, Right Cards */}
        <div className="solutions-grid">
          {/* Left Column - 3 Feature Cards */}
          <div className="solutions-left-column">
            {/* Card 1: Healthier Happier Garden */}
            <div className="feature-card" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 60 60" fill="none" aria-hidden="true">
                  <circle cx="30" cy="30" r="25" stroke="white" strokeWidth="2" fill="none" />
                  <path
                    d="M25 40 L20 35 M20 25 L20 35 M20 35 L15 30"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="18" cy="22" r="3" fill="white" />
                  <circle cx="24" cy="20" r="3" fill="white" />
                  <circle cx="20" cy="28" r="3" fill="white" />
                  <path
                    d="M30 15 L30 10 M30 15 L25 12 M30 15 L35 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Healthier Happier Garden</h3>
            </div>

            {/* Card 2: Cleaner Dishes, Safer Food */}
            <div className="feature-card" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 60 60" fill="none" aria-hidden="true">
                  <ellipse cx="30" cy="45" rx="20" ry="5" fill="white" opacity="0.3" />
                  <circle cx="30" cy="35" r="15" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="30" cy="25" r="2" fill="white" />
                  <circle cx="30" cy="30" r="2" fill="white" />
                  <circle cx="30" cy="35" r="2" fill="white" />
                  <circle cx="30" cy="40" r="2" fill="white" />
                </svg>
              </div>
              <h3 className="feature-title">Cleaner Dishes, Safer Food</h3>
            </div>

            {/* Card 3: Filter Every Shower And Faucet In Your Home */}
            <div className="feature-card" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 60 60" fill="none" aria-hidden="true">
                  <rect x="20" y="15" width="20" height="20" rx="2" stroke="white" strokeWidth="2" fill="none" />
                  <path
                    d="M25 18 L30 22 L35 18 M25 22 L30 26 L35 22"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="35" cy="42" r="8" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="35" cy="42" r="3" fill="none" stroke="white" strokeWidth="2" />
                  <path d="M40 25 L35 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M42 25 L37 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="feature-title">Filter Every Shower And Faucet In Your Home</h3>
            </div>

            {/* Card 4: Appliance Protection And Longevity */}
            <div className="feature-card" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 60 60" fill="none" aria-hidden="true">
                  {/* Left hand - cupped upward, palm facing up */}
                  <path
                    d="M18 40 Q18 32 22 30 Q26 28 26 32 Q26 36 24 38 Q22 40 22 42 Q22 44 24 44"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 30 Q19 32 19 34 M22 36 Q21 38 21 40"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Right hand - cupped upward, palm facing up */}
                  <path
                    d="M42 40 Q42 32 38 30 Q34 28 34 32 Q34 36 36 38 Q38 40 38 42 Q38 44 36 44"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M40 30 Q41 32 41 34 M38 36 Q39 38 39 40"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Protected object in center */}
                  <ellipse cx="30" cy="36" rx="5" ry="3" fill="white" opacity="0.4" />
                </svg>
              </div>
              <h3 className="feature-title">Appliance Protection And Longevity</h3>
            </div>
          </div>

          {/* Center Column - Product Image Circle */}
          <div className="solutions-center-column">
            <div className="product-circle" style={{ animationDelay: '0.15s' }}>
              <div className="product-circle-inner">
                <Image
                  src="/images/ionizer.svg"
                  alt="Life Ionizer water purification system"
                  width={348}
                  height={348}
                  className="product-image"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - 3 Feature Cards */}
          <div className="solutions-right-column">
            {/* Card 1: Pet Safe Water */}
            <div className="feature-card" style={{ animationDelay: '0.25s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 60 60" fill="none" aria-hidden="true">
                  <rect x="15" y="20" width="30" height="25" rx="3" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M18 30 Q24 25 30 30 Q36 25 42 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="25" cy="38" r="3" fill="white" />
                  <circle cx="35" cy="38" r="3" fill="white" />
                  <ellipse cx="20" cy="18" rx="3" ry="2" fill="white" />
                  <ellipse cx="40" cy="18" rx="3" ry="2" fill="white" />
                </svg>
              </div>
              <h3 className="feature-title">Pet Safe Water</h3>
            </div>

            {/* Card 2: Improve Your Skin And Hair */}
            <div className="feature-card" style={{ animationDelay: '0.35s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 60 60" fill="none" aria-hidden="true">
                  <path
                    d="M20 45 L30 35 L40 45 M30 35 L30 20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="30" cy="15" r="8" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M20 40 L25 35 M40 40 L35 35" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15 35 L20 35 M40 35 L45 35" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="30" cy="50" r="2" fill="white" />
                  <circle cx="25" cy="52" r="2" fill="white" />
                  <circle cx="35" cy="52" r="2" fill="white" />
                </svg>
              </div>
              <h3 className="feature-title">Improve Your Skin And Hair</h3>
            </div>

            {/* Card 3: Lead, Arsenic, Fluoride And Chlorine Removed */}
            <div className="feature-card" style={{ animationDelay: '0.45s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 60 60" fill="none" aria-hidden="true">
                  <circle cx="30" cy="30" r="15" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M20 30 L40 30" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <path
                    d="M15 20 Q15 15 20 15 Q25 15 25 20 Q25 25 20 25 Q15 25 15 20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M45 40 Q45 35 40 35 Q35 35 35 40 Q35 45 40 45 Q45 45 45 40"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 40 L30 30 L45 40"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Lead, Arsenic, Fluoride And Chlorine Removed</h3>
            </div>

            {/* Card 4: Protect Your Home From Volatile Organic Compounds */}
            <div className="feature-card" style={{ animationDelay: '0.55s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 60 60" fill="none" aria-hidden="true">
                  {/* Hexagonal ring (benzene-like structure) */}
                  <path
                    d="M30 15 L40 20 L40 30 L30 35 L20 30 L20 20 Z"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Bonds inside hexagon */}
                  <circle cx="25" cy="22" r="1.5" fill="white" />
                  <circle cx="35" cy="22" r="1.5" fill="white" />
                  <circle cx="30" cy="27" r="1.5" fill="white" />
                  <path
                    d="M25 22 L35 22 M30 22 L30 27"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  {/* Leaf growing from structure */}
                  <path
                    d="M40 25 Q45 22 48 25 Q45 28 40 25"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M46 24 Q48 23 48 24"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Protect Your Home From Volatile Organic Compounds</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

