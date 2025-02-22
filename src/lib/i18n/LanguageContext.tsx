'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Locale, defaultLocale, locales, Region, regions } from './config'

interface LanguageContextType {
  currentLocale: Locale
  setLocale: (locale: Locale) => void
  currentRegion: Region | null
  setRegion: (region: Region) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale)
  const [currentRegion, setCurrentRegion] = useState<Region | null>(null)

  useEffect(() => {
    // Get user's browser language
    const browserLang = navigator.language.split('-')[0] as Locale
    if (Object.keys(locales).includes(browserLang)) {
      setCurrentLocale(browserLang)
    }

    // Detect region based on timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (timezone.startsWith('Asia')) {
      setCurrentRegion('APAC')
    } else if (timezone.startsWith('Europe') || timezone.startsWith('Africa') || timezone.startsWith('Asia/Dubai')) {
      setCurrentRegion('EMEA')
    } else if (timezone.startsWith('America')) {
      setCurrentRegion('LATAM')
    }
  }, [])

  const setLocale = (locale: Locale) => {
    setCurrentLocale(locale)
    document.documentElement.lang = locale
    document.documentElement.dir = locales[locale].dir
    localStorage.setItem('preferred-locale', locale)
  }

  const setRegion = (region: Region) => {
    setCurrentRegion(region)
    localStorage.setItem('preferred-region', region)
  }

  return (
    <LanguageContext.Provider value={{ currentLocale, setLocale, currentRegion, setRegion }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 