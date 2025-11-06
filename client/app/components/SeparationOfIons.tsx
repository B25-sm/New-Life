'use client'

import Image from 'next/image'
import './SeparationOfIons.css'

export default function SeparationOfIons() {
  return (
    <section className="separation-of-ions">
      <div className="separation-of-ions-container">
        <div className="separation-of-ions-content">
          {/* Column 1: Left Images */}
          <div className="separation-of-ions-images">
            <div className="separation-image-wrapper separation-image-top">
              <Image
                src="/images/separation-top.png"
                alt="Woman drinking ionized water"
                width={560}
                height={320}
                className="separation-image"
              />
            </div>
            <div className="separation-image-wrapper separation-image-bottom">
              <Image
                src="/images/separation-bottom.png"
                alt="Man drinking ionized water"
                width={560}
                height={360}
                className="separation-image"
              />
            </div>
          </div>

          {/* Column 2: Center Logo */}
          <div className="separation-logo-column">
            <div className="separation-logo">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Large swirling S/wave shape */}
                <path
                  d="M40 100 Q60 40, 100 60 Q140 80, 160 100 Q140 120, 100 140 Q60 160, 40 100"
                  stroke="#00bcea"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Lighter wave patterns extending from upper-left */}
                <path
                  d="M30 70 Q50 30, 80 50"
                  stroke="#00bcea"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M20 50 Q35 20, 60 35"
                  stroke="#00bcea"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </div>
          </div>

          {/* Column 3: Right Text Content */}
          <div className="separation-of-ions-text">
            <h2 className="separation-heading">
              The Separation of Ions What Sets it Apart
            </h2>

            <p className="separation-paragraph">
              Hydrogen-rich water is the future of hydration and vitality. Backed by growing scientific studies on molecular hydrogen's powerful antioxidant benefits, Life Ionizers provides superior water for health, energy, and cognitive focus. Plus, you get naturally-generated acidic water for household sterilization and beauty—all built on 29 years of trusted innovation.
            </p>

            <div className="separation-statistics" role="group" aria-label="Research and benefits statistics">
              <div className="separation-stat-item">
                <div className="separation-stat-number">1350+</div>
                <div className="separation-stat-label">Scientific Studies</div>
              </div>
              <div className="separation-stat-divider" aria-hidden="true"></div>
              <div className="separation-stat-item">
                <div className="separation-stat-number">45+</div>
                <div className="separation-stat-label">Health Benefits</div>
              </div>
              <div className="separation-stat-divider" aria-hidden="true"></div>
              <div className="separation-stat-item">
                <div className="separation-stat-number">140+</div>
                <div className="separation-stat-label">Years of Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
