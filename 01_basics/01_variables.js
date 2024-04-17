const accId = 55442
let password = "54321"
var accEmail = "devanshu@google.com"
userCity = "Jaipur"
let accState;

// accId=55334
password = "67890"
accEmail= "garg@google.com"
userCity= "Banglore"

/* prefer not to use var 
   because of issue in block scope and fuctional scope */
console.log(accId);
console.table([accId, password, accEmail, userCity, accState])