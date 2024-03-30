// Primitive

// 7 types: String, Numbers, Boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3555555554646n // will convert into bigInt


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj =
{
    name: "hitesh",
    age: 22,
}

const myfucntions = function(){
    console.log("Hello shubhra");
}

console.log(typeof bignumber);

// Typeof
// undefined => undefined
// Null => Null
// Boolean => boolean
// String => String
// Object(native and does not implement) => object
// Object(native or host and does implement) => fucntion
// https://262.ecma-international.org/5.1/#sec-11.4.3
