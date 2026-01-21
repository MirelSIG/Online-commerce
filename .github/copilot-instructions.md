# Copilot Instructions - Online Commerce (Symphony Store)

## Arquitectura general

**SPA vanilla JavaScript multi-idioma** de tienda de instrumentos musicales sin frameworks. Usa **ES6 modules**, i18n manual, y localStorage para estado. Arquitectura modular con separación clara: componentes reutilizables en `components/`, controladores en `js/`, datos estáticos en `data_js/`.

**Deployment**: GitHub Pages en https://mirelsig.github.io/Online-commerce/

### Flujo de datos clave
- **Productos**: Importados desde `data_js/products.js` (NO fetch desde JSON). Se inyectan en `productsController.data` en main.js
- **Carrito**: Estado en localStorage (`cartData`). Cart module sigue patrón MVC: `cart.js` (facade) → `controller.js` (lógica) → `view.js` + `viewResume.js` (renderizado)
- **i18n**: Sistema personalizado en `idioma.js`. Traducciones en `lang/*.json`. Atributos HTML: `data-idioma`, `data-idioma-placeholder`, `data-idioma-html`

## Patrones específicos del proyecto

### 1. Rutas relativas dinámicas
Todas las rutas se calculan según ubicación (index vs páginas):
```javascript
const base = window.location.pathname.includes("pages") ? ".." : ".";
```
**Siempre** usa esta variable `base` para rutas de assets, scripts y links. Nunca uses rutas absolutas con `/Online-commerce/` hardcodeadas.

**Navegación entre páginas**: 
- Los enlaces del navbar detectan si estás en index o página secundaria
- Desde páginas secundarias → redirige a `index.html#categoria`  
- Desde index → scroll suave a la sección
- Compatible con GitHub Pages (`/Online-commerce/`) y desarrollo local

### 2. Estructura de componentes
Cada componente exporta un objeto con métodos:
```javascript
export const componentName = {
    init() { /* setup */ },
    render() { /* dibuja en DOM */ },
    f() { /* lógica/eventos */ }
}
```
Templates en archivos separados (`*.template.js`) retornan strings HTML.

### 3. Gestión del carrito
- **Agregar**: `cart.addItem(id)` → actualiza localStorage → re-renderiza
- **Toggle**: `cart.toggle()` → muestra/oculta panel lateral
- **Totales**: Se recalculan automáticamente con IVA (21%) en `controller.js`

### 4. Sistema de idiomas
- Idiomas soportados: `es_COMPLETO`, `en_COMPLETO`, `eu_COMPLETO`
- Cambio de idioma: `idioma.changeLanguage('es_COMPLETO')` → recarga traducciones y re-traduce página
- Traducciones anidadas accesibles por dot-notation: `data-idioma="checkout.billingAddress"`

### 5. Imágenes de productos
Rutas relativas usando variable `base`: `${base}/img/categoria/nombre.webp`
Cada producto tiene array `imagenes` en su estructura JSON.
**NUNCA** uses rutas absolutas como `/Online-commerce/img/...` - usa siempre `base` variable.

## Convenciones de código

- **Imports**: Siempre usa extensión `.js` en imports (`import { x } from "./file.js"`)
- **IDs DOM**: Usa template literals para selectores (`#${this.idBtnCart}`)
- **Comentarios críticos**: NO borrar imports que parecen no usados si hay comentario `/* no borrar */`
- **LocalStorage**: Claves específicas: `cartData`, `products`, `language`
- **CSS**: Variables globales en `css/vars.css`. Cada página tiene su propio CSS

## Flujos clave

### Inicialización de página (main.js)
1. Inyectar productos en productsController.data
2. Renderizar componentes estáticos (header, navbar, footer)
3. Inicializar carrito con `cart.init()`
4. Cargar idioma con `idioma.loadLanguage()`

### Página de detalle (paginaDetalle.html)
- Usa parámetro URL `?id=X`
- Importa productos directamente (no fetch)
- Renderiza con `detalleTemplate.init(product)`

### Checkout
- Valida formulario billing/shipping
- Calcula totales con IVA desde cartController
- Guarda orden en localStorage

## Archivos críticos

- [js/main.js](js/main.js) - Entry point de index.html
- [js/idioma.js](js/idioma.js) - Sistema i18n completo
- [components/cart/controller.js](components/cart/controller.js) - Lógica de negocio del carrito
- [data_js/products.js](data_js/products.js) - Fuente de verdad de productos
- [css/vars.css](css/vars.css) - Variables CSS globales

## Debugging

- **Productos no se muestran**: Verificar que `productsController.data` está poblado
- **Traducciones fallan**: Revisar que key existe en `lang/*.json` y DOM tiene `data-idioma`
- **Carrito vacío tras reload**: Verificar localStorage tiene `cartData` válido
- **Rutas rotas en páginas**: Asegurar uso de `base` variable para rutas relativas (NUNCA hardcodear `/Online-commerce/`)
- **Navbar no navega entre páginas**: Los enlaces de categorías deben redirigir a `index.html#categoria` desde páginas secundarias
- **GitHub Pages no funciona**: Verificar que todas las rutas usan variable `base` y no tienen paths absolutos hardcodeados
