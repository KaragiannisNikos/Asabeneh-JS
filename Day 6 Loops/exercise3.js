// 1. Copy countries array(Avoid mutation)
const copiedCountries = countries1.slice();
console.log(countries1);
console.log(copiedCountries);

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const countries = [
  "Ireland",
  "Albania",
  "Canada",
  "Kenya",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Bolivia",
  "Japan",
  "Denmark",
];
console.log(countries);
const sortedCountries = countries.slice().sort();
console.log(sortedCountries);

// 3. Sort the webTechs array and mernStack array
webTechs.sort();
mernStack.sort();
console.log(webTechs, mernStack);

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
let landCountries = [];
for (let a = 0; a < countries.length; a++) {
  const landCountry = countries[a];
  if (landCountry.includes("land")) {
    landCountries.push(landCountry);
  }
}
console.log(landCountries);

// 5. Find the country containing the hightest number of characters in the countries array
let longestCount2 = countries1[0];
for (const country of countries1) {
  if (country.length > longestCount2.length) {
    longestCount2 = country;
  }
}
console.log(longestCount2);

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array
// The same us 4.  So I will change the question to remove this countries.
landCountries1 = [];
for (const country2 of countries) {
  if (country2.includes("land")) {
    continue;
  }
  landCountries1.push(country2);
}
console.log(landCountries1);

// 7. Extract all the countries containing only four characters from the countries array and print it as array
let charcountries2 = countries1.filter((country) => country.length === 4);
console.log(charcountries2);
console.log("There is no country with 4 letters.");

// 8. Extract all the countries containing two or more words from the countries array and print it as array
const countries3 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  "United Kingdom",
  "North Korea",
  "United States",
  "New Zealand",
];

const multipleWordCount = [];

for (let y = 0; y < countries3.length; y++) {
  const country3 = countries3[y];
  if (country3.split(" ").length >= 2) {
    multipleWordCount.push(country3);
  }
}
console.log(multipleWordCount);

// 9. Reverse the countries array and capitalize each country and stored it as an array
let arra = [];
for (let d = countries1.length - 1; d > 0; d--) {
  arra.push(countries1[d].toUpperCase());
}
console.log(arra);
