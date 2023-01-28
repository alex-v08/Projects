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

  const anioActual = 2022;

  const nombre = prompt("Ingrese su nombre");
  
  let anioNacimiento = parseInt( prompt("Ingrese su año de nacimiento")); 
  
  while(isNaN(anioNacimiento) || anioNacimiento > anioActual){
    anioNacimiento = parseInt( prompt("Ingrese su año de nacimiento"));
  }

    const ciudad = prompt("Ingrese su ciudad");
    const interesPorJs = confirm("¿Te interesa aprender Javascript?") ? "SI" : "NO";

    datosPersona.nombre = nombre;
    datosPersona.edad = anioActual - anioNacimiento;
    datosPersona.ciudad = ciudad;
    datosPersona.interesPorJs = interesPorJs;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const ciudad = document.querySelector("#ciudad");
  const interesPorJs = document.querySelector("#javascript");

  obtenerDatosDelUsuario();


  nombre.innerText = datosPersona.nombre;
  edad.innerHTML = datosPersona.edad;
  ciudad.innerHTML = datosPersona.ciudad;
  interesPorJs.innerHTML = datosPersona.interesPorJs;



}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  /*Desarrollar la función que recorra el listado y renderizar una especie de tarjeta con la
información de cada materia. Prestar atención, cada una de las clases CSS son
necesarias para conservar el diseño:
1. Cada tarjeta contenedora deberá tener la clase 'caja'
2. Dentro de cada contenedor se deberá incluir:
a. una imagen con su correspondiente src y un alt que indique los
lenguajes.
b. un párrafo que tenga las clase ‘lenguajes’ y muestre los mismos.
c. un párrafo que tenga las clase ‘bimestre’ y muestre el bimestre.
3. Al volver a clickear el botón “Obtener materias”, no deberían volver a
renderizarse las materias.
➔ Tips
◆ Cada ‘caja’ se debe inyectar dentro del contenedor que ya se encuentra
en el archivo index.html con el id 'fila'.*/

  const contenedor = document.querySelector("#fila");
  contenedor.innerHTML = "";
  for (let i = 0; i < listado.length; i++) {
    contenedor.innerHTML += `
    <div class="tarjeta caja">
      <img src="${listado[i].imgUrl}" alt="imagen de ${listado[i].lenguajes}" />
      <h3 class ="lenguajes">${listado[i].lenguajes}</h3>
      <p class = "bimestre">${listado[i].bimestre}</p>git 
    </div>
    `;
  }


  
}

function alternarColorTema() {

  const btnTema = document.querySelector('#cambiar-tema');
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  const sitio = document.querySelector('#sitio')
  sitio.classList.toggle('dark');

}

document.addEventListener('keydown', event => {
  if (event.key === 'f') {
    const sobreMi = document.querySelector('#sobre-mi')
    sobreMi.classList.remove('oculto');
  }
})



