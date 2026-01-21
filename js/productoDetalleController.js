// Importar productos directamente (sin fetch)
import { products } from "../data_js/products.js";

import { productsController } from "./products.js"; 
import { detalleTemplate } from "../components/paginaDetalle.template.js";
import { cart } from "../components/cart/cart.js";

// Inyectar los productos en el controlador global
productsController.data = products;

export const productoDetalleController = {
  container: document.getElementById("product-detail"),

  init() {
    if (!this.container) return;

    // Ya no esperamos fetch: los datos están cargados desde el import
    this.render();
  },

  traerProductoURL() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id ? Number(id) : null;
  },

  render() {
    const id = this.traerProductoURL();
    if (!id) return;

    const product = productsController.data.find(p => p.id === id);

    if (!product) {
      console.error("Producto no encontrado con id:", id);
      return;
    }

    this.container.innerHTML = detalleTemplate.init(product);
    this.agregarCarrito(id);
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
    }
  },
};

// Iniciar solo en la página de detalle
document.addEventListener("DOMContentLoaded", () => {
  productoDetalleController.init();
});
