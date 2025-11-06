<template>
  <section id="faq" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Tout ce que vous devez savoir sur la location de bennes en Indre et Loire (37)
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <UAccordion :items="faqItems" />
      </div>
    </div>
  </section>
</template>

<script setup>
const faqItems = [
  {
    label: 'Quel est le délai de livraison d\'une benne en Indre et Loire (37) ?',
    content: 'Nous livrons votre benne suivant votre demande dans tout l\'Indre-et-Loire (37).',
    defaultOpen: false
  },
  {
    label: 'Quels types de déchets puis-je mettre dans une benne ?',
    content: 'Nos bennes acceptent les gravats, déchets de chantier, déchets verts, bois, ferraille et encombrants. Les déchets dangereux (amiante, produits chimiques) nécessitent une benne spécifique. Contactez-nous pour connaître la benne adaptée à vos déchets.',
    defaultOpen: false
  },
  {
    label: 'Combien coûte la location d\'une benne ?',
    content: 'Le prix varie selon la taille de la benne (5m³ à 30m³), le type de déchets et la durée de location.',
    defaultOpen: false
  },
  {
    label: 'Quelle taille de benne choisir ?',
    content: 'Nous vous transmettrons un devis et des conseils adaptés à votre besoin.',
    defaultOpen: false
  },
  {
    label: 'Comment faire une demande de devis ?',
    content: 'Vous pouvez remplir notre formulaire en ligne ou nous contacter directement au 06 01 37 04 43. Nous vous répondons sous 24h avec un devis gratuit et sans engagement.',
    defaultOpen: false
  }
];
</script>
