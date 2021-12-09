//$(".btn").action()    $(".btn") class   .action() metodo
//forma explicita 1
//$(document).ready(function(){
// console.log("el dom esta cargado")
//})
//shortcut la forma corta 2
//
//$(function(){
// console.log("Forma corta de ready()")
//})
// arrow function 3
//$(()=>{
//  console.log("Ready en version arrow function")
//})

//evento dee escucha -> addEventListener("click", function(){})
// evento de prefijo on -> eventos

class Producto {
    constructor(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
    }
}
class UI {
    agregarProducto(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card ">
            <div class="card-body mb-4" width=100%>
                <strong>Nombre</strong>: ${product.name}</br>
                <strong>Precio</strong>: $ ${product.price}</br>
                <strong>Talle</strong>: ${product.size}</br>
                <a href="#" class="btn btn-outline-danger btn-block" name ="delete">Borrar</a>
            </div>
        </div>
        `;
        productList.appendChild(element);


    }
    resetForm() {
        document.getElementById('product-form').reset();

    }
    eliminarProducto(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje('Producto Eliminado Exitosamente', 'info');
        }

    }
    mostrarMensaje(mensaje, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(mensaje));
        //mostrando en el dom
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(() => {
            document.querySelector('.alert').remove();

        }, 4000);

    }
}
//Dom events
//document.getElementById('product-form').addEventListener('submit', function (e) {
$("#product-form").submit(function (e) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const size = document.getElementById('size').value;

    const product = new Producto(name, price, size);

    const ui = new UI();
    if (name === '' || price === '' || size === '') {
        return ui.mostrarMensaje('Complete todos los campos por favor', 'danger');
    }



    ui.agregarProducto(product);
    ui.resetForm();
    ui.mostrarMensaje('Producto Agregado Exitosamente', 'success');



    e.preventDefault();

})


//});

//document.getElementById('product-list').addEventListener('click', (e) => {
$("#product-list").click((e) => {
    const ui = new UI();
    ui.eliminarProducto(e.target);
})


//})
