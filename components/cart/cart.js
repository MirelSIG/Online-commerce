import { cartView } from "./view.js?v=2026012101"
import { cartViewResume } from "./viewResume.js?v=2026012101"
import { cartController } from "./controller.js?v=2026012101"

export const cart = {
    idBtnCart: cartView.idBtnCart,
    idBtnCloseCart: cartView.idBtnCloseCart,
    init(){
        cartController.init()
        cartView.updateCartCount()
        cartViewResume.init()
    },
    toggle(){
        cartView.toggle()
    },
    addItem(id){
        cartView.addItem(id)
    }
};