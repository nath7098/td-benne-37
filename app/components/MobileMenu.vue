<template>
  <div
      class="fixed inset-0 bg-gray-900 z-50 p-6"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :leave="{ opacity: 0 }"
  >
    <div class="flex justify-end mb-8">
      <UButton
          icon="i-heroicons-x-mark"
          color="yellow"
          variant="ghost"
          @click="$emit('close')"
      />
    </div>

    <div class="flex flex-col space-y-6">
      <NuxtLink
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          class="text-white text-xl py-2 border-b border-gray-800 hover:text-yellow-400 transition-colors"
          @click="$emit('close')"
      >
        {{ item.label }}
      </NuxtLink>
    </div>

    <div class="mt-12">
      <h3 class="text-white text-lg mb-4">Contact</h3>
      <div class="space-y-4">
        <a :href="`tel:${contact.phone}`" class="flex items-center text-white hover:text-yellow-400 transition-colors">
          <UIcon name="i-heroicons-phone" class="mr-2" />
          {{ contact.phone }}
        </a>
        <a :href="`mailto:${contact.email}`" class="flex items-center text-white hover:text-yellow-400 transition-colors">
          <UIcon name="i-heroicons-envelope" class="mr-2" />
          {{ contact.email }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContact } from '~/composables/useContact';

defineProps({
  items: {
    type: Array,
    required: true
  }
});

defineEmits(['close']);

const contact = useContact();
</script>