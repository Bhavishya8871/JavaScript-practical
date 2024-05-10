// const user={
//     username:"hitesh",
//     price:"999",

//     welcomeUser :function(){
//         console.log(`${this.username}, welcome to the jungle`);
//         console.log(this)
//     }

// }

// user.welcomeUser()
// user.username="honey";
// user.welcomeUser()

// console.log(this)

//brower ke under jo global object hai woh window object hai

// function chai(){
//     let username="honey";
//     console.log(this.username);
//     console.log(this);
// }
// chai();

const chai = () =>{
    let username = "chai";
    console.log(this);
}
chai();

// const addtwo=(num1,num2)=>{
//     return num1 + num2;
// }
// console.log(addtwo(6,8));

//implicit return
const addtwo=(num1,num2)=>  (num1 + num2);
console.log(addtwo(6,8));


