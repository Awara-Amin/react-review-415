import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//  a simple/basic function is
function square(x) {
  return x * x;
}

// const newNumbers = numbers.map(square);
// console.log(newNumbers);

// or like that
// const newNumbers = numbers.map(function square(x) {
//   return x * x;
// });
// console.log(newNumbers);
// chaning to enonamous function
const newNumbers = numbers.map((x) => {
  return x * x;
});
console.log(newNumbers);

// or enonamous function
// const newNumbers = numbers.map(function (x) {
//   return x * x;
// });
// console.log(newNumbers);

// arrow function takes one step further
// const newNumbers = numbers.map((x) => {
//   return x * x;
// });
// console.log(newNumbers);

// arrow function with 2 parameters (input)
// const newNumbers = numbers.map((x, y) => {
//   return x * y;
// });
// console.log(newNumbers);

// or like that
// const newNumbers = numbers.map(x => x * x
// );
// console.log(newNumbers);

//  function in function

// var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
