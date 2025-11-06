'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight, Search, Mic, User, ShoppingCart } from 'lucide-react'
import AnimatedSearchBar from './AnimatedSearchBar'

export default function Navbar() {
  const [isWaterSystemsOpen, setIsWaterSystemsOpen] = useState(false)
  const [isIonizerFiltersOpen, setIsIonizerFiltersOpen] = useState(false)
  const [isComparisonOpen, setIsComparisonOpen] = useState(false)
  const [isLearnOpen, setIsLearnOpen] = useState(false)
  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false)
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const waterSystemsDropdownRef = useRef<HTMLDivElement>(null)
  const waterSystemsLinkRef = useRef<HTMLDivElement>(null)
  const ionizerFiltersDropdownRef = useRef<HTMLDivElement>(null)
  const ionizerFiltersLinkRef = useRef<HTMLDivElement>(null)
  const comparisonDropdownRef = useRef<HTMLDivElement>(null)
  const comparisonLinkRef = useRef<HTMLDivElement>(null)
  const learnDropdownRef = useRef<HTMLDivElement>(null)
  const learnLinkRef = useRef<HTMLDivElement>(null)
  const testimonialsDropdownRef = useRef<HTMLDivElement>(null)
  const testimonialsLinkRef = useRef<HTMLDivElement>(null)
  const aboutUsDropdownRef = useRef<HTMLDivElement>(null)
  const aboutUsLinkRef = useRef<HTMLDivElement>(null)
  const supportDropdownRef = useRef<HTMLDivElement>(null)
  const supportLinkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Water Systems dropdown
      if (
        waterSystemsDropdownRef.current &&
        !waterSystemsDropdownRef.current.contains(event.target as Node) &&
        waterSystemsLinkRef.current &&
        !waterSystemsLinkRef.current.contains(event.target as Node)
      ) {
        setIsWaterSystemsOpen(false)
      }

      // Ionizer Filters dropdown
      if (
        ionizerFiltersDropdownRef.current &&
        !ionizerFiltersDropdownRef.current.contains(event.target as Node) &&
        ionizerFiltersLinkRef.current &&
        !ionizerFiltersLinkRef.current.contains(event.target as Node)
      ) {
        setIsIonizerFiltersOpen(false)
      }

      // Comparison dropdown
      if (
        comparisonDropdownRef.current &&
        !comparisonDropdownRef.current.contains(event.target as Node) &&
        comparisonLinkRef.current &&
        !comparisonLinkRef.current.contains(event.target as Node)
      ) {
        setIsComparisonOpen(false)
      }

      // Learn dropdown
      if (
        learnDropdownRef.current &&
        !learnDropdownRef.current.contains(event.target as Node) &&
        learnLinkRef.current &&
        !learnLinkRef.current.contains(event.target as Node)
      ) {
        setIsLearnOpen(false)
      }

      // Testimonials dropdown
      if (
        testimonialsDropdownRef.current &&
        !testimonialsDropdownRef.current.contains(event.target as Node) &&
        testimonialsLinkRef.current &&
        !testimonialsLinkRef.current.contains(event.target as Node)
      ) {
        setIsTestimonialsOpen(false)
      }

      // About Us dropdown
      if (
        aboutUsDropdownRef.current &&
        !aboutUsDropdownRef.current.contains(event.target as Node) &&
        aboutUsLinkRef.current &&
        !aboutUsLinkRef.current.contains(event.target as Node)
      ) {
        setIsAboutUsOpen(false)
      }

      // Support dropdown
      if (
        supportDropdownRef.current &&
        !supportDropdownRef.current.contains(event.target as Node) &&
        supportLinkRef.current &&
        !supportLinkRef.current.contains(event.target as Node)
      ) {
        setIsSupportOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  return (
    <nav className="w-full">
      {/* Top Tier - Header Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 bg-[#00A99D] text-white text-center py-2 px-4 z-50">
        <p className="text-sm md:text-base font-bold">
          Call 844-335-2174 for Free Installation, Life Time Warranty, and Servicing!
        </p>
      </div>

      {/* Spacer to account for fixed top bar - pushes main nav down initially */}
      <div className="h-[44px] md:h-[48px] bg-white"></div>

      {/* Bottom Tier - Main Navigation - Sticky below fixed bar */}
      <div className="bg-white w-full sticky top-[44px] md:top-[48px] z-40 shadow-sm">
        {/* First Row - Logo, Search, Icons */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5BC0DE] to-[#4A9FD1] flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C13 4 14 6 15 8C16 10 17 12 18 14C17 16 16 18 15 20C14 22 13 20 12 18C11 20 10 22 9 20C8 18 7 16 6 14C7 12 8 10 9 8C10 6 11 4 12 2Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-[#5BC0DE] font-bold text-xl uppercase">LIFE</span>
              <span className="text-[#3A7FA8] font-bold text-xl uppercase">IONIZERS</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="flex items-center border border-[#00A99D] rounded-lg overflow-hidden bg-white shadow-sm">
              {/* Dropdown */}
              <div className="flex items-center gap-1 px-3 py-2 border-r border-gray-300 cursor-pointer hover:bg-gray-50">
                <span className="text-gray-700 text-sm">All</span>
                <ChevronDown className="w-4 h-4 text-gray-700" />
              </div>

              {/* Animated Search Input */}
              <AnimatedSearchBar className="min-w-0" />

              {/* Voice Search */}
              <button className="px-3 py-2 border-l border-gray-200 hover:bg-gray-50">
                <Mic className="w-5 h-5 text-[#00A99D]" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="w-10 h-10 rounded-full bg-gradient-to-b from-[#5BC0DE] to-[#00A99D] flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
              <User className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gradient-to-b from-[#5BC0DE] to-[#00A99D] flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Second Row - Navigation Links */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
              <Link
                href="/"
                className="text-gray-700 text-sm font-normal hover:text-[#00A99D] transition-colors border-b-2 border-black pb-1"
              >
                Home
              </Link>
              <div className="relative" ref={waterSystemsLinkRef}>
                <div
                  className="text-gray-700 text-sm font-normal hover:text-[#00A99D] transition-colors flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setIsWaterSystemsOpen(true)}
                  onClick={() => setIsWaterSystemsOpen(!isWaterSystemsOpen)}
                >
                  <span className={isWaterSystemsOpen ? 'text-[#00A99D]' : ''}>Water Systems</span>
                  <ChevronDown className="w-3 h-3 text-gray-700" />
                </div>

                {/* Water Systems Dropdown */}
                {isWaterSystemsOpen && (
                  <div
                    ref={waterSystemsDropdownRef}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[280px] z-50"
                    onMouseLeave={() => setIsWaterSystemsOpen(false)}
                  >
                    {/* Ionizer MXL Series */}
                    <Link
                      href="/water-systems/ionizer-mxl-series"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      <div className="flex-shrink-0">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="6" y="8" width="20" height="16" rx="2" fill="black" />
                          <rect x="9" y="11" width="14" height="2" rx="1" fill="white" />
                          <rect x="9" y="15" width="10" height="1" rx="0.5" fill="white" />
                          <rect x="9" y="18" width="8" height="1" rx="0.5" fill="white" />
                        </svg>
                      </div>
                      <span className="flex-1 text-gray-700 text-sm">Ionizer MXL Series</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </Link>

                    {/* Whole Home System */}
                    <Link
                      href="/water-systems/whole-home-system"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      <div className="flex-shrink-0">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="4" width="8" height="24" rx="1" fill="black" />
                          <rect x="20" y="4" width="8" height="24" rx="1" fill="black" />
                          <rect x="5" y="6" width="6" height="4" rx="0.5" fill="white" />
                          <rect x="21" y="6" width="6" height="4" rx="0.5" fill="white" />
                        </svg>
                      </div>
                      <span className="flex-1 text-gray-700 text-sm">Whole Home System</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </Link>

                    {/* Life Ionizers */}
                    <Link
                      href="/water-systems/life-ionizers"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      <div className="flex-shrink-0">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="6" y="6" width="20" height="20" rx="2" fill="#5BC0DE" />
                          <rect x="8" y="8" width="16" height="16" rx="1" fill="#3A7FA8" />
                          <path d="M12 14 L20 14 L20 18 L12 18 Z" fill="white" />
                          <circle cx="16" cy="22" r="2" fill="#5BC0DE" />
                          <rect x="14" y="26" width="4" height="2" rx="1" fill="#5BC0DE" />
                        </svg>
                      </div>
                      <span className="flex-1 text-gray-700 text-sm">Life Ionizers</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </Link>

                    {/* Commercial Water Ionizers */}
                    <Link
                      href="/water-systems/commercial-water-ionizers"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="4" width="24" height="24" rx="1" fill="black" />
                          <rect x="6" y="6" width="20" height="20" rx="0.5" fill="#333" />
                          <rect x="8" y="8" width="16" height="3" rx="0.5" fill="white" />
                          <rect x="8" y="13" width="12" height="2" rx="0.5" fill="#888" />
                          <rect x="8" y="17" width="14" height="2" rx="0.5" fill="#888" />
                          <rect x="8" y="21" width="10" height="2" rx="0.5" fill="#888" />
                          <circle cx="24" cy="10" r="1.5" fill="#00A99D" />
                        </svg>
                      </div>
                      <span className="flex-1 text-gray-700 text-sm">Commercial Water Ionizers</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative" ref={ionizerFiltersLinkRef}>
                <div
                  className="text-gray-700 text-sm font-normal hover:text-[#00A99D] transition-colors flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setIsIonizerFiltersOpen(true)}
                  onClick={() => setIsIonizerFiltersOpen(!isIonizerFiltersOpen)}
                >
                  <span className={isIonizerFiltersOpen ? 'text-[#00A99D]' : ''}>Ionizer Filters</span>
                  <ChevronDown className="w-3 h-3 text-gray-700" />
                </div>

                {/* Ionizer Filters Dropdown */}
                {isIonizerFiltersOpen && (
                  <div
                    ref={ionizerFiltersDropdownRef}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[700px] z-50"
                    onMouseLeave={() => setIsIonizerFiltersOpen(false)}
                  >
                    <div className="grid grid-cols-4 gap-0 p-4">
                      {/* Column 1: M/MX/MXL Filter */}
                      <div className="border-r border-gray-200 pr-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="2" y="4" width="5" height="16" rx="1" fill="#5BC0DE" />
                              <rect x="9" y="4" width="5" height="16" rx="1" fill="#5BC0DE" />
                              <rect x="16" y="4" width="5" height="16" rx="1" fill="#5BC0DE" />
                            </svg>
                          </div>
                          <Link
                            href="/ionizer-filters/m-mx-mxl-filter"
                            className="text-gray-700 text-sm font-semibold hover:text-[#00A99D]"
                          >
                            M/MX/MXL Filter
                          </Link>
                        </div>
                        <div className="space-y-1 ml-8">
                          <Link
                            href="/ionizer-filters/mxl-internal-replacement-filter-1"
                            className="block text-gray-600 text-xs hover:text-[#00A99D] py-1"
                          >
                            MXL Internal Replacement Filter 1
                          </Link>
                          <Link
                            href="/ionizer-filters/mxl-internal-replacement-filter-2"
                            className="block text-gray-600 text-xs hover:text-[#00A99D] py-1"
                          >
                            MXL Internal Replacement Filter 2
                          </Link>
                          <Link
                            href="/ionizer-filters/ionizers-mx-next-gen-filter-1"
                            className="block text-gray-600 text-xs hover:text-[#00A99D] py-1"
                          >
                            Ionizers MX Next Gen Filter 1
                          </Link>
                          <Link
                            href="/ionizer-filters/ionizers-mx-next-gen-filter-2"
                            className="block text-gray-600 text-xs hover:text-[#00A99D] py-1"
                          >
                            Ionizers MX Next Gen Filter 2
                          </Link>
                          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                            <div className="flex-shrink-0">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="14" height="14" rx="1" fill="white" stroke="#333" strokeWidth="1" />
                                <rect x="5" y="6" width="10" height="2" rx="0.5" fill="#333" />
                                <circle cx="10" cy="11" r="2" fill="#00A99D" />
                              </svg>
                            </div>
                            <Link
                              href="/ionizer-filters/reverse-osmosis-system"
                              className="text-gray-600 text-xs hover:text-[#00A99D]"
                            >
                              Reverse Osmosis System
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Column 2: 7500/7600/8000 Filters */}
                      <div className="border-r border-gray-200 px-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="8" y="4" width="8" height="16" rx="1" fill="#5BC0DE" />
                              <rect x="10" y="6" width="4" height="3" rx="0.5" fill="white" />
                            </svg>
                          </div>
                          <Link
                            href="/ionizer-filters/7500-7600-8000-filters"
                            className="text-gray-700 text-sm font-semibold hover:text-[#00A99D]"
                          >
                            7500/7600/8000 Filters
                          </Link>
                        </div>
                        <div className="space-y-1 ml-8">
                          <Link
                            href="/ionizer-filters/life-7500-8100-filter-1"
                            className="block text-gray-600 text-xs hover:text-[#00A99D] py-1"
                          >
                            Life 7500-8100 Filter 1
                          </Link>
                          <Link
                            href="/ionizer-filters/life-7500-8100-filter-2"
                            className="block text-gray-600 text-xs hover:text-[#00A99D] py-1"
                          >
                            Life 7500-8100 Filter 2
                          </Link>
                          <Link
                            href="/ionizer-filters/citric-acidic-cleaner-7500-8100"
                            className="block text-gray-600 text-xs hover:text-[#00A99D] py-1"
                          >
                            Citric Acidic Cleaner 7500-8100
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Ionizer 7700/9000 Filters */}
                      <div className="border-r border-gray-200 px-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="2" y="4" width="5" height="16" rx="1" fill="#5BC0DE" />
                              <rect x="9" y="4" width="5" height="16" rx="1" fill="#4CAF50" />
                              <rect x="16" y="4" width="5" height="16" rx="1" fill="#FFC107" />
                            </svg>
                          </div>
                          <Link
                            href="/ionizer-filters/ionizer-7700-9000-filters"
                            className="text-gray-700 text-sm font-semibold hover:text-[#00A99D]"
                          >
                            Ionizer 7700/9000 Filters
                          </Link>
                        </div>
                        <div className="space-y-1 ml-8">
                          <Link
                            href="/ionizer-filters/life-7700-9200-filter-1"
                            className="block text-gray-600 text-xs hover:text-[#00A99D] py-1"
                          >
                            Life 7700-9200 Filter 1
                          </Link>
                          <Link
                            href="/ionizer-filters/life-7700-9200-filter-2"
                            className="block text-gray-600 text-xs hover:text-[#00A99D] py-1"
                          >
                            Life 7700-9200 Filter 2
                          </Link>
                          <Link
                            href="/ionizer-filters/citric-acidic-cleaner-7700-9200"
                            className="block text-gray-600 text-xs hover:text-[#00A99D] py-1"
                          >
                            Citric Acidic Cleaner 7700-9200
                          </Link>
                        </div>
                      </div>

                      {/* Column 4: Accessories */}
                      <div className="pl-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M22.7 19.5L18.5 15.3L17.2 16.6L19.8 19.2L18.1 20.9L14.4 17.2L13.1 18.5L17.3 22.7C17.5 22.9 17.7 23 18 23C18.3 23 18.5 22.9 18.7 22.7L22.7 18.7C23.1 18.3 23.1 17.7 22.7 17.3L19.7 14.3L21 13L22.7 14.7C23.1 15.1 23.1 15.7 22.7 16.1L22.7 19.5Z"
                                fill="black"
                              />
                              <circle cx="7" cy="7" r="4" fill="black" />
                              <path
                                d="M7 3L7 11M3 7L11 7"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                          <Link
                            href="/ionizer-filters/accessories"
                            className="text-gray-700 text-sm font-semibold hover:text-[#00A99D]"
                          >
                            Accessories
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Comparison Dropdown */}
              <div className="relative" ref={comparisonLinkRef}>
                <div
                  className="text-gray-700 text-sm font-normal hover:text-[#00A99D] transition-colors flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setIsComparisonOpen(true)}
                  onClick={() => setIsComparisonOpen(!isComparisonOpen)}
                >
                  <span className={isComparisonOpen ? 'text-[#00A99D] border-b-2 border-black pb-1' : ''}>
                    Comparison
                  </span>
                  <ChevronDown className="w-3 h-3 text-gray-700" />
                </div>

                {isComparisonOpen && (
                  <div
                    ref={comparisonDropdownRef}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[280px] z-50"
                    onMouseLeave={() => setIsComparisonOpen(false)}
                  >
                    <Link
                      href="/comparison/compare-life-ionizers-enagic-ionways-jupiter"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100 first:rounded-t-lg"
                    >
                      Compare Life Ionizers, Enagic® & Ionways/Jupiter
                    </Link>
                    <Link
                      href="/comparison/life-ionizers-vs-top-brands"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      Life Ionizers vs Top Brands
                    </Link>
                    <Link
                      href="/comparison/life-vs-kangen"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      Life vs Kangen
                    </Link>
                    <Link
                      href="/comparison/comparison-videos"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors last:rounded-b-lg"
                    >
                      Comparison Videos
                    </Link>
                  </div>
                )}
              </div>

              {/* Learn Dropdown */}
              <div className="relative" ref={learnLinkRef}>
                <div
                  className="text-gray-700 text-sm font-normal hover:text-[#00A99D] transition-colors flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setIsLearnOpen(true)}
                  onClick={() => setIsLearnOpen(!isLearnOpen)}
                >
                  <span className={isLearnOpen ? 'text-[#00A99D] border-b-2 border-black pb-1' : ''}>Learn</span>
                  <ChevronDown className="w-3 h-3 text-gray-700" />
                </div>

                {isLearnOpen && (
                  <div
                    ref={learnDropdownRef}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[200px] z-50"
                    onMouseLeave={() => setIsLearnOpen(false)}
                  >
                    <Link
                      href="/learn/studies"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100 first:rounded-t-lg"
                    >
                      Studies
                    </Link>
                    <Link
                      href="/learn/videos"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      Videos
                    </Link>
                    <Link
                      href="/learn/blog"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/learn/support"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      Support
                    </Link>
                    <Link
                      href="/learn/free-water-report"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors last:rounded-b-lg"
                    >
                      Free Water Report
                    </Link>
                  </div>
                )}
              </div>

              {/* Testimonials Dropdown */}
              <div className="relative" ref={testimonialsLinkRef}>
                <div
                  className="text-gray-700 text-sm font-normal hover:text-[#00A99D] transition-colors flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setIsTestimonialsOpen(true)}
                  onClick={() => setIsTestimonialsOpen(!isTestimonialsOpen)}
                >
                  <span className={isTestimonialsOpen ? 'text-[#00A99D]' : ''}>Testimonials</span>
                  <ChevronDown className="w-3 h-3 text-gray-700" />
                </div>

                {isTestimonialsOpen && (
                  <div
                    ref={testimonialsDropdownRef}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[240px] z-50"
                    onMouseLeave={() => setIsTestimonialsOpen(false)}
                  >
                    <Link
                      href="/testimonials/satisfied-customers"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100 first:rounded-t-lg"
                    >
                      Satisfied Customers
                    </Link>
                    <Link
                      href="/testimonials/health-care-professionals"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      Health Care Professionals
                    </Link>
                    <Link
                      href="/testimonials/actors-musician"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      Actors & Musician
                    </Link>
                    <Link
                      href="/testimonials/professional-athletes"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors last:rounded-b-lg"
                    >
                      Professional Athletes
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/finance"
                className="text-gray-700 text-sm font-normal hover:text-[#00A99D] transition-colors"
              >
                Finance
              </Link>
              {/* About Us Dropdown */}
              <div className="relative" ref={aboutUsLinkRef}>
                <div
                  className="text-gray-700 text-sm font-normal hover:text-[#00A99D] transition-colors flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setIsAboutUsOpen(true)}
                  onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
                >
                  <span className={isAboutUsOpen ? 'text-[#00A99D] border-b-2 border-black pb-1' : ''}>
                    About Us
                  </span>
                  <ChevronDown className="w-3 h-3 text-gray-700" />
                </div>

                {isAboutUsOpen && (
                  <div
                    ref={aboutUsDropdownRef}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[180px] z-50"
                    onMouseLeave={() => setIsAboutUsOpen(false)}
                  >
                    <Link
                      href="/about-us/contact"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors text-center rounded-lg"
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>

              {/* Support Dropdown */}
              <div className="relative" ref={supportLinkRef}>
                <div
                  className="text-gray-700 text-sm font-normal hover:text-[#00A99D] transition-colors flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => setIsSupportOpen(true)}
                  onClick={() => setIsSupportOpen(!isSupportOpen)}
                >
                  <span className={isSupportOpen ? 'text-[#00A99D] border-b-2 border-black pb-1' : ''}>
                    Support
                  </span>
                  <ChevronDown className="w-3 h-3 text-gray-700" />
                </div>

                {isSupportOpen && (
                  <div
                    ref={supportDropdownRef}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[220px] z-50"
                    onMouseLeave={() => setIsSupportOpen(false)}
                  >
                    <Link
                      href="/support/certification"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100 first:rounded-t-lg"
                    >
                      Certification
                    </Link>
                    <Link
                      href="/support/our-company"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      Our Company
                    </Link>
                    <Link
                      href="/support/water-facts"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      Water FACTS
                    </Link>
                    <Link
                      href="/support/business-opportunities"
                      className="block px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors last:rounded-b-lg"
                    >
                      Business Opportunities
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

