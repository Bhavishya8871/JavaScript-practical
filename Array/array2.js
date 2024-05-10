const marvel=['thor','hulk','ironman'];
const dc=['superman','batman','flash'];

// marvel.push(dc);
console.log(marvel);

console.log(marvel.concat(dc));
console.log(marvel);

const allheros = [...dc,...marvel];
console.log(allheros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7[4,5]]];
console.log(anotherArray.flat(5));

console.log(Array.isArray("honey"));
console.log(Array.from("honey"));
console.log(Array.from({name:"honey"}));//intereseting question

let score1=2334;
let score2=233324;
let score3=23334;

console.log(Array.of(score1,score2,score3));