# Production Deployment Guide

## Hussaini & Co. Chartered Accountants Website

### Prerequisites

- Node.js 18+ installed
- PostgreSQL 13+ database
- Vercel account (for hosting)
- Environment variables configured

### Pre-Deployment Checklist

- [ ] All environment variables set in production
- [ ] Database migrations applied
- [ ] Admin user credentials created
- [ ] SSL certificate configured
- [ ] CDN setup (optional, for images)
- [ ] Email service configured
- [ ] Analytics setup completed
- [ ] Backup strategy in place

### Step 1: Prepare Environment Variables

```bash
# Copy example file
cp .env.example .env.production

# Update with production values
DATABASE_URL=postgresql://prod_user:password@prod.db.host:5432/hussaini_prod
NEXTAUTH_SECRET=$(openssl rand -base64 32)
NEXTAUTH_URL=https://hussaini-co.com

# Email configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@hussaini-co.com
SMTP_PASS=app-specific-password

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-account
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxx

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Environment
NODE_ENV=production
```

### Step 2: Setup Database

```bash
# Apply migrations
npx prisma db push

# Seed data
npx prisma db seed
```

### Step 3: Build & Test

```bash
# Build production bundle
npm run build

# Run production server locally (test)
npm start

# Visit http://localhost:3000 and test key flows
```

### Step 4: Deploy to Vercel

#### Option A: Connect GitHub Repository

1. Go to [vercel.com](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add environment variables
6. Deploy

#### Option B: Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Step 5: Post-Deployment Verification

```bash
# Check site loads
curl https://hussaini-co.com

# Check admin login works
# Visit https://hussaini-co.com/admin/login
# Login with admin credentials

# Check Google Lighthouse
# Run Lighthouse audit in Chrome DevTools
# Target: 95+ scores across all metrics

# Check SSL certificate
# Should show secure (green lock)

# Check sitemap
# Visit https://hussaini-co.com/sitemap.xml

# Check robots.txt
# Visit https://hussaini-co.com/robots.txt
```

### Step 6: Configure Domain

```bash
# Add custom domain in Vercel
# Project Settings → Domains
# Add: hussaini-co.com
# Add: www.hussaini-co.com

# Update DNS at domain registrar:
# Add CNAME record pointing to Vercel
```

### Step 7: Setup Email Notifications

1. Admin receives contact enquiries
2. Users receive confirmation emails
3. Test email sending in admin dashboard

### Step 8: Configure CDN (Optional)

```bash
# Vercel automatically configures CDN
# No additional setup needed
# Images served from Cloudinary
```

### Step 9: Setup Monitoring & Analytics

1. Google Analytics linked (GA_ID)
2. Error monitoring (Vercel)
3. Performance monitoring (Vercel)
4. Daily backups scheduled

### Step 10: Security Hardening

```bash
# Verify HTTPS enforced
# Check security headers
# Enable CSP (Content Security Policy)
# Review auth implementation
# Test XSS protection
```

## Performance Optimization

### Image Optimization

- Cloudinary integration for CDN delivery
- Automatic WebP conversion
- Responsive image sizing

### Caching Strategy

```bash
# Static pages: 1 year
# Dynamic pages: 3600 seconds
# API routes: 300 seconds
# Images: 31536000 seconds
```

### Database Optimization

- Indexes on frequently queried columns
- Connection pooling enabled
- Read replicas for scaling (future)

### Code Splitting

- Automatic route-based code splitting
- Component lazy loading
- Dynamic imports for heavy libraries

## Backup Strategy

```bash
# Daily database backups
# Retention: 30 days
# Off-site storage

# Automated backup script:
# Run via cron job daily at 2 AM IST
```

## Maintenance Plan

### Weekly
- Monitor error logs
- Review performance metrics
- Check backup status

### Monthly
- Security updates
- Dependency updates
- Database optimization

### Quarterly
- Full security audit
- Performance review
- Capacity planning

## Troubleshooting

### Deployment Issues

1. **Build fails**: Check Node.js version, dependencies, environment variables
2. **Database errors**: Verify connection string, migrations applied
3. **Timeout errors**: Increase timeout, optimize queries

### Runtime Issues

1. **Page not loading**: Check network logs, error console
2. **Authentication fails**: Verify NEXTAUTH_SECRET, session configuration
3. **Images not loading**: Check Cloudinary credentials, CDN status

### Performance Issues

1. **Slow page load**: Analyze with Lighthouse, optimize assets
2. **High server load**: Check database queries, implement caching
3. **Memory issues**: Review memory leaks, optimize components

## Rollback Procedure

```bash
# If deployment issues occur:

# 1. Revert to previous build
vercel --prod --confirm

# 2. Check status
curl https://hussaini-co.com

# 3. Investigate issue
# Check logs, database, environment variables

# 4. Fix and redeploy
```

## Support

For deployment issues:
- Email: tech@hussaini-co.com
- Phone: +91-7104-250250
- Documentation: https://docs.hussaini-co.com

## Performance Targets (Post-Deployment)

- ✅ Google Lighthouse: 95+ all metrics
- ✅ First Contentful Paint: < 2.5s
- ✅ Largest Contentful Paint: < 4s
- ✅ Cumulative Layout Shift: < 0.1
- ✅ Time to Interactive: < 5s
- ✅ 99.9% uptime
- ✅ < 100ms API response time

## Version History

| Version | Date | Changes |
|---------|------|----------|
| 1.0.0 | 2024-07-26 | Production release |

---

**Last Updated**: 2024-07-26
**Maintained By**: Hussaini & Co. Technical Team
