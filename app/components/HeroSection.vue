<template>
  <section class="relative h-screen flex items-center overflow-hidden bg-gray-900">
    <!-- Background avec overlay -->
    <div class="absolute inset-0 z-0">
      <NuxtImg src="/bennes/benne-ferraille.JPG" alt="Location de bennes" class="w-full h-full object-cover opacity-40" loading="eager" />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/80" />
      <div class="absolute inset-0 bg-pattern opacity-10"/>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Location de bennes <span class="text-yellow-400">professionnelle</span>
        </h1>
        <p class="text-xl text-gray-200 mb-8">
          Solutions de gestion des déchets rapides et efficaces pour particuliers et professionnels
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <UButton
              size="xl"
              color="yellow"
              variant="link"
              class="rounded-lg font-bold"
              :to="`tel:${contact.phone}`"
              target="_blank"
          >
            <template #leading>
              <UIcon name="i-heroicons-phone" />
            </template>
            {{ contact.phone }}
          </UButton>

          <UButton
              size="xl"
              color="yellow"
              variant="link"
              class="rounded-lg font-bold"
              :to="`mailto:${contact.email}`"
              target="_blank"
          >
            <template #leading>
              <UIcon name="i-heroicons-envelope" />
            </template>
            {{ contact.email }}
          </UButton>
        </div>

        <div class="flex flex-wrap gap-4 text-white mb-8">
          <div class="flex items-center">
            <UIcon name="i-heroicons-clock" class="mr-2 text-yellow-400" />
            <span>Réponse sous 24h</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-check-badge" class="mr-2 text-yellow-400" />
            <span>Devis gratuit</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="mr-2 text-yellow-400" />
            <span>Tout l'Indre et Loire '37)</span>
          </div>
        </div>

        <!-- CTA Terrassement -->
        <div class="relative">
          <div class="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 shadow-2xl border-2 border-emerald-400 hover:shadow-emerald-500/50 transition-all duration-300 group">
            <div class="absolute -top-3 -right-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-gray-900 animate-pulse">
                NOUVEAU
              </span>
            </div>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <UIcon name="i-lucide-shovel" class="text-4xl text-white" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white mb-1">Services de Terrassement</h3>
                <p class="text-emerald-50 text-sm">
                  Excavation, nivellement, remblaiement - Intervention dans tout le département
                </p>
              </div>
              <div class="flex-shrink-0">
                <NuxtLink to="/terrassement">
                  <UButton
                      size="lg"
                      color="white"
                      variant="solid"
                      class="rounded-lg font-bold group-hover:scale-105 transition-transform"
                  >
                    <template #trailing>
                      <UIcon name="i-heroicons-arrow-right" />
                    </template>
                    Découvrir
                  </UButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
      <UButton
          variant="ghost"
          color="white"
          icon="i-heroicons-chevron-down"
          class="rounded-full"
          to="#services"
      />
    </div>
  </section>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();
</script>

<style scoped>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>