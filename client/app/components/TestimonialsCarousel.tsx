'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import './TestimonialsCarousel.css'

interface Testimonial {
  id: number
  name: string
  text: string
  image: string
  alt: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Katy Freeman',
    text: "I was introduced to ionized water about 8 months ago and it quickly became my body's best friend. Since I have been drinking Ionized water, I have a greater sense of well-being and it's the greatest gift I have given my body in a long time.",
    image: 'https://ui-avatars.com/api/?name=Katy+Freeman&size=120&background=00bcea&color=ffffff&bold=true',
    alt: 'Katy Freeman profile picture'
  },
  {
    id: 2,
    name: 'John Smith',
    text: "The water ionizer has transformed my family's health. We've noticed incredible improvements in our energy levels and overall wellness. Highly recommended!",
    image: 'https://ui-avatars.com/api/?name=John+Smith&size=120&background=00bcea&color=ffffff&bold=true',
    alt: 'John Smith profile picture'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    text: "After using the whole house solution for 6 months, our water tastes amazing and my skin has never felt better. The investment was worth every penny.",
    image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=120&background=00bcea&color=ffffff&bold=true',
    alt: 'Sarah Johnson profile picture'
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    )
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Heading */}
        <h2 className="testimonials-heading">
          Happy Words from Happy People
        </h2>

        {/* Carousel Wrapper */}
        <div className="testimonials-carousel-wrapper">
          {/* Previous Button */}
          <button
            className="testimonials-nav-button testimonials-nav-button-prev"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="testimonials-carousel">
            <div
              className="testimonials-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                >
                  {/* Profile Image */}
                  <div className="testimonial-image-wrapper">
                    <div className="testimonial-image-container">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        width={120}
                        height={120}
                        className="testimonial-image"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="testimonial-name">{testimonial.name}</h3>

                  {/* Testimonial Text */}
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            className="testimonials-nav-button testimonials-nav-button-next"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

