// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    preset: 'static'
  },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@vueuse/motion/nuxt', '@nuxtjs/sitemap', '@nuxtjs/robots'],
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
      title: 'TD Location de Bennes 37',
      meta: [
        { name: 'description', content: 'Location de bennes à Tours et en Indre-et-Loire (37). Service rapide et professionnel pour particuliers et entreprises.' },
        { name: 'keywords', content: 'location benne Tours, benne 37, location benne Indre-et-Loire, benne chantier, benne déchets' },
        { name: 'robots', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { property: 'og:title', content: 'TD Location de Bennes 37' },
        { property: 'og:description', content: 'Service de location de bennes en Indre-et-Loire.' },
        { property: 'og:image', content: 'https://td-locationbenne37.fr/logo-transparent.png' },
        { property: 'og:url', content: 'https://td-locationbenne37.fr' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://td-locationbenne37.fr' }
      ]
    }
  },
  compatibilityDate: '2024-11-27'
})