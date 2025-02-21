'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  {
    name: 'Tech Innovate',
    logo: '/images/partners/tech-innovate.svg',
    sector: 'Technology'
  },
  {
    name: 'Global Energy Partners',
    logo: '/images/partners/global-energy.svg',
    sector: 'Energy'
  },
  {
    name: 'RealEstate Prime',
    logo: '/images/partners/realestate-prime.svg',
    sector: 'Real Estate'
  },
  {
    name: 'Crypto Ventures',
    logo: '/images/partners/crypto-ventures.svg',
    sector: 'Cryptocurrency'
  },
  {
    name: 'Trade Alliance',
    logo: '/images/partners/trade-alliance.svg',
    sector: 'Import/Export'
  },
  {
    name: 'Oil & Gas Global',
    logo: '/images/partners/oil-gas-global.svg',
    sector: 'Oil & Gas'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function PartnerLogos() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
    >
      {partners.map((partner) => (
        <motion.div
          key={partner.name}
          variants={itemVariants}
          className="group relative flex aspect-square items-center justify-center rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="relative h-full w-full">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="text-center">
              <p className="font-heading text-sm font-semibold text-white">{partner.name}</p>
              <p className="text-xs text-gray-200">{partner.sector}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
} 