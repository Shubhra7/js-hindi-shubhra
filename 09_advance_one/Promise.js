// Promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(()=>{
        console.log('Async task is complete!!');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})


const promiseThree =new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({name:"Bubai", email:"bubai.in"});
    },1000)
   
})

promiseThree.then(function(use){
    console.log(use);
})



const promiseFour =new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({name:"Bubai", add:"Patramarket"});
        }else{
            reject('Error are there');
        }
    }, 1000);
    
})

promiseFour.then((user)=>{
    console.log(user);
    return user.name;
}).then((username)=>{
    console.log(username);
}).catch((e)=>{
    console.log(e);
}).finally(()=> console.log('The promise is either resolved or rejected'));


// console.log("\n\n\n");

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({name:"javaScript", password:"hi@12"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumepromiseFive(){
    try{
        const rsp = await promiseFive
        console.log(rsp);
    }catch(error){
        console.log(error);
    }
}

consumepromiseFive()