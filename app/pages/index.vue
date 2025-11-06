<template>
  <div>
    <header class="relative">
      <SiteHeader transparent />

      <HeroSection />
    </header>

    <main>
      <ServicesSection />
      <EnhancedCTA />
      <HowItWorksSection />
      <AdvantagesSection />
      <PricingSection />
      <CitiesSection />
      <FAQSection />
      <QuoteForm />
    </main>

    <SiteFooter />

    <StickyContactBar />
  </div>
</template>

<script setup lang="ts">
import { useContact } from '~/composables/useContact';

definePageMeta({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://td-locationbenne37.fr'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://td-locationbenne37.fr#services'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Tarifs',
                item: 'https://td-locationbenne37.fr#tarifs'
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Contact',
                item: 'https://td-locationbenne37.fr#quote-form'
              }
            ]
          },
          {
            '@type': 'LocalBusiness',
        name: 'TD Location de Bennes 37',
        image: 'https://td-locationbenne37.fr/logo-transparent.png',
        '@id': 'https://td-locationbenne37.fr',
        url: 'https://td-locationbenne37.fr',
        telephone: '+33 6 01 37 04 43',
        email: 'locationbenne37@gmail.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Indre-et-Loire',
          addressLocality: 'Tours',
          addressRegion: 'Indre-et-Loire',
          postalCode: '37000',
          addressCountry: 'FR'
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Tours'
          },
          {
            '@type': 'State',
            name: 'Indre-et-Loire'
          }
        ],
        description: 'Location de bennes à Tours et en Indre-et-Loire (37). Service rapide et professionnel pour particuliers et entreprises.',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '12:00'
          }
        ]
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Quel est le délai de livraison d\'une benne à Tours ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nous livrons votre benne sous 24h suivant votre demande dans toute la région de Tours et l\'Indre-et-Loire (37).'
                }
              },
              {
                '@type': 'Question',
                name: 'Quels types de déchets puis-je mettre dans une benne ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nos bennes acceptent les gravats, déchets de chantier, déchets verts, bois, ferraille et encombrants. Les déchets dangereux (amiante, produits chimiques) nécessitent une benne spécifique. Contactez-nous pour connaître la benne adaptée à vos déchets.'
                }
              },
              {
                '@type': 'Question',
                name: 'Combien coûte la location d\'une benne ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Le prix varie selon la taille de la benne (5m³ à 30m³), le type de déchets et la durée de location. Nos tarifs commencent à partir de 180€ TTC pour une benne de 8m³. Demandez un devis gratuit pour obtenir un prix exact adapté à votre besoin.'
                }
              },
              {
                '@type': 'Question',
                name: 'Quelle taille de benne choisir ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pour des travaux de rénovation domestique : benne 8-10m³. Pour un chantier moyen ou débarras complet : benne 15m³. Pour gros chantiers : benne 20-30m³. Notre équipe vous conseille gratuitement sur la taille adaptée à votre projet.'
                }
              },
              {
                '@type': 'Question',
                name: 'Comment faire une demande de devis ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Vous pouvez remplir notre formulaire en ligne ou nous contacter directement au 06 01 37 04 43. Nous vous répondons sous 24h avec un devis gratuit et sans engagement.'
                }
              }
            ]
          }
        ]
      })
    }
  ]
});

const contact = useContact();
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

:root {
  scroll-behavior: smooth;
}

body {
  font-family: 'Manrope', sans-serif;
  color: #333;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>