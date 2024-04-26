// var should not used because it is also accessable outside of the scope

if(true){
    let a=10
    const b=20
    // var c=30
}

// console.log(a)
// console.log(b)
// console.log(c)   // so it is accessable out the scope so it will make us ambigious the values


// the elder can't take ice cream from jr but the jr can take from elder
if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website ="youtube"
       // console.log(username+website);
    }
}


/*********interesting****** */


// type: 1

console.log(addOne(5))

function addOne(num){
    return num+1
}



//type: 2
console.log(addTwo(4))   // in this type don't work beacuse the concept of hoisting

const addTwo= function(num){
    return num+2
}

