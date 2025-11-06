'use client'

import { useState } from 'react'
import { Clock, Phone, Globe, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'

export default function TalkToExpert() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Generate calendar dates
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  
  // Adjust first day for MON-SUN layout
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1
  
  const days = []
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < adjustedFirstDay; i++) {
    days.push(null)
  }
  // Add all days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(new Date(year, month + (direction === 'next' ? 1 : -1)))
    setSelectedDate(null)
  }

  return (
    <section className="w-full py-16 bg-white" aria-label="Talk To A Water Expert">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Service Details */}
          <div className="space-y-6">
            {/* Logo and Company */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900">Lifeionizer</h3>
              </div>
            </div>

            {/* Service Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Talk To A Water Expert
            </h2>

            {/* Service Attributes */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">30 min</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Phone call</span>
              </div>
            </div>

            {/* Company Description */}
            <p className="text-gray-700 leading-relaxed">
              Since 1996, our Family-Owned San Diego company has sold over 600k Alkaline Hydrogen Antioxidant Water Systems and Custom Whole House solutions, earning 5-star TrustPilot and A+ BBB ratings for Unmatched Performance and Pure Quality.
            </p>

            {/* Cookie Settings */}
            <div className="pt-4">
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                Cookie settings
              </a>
            </div>
          </div>

          {/* Right Column - Scheduling Interface */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Select a Date & Time
            </h3>

            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft className="w-5 h-5 text-blue-900" />
              </button>
              <h4 className="text-lg font-bold text-blue-900">
                {monthNames[month]} {year}
              </h4>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Next month"
              >
                <ChevronRight className="w-5 h-5 text-blue-900" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="mb-6">
              {/* Days of the Week Headers */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                  <div key={day} className="text-center text-sm font-bold text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Dates */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => {
                  if (day === null) {
                    return <div key={`empty-${index}`} className="aspect-square" />
                  }
                  
                  const isPast = day <= 2 // First two days are gray/disabled
                  const isSelected = selectedDate === day
                  
                  return (
                    <button
                      key={day}
                      onClick={() => !isPast && setSelectedDate(day)}
                      disabled={isPast}
                      className={`
                        aspect-square rounded-full text-sm font-semibold transition-all
                        ${isPast 
                          ? 'text-gray-300 cursor-not-allowed' 
                          : isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        }
                      `}
                    >
                      {day}
                      {day === 2 && (
                        <div className="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-1" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Time Zone Selector */}
            <div className="border-t border-gray-200 pt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Time zone
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-white border-2 border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-900 font-semibold hover:border-blue-500 focus:border-blue-500 focus:outline-none transition-colors">
                  <option>India Standard Time (10:12pm)</option>
                  <option>Pacific Standard Time</option>
                  <option>Eastern Standard Time</option>
                  <option>Central Standard Time</option>
                  <option>Mountain Standard Time</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




