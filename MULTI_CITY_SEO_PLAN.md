# Multi-City SEO Strategy Plan
## TD Location de Bennes 37 - Local SEO Expansion

**Created:** November 6, 2025
**Goal:** Rank for "location benne [CITY]" searches across 13 cities in Indre-et-Loire (37)

---

## Executive Summary

This plan outlines a comprehensive local SEO strategy to establish TD Location de Bennes 37 as the top result for skip bin rental searches across 13 key cities in Indre-et-Loire. The strategy focuses on creating city-specific landing pages optimized for local search while maintaining a clean, scalable architecture.

### Target Cities (13 total)

**Primary Markets:**
1. Tours (already targeted)
2. Fondettes
3. Joué-lès-Tours

**Secondary Markets:**
4. Bourgueil
5. La Ville-aux-Dames
6. Chinon
7. Langeais
8. Châteaurenault
9. Montlouis-sur-Loire
10. Château-la-Vallière
11. Azay-le-Rideau
12. Notre-Dame-d'Oé
13. Savonnières

### Expected Results

**After 3 months:**
- 8-10 cities ranking in top 5 for "location benne [city]"
- 40-50 new monthly organic visitors per city
- 500-650 additional monthly organic visitors total
- 10-15 additional quote requests per month

**After 6 months:**
- All 13 cities ranking in top 3
- 60-80 organic visitors per city monthly
- 800-1000+ additional monthly organic visitors
- 20-30 additional quote requests per month

---

## Strategy Overview

### Approach: Dedicated City Landing Pages

**Why this approach?**
- ✅ Best for local SEO (Google favors dedicated location pages)
- ✅ Allows city-specific content and keywords
- ✅ Better user experience with localized information
- ✅ Enables city-specific structured data (LocalBusiness per city)
- ✅ Creates natural internal linking opportunities
- ✅ Scalable and maintainable

**Alternatives considered:**
- ❌ Single page with tabs: Poor SEO, can't target multiple keywords effectively
- ❌ Dynamic parameters (?city=tours): Not SEO-friendly, no URL structure
- ✅ **CHOSEN: Dedicated pages** (/location-benne-tours, /location-benne-chinon, etc.)

---

## Technical Implementation

### Phase 1: URL Structure & Routing

#### Chosen URL Pattern
```
https://td-locationbenne37.fr/location-benne-tours
https://td-locationbenne37.fr/location-benne-fondettes
https://td-locationbenne37.fr/location-benne-bourgueil
...
```

**Why this pattern?**
- Clear, readable URLs
- Keyword-rich slugs
- Consistent structure
- Easy to share and remember

#### Nuxt Implementation

**File: `app/pages/location-benne-[city].vue`**

```typescript
// Dynamic route with city parameter
// This single template generates all 13 city pages

<script setup>
// City data configuration
const cityData = {
  'tours': {
    name: 'Tours',
    postalCode: '37000',
    description: 'Location de bennes à Tours...',
    neighborhoods: ['Centre-ville', 'Deux-Lions', 'Sanitas'],
    population: '136,000',
    coordinates: { lat: 47.3941, lng: 0.6848 }
  },
  'fondettes': {
    name: 'Fondettes',
    postalCode: '37230',
    description: 'Location de bennes à Fondettes...',
    neighborhoods: ['Centre', 'Vallières'],
    population: '10,500',
    coordinates: { lat: 47.4019, lng: 0.6031 }
  },
  // ... all 13 cities
}
</script>
```

### Phase 2: Page Structure & Content

#### Template Components

Each city page will include:

1. **Hero Section** (Unique per city)
   - H1: "Location de Bennes à [CITY] (37)"
   - Subtitle: "Service professionnel à [CITY] et environs"
   - City-specific image or map
   - CTA: "Devis gratuit à [CITY]"

2. **Service Cards** (Generic + City mentions)
   - Reuse existing ServiceCard components
   - Add city name in descriptions where natural
   - Example: "Bennes à gravats livrées rapidement à [CITY]"

3. **Why Choose Us in [CITY]** Section
   - Local delivery times: "Livraison sous 24h à [CITY]"
   - Coverage area: "[CITY] et communes voisines"
   - Local references if available

