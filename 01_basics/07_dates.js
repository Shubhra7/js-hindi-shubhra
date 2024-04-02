// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23)
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/100));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time..`

newDate.toLocaleDateString('default',{
    weekday: "long",
})
