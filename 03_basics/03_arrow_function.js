const user={
    username:"Shubhra",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="debjit"
// user.welcomeMessage()
// console.log(this)   //when this is in node it will empty
// but in browser means, window it will give some values

// const {welcomeMessage}=user   //object destructure is unable to getting the user name
// welcomeMessage()

// function chai(){
//     let username="hitesh"
//     console.log(this)
// }

// chai()




/**** function using arrow function*** */

const chai = () =>{
    let username="hitesh"
    console.log(this);
}

// chai()


// declare types:

//Type : 1
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(2,4))


// Type: 2 (Implicit Return)
// const addTwo = (num1,num2) => num1 + num2

// or

// const addTwo = (num1,num2) => (num1 + num2)

// or (***FOR OBJECT RETURN***)

const addTwo = (num1,num2) => (
    {
        username:"Shubhra",
        "position": "Manager"
    }
)

console.log(addTwo(4,3))