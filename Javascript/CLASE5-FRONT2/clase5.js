const sitio = document.querySelector("body");
const btnTema = document.querySelector(".tema button");
const menuItems = document.querySelectorAll("nav li");
const contenedorNoticias = document.querySelector("main");
const articulos = document.querySelectorAll("article");
const titulos = document.querySelectorAll("article h2");

console.log(menuItems[0].style);

menuItems.forEach((item) => {
  item.style.textTransform = "uppercase";
  item.style.color = "aqua";
  item.style.backgroundColor = "white";
  item.style.borderRadius = "50vh";
});

// console.log(sitio.classList);

// console.log(sitio.classList.contains("dark"));

// console.log(sitio.classList.add("dark"));

// console.log(sitio.classList);

// console.log(sitio.classList.contains("dark"));

// console.log(sitio.classList.remove("dark"));

// console.log(sitio.classList);

// console.log(squiero a esta enanaitio.classList.contains("dark"));

console.log(sitio.classList.toggle("dark"));

console.log(sitio.classList);

console.log(sitio.classList.contains("dark"));

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo oscuro, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debe decir "Cambiar a modo oscuro 🌛"

function elegirTema() {
  let tema = confirm("¿Desea usar el modo oscuro?");

  if (tema) {
    btnTema.addEventListener("onclick", () => {
      sitio.classList.toggle("dark");
      if (sitio.classList.contains("dark")) {
        btnTema.textContent = "Cambiar a modo claro 🌞";
      } else {
        btnTema.textContent = "Cambiar a modo oscuro 🌛";
      }
    });

  }
    
}

elegirTema();
