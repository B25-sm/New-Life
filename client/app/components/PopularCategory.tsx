'use client'

import Image from 'next/image'
import Link from 'next/link'
import './PopularCategory.css'

export default function PopularCategory() {
  return (
    <section className="popular-category">
      <div className="popular-category-container">
        <h2 className="popular-category-title">Popular Category</h2>
        
        <div className="popular-category-grid">
          {/* Category 1: LIFE WATER IONIZER MXL Series */}
          <div className="popular-category-card">
            <div className="popular-category-image-wrapper">
              <div className="popular-category-image-placeholder">
                <div className="popular-category-image-content">
                  <div className="product-icon product-ionizer">
                    <div className="ionizer-display">1360</div>
                    <div className="ionizer-display">85</div>
                  </div>
                  <div className="product-faucet"></div>
                </div>
              </div>
            </div>
            <h3 className="popular-category-card-title">LIFE WATER IONIZER MXL Series</h3>
            <Link href="/products/ionizer-mxl-series" className="popular-category-button">
              View Products
            </Link>
          </div>

          {/* Category 2: Life Ionizer Whole Home Systems */}
          <div className="popular-category-card">
            <div className="popular-category-image-wrapper">
              <div className="popular-category-image-placeholder">
                <div className="popular-category-image-content">
                  <div className="product-tanks">
                    <div className="tank tank-1"></div>
                    <div className="tank tank-2"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="popular-category-card-title">Life Ionizer Whole Home Systems</h3>
            <Link href="/products/whole-home-systems" className="popular-category-button">
              View Products
            </Link>
          </div>

          {/* Category 3: Whole House Filter and Ionizer Combos */}
          <div className="popular-category-card">
            <div className="popular-category-image-wrapper">
              <div className="popular-category-image-placeholder">
                <div className="popular-category-image-content combo-content">
                  <div className="product-tanks">
                    <div className="tank tank-1"></div>
                    <div className="tank tank-2"></div>
                  </div>
                  <div className="filter-bracket">
                    <div className="filter-cartridge"></div>
                    <div className="filter-cartridge"></div>
                    <div className="filter-cartridge"></div>
                  </div>
                  <div className="product-icon product-ionizer small">
                    <div className="ionizer-display">1360</div>
                  </div>
                  <div className="product-faucet"></div>
                </div>
              </div>
            </div>
            <h3 className="popular-category-card-title">Whole House Filter and Ionizer Combos</h3>
            <Link href="/products/filter-ionizer-combos" className="popular-category-button">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}





