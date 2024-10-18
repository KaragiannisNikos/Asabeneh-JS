const countries1 = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names1 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products1 = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

/* 1. Explain the difference between forEach, map, filter,
 and reduce. 
*/
/* forEach we use it only for strings,
map is ierate and modify the array,
filter is filtering items and returns a new array with our conditions,
reduce is return a single value.
*/

/* 2. Define a callback function before you use it in forEach,
 map, filter or reduce. 
*/
// a. forEach: To do sum includes all the numbers of the array.
let sum0 = 0;
numbers.forEach((numb) => (sum += numb));
console.log(sum);
// b. map: To modify and find the result of square.
const numbersSquare1 = numbers.map((num) => num * num);
console.log(numbersSquare1);
// c. filter: To filter the array and find what is needed.
const countriesHaveSixLetters = countries1.filter(
  (country) => country.length === 6
);
console.log(countriesHaveSixLetters);
// d. reduce: To find the accumulator value. (The sum)
const sum3 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum3);

// 3. Use forEach to console.log each country in the countries array.
countries1.forEach((country) => console.log(country));

// 4. Use forEach to console.log each name in the names array.
names1.forEach((name) => console.log(name));

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach((num) => console.log(num));

/* 6. Use map to create a new array by changing each 
country to uppercase in the countries array.
*/
countries.map((country) => console.log(country.toUpperCase()));

// 7. Use map to create an array of countries length from countries array.
countries.map((country) => console.log(country.length));

/* 8. Use map to create a new array by changing each 
number to square in the numbers array.
*/
console.log(numbersSquare1); // Question 2

/* 9. Use map to change to each name to uppercase 
in the names array.
*/
names1.map((name) => console.log(name.toUpperCase()));

// 10. Use map to map the products array to its corresponding prices.
products1.map((product) => console.log(product));

// 11. Use filter to filter out countries containing land.
const countriesContainingLand1 = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand1);

// 12. Use filter to filter out countries having six character.
const countriesHaveSixLetters1 = countries.filter(
  (country) => country.length === 6
);
console.log(countriesHaveSixLetters1);

/* 13. Use filter to filter out countries containing 
six letters and more in the country array.
*/
const countriesHaveFiveLettersAndMore = countries1.filter(
  (country) => country.length >= 6
);
console.log(countriesHaveFiveLettersAndMore);

// 14. Use filter to filter out country start with 'E';
const countriesStartsE = countries.filter((country) => country.startsWith("E"));
console.log(countriesStartsE); // There is no country starts with 'E'.

// 15. Use filter to filter out only prices with values.
const prices = products1.filter((pr) => typeof pr.price === "number");
console.log(prices);

/* 16. Declare a function called getStringLists which 
takes an array as a parameter and then returns an array 
only with string items.
*/
const list = ["Mango", 42, "Hello", 100, "Yeah"];

function getStringLists(array) {
  return array.filter((strings) => typeof strings === "string");
}

console.log(getStringLists(list));

// 17. Use reduce to sum all the numbers in the numbers array.
const sum01 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum01);

/* 18. Use reduce to concatenate all the countries and 
to produce this sentence: Estonia, Finland, Sweden, 
Denmark, Norway, and IceLand are north European countries
*/
const countries2 = countries1;
const concatenateCountries = countries2.reduce(
  (accumulator, country, index) => {
    if (index === countries2.length - 1) {
      return accumulator + "and" + country;
    } else {
      return accumulator + country + ",";
    }
  },
  ""
);

const sentence = `${concatenateCountries} are north European countries`;
console.log(sentence);

// 19. Explain the difference between some and every
/* every is checking all elements in one aspect and 
returns boolean.
som is checking if some of the elements are similar in 
one aspect and returns boolean too.

/* 20. Use some to check if some names' length greater 
than seven in names array
*/
const nameLength = names1.some((name) => typeof name.length > 7);
console.log(nameLength);

// 21. Use every to check if all the countries contain the word land
const countriesContainingLand2 = countries1.every((country) =>
  country.includes("land")
);
console.log(countriesContainingLand2);

// 22. Explain the difference between find and findIndex.

/* The find it's return the element which satisfies the condition.
The findIndex it's return the position of the element which satisfies the position.
*/

/* 23. Use find to find the first country containing 
only six letters in the countries array
*/
const countriesHaveSixLetters2 = countries1.find(
  (country) => country.length === 6
);
console.log(countriesHaveSixLetters2);

/* 24. Use findIndex to find the position of the first 
country containing only six letters in the countries array.
*/
const positionOfSixLetterCountry = countries1.findIndex(
  (country) => country.length === 6
);
console.log(positionOfSixLetterCountry);

/* 25. Use findIndex to find the position of Norway 
if it doesn't exist in the array you will get -1.
*/
const findNorway = countries1.findIndex((country) => country === "Norway");
console.log(findNorway);

/* 26. Use findIndex to find the position of Russia 
if it doesn't exist in the array you will get -1.
*/
const findRusia = countries1.findIndex((country) => country === "Rusia");
console.log(findRusia);
