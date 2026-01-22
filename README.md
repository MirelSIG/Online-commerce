# 🎸 SONG MUSICAL - Tienda Online de Instrumentos Musicales

> **Proyecto individual** desarrollado a partir de un proyecto colaborativo académico, completamente refactorizado y desplegado en producción.

## 🌟 Sobre Este Proyecto

Este es un **proyecto personal** que nació como parte de un trabajo colaborativo en equipo durante mi formación académica. Tras finalizar la fase colaborativa, decidí tomar el proyecto y llevarlo al siguiente nivel:

- ✅ **Refactorización completa** del código base
- ✅ **Rediseño total** de la interfaz de usuario
- ✅ **Implementación de nuevas funcionalidades**
- ✅ **Despliegue en producción** (GitHub Pages)
- ✅ **Sistema de internacionalización** mejorado
- ✅ **Arquitectura modular** optimizada

### 🔄 Evolución del Proyecto

| Fase | Descripción | Estado |
|------|-------------|--------|
| **Fase 1 - Colaborativa** | Desarrollo inicial en equipo académico | ✅ Completada |
| **Fase 2 - Individual** | Refactorización y mejoras personales | ✅ En producción |
| **Fase 3 - Expansión** | Nuevas características y optimizaciones | 🚀 En progreso |

## 🎵 Descripción

Tienda online de instrumentos musicales desarrollada con **JavaScript vanilla** (sin frameworks). SPA (Single Page Application) multi-idioma con carrito de compras funcional, sistema de búsqueda, y gestión completa de productos.

### 🎨 Características de Diseño

