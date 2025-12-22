// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    preset: 'vercel'
  },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/eslint', '@vueuse/motion/nuxt', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  image: {
    format: ['webp', 'avif'],
    quality: 80
  },
  ui: {
    icons: ['heroicons', 'lucide'],
    theme: {
      colors: ['primary', 'secondary', 'info', 'success', 'warning', 'error', 'neutral', 'yellow']
    }
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light'
  },
  future: {
    compatibilityVersion: 4
  },
  site: {
    url: 'https://td-locationbenne37.fr',
    name: 'TD Location de Bennes 37'
  },
  sitemap: {
    urls: async () => {
      // Import cities data
      const { cityList } = await import('./app/data/cities')

      // Generate URLs for all city pages
      const cityUrls = cityList.map(city => ({
        loc: `/location-benne-${city.slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      }))

      // Add terrassement page
      const terrassementUrl = {
        loc: '/terrassement',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      }

      return [...cityUrls, terrassementUrl]
    }
  },
  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'TD Location de Bennes 37 - Service Rapide Tours & Indre-et-Loire',
      meta: [
        { name: 'description', content: 'Location de bennes à Tours et en Indre-et-Loire (37). Service rapide et professionnel pour particuliers et entreprises. Devis gratuit sous 24h. Appelez-nous au 06 01 37 04 43.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'TD Location de Bennes 37' },
        { property: 'og:title', content: 'TD Location de Bennes 37 - Service Rapide Tours & Indre-et-Loire' },
        { property: 'og:description', content: 'Location de bennes à Tours et en Indre-et-Loire. Livraison 24h, devis gratuit, prix compétitifs. Particuliers et entreprises.' },
        { property: 'og:image', content: 'https://td-locationbenne37.fr/logo-transparent.png' },
        { property: 'og:url', content: 'https://td-locationbenne37.fr' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'TD Location de Bennes 37 - Service Rapide Tours' },
        { name: 'twitter:description', content: 'Location de bennes à Tours et Indre-et-Loire. Livraison 24h, devis gratuit. ☎ 06 01 37 04 43' },
        { name: 'twitter:image', content: 'https://td-locationbenne37.fr/logo-transparent.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://td-locationbenne37.fr' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }
      ]
    }
  },
  compatibilityDate: '2024-11-27'
})