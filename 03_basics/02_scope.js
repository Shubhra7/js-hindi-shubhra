// var should not used because it is also accessable outside of the scope

if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a)
// console.log(b)
console.log(c)   // so it is accessable out the scope so it will make us ambigious the values