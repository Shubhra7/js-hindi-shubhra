const newNums = [1,2,3,4,5,6,7,8,9,10]

// ***add 10 to every nums***

// map() and Map() are different in js
// map() return value by itself
// const ans= newNums.map((no)=>no+10)
// console.log(ans)


// chaining 
const ans1= newNums
    .map((item)=> item *10)
    .map((item)=> item+1)
    .filter((item) => item>35)

console.log(ans1);


