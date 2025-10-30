# SFWeb - Professional Web Design Service

## Overview
SFWeb is a professional, production-ready 5-page Next.js website for a Limerick-based Irish web design service. The site showcases two main service tiers: Template Setup (3-page professional websites) and Custom Websites (bespoke designs). All pricing information has been removed from public-facing content.

## Project Status
✅ Fully functional MVP completed on October 15, 2025

## Key Features
- **5-page structure**: Home, Services, Pricing, About, Contact
- **Dark theme**: Professional dark background with blue/green accent colors
- **Custom scrollbar**: Blue/green gradient with rounded corners
- **Fully responsive**: Optimized for desktop, tablet, and mobile with enhanced mobile navigation
- **Professional imagery**: Stock images on homepage, services, and about pages to break up text
- **SEO-optimized**: Meta tags, Open Graph URLs, JSON-LD structured data, sitemap, robots.txt
- **Modern animations**: Framer Motion for smooth transitions, mobile menu animations, hover effects
- **Contact form**: Validated form with Resend email integration (sends to sean@sfweb.ie)
- **Irish business focus**: Emphasizes Limerick location and local service

## Tech Stack
- **Framework**: Next.js 15.5.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom theme
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Email**: Resend (via Replit connector integration)
- **SEO**: next-seo, custom sitemap and robots.txt

## Architecture
```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # Contact form API endpoint with Resend
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── services/page.tsx   # Services page
│   ├── pricing/page.tsx    # Pricing page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page with email form
│   ├── globals.css         # Global styles with Tailwind v4
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── Header.tsx          # Sticky navigation with animated mobile menu
│   ├── Footer.tsx          # Footer with links and branding
│   └── StructuredData.tsx  # JSON-LD structured data for SEO
├── public/
│   ├── images/             # Stock images for visual content
│   └── robots.txt          # SEO robots file
└── package.json
```

## Recent Changes

### October 30, 2025
- ✅ Removed all pricing information site-wide (€150-€200, €300+, maintenance plans)
- ✅ Changed all "5-page professional website" references to "3-page professional website"
- ✅ Removed "IT graduate" and occupation references from About page and metadata
- ✅ Updated Pricing page title to "Our Service Packages"
- ✅ Updated all metadata descriptions across layout files to remove pricing
- ✅ Updated JSON-LD structured data to remove price specifications
- ✅ Changed "Affordable Pricing" to "Great Value" in About page
- ✅ Updated Contact and About page CTAs to remove pricing references
- ✅ Added professional stock images to homepage, services, and about pages
- ✅ Homepage: Two-column hero layout with workspace image
- ✅ Services: Image breaking up template setup section
- ✅ About: Professional workspace image for personality

### October 15, 2025
- ✅ Initial project setup with Next.js, TypeScript, and Tailwind CSS v4
- ✅ Configured Tailwind v4 with custom theme using @theme directive
- ✅ Created all 5 pages with complete content
- ✅ Implemented sticky header navigation with animated mobile menu
- ✅ Enhanced mobile menu with backdrop blur, staggered animations, and active states
- ✅ Added footer with Limerick branding
- ✅ Integrated Framer Motion animations throughout
- ✅ Built contact form with validation
- ✅ Added comprehensive SEO (metadata, JSON-LD structured data, sitemap, robots.txt)
- ✅ Fixed SEO: removed empty telephone field, added page-specific OG URLs, proper price formatting
- ✅ Configured custom blue/green gradient scrollbar
- ✅ Set up workflow on port 5000
- ✅ Integrated Resend email service via Replit connector
- ✅ Created API route for contact form submissions
- ✅ Updated contact form with loading states and error handling
- ✅ Email notifications now sent to sean@sfweb.ie

## Design Specifications
- **Color Palette**:
  - Background: #0A0E1A (dark-bg)
  - Card: #111827 (dark-card)
  - Border: #1F2937 (dark-border)
  - Primary Blue: #3B82F6
  - Primary Green: #10B981
  - Gradient: Blue → Green (135deg)

- **Typography**: Inter font family
- **Responsive Breakpoints**: sm (640px), md (768px), lg (1024px)

## User Preferences
- Clean, modern, professional design
- Strong SEO compliance
- Local Irish business emphasis
- Clear CTAs for lead generation
- No mock/placeholder data

## Running the Project
```bash
npm run dev    # Start development server on port 5000
npm run build  # Build for production
npm start      # Run production build
```

## Deployment Notes

### Environment Variables Required
For both Replit and Vercel deployments, set these environment variables:
- `RESEND_API_KEY` - Your Resend API key (get from resend.com)
- `RESEND_FROM_EMAIL` - Verified sender email address (e.g., hello@sfweb.ie)

### Vercel Deployment
1. Add the environment variables in Vercel project settings
2. Redeploy after adding variables
3. Contact form will send emails to sean@sfweb.ie

## Future Enhancements (Phase 2)
- Portfolio/Past Clients page
- Testimonials section
- Google Analytics integration
- Blog section for SEO content
- Maintenance plan subscription feature
- Client portal/dashboard

## SEO Features
- ✅ Semantic HTML structure
- ✅ Meta titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ XML sitemap
- ✅ robots.txt
- ✅ Optimized page titles
- ✅ Keyword optimization
- ✅ Fast load performance
- ✅ Mobile-friendly design

## Notes
- All pricing information removed from public-facing pages per user request
- Service offerings described as "3-page professional websites" (Template Setup) and "bespoke designs" (Custom Websites)
- Contact form fully functional with Resend integration sending to sean@sfweb.ie
- All content is production-ready
- Limerick, Ireland location emphasized throughout
- No occupation or credential references displayed publicly
