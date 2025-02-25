'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Icons } from './Icons'

interface MarketUpdate {
  type: 'forex' | 'crypto' | 'real-estate'
  symbol: string
  name: string
  price: string
  change: number
  icon?: keyof typeof Icons
}

export function MarketTicker() {
  const [mounted, setMounted] = useState(false)
  const [updates, setUpdates] = useState<MarketUpdate[]>([])

  // Generate random price changes
  const generatePriceChange = () => {
    const change = (Math.random() * 5) - 2.5 // Random change between -2.5% and +2.5%
    return Number(change.toFixed(2))
  }

  // Format price with appropriate decimals and currency symbol
  const formatPrice = (price: number, type: MarketUpdate['type']) => {
    if (type === 'forex') return `$${price.toFixed(4)}`
    if (type === 'crypto') return `$${price.toFixed(2)}`
    return `$${price.toLocaleString()}`
  }

  // Initialize market data
  useEffect(() => {
    const marketData: MarketUpdate[] = [
      // Forex pairs
      { type: 'forex', symbol: 'EUR/USD', name: 'Euro/US Dollar', price: '1.0923', change: generatePriceChange(), icon: 'currencies' },
      { type: 'forex', symbol: 'GBP/USD', name: 'British Pound/US Dollar', price: '1.2634', change: generatePriceChange(), icon: 'currencies' },
      { type: 'forex', symbol: 'USD/JPY', name: 'US Dollar/Japanese Yen', price: '148.12', change: generatePriceChange(), icon: 'currencies' },
      { type: 'forex', symbol: 'USD/CHF', name: 'US Dollar/Swiss Franc', price: '0.8745', change: generatePriceChange(), icon: 'currencies' },
      
      // Cryptocurrencies
      { type: 'crypto', symbol: 'BTC', name: 'Bitcoin', price: '43567.89', change: generatePriceChange(), icon: 'bitcoin' },
      { type: 'crypto', symbol: 'ETH', name: 'Ethereum', price: '2289.45', change: generatePriceChange(), icon: 'ethereum' },
      { type: 'crypto', symbol: 'BNB', name: 'Binance Coin', price: '312.78', change: generatePriceChange(), icon: 'crypto' },
      { type: 'crypto', symbol: 'SOL', name: 'Solana', price: '98.45', change: generatePriceChange(), icon: 'crypto' },
      
      // Real Estate Indices
      { type: 'real-estate', symbol: 'REIT', name: 'Global REIT Index', price: '2145.67', change: generatePriceChange(), icon: 'building' },
      { type: 'real-estate', symbol: 'USRPI', name: 'US Real Property Index', price: '1876.34', change: generatePriceChange(), icon: 'home' },
      { type: 'real-estate', symbol: 'EURPI', name: 'European Property Index', price: '1567.89', change: generatePriceChange(), icon: 'building' },
      { type: 'real-estate', symbol: 'APRPI', name: 'Asia-Pacific Real Estate', price: '1234.56', change: generatePriceChange(), icon: 'building' },
    ]

    setUpdates(marketData)
    setMounted(true)

    // Update prices periodically
    const interval = setInterval(() => {
      setUpdates(prevUpdates => 
        prevUpdates.map(update => ({
          ...update,
          change: generatePriceChange(),
        }))
      )
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  // Duplicate the updates array to create a seamless loop
  const allUpdates = [...updates, ...updates]

  return (
    <div className="relative bg-gray-900 py-2 overflow-hidden border-b border-gray-800">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex items-center space-x-8 whitespace-nowrap"
      >
        {allUpdates.map((update, index) => {
          const Icon = update.icon ? Icons[update.icon] : null
          return (
            <div
              key={`${update.symbol}-${index}`}
              className="flex items-center space-x-2"
            >
              {Icon && (
                <Icon className="h-4 w-4 text-gray-400" />
              )}
              <span className="text-sm font-medium text-white">
                {update.symbol}
              </span>
              <span className="text-sm text-gray-400">
                {update.price}
              </span>
              <span
                className={`text-sm ${
                  update.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {update.change >= 0 ? '+' : ''}{update.change}%
              </span>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
} 