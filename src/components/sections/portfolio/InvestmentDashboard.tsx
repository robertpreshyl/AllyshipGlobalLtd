'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell
} from 'recharts'
import { Icons } from '@/components/common/Icons'
import { useTranslation } from '@/lib/i18n/useTranslation'

// Sample data for the charts
const sectorPerformanceData = [
  { name: 'Real Estate', value: 35, color: '#3B82F6' },
  { name: 'Energy', value: 30, color: '#10B981' },
  { name: 'Technology', value: 20, color: '#8B5CF6' },
  { name: 'Trade', value: 15, color: '#F59E0B' },
]

const historicalPerformanceData = [
  { year: '2019', realEstate: 25, energy: 18, technology: 12, trade: 10 },
  { year: '2020', realEstate: 28, energy: 20, technology: 15, trade: 12 },
  { year: '2021', realEstate: 30, energy: 24, technology: 18, trade: 13 },
  { year: '2022', realEstate: 32, energy: 27, technology: 22, trade: 14 },
  { year: '2023', realEstate: 35, energy: 30, technology: 20, trade: 15 },
]

const projectionsData = [
  { year: '2023', value: 100 },
  { year: '2024', value: 120 },
  { year: '2025', value: 150 },
  { year: '2026', value: 190 },
  { year: '2027', value: 240 },
]

const regionData = [
  { name: 'Middle East', value: 40, color: '#3B82F6' },
  { name: 'Asia', value: 25, color: '#10B981' },
  { name: 'Europe', value: 20, color: '#8B5CF6' },
  { name: 'North America', value: 10, color: '#F59E0B' },
  { name: 'Africa', value: 5, color: '#EC4899' },
]

interface DashboardMetric {
  label: string
  value: string
  icon: keyof typeof Icons
  change?: {
    value: string
    positive: boolean
  }
}

const initialMetrics: DashboardMetric[] = [
  {
    label: 'Total AUM',
    value: '$2.8B',
    icon: 'building',
    change: {
      value: '12%',
      positive: true
    }
  },
  {
    label: 'Annual ROI',
    value: '18.5%',
    icon: 'chartBar',
    change: {
      value: '3.2%',
      positive: true
    }
  },
  {
    label: 'Active Projects',
    value: '85',
    icon: 'target',
    change: {
      value: '5',
      positive: true
    }
  },
  {
    label: 'Avg. Project Value',
    value: '$32.9M',
    icon: 'dollarSign',
    change: {
      value: '8.7%',
      positive: true
    }
  }
]

