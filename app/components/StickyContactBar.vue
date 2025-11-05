<template>
  <div
      v-motion
      class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-3 px-4 z-50 shadow-lg md:hidden"
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
  >
    <div class="flex justify-between items-center">
      <UButton
          block
          size="lg"
          color="yellow"
          variant="solid"
          class="mr-2 rounded-lg font-bold"
          :to="`tel:${contact.phone}`"
          target="_blank"
      >
        <template #leading>
          <UIcon name="i-heroicons-phone" />
        </template>
        Appeler
      </UButton>

      <UButton
          block
          size="lg"
          color="white"
          variant="outline"
          class="rounded-lg font-bold"
          :to="`mailto:${contact.email}`"
          target="_blank"
      >
        <template #leading>
          <UIcon name="i-heroicons-envelope" />
        </template>
        Email
      </UButton>
    </div>
  </div>

  <div
      v-motion
      class="fixed right-6 bottom-6 hidden md:block z-50"
      :initial="{ opacity: 0, scale: 0.8 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: 500 } }"
  >
    <UButton
        size="xl"
        color="yellow"
        variant="solid"
        class="rounded-full h-16 w-16 shadow-lg"
        :to="`tel:${contact.phone}`"
        target="_blank"
    >
      <UIcon name="i-heroicons-phone" class="text-2xl" />
    </UButton>
  </div>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();
</script>