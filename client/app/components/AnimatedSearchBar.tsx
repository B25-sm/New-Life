'use client'

import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

interface AnimatedSearchBarProps {
  className?: string
  onFocus?: () => void
  onBlur?: () => void
}

const searchTerms = ['products', 'collections', 'brands', 'categories']

export default function AnimatedSearchBar({ className = '', onFocus, onBlur }: AnimatedSearchBarProps) {
  const placeholderRef = useRef<HTMLSpanElement>(null)
  const typedInstanceRef = useRef<Typed | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  useEffect(() => {
    if (!placeholderRef.current) return
    
    // Don't initialize if focused or has value
    if (isFocused || hasValue) {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.stop()
      }
      return
    }

    // Initialize Typed.js
    typedInstanceRef.current = new Typed(placeholderRef.current, {
      strings: searchTerms.map(term => `Search for ${term}`),
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: false,
      smartBackspace: true,
    })

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy()
        typedInstanceRef.current = null
      }
    }
  }, [isFocused, hasValue])

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    if (typedInstanceRef.current) {
      typedInstanceRef.current.stop()
    }
    if (onFocus) onFocus()
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    const value = e.target.value.trim()
    setHasValue(value.length > 0)
    
    if (!value && typedInstanceRef.current) {
      // Only restart if input is empty
      setTimeout(() => {
        if (typedInstanceRef.current && !isFocused) {
          typedInstanceRef.current.reset()
          typedInstanceRef.current.start()
        }
      }, 100)
    }
    if (onBlur) onBlur()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.trim().length > 0)
    if (e.target.value.trim().length > 0 && typedInstanceRef.current) {
      typedInstanceRef.current.stop()
    } else if (e.target.value.trim().length === 0 && !isFocused && typedInstanceRef.current) {
      typedInstanceRef.current.reset()
      typedInstanceRef.current.start()
    }
  }

  return (
    <div className={`relative flex-1 ${className}`}>
      <input
        ref={inputRef}
        type="text"
        placeholder={isFocused ? "Search for products" : ""}
        className="flex-1 w-full px-4 py-2 text-sm focus:outline-none text-gray-700 bg-transparent relative z-10 placeholder-gray-400"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {!hasValue && !isFocused && (
        <span
          ref={placeholderRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none z-0"
          aria-hidden="true"
        />
      )}
    </div>
  )
}

