/**ejemplo for */
/*
for (let i = 0; i <= 10; i++) {
    console.log(` Su numero es ${i}`);
}
*/
/*
let ingresarNumero = parseInt(prompt(`Ingrese un numero`));

for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i;
    alert(` ${ingresarNumero} X ${i} = ${resultado}`);
}
*/
/*
for (let i = 1; i <= 20; i++) {
    let ingresarNombre = prompt("Ingresar Nombre");
    alert(`Turno N° ${i}, Nombre: ${ingresarNombre}`);
}
*/
/*
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Salteamos el 5")
        continue;

    }
    console.log(i);
}
*/
/**WHILE  DO WHILE*/
/*
let numero = 0;
do {
    numero = prompt("Ingresar un Numero");
    console.log(numero);
} while (parseInt(numero));
*/

/*
let entrada = prompt("Color favorito?");
while (entrada != "ESC") {
    switch (entrada) {
        case "rojo":
            alert("Tu color favorito es el rojo !");
            break;
        case "azul":
            alert("Tu color favorito es el azul !");
            break;
        case "verde":
            alert("Tu color favorito es el verde !");
            break;
        case "amarillo":
            alert("Tu color favorito es el amarillo !");
            break;
        case "negro":
            alert("Tu color favorito es el negro !");
            break;
    }
}
*/
/* DESAFIO 03 */

for (let i = 0; i <= 10; i++) {
    let consultarNumero = parseInt(prompt("Elegir un numero del 0 al 10"));

    if (consultarNumero <= 5) {
        alert(`El numero elegido es  ${consultarNumero}  y es menor o igual a 5`);
    } else if (consultarNumero == 5) {
        alert(`El numero elegido es  ${consultarNumero}  y es igual a 5`)
    } else {
        alert(`El numero elegido es  ${consultarNumero}  y es mayor o igual a 5`);
    }
}

























