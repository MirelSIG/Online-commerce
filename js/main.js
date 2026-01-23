// main.js

// IMPORTS DE COMPONENTES
import { header } from "./header.js";
import { navbar } from "./navbar.js";
import { footer } from "./footer.js";
import { cart } from "../components/cart/cart.js";
import { productsController } from "./products.js";
import { registro } from "./registro.js";
import { usuarioCreado } from "./usuarioCreado.js";
import { login } from "./login.js";
import { hero } from "./hero.js";

// IMPORTAR PRODUCTOS DESDE EL MÓDULO JS (NO JSON)
import { products } from "../data_js/products.js";

console.log('Main.js cargado - Productos importados:', products.length);

// FUNCIÓN ASÍNCRONA PRINCIPAL
async function init() {
    // 1. Cargar idioma PRIMERO (antes de renderizar)
    const savedLang = localStorage.getItem('language') || 'es_COMPLETO';
    await window.idioma.loadLanguage(savedLang);
    console.log('✅ Idioma cargado:', savedLang);

    // 2. Cargar datos SIN FETCH
    productsController.data = products;
    console.log('Productos asignados al controlador:', productsController.data.length);

    // 3. Renderizar componentes estáticos
    header.init();
    hero.render();
    navbar.render();
    footer.render();

    // 4. Renderizar productos SOLO si existe el contenedor (página index)
    const catalogoContainer = document.getElementById("catalogo-container");
    if (catalogoContainer) {
        console.log('Renderizando productos...');
        productsController.render();
        console.log('Productos renderizados');
    } else {
        console.log('⏭️ Página sin catálogo (detalle, contacto, etc.) - omitiendo render de productos');
    }

    // 5. Inicializar carrito (después de renderizar header)
    console.log('🛒 Inicializando carrito...');
    cart.init();
    console.log('🛒 Carrito inicializado');

    // 6. Evento para abrir/cerrar el carrito
    console.log('🛒 Buscando botón del carrito con ID:', cart.idBtnCart);
    const btnCart = document.querySelector(`#${cart.idBtnCart}`);
    if (btnCart) {
        console.log('🛒 Botón del carrito encontrado, agregando listener');
        btnCart.addEventListener("click", function(e){
            e.preventDefault();
            console.log('🛒 Click en botón del carrito');
            cart.toggle();
        });
    } else {
      console.error('❌ Botón del carrito NO encontrado. ID esperado:', cart.idBtnCart);
    }

    // 7. Formularios específicos
    const registroSection = document.querySelector("#registro-section");
    if (registroSection) registro.f();

    const usuarioSection = document.querySelector("#usuario");
    if (usuarioSection) usuarioCreado.f();

    // 8. Login
    login.loginF();

    // 9. Navegación por hash
    const navigateToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Ejecutar después de que el DOM y los productos estén renderizados
    setTimeout(navigateToHash, 100);
    setTimeout(navigateToHash, 500);
    window.addEventListener("hashchange", navigateToHash);

    // 10. Buscador del header
    const input = document.getElementById("buscador-input");
    if (input) {
        input.addEventListener("keyup", async () => {
            const texto = input.value.trim();
            if (texto === "") {
                document.getElementById("search-results").innerHTML = "";
                return;
            }
            const resultados = await header.buscarInstrumentos(texto);
            header.mostrarResultados(resultados);
        });
    } else {
        console.warn("No se encontró el input del buscador");
    }
}

// INICIAR LA APLICACIÓN
init().catch(error => {
    console.error('❌ Error inicializando la aplicación:', error);
});
