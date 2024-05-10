let value=3;
let negvalue= -value;
console.log(negvalue);

let a=10;
let b =2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);


let str1="honey";
let str2= "manwani"; 
console.log(str1+str2);


console.log("1"+2); //------>12
console.log(1+"2");  //------>12
console.log("1"+2+2);  //------>122
console.log(1+2+"2");  //------>32

// why?


console.log(+true);
console.log(+"");


// comparision
console.log(null>0);   // false
console.log(null == 0); //false 
console.log(null >=0); //true
 
//the reason is that an equality check == and comparisions > < >= <=
//works diffrently
/*
comparision converts null to a number,treating it as 0.
that's why (3) null>=0 is true and (1) null>0 is false 
*/

//=== it is strict check ,
//it check the value and datatype also
 


