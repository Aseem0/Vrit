// const currDate = new Date();
// console.log(newDate().getMonth());

// const calculateCurrentYear = (date) => {
//   const currYear = date.getFullYear();
//   return currYear;
// };
// const dateFormatter = (date) => {
//   const currYear = date.getFullYear();
//   const currMonth = date.getMonth();
//   const currDay = date.getDay();
//   const formattedDate = `${currYear}-${currMonth + 1}-${currDay}`;
//   return formattedDate;
// };
// const d = calculateCurrentYear(currDate);
// const f = dateFormatter(currDate);
// document.write(`Copyright company_name ${d}`);
// document.write(`<br> Current date is ${f}`);

// var vs let vs const

// Higher order array methods => forEach, map, filter,reduce

const array = [
  {
    id: 1,
    productName: "Phone",
    description: "loremloremlorem",
    price: 1000,
    currency: "USD",
    address: {
      city: "Washington",
      postalCode: 2000,
    },
    discountPercent: 20,
    rating: 3,
  },
  {
    id: 2,
    productName: "Phone2",
    description: "loremloremlorem",
    price: 10000,
    currency: "MXN",
    address: {
      city: "Mexico",
      postalCode: 3000,
    },
    discountPercent: 30,
    rating: 4,
  },
  {
    id: 3,
    productName: "Phone3",
    description: "loremloremlorem",
    price: 15000,
    currency: "NPR",
    address: {
      city: "Kathmandu",
      postalCode: 44600,
    },
    discountPercent: 70,
    rating: 1,
  },
  {
    id: 4,
    productName: "Phone4",
    description: "loremloremlorem",
    price: 1000,
    currency: "MXN",
    address: {
      city: "Mexico",
      postalCode: 1000,
    },
    discountPercent: 20,
    rating: 2,
  },
  {
    id: 5,
    productName: "Phone5",
    description: "loremloremlorem",
    price: 50000,
    currency: "NPR",
    address: {
      city: "Pokhara",
      postalCode: 10000,
    },
    discountPercent: 245,
    rating: 4,
  },
  {
    id: 6,
    productName: "Phone6",
    description: "loremloremlorem",
    price: 1000,
    currency: "USD",
    address: {
      city: "Washington",
      postalCode: 1000,
    },
    discountPercent: 65,
    rating: 4.6,
  },
];

// ForEach method
// array.forEach((item, i) => {
//   console.log(item, i);
// });

// Map method

// // Filtered method
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// const filteredNums = numbers.filter((num) => {
//   return num > 50;
// });

// console.log(filteredNums);

console.log("//Find products whose price is greater than 10000");
const data1 = array.map((item) => {
  if (item.price > 10000) {
    return item;
  } else {
    return "Product Not Found";
  }
});
console.log(data1);

console.log("//Find products whose city is kathmandu");
const data2 = array.filter((item) => {
  if (item.address.city == "Kathmandu") {
    return item;
  }
});
console.log(data2);

console.log("//Find products whose rating is less than 3.");

const data3 = array.filter((item) => {
  if (item.rating < 3) {
    return item;
  }
});
console.log(data3);

console.log(
  "//Find products whose discount percent is greater than 50 (filter method)"
);

const data4 = array.filter((item) => {
  if (item.discountPercent > 50) {
    return item;
  }
});
console.log(data4);

console.log("//Return object of name and address using map method: ");
const data5 = array.map((item) => {
  return {
    Name: item.productName,
    Address: item.address.city,
  };
});
console.log(data5);
