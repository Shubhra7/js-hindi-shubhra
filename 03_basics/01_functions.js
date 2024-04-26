// function name(){
//     console.log("B")
//     console.log("U")
//     console.log("B")
//     console.log("A")
//     console.log("I")
// }

// name()


// function addTwoNumbers(num1, num2){
//     console.log(num1+num2)
// }

// addTwoNumbers(3,4)

// function addTwoNumbers(num1, num2){
//     // let result=num1+num2
//     // return result
//     return num1+num2
// }

// const result=addTwoNumbers(3,5)

// console.log("Result: ",result);


function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Shubhra"))
console.log(loginUserMessage())


