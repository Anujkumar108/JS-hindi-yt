// Primtive

// 7 types : String, Number, Boolean, null, undefined ,Symbol, BigInt

const score = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



//Reference (Non primitive)

//Array, Objects, Functions

const heroes = [ "shaktiman", "naagraj", "hatim"];

let myObj = {
    name: "anmol",
    age: 29,
}

const myFunction = function() {
    console.log("hello World");
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3

// typeof Operator Results: 

// undefined => undefined
// Null => Object
// Boolean => boolean
// Number => number
// String => "string"
// Object(native does not implement) => Object
// Object(native or host and does implement) => function