4. **City-Specific Content Block** (Unique per city)
   - Brief city info (population, key areas)
   - Neighborhoods covered
   - Specific delivery notes (access, parking considerations)
   - Local regulations if applicable

5. **Pricing Section** (Shared)
   - Same pricing component
   - Note: "Tarifs valables à [CITY]"

6. **FAQ Section** (City-adapted)
   - Reuse FAQ component
   - Modify questions to include city name:
     - "Quel est le délai de livraison à [CITY]?"
     - "Couvrez-vous tous les quartiers de [CITY]?"

7. **Quote Form** (City pre-filled)
   - Standard QuoteForm
   - Auto-fill address field with "[CITY]"
   - Hidden field tracking source city

8. **Local Trust Signals**
   - "Déjà +50 clients satisfaits à [CITY]"
   - Local testimonials if available
   - Badge: "Service local à [CITY]"

---

## SEO Optimization Per Page

### 1. Meta Tags (Per City)

```typescript
// Example for Tours
useHead({
  title: 'Location de Bennes à Tours (37) | Devis Gratuit 24h - TD Bennes',
  meta: [
    {
      name: 'description',
      content: 'Location de bennes à Tours et Indre-et-Loire. Livraison rapide sous 24h à Tours. Devis gratuit. Bennes gravats, déchets verts, encombrants. ☎ 06 01 37 04 43'
    },
    // Open Graph
    { property: 'og:title', content: 'Location de Bennes à Tours (37) | TD Bennes' },
    { property: 'og:description', content: 'Location de bennes à Tours. Livraison 24h, devis gratuit. Tous types de déchets.' },
    { property: 'og:url', content: 'https://td-locationbenne37.fr/location-benne-tours' },
    // Twitter Card
    { name: 'twitter:title', content: 'Location de Bennes à Tours (37) | TD Bennes' },
    { name: 'twitter:description', content: 'Location de bennes à Tours. Livraison 24h ☎ 06 01 37 04 43' }
  ],
  link: [
    { rel: 'canonical', href: 'https://td-locationbenne37.fr/location-benne-tours' }
  ]
})
```

### 2. Structured Data (Per City)

**LocalBusiness Schema with City-Specific Data:**

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://td-locationbenne37.fr/location-benne-tours",
  "name": "TD Location de Bennes 37 - Tours",
  "description": "Location de bennes à Tours et environs. Service rapide et professionnel.",
  "telephone": "+33601370443",
  "email": "locationbenne37@gmail.com",
  "url": "https://td-locationbenne37.fr/location-benne-tours",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tours",
    "postalCode": "37000",
    "addressRegion": "Indre-et-Loire",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.3941,
    "longitude": 0.6848
  },
  "areaServed": {
    "@type": "City",
    "name": "Tours",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "Indre-et-Loire"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de location de bennes à Tours",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Location benne gravats Tours",
          "areaServed": "Tours"
        }
      }
    ]
  }
}
```

**BreadcrumbList Schema:**

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://td-locationbenne37.fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Villes",
      "item": "https://td-locationbenne37.fr/villes"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Location de bennes à Tours"
    }
  ]
}
```

### 3. Keyword Optimization Per City

**Primary Keywords:**
- "location benne [city]"
- "location de bennes [city]"
- "louer benne [city]"

**Secondary Keywords:**
- "benne gravats [city]"
- "benne déchets [city]"
- "évacuation déchets [city]"
- "location benne chantier [city]"
- "prix location benne [city]"

**Long-Tail Keywords:**
- "location benne pas cher [city]"
- "livraison benne rapide [city]"
- "devis gratuit benne [city]"

**Content Guidelines:**
- Use city name 10-15 times naturally
- Include city name in H1, H2, first paragraph
- Mention neighboring cities/areas
- Include postal code
- Reference local landmarks if relevant

---

## Content Strategy

### City-Specific Content Block Template

