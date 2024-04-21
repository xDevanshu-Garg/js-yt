const string1 = "Devanshu"
const string2 = 'Garg'
const string3 = 'js is funnnn'
//these 3 are primitive strings
 
const string4 = new String("This is String Object")   //object type string
newString = string4

/*
console.log("my name is + "string1 + " " + string2); //this method is old and looks ugly
console.log(`My self ${string1}, my last name is ${string2} and my thoughts on js is that ${string3}`);
//this method is new and we should use this
*/

// console.log(newString.length);
// console.log(newString.toLowerCase());
// console.log(newString.toUpperCase());
// console.log(newString.indexOf('t'));
// console.log(newString.charAt(5));

// console.log(newString.slice(0,4)); //also works on negative indicis i.e. -1 is last index and so on
// console.log(newString.substring(0,4));

// const newString1 = "   Devanshu Garg    "
// console.log(newString1.trim()); //used to remove white char and spaces

 const newString2 = "www.devanshu-garg%20@google.in" // I want to replace %20 with - so i'll use replace function
// console.log(newString2.replace('%20','-'));
const newString3 = newString2.replace('%20','-')

// console.log(newString2.includes('microsoft')); //used to seatch something return: true/false

console.log(newString3.split("-"));