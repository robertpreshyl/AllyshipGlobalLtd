'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/helpers/utils'
import { Icons } from '@/components/common/Icons'

interface NavItem {
  title: string
  href: string
  icon?: keyof typeof Icons
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/', icon: 'home' },
  { title: 'About', href: '/about', icon: 'users' },
  { title: 'Portfolio', href: '/portfolio', icon: 'briefcase' },
  { title: 'Allies', href: '/allies', icon: 'handshake' },
  { title: 'Contact', href: '/contact', icon: 'mail' },
]

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

  // Don't render anything during SSR
  if (typeof window === 'undefined') return null

  // Don't render until mounted on client
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
            {navItems.map((item) => (
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
          className="flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <Icons.x className="h-6 w-6" />
            ) : (
              <Icons.menu className="h-6 w-6" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute left-0 right-0 top-[64px] border-t bg-white shadow-lg md:hidden"
              style={{
                position: 'absolute',
                top: '64px',
                left: 0,
                right: 0
              }}
            >
              <nav className="container divide-y divide-gray-100">
                <div className="py-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon ? Icons[item.icon] : null
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'flex items-center space-x-4 px-4 py-3 text-base font-medium transition-colors',
                            'hover:bg-gray-50 active:bg-gray-100',
                            item.href === '/' ? 'text-primary' : 'text-gray-600'
                          )}
                        >
                          {Icon && <Icon className="h-5 w-5" />}
                          <span>{item.title}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
                <div className="p-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-white transition-all hover:bg-primary/90 active:scale-95"
                  >
                    <Icons.arrowRight className="h-5 w-5" />
                    <span>Get Started</span>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
} 