```vue
<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">
        Location de bennes à {{ cityData.name }} et alentours
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Notre service à {{ cityData.name }}</h3>
          <p class="text-gray-700 mb-4">
            TD Location de Bennes 37 dessert {{ cityData.name }} ({{ cityData.postalCode }})
            et ses {{ cityData.population }} habitants. Nous intervenons dans tous les quartiers
            de {{ cityData.name }}, y compris {{ cityData.neighborhoods.join(', ') }}.
          </p>
          <p class="text-gray-700">
            Que vous soyez un particulier réalisant des travaux de rénovation à {{ cityData.name }}
            ou un professionnel du BTP, nous livrons votre benne sous 24h partout à {{ cityData.name }}.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Zones de livraison depuis {{ cityData.name }}</h3>
          <ul class="space-y-2">
            <li v-for="neighbor in cityData.nearbyAreas" class="flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500" />
              {{ neighbor }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
```

### Unique Content Requirements

**Minimum per city:**
- 300-500 words of unique city-specific content
- City name mentioned 10-15 times naturally
- 2-3 paragraphs about local service
- List of neighborhoods/areas covered
- Delivery specifics for that city

**Content tone:**
- Professional but friendly
- Local and personable
- Emphasize "we know [CITY]"
- Mention local knowledge/experience

---

## Internal Linking Strategy

### 1. Create City Hub Page

**New page: `/villes` or `/zones-intervention`**

Purpose: Central landing page listing all 13 cities

```vue
<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold mb-6">
        Nos zones d'intervention en Indre-et-Loire (37)
      </h1>
      <p class="text-xl text-gray-600 mb-12">
        TD Location de Bennes 37 intervient dans tout l'Indre-et-Loire
      </p>

      <div class="grid md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="city in cities"
          :to="`/location-benne-${city.slug}`"
          class="p-6 border rounded-xl hover:shadow-lg transition"
        >
          <h3 class="text-xl font-bold mb-2">{{ city.name }}</h3>
          <p class="text-gray-600 mb-3">{{ city.postalCode }}</p>
          <p class="text-sm text-gray-500">{{ city.population }} habitants</p>
          <UButton class="mt-4" variant="ghost" color="yellow">
            Voir nos services à {{ city.name }} →
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
```

### 2. Update Main Homepage

**Add section: "Nous intervenons dans toute l'Indre-et-Loire"**

```vue
<section id="villes" class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">
      Location de bennes dans tout l'Indre-et-Loire
    </h2>

    <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
      <NuxtLink
        v-for="city in cities"
        :to="`/location-benne-${city.slug}`"
        class="px-6 py-3 bg-white rounded-lg shadow hover:shadow-md transition border border-gray-200 hover:border-yellow-400"
      >
        <span class="font-medium">{{ city.name }}</span>
        <span class="text-gray-500 ml-2">({{ city.postalCode.slice(0, 5) }})</span>
      </NuxtLink>
    </div>

    <div class="text-center mt-8">
      <NuxtLink to="/villes" class="text-yellow-600 hover:text-yellow-700 font-medium">
        Voir toutes nos zones d'intervention →
      </NuxtLink>
    </div>
  </div>
</section>
```

### 3. Cross-Link City Pages

On each city page, add "Villes à proximité" section:

```vue
<section class="py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <h3 class="text-2xl font-bold mb-6">
      Nous intervenons aussi dans les villes voisines
    </h3>
    <div class="flex flex-wrap gap-3">
      <NuxtLink
        v-for="nearby in nearbyCities"
        :to="`/location-benne-${nearby.slug}`"
        class="px-4 py-2 bg-white rounded-lg hover:bg-yellow-50 transition"
      >
        {{ nearby.name }}
      </NuxtLink>
    </div>
  </div>
</section>
```

### 4. Update Navigation

**Main menu - Add dropdown:**
```
Accueil
Services
Villes ▼
  ├─ Tours
  ├─ Fondettes
  ├─ Joué-lès-Tours
  ├─ Chinon
  └─ Voir toutes les villes →
Tarifs
FAQ
Contact
```

### 5. Update Footer

Add "Nos Villes" column:

