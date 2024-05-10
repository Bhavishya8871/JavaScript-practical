//immediately invoked function expressions(IIFE)

(function chai(){
    console.log('db connected')
})();

// syntax
// (function)(execution)
//global scope ki wajha se jo local scope poluuted hota hia use bachne 
//iife ke use krte ahia

//jab tk ; nhi layenge tab tk niche koi function run nhi kregaa

((name)=>{
    console.log('DB CONNECTED')
})('hitesh');