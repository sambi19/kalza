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
  city: "Cali, Colombia",
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

/* Precios tentativos al público en COP. Cada color apunta a su foto (img). */
const PRODUCTS = [
  {
    id: "kz-001",
    name: "Adidas Ozweego Pastel",
    brand: "Adidas",
    category: "mujer",
    type: "urbano",
    price: 129900,
    compareAt: null,
    badge: "new",
    stock: 12,
    colors: [
      {
        name: "Rosa/Celeste",
        hex: "#f2b3c6",
        img: "assets/img/productos/z01-1.jpg"
      },
      {
        name: "Negro/Blanco",
        hex: "#141414",
        img: "assets/img/productos/z01-2.jpg"
      },
      {
        name: "Lila/Durazno",
        hex: "#c3a9e6",
        img: "assets/img/productos/z01-3.jpg"
      },
      {
        name: "Rosa/Lila",
        hex: "#f2b3c6",
        img: "assets/img/productos/z14-2.jpg"
      }
    ],
    images: [
      "assets/img/productos/z01-1.jpg",
      "assets/img/productos/z01-2.jpg",
      "assets/img/productos/z01-3.jpg",
      "assets/img/productos/z14-2.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Tenis de suela gruesa con capellada en capas y combinaciones pastel. Livianos y cómodos para el día a día.",
    specs: [
      [
        "Marca",
        "Adidas"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-002",
    name: "Adidas Run 70s",
    brand: "Adidas",
    category: "mujer",
    type: "urbano",
    price: 129900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco/Café",
        hex: "#f4f4f2",
        img: "assets/img/productos/z02-1.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z02-2.jpg"
      },
      {
        name: "Beige/Azul",
        hex: "#d9c7a8",
        img: "assets/img/productos/z02-3.jpg"
      }
    ],
    images: [
      "assets/img/productos/z02-1.jpg",
      "assets/img/productos/z02-2.jpg",
      "assets/img/productos/z02-3.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Silueta retro de running con las tres franjas laterales y suela ligera. Un básico que combina con todo.",
    specs: [
      [
        "Marca",
        "Adidas"
      ],
      [
        "Colores disponibles",
        "3"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-003",
    name: "Chunky Wave",
    brand: "Kalza",
    category: "mujer",
    type: "urbano",
    price: 124900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Negro/Beige",
        hex: "#141414",
        img: "assets/img/productos/z03-1.jpg"
      },
      {
        name: "Gris/Crema",
        hex: "#9a9a9a",
        img: "assets/img/productos/z03-2.jpg"
      },
      {
        name: "Camel",
        hex: "#c49a6c",
        img: "assets/img/productos/z03-3.jpg"
      }
    ],
    images: [
      "assets/img/productos/z03-1.jpg",
      "assets/img/productos/z03-2.jpg",
      "assets/img/productos/z03-3.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Tenis chunky con suela ondulada de plataforma y cordones gruesos. Dan altura sin perder comodidad.",
    specs: [
      [
        "Marca",
        "Kalza"
      ],
      [
        "Colores disponibles",
        "3"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-004",
    name: "Nike Zoom Vomero 5",
    brand: "Nike",
    category: "mujer",
    type: "running",
    price: 139900,
    compareAt: null,
    badge: "new",
    stock: 12,
    colors: [
      {
        name: "Beige",
        hex: "#d9c7a8",
        img: "assets/img/productos/z04-1.jpg"
      },
      {
        name: "Blanco/Plata",
        hex: "#f4f4f2",
        img: "assets/img/productos/z04-2.jpg"
      },
      {
        name: "Negro/Plata",
        hex: "#141414",
        img: "assets/img/productos/z04-3.jpg"
      },
      {
        name: "Gris/Rosa",
        hex: "#9a9a9a",
        img: "assets/img/productos/z04-4.jpg"
      },
      {
        name: "Blanco/Azul",
        hex: "#f4f4f2",
        img: "assets/img/productos/z04-5.jpg"
      }
    ],
    images: [
      "assets/img/productos/z04-1.jpg",
      "assets/img/productos/z04-2.jpg",
      "assets/img/productos/z04-3.jpg",
      "assets/img/productos/z04-4.jpg",
      "assets/img/productos/z04-5.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Estilo running de los 2000 con malla transpirable, detalles metalizados y amortiguación Zoom Air.",
    specs: [
      [
        "Marca",
        "Nike"
      ],
      [
        "Colores disponibles",
        "5"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-005",
    name: "Nike Initiator",
    brand: "Nike",
    category: "mujer",
    type: "running",
    price: 139900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Crema",
        hex: "#efe6d2",
        img: "assets/img/productos/z05-1.jpg"
      },
      {
        name: "Rosa",
        hex: "#f2b3c6",
        img: "assets/img/productos/z05-2.jpg"
      },
      {
        name: "Plata/Negro",
        hex: "#c4c7cc",
        img: "assets/img/productos/z05-3.jpg"
      },
      {
        name: "Crema/Rosa",
        hex: "#efe6d2",
        img: "assets/img/productos/z05-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z05-1.jpg",
      "assets/img/productos/z05-2.jpg",
      "assets/img/productos/z05-3.jpg",
      "assets/img/productos/z05-4.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Tenis de inspiración retro running con capas superpuestas y entresuela acolchada.",
    specs: [
      [
        "Marca",
        "Nike"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-006",
    name: "Plataforma Clásica",
    brand: "Kalza",
    category: "mujer",
    type: "urbano",
    price: 119900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z06-1.jpg"
      }
    ],
    images: [
      "assets/img/productos/z06-1.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Tenis blanco de plataforma con detalle de corazón dorado. Fácil de combinar con jean o vestido.",
    specs: [
      [
        "Marca",
        "Kalza"
      ],
      [
        "Colores disponibles",
        "1"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-007",
    name: "Nike Air Max Plus TN",
    brand: "Nike",
    category: "hombre",
    type: "urbano",
    price: 144900,
    compareAt: null,
    badge: "new",
    stock: 12,
    colors: [
      {
        name: "Blanco/Verde",
        hex: "#f4f4f2",
        img: "assets/img/productos/z07-1.jpg"
      },
      {
        name: "Blanco/Naranja",
        hex: "#f4f4f2",
        img: "assets/img/productos/z07-2.jpg"
      },
      {
        name: "Negro/Plata",
        hex: "#141414",
        img: "assets/img/productos/z07-3.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z07-4.jpg"
      },
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z07-5.jpg"
      }
    ],
    images: [
      "assets/img/productos/z07-1.jpg",
      "assets/img/productos/z07-2.jpg",
      "assets/img/productos/z07-3.jpg",
      "assets/img/productos/z07-4.jpg",
      "assets/img/productos/z07-5.jpg"
    ],
    sizes: [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "El clásico TN con cámara de aire visible y las icónicas líneas onduladas en la capellada.",
    specs: [
      [
        "Marca",
        "Nike"
      ],
      [
        "Colores disponibles",
        "5"
      ],
      [
        "Tallas",
        "38 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-008",
    name: "Chunky Blanco",
    brand: "Kalza",
    category: "mujer",
    type: "urbano",
    price: 119900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z08-1.jpg"
      }
    ],
    images: [
      "assets/img/productos/z08-1.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Tenis blanco de suela robusta con detalle metálico y paneles de malla.",
    specs: [
      [
        "Marca",
        "Kalza"
      ],
      [
        "Colores disponibles",
        "1"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-009",
    name: "Boss Knit Runner",
    brand: "Boss",
    category: "hombre",
    type: "urbano",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z09-1.jpg"
      },
      {
        name: "Gris",
        hex: "#9a9a9a",
        img: "assets/img/productos/z09-2.jpg"
      },
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z09-3.jpg"
      },
      {
        name: "Negro/Blanco",
        hex: "#141414",
        img: "assets/img/productos/z09-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z09-1.jpg",
      "assets/img/productos/z09-2.jpg",
      "assets/img/productos/z09-3.jpg",
      "assets/img/productos/z09-4.jpg"
    ],
    sizes: [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Tejido tipo knit, ajuste tipo media y suela alta en EVA. Elegantes y muy livianos.",
    specs: [
      [
        "Marca",
        "Boss"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "38 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-010",
    name: "Lacoste Elite Active",
    brand: "Lacoste",
    category: "hombre",
    type: "urbano",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco/Verde",
        hex: "#f4f4f2",
        img: "assets/img/productos/z10-1.jpg"
      },
      {
        name: "Negro/Rojo",
        hex: "#141414",
        img: "assets/img/productos/z10-2.jpg"
      },
      {
        name: "Gris/Naranja",
        hex: "#9a9a9a",
        img: "assets/img/productos/z10-3.jpg"
      },
      {
        name: "Azul",
        hex: "#1f3a6b",
        img: "assets/img/productos/z10-4.jpg"
      },
      {
        name: "Blanco/Azul",
        hex: "#f4f4f2",
        img: "assets/img/productos/z10-5.jpg"
      }
    ],
    images: [
      "assets/img/productos/z10-1.jpg",
      "assets/img/productos/z10-2.jpg",
      "assets/img/productos/z10-3.jpg",
      "assets/img/productos/z10-4.jpg",
      "assets/img/productos/z10-5.jpg"
    ],
    sizes: [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Tenis deportivos con paneles en gamuza y malla, cocodrilo lateral y suela de alto agarre.",
    specs: [
      [
        "Marca",
        "Lacoste"
      ],
      [
        "Colores disponibles",
        "5"
      ],
      [
        "Tallas",
        "38 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-011",
    name: "Adidas Supernova",
    brand: "Adidas",
    category: "hombre",
    type: "running",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco/Naranja",
        hex: "#f4f4f2",
        img: "assets/img/productos/z11-1.jpg"
      },
      {
        name: "Gris",
        hex: "#9a9a9a",
        img: "assets/img/productos/z11-2.jpg"
      },
      {
        name: "Negro/Neón",
        hex: "#141414",
        img: "assets/img/productos/z11-3.jpg"
      },
      {
        name: "Vinotinto",
        hex: "#6e1a2a",
        img: "assets/img/productos/z11-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z11-1.jpg",
      "assets/img/productos/z11-2.jpg",
      "assets/img/productos/z11-3.jpg",
      "assets/img/productos/z11-4.jpg"
    ],
    sizes: [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Zapatilla de running con malla tejida y entresuela de espuma de alto rebote.",
    specs: [
      [
        "Marca",
        "Adidas"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "38 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-012",
    name: "Lacoste Carnaby",
    brand: "Lacoste",
    category: "unisex",
    type: "urbano",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z12-1.jpg"
      },
      {
        name: "Blanco/Verde",
        hex: "#f4f4f2",
        img: "assets/img/productos/z12-3.jpg"
      },
      {
        name: "Blanco/Negro",
        hex: "#f4f4f2",
        img: "assets/img/productos/z12-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z12-1.jpg",
      "assets/img/productos/z12-3.jpg",
      "assets/img/productos/z12-4.jpg",
      "assets/img/productos/z12-2.jpg"
    ],
    sizes: [
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Tenis clásico en cuero sintético blanco con cocodrilo bordado y suela color miel.",
    specs: [
      [
        "Marca",
        "Lacoste"
      ],
      [
        "Colores disponibles",
        "3"
      ],
      [
        "Tallas",
        "36 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-013",
    name: "Adidas Questar",
    brand: "Adidas",
    category: "mujer",
    type: "running",
    price: 129900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco/Rosa",
        hex: "#f4f4f2",
        img: "assets/img/productos/z13-1.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z13-2.jpg"
      },
      {
        name: "Blanco/Lila",
        hex: "#f4f4f2",
        img: "assets/img/productos/z13-3.jpg"
      },
      {
        name: "Blanco/Celeste",
        hex: "#f4f4f2",
        img: "assets/img/productos/z13-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z13-1.jpg",
      "assets/img/productos/z13-2.jpg",
      "assets/img/productos/z13-3.jpg",
      "assets/img/productos/z13-4.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Zapatilla de running liviana con malla transpirable y suela de amortiguación suave.",
    specs: [
      [
        "Marca",
        "Adidas"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-014",
    name: "Diesel D-Serendipity",
    brand: "Diesel",
    category: "hombre",
    type: "urbano",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Negro/Blanco",
        hex: "#141414",
        img: "assets/img/productos/z14-1.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z14-3.jpg"
      },
      {
        name: "Negro/Rojo",
        hex: "#141414",
        img: "assets/img/productos/z14-4.jpg"
      },
      {
        name: "Blanco/Plata",
        hex: "#f4f4f2",
        img: "assets/img/productos/z14-5.jpg"
      },
      {
        name: "Blanco/Negro",
        hex: "#f4f4f2",
        img: "assets/img/productos/z14-6.jpg"
      }
    ],
    images: [
      "assets/img/productos/z14-1.jpg",
      "assets/img/productos/z14-3.jpg",
      "assets/img/productos/z14-4.jpg",
      "assets/img/productos/z14-5.jpg",
      "assets/img/productos/z14-6.jpg"
    ],
    sizes: [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Tenis de inspiración running con el logo D de Diesel y suela robusta.",
    specs: [
      [
        "Marca",
        "Diesel"
      ],
      [
        "Colores disponibles",
        "5"
      ],
      [
        "Tallas",
        "38 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-015",
    name: "Bosi Runner",
    brand: "Kalza",
    category: "hombre",
    type: "urbano",
    price: 124900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z15-1.jpg"
      }
    ],
    images: [
      "assets/img/productos/z15-1.jpg"
    ],
    sizes: [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Tenis negro en cuero sintético con suela blanca dentada. Sobrio y versátil.",
    specs: [
      [
        "Marca",
        "Kalza"
      ],
      [
        "Colores disponibles",
        "1"
      ],
      [
        "Tallas",
        "38 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-016",
    name: "Reebok Floatride",
    brand: "Reebok",
    category: "hombre",
    type: "running",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco/Naranja",
        hex: "#f4f4f2",
        img: "assets/img/productos/z16-1.jpg"
      },
      {
        name: "Gris/Beige",
        hex: "#9a9a9a",
        img: "assets/img/productos/z16-2.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z16-3.jpg"
      },
      {
        name: "Negro/Blanco",
        hex: "#141414",
        img: "assets/img/productos/z16-4.jpg"
      },
      {
        name: "Beige",
        hex: "#d9c7a8",
        img: "assets/img/productos/z16-5.jpg"
      },
      {
        name: "Blanco/Negro",
        hex: "#f4f4f2",
        img: "assets/img/productos/z16-6.jpg"
      }
    ],
    images: [
      "assets/img/productos/z16-1.jpg",
      "assets/img/productos/z16-2.jpg",
      "assets/img/productos/z16-3.jpg",
      "assets/img/productos/z16-4.jpg",
      "assets/img/productos/z16-5.jpg",
      "assets/img/productos/z16-6.jpg"
    ],
    sizes: [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Zapatilla de running con suela de geometría hueca para un paso amortiguado y ligero.",
    specs: [
      [
        "Marca",
        "Reebok"
      ],
      [
        "Colores disponibles",
        "6"
      ],
      [
        "Tallas",
        "38 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-017",
    name: "Converse Chuck Taylor All Star Hi",
    brand: "Converse",
    category: "unisex",
    type: "urbano",
    price: 139900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z17-1.jpg"
      },
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z18-1.jpg"
      },
      {
        name: "Rojo",
        hex: "#c8202f",
        img: "assets/img/productos/z19-1.jpg"
      },
      {
        name: "Azul",
        hex: "#1f3a6b",
        img: "assets/img/productos/z20-1.jpg"
      }
    ],
    images: [
      "assets/img/productos/z17-1.jpg",
      "assets/img/productos/z18-1.jpg",
      "assets/img/productos/z19-1.jpg",
      "assets/img/productos/z20-1.jpg",
      "assets/img/productos/z17-2.jpg",
      "assets/img/productos/z17-3.jpg",
      "assets/img/productos/z17-4.jpg",
      "assets/img/productos/z17-5.jpg",
      "assets/img/productos/z18-2.jpg",
      "assets/img/productos/z18-3.jpg",
      "assets/img/productos/z18-4.jpg",
      "assets/img/productos/z19-2.jpg",
      "assets/img/productos/z19-3.jpg",
      "assets/img/productos/z19-4.jpg",
      "assets/img/productos/z20-2.jpg",
      "assets/img/productos/z20-3.jpg",
      "assets/img/productos/z20-4.jpg"
    ],
    sizes: [
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "La bota de lona clásica con estrella lateral y puntera de caucho. Un ícono que nunca pasa de moda.",
    specs: [
      [
        "Marca",
        "Converse"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "36 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-018",
    name: "Converse Chuck Taylor Niños",
    brand: "Converse",
    category: "ninos",
    type: "urbano",
    price: 119900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z21-1.jpg"
      },
      {
        name: "Azul",
        hex: "#1f3a6b",
        img: "assets/img/productos/z22-1.jpg"
      }
    ],
    images: [
      "assets/img/productos/z21-1.jpg",
      "assets/img/productos/z22-1.jpg",
      "assets/img/productos/z21-2.jpg",
      "assets/img/productos/z21-3.jpg",
      "assets/img/productos/z23-1.jpg",
      "assets/img/productos/z23-2.jpg"
    ],
    sizes: [
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ],
    sold: [],
    desc: "La versión de caña baja para los más pequeños, en lona resistente y suela de caucho.",
    specs: [
      [
        "Marca",
        "Converse"
      ],
      [
        "Colores disponibles",
        "2"
      ],
      [
        "Tallas",
        "22 a 34"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-019",
    name: "Nike V2K Run",
    brand: "Nike",
    category: "mujer",
    type: "running",
    price: 139900,
    compareAt: null,
    badge: "new",
    stock: 12,
    colors: [
      {
        name: "Rosa",
        hex: "#f2b3c6",
        img: "assets/img/productos/z24-1.jpg"
      },
      {
        name: "Crema/Menta",
        hex: "#efe6d2",
        img: "assets/img/productos/z24-2.jpg"
      },
      {
        name: "Crema/Lila",
        hex: "#efe6d2",
        img: "assets/img/productos/z24-3.jpg"
      },
      {
        name: "Blanco/Rosa",
        hex: "#f4f4f2",
        img: "assets/img/productos/z24-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z24-1.jpg",
      "assets/img/productos/z24-2.jpg",
      "assets/img/productos/z24-3.jpg",
      "assets/img/productos/z24-4.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Tenis chunky de estilo running retro con capas metalizadas y suela alta.",
    specs: [
      [
        "Marca",
        "Nike"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-020",
    name: "Nike P-6000",
    brand: "Nike",
    category: "mujer",
    type: "running",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco/Dorado",
        hex: "#f4f4f2",
        img: "assets/img/productos/z25-1.jpg"
      },
      {
        name: "Gris/Plata",
        hex: "#9a9a9a",
        img: "assets/img/productos/z25-2.jpg"
      },
      {
        name: "Café/Crema",
        hex: "#6b4a3a",
        img: "assets/img/productos/z25-3.jpg"
      }
    ],
    images: [
      "assets/img/productos/z25-1.jpg",
      "assets/img/productos/z25-2.jpg",
      "assets/img/productos/z25-3.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Diseño inspirado en los runners de los 2000, con malla transpirable y detalles en cuero sintético.",
    specs: [
      [
        "Marca",
        "Nike"
      ],
      [
        "Colores disponibles",
        "3"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-021",
    name: "Nike Air Force 1",
    brand: "Nike",
    category: "mujer",
    type: "urbano",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco/Plata",
        hex: "#f4f4f2",
        img: "assets/img/productos/z26-1.jpg"
      },
      {
        name: "Blanco/Negro",
        hex: "#f4f4f2",
        img: "assets/img/productos/z26-2.jpg"
      },
      {
        name: "Animal print",
        hex: "#a9825a",
        img: "assets/img/productos/z26-3.jpg"
      },
      {
        name: "Blanco/Rosa",
        hex: "#f4f4f2",
        img: "assets/img/productos/z26-4.jpg"
      },
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z26-5.jpg"
      }
    ],
    images: [
      "assets/img/productos/z26-1.jpg",
      "assets/img/productos/z26-2.jpg",
      "assets/img/productos/z26-3.jpg",
      "assets/img/productos/z26-4.jpg",
      "assets/img/productos/z26-5.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "El clásico de la cancha a la calle, en blanco con swoosh en distintos acabados.",
    specs: [
      [
        "Marca",
        "Nike"
      ],
      [
        "Colores disponibles",
        "5"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-022",
    name: "LV Trainer",
    brand: "Louis Vuitton",
    category: "unisex",
    type: "urbano",
    price: 149900,
    compareAt: null,
    badge: "new",
    stock: 12,
    colors: [
      {
        name: "Rojo",
        hex: "#c8202f",
        img: "assets/img/productos/z27-1.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z27-2.jpg"
      },
      {
        name: "Negro/Blanco",
        hex: "#141414",
        img: "assets/img/productos/z27-3.jpg"
      },
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z27-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z27-1.jpg",
      "assets/img/productos/z27-2.jpg",
      "assets/img/productos/z27-3.jpg",
      "assets/img/productos/z27-4.jpg"
    ],
    sizes: [
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Sneaker de inspiración basketball con el monograma de flor y suela gruesa.",
    specs: [
      [
        "Marca",
        "Louis Vuitton"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "36 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-023",
    name: "Adidas Retropy",
    brand: "Adidas",
    category: "mujer",
    type: "urbano",
    price: 129900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Azul/Rosa",
        hex: "#1f3a6b",
        img: "assets/img/productos/z28-1.jpg"
      },
      {
        name: "Lila",
        hex: "#c3a9e6",
        img: "assets/img/productos/z28-2.jpg"
      },
      {
        name: "Negro/Lila",
        hex: "#141414",
        img: "assets/img/productos/z28-3.jpg"
      },
      {
        name: "Blanco/Menta",
        hex: "#f4f4f2",
        img: "assets/img/productos/z28-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z28-1.jpg",
      "assets/img/productos/z28-2.jpg",
      "assets/img/productos/z28-3.jpg",
      "assets/img/productos/z28-4.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Tenis retro de capas con colores vivos y suela con mucho agarre.",
    specs: [
      [
        "Marca",
        "Adidas"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-024",
    name: "New Balance 1000",
    brand: "New Balance",
    category: "mujer",
    type: "urbano",
    price: 139900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z29-1.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z29-2.jpg"
      },
      {
        name: "Blanco/Azul",
        hex: "#f4f4f2",
        img: "assets/img/productos/z29-3.jpg"
      },
      {
        name: "Beige",
        hex: "#d9c7a8",
        img: "assets/img/productos/z29-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z29-1.jpg",
      "assets/img/productos/z29-2.jpg",
      "assets/img/productos/z29-3.jpg",
      "assets/img/productos/z29-4.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Silueta chunky con la N lateral y suela escultural de gran amortiguación.",
    specs: [
      [
        "Marca",
        "New Balance"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-025",
    name: "New Balance 1906R",
    brand: "New Balance",
    category: "mujer",
    type: "running",
    price: 139900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco/Menta",
        hex: "#f4f4f2",
        img: "assets/img/productos/z30-1.jpg"
      },
      {
        name: "Gris/Morado",
        hex: "#9a9a9a",
        img: "assets/img/productos/z30-2.jpg"
      },
      {
        name: "Negro/Menta",
        hex: "#141414",
        img: "assets/img/productos/z30-3.jpg"
      },
      {
        name: "Blanco/Durazno",
        hex: "#f4f4f2",
        img: "assets/img/productos/z30-4.jpg"
      },
      {
        name: "Blanco/Lila",
        hex: "#f4f4f2",
        img: "assets/img/productos/z30-5.jpg"
      }
    ],
    images: [
      "assets/img/productos/z30-1.jpg",
      "assets/img/productos/z30-2.jpg",
      "assets/img/productos/z30-3.jpg",
      "assets/img/productos/z30-4.jpg",
      "assets/img/productos/z30-5.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Runner técnico de estilo 2000s, con plantilla y marquilla contramarcada y costuras reforzadas.",
    specs: [
      [
        "Marca",
        "New Balance"
      ],
      [
        "Colores disponibles",
        "5"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-026",
    name: "Emporio Armani EA7",
    brand: "Emporio Armani",
    category: "hombre",
    type: "urbano",
    price: 144900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Negro/Rojo",
        hex: "#141414",
        img: "assets/img/productos/z31-1.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z31-2.jpg"
      },
      {
        name: "Gris/Blanco",
        hex: "#9a9a9a",
        img: "assets/img/productos/z31-3.jpg"
      },
      {
        name: "Vinotinto",
        hex: "#6e1a2a",
        img: "assets/img/productos/z31-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z31-1.jpg",
      "assets/img/productos/z31-2.jpg",
      "assets/img/productos/z31-3.jpg",
      "assets/img/productos/z31-4.jpg"
    ],
    sizes: [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Sneaker deportivo con el águila de Armani en malla y suela de goma con contraste.",
    specs: [
      [
        "Marca",
        "Emporio Armani"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "38 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-027",
    name: "Nike Air Pegasus 2K5",
    brand: "Nike",
    category: "mujer",
    type: "running",
    price: 139900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Rosa",
        hex: "#f2b3c6",
        img: "assets/img/productos/z32-1.jpg"
      },
      {
        name: "Crema/Café",
        hex: "#efe6d2",
        img: "assets/img/productos/z32-2.jpg"
      },
      {
        name: "Plata/Negro",
        hex: "#c4c7cc",
        img: "assets/img/productos/z32-3.jpg"
      },
      {
        name: "Blanco/Plata",
        hex: "#f4f4f2",
        img: "assets/img/productos/z32-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z32-1.jpg",
      "assets/img/productos/z32-2.jpg",
      "assets/img/productos/z32-3.jpg",
      "assets/img/productos/z32-4.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Runner retro con capas de malla y detalles metalizados. Incluye marquilla con código QR.",
    specs: [
      [
        "Marca",
        "Nike"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-028",
    name: "Adidas Galaxy 6",
    brand: "Adidas",
    category: "mujer",
    type: "running",
    price: 124900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z33-1.jpg"
      },
      {
        name: "Blanco/Rosa",
        hex: "#f4f4f2",
        img: "assets/img/productos/z33-2.jpg"
      },
      {
        name: "Blanco/Celeste",
        hex: "#f4f4f2",
        img: "assets/img/productos/z33-3.jpg"
      },
      {
        name: "Azul/Rosa",
        hex: "#1f3a6b",
        img: "assets/img/productos/z33-4.jpg"
      },
      {
        name: "Blanco/Lila",
        hex: "#f4f4f2",
        img: "assets/img/productos/z33-5.jpg"
      }
    ],
    images: [
      "assets/img/productos/z33-1.jpg",
      "assets/img/productos/z33-2.jpg",
      "assets/img/productos/z33-3.jpg",
      "assets/img/productos/z33-4.jpg",
      "assets/img/productos/z33-5.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Zapatilla de running cómoda y liviana, ideal para entrenar o el día a día.",
    specs: [
      [
        "Marca",
        "Adidas"
      ],
      [
        "Colores disponibles",
        "5"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-029",
    name: "Lacoste L-Guard",
    brand: "Lacoste",
    category: "hombre",
    type: "urbano",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Negro/Gris",
        hex: "#141414",
        img: "assets/img/productos/z34-1.jpg"
      },
      {
        name: "Blanco/Verde",
        hex: "#f4f4f2",
        img: "assets/img/productos/z34-2.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z34-3.jpg"
      },
      {
        name: "Negro/Blanco",
        hex: "#141414",
        img: "assets/img/productos/z34-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z34-1.jpg",
      "assets/img/productos/z34-2.jpg",
      "assets/img/productos/z34-3.jpg",
      "assets/img/productos/z34-4.jpg"
    ],
    sizes: [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Tenis casual-deportivo en gamuza y malla con la V lateral y cocodrilo en la lengüeta.",
    specs: [
      [
        "Marca",
        "Lacoste"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "38 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-030",
    name: "Nike Zoom Runner",
    brand: "Nike",
    category: "hombre",
    type: "running",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco/Rojo",
        hex: "#f4f4f2",
        img: "assets/img/productos/z35-1.jpg"
      },
      {
        name: "Negro/Naranja",
        hex: "#141414",
        img: "assets/img/productos/z35-2.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z35-3.jpg"
      },
      {
        name: "Blanco/Negro",
        hex: "#f4f4f2",
        img: "assets/img/productos/z35-4.jpg"
      },
      {
        name: "Negro/Blanco",
        hex: "#141414",
        img: "assets/img/productos/z35-5.jpg"
      },
      {
        name: "Gris/Neón",
        hex: "#9a9a9a",
        img: "assets/img/productos/z35-6.jpg"
      }
    ],
    images: [
      "assets/img/productos/z35-1.jpg",
      "assets/img/productos/z35-2.jpg",
      "assets/img/productos/z35-3.jpg",
      "assets/img/productos/z35-4.jpg",
      "assets/img/productos/z35-5.jpg",
      "assets/img/productos/z35-6.jpg"
    ],
    sizes: [
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Zapatilla de running con talón envolvente y espuma de respuesta rápida.",
    specs: [
      [
        "Marca",
        "Nike"
      ],
      [
        "Colores disponibles",
        "6"
      ],
      [
        "Tallas",
        "38 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-031",
    name: "Vans Upland",
    brand: "Vans",
    category: "unisex",
    type: "urbano",
    price: 134900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Negro/Gris",
        hex: "#141414",
        img: "assets/img/productos/z36-1.jpg"
      },
      {
        name: "Beige",
        hex: "#d9c7a8",
        img: "assets/img/productos/z36-2.jpg"
      },
      {
        name: "Negro/Blanco",
        hex: "#141414",
        img: "assets/img/productos/z36-3.jpg"
      },
      {
        name: "Gris",
        hex: "#9a9a9a",
        img: "assets/img/productos/z36-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z36-1.jpg",
      "assets/img/productos/z36-2.jpg",
      "assets/img/productos/z36-3.jpg",
      "assets/img/productos/z36-4.jpg"
    ],
    sizes: [
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Skate de perfil grueso en gamuza con la franja lateral de Vans y suela de goma.",
    specs: [
      [
        "Marca",
        "Vans"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "36 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-032",
    name: "Nike Air Max Pulse Cell",
    brand: "Nike",
    category: "unisex",
    type: "urbano",
    price: 139900,
    compareAt: null,
    badge: "new",
    stock: 12,
    colors: [
      {
        name: "Blanco",
        hex: "#f4f4f2",
        img: "assets/img/productos/z37-1.jpg"
      },
      {
        name: "Gris",
        hex: "#9a9a9a",
        img: "assets/img/productos/z37-2.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z37-3.jpg"
      }
    ],
    images: [
      "assets/img/productos/z37-1.jpg",
      "assets/img/productos/z37-2.jpg",
      "assets/img/productos/z37-3.jpg"
    ],
    sizes: [
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "Tenis con capellada de malla perforada y suela de burbujas de aire visibles.",
    specs: [
      [
        "Marca",
        "Nike"
      ],
      [
        "Colores disponibles",
        "3"
      ],
      [
        "Tallas",
        "36 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-033",
    name: "New Balance 9060",
    brand: "New Balance",
    category: "unisex",
    type: "urbano",
    price: 144900,
    compareAt: null,
    badge: "new",
    stock: 12,
    colors: [
      {
        name: "Café/Rosa",
        hex: "#6b4a3a",
        img: "assets/img/productos/z38-1.jpg"
      },
      {
        name: "Gris",
        hex: "#9a9a9a",
        img: "assets/img/productos/z38-2.jpg"
      },
      {
        name: "Negro",
        hex: "#141414",
        img: "assets/img/productos/z38-3.jpg"
      },
      {
        name: "Blanco/Rosa",
        hex: "#f4f4f2",
        img: "assets/img/productos/z38-4.jpg"
      },
      {
        name: "Gris/Negro",
        hex: "#9a9a9a",
        img: "assets/img/productos/z38-5.jpg"
      },
      {
        name: "Beige",
        hex: "#d9c7a8",
        img: "assets/img/productos/z38-6.jpg"
      }
    ],
    images: [
      "assets/img/productos/z38-1.jpg",
      "assets/img/productos/z38-2.jpg",
      "assets/img/productos/z38-3.jpg",
      "assets/img/productos/z38-4.jpg",
      "assets/img/productos/z38-5.jpg",
      "assets/img/productos/z38-6.jpg"
    ],
    sizes: [
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ],
    sold: [],
    desc: "El chunky más buscado de New Balance: capas de gamuza y malla con suela de doble densidad.",
    specs: [
      [
        "Marca",
        "New Balance"
      ],
      [
        "Colores disponibles",
        "6"
      ],
      [
        "Tallas",
        "36 a 43"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  },
  {
    id: "kz-034",
    name: "On Cloudsurfer",
    brand: "On",
    category: "mujer",
    type: "running",
    price: 149900,
    compareAt: null,
    badge: null,
    stock: 12,
    colors: [
      {
        name: "Blanco/Rosa",
        hex: "#f4f4f2",
        img: "assets/img/productos/z39-1.jpg"
      },
      {
        name: "Blanco/Rojo",
        hex: "#f4f4f2",
        img: "assets/img/productos/z39-2.jpg"
      },
      {
        name: "Blanco/Café",
        hex: "#f4f4f2",
        img: "assets/img/productos/z39-3.jpg"
      },
      {
        name: "Blanco/Negro",
        hex: "#f4f4f2",
        img: "assets/img/productos/z39-4.jpg"
      }
    ],
    images: [
      "assets/img/productos/z39-1.jpg",
      "assets/img/productos/z39-2.jpg",
      "assets/img/productos/z39-3.jpg",
      "assets/img/productos/z39-4.jpg"
    ],
    sizes: [
      35,
      36,
      37,
      38,
      39,
      40
    ],
    sold: [],
    desc: "Zapatilla de running con la tecnología CloudTec de celdas huecas para un aterrizaje suave.",
    specs: [
      [
        "Marca",
        "On"
      ],
      [
        "Colores disponibles",
        "4"
      ],
      [
        "Tallas",
        "35 a 40"
      ]
    ],
    care: "Limpiar con paño húmedo y jabón neutro. No usar lavadora ni secadora."
  }
];
