'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import './WhoLovesLife.css'

interface Video {
  id: string
  name: string
  title: string
  image: string
  category: 'athletes' | 'customers'
}

const athletes: Video[] = [
  {
    id: '1',
    name: 'Man with Green Beanie',
    title: 'Customer Review',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Athlete+1',
    category: 'athletes',
  },
  {
    id: '2',
    name: 'Blonde Woman',
    title: 'Customer Review',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Athlete+2',
    category: 'athletes',
  },
  {
    id: '3',
    name: 'Man with Beard',
    title: 'Customer Review',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Athlete+3',
    category: 'athletes',
  },
  {
    id: '4',
    name: 'Bald Man',
    title: 'Customer Review',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Athlete+4',
    category: 'athletes',
  },
  {
    id: '5',
    name: 'Professional Athlete',
    title: 'Customer Review',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Athlete+5',
    category: 'athletes',
  },
  {
    id: '6',
    name: 'Elite Athlete',
    title: 'Customer Review',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Athlete+6',
    category: 'athletes',
  },
  {
    id: '7',
    name: 'Champion Athlete',
    title: 'Customer Review',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Athlete+7',
    category: 'athletes',
  },
  {
    id: '8',
    name: 'Olympic Athlete',
    title: 'Customer Review',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Athlete+8',
    category: 'athletes',
  },
]

const customers: Video[] = [
  {
    id: '9',
    name: 'Customer 1',
    title: 'Happy Customer',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Customer+1',
    category: 'customers',
  },
  {
    id: '10',
    name: 'Customer 2',
    title: 'Happy Customer',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Customer+2',
    category: 'customers',
  },
  {
    id: '11',
    name: 'Customer 3',
    title: 'Happy Customer',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Customer+3',
    category: 'customers',
  },
  {
    id: '12',
    name: 'Customer 4',
    title: 'Happy Customer',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Customer+4',
    category: 'customers',
  },
  {
    id: '13',
    name: 'Customer 5',
    title: 'Happy Customer',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Customer+5',
    category: 'customers',
  },
  {
    id: '14',
    name: 'Customer 6',
    title: 'Happy Customer',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Customer+6',
    category: 'customers',
  },
  {
    id: '15',
    name: 'Customer 7',
    title: 'Happy Customer',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Customer+7',
    category: 'customers',
  },
  {
    id: '16',
    name: 'Customer 8',
    title: 'Happy Customer',
    image: 'https://via.placeholder.com/300x400/9E9EA0/FFFFFF?text=Customer+8',
    category: 'customers',
  },
]

export default function WhoLovesLife() {
  const [activeCategory, setActiveCategory] = useState<'athletes' | 'customers'>('athletes')

  const currentVideos = activeCategory === 'athletes' ? athletes : customers

  return (
    <section className="who-loves-life">
      <div className="who-loves-life-container">
        {/* Header */}
        <div className="who-loves-life-header">
          <h2 className="who-loves-life-main-title">Who Loves Life Celebrities, Athletes and More!</h2>
        </div>

        {/* Filter Buttons */}
        <div className="who-loves-life-filters">
          <button
            className={`who-loves-life-filter ${activeCategory === 'athletes' ? 'active' : ''}`}
            onClick={() => setActiveCategory('athletes')}
          >
            Athletes
          </button>
          <button
            className={`who-loves-life-filter ${activeCategory === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveCategory('customers')}
          >
            Customers
          </button>
        </div>

        {/* Video Grid */}
        <div className="who-loves-life-grid">
          {currentVideos.map((video) => (
            <div key={video.id} className="who-loves-life-card">
              <div className="who-loves-life-image-wrapper">
                <img src={video.image} alt={video.name} className="who-loves-life-image" />
                <button className="who-loves-life-play-button">
                  <Play className="who-loves-life-play-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

