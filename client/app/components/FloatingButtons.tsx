'use client'

import { MessageCircle, Phone } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 pointer-events-none">
      <div className="flex items-end justify-between">
        {/* Chat Button - Bottom Left */}
        <button
          className="flex items-center gap-2 bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 pointer-events-auto group"
          aria-label="Chat with us"
          onClick={() => {
            // Add your chat functionality here
            console.log('Chat clicked')
          }}
        >
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Chat</span>
        </button>

        {/* Phone Button - Bottom Right */}
        <button
          className="w-14 h-14 bg-[#FF6B6B] hover:bg-[#FF5252] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 pointer-events-auto group"
          aria-label="Call us"
          onClick={() => {
            // Add your phone functionality here
            window.location.href = 'tel:844-335-2174'
          }}
        >
          <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  )
}

