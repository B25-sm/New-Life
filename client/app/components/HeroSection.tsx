'use client'

import Image from 'next/image'
import BubbleBackground from './BubbleBackground'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Bubble Background */}
      <BubbleBackground showBackground={true} />
      
      {/* Grid Container */}
      <div className="hero-grid">
        {/* Left Image Card - Tall Portrait */}
        <div className="hero-image-card hero-image-left">
          <div className="hero-image-wrapper">
            <Image
              src="/images/family-drinking-water.webp"
              alt="Family drinking water"
              fill
              className="hero-image"
              sizes="(max-width: 900px) 100vw, 360px"
              priority
            />
          </div>
        </div>
        
        {/* Text Content - Center Column */}
        <div className="hero-content">
          <div className="hero-content-inner">
            {/* Headline */}
            <h1 className="hero-headline">
              Enjoy the Healthiest Hydrogen Water in the World!
            </h1>
            
            {/* Paragraph */}
            <p className="hero-paragraph">
              Born in San Diego 29 years ago, our family-owned business has pioneered alkaline hydrogen antioxidant-rich water systems and custom whole-house solutions, selling over 600,000 units trusted by pro athletes and doctors, and earning 5-star TrustPilot and A+ BBB ratings for unmatched quality and performance.
            </p>
          </div>
        </div>
        
        {/* Right Image Card - Wide Landscape */}
        <div className="hero-image-card hero-image-right">
          <div className="hero-image-wrapper">
            <Image
              src="/images/multi-generational-family.webp"
              alt="Multi-generational family"
              fill
              className="hero-image"
              sizes="(max-width: 900px) 100vw, 720px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

