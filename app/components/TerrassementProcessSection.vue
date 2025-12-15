<template>
  <section id="processus" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Comment se déroule votre projet de terrassement ?</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Un processus simple et transparent, du premier contact à la fin des travaux.
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
              v-for="(step, index) in steps"
              :key="index"
              v-motion
              class="relative"
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: index * 150 } }"
          >
            <!-- Connector line (hidden on mobile, visible on larger screens) -->
            <div
                v-if="index < steps.length - 1"
                class="hidden lg:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-yellow-400 to-gray-300 -z-10"
            />

            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <!-- Step number -->
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
              </div>

              <!-- Icon -->
              <div class="flex justify-center mb-4">
                <UIcon :name="step.icon" class="text-4xl text-yellow-600" />
              </div>

              <!-- Title -->
              <h3 class="text-lg font-bold mb-3 text-center">{{ step.title }}</h3>

              <!-- Description -->
              <p class="text-gray-600 text-sm text-center">{{ step.description }}</p>
            </div>
          </div>
        </div>

        <div class="mt-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
          <div class="flex flex-col md:flex-row items-center gap-6">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
                <UIcon name="i-heroicons-light-bulb" class="text-4xl text-white" />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Besoin de conseils ?</h3>
              <p class="text-gray-700 mb-4">
                Nous sommes à votre disposition pour vous guider dans votre projet de terrassement. Nous vous aidons à définir vos besoins, choisir les solutions adaptées et estimer votre budget.
              </p>
              <UButton
                  size="lg"
                  color="emerald"
                  variant="solid"
                  class="rounded-lg font-bold"
                  :to="`tel:${contact.phone}`"
                  target="_blank"
              >
                <template #leading>
                  <UIcon name="i-heroicons-phone" />
                </template>
                Appelez-nous maintenant
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();

const steps = [
  {
    title: 'Contact et visite',
    description: 'Contactez-nous par téléphone ou formulaire. Nous planifions une visite gratuite sur site pour évaluer votre projet.',
    icon: 'i-heroicons-phone'
  },
  {
    title: 'Étude et devis',
    description: 'Analyse du terrain et de vos besoins. Nous vous remettons un devis détaillé gratuit sous 24h.',
    icon: 'i-heroicons-document-text'
  },
  {
    title: 'Planification',
    description: 'Une fois le devis accepté, nous planifions les travaux selon vos disponibilités. Intervention rapide sous 48h.',
    icon: 'i-heroicons-calendar'
  },
  {
    title: 'Réalisation',
    description: 'Nos équipes réalisent les travaux de terrassement avec professionnalisme. Évacuation des terres incluse si nécessaire.',
    icon: 'i-heroicons-check-badge'
  }
];
</script>
