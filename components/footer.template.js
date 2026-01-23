export const footerTemplate = {
    init(obj) {

        const base = window.location.pathname.includes("pages") ? ".." : ".";

        return `
        <div class="footer-content">

            <div class="footer-section categorias">
                <div class="divider"></div>
                <h3 data-idioma="footer.categories">CATEGORIAS</h3>
                <ul>
                    <li><span class="bullet"></span><a href="${base}/index.html#cuerdas" data-idioma="footer.categoriesList.strings">Cuerdas</a></li>
                    <li><span class="bullet"></span><a href="${base}/index.html#percusion" data-idioma="footer.categoriesList.percussion">Percusion</a></li>
                    <li><span class="bullet"></span><a href="${base}/index.html#teclados-y-pianos" data-idioma="footer.categoriesList.keyboards">Teclados y Pianos</a></li>
                    <li><span class="bullet"></span><a href="${base}/index.html#viento" data-idioma="footer.categoriesList.wind">Viento</a></li>
                    <li><span class="bullet"></span><a href="${base}/index.html#complementos-y-accesorios" data-idioma="footer.categoriesList.accessories">Complementos y Accesorios</a></li>
                </ul>
            </div>

            <div class="footer-section informacion">
                <div class="divider"></div>
                <h3 data-idioma="footer.information">INFORMACION</h3>
                <ul>
                    <li><span class="bullet"></span><a href="#" data-idioma="footer.informationList.privacy">Política de Privacidad</a></li>
                    <li><span class="bullet"></span><a href="#" data-idioma="footer.informationList.terms">Términos y Condiciones</a></li>
                    <li><span class="bullet"></span><a href="#" data-idioma="footer.informationList.legal">Aviso Legal</a></li>
                    <li><span class="bullet"></span><a href="#" data-idioma="footer.informationList.cookies">Política de Cookies</a></li>
                    <li><span class="bullet"></span><a href="#" data-idioma="footer.informationList.warranty">Garantías y Devoluciones</a></li>
                </ul>
            </div>

            <div class="footer-section contacto">
                <div class="divider"></div>
                <h3 data-idioma="footer.contact">CONTACTO</h3>
                <ul>
                    <li><span class="bullet"></span><span data-idioma="footer.contactInfo.phone">+53 (555) 123-456</span></li>
                    <li><span class="bullet"></span><span data-idioma="footer.contactInfo.email">info@songmusical.com</span></li>
                    <li><span class="bullet"></span><span data-idioma="footer.contactInfo.address">Calle Armonía 123, Ciudad Musical</span></li>
                </ul>
            </div>

            <div class="footer-section siguenos">
                <h3 data-idioma="footer.followUs">SIGUENOS</h3>
                <div class="social-icons">
                    <a href="#"><img src="${base}/img/f.png" alt="Facebook"></a>
                    <a href="#"><img src="${base}/img/w.png" alt="WhatsApp"></a>
                    <a href="#"><img src="${base}/img/I.png" alt="Instagram"></a>
                </div>

                <h4 data-idioma="footer.paymentMethods">Métodos de Pago</h4>
                <div class="payment-icons">
                    <img src="${base}/img/pay.png" alt="PayPal">
                    <img src="${base}/img/payiiii.png" alt="Apple Pay">
                    <img src="${base}/img/master.png" alt="Mastercard">
                </div>
            </div>

        </div>

        <div class="footer-copyright">
            <span data-idioma="footer.copyright">© 2024 SONG MUSICAL - Tienda de Instrumentos Musicales</span>
        </div>
        `;
    }
};
