export type Locale = 'en' | 'fr' | 'es' | 'zh' | 'ar' | 'fi' | 'de' | 'ja' | 'pt'

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
  },
  fi: {
    name: 'Suomi',
    flag: '🇫🇮',
    dir: 'ltr',
    code: 'fi'
  },
  de: {
    name: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr',
    code: 'de'
  },
  ja: {
    name: '日本語',
    flag: '🇯🇵',
    dir: 'ltr',
    code: 'ja'
  },
  pt: {
    name: 'Português',
    flag: '🇵🇹',
    dir: 'ltr',
    code: 'pt'
  }
}

export const regions = {
  APAC: ['zh', 'ja'],
  EMEA: ['en', 'fr', 'ar', 'de', 'fi'],
  LATAM: ['es', 'pt']
} as const

export type Region = keyof typeof regions 