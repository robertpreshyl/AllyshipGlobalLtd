export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    linkedin: string
  }
}

export interface NavItem {
  title: string
  href: string
}

export interface NavigationConfig {
  mainNav: NavItem[]
}

export interface InvestmentSector {
  id: string
  name: string
  description: string
  icon: string
}

export const siteConfig: SiteConfig = {
  name: 'Allyship Global Limited',
  description: 'Uniting Global Allies for Strategic Investments',
  url: 'https://allyshipglobal.com',
  ogImage: 'https://allyshipglobal.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/allyshipglobal',
    linkedin: 'https://linkedin.com/company/allyship-global',
  },
}

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
    },
    {
      title: 'Allies',
      href: '/allies',
    },
    {
      title: 'Insights',
      href: '/insights',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
}

export const investmentSectors: InvestmentSector[] = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Premium commercial and residential properties worldwide',
    icon: 'building',
  },
  {
    id: 'energy',
    name: 'Energy',
    description: 'Sustainable and traditional energy solutions',
    icon: 'zap',
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Cutting-edge tech and digital innovations',
    icon: 'cpu',
  },
  {
    id: 'trade',
    name: 'Import/Export',
    description: 'Global trade and logistics operations',
    icon: 'ship',
  },
] 