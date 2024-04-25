// singleton object

const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="Shubhra"
tinderUser.isLoggedIn = false

// console.table(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Shubhrajit",
            lastname:"Ghosh"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {6:"a", 5:"b"}


// const obj3= Object.assign({},obj1,obj2,obj4)  //{} is target and rest are source
// console.log(obj3)



// spread operator for joining easily
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


user=[
    {
        name:"Shubhra",
        email:"shu@gmail.com",
        phone:94
    },
    {
        name:"Debjit",
        email:"deb@gmail.com",
        phone:84
    }
]

// console.log(user[0].name)
// console.log(user[1].name)
// console.log(user[1].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))



