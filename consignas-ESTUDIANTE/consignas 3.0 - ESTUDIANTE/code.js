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
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const anioActual = 2022;

  const nombre = prompt("Ingrese su nombre");
  
  let anioNacimiento = parseInt( prompt("Ingrese su año de nacimiento")); 
  
  while(isNaN(anioNacimiento) || anioNacimiento > anioActual){
    anioNacimiento = parseInt( prompt("Ingrese su año de nacimiento"));
  }

    const ciudad = prompt("Ingrese su ciudad");
    const interesPorJs = confirm("¿Te interesa aprender Javascript?") ? "SI" : "NO";
    ime
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

  const contenedor = document.querySelector("#fila");
  contenedor.innerHTML = "";
 



  for (let i = 0; i < listado.length; i++) {
    contenedor.innerHTML += `
    <div class ="caja" id="fila">
      <img  src="${listado[i].imgUrl}" alt="imagen de ${listado[i].lenguajes}" />
      <h4 class ="lenguajes">Lenguaje: ${listado[i].lenguajes}</h4>
      <h4 class = "bimestre">Bimestre: ${listado[i].bimestre}</h4>
    </div>
    `;
  }

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  const theme = document.querySelector('#sitio');

  theme.classList.toggle("dark");

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */


function verMas() {

  const mostrarLorem = document.querySelector('#sobre-mi');

  window.addEventListener("keydown", function(e) {
    if (e.key == 'f'){ mostrarLorem.className = "";
    }else{
      mostrarLorem.className = "oculto";
    }
      

    }
  );

}

verMas();