//********For each loop ******

const coding = ["js", "ruby","java","python"]


// type:1
// call function used in parameter so not need the fucntion name
// coding.forEach(  function (item) {
//     console.log(item);
// })



// //type: 2
// coding.forEach( (item) =>{
//     console.log(item)
// })


// type: 3
// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)

//***NB *****
// coding.forEach((item,index,arr) =>{
//     console.log(item,index,arr)
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})