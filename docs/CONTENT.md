# Content Management Guide

## Overview

This guide outlines the content management process for the Allyship Global Ltd website, including blog posts, investment insights, and company information.

## Content Structure

### Blog Posts
```
src/app/insights/posts/
├── cross-border-investment-guide/
├── oil-gas-sector-outlook/
├── real-estate-opportunities-2024/
├── sustainable-energy-investments/
├── tech-investment-trends/
└── crypto-market-analysis/
```

### Page Content
```
src/app/
├── about/
├── portfolio/
├── allies/
└── contact/
```

## Creating New Content

### Blog Post Template

```typescript
import { Metadata } from 'next'
import { BlogPost } from '@/components/blog/BlogPost'

export const metadata: Metadata = {
  title: 'Post Title | Allyship Global Ltd',
  description: 'SEO description of the post',
}

export default function PostName() {
  return (
    <BlogPost
      category="Category"
      date="Month DD, YYYY"
      title="Post Title"
      author={{
        name: "Author Name",
        readTime: "X min read"
      }}
    >
      <p className="lead">
        Opening paragraph that summarizes the post.
      </p>

      <h2>Main Section</h2>
      <p>Content...</p>

      {/* Call to Action */}
      <div className="mt-12 rounded-lg bg-muted p-6">
        <h3 className="text-xl font-semibold">CTA Title</h3>
        <p className="mt-2">CTA description</p>
        <a href="/contact" className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">
          CTA Button
        </a>
      </div>
    </BlogPost>
  )
}
```

## Content Guidelines

### Writing Style
- Professional and authoritative tone
- Clear and concise language
- Industry-specific terminology when appropriate
- Active voice preferred

### SEO Best Practices
- Descriptive titles (60-70 characters)
- Meta descriptions (150-160 characters)
- Proper heading hierarchy
- Relevant keywords naturally integrated

### Image Guidelines
- Use Next.js Image component
- Provide descriptive alt text
- Optimize for web (WebP format)
- Maintain aspect ratios

## Content Categories

### Investment Insights
- Market Analysis
- Investment Strategies
- Industry Reports
- Economic Updates

### Company Information
- About Us
- Team Profiles
- Company News
- Press Releases

### Service Offerings
- Investment Services
- Partnership Opportunities
- Consulting Services
- Global Network

## Content Workflow

### 1. Content Planning
- Topic identification
- Keyword research
- Outline creation
- Resource gathering

### 2. Content Creation
- Writing first draft
- Adding media
- Internal review
- Technical review

### 3. Content Review
- Editorial review
- Fact-checking
- SEO optimization
- Compliance check

### 4. Publication
- Final approval
- Scheduling
- Social media planning
- Newsletter inclusion

## Technical Requirements

### Markdown Support
```markdown
# Heading 1
## Heading 2
### Heading 3

- List item
- Another item

1. Numbered item
2. Another numbered item

[Link text](URL)
```

### Code Examples
```typescript
// Use proper syntax highlighting
const example = {
  title: 'Example',
  description: 'Description'
}
```

### Image Implementation
```typescript
import Image from 'next/image'

<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority
/>
```

## Content Maintenance

### Regular Updates
- Weekly blog posts
- Monthly market updates
- Quarterly reports
- Annual reviews

### Content Audit
- Quarterly content review
- Outdated content removal
- Broken link checks
- SEO performance review

### Version Control
- Content versioning
- Change tracking
- Rollback capability
- Archive management

## Compliance & Legal

### Requirements
- Financial regulations
- Investment disclaimers
- Privacy policy
- Terms of service

### Review Process
- Legal review
- Compliance check
- Risk assessment
- Approval workflow

## Analytics & Reporting

### Metrics Tracking
- Page views
- Time on page
- Bounce rate
- Conversion rate

### Content Performance
- Popular topics
- User engagement
- Search rankings
- Social shares

## Emergency Procedures

### Content Issues
1. Identify the problem
2. Remove/unpublish if necessary
3. Investigate root cause
4. Implement fix
5. Review and republish

### Contact Information
- Content Manager: content@allyshipglobal.com
- Technical Support: support@allyshipglobal.com
- Legal Team: legal@allyshipglobal.com 