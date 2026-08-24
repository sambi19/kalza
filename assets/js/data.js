/* ==========================================================================
   Kalza — Datos de la tienda
   Editá este archivo para cambiar productos, precios y datos de contacto.
   ========================================================================== */

const STORE = {
  name: "Kalza",
  tagline: "Calzado con carácter",
  phone: "+57 320 460 0630",
  phoneRaw: "573204600630",          // formato para enlaces de WhatsApp
  email: "Novashop.storeDrop@gmail.com",
  city: "Bogotá, Colombia",
  hours: "Lun a Sáb · 8:00 a.m. – 8:00 p.m.",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  tiktok: "https://tiktok.com/",
  currency: "COP",
  freeShippingFrom: 250000,
  shippingFlat: 15000
};

const CATEGORIES = [
  { slug: "hombre",  name: "Hombre"  },
  { slug: "mujer",   name: "Mujer"   },
  { slug: "ninos",   name: "Niños"   },
  { slug: "unisex",  name: "Unisex"  }
];

const TYPES = [
  { slug: "running",   name: "Running"        },
  { slug: "urbano",    name: "Urbano"         },
  { slug: "deportivo", name: "Deportivo"      },
  { slug: "formal",    name: "Formal"         },
  { slug: "botas",     name: "Botas"          },
  { slug: "sandalias", name: "Sandalias"      }
];

