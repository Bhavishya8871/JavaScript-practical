// //for each never returns a value
// const coding=['js','py','cpp','java']

// const value=coding.forEach((item)=>{
//     console.log(item)
//     return item;
// })

// console.log(value);

// const mynums=[1,2,3,4,5,6,7,8,9,10]
// // const newnums=mynums.filter((num)=> num>4)
// // console.log(newnums);

// const newnums=mynums.filter((nums)=>{
//     return nums>4;
// })
// console.log(newnums);

// ************************************
const mynumber=[1,2,3,4,5,6,7,8,9,10];
// const newmun=mynumber.map((num)=>num+10);
// console.log(newmun)

 const newnums = mynumber.map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>=40);
console.log(newnums);
// ********************************************
//reduce
const nums=[1,2,3]

// const mytotal=nums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)//<-this is initializer

// console.log(mytotal);

const mytotal=nums.reduce((acc,currval)=>acc+currval,0)
console.log(mytotal);

const shoopingcart=[
    {
        itemname:"js course",
        itemprice:9876
    },
    {
        itemname:"python",
        itemprice:999,
    },
    {
        itemname:"cpp",
        itemprice:4333
    }
]

const mytotalprice = shoopingcart.reduce((acc,item)=> acc+item.itemprice ,0);
console.log(mytotalprice);