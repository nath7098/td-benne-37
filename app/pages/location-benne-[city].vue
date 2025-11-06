<script setup lang="ts">
const route = useRoute()
const citySlug = route.params.city as string

// Get city data
const { city, nearbyCitiesData, seoMeta } = useCityData(citySlug)

// Structured data
const structuredData = useCitySchema(city)

// SEO meta tags and structured data
useHead({
  title: seoMeta.title,
  meta: [
    { name: 'description', content: seoMeta.description },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'TD Location de Bennes 37' },
    { property: 'og:title', content: seoMeta.ogTitle },
    { property: 'og:description', content: seoMeta.ogDescription },
    { property: 'og:image', content: seoMeta.ogImage },
    { property: 'og:url', content: seoMeta.url },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoMeta.twitterTitle },
    { name: 'twitter:description', content: seoMeta.twitterDescription },
    { name: 'twitter:image', content: seoMeta.ogImage }
  ],
  link: [
    { rel: 'canonical', href: seoMeta.url }
  ],
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
    <SiteHeader />

    <CityHeroSection :city="city" />

    <ServicesSection />

    <HowItWorksSection />

    <CityContentBlock :city="city" />

    <AdvantagesSection />

    <PricingSection />

    <FAQSection />

    <QuoteForm />

    <NearbyCitiesSection :nearby-cities="nearbyCitiesData" />

    <CoverageSection />

    <SiteFooter />

    <StickyContactBar />
  </div>
</template>
