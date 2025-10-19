'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Image
              src="/cavelab-logo-word.png"
              alt="CAVELAB"
              width={150}
              height={40}
              priority
            />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="/#about" className="text-cavelab-gray hover:text-gray-600 transition-colors">
              About
            </a>
            <a href="/#products" className="text-cavelab-gray hover:text-gray-600 transition-colors">
              Products
            </a>
            <a href="/doses-app" className="text-cavelab-gray hover:text-gray-600 transition-colors">
              Doses App
            </a>
            <a href="/#contact" className="text-cavelab-gray hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-cavelab-gray"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="/#about"
              className="block text-cavelab-gray hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/#products"
              className="block text-cavelab-gray hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="/doses-app"
              className="block text-cavelab-gray hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Doses App
            </a>
            <a
              href="/#contact"
              className="block text-cavelab-gray hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
