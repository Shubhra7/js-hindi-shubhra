//******For in loop *******

// for traverse object we need for in loop

const myObject ={
    js:"javascript",
    cpp:"c++",
    ru:"Ruby"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
    }

// array
const prog = ['js','cpp','java']

for (const key in prog) {
    // console.log(prog[key])  // because key is just index in for in loop
}


// Map
const map=new Map()

map.set('IN','India')
map.set('USA','United State of America')
map.set('FR','France')

for (const key in map) {
    console.log(key)
}

// map is not iterrable by for in loop


