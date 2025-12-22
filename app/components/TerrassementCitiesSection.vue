<template>
  <section id="villes-terrassement" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Terrassement dans toute l'Indre-et-Loire
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          TD Location de Bennes 37 réalise vos travaux de terrassement dans tout le département avec la même expertise et réactivité
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-12">
        <div
            v-for="city in cities"
            :key="city.slug"
            class="px-5 py-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
        >
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-map-pin" class="text-yellow-500" />
            <span class="font-medium text-gray-800">{{ city.name }}</span>
            <span class="text-sm text-gray-500">({{ city.postalCode.slice(0, 5) }})</span>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-200">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Nos zones d'intervention privilégiées</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-lg mb-3 text-gray-800 flex items-center">
                <UIcon name="i-heroicons-building-office-2" class="mr-2 text-yellow-600" />
                Agglomération tourangelle
              </h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Tours centre et périphérie</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Joué-lès-Tours, Fondettes, La Ville-aux-Dames</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Montlouis-sur-Loire, Notre-Dame-d'Oé</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-lg mb-3 text-gray-800 flex items-center">
                <UIcon name="i-heroicons-home-modern" class="mr-2 text-yellow-600" />
                Zones rurales et touristiques
              </h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Chinon, Azay-le-Rideau, Langeais</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Bourgueil, Savonnières, Châteaurenault</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Château-la-Vallière et communes environnantes</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-6 p-4 bg-white rounded-lg">
            <p class="text-gray-700">
              <strong>Votre ville n'est pas listée ?</strong> Contactez-nous ! Nous intervenons dans tout le département de l'Indre-et-Loire (37) et pouvons étudier toute demande de terrassement.
            </p>
          </div>
        </div>

        <div class="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div class="p-6 bg-gray-50 rounded-xl shadow-sm">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-map" class="text-3xl text-yellow-600" />
            </div>
            <h3 class="font-bold text-lg mb-2">14 villes</h3>
            <p class="text-gray-600 text-sm">Zones d'intervention principales</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl shadow-sm">
            <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-truck" class="text-3xl text-emerald-600" />
            </div>
            <h3 class="font-bold text-lg mb-2">Service rapide</h3>
            <p class="text-gray-600 text-sm">Intervention sous 48h partout en Indre-et-Loire</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl shadow-sm">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-globe-europe-africa" class="text-3xl text-blue-600" />
            </div>
            <h3 class="font-bold text-lg mb-2">Tout le 37</h3>
            <p class="text-gray-600 text-sm">Couverture complète du département</p>
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
