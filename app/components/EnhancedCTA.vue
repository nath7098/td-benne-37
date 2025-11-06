<template>
  <section class="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600">
    <div
        v-motion
        class="container mx-auto px-4"
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
    >
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Contenu texte -->
          <div class="p-8 md:p-12 flex flex-col justify-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Besoin d'une benne rapidement ?</h2>
            <p class="text-gray-600 mb-8">
              Obtenez un devis gratuit et sans engagement en quelques minutes. Notre équipe vous répond dans les 24h.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton
                  size="xl"
                  color="yellow"
                  variant="solid"
                  class="rounded-lg font-bold"
                  :to="`tel:${contact.phone}`"
                  target="_blank"
              >
                <template #leading>
                  <UIcon name="i-heroicons-phone" />
                </template>
                {{ contact.phone }}
              </UButton>
              <UButton
                  size="xl"
                  color="gray"
                  variant="outline"
                  class="rounded-lg font-bold"
                  @click="scrollToForm"
              >
                <template #leading>
                  <UIcon name="i-heroicons-document-text" />
                </template>
                Demande de devis
              </UButton>
            </div>
          </div>

          <!-- Image -->
          <div class="relative h-64 md:h-auto">
            <NuxtImg src="/benne.png" alt="Location de benne" class="w-full h-full object-cover" loading="lazy" />
            <div class="absolute inset-0 bg-gray-900/20 flex items-center justify-center">
              <div class="bg-white/90 rounded-xl p-6 shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                <div class="text-center">
                  <h3 class="text-2xl font-bold text-yellow-600 mb-2">Livraison sous 24h</h3>
                  <p class="text-gray-700">Service rapide et professionnel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();

const scrollToForm = () => {
  const formElement = document.getElementById('quote-form');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>