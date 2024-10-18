const countries = ["Finland", "Sweden", "Norway"];

// 1. create an empty set
let set = new Set();

// 2. Create a set containing 0 to 10 using loop
const numbersSet = new Set();

for (let i = 0; i <= 10; i++) {
  numbersSet.add(i);
}
console.log(numbersSet);

// 3. Remove an element from a set
const countriessEt = new Set(countries);
countriessEt.delete("Finland");
console.log(countriessEt);

// 4. Clear a set
countriessEt.clear();
console.log(countriessEt);

// 5. Create a set of 5 string elements from array
const stringArray = [
  "banana",
  "apple",
  "peach",
  "pineapple",
  "strawberry",
  "mango",
  "melon",
];

const setOfStrings = new Set();

for (const str of stringArray) {
  if (setOfStrings.size < 5) {
    setOfStrings.add(str);
  } else {
    break;
  }
}
console.log(setOfStrings);

/* 6. Create a map of countries and number of 
characters of a country
*/
const map = new Map();

for (const country of countries) {
  map.set(country, country.length);
}
console.log(map);
