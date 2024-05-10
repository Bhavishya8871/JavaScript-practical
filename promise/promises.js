// //es6 ke under ise banaya hai es5 ke under nhi tha yeh
// //promise take callback inside it
// //it also help in priventing the callback hell
// const promiseOne= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve();
//     },2000)
// }).then(function(){
//     console.log("Async 2 resolve");
// })

// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "honey",email:"chai@example.com"})
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user);
// })

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"hitesh",password:"123"})
        } else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
const username=promisefour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"honeymanwani",password:"123"})
        } else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
async function consumedpromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);  
    } catch(error){
        console.log(error);
    }
}
consumedpromiseFive()

// async function geretalluser(){
//     try{
//         const response=fetch('https://jsonplaceholder.typicode.com/users')
//          const data=await response.json()
//          console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }

// }

// geretalluser()

//if we get any error form promise , it will be treated as a responce ,not as a error

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

