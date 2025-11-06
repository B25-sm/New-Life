'use client'

import { Award, Filter, UserCheck } from 'lucide-react'

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image - Kitchen Sink with Water */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        {/* Blur effect to match the description */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10" />
      </div>

      {/* Vignette and Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.4) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
        {/* Main Slogan */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-8 md:mb-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] px-4 leading-tight">
          Americas Top Rated Water Filtration Company!
        </h1>

        {/* Feature Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-6xl w-full px-4 mt-auto mb-6 md:mb-8">
          {/* Box 1: Eliminate 2000+ Plastic Bottles */}
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 md:p-5 lg:p-6 text-center border border-white/40 shadow-2xl backdrop-saturate-150">
            <div className="flex justify-center mb-2 md:mb-3">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 2h4v3h-4V2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h6v1H9V5z" />
                <rect x="8" y="6" width="8" height="14" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 9h4M10 12h4" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 drop-shadow-md">Eliminate 2000+</h3>
            <p className="text-xs md:text-sm text-white/95 drop-shadow-sm">Plastic Bottles Per Year</p>
          </div>

          {/* Box 2: Lifetime Warranty */}
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 md:p-5 lg:p-6 text-center border border-white/40 shadow-2xl backdrop-saturate-150">
            <div className="flex justify-center mb-2 md:mb-3">
              <Award className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg" strokeWidth="2" />
            </div>
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 drop-shadow-md">Lifetime</h3>
            <p className="text-xs md:text-sm text-white/95 drop-shadow-sm">Warranty</p>
          </div>

          {/* Box 3: Custom Filtration */}
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 md:p-5 lg:p-6 text-center border border-white/40 shadow-2xl backdrop-saturate-150">
            <div className="flex justify-center mb-2 md:mb-3">
              <Filter className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg" strokeWidth="2" />
            </div>
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 drop-shadow-md">Custom</h3>
            <p className="text-xs md:text-sm text-white/95 drop-shadow-sm">Filtration</p>
          </div>

          {/* Box 4: Experience */}
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 md:p-5 lg:p-6 text-center border border-white/40 shadow-2xl backdrop-saturate-150">
            <div className="flex justify-center mb-2 md:mb-3">
              <UserCheck className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg" strokeWidth="2" />
            </div>
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 drop-shadow-md">Experience</h3>
            <p className="text-xs md:text-sm text-white/95 drop-shadow-sm">28 Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

