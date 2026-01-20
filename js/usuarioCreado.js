import { usuarioCreadoTemplate } from "../components/usuarioCreado.template.js"

export const usuarioCreado = {

    f() {
        let fi = document.querySelector("#usuario")
        fi.innerHTML = usuarioCreadoTemplate.init()

        // NO BORRAR: Traduce el contenido nuevo de usuario creado
        if (window.idioma) {
            window.idioma.translatePage();
        }

    }


}