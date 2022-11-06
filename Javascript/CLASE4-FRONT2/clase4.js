/* Acá vemos que el document nos da acceso a todo el DOM,
ese arbol que contiene todos los nodos de nuestro sitio */
console.log(document);

/* Ahora vamos a utilizar 2 metodos propios de document que
nos facilitan "pescar" elementos en el sitio:
- querySelector()
- querySelectorAll() */

/* Obtenemos el titulo principal.
Vayamos a la consola y despleguemos la flecha que
nos muestra todas las propiedades del nodo */
const titulo = document.querySelector("h1");
console.log(titulo);

// Nos traemos ahora un listado de nodos
const itemsMenu = document.querySelectorAll("li");
console.log(itemsMenu);

// Hacemos un selector más específico
const infoExtra = document.querySelector(".info .clima");
console.log(infoExtra);

/* ------------------------------- Practicando ------------------------------ */

/* Seleccionamos la lista de noticias y revisamos su informacion interna.
Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
🚩 NO es un Array. */
const articulos = document.querySelectorAll("article");

for (let i = 0; i < articulos.length; i++) {
  console.log(articulos[i]);
}

/* Ahora hacemos la misma practica pero con ForEach, y accedemos a
propiedades de los nodos. */
articulos.forEach((articulo) => {
  const titulo = articulo.querySelector("h2").innerText;
  console.log(titulo);
  /*💡si quisieramos,acá podemos mutar los nodos, o cambiar algunas
  de sus propiedades */
});

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna:
// https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview

const tituloPrincipal = document.querySelector("h1");
const menu = document.querySelector("nav");

const titulosArticulos = document.querySelectorAll("h2");
const parrafosArticulos = document.querySelectorAll("p");
const footer = document.querySelector("footer");
const linksFooter = document.querySelectorAll("a");
