/* Let us see were we use call back functions. 
For instance the forEach method uses call back. */
const numbers0 = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers0));

// setInterval

/*
function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 1000);
*/
// it prints hello in every second, 1000ms is 1s

// setTimeout

function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 2000);
// it prints hello after it waits for 2 seconds.

//  Functional Programming

// forEach

let sum = 0;
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach((num) => console.log(num));
console.log(sum);
/*
1
2
3
4
5 */

let sum1 = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num) => (sum1 += num));

console.log(sum1); //15

const countries0 = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries0.forEach((element) => console.log(element.toUpperCase()));
/*
FINLAND
DENMARK
SWEDEN
NORWAY
ICELAND */

// map

const numbers3 = [1, 2, 3, 4, 5];
const numbersSquare = numbers3.map((num) => num * num);

console.log(numbersSquare); // [1, 4, 9, 16, 25]

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase); // ['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']

const countriesToUpperCase = countries0.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);
// OR
/*
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
*/
// OR
// const countriesToUpperCase = countries.map(country => country.toUpperCase());

// ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']

const countriesFirstThreeLetters = countries0.map((country) =>
  country.toUpperCase().slice(0, 3)
);
console.log(countriesFirstThreeLetters);
// ['FIN', 'DEN', 'SWE', 'NOR', 'ICE']

// filter

const countriesContainingLand = countries0.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);
// Finland

const countriesEndsByay = countries0.filter((country) =>
  country.endsWith("ia")
);
console.log(countriesEndsByay);
// Norway

const countriesHaveFiveLetters = countries0.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters); // [] (0 countries with 5 letters)

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);
/*[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },
{name: 'Martha', score: 85},{name: 'John', score: 100}] */

//  reduce

const numbers4 = [1, 2, 3, 4, 5];
const sum2 = numbers4.reduce((acc, cur) => acc + cur, 0);

console.log(sum2); // 15

// every

const areAllStr = names.every((name) => typeof name === "string"); // Are all strings?

console.log(areAllStr); // true

const bools = [true, true, true, true];
const areAllTrue = bools.every((b) => b === true); // Are all true?

console.log(areAllTrue); // true

// find

const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log(age);

const result = names.find((name) => name.length > 7);
console.log(result); // Asabeneh

const score = scores.find((user) => user.score > 80);
console.log(score); // { name: "Asabeneh", score: 95 }

// findIndex

const result1 = names.findIndex((name) => name.length > 7);
console.log(result1); // 0

const age1 = ages.findIndex((age) => age < 20);
console.log(age1); // 5

// some

const areSomeTrue = bools.some((b) => b === true);
console.log(areSomeTrue); //true

const areAllStr1 = names.some((name) => typeof name === "number"); // Are all strings ?
console.log(areAllStr1); // false

// sort

// Sorting String Values

const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort());
// ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

// Sorting Numeric values

const numbers5 = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers5.sort()); //[100, 3.14, 37, 9.81]
numbers5.sort(function (a, b) {
  return a - b;
});

console.log(numbers5); // [3.14, 9.81, 37, 100]

numbers5.sort(function (a, b) {
  return b - a;
});
console.log(numbers5); //[100, 37, 9.81, 3.14]

// Sorting Object Arrays

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending
// [{…}, {…}, {…}, {…}]
