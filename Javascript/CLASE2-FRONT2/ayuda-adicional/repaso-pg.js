// VENTANAS DE DIALOGO

alert("ALERTA!!");

// CAPTURA DE DATOS

confirm("¿Está seguro de que desea refrescar la página? Los cambios podrían no guardarse.");

console.log(confirm("¿Está seguro de que desea refrescar la página? Los cambios podrían no guardarse."));

let confirma = confirm("¿Está seguro de que desea refrescar la página? Los cambios podrían no guardarse.");

function confirmacion() {
    if (confirma) {
        console.log("SE REFRESCA LA PAGINA")
    } else {
        console.log("NO SE REFRESCA LA PAGINA")
    }
}

console.log(confirmacion());

prompt("Por favor, ingrese su edad:");

console.log(prompt("Por favor, ingrese su edad:"));

let edad = prompt("Por favor, ingrese su edad:");

function ingresoEdad() {
    if (edad != null) {
        console.log(edad)
    } else {
        console.log("NO INGRESO EDAD")
    }
}

console.log(ingresoEdad());

// MANIPULACION DE DATOS

let edadInt = parseInt(prompt("Por favor, ingrese su edad:"));
console.log("SU EDAD MAS 20 AÑOS ES: ", edadInt + 20);

let b = parseInt(22.5); //le saca la parte decimal (detras de la coma), no redondea
console.log(b);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MATH

let pi = Math.PI;
let aleatorio = Math.random(); // --> entre 0 y 1
let redondeo = Math.round(aleatorio); 
let mayor = Math.max(10, 20, 30, 40);
//Math.floor

console.log(pi);
console.log(aleatorio);
console.log(redondeo);
console.log(mayor);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// BUCLES ESPECIFICOS

let persona = {
    nombre: "María Belén",
    apellido: "Carrere",
    edad: 21
}

for (let caracteristica in persona) { //FOR IN sirve para iterar sobre los atributos de un objeto y/o los valores de los mismos
    console.log(caracteristica);
}

for (let atributo in persona) {
    console.log(atributo + ": " + persona[atributo]);
}

let ciudades = ["Rafaela", "Buenos Aires", "Cordoba"];

for (let abc of ciudades) { //FOR OF sirve para iterar sobre el contenido de arrays
    console.log(abc);
}

let ciudad = "Rafaela";

for (let cba of ciudad) { //TAMBIEN SIRVE PARA STRING
    console.log(cba);
}



