<template>
  <div>
    <header class="relative">
      <div class="absolute top-4 left-0 right-0 z-10">
        <div class="container mx-auto px-4">
          <nav class="flex justify-between items-start">
            <NuxtLink to="/" class="text-white font-bold text-xl">
              <NuxtImg src="/logo-no-bg.png" alt="TD Location de Bennes 37 - Logo" class="w-[100px] h-[100px]" loading="eager" />
            </NuxtLink>
            <div class="hidden md:flex space-x-6 pt-4 items-center">
              <NuxtLink v-for="(item, i) in navigationItems.filter(item => !item.dropdown)" :key="i" :to="item.to" class="text-white hover:text-yellow-300 transition-colors">
                {{ item.label }}
              </NuxtLink>
              <UDropdownMenu :items="cityDropdownItems">
                <button class="text-white hover:text-yellow-300 transition-colors flex items-center gap-1">
                  <span>Villes</span>
                  <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" />
                </button>
              </UDropdownMenu>
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
      <HowItWorksSection />
      <AdvantagesSection />
      <PricingSection />
      <CitiesSection />
      <FAQSection />
      <QuoteForm />
      <CoverageSection />
    </main>

    <StickyContactBar />

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
                <a href="#services" class="text-gray-400 hover:text-yellow-400 transition-colors">Nos Services</a>
              </li>
              <li>
                <a href="#avantages" class="text-gray-400 hover:text-yellow-400 transition-colors">Nos Avantages</a>
              </li>
              <li>
                <a href="#tarifs" class="text-gray-400 hover:text-yellow-400 transition-colors">Nos Tarifs</a>
              </li>
              <li>
                <a href="#faq" class="text-gray-400 hover:text-yellow-400 transition-colors">Questions Fréquentes</a>
              </li>
              <li>
                <a href="#quote-form" class="text-gray-400 hover:text-yellow-400 transition-colors">Demande de Devis</a>
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
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://td-locationbenne37.fr'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://td-locationbenne37.fr#services'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Tarifs',
                item: 'https://td-locationbenne37.fr#tarifs'
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Contact',
                item: 'https://td-locationbenne37.fr#quote-form'
              }
            ]
          },
          {
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
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Quel est le délai de livraison d\'une benne à Tours ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nous livrons votre benne sous 24h suivant votre demande dans toute la région de Tours et l\'Indre-et-Loire (37).'
                }
              },
              {
                '@type': 'Question',
                name: 'Quels types de déchets puis-je mettre dans une benne ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nos bennes acceptent les gravats, déchets de chantier, déchets verts, bois, ferraille et encombrants. Les déchets dangereux (amiante, produits chimiques) nécessitent une benne spécifique. Contactez-nous pour connaître la benne adaptée à vos déchets.'
                }
              },
              {
                '@type': 'Question',
                name: 'Combien coûte la location d\'une benne ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Le prix varie selon la taille de la benne (5m³ à 30m³), le type de déchets et la durée de location. Nos tarifs commencent à partir de 180€ TTC pour une benne de 8m³. Demandez un devis gratuit pour obtenir un prix exact adapté à votre besoin.'
                }
              },
              {
                '@type': 'Question',
                name: 'Quelle taille de benne choisir ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pour des travaux de rénovation domestique : benne 8-10m³. Pour un chantier moyen ou débarras complet : benne 15m³. Pour gros chantiers : benne 20-30m³. Notre équipe vous conseille gratuitement sur la taille adaptée à votre projet.'
                }
              },
              {
                '@type': 'Question',
                name: 'Comment faire une demande de devis ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Vous pouvez remplir notre formulaire en ligne ou nous contacter directement au 06 01 37 04 43. Nous vous répondons sous 24h avec un devis gratuit et sans engagement.'
                }
              }
            ]
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
  { label: 'Tarifs', to: '#tarifs' },
  { label: 'Avantages', to: '#avantages' },
  { label: 'FAQ', to: '#faq' },
  { label: 'Devis', to: '#quote-form' }
];

const cityDropdownItems = [
  {
    label: 'Tours',
    to: '/location-benne-tours',
    icon: 'i-heroicons-map-pin'
  },
  {
    label: 'Fondettes',
    to: '/location-benne-fondettes',
    icon: 'i-heroicons-map-pin'
  },
  {
    label: 'Joué-lès-Tours',
    to: '/location-benne-joue-les-tours',
    icon: 'i-heroicons-map-pin'
  },
  {
    label: 'Chinon',
    to: '/location-benne-chinon',
    icon: 'i-heroicons-map-pin'
  },
  {
    type: 'separator'
  },
  {
    label: 'Voir toutes les villes',
    to: '/villes',
    icon: 'i-heroicons-arrow-right'
  }
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