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

const avatar = document.getElementById("avatar");

console.log(avatar);

//4) Por el query selector

const main = document.querySelector("main");
console.log(main);

//5) Por el query selector all

const section = document.querySelectorAll("section");
console.log(section);

