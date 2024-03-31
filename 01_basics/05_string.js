// const name = "hitesh"
// const repoCount = 50

// console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// string interpolation

const gameName = new String('hitesh-sc-yoyo')

console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) // Substring doesn't take negative value as x.substring(-8,4) => will start from 0

console.log(newString);

const anotherString = gameName.slice(-8,4)  
console.log(anotherString);

const newStringOne = "   Hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));
console.log(url.includes('bubai'));


const babe = "kao-dakha-ni-to"

console.log(babe.split('-'));
console.log(babe.split('-',3));  // 3 means will take 3 elements in array maximum
