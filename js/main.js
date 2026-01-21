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
import { productoDetalleController } from "./productoDetalle.js";
import { hero } from "./hero.js";

// IMPORTAR PRODUCTOS DESDE EL MÓDULO JS (NO JSON)
import { products } from "../data_js/products.js";

// 1. Cargar datos SIN FETCH (GitHub Pages no permite fetch local)
productsController.data = products;

// 2. Renderizar componentes estáticos
header.init();
navbar.render();
footer.render();
hero.render();
footer.render();
productsController.render();

// 3. Inicializar carrito
cart.init();

// 4. Evento para abrir/cerrar el carrito
const btnCart = document.querySelector(`#${cart.idBtnCart}`);
if (btnCart) {
    btnCart.addEventListener("click", function(e){
        e.preventDefault();
        cart.toggle();
    });
} else {
  console.log("Botón del carrito no encontrado. ¿Está cart.idBtnCart correctamente definido?");
}

// 7. Formularios específicos
const registroSection = document.querySelector("#registro-section");
if (registroSection) registro.f();

const usuarioSection = document.querySelector("#usuario");
if (usuarioSection) usuarioCreado.f();

// 8. Login
login.loginF();

// Navegación por hash
const navigateToHash = () => {
  const hash = window.location.hash;
  if (!hash) return;
  const target = document.getElementById(hash.slice(1));
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

navigateToHash();
setTimeout(navigateToHash, 0);
window.addEventListener("hashchange", navigateToHash);

// Buscador del header
const input = document.getElementById("buscador-input");
if (!input) {
  console.error("No se encontró el input del buscador");
}
input.addEventListener("keyup", async () => {
    const texto = input.value.trim();
    if (texto === "") {
        document.getElementById("search-results").innerHTML = "";
        return;
    }
    const resultados = await header.buscarInstrumentos(texto);
    header.mostrarResultados(resultados);
});

// Registro
const inpt = document.querySelector("#registro-section");
if (inpt) registro.f();

// Detalle de producto
// productoDetalleController.renderProductDetail();

// Login
login.loginF();
