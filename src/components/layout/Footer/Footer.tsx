'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { navigationConfig, siteConfig } from '@/lib/constants/config'
import { Icons } from '@/components/common/Icons'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-foreground">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">
              Uniting global allies for strategic investments across borders and sectors.
            </p>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icons.twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {navigationConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Investment Sectors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-foreground">Investment Sectors</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/portfolio/real-estate" 
                  className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icons.building className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Real Estate
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio/energy" 
                  className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icons.zap className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Energy
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio/technology" 
                  className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icons.cpu className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Technology
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio/trade" 
                  className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icons.ship className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Import/Export
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icons.mapPin className="h-4 w-4 text-primary" />
                <span>Global Headquarters</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icons.phone className="h-4 w-4 text-primary" />
                <Link href="/contact" className="hover:text-primary">
                  Contact Support
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Icons.mail className="h-4 w-4 text-primary" />
                <Link 
                  href="mailto:info@allyshipglobal.com"
                  className="hover:text-primary"
                >
                  info@allyshipglobal.com
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 border-t pt-8"
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 