```vue
<div>
  <h3 class="text-lg font-bold mb-4">Nos villes</h3>
  <ul class="space-y-2">
    <li><NuxtLink to="/location-benne-tours">Tours</NuxtLink></li>
    <li><NuxtLink to="/location-benne-fondettes">Fondettes</NuxtLink></li>
    <li><NuxtLink to="/location-benne-chinon">Chinon</NuxtLink></li>
    <li><NuxtLink to="/villes">+ 10 autres villes →</NuxtLink></li>
  </ul>
</div>
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1) - 8-10 hours

**Tasks:**
1. Create city data configuration file (`app/data/cities.ts`)
   - All 13 cities with complete data
   - Coordinates, postal codes, populations
   - Neighborhoods, nearby cities
   - 2 hours

2. Create dynamic city page template (`app/pages/location-benne-[city].vue`)
   - Reusable template for all cities
   - Dynamic content injection
   - 3 hours

3. Create city-specific components:
   - `CityHeroSection.vue`
   - `CityContentBlock.vue`
   - `NearbyCitiesSection.vue`
   - 2 hours

4. Add structured data generator utility
   - Generate LocalBusiness schema per city
   - Generate BreadcrumbList per city
   - 1 hour

5. Testing & validation
   - Test all 13 city pages render correctly
   - Validate structured data
   - 2 hours

### Phase 2: Content Creation (Week 2) - 12-15 hours

**Tasks:**
1. Write unique content for each city (300-500 words each)
   - Research each city (population, neighborhoods)
   - Write localized descriptions
   - Include local keywords naturally
   - ~1 hour per city × 13 = 13 hours

2. Create city hub page (`/villes`)
   - Design grid layout
   - Add city cards with stats
   - SEO optimization
   - 2 hours

### Phase 3: Internal Linking (Week 2) - 4-6 hours

**Tasks:**
1. Update homepage with city section
   - Add "Nos villes" section
   - Link to all 13 cities
   - 2 hours

2. Update navigation menu
   - Add cities dropdown
   - Mobile menu support
   - 1 hour

3. Update footer with city links
   - Add "Nos villes" column
   - 30 minutes

4. Implement cross-linking between city pages
   - "Nearby cities" on each page
   - 2 hours

5. Update sitemap configuration
   - Ensure all city pages included
   - 30 minutes

### Phase 4: SEO Optimization (Week 3) - 6-8 hours

**Tasks:**
1. Optimize meta tags for all cities
   - Unique titles and descriptions
   - 2 hours

2. Implement structured data for all cities
   - LocalBusiness per city
   - BreadcrumbList per city
   - 2 hours

3. Create city-specific Open Graph images (optional)
   - 1 hour per image × 3-4 priority cities
   - 3-4 hours

4. Internal link audit and optimization
   - Check all links work
   - Add contextual links
   - 2 hours

### Phase 5: Testing & Launch (Week 3) - 4-6 hours

**Tasks:**
1. Technical SEO audit
   - Validate all structured data
   - Check canonical tags
   - Test mobile responsiveness
   - 2 hours

2. Performance testing
   - Lighthouse scores for 5 sample cities
   - Optimize if needed
   - 2 hours

3. Submit to Google Search Console
   - Submit sitemap with new URLs
   - Request indexing for priority cities
   - 1 hour

4. Set up monitoring
   - Google Analytics goals per city
   - Search Console tracking
   - 1 hour

---

## Technical Architecture

### File Structure

```
app/
├── data/
│   └── cities.ts                    # City data configuration
├── pages/
│   ├── index.vue                    # Homepage (updated with city links)
│   ├── villes.vue                   # City hub page
│   └── location-benne-[city].vue    # Dynamic city template
├── components/
│   ├── city/
│   │   ├── CityHeroSection.vue
│   │   ├── CityContentBlock.vue
│   │   ├── CityServicesSection.vue
│   │   ├── CityFAQSection.vue
│   │   └── NearbyCitiesSection.vue
│   └── [existing components]
└── composables/
    ├── useCityData.ts               # City data composable
    └── useCitySchema.ts             # Structured data generator
```

### City Data Structure

**File: `app/data/cities.ts`**

```typescript
export interface City {
  slug: string
  name: string
  displayName: string // "à Tours" or "aux Dames"
  postalCode: string
  population: string
  coordinates: {
    lat: number
    lng: number
  }
  neighborhoods: string[]
  nearbyAreas: string[]
  nearbyCities: string[] // slugs of nearby cities
  description: string
  metaDescription: string
  uniqueContent: string
}

