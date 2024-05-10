const name = 'hitesh';
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);
const gameName = new String("honey")


console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4);
console.log(newString);
const anotherstirng = gameName.slice(-8,4);
console.log(anotherstirng);
const newstring = "    honey     ";
console.log(newstring);
console.log(newstring.trim());

const url="https://honey.com/honey%20manwani";
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(gameName.split(','));
