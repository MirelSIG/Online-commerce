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

// 1. Cargar datos SIN FETCH
productsController.data = products;
console.log('Productos asignados al controlador:', productsController.data.length);

// 2. Renderizar componentes estáticos
header.init();
navbar.render();
hero.render();
footer.render();   // ← solo una vez

console.log('Renderizando productos...');
productsController.render();
console.log('Productos renderizados');

// 3. Inicializar carrito (después de renderizar header)
console.log('🛒 Inicializando carrito...');
cart.init();
console.log('🛒 Carrito inicializado');

// 4. Evento para abrir/cerrar el carrito
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

// 5. Formularios específicos
const registroSection = document.querySelector("#registro-section");
if (registroSection) registro.f();

const usuarioSection = document.querySelector("#usuario");
if (usuarioSection) usuarioCreado.f();

// 6. Login
login.loginF();

// 7. Navegación por hash
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

// 8. Buscador del header
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
