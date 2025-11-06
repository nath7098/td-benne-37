<template>
  <section class="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden bg-gray-900">
    <!-- Background avec overlay -->
    <div class="absolute inset-0 z-0">
      <NuxtImg src="/bennes/benne-ferraille.JPG" alt="Location de bennes" class="w-full h-full object-cover opacity-40" loading="eager" />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/80" />
      <div class="absolute inset-0 bg-pattern opacity-10" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Location de bennes <span class="text-yellow-400">{{ city.displayName }}</span>
        </h1>
        <p class="text-xl text-gray-200 mb-4">
          Service professionnel et rapide {{ city.displayName }} ({{ city.postalCode.slice(0, 5) }})
        </p>
        <p class="text-lg text-gray-300 mb-8">
          Livraison sous 24h • {{ city.population }} habitants • Tous types de déchets
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <UButton
              size="xl"
              color="yellow"
              to="#quote-form"
              class="font-bold"
          >
            <template #leading>
              <UIcon name="i-heroicons-document-text" />
            </template>
            Devis gratuit {{ city.displayName }}
          </UButton>
          <UButton
              size="xl"
              color="white"
              variant="outline"
              :href="`tel:0601370443`"
              class="font-bold"
          >
            <template #leading>
              <UIcon name="i-heroicons-phone" />
            </template>
            06 01 37 04 43
          </UButton>
        </div>

        <div class="flex flex-wrap gap-4 text-white">
          <div class="flex items-center">
            <UIcon name="i-heroicons-clock" class="mr-2 text-yellow-400" />
            <span>Livraison 24h</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-check-badge" class="mr-2 text-yellow-400" />
            <span>Devis gratuit</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-400" />
            <span>{{ city.name }} et environs</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { City } from '~/data/cities'

defineProps<{
  city: City
}>()
</script>
