import { navbarTemplate } from "../components/navbar.template.js"

export const navbar = {

    id: `navbar`,
    divId: `navbarDiv`,

    getTemplate(obj) {
        try {
            return navbarTemplate.init(obj)
        } catch (error) {
            console.error('Error al cargar el navbar:', error)
        }
    },

    render() {
        let output = document.querySelector("#navbar")
        if (output) {
            output.innerHTML = this.getTemplate({})

            if (window.idioma) {
                window.idioma.translatePage();
            }

            this.attachCategoryListeners()
        }
    },

    normalizeCategoryToId(name) {
        return (name || "").trim().toLowerCase().replace(/\s+/g, "-")
    },

    attachCategoryListeners() {
        const links = document.querySelectorAll(`#${this.divId} a[data-category]`)
        if (!links || links.length === 0) {
            console.warn('No se encontraron enlaces de categoría en el navbar')
            return
        }

        links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault()

                const categoryName = link.getAttribute("data-category")
                const targetId = this.normalizeCategoryToId(categoryName)
                
                // Detectar si estamos en la página de índice
                const path = window.location.pathname
                const isInPages = path.includes('/pages/')
                
                if (isInPages) {
                    // Estamos en una página secundaria, usar ruta relativa
                    window.location.href = `../index.html#${targetId}`
                } else {
                    // Estamos en index, hacer scroll
                    const section = document.getElementById(targetId)
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                }
            })
        })
    }
}
