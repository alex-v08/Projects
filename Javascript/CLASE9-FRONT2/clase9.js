/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [
  {
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true,
  },
  {
    id: "y456",
    nombre: "Thriller",
    imagen:
      "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true,
  },
  {
    id: "z789",
    nombre: "The wall",
    imagen:
      "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: false,
  },
  {
    id: "a987",
    nombre: "Abbey Road",
    imagen:
      "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false,
  },
  {
    id: "b654",
    nombre: "Origin of Symmetry",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false,
  },
  {
    id: "c321",
    nombre: "Back in Black",
    imagen:
      "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false,
  },
];

/* -------------------------------------------------------------------------- */
/*                  [1] FUNCION: captar el nombre de usuario                  */
/* -------------------------------------------------------------------------- */
//do while, prompt, innerText
function obtenerUsuario() {
  const nombreUsuario = document.getElementById("nombreUsuario");
  let usuario = "";
  // pedimos el nombre de usuario hasta que sea válido
  do {
    usuario = prompt("Ingrese su nombre de usuario:");
  } while (usuario === null || usuario === "" || usuario.length < 3);

  // insertamos el nombre en el HTML
  nombreUsuario.innerText = usuario;
}
obtenerUsuario();

/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas de almbumes                */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(listado) {
  const covers = document.querySelector(".covers");
  // nos aseguramos de vaciar el contenedor antes de insertar nuevos elementos
  covers.innerHTML = "";

  // recorremos el listado e insertamos en el HTML a traves de las plantillas literales
  listado.forEach((album) => {
    covers.innerHTML += `
    <li data-id="${album.id}">
        <img src="${album.imagen}" alt="${album.nombre}">
        <p>${album.nombre}</p>
        <i id="${album.id}" class="fa fa-heart ${
      album.like ? "favorito" : ""
    }"></i>
    </li>
    `;
  });
  // ☝ importante repasar el operador ternario, en este caso si el album tiene su
  // propiedad like en true, se le agrega la clase "favorito" al elemento
}
renderizarAlbumes(albumesFamosos);

/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
function mostrarDatosEnPerfil() {
  // desarrollar la función 👇
  const perfil = document.querySelector(".perfil p");
  const cantidadAlbumes = albumesFamosos.length;
  const cantidadFavoritos = albumesFamosos.filter((album) => album.like).length;
  perfil.innerHTML = `
  <p>Tienes <span>${cantidadAlbumes}</span> ${
    cantidadAlbumes === 1 ? "álbum" : "álbumes"
  } en tu colección y <span>${cantidadFavoritos}</span> 
  ${cantidadFavoritos === 1 ? "favorito" : "favoritos"}</p>
  `;
}
mostrarDatosEnPerfil();

/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array
// - cambiar el estado del like
// - volver a renderizar
function marcarFavorito() {
  // seleccionamos todos lo botones de like
  const botonesLike = document.querySelectorAll(".fa-heart");

  botonesLike.forEach((boton) => {
    // 👇 por cada boton escuchamos su click
    boton.addEventListener("click", function () {
      console.log(boton.id);

      // recorreremos el listado de albumes
      albumesFamosos.forEach((album) => {
        // si encontramos al que coincide con el boton apretado,
        // le cambiamos la propiedad like por lo contrario
        if (album.id === boton.id) {
          album.like = !album.like;
        }
      });

      //👇 post click debemos renderizar nuevamente las tarjetas
      renderizarAlbumes(albumesFamosos);
      mostrarDatosEnPerfil();
      //👇 post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminó lo anterior
      marcarFavorito();
    });
  });
}
marcarFavorito();

