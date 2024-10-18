/* 1. How many languages are there in the countries object 
file.
*/
console.log(map.size);

/* 2. *** Use the countries data to find the 10 most 
spoken languages:

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
*/

function mostSpokenLanguages(countries, count) {
  languageCount = [];

  // Count the languages spoken in all countries
  for (const country of countriess) {
    for (const language of country.languages) {
      languageCount[language] = (languageCount[language] || 0) + 1;
    }
  }
  // Sort the array by count in descending order
  const sortedLanguages = Object.keys(languageCount).sort(
    (a, b) => languageCount[b] - languageCount[a]
  );
  // Convert language count to an array of objects
  const result = sortedLanguages
    .slice(0, count)
    .map((language) => ({ [language]: languageCount[language] }));

  return result;
}
console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));
