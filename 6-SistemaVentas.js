class Producto{
    static contadorProducto=0;

    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(name){
        this._nombre = name;
    }

    get precio(){
        return this._precio;
    }

    set precio(price){
        this._precio = price;
    }

    toString(){
        return `${this._idProducto} ${this.nombre} ${this.precio}`;
    }
}

class Orden{
    static contadorOrden = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++ Orden.contadorOrden;
        this._productos = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProductos(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
        }
        else{
            console.log('No se puede agregar mas productos..!');
        }
    }

    calcularTotal(){
        let totalVenta = 0;

        for(let producto of this._productos){
            totalVenta += producto.precio;
        }

        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';

        for(let producto of this._productos){
            productosOrden += '\n {' + producto.toString() + '}';
        }

        console.log(` Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 =  new Producto('Monitor 22" Curve',2450);
let producto2 = new Producto('Teclado Gammer 2022', 150);

let orden1 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);
orden1.mostrarOrden();

let producto3 = new Producto('Mouse optico Delux',50);
let orden2 =  new Orden();
orden2.agregarProductos(producto1);
orden2.agregarProductos(producto2);
orden2.agregarProductos(producto3);
orden2.mostrarOrden();

