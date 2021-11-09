class Producto {
    constructor(nombre, categoria, precio, talle) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = Number(precio);
        this.talle = talle;
    }
}

const productos = [];
const carrito = [];

productos.push(new Producto('Converse', 'Urbanas', 9999, 'Del 35 al 44'));
productos.push(new Producto('Nike', 'Deportivas', 25000, 'Del 35 al 44'));
productos.push(new Producto('Adidas', 'Deportivas', 22000, 'Del 35 al 44'));
productos.push(new Producto('New Balance', 'Urbanas', 8500, 'Del 35 al 44'));
productos.push(new Producto('Topper', 'Deportivas', 6400, 'Del 35 al 44'));


const verProductos = (productos) => {
    let texto = '';
    for (const producto of productos) {
        texto += `Producto: ${producto.nombre}\nCategoria: ${producto.categoria}\nPrecio: $${producto.precio}\nTalles: ${producto.talle}\n\n`
    }

    return texto;
}


const comprar = () => {
    const productoUsuario = prompt(`¿Qué producto desea comprar?\n\n${verProductos(productos)}`);

    const productoEncontrado = productos.find((producto) => {
        return producto.nombre.toLowerCase() === productoUsuario.toLocaleLowerCase().trim()
    });
    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        alert(`Agregaste ${productoEncontrado.nombre} al carrito`);
    } else {
        alert('Producto no encontrado');
    }
}


const mostrarCarrito = () => {
    const productosCarrito = verProductos(carrito);
    if (productosCarrito) {
        alert(productosCarrito);
    } else {
        alert('El carrito está vacío');
    }
}

let opcion;
do {
    opcion = Number(prompt(`Ingrese una opción:
        1 - Ver productos
        2 - Comprar
        3 - Mostrar carrito
        4 - Salir
    `));

    switch (opcion) {
        case 1:
            const valorRecibido = verProductos(productos);
            alert(valorRecibido);
            break;
        case 2:
            comprar();
            break;
        case 3:
            mostrarCarrito();
            break;
        case 4:
            alert('Gracias por su visita');
            break;
        default:
            alert('Opción incorrecta');
            break;
    }
} while (opcion !== 4);