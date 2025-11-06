<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">TD Location de bennes 37</h3>
          <p class="text-gray-400">
            Location de bennes et solutions de gestion des déchets pour particuliers et professionnels.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/#services" class="text-gray-400 hover:text-yellow-400 transition-colors">Nos Services</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#avantages" class="text-gray-400 hover:text-yellow-400 transition-colors">Nos Avantages</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#faq" class="text-gray-400 hover:text-yellow-400 transition-colors">Questions Fréquentes</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#quote-form" class="text-gray-400 hover:text-yellow-400 transition-colors">Demande de Devis</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Nos villes</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/location-benne-tours" class="text-gray-400 hover:text-yellow-400 transition-colors">Tours</NuxtLink></li>
            <li><NuxtLink to="/location-benne-fondettes" class="text-gray-400 hover:text-yellow-400 transition-colors">Fondettes</NuxtLink></li>
            <li><NuxtLink to="/location-benne-joue-les-tours" class="text-gray-400 hover:text-yellow-400 transition-colors">Joué-lès-Tours</NuxtLink></li>
            <li><NuxtLink to="/location-benne-chinon" class="text-gray-400 hover:text-yellow-400 transition-colors">Chinon</NuxtLink></li>
            <li><NuxtLink to="/villes" class="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">+ 9 autres villes →</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <UIcon name="i-heroicons-phone" class="mr-2 text-yellow-400" />
              <a :href="`tel:${contact.phone}`" class="hover:text-yellow-400 transition-colors">{{ contact.phone }}</a>
            </li>
            <li class="flex items-center">
              <UIcon name="i-heroicons-envelope" class="mr-2 text-yellow-400" />
              <a :href="`mailto:${contact.email}`" class="hover:text-yellow-400 transition-colors">{{ contact.email }}</a>
            </li>
            <li class="flex items-center mt-4">
              <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-400" />
              <span class="text-gray-400">Tours, Indre-et-Loire (37)</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>© {{ new Date().getFullYear() }} TD location de bennes 37. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useContact } from '~/composables/useContact'

const contact = useContact()
</script>
