/* Soporta Español (es), Inglés (en), Euskera (eu). */

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'es_COMPLETO';
        this.translations = {};
        this.supportedLanguages = ['es_COMPLETO', 'en_COMPLETO', 'eu_COMPLETO'];
    }

    async loadLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) {
            console.error(`Language ${lang} not supported`);
            return;
        }

        try {
            // RUTA DINÁMICA CORRECTA
            const base = window.location.pathname.includes("pages") ? ".." : ".";
            const response = await fetch(`${base}/lang/${lang}.json`);

            if (!response.ok) {
                throw new Error(`Failed to load language file: ${lang}.json`);
            }

            this.translations = await response.json();
            this.currentLang = lang;

            localStorage.setItem('language', lang);

            this.translatePage();
            this.updateActiveButton();

            console.log(`Language changed to: ${lang}`);
        } catch (error) {
            console.error('Error loading language:', error);
        }
    }

    translatePage() {
        document.querySelectorAll('[data-idioma]').forEach(element => {
            const key = element.getAttribute('data-idioma');
            const translation = this.getTranslation(key);

            if (translation) {
                if (element.hasAttribute('data-idioma-html')) {
                    element.innerHTML = translation;
                } else if (element.hasAttribute('data-idioma-placeholder')) {
                    element.placeholder = translation;
                } else if (element.hasAttribute('data-idioma-value')) {
                    element.value = translation;
                } else {
                    element.textContent = translation;
                }
            } else {
                console.warn(`Translation not found for key: ${key}`);
            }
        });
    }

    getTranslation(keyPath) {
        const keys = keyPath.split('.');
        let translation = this.translations;

        for (const key of keys) {
            if (translation && typeof translation === 'object' && key in translation) {
                translation = translation[key];
            } else {
                return null;
            }
        }

        return translation;
    }

    changeLanguage(lang) {
        if (lang !== this.currentLang) {
            this.loadLanguage(lang);
            // Actualizar el reloj con el nuevo idioma
            if (window.headerTemplate && typeof window.headerTemplate.initDateTime === 'function') {
                window.headerTemplate.initDateTime();
            }
        }
    }

    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Instancia global
window.idioma = new I18n();

// NO auto-inicializar, dejar que main.js controle el flujo
export { I18n };
