'use client'

export default function CustomWaterSystem() {
  return (
    <section className="w-full py-16 bg-white" aria-label="Finding Your Custom Water System">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Finding Your Custom Water System Is As Easy As 1-2-3
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 01: Free water quality report */}
          <div className="relative bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            {/* Step Number */}
            <div className="absolute top-4 right-4">
              <span className="text-6xl font-bold text-blue-400 opacity-30">01</span>
            </div>
            
            {/* Icon with bubbles */}
            <div className="flex justify-center mb-6 relative">
              <div className="relative">
                {/* Main bubble */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/50 blur-sm" />
                </div>
                {/* Smaller bubbles */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/40 blur-sm" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-white/40 blur-sm" />
                
                {/* Clipboard with water drop icon */}
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 text-blue-400"
                >
                  {/* Clipboard */}
                  <rect x="20" y="10" width="24" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M28 10 L28 16 M32 10 L32 16 M36 10 L36 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  
                  {/* Water drop on clipboard */}
                  <path
                    d="M32 24 Q32 30 32 38 Q32 44 26 44 Q20 44 20 38 Q20 30 32 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="32" cy="38" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Free water quality report
            </h3>
            
            {/* Description */}
            <p className="text-gray-900 text-left">
              Receive a comprehensive analysis of your local water supply to pinpoint harmful contaminants, followed by a personalized consultation with one of our experts.
            </p>
          </div>

          {/* Step 02: Choose Your Perfect System */}
          <div className="relative bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            {/* Step Number */}
            <div className="absolute top-4 right-4">
              <span className="text-6xl font-bold text-blue-400 opacity-30">02</span>
            </div>
            
            {/* Icon with bubbles */}
            <div className="flex justify-center mb-6 relative">
              <div className="relative">
                {/* Main bubble */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/50 blur-sm" />
                </div>
                {/* Smaller bubbles */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/40 blur-sm" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-white/40 blur-sm" />
                
                {/* Water filtration system icon */}
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 text-blue-400"
                >
                  {/* Left cylinder */}
                  <rect x="12" y="16" width="14" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="15" y="20" width="8" height="24" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  
                  {/* Right cylinder */}
                  <rect x="38" y="16" width="14" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="41" y="20" width="8" height="24" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  
                  {/* Connecting pipes */}
                  <path d="M26 24 L38 24" stroke="currentColor" strokeWidth="2" />
                  <path d="M26 40 L38 40" stroke="currentColor" strokeWidth="2" />
                  
                  {/* Faucet */}
                  <path d="M45 16 Q50 12 56 16 L56 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="54" y1="16" x2="57" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="54" y1="20" x2="57" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Choose Your Perfect System
            </h3>
            
            {/* Description */}
            <p className="text-gray-900 text-left">
              Based on your water report, we&apos;ll help you select the ideal system, complete with custom filters and attachments tailored to your specific needs.
            </p>
          </div>

          {/* Step 03: Fast, Hassle-Free Delivery */}
          <div className="relative bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            {/* Step Number */}
            <div className="absolute top-4 right-4">
              <span className="text-6xl font-bold text-blue-400 opacity-30">03</span>
            </div>
            
            {/* Icon with bubbles */}
            <div className="flex justify-center mb-6 relative">
              <div className="relative">
                {/* Main bubble */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/50 blur-sm" />
                </div>
                {/* Smaller bubbles */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/40 blur-sm" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-white/40 blur-sm" />
                
                {/* Delivery truck icon */}
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 text-blue-400"
                >
                  {/* Truck body */}
                  <rect x="8" y="32" width="40" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  {/* Cab */}
                  <rect x="48" y="28" width="12" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  {/* Windshield */}
                  <rect x="50" y="32" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  
                  {/* Wheels */}
                  <circle cx="20" cy="54" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="54" r="2" fill="currentColor" />
                  <circle cx="44" cy="54" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="44" cy="54" r="2" fill="currentColor" />
                  
                  {/* Package on bed */}
                  <rect x="18" y="28" width="16" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M26 28 L26 40" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M18 34 L34 34" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Fast, Hassle-Free Delivery
            </h3>
            
            {/* Description */}
            <p className="text-gray-900 text-left">
              Get your system delivered in just 2 days. It&apos;s quick to set up, and we&apos;re always available to assist you with any questions along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}





