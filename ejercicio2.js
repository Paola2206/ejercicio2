console.clear()

console.log(productos.length)
console.log(productos)

let encontrado = false;
let id;

let opcion = Number(prompt('\nIngresá el número de la opción:\n \n 1-Agregar un producto  \n \n 2-Eliminar un producto \n \n 3-Modificar un producto \n \n 4-Mostrar por consola todos los productos \n'))

    switch (opcion) {
        
        //AGREGAR
        case 1:
                const nombre = prompt('Ingresá el nombre del producto.');
                const precio = Number(prompt('Ingresá el precio del producto.'));
                agregarProducto(nombre, precio)
                mostrarProductos()
            break

        //QUITAR
        case 2:
            id = Number(prompt('Ingresá el id del producto:'))

            for (let i = 0; i < productos.length; i++) {

                if (productos[i].id === id) {
                    borrarProducto(i)
                    mostrarProductos()
                    encontrado = true
                    break
                }
            }

            !encontrado && alert('Id incorrecto.')

        //MODIFICAR
        case 3:
            id = Number(prompt('Ingrese el ID del producto:'))

            for (let i = 0; i < productos.length; i++) {

                if (productos[i].id === id) {
                    modificarProductos(i, id)
                    mostrarProductos()
                    encontrado = true
                    break
                }
            }

            if (!encontrado) {
                alert('Id incorrecto.')
            }

        //MOSTRAR
        case 4:
            mostrarProductos()
            break

        default:
            alert('Valor incorrecto. Ingresá un número del 1 al 4.')
            break
}