// conversion operation in js

let score = 0

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// console.log(score);

// "33" => 33
// "33abc" => NaN
// true => 1; flase => 0

let isLoggedIn = ""

let booleanIsLoggedin = Boolean(isLoggedIn)
// console.log(booleanIsLoggedin);

// 1 => true; 0 => false
// "" => false
// "anuj" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **** Operations ****** 

let value = 10
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "anuj"
let str2 = " kumar"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// 

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
gameCounter++;
// console.log(gameCounter);



let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