export const cities: Record<string, City> = {
  'tours': {
    slug: 'tours',
    name: 'Tours',
    displayName: 'à Tours',
    postalCode: '37000',
    population: '136 000',
    coordinates: { lat: 47.3941, lng: 0.6848 },
    neighborhoods: ['Centre-ville', 'Deux-Lions', 'Sanitas', 'Rabelais'],
    nearbyAreas: ['Saint-Pierre-des-Corps', 'La Riche', 'Saint-Avertin'],
    nearbyCities: ['fondettes', 'joue-les-tours', 'la-ville-aux-dames'],
    description: 'Location de bennes à Tours...',
    metaDescription: 'Location de bennes à Tours...',
    uniqueContent: `
      Tours, préfecture d'Indre-et-Loire avec ses 136 000 habitants, est notre zone d'intervention principale...
    `
  },
  'fondettes': {
    slug: 'fondettes',
    name: 'Fondettes',
    displayName: 'à Fondettes',
    postalCode: '37230',
    population: '10 500',
    coordinates: { lat: 47.4019, lng: 0.6031 },
    neighborhoods: ['Centre', 'Vallières', 'Lussault'],
    nearbyAreas: ['Saint-Cyr-sur-Loire', 'Tours Nord'],
    nearbyCities: ['tours', 'notre-dame-doe'],
    description: 'Location de bennes à Fondettes...',
    metaDescription: 'Location de bennes à Fondettes...',
    uniqueContent: `
      Fondettes, commune de 10 500 habitants située au nord-ouest de Tours...
    `
  }
  // ... all 13 cities
}
```

### Composable: useCityData

**File: `app/composables/useCityData.ts`**

```typescript
import { cities, type City } from '~/data/cities'

export const useCityData = (citySlug: string) => {
  const city = cities[citySlug]

  if (!city) {
    throw createError({
      statusCode: 404,
      message: `City not found: ${citySlug}`
    })
  }

  // Get nearby cities data
  const nearbyCitiesData = city.nearbyCities
    .map(slug => cities[slug])
    .filter(Boolean)

  // Generate SEO meta
  const seoMeta = {
    title: `Location de Bennes ${city.displayName} (${city.postalCode.slice(0, 5)}) | Devis Gratuit 24h`,
    description: city.metaDescription,
    ogTitle: `Location de Bennes ${city.displayName} | TD Bennes 37`,
    ogDescription: `Service de location de bennes ${city.displayName}. Livraison 24h, tous types de déchets.`,
    url: `https://td-locationbenne37.fr/location-benne-${city.slug}`
  }

  return {
    city,
    nearbyCitiesData,
    seoMeta
  }
}
```

### Dynamic City Page Template

**File: `app/pages/location-benne-[city].vue`**

```vue
<script setup lang="ts">
const route = useRoute()
const citySlug = route.params.city as string

// Get city data
const { city, nearbyCitiesData, seoMeta } = useCityData(citySlug)

// SEO meta tags
useHead({
  title: seoMeta.title,
  meta: [
    { name: 'description', content: seoMeta.description },
    { property: 'og:title', content: seoMeta.ogTitle },
    { property: 'og:description', content: seoMeta.ogDescription },
    { property: 'og:url', content: seoMeta.url },
    { name: 'twitter:title', content: seoMeta.ogTitle },
    { name: 'twitter:description', content: seoMeta.ogDescription }
  ],
  link: [
    { rel: 'canonical', href: seoMeta.url }
  ]
})

// Structured data
const structuredData = useCitySchema(city)

definePageMeta({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData)
    }
  ]
})
</script>

<template>
  <div>
    <CityHeroSection :city="city" />

    <CityServicesSection :city="city" />

    <CityContentBlock :city="city" />

    <PricingSection :city-name="city.name" />

    <CityFAQSection :city="city" />

    <QuoteForm :default-city="city.name" />

    <NearbyCitiesSection :nearby-cities="nearbyCitiesData" />

    <CoverageSection />
  </div>
