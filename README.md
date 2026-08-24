# NovaShop — Tienda virtual de calzado

Sitio web completo para una tienda de zapatos online, hecho con HTML, CSS y JavaScript
puros (sin frameworks ni dependencias). Todos los pedidos y consultas se canalizan por
**WhatsApp** y **correo electrónico**.

> Las imágenes están intencionalmente en blanco: cada foto es un bloque `.ph` con una
> etiqueta que indica qué imagen va ahí. Ver [Cómo poner las imágenes](#cómo-poner-las-imágenes).

## Datos de contacto configurados

| Dato      | Valor |
|-----------|-------|
| WhatsApp  | +57 320 460 0630 |
| Correo    | Novashop.storeDrop@gmail.com |

Todos los botones de compra, el carrito, el formulario de pedido y el formulario de
contacto arman un mensaje ya redactado y lo abren en WhatsApp (`wa.me`) o en el cliente
de correo (`mailto:`).

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Portada: hero, categorías, destacados, ofertas, beneficios, reseñas y newsletter. |
| `catalogo.html` | Catálogo con búsqueda, filtros (categoría, tipo, talla, precio, ofertas) y ordenamiento. |
| `producto.html` | Ficha de producto: galería, colores, tallas, cantidad, ficha técnica, guía de tallas, relacionados. |
| `carrito.html` | Carrito completo, formulario de datos de envío y confirmación del pedido. |
| `contacto.html` | Formulario de contacto, envíos, cambios y devoluciones, guía de tallas y FAQ. |

## Funcionalidades

- Carrito persistente en `localStorage` (sobrevive al recargar y al cerrar el navegador).
- Carrito lateral (drawer) disponible en todas las páginas, con subtotal, envío y total.
- Cálculo automático de envío: gratis desde $250.000, si no $15.000.
- Filtros combinables, búsqueda por texto y 5 criterios de ordenamiento.
- Selección de talla y color obligatoria antes de agregar al carrito; tallas agotadas deshabilitadas.
- Favoritos (guardados también en `localStorage`).
- Checkout que genera el pedido completo como mensaje de WhatsApp o correo.
- Diseño responsive (móvil, tablet y escritorio), menú lateral en móvil.
- Accesibilidad: enlace de salto al contenido, `aria-label`, foco visible, roles en diálogos.
- Botón flotante de WhatsApp en todas las páginas.

## Cómo verlo

Abrí `index.html` directamente en el navegador, o levantá un servidor local:

```bash
python -m http.server 8000
# luego abrí http://localhost:8000
```

## Cómo editar los productos

Todo el contenido de la tienda vive en `assets/js/data.js`.

- `STORE` — nombre, teléfono, correo, ciudad, horario, redes, monto de envío gratis y costo de envío.
- `CATEGORIES` / `TYPES` — las opciones que aparecen en los filtros.
- `PRODUCTS` — el catálogo. Cada producto tiene:

```js
{
  id: "nv-017",                 // único, se usa en la URL: producto.html?id=nv-017
  name: "Nombre del modelo",
  brand: "Marca",
  category: "hombre",           // hombre | mujer | ninos | unisex
  type: "running",              // running | urbano | deportivo | formal | botas | sandalias
  price: 249900,
  compareAt: 299900,            // precio tachado; null si no hay descuento
  badge: "sale",                // "sale" | "new" | null
  rating: 4.7, reviews: 88, stock: 12,
  colors: [{ name: "Negro", hex: "#101010" }],
  sizes: [38, 39, 40, 41],
  sold: [38],                   // tallas agotadas (se muestran tachadas)
  desc: "Descripción larga.",
  specs: [["Material", "Cuero"], ["Peso", "250 g"]],
  care: "Instrucciones de cuidado."
}
```

Para cambiar el teléfono o el correo alcanza con editar `STORE.phone`, `STORE.phoneRaw`
(solo dígitos, con el código de país) y `STORE.email`.

## Cómo poner las imágenes

Cada espacio de foto es un `div` con la clase `.ph` y una etiqueta descriptiva:

```html
<div class="ph ph--4x5" data-label="Imagen Aero Runner Pro"></div>
```

Para reemplazarlo por una foto real, poné la imagen en `assets/img/` y cambiá el bloque por:

```html
<img src="assets/img/aero-runner-pro.jpg" alt="Aero Runner Pro" width="800" height="1000">
```

Los tamaños disponibles son `ph--1x1` (cuadrada), `ph--4x5` (producto), `ph--16x9`
(banner) y `ph--hero` (portada). Las tarjetas de producto y la galería del detalle se
generan desde `assets/js/app.js` (funciones `productCardHTML` e `initPDP`), así que para
usar fotos reales por producto conviene agregar un campo `images: []` a cada producto en
`data.js` y usarlo en esas dos funciones.

## Estructura

```
novashop/
├── index.html
├── catalogo.html
├── producto.html
├── carrito.html
├── contacto.html
├── assets/
│   ├── css/styles.css     ← sistema de diseño completo
│   ├── js/data.js         ← productos y datos de la tienda
│   ├── js/app.js          ← carrito, filtros, ficha de producto, formularios
│   └── img/               ← acá van las fotos reales
└── README.md
```

## Publicar el sitio

Es un sitio estático: funciona en GitHub Pages, Netlify, Vercel o cualquier hosting.

**GitHub Pages:** subí el repositorio, entrá en *Settings → Pages*, elegí la rama `main`
y la carpeta `/ (root)`. En un minuto queda publicado.

## Notas

Los productos, precios y reseñas son de ejemplo y deben reemplazarse por los reales antes
de publicar la tienda.

## Desplegar en Cloudflare Pages

Este repositorio ya está listo para Cloudflare Pages (incluye `_headers` y `_redirects`).

1. Entrá a <https://dash.cloudflare.com> → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**.
2. Autorizá GitHub y elegí el repositorio `sambi19/novashop`.
3. Configuración del build:
   - **Framework preset:** `None`
   - **Build command:** *(dejar vacío)*
   - **Build output directory:** `/`
   - **Root directory:** `/`
4. **Save and Deploy**. En menos de un minuto queda en `https://novashop.pages.dev`.

Cada `git push` a `main` publica una nueva versión automáticamente.

Para usar un dominio propio: en el proyecto de Pages entrá a **Custom domains** →
**Set up a custom domain** y seguí los pasos de DNS.
