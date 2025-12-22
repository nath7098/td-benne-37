<template>
  <section id="avantages-terrassement" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Pourquoi choisir TD Bennes 37 pour vos travaux de terrassement ?</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Une expertise locale et un savoir-faire reconnu pour tous vos projets de terrassement en Indre-et-Loire.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(advantage, index) in advantages"
            :key="'terrassement-' + index"
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
    title: 'Équipement professionnel',
    description: 'Matériel de terrassement moderne et performant : pelles mécaniques, mini-pelles, niveleuses et compacteurs.',
    icon: 'i-heroicons-wrench-screwdriver'
  },
  {
    title: 'Expertise technique',
    description: 'Équipe qualifiée et expérimentée dans tous types de travaux de terrassement, du plus simple au plus complexe.',
    icon: 'i-heroicons-academic-cap'
  },
  {
    title: 'Intervention rapide',
    description: 'Disponibilité sous 48h après acceptation du devis. Service réactif pour vos projets urgents.',
    icon: 'i-heroicons-clock'
  },
  {
    title: 'Tarifs transparents',
    description: 'Devis détaillé et gratuit. Prix compétitifs sans frais cachés. Paiement échelonné possible.',
    icon: 'i-heroicons-banknotes'
  },
  {
    title: 'Service complet',
    description: 'De l\'étude du terrain à l\'évacuation des terres. Fourniture de bennes incluse pour l\'évacuation des gravats.',
    icon: 'i-heroicons-squares-plus'
  },
  {
    title: 'Connaissance locale',
    description: 'Parfaite maîtrise du territoire et des spécificités géologiques de l\'Indre-et-Loire.',
    icon: 'i-heroicons-map'
  }
];
</script>
