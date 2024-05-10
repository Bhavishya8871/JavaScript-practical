function saymyname(){
console.log("h");
console.log("o");
console.log("n");
console.log("e");
console.log("y");
}

saymyname();

function Addtwono(number1,number2){
    console.log(number1+number2);
}

Addtwono(3,null)

function Addtwonumber(number1,number2){
    let result=number1+number2;
    return result;
}
let ans=Addtwonumber(3,5);
console.log(ans);

function loging(username){
    return `${username} just logged in`;
}
let loginrg = loging('honey');
console.log(loginrg);
//these 3 dots are either rest and spread // here it is rest which means bundle the input value
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,300,400));

const user={
    username:"honey",
    price:"122"
}

function handleObject(anyobject){
    console.log(`username is${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({
    username:"honey",
    price:322
})

const mynewarray = [200,300,400]
function returnSecongValue(getArray){
    return getArray[1];
}

console.log(returnSecongValue(mynewarray));