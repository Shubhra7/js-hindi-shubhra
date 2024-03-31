const score = 400
// console.log(score);

// const balance =new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));  // fixed the value of after point in decimal number

const otherNumber = 23.8999

// console.log(otherNumber.toPrecision(3));  //to fixed total lenght

const hundereds =1000000
// console.log(hundereds.toLocaleString('en-IN')); // convert it into  seprated ,  to increase readability in that


// +++++++++++++ Math ++++++++++++++

// console.log(Math);
// console.log(Math.abs(-7));
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.min(4.6, 8 ,9 , 0))
// console.log(Math.max(4.6, 8 ,9 , 0))

console.log((Math.random()*10) +1);
console.log((Math.floor(Math.random()*10) +1));

//  when you need to take any random value with in a range

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // very important
