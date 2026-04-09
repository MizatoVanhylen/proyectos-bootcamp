// Ejercicios

// 1. Crea un objeto con 3 propiedades
let group2 = {
  member1: "Kako",
  member2: "Kiara",
  member3: "Milla",
}

// 2. Accede y muestra su valor

console.log(group2);


// 3. Agrega una nueva propiedad
group2.member4 = "Mizy"

console.log(group2);

// 4. Elimina una de las 3 primeras propiedades
delete group2.member1
console.log(group2);

// 5. Agrega una función e invócala
let group = {
  member1: "Kako",
  member2: "Kiara",
  member3: "Milla",
  work: function () {
    console.log("Los Chicos se juntan a trabajar");
  }
}
group.work()
// 6. Itera las propiedades del objeto

// 7. Crea un objeto anidado
let teamwork = {
  member1: "Kako",
  member2: "Kiara",
  member3: "Milla",
  work: function () {
    console.log("Los Chicos se juntan a trabajar");
  },
  repositorio: {
    parte1: "Kako",
    parte2: "Kiara",
    parte3: "Milla",
    parte4: "Mizy",
  }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(teamwork.repositorio.parte3);

// 9. Comprueba si los dos objetos creados son iguales
console.log(group2 === group);

// 10. Comprueba si dos propiedades diferentes son iguales





