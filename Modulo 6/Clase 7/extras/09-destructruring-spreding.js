// Creamos un array con 4 numeros
myArray = [1, 2, 3, 4]

let person = {
  name: "Denisse",
  age: 36,
  cuorse: "FullStack Javascript",
}

//Acceso tradicional

let myValue = myArray[1]
console.log(myValue);


// Acceso tradicional a objetos
let myName = person.name
console.log(myName);

//Forma Basica
let [value0, value1, value2, value3, value4] = myArray

console.log(value0);
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);

let [value5 = 0, value6 = 0, value7 = 0, value8 = 0, value9 = 0] = myArray

console.log(value5);
console.log(value6);
console.log(value7);
console.log(value8);
console.log(value9);

// Destructuración de objetos
