<template>
  <header :class="[
    'text-white py-4 z-50',
    transparent ? 'absolute top-0 left-0 right-0' : 'bg-gray-900 sticky top-0 shadow-lg'
  ]">
    <div class="container mx-auto px-4">
      <nav class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <NuxtImg
            src="/logo-no-bg.png"
            alt="TD Location de Bennes 37"
            :class="transparent ? 'w-[100px] h-[100px]' : 'w-[60px] h-[60px]'"
            loading="eager"
          />
          <div v-if="!transparent" class="hidden sm:block">
            <div class="font-bold text-lg">TD Location de Bennes 37</div>
            <div class="text-xs text-gray-400">Service rapide en Indre-et-Loire</div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div :class="['hidden md:flex items-center space-x-6', transparent ? 'pt-4' : '']">
          <NuxtLink to="/" :class="transparent ? 'text-white hover:text-yellow-300 transition-colors' : 'text-white hover:text-yellow-400 transition-colors'">
            Accueil
          </NuxtLink>
          <NuxtLink to="#services" :class="transparent ? 'text-white hover:text-yellow-300 transition-colors' : 'text-white hover:text-yellow-400 transition-colors'">
            Services
          </NuxtLink>
          <NuxtLink to="#tarifs" :class="transparent ? 'text-white hover:text-yellow-300 transition-colors' : 'text-white hover:text-yellow-400 transition-colors'">
            Tarifs
          </NuxtLink>
          <UDropdownMenu :items="cityDropdownItems">
            <button :class="transparent ? 'text-white hover:text-yellow-300 transition-colors flex items-center gap-1' : 'text-white hover:text-yellow-400 transition-colors flex items-center gap-1'">
              <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
              <span>Villes</span>
              <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" />
            </button>
          </UDropdownMenu>
          <NuxtLink to="#faq" :class="transparent ? 'text-white hover:text-yellow-300 transition-colors' : 'text-white hover:text-yellow-400 transition-colors'">
            FAQ
          </NuxtLink>
          <UButton color="yellow" size="sm" to="#quote-form">
            <template #leading>
              <UIcon name="i-heroicons-document-text" />
            </template>
            Devis Gratuit
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <UButton
          icon="i-heroicons-bars-3"
          color="yellow"
          variant="ghost"
          class="md:hidden"
          @click="isMenuOpen = !isMenuOpen"
        />
      </nav>
    </div>

    <!-- Mobile Menu -->
    <MobileMenu v-if="isMenuOpen" :items="navigationItems" @close="isMenuOpen = false" />
  </header>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '#ui/components/DropdownMenu.vue';

interface Props {
  transparent?: boolean
}

defineProps<Props>()

const isMenuOpen = ref(false)

const navigationItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Tarifs', to: '/#tarifs' },
  { label: 'Villes', to: '/villes' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Devis', to: '/#quote-form' }
]

const cityDropdownItems: DropdownMenuItem[] = [
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
]
</script>
