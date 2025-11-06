<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">
        Location de bennes {{ city.displayName }} et alentours
      </h2>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        >
          <h3 class="text-2xl font-bold mb-4 text-gray-800">
            Notre service {{ city.displayName }}
          </h3>
          <div class="prose prose-lg text-gray-700 space-y-4">
            <p>{{ city.uniqueContent }}</p>
          </div>

          <div class="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div class="flex items-start">
              <UIcon name="i-heroicons-information-circle" class="text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p class="text-sm text-gray-700">
                  <strong>Livraison rapide {{ city.displayName }} :</strong>
                  Nous nous engageons à livrer votre benne sous 24h partout {{ city.displayName }}.
                  Appelez-nous au 06 01 37 04 43 pour un devis gratuit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 200 } }"
        >
          <h3 class="text-2xl font-bold mb-4 text-gray-800">
            Zones desservies depuis {{ city.name }}
          </h3>

          <div class="space-y-6">
            <div>
              <h4 class="font-bold text-lg mb-3 text-gray-800">Quartiers de {{ city.name }}</h4>
              <div class="flex flex-wrap gap-2">
                <span
                    v-for="neighborhood in city.neighborhoods"
                    :key="neighborhood"
                    class="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700"
                >
                  {{ neighborhood }}
                </span>
              </div>
            </div>

            <div>
              <h4 class="font-bold text-lg mb-3 text-gray-800">Communes à proximité</h4>
              <ul class="space-y-2">
                <li v-for="area in city.nearbyAreas" :key="area" class="flex items-center text-gray-700">
                  <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500 flex-shrink-0" />
                  {{ area }}
                </li>
              </ul>
            </div>

            <div class="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <div class="flex items-start">
                <UIcon name="i-heroicons-truck" class="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p class="text-sm text-gray-700">
                    <strong>Rayon d'intervention :</strong>
                    Nous couvrons {{ city.name }} ainsi que tout le reste de l'Indre et Loire (37).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { City } from '~/data/cities'

defineProps<{
  city: City
}>()
</script>
