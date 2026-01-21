import { cartTemplate } from "./template.js?v=2026012101"
import { cartController } from "./controller.js?v=2026012101"
import { cartViewResume } from "./viewResume.js?v=2026012101"
// Removido import circular de cart.js

export const cartView = {
    id: `cart`,
    divId: `cartDiv`,
    idToDraw: `drawCart`,
    idBtnCart: `btnCart`,
    idBtnCloseCart: `btnCloseCart`,
    idCartCount: `cartCount`,
    idToDrawItems: `cartItems`,
    statusVisible: false,
    statusValid: true,
    
    exists(){
        return document.querySelector(`#${this.id}`) ? true : false
    },

    init() {
        if (!this.exists()) {
            this.draw()
        }
    },

    getTemplate() {
        try {
            const obj = cartController.getData()
            const html = {
                items: ``,
                footer: ``
            }
            
            // Verificar que obj.items existe y es un array
            if (obj && obj.items && Array.isArray(obj.items)) {
                obj.items.forEach(function(value, index){
                    html.items += cartTemplate.item(value)
                })
            } else {
                console.warn('Carrito vacío o items no definidos')
            }
            
            html.footer = cartTemplate.footer(obj)            
            return cartTemplate.init(obj, html)
        } catch (error) {
            console.error('Error al cargar el template del carrito:', error)
            return '<div class="cart-error">Error al cargar el carrito</div>'
        }
    },

    draw() {
        let outputToDraw = document.querySelector(`#${this.idToDraw}`)
        if (outputToDraw) {
            outputToDraw.innerHTML = this.getTemplate()
            this.statusVisible = true
            this.addListeners()
        }
        else {
            console.log(`no existe un div con el id: "${this.idToDraw}" para renderizar el carrito`);
        }
    },

    remove() {
        let cartElement = document.querySelector(`#${this.id}`)
        cartElement.remove()
        this.statusVisible = false
    },

    updateCartCount() {
        const cartCount = document.querySelector(`#${this.idCartCount}`)
        const cartCountNumber = document.querySelector(`#cartCountNumber`)
        if (cartCount) {
            cartCount.textContent = cartController.cartCount
        }
        if (cartCountNumber) {
            cartCountNumber.textContent = cartController.cartCount           
        }
    },

    updateTotals(id, elementsHtml) {
        const item = cartController.getItemById(id).status ? cartController.getItemById(id).data[0] : cartController.getItemById(id).status
        elementsHtml.priceItem.textContent = `€${item.totalPriceItem.toFixed(2)}`
        elementsHtml.ivaPriceItem.textContent = `€${item.totalIvaPriceItem.toFixed(2)}` 
        const cartSubTotalIva = document.querySelector(`#cartSubTotalIva`)
        const cartSubTotal = document.querySelector(`#cartSubTotal`)
        const cartTotal = document.querySelector(`#cartTotal`)
        if (cartSubTotalIva && cartSubTotal && cartTotal) {
            cartSubTotalIva.textContent = `€${cartController.subTotalIva.toFixed(2)}`  
            cartSubTotal.textContent = `€${cartController.subTotalItems.toFixed(2)}`  
            cartTotal.textContent = `€${cartController.totalOrder.toFixed(2)}`          
        }
        
    },

    toggle(){
        console.log('🛒 CartView.toggle() - Estado actual:', this.statusVisible ? 'visible' : 'oculto');
        if(this.statusVisible && this.exists()){
            console.log('🛒 Cerrando carrito');
            this.remove()
        }
        else {
            console.log('🛒 Abriendo carrito');
            this.init()
        }
    },

    addItem(id) {
        console.log('🛒 CartView.addItem() - ID:', id);
        cartController.addItem(id)
        this.updateCartCount()
        console.log('🛒 Contador actualizado');
    }

        if (this.statusVisible) {
            this.draw()
        }

        /* 
            // NO BORRAR: Traduce el nuevo item agregado al carrito
            if (window.idioma) {
                window.idioma.translatePage();
            } 
         */       
    },

    removeItem(id){
        cartController.removeItem(id)
        this.updateCartCount()
        this.draw()
        cartViewResume.draw()      
    },

    changeQuantity(id, elementsHtml){
        if (elementsHtml){
            let quantity = Number(elementsHtml.input.value)
            const product = cartController.getItemById(id).status ? cartController.getItemById(id).data[0] : cartController.getItemById(id).status
            let regex = /^\d+$/
            if (regex.test(quantity) && quantity !== '') {
                if (quantity > 0 && quantity <= product.stock) {
                    elementsHtml.msg.textContent = ``
                    this.statusValid = true
                }
                else {
                    elementsHtml.msg.textContent = `La cantidad debe estar entre 1 y ${product.stock}`
                    quantity = 1
                    this.statusValid = false
                }
            }
            else{
                quantity = 1
                elementsHtml.input.value = quantity  
                this.statusValid = true                      
            }
            cartController.changeQuantity(id, quantity)
            this.updateCartCount()
            this.updateTotals(id, elementsHtml)
            cartViewResume.draw()
        }
    },

    incrementQuantity(id, elementsHtml){
        const product = cartController.getItemById(id).status ? cartController.getItemById(id).data[0] : cartController.getItemById(id).status
        let quantity = Number(elementsHtml.input.value)
        quantity += 1
        if (quantity <= product.stock) {
            elementsHtml.input.value = quantity            
        } 
        this.changeQuantity(id, elementsHtml)
    },

    decrementQuantity(id, elementsHtml){
        let quantity = Number(elementsHtml.input.value)
        quantity -= 1
        if (quantity >= 1) {
            elementsHtml.input.value = quantity            
        }        
        this.changeQuantity(id, elementsHtml)
    },

    checkout(){
        const cartCheckoutMsg = document.querySelector("#cartCheckoutMsg")
        if (this.statusValid) {
            window.location.assign('../pages/checkout.html')
        }
        else{
            cartCheckoutMsg.textContent = `Cantidad no valida, verifica tus productos`
        }
    },

    addListeners(){
        const thisArg = this
        const btnCloseCart = document.querySelector(`#${this.idBtnCloseCart}`)
        if (btnCloseCart) {
            btnCloseCart.addEventListener("click", function(e){
                e.preventDefault()
                thisArg.toggle()
            })
        }
        const btnsRemoveItem = document.querySelectorAll(".cartRemoveItemBtn")
        if (btnsRemoveItem) {
            btnsRemoveItem.forEach(function(value, index){
                const bntElement = value
                let id = Number(value.dataset.id)
                bntElement.addEventListener("click", function(e){
                    e.preventDefault()
                    thisArg.removeItem(id)
                })                
            })                        
        } else {
            console.log(`no se encontraron los botones de eliminar items del carrito`);                        
        }
        const inputsQuantityItem = document.querySelectorAll(".cartItemQuantityInput")
        const decreaseItemsBtns = document.querySelectorAll(".cartDecreaseItemBtn")
        const increaseItemsBtns = document.querySelectorAll(".cartIncreaseItemBtn")
        const msgQuantityItem = document.querySelectorAll(".cartQuantityMsg")
        const totalIvaPriceItem = document.querySelectorAll(".totalIvaPriceItem")
        const totalPriceItem = document.querySelectorAll(".totalPriceItem")
        if (inputsQuantityItem) {
            inputsQuantityItem.forEach(function(value, index){
                const inputElement = value
                const elementsHtml = {
                    input: inputElement,
                    incrementBtn: increaseItemsBtns[index],
                    decrementBtn: decreaseItemsBtns[index],
                    msg: msgQuantityItem[index],
                    ivaPriceItem: totalIvaPriceItem[index],
                    priceItem: totalPriceItem[index]
                }
                let id = Number(value.dataset.id)
                inputElement.addEventListener("input", function(e){
                    e.preventDefault()
                    thisArg.changeQuantity(id, elementsHtml)
                })
                elementsHtml.incrementBtn.addEventListener("click", function(e){
                    e.preventDefault()
                    thisArg.incrementQuantity(id, elementsHtml)
                })
                elementsHtml.decrementBtn.addEventListener("click", function(e){
                    e.preventDefault()
                    thisArg.decrementQuantity(id, elementsHtml)
                })                
            })                        
        } else {
            console.log(`no se encontraron los inputs de cantidad de items del carrito`);                        
        }
        const btnCheckout = document.querySelector("#cartCheckoutBnt")
        if (btnCheckout) {
            btnCheckout.addEventListener("click", function(e){
                e.preventDefault()
                thisArg.checkout()
            })            
        }
        else {
            console.log(`no se encontro el boton de checkout`);                        
        }
    }

}