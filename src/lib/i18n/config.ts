export type Locale = 'en' | 'fr' | 'es' | 'zh' | 'ar'

export interface LocaleConfig {
  name: string
  flag: string
  dir: 'ltr' | 'rtl'
  code: Locale
}

export const defaultLocale: Locale = 'en'

export const locales: Record<Locale, LocaleConfig> = {
  en: {
    name: 'English',
    flag: '🇬🇧',
    dir: 'ltr',
    code: 'en'
  },
  fr: {
    name: 'Français',
    flag: '🇫🇷',
    dir: 'ltr',
    code: 'fr'
  },
  es: {
    name: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
    code: 'es'
  },
  zh: {
    name: '中文',
    flag: '🇨🇳',
    dir: 'ltr',
    code: 'zh'
  },
  ar: {
    name: 'العربية',
    flag: '🇦🇪',
    dir: 'rtl',
    code: 'ar'
  }
}

export const regions = {
  APAC: ['zh'],
  EMEA: ['en', 'fr', 'ar'],
  LATAM: ['es']
} as const

export type Region = keyof typeof regions 