/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
function eliminarAlbum() {
  // desarrollar la función 👇
  window.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key === "f") {
      const album = prompt("¿Que album desea eliminar?");

      const posicionBuscado = albumesFamosos.findIndex(
        (obj) => obj.nombre === album
      );

      // si fue encontrado el nombre del almbum..
      if (posicionBuscado !== -1) {
        // 👇eliminamos elemento
        albumesFamosos.splice(posicionBuscado, 1);

        //👇 post click debemos renderizar nuevamente las tarjetas
        renderizarAlbumes(albumesFamosos);
        mostrarDatosEnPerfil();
        //👇 post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminó lo anterior
        marcarFavorito();
      }
    }
  });
}
eliminarAlbum();

/* -------------------------------------------------------------------------- */
/*                         [6] FUNCION: Planes                                */
/* -------------------------------------------------------------------------- */
// nuevo array con listado de planes
const planesMensuales = [
  {
    tipo: "Básico",
    costo: 300,
    descripcion: "Podes escuchar música sin límites todo el mes.",
  },
  {
    tipo: "Dúo",
    costo: 450,
    descripcion: "Música ilimitada para vos y alguien más.",
  },
  {
    tipo: "Familiar",
    costo: 600,
    descripcion: "El mejor plan, hasta un total de 5 miembros.",
  },
];

// Escuchamos el evento de 'carga' de la ventana 👇
window.addEventListener("load", function () {
  const footer = this.document.querySelector("footer");

  //👇 Creamos variables para usarlas dentro del bucle que genera el setInterval
  let total = planesMensuales.length;
  let contador = 0;

  // 👇 creamos un intervalo y lo almacenamos en una variable
  const intervalo = setInterval(function () {
    // usamos el operador 'resto de' para calcular la posicion
    const posicion = contador % total;

    console.log("contador: ", contador);
    console.log("posicion: ", posicion);

    // insertamos en el HTML una plantilla literal
    footer.innerHTML = `<p>Plan: <strong>${planesMensuales[posicion].tipo}</strong> $ ${planesMensuales[posicion].costo}</p><p>${planesMensuales[posicion].descripcion}</p>`;

    contador++;
  }, 4000);

  // añadimos la escucha del doble click en el footer para frenar el intervalo
  footer.addEventListener("dblclick", function () {
    clearInterval(intervalo);
    console.log("---> Frenamos el intervalo");
  });
});

/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// Vamos a utilizar el setTimeout para preguntarle al usuario despues de unos segundos.
// 1- Una vez cargada la página y pasados 12 segundos debemos preguntarle al usuario si desea
// conocer más música (podemos usar un confirm).
// 2- Si el usuario confirma debemos abrir una nueva pestaña en -> https://open.spotify.com/
// 3- Si el usuario cancela debemos agregar un parrafo dentro del div '#perfil'(sin eliminar nada dentro)
// 4- El parrafo agregado debe ser de color verde y decir: "Usuario oficial de Spotifront" <p><a>Usuario oficial de Spotifront</p></a>
// 5- Por ultimo, si ese parrafo es clickeado, debe mostrar una alerta al usuario que diga: "Gracias por confiar en nosotros."


window.addEventListener("load", function () {
  setTimeout(() => {
    const confirmacion = confirm("¿Desea conocer más música?");

    // 2- Si el usuario confirma debemos abrir una nueva pestaña en -> https://open.spotify.com/
    if (confirmacion) {
      window.open("https://open.spotify.com/");
    } else {
      // 3- Si el usuario cancela debemos agregar un parrafo dentro del div '#perfil'(sin eliminar nada dentro)
      const perfil = document.querySelector("#perfil");
      const parrafo = document.createElement("p");

      parrafo.innerHTML = "Usuario oficial de Spotifront";

      // 4- El parrafo agregado debe ser de color verde y decir: "Usuario oficial de Spotifront" <p><a>Usuario oficial de Spotifront</p></a>
      parrafo.style.color = "green";

      // 5- Por ultimo, si ese parrafo es clickeado, debe mostrar una alerta al usuario que diga: "Gracias por confiar en nosotros."
      parrafo.addEventListener("click", () => {
        alert("Gracias por confiar en nosotros.");
      });

      perfil.appendChild(parrafo);
    }
  }, 12000);
});
