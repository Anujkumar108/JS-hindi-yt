// Imediately invoked function
// function who executes immediately 

// write two iife in file (interview q)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);   
}) ();

(  (name) => {
    console.log(`DB CONNECTED`);
} )('anuj')



// global scope ke pollution se problem hoti hai kayi baar
// usse polution ko hatane ke liye humne ife ka use kiya 