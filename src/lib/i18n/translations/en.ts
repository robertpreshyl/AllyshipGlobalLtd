export const translations = {
  common: {
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    menu: 'Toggle menu',
    close: 'Close menu',
    explore: 'Explore',
  },
  nav: {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    allies: 'Allies',
    contact: 'Contact',
  },
  home: {
    hero: {
      title: 'Uniting Global Allies for Strategic Investments',
      subtitle: 'Building bridges across borders and sectors',
      trusted: 'Trusted by industry leaders worldwide',
    },
    stats: {
      countries: 'Countries',
      partners: 'Partners',
      investments: 'Investments',
    },
    sectors: {
      title: 'Investment Sectors',
      subtitle: 'Diversified investments across key global sectors',
    },
    trustBadges: {
      title: 'Trusted By Industry Leaders',
    },
  },
  about: {
    mission: {
      title: 'Our Mission',
      description: 'To bridge investment opportunities across borders and sectors',
    },
    values: {
      trust: 'Trust',
      innovation: 'Innovation',
      sustainability: 'Sustainability',
    },
  },
  portfolio: {
    sectors: {
      realEstate: 'Real Estate',
      energy: 'Energy',
      technology: 'Technology',
      trade: 'Import/Export',
    },
  },
  contact: {
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
    },
  },
} as const

export type TranslationValue = string
export type TranslationKey = keyof typeof translations

type DeepStringify<T> = {
  [P in keyof T]: T[P] extends object ? DeepStringify<T[P]> : TranslationValue
}

export type Translations = DeepStringify<typeof translations> 