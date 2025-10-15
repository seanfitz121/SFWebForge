# SFWeb - Professional Web Design Service

## Overview
SFWeb is a professional, production-ready 5-page Next.js website for a Limerick-based Irish web design service. The site offers affordable websites to local businesses with two main service tiers: Template Setup (€150-€200) and Custom Websites (€300+).

## Project Status
✅ Fully functional MVP completed on October 15, 2025

## Key Features
- **5-page structure**: Home, Services, Pricing, About, Contact
- **Dark theme**: Professional dark background with blue/green accent colors
- **Custom scrollbar**: Blue/green gradient with rounded corners
- **Fully responsive**: Optimized for desktop, tablet, and mobile with enhanced mobile navigation
- **SEO-optimized**: Meta tags, Open Graph URLs, JSON-LD structured data, sitemap, robots.txt
- **Modern animations**: Framer Motion for smooth transitions, mobile menu animations, hover effects
- **Contact form**: Validated form with React Hook Form and confirmation messaging
- **Irish business focus**: Emphasizes Limerick location and local service

## Tech Stack
- **Framework**: Next.js 15.5.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom theme
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **SEO**: next-seo, custom sitemap and robots.txt

## Architecture
```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── services/page.tsx   # Services page
│   ├── pricing/page.tsx    # Pricing page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   ├── globals.css         # Global styles with Tailwind v4
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── Header.tsx          # Sticky navigation with animated mobile menu
│   ├── Footer.tsx          # Footer with links and branding
│   └── StructuredData.tsx  # JSON-LD structured data for SEO
├── public/
│   └── robots.txt          # SEO robots file
└── package.json
```

## Recent Changes (October 15, 2025)
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

## Future Enhancements (Phase 2)
- Email integration for contact form (SendGrid or Resend)
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
- Contact form currently shows client-side confirmation
- Ready for email integration in next phase
- All content is production-ready
- Limerick, Ireland location emphasized throughout
