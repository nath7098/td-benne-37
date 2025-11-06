import { cities, type City } from '~/data/cities'

export const useCityData = (citySlug: string) => {
  const city = cities[citySlug]

  if (!city) {
    throw createError({
      statusCode: 404,
      statusMessage: `Ville non trouvée: ${citySlug}`,
      message: `La page pour la ville "${citySlug}" n'existe pas.`
    })
  }

  // Get nearby cities data
  const nearbyCitiesData = city.nearbyCities
    .map(slug => cities[slug])
    .filter(Boolean)

  // Generate SEO meta
  const seoMeta = {
    title: `Location de Bennes ${city.displayName} (${city.postalCode.slice(0, 5)}) | Devis Gratuit 24h - TD Bennes`,
    description: city.metaDescription,
    ogTitle: `Location de Bennes ${city.displayName} | TD Bennes 37`,
    ogDescription: `Service de location de bennes ${city.displayName}. Livraison 24h, devis gratuit. Tous types de déchets acceptés.`,
    ogImage: 'https://td-locationbenne37.fr/logo-transparent.png',
    url: `https://td-locationbenne37.fr/location-benne-${city.slug}`,
    twitterTitle: `Location de Bennes ${city.displayName} | TD Bennes`,
    twitterDescription: `Location de bennes ${city.displayName}. Livraison 24h ☎ 06 01 37 04 43`
  }

  return {
    city,
    nearbyCitiesData,
    seoMeta
  }
}
