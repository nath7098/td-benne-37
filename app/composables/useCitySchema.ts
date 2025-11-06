import type { City } from '~/data/cities'

export const useCitySchema = (city: City) => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // BreadcrumbList
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
            name: 'Villes',
            item: 'https://td-locationbenne37.fr/villes'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `Location de bennes ${city.displayName}`
          }
        ]
      },
      // LocalBusiness
      {
        '@type': 'LocalBusiness',
        '@id': `https://td-locationbenne37.fr/location-benne-${city.slug}`,
        name: `TD Location de Bennes 37 - ${city.name}`,
        description: city.description,
        image: 'https://td-locationbenne37.fr/logo-transparent.png',
        logo: 'https://td-locationbenne37.fr/logo-transparent.png',
        url: `https://td-locationbenne37.fr/location-benne-${city.slug}`,
        telephone: '+33601370443',
        email: 'locationbenne37@gmail.com',
        priceRange: '€€',
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          postalCode: city.postalCode,
          addressRegion: 'Indre-et-Loire',
          addressCountry: 'FR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.coordinates.lat,
          longitude: city.coordinates.lng
        },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: 'Indre-et-Loire'
          }
        },
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
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Services de location de bennes ${city.displayName}`,
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: `Location benne gravats ${city.name}`,
                description: `Location de bennes à gravats pour vos travaux ${city.displayName}`,
                areaServed: city.name
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: `Location benne déchets verts ${city.name}`,
                description: `Location de bennes pour déchets verts ${city.displayName}`,
                areaServed: city.name
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: `Location benne tout-venant ${city.name}`,
                description: `Location de bennes tout-venant ${city.displayName}`,
                areaServed: city.name
              }
            }
          ]
        }
      }
    ]
  }
}
