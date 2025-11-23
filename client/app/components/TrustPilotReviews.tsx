'use client'

import { Star } from 'lucide-react'
import './TrustPilotReviews.css'

interface Review {
  name: string
  date: string
  headline: string
  body: string
  rating: number
}

const reviews: Review[] = [
  {
    name: 'Jose VALLE',
    date: 'Aug 26, 2025',
    headline: 'I love my life ionizer!',
    body: "I love my life ionizer.I've had it for 5 years and the filtration is very affordable and always great customer service. I have the countertop but i'm most likely going to buy one for underneath sink as well. I literally lost weight drinking the alkaline water, as advertised about twelve pounds in two and a half months.",
    rating: 5,
  },
  {
    name: 'Paul',
    date: 'Aug 25, 2025',
    headline: 'Very understanding company',
    body: "Very understanding company. Their ionizer are top of the line quality and the water has never been more silky smooth. I've been dealing with them for four years, plus and have no regrets. Great customer service great technical support when needed and great explanatory videos showing and describing step-by-step processes with their system. Highly recommend!!",
    rating: 5,
  },
  {
    name: 'Lorena Bezerra',
    date: 'Aug 05, 2025',
    headline: 'I ve had MXL15 and absolutely love the',
    body: "I ve had MXL15 and absolutely love the hydrogen and antixodant benefits that it provides. The amount of energy have increased significantly. I feel more alert and work outs are more productive because I am repleneshing my body with enough nutrients that it needs for a healthy living! So glad to have found life ionizers!!",
    rating: 5,
  },
]

export default function TrustPilotReviews() {
  return (
    <section className="trustpilot-reviews">
      <div className="trustpilot-reviews-container">
        {/* Header */}
        <div className="trustpilot-reviews-header">
          <h2 className="trustpilot-reviews-title">Trust Pilot Reviews</h2>
        </div>

        {/* Reviews Grid */}
        <div className="trustpilot-reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="trustpilot-review-card">
              {/* Reviewer Info */}
              <div className="trustpilot-reviewer-info">
                <span className="trustpilot-reviewer-name">{review.name}</span>
                <span className="trustpilot-review-date">{review.date}</span>
              </div>

              {/* Rating */}
              <div className="trustpilot-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="trustpilot-star" fill="currentColor" />
                ))}
              </div>

              {/* Headline */}
              <h3 className="trustpilot-headline">{review.headline}</h3>

              {/* Body */}
              <p className="trustpilot-body">{review.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}





