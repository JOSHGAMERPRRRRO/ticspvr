//alertas
//alert("hola soy Josias Garcia Web");

//variables
let nombre = "Josias Garcia";
nombre = "Josias Garcia Web";

//constantes
const altura = 180;
const apellido ="garcia";

//mostrar por consola
console.log(nombre);
console.log(altura);

//concatenacion
let concatenacion = nombre + " " + apellido;

//seleccionar elementos de la pagina
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h1>soy la caja de datos </h1>
    <h2>mi nombre es: ${nombre }</h2>
    <h3>mi altura es: ${altura}cm </h3>

`;