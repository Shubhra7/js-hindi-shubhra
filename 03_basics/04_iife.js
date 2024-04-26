// Immediately Invoked Function Expressions (IIFE)

// which work should be done immediately: like database connection and other func

// why use IIFE??
// ans: to avoid global scope polution problem, we use IIFE

// syntax: ({function})(); (;==> for where to stop)


//Type:1
(()=>console.log("Hi shubhra"))();  // ; is important or next will not execute


//Type:2
(function print(){
    // named IIFE
    console.log("Db connected!!2")
})();


//Type:3 (when you have to pass argument)

((user)=>{
    console.log(`Hi ${user}, welcome`)
})('Debjit');   // passing through iife
