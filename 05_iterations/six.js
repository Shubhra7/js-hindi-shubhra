// const coding = ["js", "ruby","java","python"]


// // ** foreach loop doesn't return any value normally
// const val=coding.forEach((item)=>{
//     return item
// })

// console.log(val)




//*****Filter()*******
// type:1
// for returning value we use filter() over for each()
// const myNums=[1,2,3,5,6,7,8,9,10]

// const newNums =myNums.filter((item) => item>4)
// console.log(newNums);




//type:2 
const myNums=[1,2,3,5,6,7,8,9,10]

// const newNums =myNums.filter((item) =>{
//     return item>4;  // have to use return because it need in arrow fucntion when {} is used 
// } )
// console.log(newNums);



// // type:3
// const newNums =[]

// myNums.forEach((num) =>{
//     if(num >4){
//         newNums.push(num)  // need to copy in another array
//     }
// })

// console.log(newNums)
// newNums.pop()
// console.log(newNums);



// type:3
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// take the items whose genre is "History"

const userBooks = books.filter((bk) => bk.genre==='History')
// console.log(userBooks);


// print the publish after 2000
let userBooks1 = books.filter((bk) => bk.publish>=2000)
// console.log(userBooks1);


// print the publish after 1995 and genre is 'History'
let userBooks3 = books.filter((bk) =>{
    return bk.publish>=1995 && bk.genre==="History"
} )
console.log(userBooks3);

