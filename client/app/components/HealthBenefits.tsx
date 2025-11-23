'use client'

import './HealthBenefits.css'

interface Benefit {
  icon: string
  title: string
}

const benefits: Benefit[] = [
  {
    icon: 'immunity',
    title: 'Boost Your Immunity From The Inside Out',
  },
  {
    icon: 'hydrogen',
    title: 'Hydrogen Water',
  },
  {
    icon: 'detox',
    title: 'Detoxification',
  },
  {
    icon: 'free-radicals',
    title: 'Free Radicals? No Thanks.',
  },
  {
    icon: 'energy',
    title: 'Boost Your Energy/Fuel Your Cells',
  },
  {
    icon: 'acidity',
    title: 'Neutralize Acidity',
  },
]

export default function HealthBenefits() {
  return (
    <section className="health-benefits">
      <div className="health-benefits-container">
        {/* Left Column - Product Display */}
        <div className="health-benefits-product">
          <div className="health-benefits-product-wrapper">
            {/* Product Icon */}
            <div className="health-benefits-ionizer">
              <div className="health-benefits-ionizer-display">
                <div className="health-benefits-display-line">3360</div>
                <div className="health-benefits-display-line">3360</div>
                <div className="health-benefits-display-line-small">ALKALINE</div>
                <div className="health-benefits-display-line-small">1</div>
                <div className="health-benefits-display-line-small">8.5</div>
              </div>
              <div className="health-benefits-grid-label">GRID</div>
              <div className="health-benefits-uv-label">UV LIGHT</div>
              <div className="health-benefits-logo">LIFE IONIZERS</div>
            </div>
            {/* Faucet */}
            <div className="health-benefits-faucet">
              <div className="health-benefits-faucet-spouts">
                <div className="health-benefits-spout"></div>
                <div className="health-benefits-spout"></div>
              </div>
              <div className="health-benefits-faucet-base"></div>
            </div>
          </div>
        </div>

        {/* Right Column - Benefits */}
        <div className="health-benefits-content">
          {benefits.map((benefit, index) => (
            <div key={index} className="health-benefit-item">
              <div className={`health-benefit-icon health-benefit-icon-${benefit.icon}`}>
                {benefit.icon === 'immunity' && <ImmunityIcon />}
                {benefit.icon === 'hydrogen' && <HydrogenIcon />}
                {benefit.icon === 'detox' && <DetoxIcon />}
                {benefit.icon === 'free-radicals' && <FreeRadicalsIcon />}
                {benefit.icon === 'energy' && <EnergyIcon />}
                {benefit.icon === 'acidity' && <AcidityIcon />}
              </div>
              <p className="health-benefit-text">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Icon Components
const ImmunityIcon = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.3" />
    <circle cx="20" cy="20" r="4" fill="currentColor" />
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="28" cy="12" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="28" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="28" cy="28" r="3" fill="currentColor" opacity="0.5" />
  </svg>
)

const HydrogenIcon = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <path
      d="M20 8 C24 8 26 10 26 14 C26 18 24 20 20 20 M20 20 L20 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="20" cy="14" r="3" fill="currentColor" />
    <text x="10" y="30" fontSize="10" fill="currentColor" fontWeight="bold">
      H2
    </text>
  </svg>
)

const DetoxIcon = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <path
      d="M10 30 Q20 10 30 30"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="15" cy="25" r="2" fill="currentColor" />
    <circle cx="20" cy="20" r="2" fill="currentColor" />
    <circle cx="25" cy="25" r="2" fill="currentColor" />
  </svg>
)

const FreeRadicalsIcon = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="15" cy="15" r="2" fill="currentColor" />
    <circle cx="25" cy="15" r="2" fill="currentColor" />
    <circle cx="15" cy="25" r="2" fill="currentColor" />
    <circle cx="25" cy="25" r="2" fill="currentColor" />
  </svg>
)

const EnergyIcon = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <path
      d="M15 15 L25 15 L23 22 L15 22 Z"
      fill="currentColor"
      opacity="0.4"
    />
    <path
      d="M15 15 L23 15 L20 10 Z"
      fill="currentColor"
    />
    <circle cx="20" cy="25" r="2" fill="currentColor" />
  </svg>
)

const AcidityIcon = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <ellipse cx="20" cy="24" rx="12" ry="8" fill="currentColor" opacity="0.3" />
    <path
      d="M8 24 Q20 16 32 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="18" cy="22" r="1.5" fill="currentColor" />
    <circle cx="20" cy="24" r="1.5" fill="currentColor" />
    <circle cx="22" cy="22" r="1.5" fill="currentColor" />
  </svg>
)





