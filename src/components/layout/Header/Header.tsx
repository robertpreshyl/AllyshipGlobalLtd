import Link from 'next/link'
import { navigationConfig } from '@/lib/constants/config'
import { cn } from '@/lib/helpers/utils'

interface NavItem {
  title: string
  href: string
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-primary">Allyship Global</span>
          </Link>
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
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 md:inline-flex"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
} 