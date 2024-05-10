//dates
 let mydate= new Date();
 console.log(mydate);
 console.log(mydate.toString());
 console.log(mydate.toISOString());
 console.log(mydate.toDateString());
 console.log(mydate.getHours());
 console.log(mydate.toLocaleDateString());
 console.log(mydate.getTimezoneOffset());
 console.log(mydate.getMinutes());
 console.log(mydate.getUTCMonth());
console.log(typeof mydate);

// let mycreatedate=new Date(2025,5,23);
// console.log(mycreatedate.toDateString());
let mycreatedate=new Date("01-14-2023");
console.log(mycreatedate.toDateString());

let mytimeStamp = Date.now();

console.log(mytimeStamp);
console.log(mycreatedate.getTime());

