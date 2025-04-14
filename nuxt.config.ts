// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@vueuse/motion/nuxt'],
  ui: {
    icons: ['heroicons', 'lucide']
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light'
  },
  future: {
    compatibilityVersion: 4
  },
  app: {
    head: {
      title: 'Eco-Bennes | Location de bennes professionnelle',
      meta: [
        { name: 'description', content: 'Location de bennes à prix compétitifs pour professionnels et particuliers. Service rapide et local.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  compatibilityDate: '2024-11-27'
})