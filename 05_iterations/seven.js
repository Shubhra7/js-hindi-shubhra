const newNums = [1,2,3,4,5,6,7,8,9,10]

// ***add 10 to every nums***

// map() and Map() are different in js
// map() return value by itself
// const ans= newNums.map((no)=>no+10)
// console.log(ans)


// chaining 
// const ans1= newNums
//     .map((item)=> item *10)
//     .map((item)=> item+1)
//     .filter((item) => item>35)

// console.log(ans1);



//**** How can you change value of the main through forEach loop */
// good concept to change make it in foreach also 
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}

console.log(numbers);


