
// ****For of loop****

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
// }



// const greetings="Hello world"
// for (const greet of greetings) {
//     console.log(`Each char is: ${greet}`)
// }


// Maps
// like set in python, as it also don't contain duplicate value

const map=new Map()

map.set('IN','India')
map.set('USA','United State of America')
map.set('FR','France')


// console.log(map)
for (const [key, value] of map) {
    console.log(key,':-',value)
}


// for of loop not works for object