'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Icons } from './Icons'

interface InvestmentActivity {
  name: string
  location: string
  countryCode: string
  action: 'invested' | 'withdrew' | 'deposited'
  amount: string
  timestamp: string
  type: 'individual' | 'company'
  gender?: 'male' | 'female' // Only for individuals
}

// List of possible investment activities
const possibleActivities: InvestmentActivity[] = [
  // Companies - Asia
  { name: 'Tencent Holdings', location: 'Shenzhen, China', countryCode: 'CN', action: 'invested', amount: '$2,500,000', timestamp: '2 minutes ago', type: 'company' },
  { name: 'SoftBank Group', location: 'Tokyo, Japan', countryCode: 'JP', action: 'invested', amount: '$5,000,000', timestamp: '7 minutes ago', type: 'company' },
  { name: 'Samsung Ventures', location: 'Seoul, South Korea', countryCode: 'KR', action: 'deposited', amount: '$1,500,000', timestamp: '12 minutes ago', type: 'company' },
  { name: 'Reliance Industries', location: 'Mumbai, India', countryCode: 'IN', action: 'invested', amount: '$3,000,000', timestamp: '15 minutes ago', type: 'company' },
  { name: 'Alibaba Group', location: 'Hangzhou, China', countryCode: 'CN', action: 'withdrew', amount: '$500,000', timestamp: '18 minutes ago', type: 'company' },
  
  // Companies - Europe
  { name: 'Deutsche Bank AG', location: 'Frankfurt, Germany', countryCode: 'DE', action: 'invested', amount: '$4,000,000', timestamp: '3 minutes ago', type: 'company' },
  { name: 'BNP Paribas', location: 'Paris, France', countryCode: 'FR', action: 'deposited', amount: '$2,800,000', timestamp: '8 minutes ago', type: 'company' },
  { name: 'UniCredit Group', location: 'Milan, Italy', countryCode: 'IT', action: 'invested', amount: '$1,800,000', timestamp: '11 minutes ago', type: 'company' },
  { name: 'HSBC Holdings', location: 'London, UK', countryCode: 'GB', action: 'withdrew', amount: '$300,000', timestamp: '14 minutes ago', type: 'company' },
  { name: 'Sberbank', location: 'Moscow, Russia', countryCode: 'RU', action: 'invested', amount: '$2,200,000', timestamp: '17 minutes ago', type: 'company' },
  
  // Companies - North America
  { name: 'Goldman Sachs', location: 'New York, USA', countryCode: 'US', action: 'invested', amount: '$8,000,000', timestamp: '1 minute ago', type: 'company' },
  { name: 'Morgan Stanley', location: 'New York, USA', countryCode: 'US', action: 'deposited', amount: '$4,500,000', timestamp: '6 minutes ago', type: 'company' },
  { name: 'RBC Capital', location: 'Toronto, Canada', countryCode: 'CA', action: 'invested', amount: '$3,500,000', timestamp: '13 minutes ago', type: 'company' },
  { name: 'Grupo Financiero Banorte', location: 'Mexico City, Mexico', countryCode: 'MX', action: 'withdrew', amount: '$400,000', timestamp: '19 minutes ago', type: 'company' },
  
  // Companies - Middle East & Africa
  { name: 'Emirates NBD', location: 'Dubai, UAE', countryCode: 'AE', action: 'invested', amount: '$6,000,000', timestamp: '10 minutes ago', type: 'company' },
  { name: 'Qatar Investment Authority', location: 'Doha, Qatar', countryCode: 'QA', action: 'deposited', amount: '$10,000,000', timestamp: '20 minutes ago', type: 'company' },
  { name: 'Standard Bank Group', location: 'Johannesburg, South Africa', countryCode: 'ZA', action: 'invested', amount: '$2,000,000', timestamp: '24 minutes ago', type: 'company' },
  
  // Individuals - Asia
  { name: 'Wei Zhang', location: 'Shanghai, China', countryCode: 'CN', action: 'invested', amount: '$52,000', timestamp: '2 minutes ago', type: 'individual', gender: 'male' },
  { name: 'Mei Lin', location: 'Beijing, China', countryCode: 'CN', action: 'withdrew', amount: '$15,000', timestamp: '5 minutes ago', type: 'individual', gender: 'female' },
  { name: 'Hiroshi Tanaka', location: 'Tokyo, Japan', countryCode: 'JP', action: 'deposited', amount: '$84,000', timestamp: '7 minutes ago', type: 'individual', gender: 'male' },
  { name: 'Yuna Kim', location: 'Seoul, South Korea', countryCode: 'KR', action: 'invested', amount: '$43,000', timestamp: '12 minutes ago', type: 'individual', gender: 'female' },
  { name: 'Raj Patel', location: 'Mumbai, India', countryCode: 'IN', action: 'withdrew', amount: '$12,000', timestamp: '15 minutes ago', type: 'individual', gender: 'male' },
  { name: 'Priya Singh', location: 'New Delhi, India', countryCode: 'IN', action: 'deposited', amount: '$61,000', timestamp: '18 minutes ago', type: 'individual', gender: 'female' },
  
  // Individuals - Europe
  { name: 'Hans Schmidt', location: 'Berlin, Germany', countryCode: 'DE', action: 'invested', amount: '$75,000', timestamp: '3 minutes ago', type: 'individual', gender: 'male' },
  { name: 'Sophie Dubois', location: 'Paris, France', countryCode: 'FR', action: 'withdrew', amount: '$18,000', timestamp: '8 minutes ago', type: 'individual', gender: 'female' },
  { name: 'Marco Rossi', location: 'Milan, Italy', countryCode: 'IT', action: 'deposited', amount: '$58,000', timestamp: '11 minutes ago', type: 'individual', gender: 'male' },
  { name: 'Emma Johnson', location: 'London, UK', countryCode: 'GB', action: 'invested', amount: '$63,000', timestamp: '14 minutes ago', type: 'individual', gender: 'female' },
  
  // Individuals - North America
  { name: 'Michael Brown', location: 'New York, USA', countryCode: 'US', action: 'invested', amount: '$105,000', timestamp: '1 minute ago', type: 'individual', gender: 'male' },
  { name: 'Jennifer Smith', location: 'Los Angeles, USA', countryCode: 'US', action: 'withdrew', amount: '$25,000', timestamp: '6 minutes ago', type: 'individual', gender: 'female' },
  { name: 'David Wilson', location: 'Chicago, USA', countryCode: 'US', action: 'deposited', amount: '$67,000', timestamp: '9 minutes ago', type: 'individual', gender: 'male' },
  
  // Individuals - Middle East & Africa
  { name: 'Mohammed Al-Farsi', location: 'Dubai, UAE', countryCode: 'AE', action: 'invested', amount: '$123,000', timestamp: '10 minutes ago', type: 'individual', gender: 'male' },
  { name: 'Fatima Nasser', location: 'Cairo, Egypt', countryCode: 'EG', action: 'withdrew', amount: '$14,000', timestamp: '20 minutes ago', type: 'individual', gender: 'female' },
  { name: 'Amina Diallo', location: 'Lagos, Nigeria', countryCode: 'NG', action: 'deposited', amount: '$45,000', timestamp: '27 minutes ago', type: 'individual', gender: 'female' },
]

