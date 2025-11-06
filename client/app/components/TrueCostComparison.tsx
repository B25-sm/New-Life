'use client'

import { Check, X } from 'lucide-react'

export default function TrueCostComparison() {
  return (
    <section className="w-full py-16 bg-white" aria-label="True Cost of Bottled Water comparison">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          True Cost of Bottled Water
        </h2>

        {/* Comparison Container */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Life Ionizer */}
          <div className="flex flex-col items-center space-y-8">
            <div className="w-full">
              <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
                Life Ionizer 2025 MXL Water
              </h3>
              
              {/* Ionizer Image */}
              <div className="relative w-full bg-gradient-to-b from-slate-200 to-slate-300 rounded-lg shadow-lg overflow-hidden mb-8">
                <svg
                  viewBox="0 0 300 400"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Machine Body - Black and Silver */}
                  <defs>
                    <linearGradient id="machineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1f2937" />
                      <stop offset="30%" stopColor="#4b5563" />
                      <stop offset="100%" stopColor="#1f2937" />
                    </linearGradient>
                  </defs>
                  
                  {/* Machine Body */}
                  <path
                    d="M50 50 L250 50 Q260 50 260 60 L260 200 Q260 210 250 210 L200 220 L200 340 L160 340 L160 220 L80 220 L80 340 L50 340 Q40 340 40 330 L40 100 Q40 50 50 50 Z"
                    fill="url(#machineGradient)"
                    stroke="#111827"
                    strokeWidth="2"
                  />
                  
                  {/* Top section - Silver metallic */}
                  <path
                    d="M50 50 L250 50 Q260 50 260 60 L260 120 L50 120 Q50 100 50 50"
                    fill="#cbd5e1"
                  />
                  
                  {/* Buttons */}
                  {[70, 90, 110, 130, 150, 170, 190].map((x) => (
                    <circle key={x} cx={x} cy="70" r="4" fill="#374151" />
                  ))}
                  
                  {/* Hose/Tube - Silver metallic */}
                  <path
                    d="M220 70 Q240 40 260 60 Q270 70 260 80 L260 150"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Display area */}
                  <rect x="70" y="100" width="100" height="70" rx="5" fill="#111827" />
                  <rect x="80" y="110" width="80" height="50" rx="3" fill="#1e40af" />
                  <text x="120" y="135" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">8880</text>
                  <text x="120" y="155" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">05</text>
                  
                  {/* G LIFE logo area */}
                  <text x="150" y="325" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontWeight="bold">G LIFE</text>
                  
                  {/* Side Details */}
                  <path d="M210 70 L210 210" stroke="#64748b" strokeWidth="2" fill="none" />
                  <path d="M200 100 L250 100" stroke="#64748b" strokeWidth="1" fill="none" />
                  <path d="M200 120 L250 120" stroke="#64748b" strokeWidth="1" fill="none" />
                  <path d="M200 140 L250 140" stroke="#64748b" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </div>

            {/* Features with circular icons */}
            <div className="space-y-4 w-full">
              {/* Price */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Price per day per Person 0.44¢ / day
                </span>
              </div>
              
              {/* Hydrogen */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Produces fresh hydrogen-rich H2o anytime
                </span>
              </div>
              
              {/* Hydrogen in the water */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Hydrogen in the water
                </span>
              </div>
              
              {/* Environmental */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Wasteful, harmful to the environment
                </span>
              </div>
              
              {/* BPA */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  May contain BPA
                </span>
              </div>
              
              {/* Contains antioxidant potential */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Contains antioxidant potential
                </span>
              </div>
              
              {/* Adjustable pH */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Adjustable pH for precision benefits
                </span>
              </div>
            </div>
          </div>

          {/* Middle Column - Icons */}
          <div className="flex flex-col items-center justify-center space-y-8 py-8">
            {/* VS with Lightning - Blue Gradient */}
            <div className="relative mb-4">
              <svg
                width="120"
                height="100"
                viewBox="0 0 120 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* VS Text - Blue gradient */}
                <defs>
                  <linearGradient id="vsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
                
                <text
                  x="10"
                  y="50"
                  fontSize="60"
                  fontWeight="bold"
                  fill="none"
                  stroke="url(#vsGradient)"
                  strokeWidth="2"
                  fontFamily="Arial, sans-serif"
                >
                  V
                </text>
                
                {/* Lightning bolt integrated into S */}
                <text
                  x="45"
                  y="50"
                  fontSize="60"
                  fontWeight="bold"
                  fill="none"
                  stroke="url(#vsGradient)"
                  strokeWidth="2"
                  fontFamily="Arial, sans-serif"
                >
                  S
                </text>
                
                {/* Lightning bolt */}
                <path
                  d="M75 10 L70 25 L80 25 L78 40 L88 20 L80 20 Z"
                  fill="url(#vsGradient)"
                  stroke="none"
                />
                
                {/* Radiating lines */}
                <line x1="60" y1="10" x2="60" y2="20" stroke="url(#vsGradient)" strokeWidth="2" />
                <line x1="70" y1="15" x2="75" y2="20" stroke="url(#vsGradient)" strokeWidth="2" />
                <line x1="50" y1="15" x2="45" y2="20" stroke="url(#vsGradient)" strokeWidth="2" />
                <line x1="60" y1="70" x2="60" y2="80" stroke="url(#vsGradient)" strokeWidth="2" />
              </svg>
            </div>

            {/* Price Tag Icon */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-300"
            >
              {/* Two overlapping price tags */}
              <rect x="10" y="20" width="28" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M10 20 L10 12 L20 12 L28 20" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="24" y="36" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">$</text>
              
              <rect x="26" y="28" width="28" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M26 28 L26 20 L36 20 L44 28" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="40" y="44" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">$</text>
            </svg>

            {/* H2O Drop Icon - Single drop for first hydrogen feature */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-300"
            >
              {/* Water drop */}
              <path
                d="M32 8 Q32 20 32 35 Q32 48 20 48 Q8 48 8 35 Q8 20 32 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              {/* Circle with H2O */}
              <circle cx="32" cy="35" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <text
                x="32"
                y="40"
                textAnchor="middle"
                fill="currentColor"
                fontSize="10"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                H2O
              </text>
            </svg>

            {/* Two H2O Drops Icon - Two overlapping drops for second hydrogen feature */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-300"
            >
              {/* Defs for gradient */}
              <defs>
                <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              {/* Left drop (larger) */}
              <path
                d="M24 8 Q24 20 24 32 Q24 44 14 44 Q4 44 4 32 Q4 20 24 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="24" cy="32" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <text
                x="24"
                y="37"
                textAnchor="middle"
                fill="currentColor"
                fontSize="8"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                H₂O
              </text>
              {/* Right drop (smaller, overlapping) */}
              <path
                d="M40 12 Q40 22 40 32 Q40 42 48 42 Q56 42 56 32 Q56 22 40 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>

            {/* Environmental harm icon - Dead fish, skull, dead tree */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-300"
            >
              {/* Dead fish */}
              <ellipse cx="16" cy="40" rx="12" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="38" x2="20" y2="42" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="42" x2="20" y2="38" stroke="currentColor" strokeWidth="2" />
              
              {/* Skull */}
              <circle cx="32" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="28" cy="22" r="1.5" fill="currentColor" />
              <circle cx="36" cy="22" r="1.5" fill="currentColor" />
              <rect x="30" y="26" width="4" height="3" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
              
              {/* Dead tree */}
              <path d="M54 20 L50 30 L54 30 L52 48" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M46 40 L50 50" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M58 40 L54 50" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* BPA-free icon */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-300"
            >
              {/* Circle with BPA */}
              <circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
              <text
                x="32"
                y="38"
                textAnchor="middle"
                fill="currentColor"
                fontSize="12"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                BPA
              </text>
              {/* Diagonal line */}
              <line x1="18" y1="18" x2="46" y2="46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>

            {/* Molecule Icon */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-300"
            >
              <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="14" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="14" cy="46" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="46" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="26" y1="28" x2="18" y2="20" stroke="currentColor" strokeWidth="2" />
              <line x1="38" y1="28" x2="46" y2="20" stroke="currentColor" strokeWidth="2" />
              <line x1="26" y1="36" x2="18" y2="44" stroke="currentColor" strokeWidth="2" />
              <line x1="38" y1="36" x2="46" y2="44" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* pH Icon */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-300"
            >
              {/* Water drop */}
              <path
                d="M32 12 Q32 24 32 40 Q32 52 20 52 Q8 52 20 40 Q28 28 32 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <text
                x="32"
                y="38"
                textAnchor="middle"
                fill="currentColor"
                fontSize="16"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                PH
              </text>
              {/* Starbursts */}
              <circle cx="14" cy="18" r="1.5" fill="currentColor" />
              <circle cx="50" cy="18" r="1.5" fill="currentColor" />
            </svg>
          </div>

          {/* Right Column - Water Bottles */}
          <div className="flex flex-col items-center space-y-8">
            <div className="w-full">
              <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
                Water Bottles
              </h3>
              
              {/* Bottles Image */}
              <div className="relative w-full bg-gradient-to-b from-slate-100 to-slate-200 rounded-lg shadow-lg overflow-hidden mb-8">
                <svg
                  viewBox="0 0 300 400"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Bottle 1 */}
                  <path
                    d="M80 60 Q80 40 100 40 Q120 40 120 60 L120 240 Q120 260 100 260 Q80 260 80 240 Z"
                    fill="rgba(240, 240, 240, 0.8)"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />
                  <rect x="90" y="40" width="20" height="220" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Bottle 1 Label with blue background */}
                  <rect x="85" y="60" width="30" height="50" rx="2" fill="#3b82f6" stroke="#1e40af" strokeWidth="1.5" />
                  <text x="100" y="75" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1.5L</text>
                  
                  {/* Red hibiscus flower */}
                  <circle cx="100" cy="85" r="6" fill="#ef4444" />
                  <circle cx="100" cy="85" r="4" fill="#f87171" />
                  {/* Petals */}
                  <circle cx="95" cy="82" r="3" fill="#dc2626" />
                  <circle cx="105" cy="82" r="3" fill="#dc2626" />
                  <circle cx="95" cy="88" r="3" fill="#dc2626" />
                  <circle cx="105" cy="88" r="3" fill="#dc2626" />
                  
                  {/* Bottle 2 */}
                  <path
                    d="M140 60 Q140 40 160 40 Q180 40 180 60 L180 240 Q180 260 160 260 Q140 260 140 240 Z"
                    fill="rgba(240, 240, 240, 0.8)"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />
                  <rect x="150" y="40" width="20" height="220" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  
                  {/* Bottle 2 Label */}
                  <rect x="145" y="60" width="30" height="50" rx="2" fill="#3b82f6" stroke="#1e40af" strokeWidth="1.5" />
                  <text x="160" y="75" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1.5L</text>
                  
                  {/* Red hibiscus flower */}
                  <circle cx="160" cy="85" r="6" fill="#ef4444" />
                  <circle cx="160" cy="85" r="4" fill="#f87171" />
                  {/* Petals */}
                  <circle cx="155" cy="82" r="3" fill="#dc2626" />
                  <circle cx="165" cy="82" r="3" fill="#dc2626" />
                  <circle cx="155" cy="88" r="3" fill="#dc2626" />
                  <circle cx="165" cy="88" r="3" fill="#dc2626" />
                </svg>
              </div>
            </div>

            {/* Features with circular red X icons */}
            <div className="space-y-4 w-full">
              {/* Price */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Price per day per Person $8.00 / day
                </span>
              </div>
              
              {/* Hydrogen */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Produces fresh hydrogen-rich H2o anytime
                </span>
              </div>
              
              {/* Hydrogen in the water */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Hydrogen in the water
                </span>
              </div>
              
              {/* Environmental */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Wasteful, harmful to the environment
                </span>
              </div>
              
              {/* BPA */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  May contain BPA
                </span>
              </div>
              
              {/* Contains antioxidant potential */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Contains antioxidant potential
                </span>
              </div>
              
              {/* Adjustable pH */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-white font-bold text-sm">
                  Adjustable pH for precision benefits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
