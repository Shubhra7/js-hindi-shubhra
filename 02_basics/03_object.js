// singleton
// Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    "full_name":"Shubhra Ghosh",
    [mySym]: "myKey1",
    email: "hites@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full_name"])
console.log(JsUser[mySym])


