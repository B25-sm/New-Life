'use client'

import Image from 'next/image'
import BubbleBackground from './BubbleBackground'

export default function BlueBubbleSection() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] py-16 md:py-24 overflow-hidden">
      {/* Blue Background with Bubbles */}
      <BubbleBackground showBackground={true} />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Text Section - Strictly Left Aligned */}
          <div className="mb-12 md:mb-16 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg text-left">
              Enjoy the Healthiest Hydrogen Water in the World!
            </h2>
            <p className="text-lg md:text-xl text-white max-w-4xl leading-relaxed drop-shadow-md text-left">
              Born in San Diego 29 years ago, our family-owned business has pioneered alkaline hydrogen antioxidant-rich water systems and custom whole-house solutions, selling over 600,000 units trusted by pro athletes and doctors, and earning 5-star TrustPilot and A+ BBB ratings for unmatched quality and performance.
            </p>
          </div>
          
          {/* Image Section - Positioned at bottom with different layouts */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-end mt-16 md:mt-20">
            {/* Left Image - Vertical/Portrait */}
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-white/40 w-full md:w-[200px] lg:w-[250px] flex-shrink-0">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/family-drinking-water.webp"
                  alt="Family drinking water"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
            </div>
            
            {/* Right Image - Horizontal/Landscape */}
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-white/40 flex-1 min-w-0">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/multi-generational-family.webp"
                  alt="Multi-generational family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

