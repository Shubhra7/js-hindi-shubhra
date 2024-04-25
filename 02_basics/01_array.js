//ARRAY

const myArr=[0,1, 2, 3, 4, 5]
const myHeros=["shaktiman", "ngraaj"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[1]);


// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  // for adding at first pos
// myArr.shift() // used for remove first element and dont need to shift rest element
// myArr.shift() 

// console.log(myArr.includes(5))  // check either it is present in the array or not

// console.log(myArr.indexOf(3))  //return index of the element\

// const newArr=myArr.join()  //convert that into string

// console.log(myArr)
// console.log(newArr)


const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr)

const myn2=myArr.splice(1,3)
console.log(myn2)
console.log("C ",myArr)

// means slice not edit the main array 
// but splice make changes in main array



