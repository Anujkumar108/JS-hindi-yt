 /*
there are three type of execution context
1.global execution context
2.Function execution Context
3.Eval Execution context
 */

/*
memory creation phase - varibales ke liye jagah allocate hoti hai but use execute nahi kiya 
jata 
execution phase - 
*/

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// 1) global execution / global environment
// koi bhi code global execution ki wajah se run hota hai

/* 2) memory phase
val1 --> undefined
val2 --> undefined
addNum --> definition
result1 --> undefined
result2 --> undedfined
*/

/*
3)execution phase
val1 <-- 10
val2 <-- 5
add Num --> new varible environment + executio thread


*/


// Javascript Execution Context

// When a JavaScript program starts running, it creates the global execution context. 
//This context consists of two phases: the memory phase and the execution phase.

// ➡Memory Phase:
// During the creation phase, the JavaScript engine sets up the global object (which is the window object in a browser environment), the 'this' keyword, and the outer environment reference.
// It also scans through the code and sets up memory space for variables and functions through a process called "hoisting." Variables are set to undefined, and functions are stored in their entirely.

// ➡Execution Phase:
// After the creation phase, the execution phase begins. This is where the actual code is executed line by line.

// ➡Function Execution:
// When a function is called, a new execution context is created for that function. This includes its own memory space for variables and parameters.
// The function goes through its own creation and execution phases.
// After the function finishes executing, its execution context is popped off the call stack.

// ➡Call Stack:
// The call stack is a data structure that keeps track of the execution context of the program. It follows the Last In, First Out (LIFO) principle.
// As functions are called, their execution contexts are added to the top of the call stack.
// When a function completes its execution, its context is removed from the top of the call stack.

// ➡Global Execution Completion:
// Once the global execution context completes, the program finishes its execution.

// 📝Note:  the returned value being passed to the global environment, it's more accurate to say that the returned value is passed to the calling context. If a function is called within another function, the returned value is typically used in the context of the calling function.
