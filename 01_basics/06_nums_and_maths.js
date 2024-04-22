const score = 400
console.log(score);

let balance = new Number(100)
console.log(balance);
console.log(balance.toString());
const typeOfBalance = balance.toString()
console.log(typeof(balance));
console.log(typeof(typeOfBalance));

balance = 100.24846
console.log(balance.toFixed(2)); //used to store specific amount of decimal values 

const otherNumber = 43.5623
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(1)); // 4e+1 = precision is 4 but value is 4*10^1=40

const hundreds = 1000000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++