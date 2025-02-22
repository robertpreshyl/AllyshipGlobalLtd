# Project Context: Allyship Global Limited Website (WebApp)

## Overview
**Allyship Global Limited** is a global investment firm that unites international partners ("allies") to collaborate on diverse investment opportunities. The company specializes in:
- **Cross-border partnerships** (import/export alliances)
- **Sector-agnostic investments** (oil & gas, real estate, technology, energy, cryptocurrencies)
- **Strategic buy-ins** (acquiring stakes in high-potential businesses)

The website will serve as a **professional digital hub** to showcase the company's portfolio, values, and global reach. It will emphasize **trust**, **transparency**, and **international collaboration**, targeting potential investors, partners, and clients worldwide.

---
## Technical Stack
| Component          | Tools                                  | Purpose                                  |
|--------------------|----------------------------------------|------------------------------------------|
| **Framework**      | Next.js (React)                        | Static site generation, SEO optimization|
| **Styling**        | Tailwind CSS + Framer Motion           | Responsive design, animations            |
| **Hosting**        | Vercel                                 | Global CDN, HTTPS, instant deployments   |
| **CMS**            | Decap (Git-based)                      | Blog/content updates without coding      |
| **Analytics**      | Vercel Analytics                       | Traffic/performance monitoring           |
| **Security**       | react-cookie-consent                   | GDPR compliance                          |


## Core Objectives
1. **Global Credibility**  
   Position Allyship Global as a leader in international investment through professional design and authoritative content.

2. **Portfolio Showcase**  
   Highlight diverse investments with rich visuals and case studies.

3. **Partner Acquisition**  
   Attract new allies through clear value propositions and success stories.

4. **Responsive Accessibility**  
   Ensure flawless functionality across all devices (mobile/desktop).

5. **Zero Backend Complexity**  
   Static website with no user logins or databases (brochure-style).

---

## Website Structure

### 1. **Home Page**  
   - **Hero Section**: Full-screen video/parallax image with tagline:  
     *"Uniting Global Allies for Strategic Investments"*  
   - **Quick Stats**: Global reach (countries served, $AUM, partners)
   - **Investment Sectors Grid**: Icons + short descriptions (oil, real estate, crypto, etc.)
   - **Trust Badges**: Certifications/media mentions

### 2. **About Us** *(Dedicated Page)*
   - **Our Story**: Timeline of company history
   - **Mission & Vision**:  
     *"To bridge investment opportunities across borders and sectors"*
   - **Leadership Team**: High-res photos with bios (Founders/Partners)
   - **Global Presence**: Interactive map showing offices/partners
   - **Values**: Trust, Innovation, Sustainability icons

### 3. **Investment Portfolio** *(Dedicated Page)*  
   - **Sector Categories**: Filterable grid with:
     - **Real Estate**: City skyline photos + project locations
     - **Energy**: Oil rigs/renewable energy visuals
     - **Technology**: Blockchain/crypto graphics
     - **Import/Export**: Global trade route maps
   - **Project Case Studies**: Before/after metrics, partner logos

### 4. **Allies & Partnerships** *(Dedicated Page)*
   - **Partner Network**: Logos of international allies
   - **Success Stories**:  
     *"How we partnered with [Company] to [Achievement]"*
   - **Become an Ally**: Simple CTA form for partnership inquiries

### 5. **Insights/Blog**  
   - **Market Analyses**: "2024 Oil & Gas Trends"
   - **Investment Guides**: "Intro to Cryptocurrency Investing"
   - **Newsroom**: Press releases/awards

### 6. **Contact**  
   - **Global Offices**: Addresses with local time zones
   - **Leadership Direct Contacts**:  
     *"Email CEO John Doe: j.doe@allyshipglobal.com"*
   - **Emergency Notice**:  
     *"Funds are protected under [Regulation Body]"*

---

## Technical Requirements
| Component          | Specification                          |
|--------------------|----------------------------------------|
| **Framework**      | Static site (HTML/CSS/JS)              |
| **Responsiveness** | Mobile-first, tested down to 320px     |
| **SEO**            | Multi-language meta tags, OG tags      |
| **Security**       | HTTPS, GDPR-compliant cookie banner    |
| **CMS**            | Optional: Decap (Git-based) for blogs  |

---

