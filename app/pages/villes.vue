<script setup lang="ts">
import { cityList } from '~/data/cities'

useHead({
  title: 'Nos Zones d\'Intervention en Indre-et-Loire (37) | TD Location de Bennes',
  meta: [
    {
      name: 'description',
      content: 'TD Location de Bennes 37 intervient dans 13 villes de l\'Indre-et-Loire : Tours, Fondettes, Joué-lès-Tours, Chinon, Langeais, et plus. Livraison 24h partout dans le 37.'
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Nos Zones d\'Intervention | TD Location de Bennes 37' },
    { property: 'og:description', content: 'Location de bennes dans 13 villes de l\'Indre-et-Loire. Service rapide et professionnel.' },
    { property: 'og:url', content: 'https://td-locationbenne37.fr/villes' }
  ],
  link: [
    { rel: 'canonical', href: 'https://td-locationbenne37.fr/villes' }
  ]
})

definePageMeta({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: 'https://td-locationbenne37.fr'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Nos Villes'
          }
        ]
      })
    }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-pattern" />
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Nos zones d'intervention en <span class="text-yellow-400">Indre-et-Loire (37)</span>
          </h1>
          <p class="text-xl text-gray-300 mb-8">
            TD Location de Bennes 37 intervient dans 13 villes du département pour vous offrir
            un service de proximité rapide et professionnel
          </p>
          <div class="flex flex-wrap justify-center gap-6 text-lg">
            <div class="flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-400" />
              <span>13 villes couvertes</span>
            </div>
            <div class="flex items-center">
              <UIcon name="i-heroicons-clock" class="mr-2 text-yellow-400" />
              <span>Livraison sous 24h</span>
            </div>
            <div class="flex items-center">
              <UIcon name="i-heroicons-check-badge" class="mr-2 text-yellow-400" />
              <span>Service local</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cities Grid -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <NuxtLink
              v-for="(city, index) in cityList"
              :key="city.slug"
              :to="`/location-benne-${city.slug}`"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay: index * 50 } }"
              class="group p-6 border-2 border-gray-200 rounded-xl hover:border-yellow-400 hover:shadow-xl transition-all bg-white"
          >
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-2xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors mb-1">
                  {{ city.name }}
                </h3>
                <p class="text-gray-500 text-sm">{{ city.postalCode }}</p>
              </div>
              <div class="w-12 h-12 bg-gray-100 group-hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors">
                <UIcon name="i-heroicons-map-pin" class="text-gray-600 group-hover:text-white text-xl transition-colors" />
              </div>
            </div>

            <p class="text-gray-600 mb-4 line-clamp-2">
              {{ city.description }}
            </p>

            <div class="flex items-center justify-between">
              <div class="flex items-center text-sm text-gray-500">
                <UIcon name="i-heroicons-user-group" class="mr-1" />
                <span>{{ city.population }} habitants</span>
              </div>
              <div class="flex items-center text-yellow-600 group-hover:text-yellow-700 font-medium">
                <span class="text-sm">En savoir plus</span>
                <UIcon name="i-heroicons-arrow-right" class="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div class="mt-4 pt-4 border-t border-gray-100">
              <div class="flex flex-wrap gap-2">
                <span
                    v-for="neighborhood in city.neighborhoods.slice(0, 3)"
                    :key="neighborhood"
                    class="text-xs px-2 py-1 bg-gray-50 rounded text-gray-600"
                >
                  {{ neighborhood }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Votre ville n'est pas dans la liste ?
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Nous couvrons tout l'Indre et Loire. Contactez-nous pour vérifier si nous
            desservons votre commune.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="yellow" to="/#quote-form">
              <template #leading>
                <UIcon name="i-heroicons-document-text" />
              </template>
              Demander un devis
            </UButton>
            <UButton size="xl" color="neutral" variant="outline" href="tel:0601370443">
              <template #leading>
                <UIcon name="i-heroicons-phone" />
              </template>
              06 01 37 04 43
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">
            Notre zone de couverture
          </h2>
          <div class="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <NuxtImg src="/zone.png" alt="Carte des zones d'intervention TD Location de Bennes 37" class="w-full" loading="lazy" />
          </div>
          <p class="text-center text-gray-600 mt-6">
            Nous intervenons dans l'ensemble de l'Indre-et-Loire avec une couverture prioritaire
            sur les 13 villes listées ci-dessus et leurs communes voisines.
          </p>
        </div>
      </div>
    </section>

    <StickyContactBar />
  </div>
</template>