export function InvestmentActivityNotification() {
  const [mounted, setMounted] = useState(false)
  const [leftActivity, setLeftActivity] = useState<InvestmentActivity | null>(null)
  const [rightActivity, setRightActivity] = useState<InvestmentActivity | null>(null)
  const [showLeftNotification, setShowLeftNotification] = useState(false)
  const [showRightNotification, setShowRightNotification] = useState(false)

  // Generate a random activity with randomized amounts
  const generateRandomActivity = () => {
    const randomIndex = Math.floor(Math.random() * possibleActivities.length)
    const activity = possibleActivities[randomIndex]
    
    // Update timestamp to be more recent and random
    const minutes = Math.floor(Math.random() * 30) + 1
    const timeText = minutes === 1 ? 'just now' : `${minutes} minutes ago`
    
    // Randomize amount based on type and action
    let baseAmount: number
    if (activity.type === 'company') {
      if (activity.action === 'invested') {
        baseAmount = Math.floor(Math.random() * 9000000) + 1000000 // 1M to 10M
      } else if (activity.action === 'deposited') {
        baseAmount = Math.floor(Math.random() * 4000000) + 1000000 // 1M to 5M
      } else {
        baseAmount = Math.floor(Math.random() * 400000) + 100000 // 100K to 500K for withdrawals
      }
    } else {
      if (activity.action === 'invested') {
        baseAmount = Math.floor(Math.random() * 150000) + 50000 // 50K to 200K
      } else if (activity.action === 'deposited') {
        baseAmount = Math.floor(Math.random() * 75000) + 25000 // 25K to 100K
      } else {
        baseAmount = Math.floor(Math.random() * 15000) + 10000 // 10K to 25K for withdrawals
      }
    }
    
    const formattedAmount = `$${baseAmount.toLocaleString()}`
    
    return {
      ...activity,
      timestamp: timeText,
      amount: formattedAmount
    }
  }

  useEffect(() => {
    setMounted(true)
    
    // Show left notifications at random intervals
    const showRandomLeftNotification = () => {
      if (!showLeftNotification) {
        setLeftActivity(generateRandomActivity())
        setShowLeftNotification(true)
        
        setTimeout(() => {
          setShowLeftNotification(false)
        }, 5000)
      }
    }
    
    // Show right notifications at random intervals
    const showRandomRightNotification = () => {
      if (!showRightNotification) {
        setRightActivity(generateRandomActivity())
        setShowRightNotification(true)
        
        setTimeout(() => {
          setShowRightNotification(false)
        }, 5000)
      }
    }
    
    // Initial delays
    const initialLeftDelay = Math.floor(Math.random() * 5000) + 3000
    const initialRightDelay = Math.floor(Math.random() * 5000) + 8000
    
    const initialLeftTimer = setTimeout(showRandomLeftNotification, initialLeftDelay)
    const initialRightTimer = setTimeout(showRandomRightNotification, initialRightDelay)
    
    // Recurring notifications
    const leftInterval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 15000) + 10000
      setTimeout(showRandomLeftNotification, randomDelay)
    }, 30000)
    
    const rightInterval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 15000) + 10000
      setTimeout(showRandomRightNotification, randomDelay)
    }, 35000)
    
    return () => {
      clearTimeout(initialLeftTimer)
      clearTimeout(initialRightTimer)
      clearInterval(leftInterval)
      clearInterval(rightInterval)
    }
  }, [showLeftNotification, showRightNotification])

  if (!mounted) return null

  return (
    <>
      {/* Left side notification */}
      <div className="fixed bottom-24 left-6 z-40 pointer-events-none">
        <AnimatePresence>
          {showLeftNotification && leftActivity && (
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 20, x: -20 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto max-w-xs rounded-lg bg-white p-4 shadow-lg border border-gray-200"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  {leftActivity.type === 'individual' ? (
                    leftActivity.gender === 'male' ? (
                      <Icons.male className="h-5 w-5 text-primary" />
                    ) : (
                      <Icons.female className="h-5 w-5 text-primary" />
                    )
                  ) : (
                    <Icons.building className="h-5 w-5 text-primary" />
                  )}
                </div>
                
                <div className="flex-1 pt-1">
                  <p className="text-sm font-medium text-gray-900">
                    {leftActivity.name}{' '}
                    <span className={`font-semibold ${
                      leftActivity.action === 'invested' ? 'text-green-600' : 
                      leftActivity.action === 'deposited' ? 'text-blue-600' : 
                      'text-orange-600'
                    }`}>
                      {leftActivity.action} {leftActivity.amount}
                    </span>
                  </p>
                  
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="text-xs text-gray-500 flex items-center">
                      <span className="mr-1 text-lg">{getFlagEmoji(leftActivity.countryCode)}</span>
                      {leftActivity.location}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{leftActivity.timestamp}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right side notification */}
      <div className="fixed bottom-24 right-6 z-40 pointer-events-none">
        <AnimatePresence>
          {showRightNotification && rightActivity && (
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 20, x: 20 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto max-w-xs rounded-lg bg-white p-4 shadow-lg border border-gray-200"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  {rightActivity.type === 'individual' ? (
                    rightActivity.gender === 'male' ? (
                      <Icons.male className="h-5 w-5 text-primary" />
                    ) : (
                      <Icons.female className="h-5 w-5 text-primary" />
                    )
                  ) : (
                    <Icons.building className="h-5 w-5 text-primary" />
                  )}
                </div>
                
                <div className="flex-1 pt-1">
                  <p className="text-sm font-medium text-gray-900">
                    {rightActivity.name}{' '}
                    <span className={`font-semibold ${
                      rightActivity.action === 'invested' ? 'text-green-600' : 
                      rightActivity.action === 'deposited' ? 'text-blue-600' : 
                      'text-orange-600'
                    }`}>
                      {rightActivity.action} {rightActivity.amount}
                    </span>
                  </p>
                  
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="text-xs text-gray-500 flex items-center">
                      <span className="mr-1 text-lg">{getFlagEmoji(rightActivity.countryCode)}</span>
                      {rightActivity.location}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{rightActivity.timestamp}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

// Helper function to convert country code to flag emoji
function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
} 