import {
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Building,
  Zap,
  Cpu,
  Ship,
  Handshake,
  BarChart,
  User,
  Image,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  twitter: Twitter,
  linkedin: Linkedin,
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
  building: Building,
  zap: Zap,
  cpu: Cpu,
  ship: Ship,
  handshake: Handshake,
  chartBar: BarChart,
  user: User,
  image: Image,
  chevronDown: ChevronDown,
} as const 