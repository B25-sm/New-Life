'use client'

import { Star } from 'lucide-react'
import './CredBar.css'

export default function CredBar() {
  return (
    <section className="cred-bar" role="complementary" aria-label="Trust and credibility badges">
      <div className="cred-bar-inner">
        {/* Trustpilot Group - Left */}
        <div className="cred-bar-item cred-bar-trustpilot">
          <div className="cred-bar-trustpilot-content">
            <div className="cred-bar-trustpilot-header">
              <Star className="cred-bar-star cred-bar-star-main" />
              <span className="cred-bar-trustpilot-text">Trustpilot</span>
            </div>
            <div className="cred-bar-stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="cred-bar-star cred-bar-star-small" />
              ))}
            </div>
            <p className="cred-bar-trustpilot-rating">
              Excellent <span className="cred-bar-rating-bold">4.8/5</span>
            </p>
          </div>
        </div>

        {/* BBB Badge - Next */}
        <div className="cred-bar-item cred-bar-bbb">
          <div className="cred-bar-bbb-wrapper">
            <div className="cred-bar-bbb-left">
              <svg className="cred-bar-bbb-shield" fill="white" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <div className="cred-bar-bbb-text">BBB.</div>
              <div className="cred-bar-bbb-accredited">ACCREDITED</div>
              <div className="cred-bar-bbb-business">BUSINESS</div>
              <div className="cred-bar-bbb-divider"></div>
            </div>
            <div className="cred-bar-bbb-right">
              <div className="cred-bar-bbb-rating">A+</div>
              <div className="cred-bar-bbb-rating-label">rating</div>
            </div>
          </div>
        </div>

        {/* Google Reviews - Center-Right */}
        <div className="cred-bar-item cred-bar-google">
          <div className="cred-bar-google-content">
            <div className="cred-bar-google-logo">
              <svg viewBox="0 0 272 92" className="cred-bar-google-svg">
                <path
                  fill="#4285F4"
                  d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                />
                <path
                  fill="#EA4335"
                  d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                />
                <path
                  fill="#FBBC04"
                  d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.18 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 1.69-5.38 2.92-8.93 2.92-12.77 0-21.24-9.66-21.24-22.09 0-12.52 8.47-22.26 21.24-22.26 3.55 0 6.75 1.23 8.93 2.92h.34v-3.61h9.25zm-8.56 20.92c0-7.81-4.75-13.44-11.84-13.44s-11.84 5.63-11.84 13.44 4.75 13.44 11.84 13.44 11.84-5.63 11.84-13.44z"
                />
                <path
                  fill="#34A853"
                  d="M225 3.65v6.4c-1.29 2.58-3.41 4.64-5.79 6.18-3.43 2.24-7.46 3.48-11.58 3.48v9.01c7.66 0 14.55-3.48 19.38-9.23V3.65H225z"
                />
                <path fill="#4285F4" d="M225 3.65v20.07c-4.83 5.75-11.72 9.23-19.38 9.23v-9.01c4.12 0 8.15-1.24 11.58-3.48 2.38-1.54 4.5-3.6 5.79-6.18V3.65H225z" />
              </svg>
            </div>
            <p className="cred-bar-google-text">Verified Customer Reviews</p>
            <div className="cred-bar-google-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="cred-bar-google-star" />
              ))}
            </div>
          </div>
        </div>

        {/* NYT - Far Right */}
        <div className="cred-bar-item cred-bar-nyt">
          <div className="cred-bar-nyt-content">
            <div className="cred-bar-nyt-letter">T</div>
            <p className="cred-bar-nyt-text">The New York Times</p>
          </div>
        </div>
      </div>
    </section>
  )
}