</template>
```

---

## Content Writing Guidelines

### City Content Template

For each city, write 300-500 words following this structure:

**Paragraph 1: Introduction (100 words)**
- Introduce the city and service
- Include: city name, postal code, population
- Mention "TD Location de Bennes 37"
- Example: "TD Location de Bennes 37 est votre partenaire de confiance pour la location de bennes à [CITY] ([POSTAL CODE]). Avec [POPULATION] habitants, [CITY] est une commune dynamique où..."

**Paragraph 2: Service Details (100-150 words)**
- Specific neighborhoods covered
- Delivery specifics (24h)
- Types of projects served
- Example: "Nous intervenons dans tous les quartiers de [CITY], notamment [NEIGHBORHOOD 1], [NEIGHBORHOOD 2], et [NEIGHBORHOOD 3]. Que vous réalisiez des travaux de rénovation..."

**Paragraph 3: Local Knowledge (100-150 words)**
- Show local expertise
- Mention specific challenges or features of the city
- Nearby areas covered
- Example: "Grâce à notre connaissance du territoire, nous savons que [CITY] présente des particularités comme [DETAIL]. Nous desservons également les communes voisines..."

**Paragraph 4: Call to Action (50 words)**
- Encourage contact
- Emphasize speed and service
- Example: "Pour votre location de benne à [CITY], contactez-nous au 06 01 37 04 43. Devis gratuit sous 24h, livraison rapide partout à [CITY]."

### Keywords to Include Naturally

Per city page, naturally include:
- "location benne [city]" (3-5 times)
- "location de bennes [city]" (2-3 times)
- "[city] (37)" or "[city] [postal code]" (2-3 times)
- "benne gravats [city]" (1-2 times)
- "livraison benne [city]" (1-2 times)
- "devis gratuit [city]" (1-2 times)

---

## Monitoring & Success Metrics

### Google Search Console

**Track per city:**
- Impressions for "location benne [city]"
- Click-through rate (CTR)
- Average position
- Clicks

**Goals:**
- Month 1: All pages indexed
- Month 2: Avg position < 20 for primary keywords
- Month 3: Avg position < 10 for 50% of cities
- Month 6: Avg position < 5 for all cities

### Google Analytics

**Set up:**
1. Custom dimensions for city tracking
2. Goals for:
   - City page visits
   - Quote form submissions from city pages
   - Phone clicks from city pages

**KPIs:**
- City page views per month
- Time on page (target: >2 minutes)
- Bounce rate (target: <60%)
- Conversion rate (target: 3-5%)

### Ranking Tracker

**Monitor weekly:**
- "location benne [city]" for all 13 cities
- "location de bennes [city]"
- "louer benne [city]"
- "benne [city]"

**Target rankings:**
- 3 months: Position 5-10
- 6 months: Position 1-5
- 12 months: Position 1-3 (featured snippet opportunities)

---

## Budget & Resources

### Time Investment

**Development:** 25-30 hours
- Phase 1 (Foundation): 8-10 hours
- Phase 2 (Content): 12-15 hours
- Phase 3 (Linking): 4-6 hours
- Phase 4 (SEO): 6-8 hours
- Phase 5 (Testing): 4-6 hours

**Content Writing:** 13-15 hours
- 1 hour per city × 13 cities
- City hub page content
- Homepage updates

**Total:** 38-45 hours

### Roles Required

1. **Developer** (25-30 hours)
   - Create dynamic templates
   - Implement routing
   - Structured data
   - Internal linking

2. **Content Writer** (13-15 hours)
   - Research cities
   - Write unique content per city
   - SEO optimization
   - Keyword integration

3. **SEO Specialist** (6-8 hours)
   - Keyword research per city
   - Meta tag optimization
   - Schema markup review
   - Competitor analysis

---

## Risk Mitigation

### Potential Issues & Solutions

**Issue 1: Duplicate Content**
- **Risk:** Google penalizing similar pages
- **Solution:**
  - Minimum 300 words unique per city
  - Different intro paragraphs
  - City-specific details (neighborhoods, local facts)
  - Vary sentence structure

**Issue 2: Thin Content**
- **Risk:** Pages not ranking due to insufficient content
- **Solution:**
  - 800-1200 words total per page (including shared sections)
  - 300-500 words unique city content
  - Rich media (maps, images)
  - User-generated content (testimonials)

**Issue 3: Cannibalization**
- **Risk:** Multiple pages competing for same keywords
- **Solution:**
  - Clear keyword targeting per page
  - Internal linking structure
  - Use canonical tags correctly
  - Differentiate page focus

**Issue 4: Slow Indexing**
- **Risk:** Google taking months to index new pages
- **Solution:**
  - Submit sitemap immediately
  - Request indexing via Search Console
  - Build backlinks to priority cities
  - Share on social media

**Issue 5: Low Initial Traffic**
- **Risk:** No immediate results, discouragement
- **Solution:**
  - Set realistic expectations (3-6 months)
  - Track rankings weekly, not daily
  - Focus on content quality
  - Build local citations (Google Business Profile)

---

## Next Steps (Immediate Actions)

### Week 1: Start Phase 1

1. **Create city data file** (2 hours)
   - Research all 13 cities
   - Gather: postal codes, populations, coordinates
   - List neighborhoods per city
   - Map nearby cities

2. **Create dynamic page template** (3 hours)
   - Set up `location-benne-[city].vue`
   - Implement city data composable
   - Test with 2-3 cities first

3. **Create city-specific components** (3 hours)
   - CityHeroSection.vue
   - CityContentBlock.vue
   - Start with basic versions

4. **Technical validation** (1 hour)
   - Test routing works
   - Validate structured data
   - Check mobile responsiveness

### Week 2: Content & Optimization

5. **Write city content** (13 hours)
   - Start with priority cities: Tours, Fondettes, Joué-lès-Tours
   - Then secondary cities
   - Follow content template

6. **Create city hub page** (2 hours)
   - Design `/villes` page
   - Add all city cards
   - Optimize for SEO

7. **Update homepage** (2 hours)
   - Add city section
   - Link to all cities
   - Update navigation

### Week 3: Launch & Monitor

8. **Final SEO optimization** (4 hours)
   - Review all meta tags
   - Validate structured data
   - Test internal links

9. **Submit to Google** (1 hour)
   - Update sitemap
   - Submit via Search Console
   - Request indexing for priority pages

10. **Set up tracking** (2 hours)
    - Google Analytics goals
    - Search Console properties
    - Rank tracking tools

---

## Long-Term Maintenance

### Monthly Tasks (2-3 hours/month)

1. **Monitor rankings** (30 min)
   - Check position changes
   - Identify opportunities
   - Update underperforming pages

2. **Content updates** (1 hour)
   - Add seasonal content
   - Update prices if changed
   - Add new testimonials

3. **Performance review** (30 min)
   - Check page speed
   - Review Core Web Vitals
   - Fix any issues

4. **Link audit** (30 min)
   - Check for broken links
   - Add new internal links
   - Monitor backlinks

### Quarterly Reviews (4-6 hours/quarter)

1. **Deep content audit**
   - Identify thin content
   - Expand underperforming pages
   - Add new FAQs

2. **Competitor analysis**
   - Check competitor rankings
   - Identify new keywords
   - Analyze their strategies

3. **Technical SEO audit**
   - Full site crawl
   - Fix technical issues
   - Update structured data

4. **Strategy adjustment**
   - Based on results
   - New city opportunities
   - Content expansion

---

## Conclusion

This multi-city SEO strategy will position TD Location de Bennes 37 as the go-to provider for skip bin rentals across 13 cities in Indre-et-Loire. By creating dedicated, optimized landing pages for each city with unique content and proper technical SEO, you'll capture local search traffic and convert more visitors into customers.

**Key Success Factors:**
1. ✅ Unique, valuable content per city (300-500 words minimum)
2. ✅ Proper technical implementation (structured data, meta tags)
3. ✅ Strong internal linking structure
4. ✅ Patient, consistent execution (3-6 months to see full results)
5. ✅ Regular monitoring and optimization

**Expected ROI:**
- Initial investment: 38-45 hours
- Expected monthly new organic visitors after 6 months: 800-1000+
- Expected monthly quote requests: +20-30
- Cost per acquisition: Significantly lower than paid ads
- Long-term benefit: Compounding organic growth

This strategy is scalable - once the template is built, adding new cities takes only 1-2 hours per city (content writing + configuration).

---

**Ready to implement?** Start with Phase 1 this week, focusing on the technical foundation. The investment will pay dividends for years to come through sustainable organic traffic growth.