- **Paleta cítrica vibrante**: Naranja intenso (#FF6B35), Naranja brillante (#FFA500), Verde lima (#C1FF72)
- **Gradientes dinámicos**: Efectos visuales modernos
- **Animaciones suaves**: Transiciones elegantes en hover
- **Diseño responsive**: Optimizado para todos los dispositivos

## 🌐 Demo en Vivo

**🔗 URL de producción:** [https://mirelsig.github.io/Online-commerce/](https://mirelsig.github.io/Online-commerce/)

### Capturas de Pantalla
- Hero con gradiente cítrico y slogan personalizado
- Catálogo de productos con búsqueda dinámica
- Carrito de compras con cálculo de IVA
- Sistema multi-idioma (ES/EN/EU)

## 📁 Estructura del Proyecto

```
Online-commerce/
├── index.html                    # Página principal
├── components/                   # Componentes reutilizables
│   ├── cart/                    # Sistema de carrito (MVC)
│   │   ├── cart.js             # Facade principal
│   │   ├── controller.js       # Lógica de negocio
│   │   ├── view.js             # Renderizado
│   │   └── template.js         # Templates HTML
│   ├── header.template.js       # Cabecera con búsqueda
│   ├── navbar.template.js       # Navegación por categorías
│   └── footer.template.js       # Pie de página
├── css/                         # Estilos modulares
│   ├── vars.css                # Variables CSS globales
│   ├── hero.css                # Estilo del hero cítrico
│   └── catalogo.css            # Tarjetas de productos
├── data_js/                     # Datos estáticos
│   └── products.js             # 30 productos (ES6 module)
├── img/                         # Recursos gráficos
│   ├── cuerdas/
│   ├── viento/
│   ├── percusion/
│   ├── teclados/
│   └── accesorios/
├── js/                          # Lógica de aplicación
│   ├── main.js                 # Entry point asíncrono
│   ├── idioma.js               # Sistema i18n personalizado
│   ├── navbar.js               # Navegación inteligente
│   ├── products.js             # Controlador de productos
│   └── productoDetalleController.js
├── lang/                        # Traducciones
│   ├── es_COMPLETO.json        # Español
│   ├── en_COMPLETO.json        # Inglés
│   └── eu_COMPLETO.json        # Euskera
├── pages/                       # Páginas secundarias
│   ├── paginaDetalle.html      # Detalle de producto
│   ├── checkout.html           # Proceso de compra
│   └── contacto.html           # Formulario de contacto
└── .github/
    └── copilot-instructions.md  # Documentación para IA
```

## 🚀 Instalación y Uso Local

### Prerrequisitos
- Node.js (para servidor local) o cualquier servidor HTTP
- Navegador moderno con soporte ES6+

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/MirelSIG/Online-commerce.git
cd Online-commerce

# 2. Iniciar servidor local (elige una opción)

# Opción A: Con VS Code Live Server
# Instalar extensión "Live Server" y clic derecho > Open with Live Server

# Opción B: Con Python
python -m http.server 8000

# Opción C: Con Node.js
npx http-server -p 8000

# Opción D: Con PHP
php -S localhost:8000

# 3. Abrir en el navegador
# http://localhost:8000
```

### Desarrollo

```bash
# Ver cambios en tiempo real
# Recomendado: Five Server (VS Code extension)
# Soporta hot reload y ES6 modules
```

## 🌍 Despliegue en GitHub Pages

### Configuración Automática

El sitio se despliega automáticamente en cada push a `main`:

```bash
# 1. Hacer cambios
git add .
git commit -m "feat: Nueva funcionalidad"
git push origin main

# 2. GitHub Pages se actualiza en ~2 minutos
# 3. Verificar en: https://mirelsig.github.io/Online-commerce/
```

### Configuración Manual

1. **Ir a:** Settings → Pages
2. **Source:** Deploy from branch
3. **Branch:** `main` / (root)
4. **Guardar** y esperar el despliegue

### Archivo `.nojekyll`

Incluido en el repositorio para evitar procesamiento de Jekyll y permitir el uso de carpetas que empiezan con `_`.

## 🛠️ Stack Tecnológico

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables, gradientes y animaciones
- **JavaScript ES6+**: Módulos, async/await, clases
- **Font Awesome**: Iconografía

### Arquitectura
- **Patrón MVC**: En módulo de carrito
- **ES6 Modules**: Importación/exportación nativa
- **SPA**: Navegación sin recarga de página
- **LocalStorage**: Persistencia de datos del cliente

### Características Avanzadas

#### 1. Sistema de Internacionalización (i18n)
```javascript
// Cambio dinámico de idioma
idioma.changeLanguage('es_COMPLETO')  // Español
idioma.changeLanguage('en_COMPLETO')  // Inglés
idioma.changeLanguage('eu_COMPLETO')  // Euskera
```

- Traducciones en archivos JSON
- Atributos HTML: `data-idioma`, `data-idioma-placeholder`, `data-idioma-html`
- Persistencia en localStorage

#### 2. Carrito de Compras Avanzado
```javascript
// Arquitectura MVC
cart.js (Facade)
  ↓
controller.js (Lógica de negocio)
  ↓
view.js + viewResume.js (Renderizado)
```

**Funcionalidades:**
- ✅ Agregar/eliminar productos
- ✅ Modificar cantidades
- ✅ Cálculo automático de IVA (21%)
- ✅ Validación de stock
- ✅ Persistencia en localStorage
- ✅ Contador en tiempo real

#### 3. Rutas Dinámicas
```javascript
// Detección automática de ubicación
const base = window.location.pathname.includes("pages") ? ".." : ".";
```

**Compatibilidad:**
- ✅ GitHub Pages (`/Online-commerce/`)
- ✅ Desarrollo local (`localhost:8000`)
- ✅ Navegación entre páginas automática

#### 4. Gestión de Productos
- **30 productos** en 5 categorías
- Importación estática (no fetch): `import { products } from './data_js/products.js'`
- Búsqueda en tiempo real
- Filtrado por categoría

## 📝 Idiomas Soportados

| Idioma | Código | Archivo | Completado |
|--------|--------|---------|------------|
| 🇪🇸 Español | `es_COMPLETO` | `lang/es_COMPLETO.json` | ✅ 100% |
| 🇬🇧 Inglés | `en_COMPLETO` | `lang/en_COMPLETO.json` | ✅ 100% |
| 🇪🇺 Euskera | `eu_COMPLETO` | `lang/eu_COMPLETO.json` | ✅ 100% |

### Estructura de Traducciones
```json
{
  "header": { "searchPlaceholder": "...", "cart": "..." },
  "navbar": { "guitar": "...", "bass": "..." },
  "hero": { "title": "...", "subtitle": "..." },
  "products": { "addToCart": "...", "price": "..." }
}
```

## 🛒 Funcionalidades Implementadas

### Para el Usuario
- ✅ Catálogo de productos con imágenes
- ✅ Búsqueda inteligente en tiempo real
- ✅ Filtrado por categorías (navbar)
- ✅ Página de detalle individual
- ✅ Carrito lateral deslizante
- ✅ Proceso de checkout completo
- ✅ Cambio de idioma instantáneo
- ✅ Formulario de contacto
- ✅ Diseño 100% responsive

### Técnicas
- ✅ Validación de formularios
- ✅ Gestión de errores
- ✅ Optimización de rendimiento
- ✅ SEO básico
- ✅ Cache busting (cuando necesario)
- ✅ Navegación hash para secciones

## 🎨 Personalización Realizada

### Branding
- **Nombre:** SONG MUSICAL (rebranding completo)
- **Slogan:** "Tu música empieza aquí, hazla sonar"
- **Email:** info@songmusical.com

### Colores Cítricos
```css
--color1: #FF6B35;  /* Naranja intenso */
--color2: #FFA500;  /* Naranja brillante */
--color3: #C1FF72;  /* Verde lima vibrante */
```

### Efectos Visuales
- Gradientes dinámicos en hero
- Texto con efecto degradado multicolor
- Sombras con color de marca
- Animaciones en hover (tarjetas, botones)
- Transiciones suaves (0.3s ease)

## 📚 Documentación para Desarrolladores

### Guía de Copilot
El archivo `.github/copilot-instructions.md` contiene:
- Arquitectura completa del proyecto
- Patrones de código específicos
- Flujos de datos críticos
- Convenciones de nombres
- Debugging tips

### Flujo de Inicialización
```javascript
// js/main.js
async function init() {
  1. await idioma.loadLanguage(savedLang)  // Cargar idioma
  2. productsController.data = products     // Inyectar productos
  3. header.init(), navbar.render()         // Renderizar UI
  4. productsController.render()            // Mostrar catálogo
  5. cart.init()                            // Inicializar carrito
}
```

### Agregar un Nuevo Idioma

1. Crear `lang/CODIGO_COMPLETO.json`
2. Copiar estructura de `es_COMPLETO.json`
3. Traducir todas las claves
4. Agregar a `idioma.js`:
```javascript
this.supportedLanguages = ['es_COMPLETO', 'en_COMPLETO', 'NUEVO']
```
5. Agregar botón en header con `data-lang="NUEVO"`

## 🐛 Solución de Problemas

### Página en blanco
**Causa:** Error de sintaxis en JS o imports incorrectos
**Solución:** 
```bash
# Verificar consola del navegador (F12)
# Revisar errores de importación
# Asegurar que no hay query strings en imports de JS
```

### Productos no se muestran
**Causa:** `productsController.data` no está poblado
**Solución:**
```javascript
// En main.js, asegurar:
import { products } from '../data_js/products.js'
productsController.data = products
```

### Traducciones no funcionan
**Causa:** Idioma no cargado antes de renderizar
**Solución:**
```javascript
// main.js usa async/await
await window.idioma.loadLanguage(savedLang)
// LUEGO renderizar componentes
```

### Carrito vacío tras reload
**Causa:** localStorage no tiene `cart` key
**Solución:**
```javascript
// controller.js inicializa con valores por defecto
setData(data = {}) {
  this.items = data.items || []
  this.cartCount = data.cartCount || 0
  // ...
}
```

### Rutas rotas en GitHub Pages
**Causa:** Paths absolutos hardcodeados
**Solución:**
```javascript
// SIEMPRE usar variable base
const base = window.location.pathname.includes("pages") ? ".." : "."
// Luego: ${base}/img/...
```

## 🔧 Comandos Útiles

```bash
# Desarrollo local
npm install -g http-server
http-server -p 8000

# Verificar sintaxis JS (con Node)
node -c js/main.js

# Ver logs de git
git log --oneline --graph

# Forzar actualización de GitHub Pages
git commit --allow-empty -m "Trigger rebuild"
git push origin main
```

## 📈 Roadmap Futuro

### En Desarrollo 🚧
- [ ] Backend con Node.js + Express
- [ ] Base de datos MongoDB
- [ ] Sistema de autenticación (JWT)
- [ ] Panel de administración
- [ ] Pasarela de pago (Stripe)

### Planificado 📝
- [ ] PWA (Progressive Web App)
- [ ] Tests unitarios (Jest)
- [ ] CI/CD con GitHub Actions
- [ ] Optimización de imágenes WebP
- [ ] Lazy loading de productos

### Ideas Futuras 💡
- [ ] Wishlist / favoritos
- [ ] Comparador de productos
- [ ] Reseñas y ratings
- [ ] Chat de soporte en vivo
- [ ] Newsletter subscription

## 📄 Licencia

Este proyecto es de **código abierto** para propósitos educativos y de portafolio.

### Uso Permitido
✅ Clonar para aprendizaje  
✅ Modificar y adaptar  
✅ Usar como referencia en proyectos académicos  

### Restricciones
❌ Uso comercial sin autorización  
❌ Redistribución como plantilla de pago  

## 👨‍💻 Autor

**Mirel** - Desarrollador Frontend

- GitHub: [@MirelSIG](https://github.com/MirelSIG)
- Proyecto en vivo: [SONG MUSICAL](https://mirelsig.github.io/Online-commerce/)

---

### 📌 Nota Importante

**Este es un proyecto individual** que evolucionó a partir de un trabajo colaborativo académico. Todo el código ha sido refactorizado, mejorado y desplegado de manera independiente como parte de mi portafolio personal de desarrollo web.

El proyecto original colaborativo sirvió como base de aprendizaje, pero la implementación actual, el diseño, las funcionalidades avanzadas y el despliegue en producción son resultado de mi trabajo individual.

---

## 📞 Contacto y Contribuciones

### Reportar Bugs
Abre un [issue en GitHub](https://github.com/MirelSIG/Online-commerce/issues) con:
- Descripción del problema
- Pasos para reproducir
- Navegador y versión
- Screenshots (si aplica)

### Sugerencias
Las ideas y sugerencias son bienvenidas. Abre un issue con la etiqueta `enhancement`.

### Pull Requests
Actualmente no se aceptan PRs externos, ya que este es un proyecto de portafolio personal. Sin embargo, siéntete libre de hacer fork y adaptarlo a tus necesidades.

---

**⭐ Si te gusta el proyecto, dale una estrella en GitHub!**

```
Última actualización: Enero 2026
Versión: 2.0 (Individual)
```
