// Conditional Statement

// if else condition

let age = 16;

// syntax
// if(condition){
//     block of code
// }else{
//     next block of code
// }

// if (age>=18){
//     alert('Eligible to drink for age'+age)
// }else{
//     alert('Not eligible to drrink for age'+age)
// }

// let email="abc@gmail.com"
// if (!email) {
//     console.log("Please enter your email to continue")
// }else{
//     console.log(email)
// }

// let email="abc@gmail.com"
// let password= "abc@gmail.com"

// if (!email){
//     console.log("please enter your email to continue")
// }else if (!password){
// console.log("PLease enter your password to continue")
// }else{
//     console.log("Valid email password")
// }

let marks = prompt("Enter your marks");
const num = Number(marks);
let message;
if (num % 2 === 0) {
  message = "even";
} else {
  message = "odd";
}

if (marks >= 0 && marks < 40) {
  console.log("Marks " + num + " is " + message + " and it is Fail");
} else if (marks >= 40 && marks < 65) {
  console.log("Marks " + num + " is " + message + " and it is Third division");
} else if (marks >= 65 && marks < 70) {
  console.log(
    "Marks " + num + " is " + message + " and it is Second division division"
  );
} else if (marks >= 70 && marks < 80) {
  console.log("Marks " + num + " is " + message + " and it is First division");
} else if (marks >= 80 && marks < 100) {
  console.log("Marks " + num + " is " + message + " and it is Distinction");
} else {
  console.log("Invalid marks");
}

// Function => Block of code which solved specific problems

// Function Declaration
function functionName() {}

// Function call
functionName();

function sum() {
  let x = 10;
  let y = 20;
  let z = 30;
  console.log(x + y + z);
}
sum();
