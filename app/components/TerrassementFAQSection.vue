<template>
  <section id="faq-terrassement" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes sur le terrassement</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Retrouvez les réponses aux questions les plus courantes sur nos services de terrassement.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <UAccordion
            :items="faqs"
            :ui="{
              wrapper: 'space-y-4',
              item: {
                base: 'bg-gray-50 rounded-xl border border-gray-200 overflow-hidden',
                padding: 'p-6'
              }
            }"
        >
          <template #default="{ item, open }">
            <UButton
                variant="ghost"
                class="w-full"
                :ui="{ base: 'hover:bg-transparent' }"
            >
              <template #leading>
                <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <UIcon name="i-heroicons-question-mark-circle" class="text-xl text-yellow-600" />
                </div>
              </template>

              <span class="flex-1 text-left font-semibold text-gray-800">{{ item.label }}</span>

              <template #trailing>
                <UIcon
                    name="i-heroicons-chevron-down"
                    class="transform transition-transform duration-200"
                    :class="[open ? 'rotate-180' : '']"
                />
              </template>
            </UButton>
          </template>

          <template #item="{ item }">
            <div class="text-gray-600 leading-relaxed">
              {{ item.content }}
            </div>
          </template>
        </UAccordion>

        <div class="mt-12 text-center p-8 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200">
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Vous avez d'autres questions ?</h3>
          <p class="text-gray-600 mb-6">
            Nous sommes disponibles pour répondre à toutes vos interrogations sur vos travaux de terrassement.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
                size="lg"
                color="yellow"
                variant="solid"
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
                size="lg"
                color="yellow"
                variant="outline"
                class="rounded-lg font-bold"
                :to="`mailto:${contact.email}`"
                target="_blank"
            >
              <template #leading>
                <UIcon name="i-heroicons-envelope" />
              </template>
              Envoyez un email
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();

const faqs = [
  {
    label: 'Quels sont les types de travaux de terrassement que vous réalisez ?',
    content: 'Nous réalisons tous types de travaux de terrassement : excavation pour fondations, nivellement de terrain, remblaiement, création de tranchées, préparation de terrain pour construction, terrassement pour piscine, et aménagement extérieur. Nous intervenons dans toute l\'Indre-et-Loire.'
  },
  {
    label: 'Combien coûte un terrassement ?',
    content: 'Le prix d\'un terrassement varie selon plusieurs facteurs : la surface à terrasser, le type de sol, l\'accessibilité du terrain, et la nature des travaux (excavation, nivellement, remblaiement). Nous vous fournissons un devis gratuit détaillé après visite sur site.'
  },
  {
    label: 'Faut-il obtenir des autorisations pour des travaux de terrassement ?',
    content: 'Pour des travaux de terrassement importants, une déclaration préalable de travaux ou un permis de construire peut être nécessaire, notamment si le terrassement modifie significativement l\'aspect extérieur ou la hauteur du terrain. Nous vous conseillons sur les démarches administratives à effectuer auprès de votre mairie. Pour les petits travaux, aucune autorisation n\'est généralement requise.'
  }
];
</script>
