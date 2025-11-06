'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import './PopularProducts.css'

interface Product {
  id: string
  title: string
  price: string
  originalPrice?: string
  discount?: string
  rating: number
  reviewCount: number
  image?: string
}

const products: Product[] = [
  {
    id: '1',
    title: 'Life Water Ionizer MXL-5™ Under Counter Alkaline Water Hydrogen Machine & Champion 3-Stage Whole House Filter',
    price: '$3,497.00',
    originalPrice: '$3,997.00',
    discount: '13% OFF',
    rating: 5,
    reviewCount: 17,
  },
  {
    id: '2',
    title: 'Life Ionizer MXL-9™ Under-Counter Water Ionizer & Single Dolphin Whole House Water Filter',
    price: '$5,997.00',
    rating: 5,
    reviewCount: 11,
  },
  {
    id: '3',
    title: 'Life MXL-9 Hydrogen Water Ionizer Undercounter with Double Dolphin Whole House Filter',
    price: '$6,997.00',
    originalPrice: '$8,997.00',
    discount: '22% OFF',
    rating: 5,
    reviewCount: 11,
  },
  {
    id: '4',
    title: 'Life Water Ionizer MXL-7™ Under Counter System',
    price: '$4,497.00',
    rating: 5,
    reviewCount: 8,
  },
  {
    id: '5',
    title: 'Life Ionizer MXL-8™ Premium Water Ionizer System',
    price: '$5,497.00',
    originalPrice: '$6,497.00',
    discount: '15% OFF',
    rating: 5,
    reviewCount: 15,
  },
]

export default function PopularProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1
      return Math.max(0, newIndex)
    })
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, products.length - itemsPerView)
      return Math.min(maxIndex, prev + 1)
    })
  }

  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < products.length - itemsPerView

  return (
    <section className="popular-products">
      <div className="popular-products-container">
        <div className="popular-products-header">
          <h2 className="popular-products-title">Popular products</h2>
          <p className="popular-products-subtitle">Explore the products our customers love the most</p>
        </div>

        <div className="popular-products-carousel-wrapper">
          {/* Previous Button */}
          <button
            className={`popular-products-nav popular-products-nav-prev ${!canGoPrevious ? 'disabled' : ''}`}
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="popular-products-carousel">
            <div
              className="popular-products-track"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {products.map((product) => (
                <div key={product.id} className="popular-products-card">
                  {/* Discount Tag */}
                  {product.discount && (
                    <div className="popular-products-discount">{product.discount}</div>
                  )}

                  {/* Product Image Placeholder */}
                  <div className="popular-products-image-wrapper">
                    <div className="popular-products-image-placeholder">
                      <div className="popular-products-image-content">
                        <div className="product-icon-small">
                          <div className="ionizer-display-small">1360</div>
                        </div>
                        <div className="product-faucet-small"></div>
                        {product.title.includes('Dolphin') && (
                          <div className="product-tank-small"></div>
                        )}
                        {product.title.includes('Champion') && (
                          <div className="filter-bracket-small">
                            <div className="filter-cartridge-small"></div>
                            <div className="filter-cartridge-small"></div>
                            <div className="filter-cartridge-small"></div>
                          </div>
                        )}
                        {product.title.includes('Double Dolphin') && (
                          <>
                            <div className="product-tank-small"></div>
                            <div className="product-tank-small"></div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="popular-products-info">
                    <h3 className="popular-products-card-title">{product.title}</h3>
                    
                    <div className="popular-products-price">
                      <span className="popular-products-price-current">{product.price}</span>
                      {product.originalPrice && (
                        <span className="popular-products-price-original">{product.originalPrice}</span>
                      )}
                    </div>

                    <div className="popular-products-rating">
                      <div className="popular-products-stars">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="popular-products-star" />
                        ))}
                      </div>
                      <span className="popular-products-review-count">({product.reviewCount})</span>
                    </div>

                    <Link href={`/products/${product.id}`} className="popular-products-button">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            className={`popular-products-nav popular-products-nav-next ${!canGoNext ? 'disabled' : ''}`}
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

