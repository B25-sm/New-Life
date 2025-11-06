'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Collection {
  id: string
  title: string
  slug: string
  image: string
}

const collections: Collection[] = [
  {
    id: '1',
    title: 'Collection Old - Whole House Filter and Ionizer Combos',
    slug: 'whole-house-filter-ionizer-combos',
    image: '/images/collection-whole-house.webp'
  },
  {
    id: '2',
    title: 'Life Ionizer 7500/7600/8000 Series',
    slug: 'life-ionizer-7500-7600-8000-series',
    image: '/images/collection-7500-series.webp'
  },
  {
    id: '3',
    title: 'Life Ionizer 7700/9000/Next Gen Series',
    slug: 'life-ionizer-7700-9000-next-gen-series',
    image: '/images/collection-7700-series.webp'
  },
  {
    id: '4',
    title: 'Life Ionizer M/MX/MXL Series Replacement Filters',
    slug: 'm-mx-mxl-series-replacement-filters',
    image: '/images/collection-m-mx-mxl-filters.webp'
  },
  {
    id: '5',
    title: 'Life Ionizer Whole Home Systems',
    slug: 'whole-home-systems',
    image: '/images/collection-whole-home.webp'
  },
  {
    id: '6',
    title: 'Commercial Water Ionizers',
    slug: 'commercial-water-ionizers',
    image: '/images/collection-commercial.webp'
  },
  {
    id: '7',
    title: 'LIFE WATER IONIZER MXL Series',
    slug: 'life-water-ionizer-mxl-series',
    image: '/images/collection-mxl-series.webp'
  },
  {
    id: '8',
    title: 'MXL Series Faucet Conversion Kit',
    slug: 'mxl-series-faucet-conversion-kit',
    image: '/images/collection-faucet-kit.webp'
  },
  {
    id: '9',
    title: 'Reverse Osmosis System',
    slug: 'reverse-osmosis-system',
    image: '/images/collection-reverse-osmosis.webp'
  }
]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white pt-[100px] pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A0F2C] mb-4">
            Collections
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our premium collection of water ionizers, filters, and systems
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/shop/${collection.slug}`}
              className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#5BC0DE] to-[#00A99D] flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-white opacity-20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                {/* Placeholder for actual image */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0A0F2C] mb-4 group-hover:text-[#00A99D] transition-colors">
                  {collection.title}
                </h3>
                <div className="flex items-center text-[#00A99D] font-medium group-hover:gap-2 transition-all">
                  <span>View collection</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}




