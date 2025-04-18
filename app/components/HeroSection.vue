<template>
  <section class="relative h-screen flex items-center overflow-hidden bg-gray-900">
    <!-- Background avec overlay -->
    <div class="absolute inset-0 z-0">
      <img src="/bennes/benne-ferraille.JPG" alt="Location de bennes" class="w-full h-full object-cover opacity-40" />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/80"></div>
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
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

        <div class="flex items-center gap-2 text-gray-300">
          <UIcon name="i-heroicons-check-circle" class="text-yellow-400" />
          <span>Réponse sous 24h</span>
          <span class="mx-2">•</span>
          <UIcon name="i-heroicons-check-circle" class="text-yellow-400" />
          <span>Prix compétitifs</span>
          <span class="mx-2">•</span>
          <UIcon name="i-heroicons-check-circle" class="text-yellow-400" />
          <span>Service local</span>
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