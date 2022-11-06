let saludo = "Hola mundo!";
console.log(saludo);

// VAR;

var varGlobal = 3;

console.log(varGlobal);

function func() {
  // ámbito de función
  console.log(varGlobal);
}

function func2() {
  // ámbito de función
  console.log(varGlobal);

  if (varGlobal == 3) {
    // ámbito de bloque
    var varFuncion = 1;
    console.log(varFuncion);
  }

  console.log(varFuncion);
}

console.log(varGlobal);
console.log(varFuncion);

// LET;

let varGlobal = 3;

function func() {
  //ámbito de función
  console.log(varGlobal);
}

function func2() {
  //ámbito de función
  console.log(varGlobal);

  if (varGlobal == 3) {
    //ámbito de bloque
    let varFuncion = 1;
    varGlobal = 2;
    console.log(varGlobal);
  }

  console.log(varFuncion);
}

console.log(varGlobal);
console.log(varFuncion);

// CONST;

const varGlobal = 3;

function func() {
  //ámbito de función
  console.log(varGlobal);
}

function func2() {
  //ámbito de función

  if (varGlobal == 3) {
    //ámbito de bloque
    const varFuncion = 1;
    varGlobal = 2;
    console.log(varGlobal);
  }

  console.log(varFuncion);
}

console.log(varGlobal);
console.log(varFuncion);

// TIPOS;

let miVar = "Hello wold";
let miVar1 = 22;
let miVar2 = false;
let miVar3;
let miVar4 = { nombre: "mi nombre" };
let miVar5 = null;
let myVar6 = function () {
  let doSomething;
};

// ESTRUCTURAS DE CONTROL

let miVar7 = 5;

if (miVar7 == 5) {
  console.log("ES 5");
} else {
  console.log("NO ES 5");
}

switch (miVar7) {
  case 1:
    console.log("NO ES 5");
    break;
  case 2:
    console.log("NO ES 5");
    break;
  case 5:
    console.log("ES 5");
    break;
  default:
    console.log("POR DEFECTO");
    break;
}

for (let i = 1; i <= miVar7; i++) {
  if (miVar7 == 5) {
    console.log("ES 5");
  } else {
    console.log("NO ES 5");
  }
}

while (miVar7 <= 10) {
  console.log("AUN NO LLEGAMOS AL 10");
  miVar7++;
}

do {
  console.log("AUN NO LLEGAMOS AL 10");
  miVar7++;
} while (miVar7 <= 10);
