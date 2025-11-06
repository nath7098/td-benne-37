# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 static website for TD Location de Bennes 37, a skip bin rental service in Tours, France (Indre-et-Loire region). The site is built with Nuxt UI components, uses static site generation, and is optimized for SEO with sitemap and robots.txt generation.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production (static site)
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## Architecture

### Static Site Generation
- Uses `nitro.preset: 'static'` for static site generation
- SSR enabled during build for optimal SEO
- Target deployment: https://td-locationbenne37.fr

### Directory Structure
- `app/pages/` - Single-page application with `index.vue` as the main landing page
- `app/components/` - Reusable Vue components (HeroSection, ServicesSection, QuoteForm, etc.)
- `app/composables/` - Shared composable functions (e.g., `useContact.ts` for contact info)
- `app/plugins/` - Nuxt plugins (e.g., `motion.client.ts` for animations)
- `app/assets/css/` - Global styles
- `public/` - Static assets (images, logos, favicon)
- `server/` - Server-side code (minimal for static site)

### Key Technologies
- **Nuxt 3** with compatibility version 4
- **Nuxt UI** (@nuxt/ui) - Primary component library
- **@vueuse/motion** - Animation library for scroll and entrance effects
- **EmailJS** - Email service integration for contact forms
- **Tailwind CSS** - Utility-first styling (configured in `tailwind.config.js`)

### Styling Configuration
- Custom color palette: Primary (emerald), Yellow (custom shades), Neutral (slate)
- Nuxt UI icons: Heroicons and Lucide
- Custom font: Manrope (Google Fonts)
- Color mode: Light mode preferred (no dark mode)

### Component Architecture
The main page (`app/pages/index.vue`) is composed of sections:
- Navigation with mobile menu
- HeroSection
- ServicesSection
- EnhancedCTA
- AdvantagesSection
- QuoteForm (with EmailJS integration)
- CoverageSection
- StickyContactBar (floating contact buttons)
- Footer

### Contact Information
Contact details are centralized in `app/composables/useContact.ts`:
- Phone: 06 01 37 04 43
- Email: locationbenne37@gmail.com

When updating contact information, modify this composable rather than hardcoding values in components.

### SEO Configuration
- Sitemap automatically generated via `@nuxtjs/sitemap`
- Robots.txt configured to allow all crawlers
- Structured data (JSON-LD) for LocalBusiness schema in `index.vue`
- Meta tags configured in `nuxt.config.ts` (title, description, OG tags)

### Animation System
- Uses `@vueuse/motion` for entrance animations
- Plugin configured in `app/plugins/motion.client.ts`
- Directives like `v-motion` used throughout components for scroll-triggered animations

### Form Handling
The QuoteForm component uses:
- Nuxt UI form components (UForm, UFormField, UInput, etc.)
- Form progress tracking
- EmailJS for sending form submissions
- Client-side validation

## Development Notes

### Adding New Sections
1. Create a new component in `app/components/`
2. Import and add to `app/pages/index.vue`
3. Add corresponding navigation link if needed

### Modifying Styles
- Theme colors: Edit `app/app.config.ts` for Nuxt UI theme
- Tailwind colors: Edit `tailwind.config.js` for custom Tailwind classes
- Global styles: Edit `app/assets/css/main.css`

### EmailJS Configuration
The QuoteForm uses EmailJS for contact form submissions. If EmailJS credentials need updating, check the QuoteForm component for the service configuration.

### SEO Updates
- Update meta tags in `nuxt.config.ts` (app.head section)
- Update structured data in `app/pages/index.vue` (definePageMeta script)
- Site URL is configured in `nuxt.config.ts` under `site.url`
