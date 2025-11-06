'use client'

import './MachineHero.css'

export default function MachineHero() {
  return (
    <section className="machine-hero" aria-label="Health machine diagram">
      <div className="machine-hero-container">
        {/* Decorative Icons and Elements */}
        
        {/* Top-Middle Cluster */}
        <HeartIcon />
        <TargetIcon className="target-icon-1" />
        
        {/* Mid-Left Hexagonal Cluster */}
        <HexagonCluster />
        
        {/* Lightning Bolts */}
        <LightningCluster />
        <TargetIcon className="target-icon-2" />
        
        {/* Liver Icon with Arrows */}
        <LiverIcon />
        
        {/* Dotted Semicircular Arc */}
        <SemicircularArc />
        
        {/* Main Machine Diagram (Right Side) */}
        <MachineDiagram />
        
        {/* Connecting Lines */}
        <ConnectingLines />
      </div>
    </section>
  )
}

// Heart Icon with ECG
const HeartIcon = () => (
  <svg
    className="machine-icon heart-icon"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 8h2v4h3v-2h1"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
)

// Target Icon
const TargetIcon = ({ className }: { className?: string }) => (
  <svg
    className={`machine-icon ${className}`}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="1" fill="white" />
  </svg>
)

// Hexagon Cluster
const HexagonCluster = () => (
  <div className="hexagon-cluster">
    <svg
      className="machine-icon"
      width="120"
      height="100"
      viewBox="0 0 120 100"
      aria-hidden="true"
    >
      {/* Hexagon */}
      <path
        d="M60 10 L100 30 L100 70 L60 90 L20 70 L20 30 Z"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      {/* Thumbs Up */}
      <path
        d="M40 45 Q42 40 45 42 Q48 40 50 42 Q52 40 55 42 L55 50 Q53 52 50 50 Q47 52 45 50 Q42 52 40 50 Z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M45 35 L45 42" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Glucose Meter */}
      <rect x="70" y="45" width="25" height="20" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
      <text x="75" y="58" fontSize="8" fill="white">00</text>
      {/* Measuring Tape */}
      <rect x="60" y="70" width="15" height="8" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M65 70 L65 78" stroke="white" strokeWidth="1" fill="none" />
      <path d="M70 70 L70 78" stroke="white" strokeWidth="1" fill="none" />
    </svg>
  </div>
)

// Lightning Cluster
const LightningCluster = () => (
  <svg
    className="machine-icon lightning-cluster"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    aria-hidden="true"
  >
    {/* Lightning Bolt 1 */}
    <path
      d="M15 5 L10 20 L20 20 L18 35 L28 15 L20 15 Z"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    {/* Lightning Bolt 2 */}
    <path
      d="M35 10 L30 25 L40 25 L38 40 L48 20 L40 20 Z"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    {/* Lightning Bolt 3 */}
    <path
      d="M15 25 L10 40 L20 40 L18 55 L28 35 L20 35 Z"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    {/* Lightning Bolt 4 */}
    <path
      d="M35 30 L30 45 L40 45 L38 60 L48 40 L40 40 Z"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
  </svg>
)

// Liver Icon with Arrows
const LiverIcon = () => (
  <div className="liver-icon-container">
    <svg
      className="machine-icon liver-icon"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      aria-hidden="true"
    >
      {/* Circular Arrow Path */}
      <path
        d="M30 5 A25 25 0 1 1 25 10"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M30 5 A25 25 0 0 0 25 10"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      {/* Arrow Heads */}
      <path
        d="M22 8 L25 10 L22 12"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M22 12 L25 10 L22 8"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      {/* Liver Shape */}
      <path
        d="M20 25 Q15 35 20 45 Q25 50 30 48 Q35 50 40 45 Q45 35 40 25 Q35 20 30 22 Q25 20 20 25"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </div>
)

// Dotted Semicircular Arc
const SemicircularArc = () => (
  <svg
    className="machine-icon semicircular-arc"
    width="200"
    height="100"
    viewBox="0 0 200 100"
    aria-hidden="true"
  >
    <path
      d="M20 80 Q100 20 180 80"
      stroke="white"
      strokeWidth="2"
      strokeDasharray="4 4"
      fill="none"
    />
  </svg>
)

// Main Machine Diagram
const MachineDiagram = () => (
  <svg
    className="machine-diagram"
    width="300"
    height="400"
    viewBox="0 0 300 400"
    aria-hidden="true"
  >
    {/* Main Machine Body */}
    <path
      className="machine-path"
      d="M50 50 L250 50 Q260 50 260 60 L260 200 Q260 210 250 210 L200 220 L200 340 L160 340 L160 220 L80 220 L80 340 L50 340 Q40 340 40 330 L40 100 Q40 50 50 50"
      stroke="white"
      strokeWidth="3"
      fill="none"
    />
    
    {/* Top Buttons */}
    <circle cx="70" cy="70" r="5" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="90" cy="70" r="5" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="110" cy="70" r="5" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="130" cy="70" r="5" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="150" cy="70" r="5" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="170" cy="70" r="5" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="190" cy="70" r="5" stroke="white" strokeWidth="2" fill="none" />
    
    {/* Hose/Tube */}
    <path
      d="M220 70 Q240 40 260 60 Q270 70 260 80 L260 150"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    
    {/* Front Panel Display */}
    <rect x="70" y="100" width="100" height="80" rx="5" stroke="white" strokeWidth="2" fill="none" />
    <rect x="80" y="110" width="80" height="60" rx="3" stroke="white" strokeWidth="2" fill="none" />
    
    {/* Side Details */}
    <path d="M210 70 L210 210" stroke="white" strokeWidth="2" fill="none" />
    <path d="M200 100 L250 100" stroke="white" strokeWidth="1" fill="none" />
    <path d="M200 120 L250 120" stroke="white" strokeWidth="1" fill="none" />
    <path d="M200 140 L250 140" stroke="white" strokeWidth="1" fill="none" />
    <rect x="230" y="160" width="20" height="20" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
    <rect x="235" y="190" width="10" height="10" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
)

// Connecting Lines
const ConnectingLines = () => (
  <svg
    className="connecting-lines"
    width="100%"
    height="100%"
    viewBox="0 0 1000 600"
    aria-hidden="true"
  >
    {/* Lines connecting elements */}
    <path
      d="M150 100 L200 100"
      stroke="white"
      strokeWidth="1"
      strokeDasharray="3 3"
      fill="none"
    />
    <path
      d="M200 100 L400 200"
      stroke="white"
      strokeWidth="1"
      strokeDasharray="3 3"
      fill="none"
    />
    <path
      d="M150 250 L350 300"
      stroke="white"
      strokeWidth="1.5"
      strokeDasharray="5 5"
      fill="none"
    />
  </svg>
)




