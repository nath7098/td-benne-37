<template>
  <section id="villes" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Location de bennes l'Indre-et-Loire
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          TD Location de Bennes 37 intervient partout dans le département avec un service de proximité rapide et professionnel
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-8">
        <NuxtLink
            v-for="city in cities"
            :key="city.slug"
            :to="`/location-benne-${city.slug}`"
            class="px-5 py-3 bg-white rounded-lg shadow hover:shadow-lg transition-all border border-gray-200 hover:border-yellow-400 group"
        >
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-map-pin" class="text-gray-400 group-hover:text-yellow-500 transition-colors" />
            <span class="font-medium text-gray-800 group-hover:text-yellow-700 transition-colors">{{ city.name }}</span>
            <span class="text-sm text-gray-500">({{ city.postalCode.slice(0, 5) }})</span>
          </div>
        </NuxtLink>
      </div>

      <div class="text-center">
        <NuxtLink
            to="/villes"
            class="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium text-lg transition-colors group"
        >
          <span>Voir toutes nos zones d'intervention</span>
          <UIcon name="i-heroicons-arrow-right" class="transform group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

      <div class="mt-12 max-w-4xl mx-auto">
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="p-6 bg-white rounded-xl shadow-sm">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-map-pin" class="text-3xl text-yellow-600" />
            </div>
            <h3 class="font-bold text-lg mb-2">Indre et Loire</h3>
            <p class="text-gray-600 text-sm">Couverture complète de l'Indre-et-Loire</p>
          </div>
          <div class="p-6 bg-white rounded-xl shadow-sm">
            <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-clock" class="text-3xl text-emerald-600" />
            </div>
            <h3 class="font-bold text-lg mb-2">Livraison 24h</h3>
            <p class="text-gray-600 text-sm">Dans toutes nos zones d'intervention</p>
          </div>
          <div class="p-6 bg-white rounded-xl shadow-sm">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-check-badge" class="text-3xl text-blue-600" />
            </div>
            <h3 class="font-bold text-lg mb-2">Service local</h3>
            <p class="text-gray-600 text-sm">Connaissance du terrain et réactivité</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cityList } from '~/data/cities'

const cities = cityList
</script>
