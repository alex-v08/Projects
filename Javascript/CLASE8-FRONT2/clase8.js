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
  const botonesLike = document.querySelectorAll(".fa-heart");

  botonesLike.forEach((boton) => {
    boton.addEventListener("click", function () {
      console.log(boton.id);

      albumesFamosos.forEach((album) => {
        if (album.id == boton.id) {
          album.like = !album.like;
        }
      });
      renderizarAlbumes(albumesFamosos);
      mostrarDatosEnPerfil();
      marcarFavorito();
    });
  });
}
marcarFavorito();

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del album buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {
  // desarrollar la función 👇
  window.addEventListener("keydown",function(e){


    if (e.key == "f"){
      

      const nombreAlbum = prompt("ingrese el nombre del album que desea eliminar");
      const posicionAlbum = albumesFamosos.findIndex((album)=>album.nombre ==nombreAlbum);
      console.log(posicionAlbum);
      albumesFamosos.splice(posicionAlbum,1);

      renderizarAlbumes(albumesFamosos);
      mostrarDatosEnPerfil();
      marcarFavorito();
      
   

    }
  });

}

eliminarAlbum();

