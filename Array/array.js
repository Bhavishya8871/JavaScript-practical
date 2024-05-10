//  const arr=[1,2,3,4,5,6,6,7,8];
//   console.log(arr[0]);
//   for(let i=0;i<9;i++){
//     console.log(arr[i]);
//   }

  const mynew = new Array(1,2,3,4);
//   console.log(mynew[0]);

//   mynew.push(5);
//   console.log(mynew);
//   console.log(typeof mynew);
//   console.log(mynew.indexOf(4));
//   mynew.shift();
//   console.log(mynew);
//   const array =mynew.join()
  //join convert array in string;
  console.log(typeof array);
  console.log(mynew);
  const myn1=mynew.slice(1,3);
  console.log(mynew);
  console.log(myn1);
  const myn2=mynew.splice(1,3);
  console.log(mynew);
  console.log(myn2);

  //interview question on slice and splice is that interviewer ask 
  //that whats the differsence between slice and splice,
  //and most of te candidate answer that slice dosent include last element
  //and splice include last element , and here interviewer find that he dont know
  //but the actuall differnce is that slice does not change the original array
  //but splice does..