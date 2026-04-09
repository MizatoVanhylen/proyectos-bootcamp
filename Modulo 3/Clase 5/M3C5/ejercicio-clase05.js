// Inicio sesión
let user = ""
let password = "123"


//En un Promt
// 1 preguntar al usuario si ya tiene cuenta
// SI tiene cuenta es igual a SI entonces
//Pedir al usuario ingresar datos
//Si las credenciales son correctar mandar mensaje "Acceso permitido"
//Si son incorrectas mostra "Error: Credenciales Incorrectas"
//Pedir al usuario nombre, correo, y contraseña para registrarse
//Mostrar "Resgistro exitoso" Permitir que inicie sesion con sus datos 
if (user) {
  if (user === "Denisse" && password === "123") {
    console.log("Acceso permitido");
  } else {
    console.log("Error: Credenciales Incorrectas");

  }
} else {
  console.log("Ingresa: Nombre, Correo y Contraseña para poder generar tu cuenta");
}

// if (playerName && agePlayer >= 15 && heightPlayer >= 160 && positionPlayer) {
//   alert("Cumples con los requisitos mínimos");

//   if (agePlayer >= 15 && agePlayer <= 17 && heightPlayer <= 170) {
//     alert("Estás en la categoría: Juvenil");
//   } else if (agePlayer >= 18 || heightPlayer > 170) {
//     alert("Estás en la categoría: Adulto");
//   }
// } else if (playerName === "") {
//   alert("Debes ingresar nombre")
// } else if (agePlayer === 0) {
//   alert("Debes ingresar edad")
// } else if (heightPlayer === 0) {
//   alert("Debes ingresar estatura")
// } else if (positionPlayer === "") {
//   alert("Debes ingresar posición")
// } else {
//   alert("No cumples con los requisitos mínimos");
// }