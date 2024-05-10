const arr=[1,2,3,4,5];

for (const num  of arr) {
    console.log(num);
}

const greetind = "honey manwani!";
for (const greet of greetind) {
    console.log(`each char is ${greet}`)
}

//maps

const map = new Map()
map.set('USA',"unites state of america")
map.set('IN',"india")
map.set("FR","france")

console.log(map);

for (const [key,value] of map) {
    console.log(key ,":-",value);
}

// const myobject={
//     game1:'honey',
//     game2:'manwani',
//     game3:'rajasthan'
// }
// for (const [key,value] of myobject) {
//     console.log(key ,":-",value);
// }
// *******************************

// const myobject={
//     js:'javascript',
//     cpp:'c++',
//     rb:"ruby",
//     swift:"swift by apple"
// }

// for (const key in myobject) {
//    console.log(`${key} shortcut for ${myobject[key]}`);
// }

// const programming=['js','rb','py','java','cpp']

// for(const key in programming){
//     console.log(programming[key]);
// }

//********************************************************* */ 
const pro=['js','rb','py','java','cpp']
// pro.forEach( function (item){
//     console.log(item);
// })

// pro.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//  console.log(item);
// }
// pro.forEach(printme);

// pro.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const mycoding =[
    {
        languageName:'js',
        languageFilename:'.js'
    },
    {
        languageName:'py',
        languageFilename:'.py'
    },
    {
        languageName:'cpp',
        languageFilename:'.cpp'
    },
    {
        languageName:'java',
        languageFilename:'.java'
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFilename);
})