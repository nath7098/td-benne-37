<template>
  <div
      class="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-yellow-300 hover:-translate-y-1"
      :style="{ transitionDelay: `${delay}ms` }"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0 }"
  >
    <div class="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
      <UIcon :name="icon" class="text-2xl" />
    </div>
    <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
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
  delay: {
    type: Number,
    default: 0
  }
});
</script>