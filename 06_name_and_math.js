// nums and maths in js 


const score = 12
console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-IN'));

// +++++++++ Maths +++++++++

/*
console.log(Math);
console.log(Math.abs(-2)); // abs means minus value turns into positive
console.log(Math.round(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3, 9, 7, 8));
console.log(Math.max(82, 34, 5 ,2));
*/


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//min bhi define karna hai 
//max bhi define karna hai