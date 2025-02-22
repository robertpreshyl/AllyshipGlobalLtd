'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { navigationConfig } from '@/lib/constants/config'
import { cn } from '@/lib/helpers/utils'
import { Icons } from '@/components/common/Icons'

interface NavItem {
  title: string
  href: string
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('header')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [isOpen])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-primary">Allyship Global</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            {navigationConfig.mainNav.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary',
                  'before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-x-0 before:bg-primary before:transition-transform hover:before:scale-x-100',
                  item.href === '/' ? 'text-primary' : 'text-gray-600'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(!isOpen)
          }}
          className="flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <Icons.x className="h-6 w-6" />
          ) : (
            <Icons.menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-[64px] border-t bg-white shadow-lg md:hidden"
          >
            <nav className="container flex flex-col py-4">
              {navigationConfig.mainNav.map((item: NavItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-100',
                    item.href === '/' ? 'text-primary' : 'text-gray-600'
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-4 flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 