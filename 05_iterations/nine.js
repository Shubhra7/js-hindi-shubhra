// array reducer

// const myNums=[1,2,3]

// type:1
// const ans= myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currcal: ${currval}`);
//     return acc + currval
// },0
// )
// console.log(ans)



//type:2

// const ans=myNums.reduce((acc,currval)=>acc+currval,0)

// console.log((ans));




// type:3
// shopping cart

// const myCart =[
//     {
//         coursename: "Javascript",
//         price:100
//     },
//     {
//         coursename: "Mobile dev",
//         price:200
//     },
//     {
//         coursename: "Data science",
//         price:1000
//     }
// ]

// const totalPirce= myCart.reduce((acc,item)=>acc + item.price,0)
// console.log(totalPirce);



// high check first:: every item is number or not(*** project work need***)

const myCart =[
    {
        coursename: "Javascript",
        price:100
    },
    {
        coursename: "Mobile dev",
        price:'200'
    },
    {
        coursename: "Data science",
        price:1000
    }
]

const total=myCart.reduce(function(acc,item)
{
    if(typeof(item.price)==="number")
        return acc+item.price;
    else if (typeof item.price === "string" && !isNaN(parseFloat(item.price))) {
        // If the price is a string, attempt to convert it to a number
        return acc + parseFloat(item.price);}
    else
        return acc;
},0)

console.log(total);
