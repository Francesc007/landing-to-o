export const company = {
  legalName: "T&T CONSTRUCCIONES Y CONSULTORIA S.A. DE C.V.",
  shortName: "T&T Construcciones y Consultoría",
  slogan: "¡Calidad, Honestidad y Compromiso!",
  rfc: "TCC120711MZ2",
  address: {
    line: "Pichardo Pagaza 530, Col. Xicaltepec Autopan",
    city: "Toluca, Estado de México",
    zip: "50290",
    full: "Pichardo Pagaza 530, Col. Xicaltepec Autopan, 50290 Toluca, Estado de México",
  },
  phones: ["729 270 8270"],
  phoneWhatsApp: "527292708270",
  email: "tconstrucciones_consultoria@hotmail.com",
  catalogPdf: "/T%26T%20Carta.pdf",
  googleMapsQuery:
    "Pichardo+Pagaza+530,+Xicaltepec+Autopan,+50290+Toluca,+Estado+de+México",
  mission:
    "En T&T, nos dedicamos a transformar ideas en realidades mediante la entrega de proyectos de construcción y consultoría de alta calidad. Nuestro compromiso es proporcionar soluciones innovadoras y personalizadas que atiendan las necesidades específicas de cada cliente. Con un equipo de expertos altamente calificados, nos esforzamos por construir relaciones duraderas basadas en la confianza y la satisfacción total del cliente, mediante de la planeación, dirección y ejecución de nuestro trabajo.",
  servicesIntro:
    "Ofrecemos un portafolio integral: acabados interiores y exteriores, obra civil, instalaciones eléctricas e hidrosanitarias, ingeniería y estructura metálica, y consultoría de proyectos con estándares PMI y metodologías ágiles. Planeamos, dirigimos y ejecutamos cada obra con el mismo compromiso: calidad, honestidad y resultados a la medida de su proyecto.",
  vision:
    "Ser reconocidos como líderes en la industria de la construcción y consultoría de proyectos, distinguiéndonos por nuestra experiencia técnica, fiabilidad y dedicación absoluta. Aspiramos a establecer nuevos estándares que inspiren confianza y valor en cada proyecto que emprendemos.",
  values: [
    {
      title: "Calidad",
      description:
        "Nos dedicamos a ofrecer servicios de excelencia, asegurando la máxima calidad en cada proyecto.",
    },
    {
      title: "Honestidad",
      description:
        "Actuamos con total transparencia y rectitud, fundamentando nuestras acciones en la integridad.",
    },
    {
      title: "Compromiso",
      description:
        "Estamos plenamente dedicados a cumplir con nuestras responsabilidades, garantizando resultados óptimos.",
    },
    {
      title: "Confianza",
      description: "Construimos relaciones sólidas basadas en la confianza mutua.",
    },
    {
      title: "Respeto",
      description:
        "Valoramos y respetamos a todas las personas involucradas en nuestros proyectos, promoviendo un ambiente profesional y amable.",
    },
    {
      title: "Trabajo en Equipo",
      description:
        "Creemos en la colaboración y en la sinergia de esfuerzos conjuntos para lograr metas comunes.",
    },
  ],
} as const;

