let num = prompt("Enter any number");
let isPrime = true;

// for (let i = 1; i <= num; i++) {
//   console.log(num % i);
// }
if (typeof num === Number(num)) {
  if (num <= 2) {
    document.write(num, "Not a prime number");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${num} is a prime  number`);
    } else {
      console.log(`${num} is not a prime number`);
    }
  }
} else {
  document.write("Number");
}
