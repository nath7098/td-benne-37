<template>
  <section id="comment-ca-marche" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Comment ça marche ?</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Louer une benne dans l'Indre et Loire (37), c'est simple et rapide en 4 étapes
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Étape 1 -->
          <div
              v-motion
              class="text-center"
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 0 } }"
          >
            <div class="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">
              1
            </div>
            <div class="mb-4">
              <UIcon name="i-heroicons-phone" class="text-5xl text-yellow-500 mx-auto" />
            </div>
            <h3 class="text-xl font-bold mb-3">Demandez un devis</h3>
            <p class="text-gray-600">
              Contactez-nous par téléphone ou via notre formulaire en ligne. Nous vous répondons sous 24h.
            </p>
          </div>

          <!-- Étape 2 -->
          <div
              v-motion
              class="text-center"
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          >
            <div class="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">
              2
            </div>
            <div class="mb-4">
              <UIcon name="i-heroicons-document-check" class="text-5xl text-yellow-500 mx-auto" />
            </div>
            <h3 class="text-xl font-bold mb-3">Validez votre commande</h3>
            <p class="text-gray-600">
              Recevez votre devis personnalisé et confirmez la date de livraison souhaitée.
            </p>
          </div>

          <!-- Étape 3 -->
          <div
              v-motion
              class="text-center"
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          >
            <div class="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">
              3
            </div>
            <div class="mb-4">
              <UIcon name="i-heroicons-truck" class="text-5xl text-yellow-500 mx-auto" />
            </div>
            <h3 class="text-xl font-bold mb-3">Livraison rapide</h3>
            <p class="text-gray-600">
              Nous livrons votre benne à l'adresse indiquée. Vous pouvez la remplir à votre rythme.
            </p>
          </div>

          <!-- Étape 4 -->
          <div
              v-motion
              class="text-center"
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
          >
            <div class="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">
              4
            </div>
            <div class="mb-4">
              <UIcon name="i-heroicons-arrow-path" class="text-5xl text-yellow-500 mx-auto" />
            </div>
            <h3 class="text-xl font-bold mb-3">Enlèvement</h3>
            <p class="text-gray-600">
              Une fois remplie, appelez-nous pour programmer l'enlèvement. Nous nous occupons du recyclage.
            </p>
          </div>
        </div>

        <!-- Call to action -->
        <div class="mt-16 text-center">
          <UButton size="xl" color="yellow" to="#quote-form" class="font-bold">
            <template #leading>
              <UIcon name="i-heroicons-rocket-launch" />
            </template>
            Commencer maintenant
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
