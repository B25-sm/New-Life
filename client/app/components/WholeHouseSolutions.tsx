'use client'

import './WholeHouseSolutions.css'

export default function WholeHouseSolutions() {
  return (
    <section className="whole-house-solutions">
      <div className="whole-house-solutions-container">
        {/* Header */}
        <div className="whole-house-solutions-header">
          <h2 className="whole-house-solutions-title">Life Ionizer Healthy Water Solutions</h2>
          <p className="whole-house-solutions-description">
            Say goodbye to chlorine, sediment, and heavy metals. Our <strong>Whole House Solutions</strong> provide the
            ultimate in water purification and filtration, protecting your family&apos;s health, leaving your skin and hair
            softer, and extending the life of your appliances.
          </p>
        </div>

        {/* Content Grid */}
        <div className="whole-house-solutions-content">
          {/* Left Column */}
          <div className="whole-house-solutions-left">
            {/* Healthier Happier Garden */}
            <div className="whole-house-benefit-box">
              <div className="whole-house-benefit-icon">
                <svg viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path
                    d="M25 40 L20 35 M20 25 L20 35 M20 35 L15 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="18" cy="22" r="3" fill="currentColor" />
                  <circle cx="24" cy="20" r="3" fill="currentColor" />
                  <circle cx="20" cy="28" r="3" fill="currentColor" />
                  <path
                    d="M30 15 L30 10 M30 15 L25 12 M30 15 L35 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="whole-house-benefit-text">Healthier Happier Garden</p>
            </div>

            {/* Cleaner Dishes, Safer Food */}
            <div className="whole-house-benefit-box">
              <div className="whole-house-benefit-icon">
                <svg viewBox="0 0 60 60" fill="none">
                  <ellipse cx="30" cy="45" rx="20" ry="5" fill="currentColor" opacity="0.3" />
                  <circle cx="30" cy="35" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="30" cy="25" r="2" fill="currentColor" />
                  <circle cx="30" cy="30" r="2" fill="currentColor" />
                  <circle cx="30" cy="35" r="2" fill="currentColor" />
                  <circle cx="30" cy="40" r="2" fill="currentColor" />
                </svg>
              </div>
              <p className="whole-house-benefit-text">Cleaner Dishes, Safer Food</p>
            </div>

            {/* Filter Every Shower */}
            <div className="whole-house-benefit-box">
              <div className="whole-house-benefit-icon">
                <svg viewBox="0 0 60 60" fill="none">
                  <rect x="20" y="15" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path
                    d="M25 18 L30 22 L35 18 M25 22 L30 26 L35 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="35" cy="42" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="35" cy="42" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M40 25 L35 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M42 25 L37 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="whole-house-benefit-text">Filter Every Shower And Faucet In Your Home</p>
            </div>
          </div>

          {/* Center Product Images */}
          <div className="whole-house-solutions-center">
            <div className="whole-house-product-wrapper">
              {/* Product 1 */}
              <div className="whole-house-product">
                <div className="whole-house-product-barrel">
                  <div className="whole-house-product-band"></div>
                  <div className="whole-house-product-logo">DOLPHIN</div>
                </div>
              </div>
              {/* Product 2 */}
              <div className="whole-house-product">
                <div className="whole-house-product-barrel">
                  <div className="whole-house-product-band"></div>
                  <div className="whole-house-product-logo">DOLPHIN</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="whole-house-solutions-right">
            {/* Pet Safe Water */}
            <div className="whole-house-benefit-box">
              <div className="whole-house-benefit-icon">
                <svg viewBox="0 0 60 60" fill="none">
                  <rect x="15" y="20" width="30" height="25" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M18 30 Q24 25 30 30 Q36 25 42 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="25" cy="38" r="3" fill="currentColor" />
                  <circle cx="35" cy="38" r="3" fill="currentColor" />
                  <ellipse cx="20" cy="18" rx="3" ry="2" fill="currentColor" />
                  <ellipse cx="40" cy="18" rx="3" ry="2" fill="currentColor" />
                </svg>
              </div>
              <p className="whole-house-benefit-text">Pet Safe Water</p>
            </div>

            {/* Improve Skin And Hair */}
            <div className="whole-house-benefit-box">
              <div className="whole-house-benefit-icon">
                <svg viewBox="0 0 60 60" fill="none">
                  <path
                    d="M20 45 L30 35 L40 45 M30 35 L30 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="30" cy="15" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M20 40 L25 35 M40 40 L35 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15 35 L20 35 M40 35 L45 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="30" cy="50" r="2" fill="currentColor" />
                  <circle cx="25" cy="52" r="2" fill="currentColor" />
                  <circle cx="35" cy="52" r="2" fill="currentColor" />
                </svg>
              </div>
              <p className="whole-house-benefit-text">Improve Your Skin And Hair</p>
            </div>

            {/* Remove Contaminants */}
            <div className="whole-house-benefit-box">
              <div className="whole-house-benefit-icon">
                <svg viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M20 30 L40 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path
                    d="M15 20 Q15 15 20 15 Q25 15 25 20 Q25 25 20 25 Q15 25 15 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M45 40 Q45 35 40 35 Q35 35 35 40 Q35 45 40 45 Q45 45 45 40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 40 L30 30 L45 40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <p className="whole-house-benefit-text">Lead, Arsenic, Fluoride And Chlorine Removed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

