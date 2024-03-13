class CarritoCompra {
    constructor (){
        this.productos = [];
    }
    agregarProducto = (producto, cantidad, precio) => {
        const precioTotal = precio * cantidad;
        this.productos.push({producto: producto, precio: precioTotal})
    }
    calcularTotal = () => {
        const total = this.productos.reduce((acumulator, producto) => {
            return acumulator + producto.precio;
        }, 0);
        return `el total a pagar es de $${total}`
    }
    aplicarDescuento = (porcentaje) => {
        const total = this.calcularTotal();
        const separacion = total.split("$");
        const precio = separacion[1];
        const precioDescuento = precio - ((porcentaje * precio) / 100);
        return `el total a pagar con el ${porcentaje}% de descuento es de $${precioDescuento}`
    }
}
module.exports = CarritoCompra;