export function InvestmentDashboard() {
  const { t } = useTranslation()
  const [isMounted, setIsMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'projections' | 'regional'>('overview')
  const [metrics, setMetrics] = useState<DashboardMetric[]>(initialMetrics)

  // Function to generate random changes with a bias toward positive values
  const generateRandomChange = (isPercentage: boolean = true) => {
    // 70% chance of positive change, 30% chance of negative
    const isPositive = Math.random() < 0.7
    
    let value: number
    
    if (isPercentage) {
      // Generate a random percentage between 0.1% and 3.5% for percentage metrics
      value = parseFloat((Math.random() * 3.4 + 0.1).toFixed(1))
    } else {
      // Generate a random integer between 1 and 8 for non-percentage metrics
      value = Math.floor(Math.random() * 8) + 1
    }
    
    return {
      value: isPercentage ? `${value}%` : `${value}`,
      positive: isPositive
    }
  }

  // Update metrics with random changes periodically
  useEffect(() => {
    if (!isMounted) return
    
    const interval = setInterval(() => {
      setMetrics(currentMetrics => 
        currentMetrics.map(metric => ({
          ...metric,
          change: generateRandomChange(metric.label !== 'Active Projects')
        }))
      )
    }, 5000) // Update every 5 seconds
    
    return () => clearInterval(interval)
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <h3 className="font-heading text-2xl font-bold">Investment Performance Dashboard</h3>
        <div className="flex space-x-2 rounded-lg bg-muted p-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              activeTab === 'overview' ? 'bg-white shadow' : 'hover:bg-white/50'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('performance')}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              activeTab === 'performance' ? 'bg-white shadow' : 'hover:bg-white/50'
            }`}
          >
            Historical
          </button>
          <button
            onClick={() => setActiveTab('projections')}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              activeTab === 'projections' ? 'bg-white shadow' : 'hover:bg-white/50'
            }`}
          >
            Projections
          </button>
          <button
            onClick={() => setActiveTab('regional')}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              activeTab === 'regional' ? 'bg-white shadow' : 'hover:bg-white/50'
            }`}
          >
            Regional
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg border bg-card p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <h4 className="mt-1 text-2xl font-bold">{metric.value}</h4>
                {metric.change && (
                  <div className="mt-1 flex items-center">
                    <span
                      className={`flex items-center text-xs font-medium ${
                        metric.change.positive ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {metric.change.positive ? (
                        <Icons.chevronUp className="mr-1 h-3 w-3" />
                      ) : (
                        <Icons.chevronDown className="mr-1 h-3 w-3" />
                      )}
                      {metric.change.value}
                    </span>
                  </div>
                )}
              </div>
              <div className="rounded-full bg-primary/10 p-2">
                {React.createElement(Icons[metric.icon], {
                  className: "h-5 w-5 text-primary",
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart Sections */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <h4 className="font-heading text-xl font-semibold">Portfolio Allocation by Sector</h4>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorPerformanceData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {sectorPerformanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                {sectorPerformanceData.map((sector) => (
                  <div key={sector.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className="mr-2 h-3 w-3 rounded-full"
                          style={{ backgroundColor: sector.color }}
                        />
                        <span className="font-medium">{sector.name}</span>
                      </div>
                      <span className="font-bold">{sector.value}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${sector.value}%`,
                          backgroundColor: sector.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="space-y-6">
            <h4 className="font-heading text-xl font-semibold">Historical Performance by Sector</h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={historicalPerformanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="realEstate" name="Real Estate" fill="#3B82F6" />
                  <Bar dataKey="energy" name="Energy" fill="#10B981" />
                  <Bar dataKey="technology" name="Technology" fill="#8B5CF6" />
                  <Bar dataKey="trade" name="Trade" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h5 className="mb-2 font-medium">Key Insights</h5>
              <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                <li>Real Estate has shown consistent growth over the past 5 years</li>
                <li>Energy sector investments have accelerated since 2021</li>
                <li>Technology investments peaked in 2022 with a slight adjustment in 2023</li>
                <li>Trade investments have maintained steady growth</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'projections' && (
          <div className="space-y-6">
            <h4 className="font-heading text-xl font-semibold">5-Year Growth Projections</h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={projectionsData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, 'Projected Growth']} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h5 className="mb-2 font-medium">Projection Methodology</h5>
              <p className="text-sm text-muted-foreground">
                Our projections are based on historical performance, market trends, and strategic investment plans.
                We anticipate a compound annual growth rate (CAGR) of approximately 20% over the next 5 years,
                driven by expansion in emerging markets and increased allocation to high-growth sectors.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'regional' && (
          <div className="space-y-8">
            <h4 className="font-heading text-xl font-semibold">Investment Distribution by Region</h4>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={regionData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {regionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                {regionData.map((region) => (
                  <div key={region.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className="mr-2 h-3 w-3 rounded-full"
                          style={{ backgroundColor: region.color }}
                        />
                        <span className="font-medium">{region.name}</span>
                      </div>
                      <span className="font-bold">{region.value}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${region.value}%`,
                          backgroundColor: region.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h5 className="mb-2 font-medium">Regional Strategy</h5>
              <p className="text-sm text-muted-foreground">
                Our investment strategy maintains a strong focus on the Middle East while strategically 
                expanding our presence in high-growth Asian markets. We continue to maintain diversified 
                positions in established European and North American markets, with targeted opportunities 
                in emerging African economies.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Download Reports Section */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div>
            <h4 className="font-heading text-xl font-semibold">Investment Reports</h4>
            <p className="text-sm text-muted-foreground">
              Download detailed reports about our investment performance
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center space-x-2 rounded-md border bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted">
              <Icons.chartBar className="h-4 w-4" />
              <span>Quarterly Report</span>
            </button>
            <button className="flex items-center space-x-2 rounded-md border bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted">
              <Icons.chartBar className="h-4 w-4" />
              <span>Annual Report</span>
            </button>
            <button className="flex items-center space-x-2 rounded-md border bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted">
              <Icons.chartBar className="h-4 w-4" />
              <span>Sector Analysis</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 