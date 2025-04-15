<template>
  <div>
    <header class="relative">
      <div class="absolute top-4 left-0 right-0 z-10">
        <div class="container mx-auto px-4">
          <nav class="flex justify-between items-center">
            <NuxtLink to="/" class="text-white font-bold text-xl">
              TD Location de bennes 37
            </NuxtLink>
            <div class="hidden md:flex space-x-6">
              <NuxtLink v-for="(item, i) in navigationItems" :key="i" :to="item.to" class="text-white hover:text-yellow-300 transition-colors">
                {{ item.label }}
              </NuxtLink>
            </div>
            <UButton
                icon="i-heroicons-bars-3"
                color="white"
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
              <li class="flex items-center">
                <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-400" />
                <span>{{ contact.address }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">Informations</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/mentions-legales" class="hover:text-yellow-400 transition-colors">
                  Mentions légales
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cgv" class="hover:text-yellow-400 transition-colors">
                  Conditions générales de vente
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/confidentialite" class="hover:text-yellow-400 transition-colors">
                  Politique de confidentialité
                </NuxtLink>
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

const isMenuOpen = ref(false);
const contact = useContact();

const navigationItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '#services' },
  { label: 'Avantages', to: '#avantages' },
  { label: 'Devis', to: '#quote-form' },
  { label: 'Zone de couverture', to: '#zone-couverture' },
  { label: 'Contact', to: '#contact' }
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