'use client'

import Link from 'next/link'
import { navigationConfig, siteConfig } from '@/lib/constants/config'
import { Icons } from '@/components/common/Icons'

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{siteConfig.name}</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Uniting global allies for strategic investments across borders and sectors.
            </p>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Icons.twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {navigationConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Sectors */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Investment Sectors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio/real-estate" className="text-sm text-muted-foreground hover:text-primary">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/portfolio/energy" className="text-sm text-muted-foreground hover:text-primary">
                  Energy
                </Link>
              </li>
              <li>
                <Link href="/portfolio/technology" className="text-sm text-muted-foreground hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/portfolio/trade" className="text-sm text-muted-foreground hover:text-primary">
                  Import/Export
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icons.mapPin className="h-4 w-4" />
                <span>Global Headquarters</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icons.phone className="h-4 w-4" />
                <span>Contact Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icons.mail className="h-4 w-4" />
                <span>info@allyshipglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 