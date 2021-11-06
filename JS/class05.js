/****
 * objetos
 *
 */
/*
const santiago = {
    nombre: "Santiago",
    apellido: "Pochettino",
    edad: 30,
    pasaTiempos: ["Cocinar", "Estudiar", "Comer"],
    soltero: false,
    contacto: {
        email: "santiagopochettino91@gmail.com",
        cel: 525662588,
    },
    saludar: function () {
        console.log("HOLA!!!!!!")
    },
    decirMiNombre: function () {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años de edad y podes contactarte por telefono al ${this.contacto.cel} o por mail ${this.contacto.email}`);
    },

}
console.log(santiago);
console.log(santiago["nombre"]);
console.log(santiago.apellido);
console.log(santiago.nombre);
console.log(santiago.edad);
console.log(santiago.soltero);
console.log(santiago.pasaTiempos);
console.log(santiago.pasaTiempos[1]);
santiago.saludar();
santiago.decirMiNombre();
*/
//2. Generar una clase llamada palabra, donde se le pase como parametro a la funcion contructora una palabra. generar un metodo que indique si dicha palabra tiene mas o menos de 5 letras

/*
class Palabra {
    constructor(palabra) {
        this.palabra = palabra;
    }
    contarLogitud() {
        if (this.palabra > 5) {
            alert("La palabra tiene mas de 5 letras")
        } else if (this.palabra == 5) {
            alert("la palabra tiene 5 caracteres")
        } else {
            alert("la palabra tiene menos de 5 caracteres")
        }
    }
}
let ingreso = prompt("Por favor ingrese una palabra:");
const objetoPalabra = new Palabra(ingreso.length);

objetoPalabra.contarLogitud();






*/










// Entregable objetos :


class Producto {
    constructor(nombre, categoria, stock, cantidadComprada) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.cantidadComprada = cantidadComprada;
    }
    controlStock() {
        if (this.cantidadComprada > this.stock) {
            alert("No tenemos esa cantidad de stock");
        } else if (this.cantidadComprada < this.stock && this.cantidadComprada > 0) {
            this.stock = this.stock - this.cantidadComprada
            alert(`La cantidad ingresada es: ${this.cantidadComprada}, el nuevo stock es de : ${this.stock}`);
        } else {
            alert("La cantidad ingresada es incorrecta.")
        }

    }
}
let compraUsuario = Number(prompt("Ingrese la cantidad a comprar"));
const objeto1 = new Producto("fideos", "pastas", 50, compraUsuario);

objeto1.controlStock();
