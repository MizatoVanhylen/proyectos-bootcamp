// // Reto 1: Crea una función llamada multiplicar() que reciba dos números como parámetros y devuelva su multiplicación.   
// function multipicar(numero1, numero2) {
//   return numero1 * numero2
// }

// let resultado = multipicar(5, 2)
// console.log(resultado);

// // Reto 2: Crea una función llamada mostrarSaludo() que solo imprima "¡Hola! Bienvenido a JavaScript" sin devolver nada.

// function mostrarSaludo() {
//   console.log("¡Hola! Bienvenido a JavaScript")
// }
// mostrarSaludo()

// 1 ️ Crea una función esMayorDeEdad(edad) que devuelva true si una persona es mayor de 18 años, o false si no. 
function esMayorDeEdad(edad) {
  if (edad > 18) {
    return true
  } else {
    return false
  }
}
console.log(esMayorDeEdad(15))


// 2 ️ Crea una función calcularIVA(precio) que agregue un 19% de IVA a cualquier precio ingresado.
function calcularIVA(precio) {
  return precio * 1.19;
}

console.log(calcularIVA(100));

// 3 ️ Escribe una función convertirTemperatura(grados, escala) que convierta Celsius a Fahrenheit o Fahrenheit a Celsius según el parámetro escala (C o F).
function convertirTemperatura(grados, escala) {
  if (escala === "C") {
    return (grados - 32) * 5 / 9
  } else if (escala === "F") {
    return (grados * 9 / 5) + 32
  }
}
console.log(convertirTemperatura(100, "C"))

// 4 ️ Crea una función generarContraseña(longitud) que genere una contraseña aleatoria de la cantidad de caracteres indicada.
// 5 ️ Refactoriza tu código asegurándote de seguir buenas prácticas de código limpio (indentación, nombres descriptivos y reutilización de funciones). Prueba tus funciones en la consola y asegúrate de que funcionen correctamente