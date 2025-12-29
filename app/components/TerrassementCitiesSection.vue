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

      <!-- Contenu SEO détaillé par ville -->
      <div class="max-w-6xl mx-auto mb-12">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Tours -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 class="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500" />
              Terrassement Tours
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Spécialiste du <strong>terrassement à Tours (37000)</strong>, nous intervenons dans tous les quartiers : centre-ville, Deux-Lions, Sanitas, Rabelais. Excavation, nivellement et remblaiement pour vos projets de construction ou rénovation.
            </p>
          </div>

          <!-- Chinon -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 class="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500" />
              Terrassement Chinon
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              <strong>Terrassement à Chinon (37500)</strong> : nos équipes maîtrisent les contraintes du patrimoine historique. Intervention pour terrassement de maison, piscine ou aménagement extérieur dans tout le Chinonais.
            </p>
          </div>

          <!-- Joué-lès-Tours -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 class="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500" />
              Terrassement Joué-lès-Tours
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Expert en <strong>terrassement à Joué-lès-Tours (37300)</strong>. La Rabière, Beaulieu, Les Atlantes : nous couvrons toute la ville. Service rapide pour particuliers et entreprises du BTP.
            </p>
          </div>

          <!-- Fondettes -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 class="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500" />
              Terrassement Fondettes
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              <strong>Terrassement à Fondettes (37230)</strong> : travaux de terrassement pour maison, excavation, nivellement. Intervention rapide à Vallières, Lussault et dans tous les quartiers.
            </p>
          </div>

          <!-- Montlouis-sur-Loire -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 class="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500" />
              Terrassement Montlouis
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Service de <strong>terrassement à Montlouis-sur-Loire (37270)</strong>. Terrassement pour construction, piscine, aménagement paysager. Expertise locale du terrain de coteau.
            </p>
          </div>

          <!-- Langeais -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 class="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500" />
              Terrassement Langeais
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              <strong>Terrassement à Langeais (37130)</strong> et environs. Excavation pour fondation, nivellement de terrain, création d'accès. Service professionnel adapté aux zones rurales.
            </p>
          </div>

          <!-- Azay-le-Rideau -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 class="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500" />
              Terrassement Azay
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              <strong>Terrassement à Azay-le-Rideau (37190)</strong> : respect du patrimoine architectural. Terrassement pour rénovation, construction neuve, aménagement extérieur.
            </p>
          </div>

          <!-- Châteaurenault -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 class="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500" />
              Terrassement Châteaurenault
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              <strong>Terrassement à Châteaurenault (37110)</strong> : nord Touraine. Excavation, nivellement, remblaiement. Intervention rapide La Gaudellerie, Les Hâtifs et tous secteurs.
            </p>
          </div>

          <!-- Bourgueil -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 class="text-xl font-bold mb-3 text-gray-800 flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-500" />
              Terrassement Bourgueil
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              <strong>Terrassement à Bourgueil (37140)</strong> : zone viticole. Adaptation aux accès étroits, terrassement pour cave, maison, ou aménagement. Service professionnel.
            </p>
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
                  <span>Terrassement Tours centre et périphérie</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Joué-lès-Tours, Fondettes, La Ville-aux-Dames</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Montlouis-sur-Loire, Notre-Dame-d'Oé, Savonnières</span>
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
                  <span>Terrassement Chinon, Azay-le-Rideau, Langeais</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Bourgueil, Châteaurenault</span>
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
