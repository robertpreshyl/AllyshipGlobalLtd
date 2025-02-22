# Allyship Global Ltd

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red)]()

A modern, responsive corporate website for Allyship Global Ltd, showcasing global investment opportunities and strategic partnerships across multiple sectors.

## 🌟 Features

- **Modern Design**: Responsive, mobile-first design using Tailwind CSS
- **Dynamic Content**: Interactive blog posts and investment insights
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Global Presence**: Multi-region support with Cloudflare Pages deployment
- **Sector Coverage**: Comprehensive information on:
  - Real Estate Investments
  - Technology Ventures
  - Energy & Sustainability
  - Cross-border Trade

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/robertpreshyl/AllyshipGlobalLtd.git
cd AllyshipGlobalLtd
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to view the website.

## 📦 Build & Deployment

### Local Build
```bash
npm run build
npm run start
```

### Cloudflare Pages Deployment
```bash
npm run pages:build
npm run pages:deploy
```

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

## 📚 Documentation

Detailed documentation is available in the [/docs](/docs) directory:

- [Architecture Overview](/docs/ARCHITECTURE.md)
- [Development Guide](/docs/DEVELOPMENT.md)
- [Deployment Guide](/docs/DEPLOYMENT.md)
- [Content Management](/docs/CONTENT.md)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.7
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.1
- **Animation**: Framer Motion
- **Deployment**: Cloudflare Pages
- **Icons**: Lucide React
- **Development**:
  - ESLint
  - Prettier
  - TypeScript ESLint

## 📝 Project Structure

```
AllyshipGlobalLtd/
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # React components
│   ├── lib/          # Utility functions
│   └── styles/       # Global styles
├── public/           # Static assets
├── docs/            # Documentation
└── .cloudflare/     # Cloudflare configuration
```

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Submit a pull request

## 📄 License

Private - All rights reserved

## 🌐 Links

- [Production Website](https://allyshipglobal.com)
- [Development Documentation](/docs)
- [Content Guidelines](/docs/CONTENT.md)
