'use client'

import { useLanguage } from './LanguageContext'
import { translations as enTranslations, type Translations } from './translations/en'
import { translations as frTranslations } from './translations/fr'
import { translations as esTranslations } from './translations/es'
import { translations as zhTranslations } from './translations/zh'
import { translations as arTranslations } from './translations/ar'
import { translations as fiTranslations } from './translations/fi'
import { translations as deTranslations } from './translations/de'
import { translations as jaTranslations } from './translations/ja'
import { translations as ptTranslations } from './translations/pt'

// Import all translations
const translations: Record<string, Translations> = {
  en: enTranslations,
  fr: frTranslations,
  es: esTranslations,
  zh: zhTranslations,
  ar: arTranslations,
  fi: fiTranslations,
  de: deTranslations,
  ja: jaTranslations,
  pt: ptTranslations,
}

type Path<T> = T extends string
  ? []
  : T extends object
  ? {
      [K in keyof T]: [K, ...Path<T[K]>]
    }[keyof T]
  : never

type PathValue<T, P extends Path<T>> = P extends []
  ? T
  : P extends [infer Key, ...infer Rest]
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : never

export function useTranslation() {
  const { currentLocale } = useLanguage()
  
  function t<P extends Path<Translations>>(
    path: P,
    params?: Record<string, string | number>
  ): PathValue<Translations, P> {
    const translation = path.reduce(
      (obj, key) => obj[key as keyof typeof obj],
      (translations[currentLocale] ?? translations.en) as any
    )

    if (params) {
      return Object.entries(params).reduce(
        (str, [key, value]) => str.replace(`{{${key}}}`, String(value)),
        translation
      )
    }

    return translation
  }

  return { t }
} 