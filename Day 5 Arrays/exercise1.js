// 1. Declare an empty array;
const arr = Array();
console.log(arr);

// 2. Declare an array with more than 5 number of elements
console.log(countries);

// 3. Find the length of your array
console.log(countries.length);

// 4. Get the first item, the middle item and the last item of the array
console.log("First item: ", countries[0]);
console.log("middle item: ", countries[Math.floor(countries.length / 2)]);
console.log("Last item: ", countries[countries.length - 1]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const male = "Nikos";
const female = "Dominika";
const other = "Daniel";
const animal = "Daisy";
const mixedDataTypes = [male, female, other, animal, countries, webTechs];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log("First company: ", itCompanies[0]);
console.log(
  "middle company: ",
  itCompanies[Math.floor(itCompanies.length / 2)]
);
console.log("Last company: ", itCompanies[itCompanies.length - 1]);

// 10. Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString(), " are big IT companies.");

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf("Skrootz");
if (index === -1) {
  console.log("A company is not found");
} else {
  console.log("Skrootz");
}

// 14. Filter out companies which have more than one 'o' without the filter method
console.log(itCompanies.includes("Facebook"));
console.log(itCompanies.includes("Google"));
console.log(itCompanies.includes("Microsoft"));

// 15. Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(3));

//18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, 4));

// 19. Slice out the middle IT company or companies from the array
itCompanies.splice(3, 1);
console.log(itCompanies);

itCompanies.push("Google");
itCompanies.sort();
console.log(itCompanies);

// 20. Remove the first IT company from the array
itCompanies.shift(0, 1);
console.log(itCompanies);

itCompanies.unshift("Amazon");
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
itCompanies.splice(3, 1);
console.log(itCompanies);

itCompanies.push("Google");
itCompanies.sort();
console.log(itCompanies);
// 22. Remove the last IT company from the array
itCompanies.splice(6, 1);
console.log(itCompanies);

//23. Remove all IT companies
itCompanies.splice(0, 6);
console.log(itCompanies);
