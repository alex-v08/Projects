/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // La funcion debe retornar un nuevo arreglo con los elementos que son numeros.
  // Tu codigo:
  var soloNumeros = array.filter(function(elemento){
    return typeof elemento === 'number';
  });
  return soloNumeros;
}
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros

function probandoFilter(nombres){
  var nombresFiltrados = nombres.filter(function(elemento){
    console.log(elemento);
    return elemento > 10;
  });
  return nombresFiltrados;
}

console.log(probandoFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));