export const serviceGroups = [
  {
    id: "acabados",
    title: "Acabados Interiores y Exteriores",
    items: ["Estucos", "Porcelanato", "Pastas", "Yeso", "Tablaroca", "Pintura"],
  },
  {
    id: "obra-civil",
    title: "Construcción y Obra Civil",
    items: [
      "Cimentación",
      "Pisos",
      "Acero",
      "Carpintería",
      "Losas",
      "Redes de drenaje y colectores pluviales",
      "Muros de contención",
      "Demoliciones",
    ],
  },
  {
    id: "electrico",
    title: "Instalaciones Eléctricas",
    items: [
      "Trabajos de electricidad",
      "Baja y alta tensión",
      "Industrial y residencial",
    ],
  },
  {
    id: "plomeria",
    title: "Servicios de Plomería",
    items: [
      "Redes de agua potable",
      "Alcantarillado",
      "Tratamiento de aguas residuales",
    ],
  },
  {
    id: "estructura",
    title: "Ingeniería y Construcción de Estructura",
    items: [
      "Fabricación y colocación de estructura",
      "Cancelería",
      "Herrería",
      "Aluminio",
      "Soldadura",
      "Pailería",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoría de Proyectos",
    items: [
      "Gestión de proyectos con estándares PMI",
      "Metodologías ágiles",
      "Planeación, ejecución y cierre",
    ],
  },
] as const;

export const featuredServiceCards = [
  {
    title: "Obra Civil",
    description:
      "Cimentaciones, losas, acero y obra estructural con control de calidad en cada etapa.",
    image: "/servicio-obra-civil.jpg",
    link: "/servicios#obra-civil",
  },
  {
    title: "Instalaciones Eléctricas",
    description:
      "Proyectos de baja y alta tensión para entornos industriales y residenciales.",
    image: "/servicio-electrico.jpg",
    link: "/servicios#electrico",
  },
  {
    title: "Consultoría de Proyectos",
    description:
      "Dirección técnica con estándares PMI y metodologías ágiles para cumplir objetivos.",
    image: "/servicio-consultoria.jpg",
    link: "/servicios#consultoria",
  },
] as const;

export const historyMilestones = [
  {
    year: "2015",
    client: "SCT",
    title: "Puente Vehicular Paso Superior",
    image: "/51.png",
  },
  {
    year: "2022",
    client: "Fracc. Res. Marsella",
    title: "Fracc. Residencial Marsella, Metepec",
    image: "/52.jpg",
  },
  {
    year: "2023",
    client: "City Express",
    title: "City Junior Toluca",
    image: "/53.png",
  },
  {
    year: "2024",
    client: "New Era Puebla",
    title: "Down Town Angelópolis",
    image: "/54.png",
  },
  {
    year: "2024",
    client: "GTM Inmobiliaria",
    title: "Terminal Tepeji del Río",
    image: "/55.png",
  },
] as const;

export const featuredProjects = [
  {
    id: "tepeji",
    title: "Terminal Tepeji del Río",
    summary:
      "Obra civil, estructura metálica y acabados: cimentación, muros, aplanados, rampas, pisos, laminación y plafones de tablaroca.",
    images: ["/10.png", "/11.png", "/12.png", "/13.png"],
  },
  {
    id: "new-era",
    title: "New Era",
    summary:
      "Tiendas en Puebla, CDMX y Estado de México. Instalaciones eléctricas y especiales, muros, plafones, pintura, porcelanato y cancelería de aluminio.",
    images: ["/20.png", "/21.png", "/22.jpg", "/23.jpg"],
  },
  {
    id: "city-junior",
    title: "City Junior Toluca",
    summary:
      "Obra civil, instalaciones eléctricas de baja tensión y acabados en muros y falsos plafones de tablaroca.",
    images: ["/30.png", "/31.jpg", "/32.png", "/33.jpg"],
  },
  {
    id: "marsella",
    title: "Fracc. Residencial Marsella, Metepec",
    summary:
      "Cimentación, instalaciones eléctricas e hidráulicas, cancelería, porcelanato, puertas y muebles de interiores.",
    images: ["/40.jpg", "/41.png", "/42.png", "/43.png"],
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Terminal Tepeji del Río",
    location: "Parque Industrial Tepeji del Río, Hidalgo",
    year: "2024",
  },
  {
    id: 2,
    title: "New Era Downtown Angelópolis",
    location: "Heroica Puebla de Zaragoza, Puebla",
    year: "2024",
  },
  {
    id: 3,
    title: "Puntos de Monitoreo Inteligentes (PMIS)",
    location: "San Mateo Atenco, Edo. Méx.",
    year: "2024",
  },
  {
    id: 4,
    title: "New Era Mundo E",
    location: "Tlalnepantla, Edo. Méx.",
    year: "2024",
  },
  {
    id: 5,
    title: "New Era Santa Fe",
    location: "Alc. Cuajimalpa de Morelos, CDMX",
    year: "2023",
  },
  {
    id: 6,
    title: "New Era Luna Park",
    location: "Cuautitlán Izcalli, Edo. Méx.",
    year: "2023",
  },
  {
    id: 7,
    title: "New Era Patriotismo",
    location: "Alc. Benito Juárez, CDMX",
    year: "2023",
  },
  {
    id: 8,
    title: "New Era Town Center Zumpango",
    location: "Zumpango, Edo. Méx.",
    year: "2023",
  },
  {
    id: 9,
    title: "New Era Vía Vallejo",
    location: "Alc. Gustavo A. Madero, CDMX",
    year: "2023",
  },
  {
    id: 10,
    title: "New Era Centro Coyoacán",
    location: "Alc. Coyoacán, CDMX",
    year: "2023",
  },
  {
    id: 11,
    title: "New Era 20 de Noviembre",
    location: "Alc. Cuauhtémoc, CDMX",
    year: "2023",
  },
  {
    id: 12,
    title: "New Era Plaza Sendero",
    location: "Lerma de Villada, Edo. Méx.",
    year: "2023",
  },
  {
    id: 13,
    title: "Bicycle Store Santa Fe",
    location: "Alc. Cuajimalpa de Morelos, CDMX",
    year: "2022",
  },
  {
    id: 14,
    title: "Fraccionamiento Residencial Marsella",
    location: "Metepec, Edo. Méx.",
    year: "2022",
  },
] as const;

export const whatsappMessage =
  "Hola T&T Construcciones y Consultoría, me interesa cotizar un proyecto.";
