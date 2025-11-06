<template>
  <section id="tarifs" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos tarifs de location de bennes</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Tarification transparente et compétitive. Devis gratuit sous 24h.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Mini benne -->
        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold mb-2">Mini benne</h3>
            <div class="text-4xl font-bold text-yellow-500 mb-2">À partir de 150€</div>
            <p class="text-gray-500">3-5 m³</p>
          </div>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-green-500 mr-2 mt-1" />
              <span>Idéal petits travaux</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-green-500 mr-2 mt-1" />
              <span>Accès difficile</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-green-500 mr-2 mt-1" />
              <span>Livraison 24h</span>
            </li>
          </ul>
          <UButton class="w-full mt-6" color="yellow" to="#quote-form">
            Demander un devis
          </UButton>
        </div>

        <!-- Standard benne -->
        <div class="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-400 relative">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              PLUS POPULAIRE
            </span>
          </div>
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold mb-2">Benne standard</h3>
            <div class="text-4xl font-bold text-yellow-500 mb-2">À partir de 180€</div>
            <p class="text-gray-500">8-15 m³</p>
          </div>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-green-500 mr-2 mt-1" />
              <span>Travaux moyens/grands</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-green-500 mr-2 mt-1" />
              <span>Tous types de déchets</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-green-500 mr-2 mt-1" />
              <span>Livraison 24h</span>
            </li>
          </ul>
          <UButton class="w-full mt-6" color="yellow" to="#quote-form">
            Demander un devis
          </UButton>
        </div>

        <!-- Grande benne -->
        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold mb-2">Grande benne</h3>
            <div class="text-4xl font-bold text-yellow-500 mb-2">À partir de 250€</div>
            <p class="text-gray-500">20-30 m³</p>
          </div>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-green-500 mr-2 mt-1" />
              <span>Gros chantiers</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-green-500 mr-2 mt-1" />
              <span>Professionnels BTP</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-green-500 mr-2 mt-1" />
              <span>Tarifs dégressifs</span>
            </li>
          </ul>
          <UButton class="w-full mt-6" color="yellow" to="#quote-form">
            Demander un devis
          </UButton>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-4">
          <UIcon name="i-heroicons-information-circle" class="inline mr-1" />
          Les tarifs incluent la livraison, la location et l'enlèvement dans un rayon de 30km autour de Tours
        </p>
        <p class="text-sm text-gray-500">
          Tarifs indicatifs. Le prix final dépend du type de déchets, de la durée de location et de votre localisation.
        </p>
      </div>
    </div>
  </section>
</template>
