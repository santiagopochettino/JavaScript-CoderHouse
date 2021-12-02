

/**
 * CLASS10 Local Storage
*/
//dos palabras claves: 

// localStorage.getItem()
// localStorage.setItem()

//almacenar un valor en mi localStorage tengo que teer en cuenta primero ESTO ES UN OBJTO
//para guardar la información en el localStorage utiliZAMOS el metodo setItem

//.setItem(clave, valor) 
//clave = es el nombre para identificar el elemento
//valor = es el valor/contenido del elemento

localStorage.setItem('name', 'ProductName');
localStorage.setItem('price', 'ProductPrice');
localStorage.setItem('size', 'NumberSize');


// //para recuperar la info almacenada en el localStorage, empleamos el getItem llamando a la clave
// //con la que se almaceno

let nombre = localStorage.getItem('name');
let precio = localStorage.getItem('price');
let talle = localStorage.getItem('size').split(',');




