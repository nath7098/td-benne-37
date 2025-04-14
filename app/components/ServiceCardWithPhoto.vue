<template>
  <div
      class="group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-yellow-300"
      :style="{ transitionDelay: `${delay}ms` }"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0 }"
  >
    <div class="relative overflow-hidden h-48">
      <!-- Image avec effet de zoom au survol -->
      <img
          :src="imageSrc"
          :alt="title"
          class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />

      <!-- Overlay avec dégradé -->
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

      <!-- Icône flottante -->
      <div class="absolute top-4 left-4 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-white transform transition-transform duration-300 group-hover:rotate-12">
        <UIcon :name="icon" class="text-xl" />
      </div>

      <!-- Titre sur l'image -->
      <h3 class="absolute bottom-4 left-4 right-4 text-white text-xl font-bold">{{ title }}</h3>
    </div>

    <div class="p-6 bg-white">
      <p class="text-gray-600">{{ description }}</p>

      <div class="mt-4 pt-4 border-t border-gray-100">
        <UButton
            size="sm"
            color="yellow"
            variant="ghost"
            class="rounded-lg font-medium"
            to="#contact"
        >
          En savoir plus
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right" />
          </template>
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
});
</script>