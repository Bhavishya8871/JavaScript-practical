const score=400;
console.log(score);

const newNo = new Number(100);
console.log(newNo);

console.log(newNo.toString().length);
console.log(typeof(newNo));
console.log(newNo.toFixed(2));

const otherNo = 23.9453;
console.log(otherNo.toPrecision(2));

const hundred =10000000;
console.log(hundred.toLocaleString());


// ***************************************Math********************************
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.floor(Math.sqrt(8)));

console.log(Math.random());
//math.random apn ko 0 se lekr 1 tk ki value deti hai
console.log((Math.random()*10)+1);
//krne se value 0 kabhi nhi ayegi hamesha se 1 se badi aayegi or 1 se lekr 10 ke bich men aayegi

const min=10;
const max=20;
//yeh formula hi jb koi bhi min se max ke bich mein value nikali ho toh yeh formula niklo
console.log(Math.floor(Math.random()*(max-min+1))+min)


