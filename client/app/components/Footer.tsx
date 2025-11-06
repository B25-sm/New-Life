'use client'

import Link from 'next/link'
import { Facebook, Youtube, Instagram, X, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Company Information */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C13 4 14 6 15 8C16 10 17 12 18 14C17 16 16 18 15 20C14 22 13 20 12 18C11 20 10 22 9 20C8 18 7 16 6 14C7 12 8 10 9 8C10 6 11 4 12 2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-blue-500 font-bold text-xl uppercase">LIFE</span>
                <span className="text-blue-600 font-bold text-xl uppercase">IONIZERS</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              Elevate your health with Life Ionizer! Our premium alkaline water and innovative products boost hydration, energy, and support your wellness journey.
            </p>

            {/* Contact */}
            <div>
              <p className="text-gray-700 font-semibold mb-2">Ready? Contact us now:</p>
              <a href="tel:844-335-2174" className="text-blue-600 hover:text-blue-700 font-bold text-lg">
                844-335-2174
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5 text-white" fill="white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Youtube className="w-5 h-5 text-white" fill="white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram className="w-5 h-5 text-white" fill="white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.713-1.227.391.074.745.112 1.127.112.023 0 .046-.009.069-.009 0-.009-.046-.037-.115-.092C9.99 16.52 9.5 15.372 9.5 14c0-2.576 1.876-4.5 4.5-4.5s4.5 1.924 4.5 4.5-1.876 4.5-4.5 4.5c-1.357 0-2.553-.584-3.422-1.455C8.462 16.585 9.614 17 10.82 17c1.228 0 2.309-.487 3.142-1.292.418.262.941.422 1.538.422 1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3c0 .334.055.656.155.959-.123-.08-.26-.152-.407-.211.023-.009.046-.009.069-.009-.023 0-.046.009-.069.009-.723 0-1.418-.109-2.073-.312C6.559 11.054 6 10.095 6 9c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.095-.559 2.054-1.402 2.647.655-.203 1.35-.312 2.073-.312 3.246 0 5.819 2.373 5.819 5.5C16.49 16.848 14.546 19 12 19z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <X className="w-5 h-5 text-white" fill="white" />
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links & Our Policies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-gray-700 hover:text-blue-600 transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/our-history" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Our History
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Policies */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-4">Our Policies</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Warranty & Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Warranty Registration
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-700 mb-4">
              Sign up for exclusive offers, original stories, events and more.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-teal-400 text-white px-6 py-3 rounded-lg hover:bg-teal-500 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* First Row - Region & Payment Methods */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            {/* Region Selector */}
            <div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-blue-500">
                <option>United States (USD $)</option>
                <option>Canada (CAD $)</option>
                <option>United Kingdom (GBP £)</option>
                <option>Europe (EUR €)</option>
              </select>
            </div>

            {/* Payment Methods */}
            <div className="flex gap-2 items-center">
              {/* Amazon Pay */}
              <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">A</span>
              </div>
              {/* American Express */}
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">AE</span>
              </div>
              {/* Apple Pay */}
              <div className="w-12 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs"></span>
              </div>
              {/* Diners Club */}
              <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">DC</span>
              </div>
              {/* Discover */}
              <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">D</span>
              </div>
              {/* Mastercard */}
              <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">MC</span>
              </div>
              {/* Visa */}
              <div className="w-12 h-8 bg-blue-900 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">V</span>
              </div>
            </div>
          </div>

          {/* Second Row - Copyright & Footer Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700">
            <div>
              © 2025 Life Ionizers™. Powered by Shopify
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-blue-600 transition-colors">Warranty & Return Policy</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms Of Service</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-blue-600 transition-colors">Warranty Registration</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

