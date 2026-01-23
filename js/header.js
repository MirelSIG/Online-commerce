import { headerTemplate } from "../components/header.template.js"
import { cart } from "../components/cart/cart.js"

export const header = {

    id: `header`,
    divId: `headerDiv`,
    cartCount: cart.cartCount,

    init() {
        const exist = document.querySelector(`#${this.divId}`) ? true : false;
        if (!exist) {
            this.render();
        }
    },

    getTemplate(obj) {
        try {
            return headerTemplate.init(obj);
        } catch (error) {
            console.error('Error al cargar el header:', error);
        }
    },

    render() {
        const output = document.querySelector(`#${this.id}`);
        if (output) {
            output.innerHTML = this.getTemplate({ cartCount: cart.cartCount });

            // Traducción
            if (window.idioma) {
                window.idioma.translatePage();
            }

            // Hacer headerTemplate accesible globalmente para actualizar fecha
            window.headerTemplate = headerTemplate;

            // Inicializar reloj después de renderizar el HTML
            headerTemplate.initDateTime();
        }
    },

    async buscarInstrumentos(buscar) {
        // ❗ Debe usar ruta dinámica, no absoluta
        const base = window.location.pathname.includes("pages") ? ".." : ".";
        const respuesta = await fetch(`${base}/data/products.json`);
        const instrumento = await respuesta.json();

        return instrumento.filter(item =>
            item.nombre.toLowerCase().includes(buscar.toLowerCase())
        );
    },

    mostrarResultados(resultados) {
        const contenedor = document.getElementById("search-results");
        contenedor.innerHTML = "";

        if (resultados.length === 0) {
            contenedor.innerHTML = "<p>No se encontraron resultados</p>";
            return;
        }

        resultados.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("resultado-item");
            div.innerHTML = `<p>${item.nombre}</p>`;

            div.addEventListener("click", () => {
                const base = window.location.pathname.includes("pages") ? ".." : ".";
                window.location.href = `${base}/pages/paginaDetalle.html?id=${item.id}`;
            });

            contenedor.appendChild(div);
        });
    }
};
