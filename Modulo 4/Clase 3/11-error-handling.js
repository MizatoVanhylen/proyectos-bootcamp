// Excepcion simple 
let myObject

console.log(myObject);
//console.log(myObject.mail);

//captura de error básica 

try {
  console.log(myObject.mail)

} catch (error) {
  console.log("Se ha producido un error", error.message);
} finally {
  //Este codigo se ejecuta siempre , haya o no haya un error
  console.log("Este código se ejecuta siempre");
}

console.log("Esta linea viene despues del error");

// 🟨 if/else se usa para prevenir errores
// 🟥 try/catch se usa para manejar errores cuando ya ocurrieron

//Lanzamiento de errores manualmente (throw)

// throw new Error("Se ha producido un error");

function sumarEnteros(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esta operación solo suma numeros");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Esta operación solo suma numeros enteros");

  }

  return a + b
}

//test
console.log(sumarEnteros(5, 8));
// console.log(sumarEnteros("5", 8));
console.log(sumarEnteros(5, 8.8));

