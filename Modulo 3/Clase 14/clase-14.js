let entrada = prompt("Introduce un número (puede tener decimales):");
let numeroUsuario = parseFloat(entrada);

let numeroRedondeado = Math.round(numeroUsuario);
console.log("Tu número redondeado es: " + numeroRedondeado);

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log("El número secreto de la PC es: " + numeroAleatorio);

if (numeroRedondeado > numeroAleatorio) {
  console.log("¡Ganaste! Tu número es mayor que el de la PC.");
} else if (numeroRedondeado < numeroAleatorio) {
  console.log("Tu número es menor que el de la PC.");
} else {
  console.log("¡Increíble! Ambos números son iguales.");
}

let raizCuadrada = Math.sqrt(numeroUsuario);
console.log("La raíz cuadrada de tu número original es: " + raizCuadrada.toFixed(2));

