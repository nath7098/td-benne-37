<template>
  <section id="avantages" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos avantages</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Découvrez pourquoi nos clients nous font confiance pour leurs besoins en location de bennes.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(advantage, index) in advantages"
            :key="'advantage-' + index"
            v-motion
            class="text-center p-6"
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: index * 100 } }"
        >
          <div class="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4 text-white">
            <UIcon :name="advantage.icon" class="text-2xl" />
          </div>
          <h3 class="text-xl font-bold mb-3">{{ advantage.title }}</h3>
          <p class="text-gray-600">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const advantages = [
  {
    title: 'Rapidité d\'intervention',
    description: 'Livraison et enlèvement dans les 24h suivant votre demande pour répondre à vos besoins urgents.',
    icon: 'i-heroicons-clock'
  },
  {
    title: 'Prix compétitifs',
    description: 'Des tarifs transparents et adaptés à tous les budgets, sans frais cachés ni surprises.',
    icon: 'i-heroicons-banknotes'
  },
  {
    title: 'Service local',
    description: 'Une entreprise de proximité qui connaît parfaitement les spécificités de votre région.',
    icon: 'i-heroicons-map'
  },
  {
    title: 'Expertise professionnelle',
    description: 'Notre équipe expérimentée vous conseille sur la solution la plus adaptée à votre projet.',
    icon: 'i-heroicons-academic-cap'
  },
  {
    title: 'Tri et recyclage',
    description: 'Nous assurons le tri et la valorisation de vos déchets dans le respect de l\'environnement.',
    icon: 'i-heroicons-arrow-path'
  },
  {
    title: 'Service client réactif',
    description: 'Une équipe disponible et à l\'écoute pour répondre à toutes vos questions et demandes.',
    icon: 'i-heroicons-chat-bubble-left-right'
  }
];
</script>