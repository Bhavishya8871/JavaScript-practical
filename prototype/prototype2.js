let myname ="honey   ";
console.log(myname.length);

//kya hum issie se chala sakte hai length
// console.log(myname.truelength);


//letsee
let myHero =['thro','spiderman']
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
//apn prototype banane ke liye functionname.prototype ki jagha direct object.prototype kr skate 
//kyuki array ho yaa string ho yaa function sab object hi 
//yeh sirf array ke pass hi power rhegi 
Array.prototype.honey =function(){
    console.log(`honey is present in all object`)
}
//since object is a higher heirarchi so it will give power to all
Object.prototype.honeymanwani =function(){
    console.log(`honey is present in all object`)
}
heroPower.honeymanwani();
myHero.honeymanwani();

// heroPower.honey();
// myHero.honey();

//inheritance
const user={
    username:"honey manwani",
    email:"honey@gmail.com"
}
const Teacher={
    makevideo: true
}
const TeachingSupport ={
    isAvailable:false
}
const TaSupport ={
    Makeassignment:'js assignment',
    fulltime: true,
    __proto__:TeachingSupport
}
//this is old syntax
Teacher.__proto__=user

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotheruserName ="chai or code   "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}
anotheruserName.trueLength()
"honey".trueLength();

