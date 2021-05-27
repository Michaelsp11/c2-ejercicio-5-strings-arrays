const palabra = "eje";
console.log(esPalindromo(palabra));

function esPalindromo(palabra) {
    //Declaramos una constante palabraMinusculas a la que le asignamos la palabra que nos llega por parámetro en minúsculas
    const palabraMinusculas = palabra.toLowerCase();
    //Declaramos una constante sinEspaciosNiPuntuacion,
    //a la que le asignamos una expresión que lo que hace es que reemplaza todos los signos de puntuación y espacios
    //a la palabra minúscula obtenida en la linea anterior, obteniendo un nuevo string que se lo asignamos a la nueva constante
    const sinEspaciosNiPuntuacion = palabraMinusculas.replace(/[.,:;()_?¿!¡-\s]/g, "");
    //Declaramos una nueva constante y la inicializamos con una expresión,
    //que lo que hace es cogemos la constante de la linea anterior y le quita los acentos y se lo asignamos a la nueva constante
    const palabraSinAcentos = sinEspaciosNiPuntuacion.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    //Declaramos una nueva constante y la inicializamos con una expresión que lo que hace es
    //coger la constante de la linea anterior, la convierte en array, invierte el orden de los elementos del array,
    //y hace el join para volver transformarlo en string y asignarselo a la constante
    const invertirPalabra = palabraSinAcentos.split("").reverse().join("");
    //Por último, hacemos una comparación de la palabra que nos llego por parámetro, con la nueva palabra.
    //Devolvemos un true o false si son iguales o no.
    return palabra === invertirPalabra;
}