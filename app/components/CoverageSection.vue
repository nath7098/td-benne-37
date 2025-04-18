<template>
  <section id="zone-couverture" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Notre zone d'intervention</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Nous intervenons dans un large périmètre pour vous offrir notre service de location de bennes.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
            class="rounded-xl overflow-hidden shadow-lg border border-gray-200"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0 }"
        >
          <img src="/zone.png" alt="Carte zone de couverture" class="w-full h-full object-cover" />
        </div>

        <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0 }"
        >
          <h3 class="text-2xl font-bold mb-6">Nous intervenons partout en indre et loire !</h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div
                v-for="(area, index) in coverageAreas"
                :key="index"
                class="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
            >
              <UIcon name="i-heroicons-map-pin" class="text-yellow-500" />
              <span>{{ area }}</span>
            </div>
          </div>

          <p class="text-gray-600 font-semibold mb-6">
            Vous ne trouvez pas votre ville ? Contactez-nous pour vérifier si nous pouvons intervenir dans votre zone.
          </p>

          <UButton
              size="lg"
              color="yellow"
              variant="solid"
              class="rounded-lg font-bold"
              :to="`tel:${contact.phone}`"
              target="_blank"
          >
            <template #leading>
              <UIcon name="i-heroicons-phone" />
            </template>
            Appelez-nous pour vérifier
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();

const coverageAreas = [
  "Tours",
  "Saint-Pierre-des-Corps",
  "Joué-lès-Tours",
  "Saint-Avertin",
  "Chambray-lès-Tours",
  "La Riche",
  "Ballan-Miré",
  "Fondettes",
  "Saint-Cyr-sur-Loire",
  "Montlouis-sur-Loire",
  "Vouvray",
  "Azay-le-Rideau",
  "Chinon",
  "Loches",
  "Amboise",
  "Langeais",
  "Château-Renault",
  "Descartes",
  "Sainte-Maure-de-Touraine",
  "Bléré",
  "Richelieu"
];
</script>