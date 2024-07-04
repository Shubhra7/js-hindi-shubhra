// api data fetch with normal then,catch function()

// *** fetch==> return promise **

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    console.log(typeof data);
    console.log(data[0].name);  //json converter help to understand
})
.catch((error)=> console.log(error))