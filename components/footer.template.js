export const footerTemplate = {
    init(obj) {

        const base = window.location.pathname.includes("pages") ? ".." : ".";

        return `
        <div class="footer-content">

            <div class="footer-section categorias">
                <div class="divider"></div>
                <h3>CATEGORIAS</h3>
                <ul>
                    <li><span class="bullet"></span><a href="${base}/index.html#cuerdas">Cuerdas</a></li>
                    <li><span class="bullet"></span><a href="${base}/index.html#percusion">Percusion</a></li>
                    <li><span class="bullet"></span><a href="${base}/index.html#teclados-y-pianos">Teclados y Pianos</a></li>
                    <li><span class="bullet"></span><a href="${base}/index.html#viento">Viento</a></li>
                    <li><span class="bullet"></span><a href="${base}/index.html#complementos-y-accesorios">Complementos y Accesorios</a></li>
                </ul>
            </div>

            <div class="footer-section informacion">
                <div class="divider"></div>
                <h3>INFORMACION</h3>
                <ul>
                    <li><span class="bullet"></span><a href="#">Política de Privacidad</a></li>
                    <li><span class="bullet"></span><a href="#">Términos y Condiciones</a></li>
                    <li><span class="bullet"></span><a href="#">Aviso Legal</a></li>
                    <li><span class="bullet"></span><a href="#">Política de Cookies</a></li>
                    <li><span class="bullet"></span><a href="#">Garantías y Devoluciones</a></li>
                </ul>
            </div>

            <div class="footer-section contacto">
                <div class="divider"></div>
                <h3>CONTACTO</h3>
                <ul>
                    <li><span class="bullet"></span>+53 (555) 123-456</li>
                    <li><span class="bullet"></span>info@citrussound.com</li>
                    <li><span class="bullet"></span>Calle Armonía 123, Ciudad Musical</li>
                </ul>
            </div>

            <div class="footer-section siguenos">
                <h3>SIGUENOS</h3>
                <div class="social-icons">
                    <a href="#"><img src="${base}/img/f.png" alt="Facebook"></a>
                    <a href="#"><img src="${base}/img/w.png" alt="WhatsApp"></a>
                    <a href="#"><img src="${base}/img/I.png" alt="Instagram"></a>
                </div>

                <h4>Métodos de Pago</h4>
                <div class="payment-icons">
                    <img src="${base}/img/pay.png" alt="PayPal">
                    <img src="${base}/img/payiiii.png" alt="Apple Pay">
                    <img src="${base}/img/master.png" alt="Mastercard">
                </div>
            </div>

        </div>

        <div class="footer-copyright">
            © 2024 Song music - Tienda de Instrumentos Musicales
        </div>
        `;
    }
};
