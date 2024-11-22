// Normal Function: 
// this dynamic hota hai aur depend karta hai ke function kis tarah call kiya gaya.

// Arrow Function:
//  this lexical hota hai aur function define hone wale scope ke this ko inherit karta hai.

const user = {
    username: "anuj",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// function biscuit() {
//     let username = "anuj"
//     console.log(this.username);
// }

// biscuit()

// const addTwo = (num1, num2) => {
// return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2) // implicit return

const addTwo = (num1,num2) => ({username: "anuj"})
console.log(addTwo(3, 4));

const myArray = [2,5,3,7,8]

const tube("/",() => {

})
