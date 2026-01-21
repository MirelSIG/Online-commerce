import { productsController } from "../../js/products.js"

export const cartController = {
    cartCount: 0,
    items:[],
    subTotalIva: 0,
    subTotalItems: 0,
    totalOrder: 0,
    init(){
        console.log('🛒 CartController.init() - Inicializando datos del carrito');
        this.setData()
        console.log('🛒 CartController inicializado con', this.items.length, 'items');
    },
    addItem(id){
        console.log('🛒 Agregando item con ID:', id);
        const product = productsController.getById(id)
        if (product.status) {
            console.log('✅ Producto encontrado:', product.data[0].nombre);
            const itemExists = this.getItemById(id)            
            const item = itemExists.status ? itemExists.data[0] : product.data[0]
            item.quantity = itemExists.status ? item.quantity + 1 : 1
            item.totalIvaPriceItem = ((item.precio * item.IVA) / 100) * item.quantity
            item.totalPriceItem = (item.precio * item.quantity)            
            itemExists.status ? this.items[itemExists.indexItem] = item : this.items.unshift(item)
            this.updateState()
            console.log('✅ Item agregado. Total items en carrito:', this.items.length);
        } else {
            console.error('❌ Producto no encontrado con ID:', id);
        }
    },
    removeItem(id){
        let item = this.getItemById(id)
        if (item.status) {
            this.items.splice(item.indexItem, 1)
            this.updateState()    
        }
    },
    changeQuantity(id, quantity){
        const result ={}
        const itemExists = this.getItemById(id)
        if (itemExists.status){
            const item = itemExists.data[0]
            let regex = /^\d+$/;
            if (quantity > 0 && quantity <= item.stock) {
                item.quantity = quantity
                item.totalIvaPriceItem = ((item.precio * item.IVA) / 100) * item.quantity
                item.totalPriceItem = (item.precio * item.quantity)
                this.items[itemExists.indexItem] = item
                this.updateState()
                result.status = true
                result.data = {
                    id:id, 
                    quantity: quantity
                }
                result.msg = `cantidad cambiada correctamente`
            }
            else {
                result.status = false
                result.msg = `la cantidad debe estar entre 1 y ${item.stock}`  
            }
            
        }
        else{
            result.status = false
            result.msg = itemExists.mensaje
        }
    },
    getItemById(id){
        const result = {}
        if (this.items.length > 0) {
            result.data = this.items.filter(function(value, index){
                if (value.id === id) {                    
                    result.indexItem = index
                    return value
                }
            })
            if (result.data.length > 0) {
                result.status = true 
            }
            else{
                result.status = false
                result.mensaje = `No existe un item en el carrito con el id: ${id}`
            }
        }
        else {
            result.status = false
            result.mensaje = `No hay items en el carrito para buscar el id` 
        }
        return result
    },
    setCartCount(){
        const result = {
            cartCount: 0
        }
        if (this.items.length > 0) {    
            this.items.forEach(function(item, index){
                result.cartCount += item.quantity
            })
        }
        this.cartCount = result.cartCount
        result.status = true
        result.msg = `cart count actualizado`
        return result
    },
    setTotals(){
        const result = {
            subTotalIva: 0,
            subTotalItems: 0,
            totalOrder: 0
        }
        if (this.items.length > 0) {
            this.items.forEach(function(item, index){
                result.subTotalIva += item.totalIvaPriceItem
                result.subTotalItems += item.totalPriceItem
                result.totalOrder += item.totalPriceItem + item.totalIvaPriceItem
            })
        }
        this.subTotalIva = result.subTotalIva
        this.subTotalItems = result.subTotalItems
        this.totalOrder = result.totalOrder
        result.status = true
        result.msg = `cart totals update`
        return result
    },
    getData(){
/*         this.setData() */
        const result = {
            items: this.items,
            cartCount: this.cartCount,
            subTotalIva: this.subTotalIva,
            subTotalItems: this.subTotalItems,
            totalOrder: this.totalOrder
        }
        return result
    },
    setData(){
        try {
            console.log('🛒 CartController.setData() - Cargando datos');
            const result = {}
            const cartLS = this.getLocalStorage()            
            if (cartLS.status) {
                const cart = cartLS.data                
                this.items = cart.items || []
                this.cartCount = cart.cartCount || 0
                this.subTotalIva = cart.subTotalIva || 0
                this.subTotalItems = cart.subTotalItems || 0
                this.totalOrder = cart.totalOrder || 0
                result.status = true
                result.msg = `data actualizada desde localStorage`
                console.log('✅ Datos cargados desde localStorage:', this.items.length, 'items');
            } else {
                // Inicializar con valores por defecto si no hay localStorage
                this.items = []
                this.cartCount = 0
                this.subTotalIva = 0
                this.subTotalItems = 0
                this.totalOrder = 0
                result.status = false
                result.msg = 'Carrito vacío - inicializado con valores por defecto'
                console.log('⚠️ No hay datos en localStorage, carrito inicializado vacío');
            }            
            return result              
        } catch (error) {
            console.error('❌ Error al cargar data del carrito:', error);            
        }
    },
    setLocalStorage(obj){
        try {
            const result = {}
            localStorage.setItem('cart', JSON.stringify(obj))
            result.status = true
            result.msg = `cart enviado a LocalStorage`
            return result            
        } catch (error) {
            console.error('No se pudo enviar el carrito a LocalStorage', error);                                  
        }
    },
    getLocalStorage(){
        const result = {}
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (Object.keys(cart).length > 0){
            result.data = cart
            result.status = true
            result.msg = "obtenido de LocalStorage"
        }
        else{
            result.status = false
            result.msg = `no se pudo obtener el carrito de LocalStorage` 
        }
        return result
    },
    updateState(){
        try {
            this.setCartCount()
            this.setTotals()
            const cart = this.getData()                        
            this.setLocalStorage(cart)
        } catch (error) {
            console.error('No se pudo actualizar el estado del carrito:', error);                      
        }
    }
}