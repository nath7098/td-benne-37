<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos services de location de bennes</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Découvrez nos différentes solutions adaptées à vos besoins spécifiques, que vous soyez particulier ou professionnel.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCardWithPhoto
            v-for="(service, index) in services"
            :key="index"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            :imageSrc="service.imageSrc"
            :delay="index * 100"
        />
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
          Appelez-nous pour un devis
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
    title: 'Bennes à gravats et déchets de construction',
    description: 'Idéale pour évacuer béton, briques, tuiles, terres et autres déchets de chantier.',
    icon: 'i-lucide-hammer',
    imageSrc: '/bennes/benne-gravat.JPG' // Cette URL est un placeholder, remplacez-la par l'URL de votre image
  },
  {
    title: 'Bennes espaces verts',
    description: 'Solution parfaite pour l\'évacuation des branches, feuilles, tontes de pelouse, haies et autres déchets végétaux.',
    icon: 'i-lucide-leaf',
    imageSrc: '/bennes/benne-vert.JPG'
  },
  {
    title: 'Bennes vide-maison',
    description: 'Pour évacuer meubles, électroménagers, objets encombrants et déchets divers lors de déménagements ou débarras.',
    icon: 'i-lucide-sofa',
    imageSrc: '/bennes/benne-vide-maison.JPG'
  },
  {
    title: 'Bennes à évacuation de ferraille',
    description: 'Collecte et recyclage de ferraille, métaux et matériaux métalliques de toutes sortes.',
    icon: 'i-lucide-wrench',
    imageSrc: '/bennes/benne-ferraille.JPG'
  },
  {
    title: 'Mini-bennes',
    description: 'Solutions compactes pour les espaces restreints et les petits volumes de déchets.',
    icon: 'i-lucide-truck',
    imageSrc: '/bennes/mini-benne.JPG'
  },
  {
    title: 'Bennes spéciales',
    description: 'Conteneurs adaptés pour les déchets spécifiques nécessitant un traitement particulier.',
    icon: 'i-lucide-alert-triangle',
    imageSrc: '/bennes/benne-speciale.JPG'
  }
];
</script>