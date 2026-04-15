// Strings 
// Tambien podemos usar operadores con texto.

//concatenación de cadenas
let myName="Denisse";

let saludo = "Hola "  +  myName  +  "!";

console.log(saludo);

//console.log(typeof myName)
//console.log(typeof myName)
console.log(saludo.length);
console.log(saludo[0]);

// Metodos comunes

console.log(saludo.toLocaleLowerCase());
console.log(saludo.toLocaleUpperCase());

console.log(saludo.indexOf("Denisse"));
console.log(saludo.indexOf("Romero"));

console.log(saludo.includes("Denisse"));
console.log(saludo.includes("Romero"));

//Slice se incluye el primer elemento pero no el ultimo
fruta = "Banana"

console.log(fruta.slice(0, 4));
console.log(fruta.slice(1, 4));

console.log(saludo.replace("Denisse", "Andrea"));

//Split divide el string tomando el parametro divisor

let palabras = saludo.split(" ");

console.log(palabras);
console.log(typeof palabras);

//Trim limpia los espacios al inicio y final de las oraciones

let sucio = "   Hola Mundo    "
console.log(sucio); 
console.log(sucio.trim());

//Repeticiones(operador de suma es el unico operador aritmetico que cuando se utiliza con string los concatena)

let lenguaje = "JS"

console.log(lenguaje.repeat(3));

// Template Literals permite interpolar 

let message = ` Hola, estamos 
aprendiendo
JS`

console.log(message);

let email = "prueba@prueba.cl"

console.log(`Hola, ${myName} el correo electronico es ${email}`);


// For 
for(let i = 1; i < 10; i++ ){
    console.log("Vuelta nmro " + i);

}
for (let letra = 0; letra < fruta.length; letra++) {
  console.log(`${letra} ${fruta[letra]}`);
  
}
