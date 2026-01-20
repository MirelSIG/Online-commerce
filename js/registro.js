import { registroTemplate } from "../components/registro.template.js"

export const registro = {

    f() {
        let di = document.querySelector("#registro-section")
        if (di) {

            di.innerHTML = registroTemplate.init()

            // NO BORRAR: Traduce el contenido nuevo del registro
            if (window.idioma) {
                window.idioma.translatePage();
            }
        }


    }


}