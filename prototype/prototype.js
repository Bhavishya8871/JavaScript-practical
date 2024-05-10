// ARRAY   ----->   object  -----> null
// String   ----->   object  -----> null
function multiplyby5(num){
    return num*5;
}
console.log(multiplyby5(5).power=2);
console.log(multiplyby5.prototype);
//actually mein jo prototype hota haiyeh sirf kuch method nhi kuch inernal properties bhi deta hi
//toh is function ki bhi kuch properties hogi

//javascript is prototype inheritance
//everything is in js is object
//this keyword tell current execution context 
function createUser(username,score){
    this.username = username
    this.score =score;

}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe =function(){
    console.log(`score is ${this.score}`);
}

//here java script got confused because it does'nt know that for which does it have increment the score
//here comes this ,means jiske ke liye badana hai wha this lagado
const chai = new createUser("chai",25);
const tea = new createUser("tea",250);

// properties 100% inject hui hai lekin jab apne function se value tranfer ki hai woh apne isse bataya nhi hai
//yeh batane ke liye saara kaam krta hai "NEW" keyword

//TypeError: Cannot read properties of undefined (reading 'increment')
//for resolving this error we will use new keyword

chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
