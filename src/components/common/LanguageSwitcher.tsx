'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { locales, regions, type Locale, type Region } from '@/lib/i18n/config'
import { cn } from '@/lib/helpers/utils'

export function LanguageSwitcher() {
  const { currentLocale, setLocale, currentRegion } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const availableLocales = currentRegion 
    ? regions[currentRegion]
    : Object.keys(locales) as Locale[]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
        aria-label="Select language"
      >
        <span>{locales[currentLocale].flag}</span>
        <span>{locales[currentLocale].name}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
            >
              {availableLocales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => {
                    setLocale(locale)
                    setIsOpen(false)
                  }}
                  className={cn(
                    'flex w-full items-center space-x-3 px-4 py-2 text-left text-sm hover:bg-gray-50',
                    locale === currentLocale && 'bg-gray-50 text-primary'
                  )}
                >
                  <span>{locales[locale].flag}</span>
                  <span>{locales[locale].name}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 