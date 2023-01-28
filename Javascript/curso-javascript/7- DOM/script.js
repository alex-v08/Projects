// DOM (Document Object Model)
// Live DOM Viewer => https://software.hixie.ch/utilities/js/live-dom-viewer/#



//Acceder a un nodo

 //1) Por el tag name
const header = document.getElementsByTagName("header");

console.log(header);

//2) Por el nombre de la clase

const container = document.getElementsByClassName("container");

console.log(container);

//3) Por el id

const avatar = document.querySelector("#avatar");



//acceder al scr de la iimagen

console.log(avatar, avatar.src);


avatar.src= "https://i.pravatar.cc/300";
console.log (avatar.childNodes);

nombre = document.querySelector(".username");
nombre.innerText = "Juan";

texto = document.querySelector(".texto");
console.log(texto);

repos = document.querySelector("#repos");
repos.innerText = "Repositiorios";

// Incorporar HTML mediante JS
const list = document.querySelector("#repos-list");

console.log(list.innerHTML+ "y este?");

list.innerHTML =  `<li text>Repositorio 1</li>
                  <li text>Repositorio 2</li>
                  <li text>Repositorio 3</li>`;	
                  console.log(list.innerHTML+ "y este?");
console.log(list.outerHTML+" que puta");



// agregar clases

const content = document.querySelector(".container");


content.classList.add(".background-black");


// intercambiar clases





//agregar un boton al fiinal de la pagina


content.innerHTML

console.log(content.innerHTML);

content.innerHTML+=`<button class= "boton text">Background</button>`;

const boton = document.querySelector(".boton");
const textColor = document.querySelectorAll(".text");

console.log(content);

boton.addEventListener("click", () => {
    const avatar = document.querySelector("#avatar");
    content.classList.toggle("background-black");

    textColor.forEach(Element=>Element.classList.toggle("white-text"));
    console.log(content.className=="background-black"?"2px solid white":"2px solid Black"); 
    console.log(avatar.style.border);
    });






console.log(textColor);









