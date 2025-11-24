'use client'

import { Menu, Filter, Power, Droplet, Droplets } from 'lucide-react'
import BubbleBackground from './BubbleBackground'

export default function FreshWaterApproach() {
  const contaminants = [
    'Pesticide',
    'Fluoride',
    'Chemicals',
    'Heavy Metals',
    'Microplastics',
  ]

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[800px] py-16 md:py-24 overflow-hidden">
      {/* Teal-blue Background with Bubbles */}
      <BubbleBackground showBackground={true} />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[600px]">
            {/* Left Side - Text Content */}
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                A Fresh Water
                <br />
                Approach to Health
              </h2>
              <p className="text-lg md:text-xl text-white leading-relaxed drop-shadow-md max-w-xl">
                Are you aware of what&apos;s in your water? Hidden contaminants could be lurking in every
                glass or bottle. At Life Ionizers, our water experts meticulously analyze your unique
                water supply to uncover potential risks that may be affecting both your health and
                the water that touches your skin. With our state-of-the-art solutions, you can
                finally access the clean, safe water you deserve. Your water solutions are here—and
                so is the help you&apos;ve been looking for.
              </p>
            </div>

            {/* Center - Product Display */}
            <div className="flex justify-center items-center py-8">
              <div className="relative">
                {/* LIFE MXL-15 Ionizer */}
                <div className="relative bg-black rounded-lg p-6 shadow-2xl">
                  {/* Main Frame */}
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-5">
                    {/* Front Panel - Brushed Silver */}
                    <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg p-4 shadow-inner relative w-[280px]">
                      {/* Model Label */}
                      <div className="absolute top-2 right-3 text-xs font-bold text-gray-700">
                        LIFE MXL-15
                      </div>

                      {/* Control Buttons at Top */}
                      <div className="grid grid-cols-5 gap-2 mb-4 mt-1">
                        <div className="w-9 h-9 rounded-full bg-gray-400 border-2 border-gray-500 flex items-center justify-center shadow-inner">
                          <Menu className="w-4 h-4 text-gray-700" />
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gray-400 border-2 border-gray-500 flex items-center justify-center shadow-inner">
                          <Filter className="w-4 h-4 text-gray-700" />
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gray-400 border-2 border-gray-500 flex items-center justify-center shadow-inner">
                          <Power className="w-4 h-4 text-gray-700" />
                        </div>
                        <div className="w-9 h-9 rounded-full bg-blue-500 border-2 border-blue-600 flex items-center justify-center shadow-inner">
                          <Droplet className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gray-400 border-2 border-gray-500 flex items-center justify-center shadow-inner">
                          <Droplets className="w-4 h-4 text-gray-700" />
                        </div>
                      </div>

                      {/* Display Screen */}
                      <div className="bg-black rounded-md p-3 mb-3 font-mono">
                        <div className="text-xl font-bold mb-1 text-orange-500">3360</div>
                        <div className="text-base mb-2 text-orange-400 opacity-70">0360</div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs text-blue-400">ALKALINE</span>
                          <span className="text-sm text-blue-400 font-bold">1</span>
                          <span className="text-base font-bold text-red-500">8.5</span>
                        </div>
                      </div>

                      {/* Grid and UV Labels - Right side of display */}
                      <div className="flex justify-end gap-4 text-xs font-semibold text-gray-700 mb-3">
                        <span>GRID</span>
                        <span>UV LIGHT</span>
                      </div>

                      {/* Logo with stylized shape */}
                      <div className="pt-2 border-t border-gray-400">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-800"
                          >
                            <path
                              d="M12 2C13 4 14 6 15 8C16 10 17 12 18 14C17 16 16 18 15 20C14 22 13 20 12 18C11 20 10 22 9 20C8 18 7 16 6 14C7 12 8 10 9 8C10 6 11 4 12 2Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="text-center text-xs font-bold text-gray-800">
                          LIFE IONIZERS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contaminants List */}
            <div className="flex flex-col">
              <ul className="space-y-5">
                {contaminants.map((contaminant, index) => (
                  <li
                    key={index}
                    className="text-white font-bold text-lg md:text-xl flex items-center"
                  >
                    <span className="mr-3 text-white">•</span>
                    <span className="relative inline-block">
                      {contaminant}
                      <span className="absolute left-0 top-1/2 w-full h-0.5 bg-red-500 transform -translate-y-1/2"></span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

