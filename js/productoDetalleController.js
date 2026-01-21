// Importar productos directamente (sin fetch)
import { products } from "../data_js/products.js";

import { productsController } from "./products.js"; 
import { detalleTemplate } from "../components/paginaDetalle.template.js";
import { cart } from "../components/cart/cart.js";

// Inyectar los productos en el controlador global
productsController.data = products;

export const productoDetalleController = {
  container: null,

  init() {
    console.log('🔍 Iniciando productoDetalleController');
    this.container = document.getElementById("product-detail");
    
    if (!this.container) {
      console.error('❌ Contenedor #product-detail no encontrado');
      return;
    }

    console.log('✅ Contenedor encontrado');
    this.render();
  },

  traerProductoURL() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log('🔗 ID del producto desde URL:', id);
    return id ? Number(id) : null;
  },

  render() {
    const id = this.traerProductoURL();
    if (!id) {
      console.error('❌ No se encontró ID en la URL');
      return;
    }

    const product = productsController.data.find(p => p.id === id);

    if (!product) {
      console.error("❌ Producto no encontrado con id:", id);
      return;
    }

    console.log('✅ Producto encontrado:', product.nombre);
    this.container.innerHTML = detalleTemplate.init(product);
    this.agregarCarrito(id);
    
    // Traducir después de renderizar
    if (window.idioma) {
      window.idioma.translatePage();
    }
  },

  agregarCarrito(productId) {
    const button = this.container.querySelector(".btn-add");
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        cart.addItem(productId);
        button.textContent = "¡Añadido!";
        button.disabled = true;
        setTimeout(() => {
          button.textContent = "Añadir al carrito";
          button.disabled = false;
        }, 1000);
      });
      console.log('🛒 Listener del carrito agregado');
    } else {
      console.warn('⚠️ Botón de añadir al carrito no encontrado');
    }
  },
};

// Iniciar solo en la página de detalle
document.addEventListener("DOMContentLoaded", () => {
  console.log('📄 DOM cargado, iniciando controlador de detalle');
  productoDetalleController.init();
});
