export const headerTemplate = {
    init(obj) {

        const base = window.location.pathname.includes("pages") ? ".." : ".";

        return `
        <div class="language-selector">
            <button class="lang-btn active" data-lang="es_COMPLETO" onclick="idioma.changeLanguage('es_COMPLETO')">ES</button>
            <button class="lang-btn" data-lang="en_COMPLETO" onclick="idioma.changeLanguage('en_COMPLETO')">EN</button>
            <button class="lang-btn" data-lang="eu_COMPLETO" onclick="idioma.changeLanguage('eu_COMPLETO')">EU</button>
        </div>

        <div id="headerDiv" class="top-header">

            <div class="logo">
                <a href="${base}/index.html">
                    <img src="${base}/img/logos/logo Symphony store.png">

                </a>
            </div>

            <div class="search-bar">
                <input id="buscador-input" type="text" placeholder="Buscar tu instrumento">
                <button id="buscador-btn"><i class="fas fa-search"></i></button>
                <div id="search-results"></div>
            </div>

            <div class="top-right">

                <div class="contactanos">
                    <a href="${base}/pages/contacto.html">CONTACTANOS</a>
                </div>

                <div class="separator"></div>

                <div class="user-actions">
                    <a href="${base}/pages/registro.html" style="color:#9370DB;">
                        <i class="far fa-user" style="font-size:40px;"></i>
                        <span>Mi cuenta</span>
                    </a>

                    <a id="btnCart" href="#" style="color:#9370DB;">
                        <i class="fas fa-shopping-cart" style="font-size:40px;"></i>
                        <span>Carrito</span>
                        <span id="cartCount" class="cart-count">${obj.cartCount ? obj.cartCount : 0}</span>
                    </a>
                </div>

                <div class="datetime-widget">
                    <p id="datetimeDisplay"></p>
                </div>

            </div>
        </div>
        `;
    },
};