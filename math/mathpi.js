console.log(Math.PI)
const discriminator=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(discriminator);

const chai={
    name:"ginger chai",
    price: 250,
    isAvailable:true,

    orderchai:function(){
        console.log("chai fhat gyi");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (const [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
        console.log(`${key}: ${value}`)
    }
    
}