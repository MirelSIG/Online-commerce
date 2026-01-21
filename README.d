# Online‑commerce  
Proyecto individual de tienda online con catálogo dinámico, carrito de compras y sistema de usuarios.

Este proyecto nace como una **evolución y reestructuración completa** del antiguo repositorio grupal *e‑commerce*.  
A partir de esa base inicial, he realizado una **refactorización integral**, incorporando mejoras técnicas, modularización avanzada y compatibilidad total con GitHub Pages.

---

## Objetivo del proyecto
Desarrollar una aplicación web funcional que simula una tienda online, con:

- Catálogo dinámico de productos  
- Sistema de detalle por producto  
- Carrito de compras persistente  
- Registro y login de usuarios  
- Cambio de idioma  
- Navegación fluida entre secciones  
- Componentes reutilizables (header, navbar, footer, hero, etc.)

---

## De e‑commerce a Online‑commerce  
Este repositorio representa una **versión individual mejorada**, donde:

- Se reorganizó toda la estructura del proyecto  
- Se corrigieron rutas, nombres de archivos y componentes  
- Se eliminaron dependencias rotas del proyecto grupal  
- Se migró el sistema de datos desde JSON a módulos JS (`data_js/`)  
- Se adaptó todo el código para funcionar correctamente en GitHub Pages  
- Se modularizó la carga de templates y componentes  
- Se optimizó la lógica del catálogo y del carrito  

El objetivo fue convertir un proyecto colaborativo en una **solución personal, mantenible y escalable**.

---

## 🛠️ Mejoras técnicas implementadas

### ✔️ 1. Migración de JSON a módulos JS  
GitHub Pages no permite `fetch()` de archivos locales.  
Por ello, los datos se transformaron en módulos ES6:

- `data/products.json` → `data_js/products.js`  
- `lang/*.json` → `lang_js/*.js`

Esto permite:

```js
import { products } from "../data_js/products.js";
