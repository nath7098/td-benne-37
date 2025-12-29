<template>
  <div>
    <header class="relative">
      <SiteHeader transparent />

      <TerrassementHeroSection />
    </header>

    <main>
      <TerrassementServicesSection />
      <TerrassementAdvantagesSection />
      <TerrassementCitiesSection />
      <TerrassementProcessSection />
      <TerrassementFAQSection />
    </main>

    <SiteFooter />
    <StickyContactBar />
  </div>
</template>

<script setup lang="ts">
import { useContact } from '~/composables/useContact';
import { cityList } from '~/data/cities';

const contact = useContact();

// Generate city names for SEO
const cityNames = cityList.map(city => city.name).join(', ');
const mainCities = ['Tours', 'Joué-lès-Tours', 'Chinon', 'Montlouis-sur-Loire', 'Châteaurenault'];

// SEO Meta tags
useHead({
  title: 'Terrassement 37 Tours, Chinon, Joué | Excavation & Nivellement Indre-et-Loire',
  meta: [
    {
      name: 'description',
      content: `Terrassement professionnel 37 : Tours, Chinon, Joué-lès-Tours, Fondettes, Montlouis, Langeais, Azay. Excavation, nivellement, remblaiement. Devis gratuit 24h ☎ ${contact.phone}`
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'TD Location de Bennes 37' },
    { property: 'og:title', content: 'Terrassement 37 - Expert Excavation Tours & Indre-et-Loire | TD Bennes' },
    { property: 'og:description', content: `Terrassement 37 : excavation, nivellement, remblaiement à ${mainCities.join(', ')} et toutes villes d'Indre-et-Loire. Service professionnel rapide.` },
    { property: 'og:image', content: 'https://td-locationbenne37.fr/logo-transparent.png' },
    { property: 'og:url', content: 'https://td-locationbenne37.fr/terrassement' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'keywords', content: `terrassement 37, terrassement tours, terrassement chinon, terrassement joue les tours, terrassement fondettes, terrassement montlouis, terrassement langeais, terrassement azay le rideau, excavation 37, nivellement terrain 37, remblaiement indre-et-loire, travaux terrassement ${cityNames.toLowerCase()}, terrassier 37, entreprise terrassement tours, terrassement piscine 37, terrassement maison 37` }
  ],
  link: [
    { rel: 'canonical', href: 'https://td-locationbenne37.fr/terrassement' }
  ]
});

// Structured data for SEO
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
                name: 'Terrassement',
                item: 'https://td-locationbenne37.fr/terrassement'
              }
            ]
          },
          {
            '@type': 'Service',
            name: 'Travaux de Terrassement en Indre-et-Loire (37)',
            serviceType: 'Terrassement',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TD Location de Bennes 37',
              image: 'https://td-locationbenne37.fr/logo-transparent.png',
              telephone: '+33 6 01 37 04 43',
              email: 'locationbenne37@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tours',
                addressRegion: 'Indre-et-Loire',
                postalCode: '37000',
                addressCountry: 'FR'
              },
              priceRange: '$$',
              url: 'https://td-locationbenne37.fr/terrassement'
            },
            areaServed: cityList.map(city => ({
              '@type': 'City',
              name: city.name,
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: 'Indre-et-Loire'
              }
            })),
            description: `Expert en terrassement 37 : excavation, nivellement, remblaiement, terrassement piscine. Intervention rapide à Tours, Chinon, Joué-lès-Tours, Fondettes, Montlouis-sur-Loire, Langeais, Azay-le-Rideau et toutes communes d'Indre-et-Loire. Devis gratuit sous 24h.`,
            availableChannel: {
              '@type': 'ServiceChannel',
              servicePhone: {
                '@type': 'ContactPoint',
                telephone: '+33 6 01 37 04 43',
                contactType: 'customer service',
                areaServed: 'FR',
                availableLanguage: 'French'
              }
            },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceRange: '$$',
              url: 'https://td-locationbenne37.fr/terrassement'
            }
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Quels sont les types de travaux de terrassement que vous réalisez ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nous réalisons tous types de travaux de terrassement : excavation pour fondations, nivellement de terrain, remblaiement, création de tranchées, préparation de terrain pour construction, terrassement pour piscine, et aménagement extérieur. Nous intervenons pour les particuliers et les professionnels.'
                }
              },
              {
                '@type': 'Question',
                name: 'Dans quelles villes intervenez-vous pour le terrassement ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Nous intervenons dans toute l'Indre-et-Loire (37), notamment à ${cityNames}. Notre service de terrassement couvre l'ensemble du département avec une intervention rapide sous 24h.`
                }
              },
              {
                '@type': 'Question',
                name: 'Quel est le délai pour démarrer des travaux de terrassement ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Après votre demande de devis, nous vous répondons sous 24h. Une fois le devis accepté, nous pouvons généralement démarrer les travaux sous 48h à 72h selon la disponibilité et la complexité du chantier.'
                }
              },
              {
                '@type': 'Question',
                name: 'Faut-il obtenir des autorisations pour des travaux de terrassement ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pour des travaux de terrassement importants, une déclaration préalable de travaux ou un permis de construire peut être nécessaire. Nous vous conseillons sur les démarches administratives à effectuer auprès de votre mairie. Pour les petits travaux, aucune autorisation n\'est généralement requise.'
                }
              },
              {
                '@type': 'Question',
                name: 'Comment se déroule un chantier de terrassement ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Un chantier de terrassement se déroule en plusieurs étapes : étude du terrain et piquetage, décapage de la terre végétale, excavation ou remblaiement selon les besoins, nivellement et compactage du sol. Nous fournissons également les bennes nécessaires pour l\'évacuation des terres et gravats.'
                }
              },
              {
                '@type': 'Question',
                name: 'Faites-vous du terrassement à Tours et dans l\'agglomération ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Oui, nous réalisons des travaux de terrassement à Tours (37000) et dans toute l\'agglomération tourangelle : Joué-lès-Tours, Fondettes, La Ville-aux-Dames, Montlouis-sur-Loire, Notre-Dame-d\'Oé, Savonnières. Notre proximité avec Tours nous permet d\'intervenir rapidement, généralement sous 24 à 48h.'
                }
              },
              {
                '@type': 'Question',
                name: 'Proposez-vous le terrassement à Chinon et dans le sud du département ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolument ! Nous intervenons pour le terrassement à Chinon, Azay-le-Rideau, Langeais, Bourgueil et dans tout le sud de l\'Indre-et-Loire. Nos équipes connaissent parfaitement les spécificités des terrains de cette zone et s\'adaptent aux contraintes du patrimoine architectural local.'
                }
              },
              {
                '@type': 'Question',
                name: 'Quel est le prix d\'un terrassement en Indre-et-Loire ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Le prix d\'un terrassement dépend de nombreux facteurs : surface à terrasser, profondeur d\'excavation, nature du sol, accès au chantier, évacuation des terres. Pour un devis précis et gratuit pour votre projet de terrassement en Indre-et-Loire (37), contactez-nous au 06 01 37 04 43. Nous nous déplaçons gratuitement pour évaluer votre terrain.'
                }
              }
            ]
          }
        ]
      })
    }
  ]
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
</style>
