//Use mdn as a string 
// use backticks as a string is a new way

const name = "anuj"
const repoCount = 56

console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anujkr-jr')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

console.log(gameName.charAt(4)); // find the char in which position
console.log(gameName.indexOf('r')); //find the digit

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(2,4)
console.log(anotherString);

const newStringOne = "  anuj  "
console.log(newStringOne.trim());

const url = "https://anuj.com/anuj%19kumar"
console.log(url.replace('%20', '-'))

console.log(url.includes('kr')) 

console.log(gameName.split('-')); // convert string into Array


