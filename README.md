# Song Musical - Tienda Online de Instrumentos Musicales

## 🎵 Descripción
Tienda online de instrumentos musicales desarrollada con JavaScript vanilla (sin frameworks). Sitio multi-idioma (Español, Inglés, Euskera) con carrito de compras funcional.

## 🌐 Demo en Vivo
**URL de GitHub Pages:** https://mirelsig.github.io/Online-commerce/

## 📁 Estructura del Proyecto
```
Online-commerce/
├── index.html              # Página principal
├── components/             # Componentes reutilizables (templates)
├── css/                    # Estilos
├── data_js/                # Datos de productos (JSON como módulo ES6)
├── img/                    # Imágenes
├── js/                     # Lógica de la aplicación
│   ├── main.js            # Entry point
│   ├── idioma.js          # Sistema i18n
│   ├── navbar.js          # Navegación
│   └── ...
├── lang/                   # Archivos de traducciones (JSON)
├── pages/                  # Páginas secundarias
│   ├── checkout.html
│   ├── contacto.html
│   └── ...
└── .github/
    └── copilot-instructions.md  # Guía para agentes de IA
```

## 🚀 Instalación y Uso Local

### Prerrequisitos
- Navegador web moderno
- Servidor local (Live Server, http-server, etc.)

### Pasos
1. Clonar el repositorio:
```bash
git clone https://github.com/MirelSIG/Online-commerce.git
cd Online-commerce
```

2. Iniciar un servidor local:
```bash
# Opción 1: Con VS Code Live Server
# Clic derecho en index.html > "Open with Live Server"

# Opción 2: Con Python
python -m http.server 8000

# Opción 3: Con Node.js
npx http-server
```

3. Abrir en el navegador:
```
http://localhost:8000
```

## 🌍 Despliegue en GitHub Pages

El sitio está configurado para desplegarse automáticamente en GitHub Pages:

1. **URL del sitio:** `https://mirelsig.github.io/Online-commerce/`
2. **Rama:** `main`
3. **Carpeta:** `/` (raíz)

### Actualizar el sitio
```bash
# Hacer cambios en el código
git add .
git commit -m "Descripción de cambios"
git push origin main

# GitHub Pages se actualiza automáticamente en 1-2 minutos
```

## 🛠️ Características Técnicas

- **Sin frameworks**: JavaScript vanilla puro
- **Módulos ES6**: Arquitectura modular
- **i18n**: Sistema de internacionalización personalizado
- **Carrito de compras**: Gestión con localStorage
- **Responsive**: Diseño adaptable a dispositivos móviles
- **Rutas dinámicas**: Compatibilidad con GitHub Pages y desarrollo local

## 📝 Configuración de Idiomas

Idiomas soportados:
- 🇪🇸 Español (`es_COMPLETO`)
- 🇬🇧 Inglés (`en_COMPLETO`)
- 🇪🇺 Euskera (`eu_COMPLETO`)

Los archivos de traducción están en `/lang/*.json`

## 🛒 Funcionalidades

- ✅ Catálogo de productos por categorías
- ✅ Búsqueda de productos
- ✅ Carrito de compras persistente
- ✅ Checkout con formulario
- ✅ Página de detalle de productos
- ✅ Sistema multi-idioma
- ✅ Formulario de contacto
- ✅ Diseño responsive

## 📄 Licencia

Este proyecto es de código abierto para propósitos educativos.

## 👨‍💻 Desarrollo

## 🐛 Solución de Problemas

**Problema:** Las rutas no funcionan en GitHub Pages
- **Solución:** El sistema usa rutas relativas que detectan automáticamente el entorno

**Problema:** Los productos no se cargan
- **Solución:** Verifica que `data_js/products.js` esté importado en `main.js`

**Problema:** Traducciones no funcionan
- **Solución:** Verifica que los archivos en `lang/*.json` existan y tengan las claves correctas

## 📞 Contacto

Para preguntas o sugerencias sobre el proyecto, abre un issue en GitHub.
