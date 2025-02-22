# Deployment Guide

## Overview

This guide covers the deployment process for the Allyship Global Ltd website using Cloudflare Pages. Our deployment strategy ensures high availability, optimal performance, and secure content delivery through Cloudflare's global CDN.

## Prerequisites

- Cloudflare account with Pages access
- GitHub repository access
- Node.js 20.x and npm 10.x
- Proper environment variables configured

## Environment Setup

### Required Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://allyshipglobal.com
NEXT_PUBLIC_BASE_PATH=
NODE_ENV=production
```

### Cloudflare Configuration

1. **Domain Setup**
   - Configure custom domain in Cloudflare
   - Set up DNS records
   - Enable HTTPS

2. **Build Configuration**
   ```toml
   # wrangler.toml
   name = "allyship-global"
   compatibility_date = "2024-01-01"
   
   [build]
   command = "npm run pages:build"
   ```

## Deployment Process

### 1. Local Build Verification

```bash
# Build locally first
npm run build

# Test the production build
npm run start
```

### 2. Staging Deployment

```bash
# Deploy to preview environment
npm run pages:preview

# Test the preview deployment
wrangler pages dev .vercel/output/static
```

### 3. Production Deployment

```bash
# Deploy to production
npm run pages:deploy
```

## Post-Deployment Verification

### 1. Automated Checks
- SSL certificate validation
- DNS propagation check
- Core Web Vitals assessment

### 2. Manual Verification
- Cross-browser testing
- Mobile responsiveness
- Content integrity
- Form submissions
- Analytics integration

## Rollback Procedures

### Quick Rollback
```bash
# Revert to previous deployment
git checkout stable/v1
npm run pages:deploy
```

### Emergency Procedures
1. Access Cloudflare dashboard
2. Locate previous deployment
3. Click "Rollback to this deployment"

## Monitoring & Maintenance

### Performance Monitoring
- Set up Cloudflare Analytics
- Configure error tracking
- Monitor Core Web Vitals

### Regular Maintenance
- SSL certificate renewal
- Dependencies updates
- Security patches
- Content updates

## Security Considerations

### Headers Configuration
```javascript
// Cloudflare Headers
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### Security Best Practices
- Enable Cloudflare security features
- Configure Content Security Policy
- Set up rate limiting
- Enable DDoS protection

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs
   - Verify environment variables
   - Check dependencies

2. **Performance Issues**
   - Review Cloudflare Analytics
   - Check caching configuration
   - Analyze Core Web Vitals

3. **DNS Issues**
   - Verify DNS configuration
   - Check propagation status
   - Review SSL settings

## Continuous Integration

### GitHub Actions Workflow
```yaml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        run: npm run pages:deploy
```

## Backup Procedures

### Database Backups
- Regular automated backups
- Secure storage location
- Backup verification process

### Content Backups
- Asset management
- Content versioning
- Disaster recovery plan

## Documentation Updates

Keep this deployment documentation updated with:
- New deployment procedures
- Security updates
- Configuration changes
- Troubleshooting solutions

## Support Contacts

- **Technical Support**: support@allyshipglobal.com
- **Emergency Contact**: emergency@allyshipglobal.com
- **Cloudflare Support**: https://dash.cloudflare.com/support 