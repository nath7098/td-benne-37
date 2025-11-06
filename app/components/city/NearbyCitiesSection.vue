<template>
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4">
      <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center">
        Nous intervenons aussi dans les villes voisines
      </h3>
      <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        TD Location de Bennes 37 dessert l'ensemble de l'Indre-et-Loire. Découvrez nos services dans les communes à proximité.
      </p>

      <div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        <NuxtLink
            v-for="nearbyCity in nearbyCities"
            :key="nearbyCity.slug"
            :to="`/location-benne-${nearbyCity.slug}`"
            class="px-5 py-3 bg-white rounded-lg hover:bg-yellow-50 transition-all border border-gray-200 hover:border-yellow-400 hover:shadow-md group"
        >
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-map-pin" class="text-gray-400 group-hover:text-yellow-500 transition-colors" />
            <span class="font-medium text-gray-800 group-hover:text-yellow-700">{{ nearbyCity.name }}</span>
            <span class="text-sm text-gray-500">({{ nearbyCity.postalCode.slice(0, 5) }})</span>
          </div>
        </NuxtLink>
      </div>

      <div class="mt-8 text-center">
        <NuxtLink to="/villes" class="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
          <span>Voir toutes nos zones d'intervention</span>
          <UIcon name="i-heroicons-arrow-right" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { City } from '~/data/cities'

defineProps<{
  nearbyCities: City[]
}>()
</script>
