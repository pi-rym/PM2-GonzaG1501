const CarritoCompra = require("../index")
let instance;

describe("comprobar la funcionalidad de CarritoCompra", ()=>{
    beforeEach(()=>{
        instance = new CarritoCompra()
    })
    it("Comprobar sí CarritoCompra es una clase", ()=>{
        expect(typeof CarritoCompra.prototype.constructor).toBe("function")   
    })
    it("comprobar que se retorne la lista de productos", ()=>{
        expect(instance.productos)).toEqual([])
    })
    it("comprobar la funcion agregarProducto", ()=>{
        instance.agregarProducto("yerba", 1, 1700);
        expect(instance.productos).toEqual([{producto: "yerba", precio: 1700}])
    })
    it("comprobar la funcion agregarProducto", ()=>{
        instance.agregarProducto("azucar", 2, 1000);
        expect(instance.productos).toEqual([{producto: "azucar", precio: 2000}])
    })
    it("comprobar la funcion agregarProducto", ()=>{
        instance.agregarProducto("galletitas", 3, 1200);
        expect(instance.productos).toEqual([{producto: "galletitas", precio: 3600}])
    })
    it("comprobar la funcion calcularTotal", ()=>{
        instance.agregarProducto("yerba", 1, 1700);
        instance.agregarProducto("azucar", 2, 1000);
        instance.agregarProducto("galletitas", 3, 1200);
        expect(instance.calcularTotal()).toBe("el total a pagar es de $7300")
    })
    it("comprobar que posea la funcion aplicarDescuento", ()=>{
        instance.agregarProducto("yerba", 1, 1700);
        instance.agregarProducto("azucar", 2, 1000);
        instance.agregarProducto("galletitas", 3, 1200);
        expect(instance.aplicarDescuento(25)).toBe("el total a pagar con el 25% de descuento es de $5475")
    })
})
