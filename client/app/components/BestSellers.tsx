'use client'

export default function BestSellers() {
  return (
    <section className="w-full py-16 bg-gray-100" aria-label="Best Sellers section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Best Sellers
        </h2>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Product Card 1: MXL-9 Countertop Water Ionizer */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-4">
              {/* Product Image */}
              <div className="relative w-full aspect-square border-2 border-blue-200 rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-slate-100 to-slate-200">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Machine Body */}
                  <defs>
                    <linearGradient id="machineGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1f2937" />
                      <stop offset="30%" stopColor="#4b5563" />
                      <stop offset="100%" stopColor="#1f2937" />
                    </linearGradient>
                  </defs>
                  
                  <path
                    d="M60 60 L340 60 Q360 60 360 80 L360 240 Q360 260 340 260 L280 270 L280 360 L200 360 L200 270 L100 270 L100 360 L60 360 Q40 360 40 340 L40 120 Q40 60 60 60 Z"
                    fill="url(#machineGrad1)"
                    stroke="#111827"
                    strokeWidth="2"
                  />
                  
                  {/* Top section - Silver */}
                  <path
                    d="M60 60 L340 60 Q360 60 360 80 L360 140 L60 140 Q60 120 60 60"
                    fill="#cbd5e1"
                  />
                  
                  {/* Buttons */}
                  {[90, 130, 170, 210, 250, 290, 330].map((x) => (
                    <circle key={x} cx={x} cy="90" r="6" fill="#374151" />
                  ))}
                  
                  {/* Display */}
                  <rect x="100" y="130" width="120" height="90" rx="6" fill="#111827" />
                  <rect x="110" y="140" width="100" height="70" rx="4" fill="#1e40af" />
                  <text x="160" y="175" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">8880</text>
                  <text x="160" y="195" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">05</text>
                  
                  {/* Faucet - Silver metallic */}
                  <path
                    d="M360 80 Q380 60 400 80 Q420 100 400 120 L400 200"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Faucet levers */}
                  <line x1="395" y1="90" x2="415" y2="90" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                  <line x1="395" y1="110" x2="415" y2="110" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* GLIFE logo */}
                  <text x="200" y="340" textAnchor="middle" fill="#cbd5e1" fontSize="14" fontWeight="bold">GLIFE</text>
                </svg>
              </div>
              
              {/* Product Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                MXL-9 Countertop Water Ionizer
              </h3>
              
              {/* Testimonial */}
              <p className="text-gray-700 mb-2 text-sm italic">
                &quot;The MXL -9 Countertop Water Ionizer has completely changed the taste of my water. I feel healthier and more energized every day!&quot;
              </p>
              
              {/* Reviewer */}
              <p className="text-gray-900 mb-4 text-sm font-semibold">
                - Rebecca Stevens
              </p>
              
              {/* Button */}
              <button className="w-full border-2 border-blue-400 bg-white text-gray-900 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Product Card 2: Dolphin Whole Home Filtration Set */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-4">
              {/* Product Image */}
              <div className="relative w-full aspect-square border-2 border-blue-200 rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-slate-100 to-slate-200">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Left Tank */}
                  <rect x="120" y="80" width="60" height="240" rx="5" fill="#1f2937" stroke="#111827" strokeWidth="2" />
                  <rect x="130" y="90" width="40" height="220" rx="3" fill="#111827" stroke="#4b5563" strokeWidth="1" />
                  {/* Cap */}
                  <rect x="90" y="70" width="60" height="30" rx="3" fill="#1f2937" stroke="#111827" strokeWidth="2" />
                  {/* DOLPHIN Logo */}
                  <text x="150" y="250" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" letterSpacing="1">DOLPHIN</text>
                  
                  {/* Right Tank */}
                  <rect x="220" y="60" width="60" height="260" rx="5" fill="#1f2937" stroke="#111827" strokeWidth="2" />
                  <rect x="230" y="70" width="40" height="240" rx="3" fill="#111827" stroke="#4b5563" strokeWidth="1" />
                  {/* Cap */}
                  <rect x="190" y="50" width="60" height="30" rx="3" fill="#1f2937" stroke="#111827" strokeWidth="2" />
                  {/* DOLPHIN Logo */}
                  <text x="250" y="230" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" letterSpacing="1">DOLPHIN</text>
                </svg>
              </div>
              
              {/* Product Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Dolphin Whole Home Filtration Set
              </h3>
              
              {/* Testimonial */}
              <p className="text-gray-700 mb-2 text-sm italic">
                &quot;Since I got the Dolphin Whole Home Filtration Set, my entire house has access to clean, filtered water. I highly recommend it!&quot;
              </p>
              
              {/* Reviewer */}
              <p className="text-gray-900 mb-4 text-sm font-semibold">
                - Connie Fritsch
              </p>
              
              {/* Button */}
              <button className="w-full border-2 border-blue-400 bg-white text-gray-900 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Product Card 3: MXL-15 Under-Counter Water Ionizer */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-4">
              {/* Product Image */}
              <div className="relative w-full aspect-square border-2 border-blue-200 rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-slate-100 to-slate-200">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Machine Body */}
                  <defs>
                    <linearGradient id="machineGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1f2937" />
                      <stop offset="30%" stopColor="#4b5563" />
                      <stop offset="100%" stopColor="#1f2937" />
                    </linearGradient>
                  </defs>
                  
                  <path
                    d="M60 60 L340 60 Q360 60 360 80 L360 240 Q360 260 340 260 L280 270 L280 360 L200 360 L200 270 L100 270 L100 360 L60 360 Q40 360 40 340 L40 120 Q40 60 60 60 Z"
                    fill="url(#machineGrad3)"
                    stroke="#111827"
                    strokeWidth="2"
                  />
                  
                  {/* Top section */}
                  <path
                    d="M60 60 L340 60 Q360 60 360 80 L360 140 L60 140 Q60 120 60 60"
                    fill="#cbd5e1"
                  />
                  
                  {/* Buttons */}
                  {[90, 130, 170, 210, 250, 290, 330].map((x) => (
                    <circle key={x} cx={x} cy="90" r="6" fill="#374151" />
                  ))}
                  
                  {/* Display */}
                  <rect x="100" y="130" width="120" height="90" rx="6" fill="#111827" />
                  <rect x="110" y="140" width="100" height="70" rx="4" fill="#1e40af" />
                  <text x="160" y="175" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">8880</text>
                  <text x="160" y="195" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">05</text>
                  
                  {/* Faucet */}
                  <path
                    d="M360 80 Q380 60 400 80 Q420 100 400 120 L400 200"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Faucet levers */}
                  <line x1="395" y1="90" x2="415" y2="90" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                  <line x1="395" y1="110" x2="415" y2="110" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* GLIFE logo */}
                  <text x="200" y="340" textAnchor="middle" fill="#cbd5e1" fontSize="14" fontWeight="bold">GLIFE</text>
                </svg>
              </div>
              
              {/* Product Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                MXL -15 Under-Counter Water Ionizer
              </h3>
              
              {/* Testimonial */}
              <p className="text-gray-700 mb-2 text-sm italic">
                &quot;The MXL -15 Under-Counter Water Ionizer is sleek, efficient, and easy to install. My water has never tasted better!&quot;
              </p>
              
              {/* Reviewer */}
              <p className="text-gray-900 mb-4 text-sm font-semibold">
                - Bacil Smith Sr.
              </p>
              
              {/* Button */}
              <button className="w-full border-2 border-blue-400 bg-white text-gray-900 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
