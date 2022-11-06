/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */



function iniciarJuego() {

  alert("Bienvenido al piedra, papel o tijera de Front 2 :D");

  let nombre = prompt("Ingrese su nombre por favor: ");

  let validar = true

  while (validar){

    validar=false;

  if (nombre.length>3 && nombre!=null ){

    alert("Gracias por jugar " + nombre + ". Mucha suerte");
    
  } else {
    nombre = prompt("Ingresa un nombre valido favor: ");
    validar=true;
    
  }
}

nombre = nombre.toUpperCase()


  return "El jugador es: " + nombre;
}


const nombreJugador = iniciarJuego();
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.



console.log(nombreJugador);



