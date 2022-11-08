/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const nombre = prompt("Ingresa tu nombre");
  const edad = prompt("Ingresa tu edad");
  const ciudad = prompt("Ingresa tu ciudad");
  const interesPorJs = prompt("¿Te interesa Javascript?");
  datosPersona.nombre = nombre;
  datosPersona.edad = edad;
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs = interesPorJs;
 
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const ciudad = document.querySelector("#ciudad");
  const interesPorJs = document.querySelector("#interes-por-js");

  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  nombre.innerText = datosPersona.nombre;
  edad.innerHTML = datosPersona.edad;
  ciudad.innerHTML = datosPersona.ciudad;
  interesPorJs.innerText = datosPersona.interesPorJs;

  


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const contenedor = document.querySelector("#contenedor");
  contenedor.innerHTML = "";
  for (let i = 0; i < listado.length; i++) {
    contenedor.innerHTML += `
    <div class="tarjeta">
      <img src="${listado[i].imgUrl}" alt="imagen de ${listado[i].lenguajes}" />
      <h3>${listado[i].lenguajes}</h3>
      <p>${listado[i].bimestre}</p>git 
    </div>
    `;
  }


  


}

function alternarColorTema() {

  const btnTema = document.querySelector('#cambiar-tema');
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  // alternarColorTema del body en modo nocturno

  const body = document.querySelector('body');

  if (body.classList.contains('modo-nocturno')) {
    body.classList.remove('modo-nocturno');
    btnTema.innerText = 'Modo Nocturno';

  } else {
    body.classList.add('modo-nocturno');

    btnTema.innerText = 'Modo Diurno';

    


  }

}

  
  
  btnTema.addEventListener("onclick", () => {
    body.classList.toggle("dark");
  });

  




  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

alternarColorTema();
