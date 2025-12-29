<template>
  <section id="services-terrassement" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos services de terrassement en Indre-et-Loire (37)</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Une gamme complète de prestations pour tous vos projets de terrassement à Tours, Chinon, Joué-lès-Tours et dans tout le département. Du plus simple au plus complexe.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(service, index) in services"
            :key="'ter-services-' + index"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-yellow-400"
        >
          <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
            <UIcon :name="service.icon" class="text-3xl text-white" />
          </div>
          <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
          <p class="text-gray-600 mb-4">{{ service.description }}</p>
          <ul class="space-y-2">
            <li v-for="(feature, idx) in service.features" :key="idx" class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
              <span class="text-sm text-gray-600">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 text-center">
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
          Discutez de votre projet avec nous
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();

const services = [
  {
    title: 'Excavation et décaissement',
    description: 'Terrassement pour fondations de maisons et bâtiments en Indre-et-Loire. Service professionnel à Tours, Chinon, Joué.',
    icon: 'i-lucide-shovel',
    features: [
      'Excavation pour fondations',
      'Décaissement de terrain',
      'Terrassement de sous-sol',
      'Création de tranchées'
    ]
  },
  {
    title: 'Nivellement de terrain',
    description: 'Mise à niveau et préparation de votre terrain pour construction ou aménagement partout dans le 37.',
    icon: 'i-lucide-align-horizontal-space-around',
    features: [
      'Nivellement précis au laser',
      'Mise à niveau de terrain',
      'Préparation pour construction',
      'Aplanissement de terrain'
    ]
  },
  {
    title: 'Remblaiement et compactage',
    description: 'Remplissage et compactage de terrains en Indre-et-Loire pour assurer une base solide et durable.',
    icon: 'i-lucide-layers',
    features: [
      'Remblaiement de fouilles',
      'Compactage du sol',
      'Apport de terre végétale',
      'Préparation pour engazonnement'
    ]
  },
  {
    title: 'Terrassement pour piscine',
    description: 'Excavation et préparation spécifique pour installation de piscine à Tours et dans tout le département 37.',
    icon: 'i-lucide-waves',
    features: [
      'Excavation sur mesure',
      'Nivellement du fond',
      'Évacuation des terres',
      'Préparation du terrain'
    ]
  },
  {
    title: 'Aménagement extérieur',
    description: 'Terrassement pour allées, terrasses, parking et espaces verts. Intervention rapide en Touraine.',
    icon: 'i-lucide-home',
    features: [
      'Terrassement pour allée',
      'Préparation de terrasse',
      'Création de parking',
      'Aménagement paysager'
    ]
  },
  {
    title: 'Démolition et déblaiement',
    description: 'Démolition d\'ouvrages existants et évacuation des gravats avec bennes adaptées.',
    icon: 'i-lucide-hammer',
    features: [
      'Démolition d\'ouvrages',
      'Déblaiement de terrain',
      'Évacuation de gravats',
      'Fourniture de bennes'
    ]
  }
];
</script>
