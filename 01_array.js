// array is an object enables a storing a collection of multiple items under a single variable name
/*
js array are resizable and contain a mix of different datatype
js arrays are not associative arrays 
js arrays are zero indexed
js array copy operations create shalow copies 
*/

/*
SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
*/





const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["deadpool", "spiderman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

//arr methods

// myArr.push(4) // add value in arr
// myArr.push(5)
// myArr.pop() // remove last value in arr

// myArr.unshift(1) // add in first value in arr
// myArr.shift() // remove the first value in arr

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


//slice , splice

console.log("A " , myArr);

const myn1 = myArr.slice(1, 4)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 4)
console.log("C", myArr);
console.log(myn2);


// splice example
let arr1 = [1, 2, 3, 4];
arr1.splice(1, 2, 99); // Removes 2 elements from index 1 and adds 99
console.log(arr1); // [1, 99, 4]

// slice example
let arr2 = [1, 2, 3, 4];
let result = arr2.slice(1, 3); // Extracts elements from index 1 to 2 (not including 3)
console.log(arr2); // [1, 2, 3, 4]
console.log(result); // [2, 3]

