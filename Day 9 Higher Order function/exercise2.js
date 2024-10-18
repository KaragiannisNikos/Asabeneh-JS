/* 1. Find the total price of products by chaining 
two or more array iterators(eg. arr.map(callback).filter
(callback).reduce(callback))
*/
const totalPrice = products1
  .filter((product) => product.price > 0)
  .map((product) => product.price)
  .reduce((sum, price) => sum + price, 0);

console.log(totalPrice);

// 2. Find the sum of price of products using only reduce reduce(callback))
const sum02 = products1.reduce((sum, product) => sum + product.price, 0);

console.log(sum02);

/* 3. Declare a function called categorizeCountries 
which returns an array of countries which have some 
common pattern(you find the countries array in this 
    repository as countries.js(eg 'land', 'ia', 
    'island','stan')).
*/
const countries02 = countries;
function categorizeCountries(patterns, countriesArray) {
  return countriesArray.filter((country) =>
    patterns.some((pattern) => country.includes(pattern))
  );
}
const patterns = ["land", "ia", "island", "stan"];
const categorizedCountries = categorizeCountries(patterns, countries02);

console.log(categorizedCountries);

/* 4. Create a function which return an array of objects, 
which is the letter and the number of times the letter 
use to start with a name of a country.
*/
function getLetterFrequency(countries) {
  const letterFrequency = {};

  countries.forEach((country) => {
    const firstLetter = country.charAt(0);
    if (/[A-Z]/.test(firstLetter)) {
      //test if it is a valid letter
      if (letterFrequency[firstLetter]) {
        letterFrequency[firstLetter]++;
      } else {
        letterFrequency[firstLetter] = 1;
      }
    }
  });
  return Object.entries(letterFrequency).map(([letter, count]) => ({
    letter,
    count,
  }));
}
const letterFrequencyArray = getLetterFrequency(countries);

console.log(letterFrequencyArray);

/* 5. Declare a getFirstTenCountries function and return 
an array of ten countries. Use different functional 
programming to work on the countries.js array
*/
// a.
const countries00 = countries;
const getFirstTenCountriesa = countries00.splice(0, 10);
console.log(getFirstTenCountriesa);
//b.
function getFirstTenCountriesb(countries00) {
  return countries00.slice(0, 10);
}
const firstTenCountriesb = getFirstTenCountriesb(countries);
console.log(firstTenCountriesb);

/* 6. Declare a getLastTenCountries function which 
returns the last ten countries in the countries array.
*/
function getLastTenCountries(countries) {
  if (countries <= 10) {
    return countries;
  } else {
    return countries.slice(countries.length - 10);
  }
}
console.log(getLastTenCountries(countries));

/* 7. Find out which letter is used many times as initial 
for a country name from the countries array 
(eg. Finland, Fiji, France etc)
*/
function findMostFrecuentInitialLetter(countries) {
  const initialFrequencyLetter = {};

  countries.forEach((country) => {
    firstLetter = country.charAt(0);
    if (/^[A-Z]$/.test(firstLetter)) {
      initialFrequencyLetter[firstLetter] =
        (initialFrequencyLetter[firstLetter] || 0) + 1;
    }
  });
  let mostFrequentLetter = "";
  let maxFrequency = 0;

  for (const letter in initialFrequencyLetter) {
    if (initialFrequencyLetter[letter] > maxFrequency) {
      maxFrequency = initialFrequencyLetter[letter];
      mostFrequentLetter = letter;
    }
  }
  return mostFrequentLetter;
}
const mostFrecuentInitialLetter = findMostFrecuentInitialLetter(countries);

console.log(mostFrecuentInitialLetter);
