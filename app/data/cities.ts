export interface City {
  slug: string
  name: string
  displayName: string // "à Tours" or "aux Dames"
  postalCode: string
  population: string
  coordinates: {
    lat: number
    lng: number
  }
  neighborhoods: string[]
  nearbyAreas: string[]
  nearbyCities: string[] // slugs of nearby cities
  description: string
  metaDescription: string
  uniqueContent: string
}

export const cities: Record<string, City> = {
  'tours': {
    slug: 'tours',
    name: 'Tours',
    displayName: 'à Tours',
    postalCode: '37000',
    population: '136 000',
    coordinates: { lat: 47.3941, lng: 0.6848 },
    neighborhoods: ['Centre-ville', 'Deux-Lions', 'Sanitas', 'Rabelais', 'Prébendes'],
    nearbyAreas: ['Saint-Pierre-des-Corps', 'La Riche', 'Saint-Avertin', 'Chambray-lès-Tours'],
    nearbyCities: ['fondettes', 'joue-les-tours', 'la-ville-aux-dames', 'notre-dame-doe', 'savonnieres'],
    description: 'Location de bennes à Tours, préfecture d\'Indre-et-Loire. Service rapide et professionnel pour particuliers et entreprises.',
    metaDescription: 'Location de bennes à Tours (37000). Livraison sous 24h dans tous les quartiers. Devis gratuit. Bennes gravats, déchets verts, encombrants. ☎ 06 01 37 04 43',
    uniqueContent: `Tours, préfecture d'Indre-et-Loire avec ses 136 000 habitants, est notre zone d'intervention principale. TD Location de Bennes 37 dessert l'ensemble de la ville de Tours, du centre historique aux quartiers périphériques comme Deux-Lions, Sanitas, Rabelais et Prébendes. Notre connaissance approfondie du territoire tourangeau nous permet d'optimiser nos livraisons et d'intervenir rapidement dans tous les secteurs de la ville. Que vous soyez un particulier réalisant des travaux de rénovation dans une maison du Vieux Tours ou un professionnel du BTP sur un chantier aux Fontaines, nous livrons votre benne sous 24h. Nous connaissons les spécificités d'accès de chaque quartier et adaptons notre matériel en conséquence.`
  },
  'fondettes': {
    slug: 'fondettes',
    name: 'Fondettes',
    displayName: 'à Fondettes',
    postalCode: '37230',
    population: '10 500',
    coordinates: { lat: 47.4019, lng: 0.6031 },
    neighborhoods: ['Centre', 'Vallières', 'Lussault', 'La Guignière'],
    nearbyAreas: ['Saint-Cyr-sur-Loire', 'Tours Nord', 'Ballan-Miré'],
    nearbyCities: ['tours', 'notre-dame-doe', 'savonnieres'],
    description: 'Location de bennes à Fondettes. Service de proximité pour vos travaux de rénovation et chantiers.',
    metaDescription: 'Location de bennes à Fondettes (37230). Service rapide dans tous les quartiers. Devis gratuit sous 24h. Particuliers et professionnels. ☎ 06 01 37 04 43',
    uniqueContent: `Fondettes, commune de 10 500 habitants située au nord-ouest de Tours, bénéficie de notre service de location de bennes professionnel. Cette ville résidentielle dynamique connaît une activité importante de rénovation et de construction, et nous accompagnons aussi bien les particuliers que les entreprises du bâtiment. Nous intervenons dans tous les secteurs de Fondettes : le centre-ville historique, le quartier de Vallières, Lussault et La Guignière. Notre proximité avec Fondettes nous permet de garantir des délais de livraison très courts et une grande réactivité. Nous connaissons les contraintes d'accès spécifiques à certaines rues anciennes du centre et proposons des solutions adaptées avec nos mini-bennes si nécessaire.`
  },
  'joue-les-tours': {
    slug: 'joue-les-tours',
    name: 'Joué-lès-Tours',
    displayName: 'à Joué-lès-Tours',
    postalCode: '37300',
    population: '38 000',
    coordinates: { lat: 47.3528, lng: 0.6658 },
    neighborhoods: ['Centre-ville', 'La Rabière', 'La Rabaterie', 'Les Atlantes', 'Beaulieu'],
    nearbyAreas: ['La Riche', 'Ballan-Miré', 'Chambray-lès-Tours'],
    nearbyCities: ['tours', 'savonnieres', 'azay-le-rideau'],
    description: 'Location de bennes à Joué-lès-Tours. Deuxième ville d\'Indre-et-Loire, service professionnel et réactif.',
    metaDescription: 'Location de bennes à Joué-lès-Tours (37300). Livraison 24h dans tous les quartiers. Bennes gravats, déchets verts, encombrants. Devis gratuit. ☎ 06 01 37 04 43',
    uniqueContent: `Joué-lès-Tours, deuxième ville la plus peuplée d'Indre-et-Loire avec 38 000 habitants, représente un secteur d'activité majeur pour TD Location de Bennes 37. Cette commune en plein développement connaît une forte dynamique de construction et de rénovation. Nous couvrons l'intégralité du territoire de Joué-lès-Tours, des quartiers résidentiels de La Rabière et Beaulieu aux zones d'activités des Atlantes. Notre expérience locale nous permet de naviguer efficacement dans cette ville étendue et d'optimiser nos trajets de livraison. Que ce soit pour des travaux dans une maison individuelle ou sur un chantier d'envergure, nous adaptons la taille de nos bennes (de 3m³ à 30m³) à votre projet et aux contraintes d'accès de votre emplacement à Joué-lès-Tours.`
  },
  'bourgueil': {
    slug: 'bourgueil',
    name: 'Bourgueil',
    displayName: 'à Bourgueil',
    postalCode: '37140',
    population: '3 900',
    coordinates: { lat: 47.2817, lng: 0.1667 },
    neighborhoods: ['Centre-bourg', 'La Garotterie', 'Les Chesnaies'],
    nearbyAreas: ['Saint-Nicolas-de-Bourgueil', 'Restigné', 'Ingrandes-de-Touraine'],
    nearbyCities: ['chinon', 'langeais'],
    description: 'Location de bennes à Bourgueil. Service de qualité au cœur du vignoble bourguillois.',
    metaDescription: 'Location de bennes à Bourgueil (37140). Service rapide et professionnel. Tous types de déchets. Devis gratuit. ☎ 06 01 37 04 43',
    uniqueContent: `Bourgueil, célèbre commune viticole de 3 900 habitants située dans le nord-ouest de l'Indre-et-Loire, fait partie de notre zone d'intervention. Cette petite ville au cœur de l'appellation Bourgueil AOC connaît une activité de rénovation soutenue, notamment dans son centre historique et ses hameaux environnants. TD Location de Bennes 37 dessert Bourgueil et ses environs avec le même professionnalisme que dans l'agglomération tourangelle. Nous comprenons les spécificités locales, notamment les chemins d'accès parfois étroits dans les zones viticoles et les contraintes liées à la préservation du patrimoine. Nous proposons des solutions adaptées, incluant nos mini-bennes pour les accès difficiles, tout en maintenant notre engagement de livraison rapide sous 24h.`
  },
  'la-ville-aux-dames': {
    slug: 'la-ville-aux-dames',
    name: 'La Ville-aux-Dames',
    displayName: 'à La Ville-aux-Dames',
    postalCode: '37700',
    population: '5 200',
    coordinates: { lat: 47.3956, lng: 0.7728 },
    neighborhoods: ['Centre', 'Les Vallées', 'La Borde'],
    nearbyAreas: ['Montlouis-sur-Loire', 'Vouvray', 'Véretz'],
    nearbyCities: ['tours', 'montlouis-sur-loire'],
    description: 'Location de bennes à La Ville-aux-Dames. Service professionnel à l\'est de Tours.',
    metaDescription: 'Location de bennes à La Ville-aux-Dames (37700). Livraison rapide sous 24h. Tous types de bennes. Devis gratuit. ☎ 06 01 37 04 43',
    uniqueContent: `La Ville-aux-Dames, commune de 5 200 habitants située à l'est de Tours, bénéficie de notre service de location de bennes réactif et professionnel. Cette ville résidentielle en développement, proche de la vallée de la Loire, connaît une activité de construction et de rénovation régulière. TD Location de Bennes 37 intervient dans tous les secteurs de La Ville-aux-Dames, du centre-ville aux quartiers résidentiels des Vallées et de La Borde. Notre positionnement géographique nous permet d'assurer des livraisons rapides depuis Tours, généralement en moins de 30 minutes. Nous connaissons les particularités d'accès de cette commune en développement et adaptons nos véhicules en conséquence pour garantir un service optimal.`
  },
  'chinon': {
    slug: 'chinon',
    name: 'Chinon',
    displayName: 'à Chinon',
    postalCode: '37500',
    population: '8 000',
    coordinates: { lat: 47.1667, lng: 0.2500 },
    neighborhoods: ['Centre historique', 'Saint-Jacques', 'Coteau Sainte-Radegonde'],
    nearbyAreas: ['Beaumont-en-Véron', 'Avoine', 'Huismes'],
    nearbyCities: ['bourgueil', 'azay-le-rideau', 'langeais'],
    description: 'Location de bennes à Chinon. Service de qualité dans la cité médiévale.',
    metaDescription: 'Location de bennes à Chinon (37500). Service rapide et professionnel. Bennes gravats, déchets. Devis gratuit sous 24h. ☎ 06 01 37 04 43',
    uniqueContent: `Chinon, ville historique de 8 000 habitants dominée par sa forteresse médiévale, fait partie de notre zone d'intervention dans le sud-ouest de l'Indre-et-Loire. Cette cité de caractère, classée Ville d'Art et d'Histoire, connaît une importante activité de rénovation patrimoniale et de construction neuve. TD Location de Bennes 37 dessert Chinon et ses environs avec expertise et réactivité. Nous sommes particulièrement attentifs aux contraintes spécifiques du centre historique, avec ses rues étroites et ses réglementations de préservation du patrimoine. Notre gamme de bennes, incluant des modèles compacts, nous permet de nous adapter aux accès difficiles du Vieux Chinon tout en maintenant notre engagement de livraison sous 24h pour l'ensemble de la commune.`
  },
  'langeais': {
    slug: 'langeais',
    name: 'Langeais',
    displayName: 'à Langeais',
    postalCode: '37130',
    population: '4 200',
    coordinates: { lat: 47.3258, lng: 0.4056 },
    neighborhoods: ['Centre-ville', 'Saint-Jean', 'Saint-Laurent'],
    nearbyAreas: ['Cinq-Mars-la-Pile', 'Mazières-de-Touraine', 'Saint-Patrice'],
    nearbyCities: ['tours', 'chinon', 'bourgueil'],
    description: 'Location de bennes à Langeais. Service professionnel près du château.',
    metaDescription: 'Location de bennes à Langeais (37130). Livraison rapide. Bennes gravats, déchets verts, encombrants. Devis gratuit. ☎ 06 01 37 04 43',
    uniqueContent: `Langeais, petite ville de 4 200 habitants située à mi-chemin entre Tours et Chinon, célèbre pour son château du XVe siècle, bénéficie de notre service de location de bennes professionnel. Cette commune paisible en bord de Loire connaît une activité de rénovation régulière, tant dans son centre historique que dans ses quartiers plus récents. TD Location de Bennes 37 intervient à Langeais avec la même réactivité que dans l'agglomération tourangelle. Nous comprenons les spécificités de cette ville de taille moyenne, avec ses rues anciennes du centre et ses zones pavillonnaires. Notre expérience nous permet de proposer des solutions adaptées à chaque situation, que ce soit pour des travaux de rénovation d'une maison ligérienne ou pour un chantier de construction neuve.`
  },
  'chateaurenault': {
    slug: 'chateaurenault',
    name: 'Châteaurenault',
    displayName: 'à Châteaurenault',
    postalCode: '37110',
    population: '5 500',
    coordinates: { lat: 47.5919, lng: 0.9108 },
    neighborhoods: ['Centre-ville', 'La Gaudellerie', 'Les Hâtifs'],
    nearbyAreas: ['Neuillé-Pont-Pierre', 'Saint-Laurent-en-Gâtines', 'Auzouer-en-Touraine'],
    nearbyCities: ['tours', 'notre-dame-doe'],
    description: 'Location de bennes à Châteaurenault. Service professionnel dans le nord de la Touraine.',
    metaDescription: 'Location de bennes à Châteaurenault (37110). Service rapide. Tous types de bennes disponibles. Devis gratuit sous 24h. ☎ 06 01 37 04 43',
    uniqueContent: `Châteaurenault, commune de 5 500 habitants située dans le nord de l'Indre-et-Loire, représente un secteur important pour TD Location de Bennes 37. Cette ville industrielle et résidentielle en bordure de la Brenne connaît une activité de construction et de rénovation soutenue. Nous desservons l'ensemble du territoire de Châteaurenault, du centre historique avec son château aux quartiers résidentiels de La Gaudellerie et des Hâtifs. Notre connaissance de cette zone du département nous permet d'optimiser nos livraisons et de garantir notre engagement de service sous 24h. Que vous soyez un particulier ou un professionnel du bâtiment, nous adaptons la taille de nos bennes à vos besoins spécifiques et aux contraintes d'accès de votre chantier à Châteaurenault.`
  },
  'montlouis-sur-loire': {
    slug: 'montlouis-sur-loire',
    name: 'Montlouis-sur-Loire',
    displayName: 'à Montlouis-sur-Loire',
    postalCode: '37270',
    population: '10 700',
    coordinates: { lat: 47.3892, lng: 0.8261 },
    neighborhoods: ['Centre-ville', 'La Bourdaisière', 'Les Bateliers'],
    nearbyAreas: ['Amboise', 'Lussault-sur-Loire', 'Véretz'],
    nearbyCities: ['tours', 'la-ville-aux-dames'],
    description: 'Location de bennes à Montlouis-sur-Loire. Service de qualité près d\'Amboise.',
    metaDescription: 'Location de bennes à Montlouis-sur-Loire (37270). Livraison 24h. Bennes gravats, déchets verts. Devis gratuit. ☎ 06 01 37 04 43',
    uniqueContent: `Montlouis-sur-Loire, ville de 10 700 habitants située à l'est de Tours, célèbre pour son appellation viticole AOC, fait partie intégrante de notre zone d'intervention. Cette commune dynamique en bord de Loire, entre Tours et Amboise, connaît un développement régulier avec de nombreux projets de construction et de rénovation. TD Location de Bennes 37 dessert l'ensemble de Montlouis-sur-Loire, du centre-ville aux quartiers résidentiels de La Bourdaisière et des Bateliers. Notre proximité avec cette commune nous permet de garantir des délais de livraison très courts. Nous comprenons les spécificités locales, notamment les contraintes d'accès dans certains secteurs proches du coteau et des zones viticoles, et proposons des solutions adaptées avec notre gamme complète de bennes.`
  },
  'chateau-la-valliere': {
    slug: 'chateau-la-valliere',
    name: 'Château-la-Vallière',
    displayName: 'à Château-la-Vallière',
    postalCode: '37330',
    population: '1 600',
    coordinates: { lat: 47.5444, lng: 0.3192 },
    neighborhoods: ['Centre-bourg', 'La Trigallière'],
    nearbyAreas: ['Savigné-sur-Lathan', 'Noyant-de-Touraine', 'Souvigné'],
    nearbyCities: ['tours', 'langeais'],
    description: 'Location de bennes à Château-la-Vallière. Service rural professionnel.',
    metaDescription: 'Location de bennes à Château-la-Vallière (37330). Service rapide et professionnel. Tous types de déchets. Devis gratuit. ☎ 06 01 37 04 43',
    uniqueContent: `Château-la-Vallière, petite commune de 1 600 habitants située au nord-ouest de l'Indre-et-Loire, bénéficie de notre service de location de bennes même en zone rurale. Cette commune tranquille, connue pour sa base de loisirs et son cadre naturel préservé, connaît une activité de rénovation principalement portée par les particuliers. TD Location de Bennes 37 s'engage à desservir Château-la-Vallière avec le même professionnalisme que les grandes communes du département. Nous comprenons les spécificités des zones rurales : chemins d'accès parfois étroits, propriétés dispersées, et besoins souvent liés à la rénovation de bâti ancien ou à l'aménagement de jardins. Notre gamme de bennes et notre flexibilité nous permettent de répondre à tous les besoins, de la mini-benne pour un accès difficile à la grande benne pour un chantier important.`
  },
  'azay-le-rideau': {
    slug: 'azay-le-rideau',
    name: 'Azay-le-Rideau',
    displayName: 'à Azay-le-Rideau',
    postalCode: '37190',
    population: '3 500',
    coordinates: { lat: 47.2614, lng: 0.4656 },
    neighborhoods: ['Centre-bourg', 'Lionnière', 'Les Gués'],
    nearbyAreas: ['Villaines-les-Rochers', 'Rivarennes', 'Cheillé'],
    nearbyCities: ['tours', 'chinon', 'joue-les-tours'],
    description: 'Location de bennes à Azay-le-Rideau. Service de qualité près du château de la Renaissance.',
    metaDescription: 'Location de bennes à Azay-le-Rideau (37190). Livraison rapide. Bennes gravats, déchets. Devis gratuit sous 24h. ☎ 06 01 37 04 43',
    uniqueContent: `Azay-le-Rideau, commune de 3 500 habitants célèbre pour son château Renaissance au bord de l'Indre, fait partie de notre zone d'intervention dans le sud-ouest du département. Cette petite ville touristique et résidentielle connaît une activité de rénovation importante, particulièrement dans son centre historique et ses hameaux environnants. TD Location de Bennes 37 dessert Azay-le-Rideau avec expertise et attention particulière aux contraintes patrimoniales. Nous sommes sensibles à la préservation de ce cadre exceptionnel et adaptons nos interventions en conséquence. Notre gamme de bennes, incluant des modèles compacts, nous permet de répondre aux exigences d'accès du centre-bourg tout en maintenant notre engagement de service rapide. Que ce soit pour des travaux de rénovation d'une longère tourangelle ou pour un projet de construction, nous sommes votre partenaire à Azay-le-Rideau.`
  },
  'notre-dame-doe': {
    slug: 'notre-dame-doe',
    name: 'Notre-Dame-d\'Oé',
    displayName: 'à Notre-Dame-d\'Oé',
    postalCode: '37390',
    population: '4 000',
    coordinates: { lat: 47.4400, lng: 0.6911 },
    neighborhoods: ['Centre', 'Les Hauts d\'Oé', 'La Martinière'],
    nearbyAreas: ['Mettray', 'Chanceaux-sur-Choisille', 'Cerelles'],
    nearbyCities: ['tours', 'fondettes', 'chateaurenault'],
    description: 'Location de bennes à Notre-Dame-d\'Oé. Service rapide au nord de Tours.',
    metaDescription: 'Location de bennes à Notre-Dame-d\'Oé (37390). Service professionnel. Livraison 24h. Tous types de bennes. Devis gratuit. ☎ 06 01 37 04 43',
    uniqueContent: `Notre-Dame-d'Oé, commune de 4 000 habitants située au nord de l'agglomération tourangelle, bénéficie d'un service de location de bennes de proximité avec TD Location de Bennes 37. Cette ville résidentielle en plein développement connaît une forte activité de construction de maisons individuelles et de rénovation. Nous intervenons dans tous les secteurs de Notre-Dame-d'Oé, du centre-bourg aux nouveaux quartiers des Hauts d'Oé et de La Martinière. Notre proximité immédiate avec cette commune nous permet de garantir des délais d'intervention très courts, souvent dans l'heure pour les demandes urgentes. Nous connaissons parfaitement le tissu urbain de Notre-Dame-d'Oé et adaptons systématiquement nos bennes aux contraintes spécifiques de chaque chantier, qu'il s'agisse d'un accès en lotissement pavillonnaire ou dans une rue plus ancienne du centre.`
  },
  'savonnieres': {
    slug: 'savonnieres',
    name: 'Savonnières',
    displayName: 'à Savonnières',
    postalCode: '37510',
    population: '3 200',
    coordinates: { lat: 47.3472, lng: 0.5497 },
    neighborhoods: ['Centre-bourg', 'Les Grottes pétrifiantes', 'La Perraudière'],
    nearbyAreas: ['Villandry', 'Druye', 'Ballan-Miré'],
    nearbyCities: ['tours', 'joue-les-tours', 'fondettes', 'azay-le-rideau'],
    description: 'Location de bennes à Savonnières. Service professionnel près de Villandry.',
    metaDescription: 'Location de bennes à Savonnières (37510). Livraison rapide sous 24h. Bennes gravats, déchets verts. Devis gratuit. ☎ 06 01 37 04 43',
    uniqueContent: `Savonnières, charmante commune de 3 200 habitants située à l'ouest de Tours, célèbre pour ses grottes pétrifiantes, fait partie de notre zone d'intervention prioritaire. Cette ville résidentielle, proche du prestigieux château de Villandry, connaît une activité de rénovation régulière, notamment de maisons anciennes en pierre de tuffeau caractéristiques de la région. TD Location de Bennes 37 dessert Savonnières avec réactivité et professionnalisme. Notre connaissance de cette commune nous permet d'optimiser nos interventions et de proposer des solutions adaptées aux spécificités locales. Que vous réalisiez des travaux dans une maison troglodytique, une rénovation de longère ou un projet de construction neuve, nous mettons à disposition la benne adaptée à votre chantier et garantissons une livraison rapide à Savonnières et dans tous ses hameaux environnants.`
  }
}

export const cityList = Object.values(cities).sort((a, b) => a.name.localeCompare(b.name))

export const getCityBySlug = (slug: string): City | undefined => cities[slug]
