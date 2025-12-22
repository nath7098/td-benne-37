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
  title: 'Terrassement en Indre-et-Loire (37) - Service Professionnel Tours',
  meta: [
    {
      name: 'description',
      content: `Expert en terrassement à ${mainCities.join(', ')} et partout en Indre-et-Loire (37). Nivellement, excavation, remblaiement. Devis gratuit sous 24h. ☎ ${contact.phone}`
    },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'TD Location de Bennes 37' },
    { property: 'og:title', content: 'Terrassement Professionnel en Indre-et-Loire (37) | TD Bennes 37' },
    { property: 'og:description', content: `Services de terrassement professionnels à ${cityNames}. Excavation, nivellement, remblaiement pour particuliers et entreprises.` },
    { property: 'og:image', content: 'https://td-locationbenne37.fr/logo-transparent.png' },
    { property: 'og:url', content: 'https://td-locationbenne37.fr/terrassement' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'keywords', content: `terrassement ${cityNames.toLowerCase()}, terrassement indre-et-loire, excavation 37, nivellement terrain, remblaiement, travaux de terrassement` }
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
            name: 'Travaux de Terrassement en Indre-et-Loire',
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
              }
            },
            areaServed: cityList.map(city => ({
              '@type': 'City',
              name: city.name
            })),
            description: `Services professionnels de terrassement en Indre-et-Loire : excavation, nivellement, remblaiement, préparation de terrain pour construction. Intervention rapide à ${cityNames}.`,
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceRange: '$$'
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