## Design Guidelines
### Visual Identity
- **Color Palette**:  
  - Primary: Navy Blue (#1A237E) = Trust  
  - Secondary: Gold (#FFD700) = Prestige  
  - Accent: Green (#4CAF50) = Growth
- **Typography**:  
  - Headings: **Space Grotesk** (modern tech vibe)  
  - Body: **Inter** (readability)
- **Imagery**:  
  - Hero: 4K video of global city skylines  
  - Icons: Custom line icons for each sector  
  - Graphics: Data visualizations for ROI metrics

---

## Content Strategy
| Section          | Content Focus                          | Visual Elements                 |
|------------------|----------------------------------------|---------------------------------|
| Home             | Immediate impact                       | Full-screen video, animated stats |
| About            | Humanize the brand                     | Team photos, handshake imagery  |
| Portfolio        | Prove success                          | Before/after sliders, maps      |
| Blog             | Establish thought leadership           | Infographics, charts            |

---

## Development Roadmap
1. **Phase 1 (2 Weeks)**:  
   - Finalize sitemap & wireframes  
   - Source professional photography  
   - Draft core content (About/Portfolio)

2. **Phase 2 (3 Weeks)**:  
   - Develop desktop/mobile layouts  
   - Implement smooth scroll animations  
   - Add GDPR-compliant cookie solution

3. **Phase 3 (1 Week)**:  
   - Cross-browser testing  
   - SEO optimization (Semrush audit)  
   - Launch with Cloudflare Pages/CDN

---

## Success Metrics
- **30%+ reduction** in partner inquiry response time
- **50%+ traffic** from international IP addresses
- **Sub-2s** load time on 4G networks (Lighthouse)

---

## Website Schema
### Data Models
```typescript
// User Types
type TeamMember = {
  id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
};

type Investment = {
  id: string;
  title: string;
  sector: 'real-estate' | 'energy' | 'technology' | 'trade';
  description: string;
  location: string;
  metrics: {
    investmentSize: string;
    roi: string;
    timeline: string;
  };
  images: string[];
  partners: string[];
};

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  author: TeamMember;
  publishDate: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage: string;
};

type Partner = {
  id: string;
  name: string;
  logo: string;
  description: string;
  location: string;
  partnershipType: 'investor' | 'strategic' | 'operational';
  successStories?: string[];
};

type Office = {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};
```

### API Routes
```typescript
// Page Routes
'/'                     // Home
'/about'               // About Us
'/portfolio'           // Investment Portfolio
'/portfolio/[sector]'  // Sector-specific investments
'/allies'              // Partners & Allies
'/insights'            // Blog & Market Analysis
'/insights/[slug]'     // Individual blog posts
'/contact'             // Contact Information

// API Routes
'/api/contact'         // Contact form submission
'/api/newsletter'      // Newsletter subscription
'/api/partnership'     // Partnership inquiries
```

---

## Folder Structure
```
allyship-global/
├── .github/                    # GitHub Actions workflows
├── public/                     # Static assets
│   ├── images/                # Image assets
│   ├── videos/                # Video assets
│   └── fonts/                 # Custom fonts
├── src/
│   ├── app/                   # Next.js 13+ app directory
│   │   ├── (auth)/           # Authentication routes
│   │   ├── about/            # About page
│   │   ├── portfolio/        # Portfolio pages
│   │   ├── allies/           # Partners pages
│   │   ├── insights/         # Blog pages
│   │   ├── contact/          # Contact page
│   │   └── api/              # API routes
│   ├── components/           # React components
│   │   ├── common/           # Shared components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   └── Input/
│   │   ├── layout/           # Layout components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── Navigation/
│   │   └── sections/         # Page sections
│   │       ├── home/
│   │       ├── portfolio/
│   │       └── about/
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   │   ├── api/             # API utilities
│   │   ├── constants/       # Constants
│   │   └── helpers/         # Helper functions
│   ├── styles/              # Global styles
│   │   ├── globals.css
│   │   └── animations.css
│   └── types/               # TypeScript types
├── content/                 # Markdown content
│   ├── blog/
│   ├── team/
│   └── portfolio/
├── docs/                    # Documentation
├── tests/                   # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example            # Environment variables example
├── .eslintrc.js           # ESLint config
├── .prettierrc            # Prettier config
├── next.config.js         # Next.js config
├── tailwind.config.js     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies and scripts
```

### Key Features of the Structure
1. **Modular Components**: Organized by feature and reusability
2. **Type Safety**: Full TypeScript implementation
3. **Content Management**: Markdown-based content for easy updates
4. **Testing Strategy**: Comprehensive test coverage setup
5. **Documentation**: Detailed docs for development and maintenance
6. **Asset Organization**: Clear separation of static assets
7. **API Structure**: Clean API routes organization
8. **Security**: Environment variables and authentication handling

---
