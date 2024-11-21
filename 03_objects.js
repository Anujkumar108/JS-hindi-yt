// singleton 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "anuj",
    "fullname": "anuj kumar",
    mySym: "mykey1",
    age: 19,
    location: "delhi",
    email: "anujkr110@gmai.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "anuj@21chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anujkumar@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user", ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






