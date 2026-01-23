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
                    <img src="${base}/img/logos/logo_Song_Musical.png">

                </a>
            </div>

            <div class="search-bar">
                <input id="buscador-input" type="text" data-idioma-placeholder="header.searchPlaceholder" placeholder="Buscar tu instrumento">
                <button id="buscador-btn"><i class="fas fa-search"></i></button>
                <div id="search-results"></div>
            </div>

            <div class="top-right">

                <div class="contactanos">
                    <a href="${base}/pages/contacto.html" data-idioma="header.contact">CONTACTANOS</a>
                </div>

                <div class="separator"></div>

                <div class="user-actions">
                    <a href="${base}/pages/registro.html" style="color:#FF6B35;">
                        <i class="far fa-user" style="font-size:40px;"></i>
                        <span data-idioma="header.myAccount">Mi cuenta</span>
                    </a>

                    <a id="btnCart" href="#" style="color:#FF6B35;">
                        <i class="fas fa-shopping-cart" style="font-size:40px;"></i>
                        <span data-idioma="header.cart">Carrito</span>
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
    
    initDateTime() {
        const updateDateTime = () => {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            const datetimeDisplay = document.getElementById('datetimeDisplay');
            if (datetimeDisplay) {
                datetimeDisplay.textContent = now.toLocaleDateString('es-ES', options);
            }
        };
        
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }
};