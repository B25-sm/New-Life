'use client'

import { Award, Filter, UserCheck } from 'lucide-react'
import './TopHeroSection.css'

export default function TopHeroSection() {
  return (
    <section className="top-hero-section">
      {/* Background Image/Video */}
      <div className="top-hero-background">
        <div 
          className="top-hero-bg-image"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
          }}
        />
        {/* Dark Overlay */}
        <div className="top-hero-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="top-hero-content">
        {/* Headline */}
        <h1 className="top-hero-headline">
          America&apos;s Top Rated Water Filtration Company!
        </h1>

        {/* Feature Boxes */}
        <div className="top-hero-features">
          {/* Box 1: Eliminate 2000+ Plastic Bottles */}
          <div className="top-hero-feature-box">
            <div className="top-hero-feature-icon">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 2h4v3h-4V2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h6v1H9V5z" />
                <rect x="8" y="6" width="8" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 9h4M10 12h4" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="top-hero-feature-title">Eliminate 2000+</h3>
            <p className="top-hero-feature-subtitle">Plastic Bottles Per Year</p>
          </div>

          {/* Box 2: Lifetime Warranty */}
          <div className="top-hero-feature-box">
            <div className="top-hero-feature-icon">
              <Award className="w-12 h-12" strokeWidth="1.5" />
            </div>
            <h3 className="top-hero-feature-title">Lifetime</h3>
            <p className="top-hero-feature-subtitle">Warranty</p>
          </div>

          {/* Box 3: Custom Filtration */}
          <div className="top-hero-feature-box">
            <div className="top-hero-feature-icon">
              <Filter className="w-12 h-12" strokeWidth="1.5" />
            </div>
            <h3 className="top-hero-feature-title">Custom</h3>
            <p className="top-hero-feature-subtitle">Filtration</p>
          </div>

          {/* Box 4: Experience */}
          <div className="top-hero-feature-box">
            <div className="top-hero-feature-icon">
              <UserCheck className="w-12 h-12" strokeWidth="1.5" />
            </div>
            <h3 className="top-hero-feature-title">Experience</h3>
            <p className="top-hero-feature-subtitle">28 Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}





