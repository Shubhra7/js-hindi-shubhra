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

// console.log(loginUserMessage("Shubhra"))
// console.log(loginUserMessage())



// when have to make cart then don't know how many parameter would be passed 

function calculateCartPrice(...num1){  // it is rest operator like in java 'varchar' and in js also know as spread operator in other joining work
    return num1
}

// console.log(calculateCartPrice(200,400,500))


user={
    name:"Shubhra",
    price:4500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and \nprice is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    name:"Debjit",
    price:369
})



// passing array in function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getuArray){
    return getuArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([40,10,30,52]))

