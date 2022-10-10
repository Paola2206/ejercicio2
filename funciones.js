function agregarProducto(nombre, precio) {
    const producto = {
        id: 6,
        nombre: nombre,
        precio: precio
    }
    productos.push(producto)
}

function borrarProducto(posicion) {
    productos.splice(posicion, 1)
}

function modificarProductos(posicion, id) {
    const nombre = prompt('Escribí el nombre del producto:')
    const precio = prompt('Ingresá el precio del producto:')
    x = false
    let y = opcion
    productos[posicion] = {
        id,
        nombre,
        precio
    }
}

function mostrarProductos() {
    console.log(productos)
}
