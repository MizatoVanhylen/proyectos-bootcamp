let playerName = prompt("Ingresa tu nombre")
let agePlayer = Number(prompt("ingresa tu edad"))
let heightPlayer = Number(prompt("Ingresa tu estatura"))
let positionPlayer = prompt("Ingresa tu posición").trim().toLowerCase()
let position = ["alero", "escolta", "base", "pivot", "alapivot"]

if (playerName && agePlayer >= 15 && heightPlayer >= 160 && position.includes(positionPlayer)) {
  alert("Cumples con los requisitos mínimos");

  if (agePlayer >= 15 && agePlayer <= 17 && heightPlayer <= 170) {
    alert("Estás en la categoría: Juvenil");
  } else if (agePlayer >= 18 || heightPlayer > 170) {
    alert("Estás en la categoría: Adulto");
  }
} else if (!position.includes(positionPlayer)) {
  alert("La posición no existe")
} else if (playerName === "" || agePlayer === 0 || heightPlayer === 0 || positionPlayer === "") {
  alert("Rellena todos los campos")
} else {
  alert("No cumples con los requisitos mínimos");
}


