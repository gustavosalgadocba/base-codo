/**
 * autor/a: Gustavo salgado     
 * version: 1.0
 * fecha: 11/05/2024
 */

function Producto(nombre, caracteristicas, precio) {
    this.nombre = nombre;
    this.caracteristicas = caracteristicas;
    this.precio = precio;


    this.obtenerFoto = function () {
        document.write('<div class="container_producto">');
        document.write(`<img src="../assets/images/${this.nombre.toLowerCase()}.png" alt="${this.nombre}">`);
    }

    this.obtenerNombre = function () {
        document.write(`<p>Nombre: ${this.nombre}</p>`);
    }

    this.obtenerCaracterísticas = function () {
        document.write(`<p>Características: ${this.caracteristicas}</p>`);
    }

    this.obtenerPrecio = function () {
        document.write(`<p>Precio del producto: ${this.precio} pesos</p>`);
        document.write(`</div>`);
    }
}