const PRODUCTS = [
  {
    id: "zc-001",
    name: "Aero Runner Pro",
    brand: "Kalza Sport",
    category: "unisex",
    type: "running",
    price: 329900,
    compareAt: 419900,
    badge: "sale",
    rating: 4.8,
    reviews: 214,
    stock: 18,
    colors: [
      { name: "Negro",  hex: "#101010" },
      { name: "Blanco", hex: "#f2f2f2" },
      { name: "Azul",   hex: "#1f4fd8" }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    sold: [36],
    desc: "Zapatilla de running con entresuela de espuma reactiva y placa estabilizadora. Pensada para entrenamientos diarios de 5 a 21 km sobre asfalto.",
    specs: [
      ["Amortiguación", "Espuma KalzaFoam de retorno alto"],
      ["Drop", "8 mm"],
      ["Peso", "248 g (talla 42)"],
      ["Suela", "Caucho de carbono en zonas de desgaste"]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "zc-002",
    name: "Court Classic 74",
    brand: "Kalza Heritage",
    category: "unisex",
    type: "urbano",
    price: 259900,
    compareAt: null,
    badge: "new",
    rating: 4.7,
    reviews: 158,
    stock: 26,
    colors: [
      { name: "Blanco", hex: "#f5f5f5" },
      { name: "Verde",  hex: "#1e6b3a" },
      { name: "Beige",  hex: "#d8c7ac" }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43],
    sold: [],
    desc: "Silueta de tenis clásica en cuero flor con forro textil y suela vulcanizada. Un básico que combina con todo.",
    specs: [
      ["Material", "Cuero natural flor"],
      ["Suela", "Caucho vulcanizado"],
      ["Cierre", "Cordones planos de algodón"],
      ["Origen", "Producción certificada"]
    ],
    care: "Cepillar en seco y aplicar crema incolora cada 2 meses."
  },
  {
    id: "zc-003",
    name: "Urban Glide Knit",
    brand: "Kalza Sport",
    category: "mujer",
    type: "urbano",
    price: 219900,
    compareAt: 279900,
    badge: "sale",
    rating: 4.6,
    reviews: 96,
    stock: 12,
    colors: [
      { name: "Rosa",  hex: "#e6a2b4" },
      { name: "Negro", hex: "#141414" },
      { name: "Gris",  hex: "#9a9a9a" }
    ],
    sizes: [34, 35, 36, 37, 38, 39, 40],
    sold: [40],
    desc: "Tejido knit de una sola pieza, ultraliviana y transpirable. Ideal para caminar todo el día sin sentir el pie cansado.",
    specs: [
      ["Capellada", "Knit elástico sin costuras"],
      ["Peso", "196 g (talla 37)"],
      ["Plantilla", "Memory foam extraíble"],
      ["Uso", "Uso diario y viaje"]
    ],
    care: "Lavar a mano con agua fría. Secar a la sombra."
  },
  {
    id: "zc-004",
    name: "Trail Storm GTX",
    brand: "Kalza Outdoor",
    category: "hombre",
    type: "botas",
    price: 489900,
    compareAt: null,
    badge: null,
    rating: 4.9,
    reviews: 73,
    stock: 9,
    colors: [
      { name: "Café",  hex: "#5a3b23" },
      { name: "Negro", hex: "#0f0f0f" }
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    sold: [45],
    desc: "Bota de montaña impermeable con membrana transpirable y taco profundo para terreno mixto. Caña media con soporte de tobillo.",
    specs: [
      ["Impermeabilidad", "Membrana laminada 10.000 mm"],
      ["Suela", "Caucho con tacos de 5 mm"],
      ["Caña", "Media, con collar acolchado"],
      ["Temporada", "Todo el año"]
    ],
    care: "Retirar barro con agua tibia. Reimpermeabilizar cada temporada."
  },
  {
    id: "zc-005",
    name: "Executive Oxford",
    brand: "Kalza Formal",
    category: "hombre",
    type: "formal",
    price: 379900,
    compareAt: 449900,
    badge: "sale",
    rating: 4.5,
    reviews: 61,
    stock: 14,
    colors: [
      { name: "Negro", hex: "#111111" },
      { name: "Café",  hex: "#6b4423" }
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    sold: [],
    desc: "Oxford de construcción Blake en cuero pulido. Horma clásica, punta lisa y suela de cuero con refuerzo de goma.",
    specs: [
      ["Construcción", "Blake cosido"],
      ["Material", "Cuero vacuno pulido"],
      ["Forro", "Cuero natural"],
      ["Ocasión", "Oficina, ceremonia"]
    ],
    care: "Usar hormas de madera y betún del mismo tono."
  },
  {
    id: "zc-006",
    name: "Studio Trainer W",
    brand: "Kalza Sport",
    category: "mujer",
    type: "deportivo",
    price: 289900,
    compareAt: null,
    badge: "new",
    rating: 4.7,
    reviews: 118,
    stock: 21,
    colors: [
      { name: "Blanco", hex: "#f4f4f4" },
      { name: "Lila",   hex: "#b6a4e0" },
      { name: "Negro",  hex: "#141414" }
    ],
    sizes: [34, 35, 36, 37, 38, 39, 40],
    sold: [34],
    desc: "Zapatilla de entrenamiento con base ancha y estable para gimnasio, funcional y clases dirigidas.",
    specs: [
      ["Base", "Plataforma estable de baja altura"],
      ["Drop", "4 mm"],
      ["Refuerzo", "Lateral para movimientos multidireccionales"],
      ["Uso", "Gimnasio y cross training"]
    ],
    care: "Airear después de cada uso. Lavar solo la plantilla."
  },
  {
    id: "zc-007",
    name: "Mini Spark Kids",
    brand: "Kalza Kids",
    category: "ninos",
    type: "deportivo",
    price: 149900,
    compareAt: 189900,
    badge: "sale",
    rating: 4.8,
    reviews: 142,
    stock: 30,
    colors: [
      { name: "Azul",   hex: "#2c6fdb" },
      { name: "Rojo",   hex: "#c8342a" },
      { name: "Blanco", hex: "#f2f2f2" }
    ],
    sizes: [25, 26, 27, 28, 29, 30, 31, 32, 33],
    sold: [],
    desc: "Tenis infantil con cierre de velcro, puntera reforzada y suela flexible. Fácil de poner y quitar sin ayuda.",
    specs: [
      ["Cierre", "Velcro de doble tira"],
      ["Puntera", "Reforzada antigolpes"],
      ["Peso", "160 g (talla 29)"],
      ["Lavable", "Sí, a mano"]
    ],
    care: "Lavar a mano con agua fría y secar al aire."
  },
  {
    id: "zc-008",
    name: "Coast Slide",
    brand: "Kalza Summer",
    category: "unisex",
    type: "sandalias",
    price: 99900,
    compareAt: null,
    badge: null,
    rating: 4.4,
    reviews: 87,
    stock: 40,
    colors: [
      { name: "Negro", hex: "#131313" },
      { name: "Arena", hex: "#ddc9a3" }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
    sold: [],
    desc: "Sandalia de una pieza con plantilla anatómica acolchada. Liviana, resistente al agua y perfecta para el día a día.",
    specs: [
      ["Material", "EVA inyectado"],
      ["Plantilla", "Anatómica con textura antideslizante"],
      ["Peso", "180 g"],
      ["Resistente al agua", "Sí"]
    ],
    care: "Enjuagar con agua dulce después de la playa o piscina."
  },
  {
    id: "zc-009",
    name: "Velocity Carbon",
    brand: "Kalza Sport",
    category: "unisex",
    type: "running",
    price: 599900,
    compareAt: null,
    badge: "new",
    rating: 4.9,
    reviews: 44,
    stock: 7,
    colors: [
      { name: "Naranja", hex: "#e2631d" },
      { name: "Negro",   hex: "#101010" }
    ],
    sizes: [37, 38, 39, 40, 41, 42, 43, 44],
    sold: [37],
    desc: "Zapatilla de competencia con placa de carbono y espuma súper crítica. Diseñada para buscar tu mejor marca en 10K y maratón.",
    specs: [
      ["Placa", "Carbono de curvatura progresiva"],
      ["Drop", "6 mm"],
      ["Peso", "212 g (talla 42)"],
      ["Uso recomendado", "Competencia y series rápidas"]
    ],
    care: "Rotar con otro par de entrenamiento para alargar la vida útil."
  },
  {
    id: "zc-010",
    name: "Retro Wave 90",
    brand: "Kalza Heritage",
    category: "hombre",
    type: "urbano",
    price: 309900,
    compareAt: 369900,
    badge: "sale",
    rating: 4.6,
    reviews: 129,
    stock: 16,
    colors: [
      { name: "Gris",   hex: "#a5a5a5" },
      { name: "Blanco", hex: "#f0f0f0" },
      { name: "Azul",   hex: "#24407a" }
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    sold: [],
    desc: "Silueta noventera con paneles de gamuza, malla técnica y cámara de aire visible en el talón.",
    specs: [
      ["Capellada", "Gamuza y malla"],
      ["Amortiguación", "Cámara de aire visible"],
      ["Altura", "Baja"],
      ["Estilo", "Retro running"]
    ],
    care: "Usar cepillo de gamuza en seco. Evitar mojar."
  },
  {
    id: "zc-011",
    name: "Ballet Soft Leather",
    brand: "Kalza Formal",
    category: "mujer",
    type: "formal",
    price: 199900,
    compareAt: null,
    badge: null,
    rating: 4.5,
    reviews: 78,
    stock: 19,
    colors: [
      { name: "Negro",  hex: "#111111" },
      { name: "Nude",   hex: "#dcb9a5" },
      { name: "Vino",   hex: "#6d1f2c" }
    ],
    sizes: [34, 35, 36, 37, 38, 39, 40],
    sold: [39],
    desc: "Balerina en cuero suave con elástico en el empeine y plantilla acolchada. Comodidad de oficina sin renunciar al estilo.",
    specs: [
      ["Material", "Cuero napa suave"],
      ["Altura del tacón", "1,5 cm"],
      ["Plantilla", "Acolchada con látex"],
      ["Ocasión", "Oficina y diario"]
    ],
    care: "Hidratar el cuero cada mes con crema incolora."
  },
  {
    id: "zc-012",
    name: "Chelsea Rain Boot",
    brand: "Kalza Outdoor",
    category: "mujer",
    type: "botas",
    price: 259900,
    compareAt: 319900,
    badge: "sale",
    rating: 4.7,
    reviews: 55,
    stock: 11,
    colors: [
      { name: "Negro", hex: "#0e0e0e" },
      { name: "Verde", hex: "#2c4a34" }
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    sold: [],
    desc: "Bota estilo chelsea 100% impermeable, con elásticos laterales y suela con dibujo antideslizante.",
    specs: [
      ["Impermeabilidad", "Total, sin costuras"],
      ["Caña", "Alta hasta el tobillo"],
      ["Suela", "Antideslizante certificada"],
      ["Temporada", "Lluvia"]
    ],
    care: "Secar a temperatura ambiente, lejos de fuentes de calor."
  },
  {
    id: "zc-013",
    name: "Skate Deck Low",
    brand: "Kalza Heritage",
    category: "unisex",
    type: "urbano",
    price: 189900,
    compareAt: null,
    badge: null,
    rating: 4.4,
    reviews: 102,
    stock: 24,
    colors: [
      { name: "Negro",  hex: "#121212" },
      { name: "Blanco", hex: "#f3f3f3" },
      { name: "Mostaza",hex: "#d8a32b" }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    sold: [],
    desc: "Lona resistente de doble refuerzo con suela de caucho waffle. Un clásico del skate para uso diario.",
    specs: [
      ["Material", "Lona 12 oz"],
      ["Suela", "Caucho waffle"],
      ["Refuerzo", "Doble costura en puntera"],
      ["Altura", "Baja"]
    ],
    care: "Lavar a mano. No usar blanqueador."
  },
  {
    id: "zc-014",
    name: "Air Step Kids Light",
    brand: "Kalza Kids",
    category: "ninos",
    type: "urbano",
    price: 169900,
    compareAt: null,
    badge: "new",
    rating: 4.8,
    reviews: 66,
    stock: 27,
    colors: [
      { name: "Rosa",   hex: "#e79ab5" },
      { name: "Celeste",hex: "#87c1e8" }
    ],
    sizes: [26, 27, 28, 29, 30, 31, 32, 33, 34],
    sold: [26],
    desc: "Tenis liviano con luces LED en la suela recargables por USB. Diseño cómodo para el colegio y el parque.",
    specs: [
      ["Luces", "LED recargables por USB"],
      ["Autonomía", "Hasta 6 horas"],
      ["Cierre", "Cordón elástico + velcro"],
      ["Peso", "175 g (talla 30)"]
    ],
    care: "No sumergir en agua por el módulo de luces."
  },
  {
    id: "zc-015",
    name: "Hoop High Top",
    brand: "Kalza Sport",
    category: "hombre",
    type: "deportivo",
    price: 349900,
    compareAt: 429900,
    badge: "sale",
    rating: 4.6,
    reviews: 90,
    stock: 13,
    colors: [
      { name: "Blanco", hex: "#f1f1f1" },
      { name: "Rojo",   hex: "#b52a26" },
      { name: "Negro",  hex: "#0f0f0f" }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    sold: [46],
    desc: "Bota de baloncesto con soporte alto de tobillo, contrafuerte rígido y amortiguación de impacto en talón.",
    specs: [
      ["Caña", "Alta con collar acolchado"],
      ["Amortiguación", "Gel de impacto en talón"],
      ["Tracción", "Espiga multidireccional"],
      ["Superficie", "Cancha cubierta"]
    ],
    care: "Limpiar la suela antes de cada partido para mantener el agarre."
  },
  {
    id: "zc-016",
    name: "Comfort Walk Daily",
    brand: "Kalza Comfort",
    category: "mujer",
    type: "deportivo",
    price: 239900,
    compareAt: null,
    badge: null,
    rating: 4.7,
    reviews: 133,
    stock: 22,
    colors: [
      { name: "Gris",   hex: "#9d9d9d" },
      { name: "Negro",  hex: "#131313" },
      { name: "Blanco", hex: "#f2f2f2" }
    ],
    sizes: [34, 35, 36, 37, 38, 39, 40, 41],
    sold: [],
    desc: "Zapatilla de caminata con horma ancha, entresuela blanda y capellada elástica. Recomendada para jornadas largas de pie.",
    specs: [
      ["Horma", "Ancha (fit confort)"],
      ["Entresuela", "EVA de baja densidad"],
      ["Plantilla", "Extraíble, apta para plantillas ortopédicas"],
      ["Uso", "Caminata y trabajo de pie"]
    ],
    care: "Retirar la plantilla para airear después de usar."
  }
];
