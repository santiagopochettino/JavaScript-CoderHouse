//Condicionales parte 01
/*
*/
// "NUEVO TIPO DE DATO : BOOLEANO"
/*
const booleanoVerdadero = true;
const booleanoFalso = false;

console.log(typeof booleanoFalso, booleanoFalso);
console.log(typeof booleanoVerdadero, booleanoVerdadero);

*/
/**** IF */
/*const user = prompt("Ingresa tu nombre de usurio");
const edad = Number(prompt("ingresa tu edad"));

if (user == "Martin") {
    console.log("bienvenido " + user);
}

if (edad < 18) {
    //este bloque se ejecuta si la condicion es verdadera
    console.log("No podes ingresar , sos menor de edad");

}
console.log("Despues del if")



*/

/*
let precioElegido = parseInt(prompt("Debes poner un numero entre 1 y 500"));


if (precioElegido < 20) {
    alert("El precio es menor que 20");
}
else if (precioElegido < 50) {
    alert("El precio es menor que 50");
}
else if (precioElegido < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}
*/


//Condicionales parte 02
/*
let numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 200"));

if ((numeroIngresado >= 100) && (numeroIngresado % 2 == 0)) {
    alert("El numero ingresado es mayor o igual a 100 y es par");
} else if ((numeroIngresado < 100) && (numeroIngresado % 2 == 0)) {
    alert("El numero ingresado es menor a 100 y es par");
} else if ((numeroIngresado < 100) && (numeroIngresado % 2 != 0)) {
    alert("El numero ingresado es menor a 100 y es impar");
} else if ((numeroIngresado >= 100) && (numeroIngresado % 2 != 0)) {
    alert("El numero ingresado es mayor o igual a 100 y es impar");
}
*/

/**
 * Clase 02, Entregable :
 */

let email = "holajuancarlos@gmail.com";
let password = "holajuancarlos";

const logInEmail = prompt("Ingrese su mail");
const logInPassword = prompt("Ingrese su contraseña");
const validAcount = (logInEmail === email) && (logInPassword === password);
const espaceAcount = (logInEmail == "") || (logInEmail == "");
if (validAcount) {
    alert(`Bienvenido ${email}!! ¿Como estas?!`);
} else if (espaceAcount) {
    alert('Por favor, complete los campos');
} else {
    alert('Acceso denegado. Datos incorrectos');
}