<template>
  <div>
    <header class="relative">
      <div class="absolute top-4 left-0 right-0 z-10">
        <div class="container mx-auto px-4">
          <nav class="flex justify-between items-start">
            <NuxtLink to="/" class="text-white font-bold text-xl">
              <img src="/logo-no-bg.png" class="w-[100px] h-[100px]" >
            </NuxtLink>
            <div class="hidden md:flex space-x-6 pt-4">
              <NuxtLink v-for="(item, i) in navigationItems" :key="i" :to="item.to" class="text-white hover:text-yellow-300 transition-colors">
                {{ item.label }}
              </NuxtLink>
            </div>
            <UButton
                icon="i-heroicons-bars-3"
                color="yellow"
                variant="ghost"
                class="md:hidden"
                @click="isMenuOpen = !isMenuOpen"
            />
          </nav>
        </div>
      </div>

      <MobileMenu v-if="isMenuOpen" :items="navigationItems" @close="isMenuOpen = false" />

      <HeroSection />
    </header>

    <main>
      <ServicesSection />
      <EnhancedCTA />
      <AdvantagesSection />
      <QuoteForm />
      <CoverageSection />
    </main>

    <StickyContactBar />

    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-bold mb-4">TD Location de bennes 37</h3>
            <p class="text-gray-400">
              Location de bennes et solutions de gestion des déchets pour particuliers et professionnels.
            </p>
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
            </ul>
          </div>
          <div/>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {{ new Date().getFullYear() }} TD location de bennes 37. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useContact } from '~/composables/useContact';

definePageMeta({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'TD Location de Bennes 37',
        image: 'https://td-locationbenne37.fr/logo-transparent.png',
        '@id': 'https://td-locationbenne37.fr',
        url: 'https://td-locationbenne37.fr',
        telephone: '+33 6 01 37 04 43',
        email: 'locationbenne37@gmail.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tours',
          addressRegion: 'Indre-et-Loire',
          postalCode: '37000',
          addressCountry: 'FR'
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Tours'
          },
          {
            '@type': 'State',
            name: 'Indre-et-Loire'
          }
        ],
        description: 'Location de bennes à Tours et en Indre-et-Loire (37). Service rapide et professionnel pour particuliers et entreprises.',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '12:00'
          }
        ]
      })
    }
  ]
});

const isMenuOpen = ref(false);
const contact = useContact();

const navigationItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '#services' },
  { label: 'Avantages', to: '#avantages' },
  { label: 'Devis', to: '#quote-form' },
  { label: 'Zone de couverture', to: '#zone-couverture' }
];
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

:root {
  scroll-behavior: smooth;
}

body {
  font-family: 'Manrope', sans-serif;
  color: #333;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>