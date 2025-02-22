'use client'

import { motion } from 'framer-motion'
import { Icons } from '@/components/common/Icons'

const offices = [
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    address: '123 Financial District, London EC4M 7JN',
    phone: '+44 20 1234 5678',
    email: 'london@allyshipglobal.com',
    timezone: 'GMT (UTC+0)',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Dubai International Financial Centre, Dubai',
    phone: '+971 4 123 4567',
    email: 'dubai@allyshipglobal.com',
    timezone: 'GST (UTC+4)',
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    address: 'Marina Bay Financial Centre, Singapore 018983',
    phone: '+65 6789 0123',
    email: 'singapore@allyshipglobal.com',
    timezone: 'SGT (UTC+8)',
  },
]

export function DirectContact() {
  return (
    <div className="space-y-8">
      {/* General Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border bg-background p-6"
      >
        <h3 className="mb-4 font-heading text-xl font-semibold">General Inquiries</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Icons.mail className="mr-3 h-5 w-5 text-primary" />
            <a
              href="mailto:support@allyshipglobal.com"
              className="text-primary hover:underline"
            >
              support@allyshipglobal.com
            </a>
          </div>
          <div className="flex items-center">
            <Icons.phone className="mr-3 h-5 w-5 text-primary" />
            <span>Contact our support team 24/7</span>
          </div>
        </div>
      </motion.div>

      {/* Office Locations */}
      <div className="space-y-4">
        <h3 className="font-heading text-xl font-semibold">Global Offices</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border bg-background p-6"
            >
              <div className="mb-3 flex items-center">
                <Icons.mapPin className="mr-2 h-5 w-5 text-primary" />
                <h4 className="font-heading text-lg font-semibold">
                  {office.city}, {office.country}
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">{office.address}</p>
                <div className="flex items-center">
                  <Icons.phone className="mr-2 h-4 w-4 text-primary" />
                  <a href={`tel:${office.phone}`} className="hover:underline">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Icons.mail className="mr-2 h-4 w-4 text-primary" />
                  <a href={`mailto:${office.email}`} className="hover:underline">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Icons.clock className="mr-2 h-4 w-4 text-primary" />
                  <span>{office.timezone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emergency Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border bg-background p-6"
      >
        <div className="flex items-start">
          <Icons.shield className="mr-3 h-6 w-6 text-primary" />
          <div>
            <h3 className="mb-2 font-heading text-lg font-semibold">Security Notice</h3>
            <p className="text-sm text-muted-foreground">
              All investments and funds are protected under international financial regulations.
              For urgent matters regarding your investments, please contact our dedicated
              support line.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 