function anujKumar() {
    console.log("hi");
    console.log("king");   
}

// anujKumar();

// function Addtwonumbers(number1, number2) { //parameters
//    console.log(number1 + number2);
   
// }
// Addtwonumbers(3, 5); // arguement - function ko call karana uske andar jo pass karte hai

function Addtwonumbers(number1, number2) {
// let result = number1 + number2
// return result
return number1 + number2
}

const result = Addtwonumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "anuj") {
    if(!username){
        console.log("please enter a username");
        return        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());


function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 3000))

const user = {
 username: "anuj",
 price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(setArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(200, 400, 500, 1000));
