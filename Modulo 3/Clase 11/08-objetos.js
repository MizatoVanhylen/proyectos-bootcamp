// Objetos en Javascript

// si un dato no es un tipo de dato primitivo, entonces es un objeto

//Cómo se instancia (crea) un objeto, se usa una sintaxis de llaves ({})

//Declarar objeto y guardarlo en una variable
let person = {
  name: "Denisse",
  age: 35,
  course: "FullStack Javascript",
}

console.log(person);

// acceso a propiedades del objeto

//1 Primera forma NOTACION DE PUNTO

console.log(person.age);

//Segunda forma NOTACION DE CORCHETES

console.log(person["name"]);

//Mutabilidad de los Objetos

person.name = "Denisse Romero"

console.log(person);
console.log(person.name);

console.log(typeof person.age);
person.age = "35"
console.log(typeof person.age);

console.log(person);

//Eliminar propiedades

delete person.age //Elimina la propiedad "age" del objeto
console.log(person);

//Agregar nuevas propiedades 

person.email = "denisse.romero.c@gmail.com"
person["email"] = "kimysumi@hotmail.com"

console.log(person);

let person2 = {
  name: "Denisse",
  age: 35,
  course: "FullStack Javascript",
  run: function () {
    console.log("La persona corre");

  }
}
person2.run()

console.log(person2);


let person3 = {
  name: "Denisse",
  age: 35,
  course: "FullStack Javascript",
  run: function () {
    console.log("La persona corre");
  },

  hobbie: {
    //Objeto anidado de "person3"
    name: "League of Leguends",
    position: "ADC",
    fun: function () {
      console.log("Su carril de Prioridad es ADC");
    }
  }
}

console.log(person3);
console.log(person3.hobbie.position);

person3.hobbie.fun()

// Comparación de Objetos

let person4 = {
  name: "Denisse",
  age: 35,
  course: "FullStack Javascript",
}

let person5 = {
  name: "Denisse",
  age: 35,
  course: "FullStack Javascript",
}

console.log(person4);
console.log(person5);

//Concepto clave, los tipo de dato primitivos(string, numeros...) se comparan por valor
//Los objetos se comparan por referencia(su dirección de memoria)
console.log(person4 == person5);
console.log(person4 === person5);
console.log(person4.name === person5.name);

