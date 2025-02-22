'use client'

import {
  type LucideIcon,
  Twitter,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Building,
  Handshake,
  BarChart,
  Ship,
  Cpu,
  Zap,
  Image,
  ChevronDown,
  Clock,
  Shield,
  User,
  Layout,
  Target,
  Newspaper,
  Lightbulb,
  GraduationCap,
  Map,
} from 'lucide-react'

interface IconsType {
  [key: string]: LucideIcon
}

export const Icons: IconsType = {
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
  building: Building,
  handshake: Handshake,
  chartBar: BarChart,
  ship: Ship,
  cpu: Cpu,
  zap: Zap,
  image: Image,
  chevronDown: ChevronDown,
  clock: Clock,
  shield: Shield,
  user: User,
  layout: Layout,
  target: Target,
  newspaper: Newspaper,
  lightbulb: Lightbulb,
  graduationCap: GraduationCap,
  map: Map,
} 