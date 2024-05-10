//global execution ka problem yeh hai ki jab bhi apke pass window object ka access hota hai
//toh yaha pe jo "this" hota hai woh access krta hai window object ko
//per jab woh node wala environment hai wapha pe window wala acess hai nhi toh wha pe apke pass empty object aataa hai
//it is real case senario

function SetuserName(username){
    //complex db call
    this.username=username
    console.log('called');
}

function createUser(username,email,password){
    SetuserName.call(this,username)
    this.email=email;
    this.password =password;
}

const chai = new createUser('chai','manwanihonet@gmail.com',123)
console.log(chai);