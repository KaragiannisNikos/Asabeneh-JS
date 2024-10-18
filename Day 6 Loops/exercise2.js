/*
 1. Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
*/
function generateRandomId2(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomId2 = "";

  for (let i = 0; i < length; i++) {
    const randomIndex2 = Math.floor(Math.random() * characters.length);
    randomId2 += characters.charAt(randomIndex2);
  }

  return randomId2;
}
const randomIdLength = Math.floor(Math.random() * 20) + 1; // Random length between 1 and 20
const randomId3 = generateRandomId(randomIdLength);
console.log(randomId3);

/* 2. Write a script which generates a random hexadecimal number.

'#ee33df'
*/
function generateHexadecimal(length) {
  const hexaCharacters = "0123456789ABCDEF";
  let randomId5 = "";

  for (let x = 0; x <= length; x++) {
    const randomIndi = Math.floor(Math.random() * hexaCharacters.length);
    randomId5 += hexaCharacters.charAt(randomIndi);
  }

  return randomId5;
}
const randomHexa = Math.floor(Math.random() * 17);
const randomIndi2 = generateHexadecimal(randomHexa);
console.log(randomIndi2);

/* 3. Write a script which generates a random rgb color number.

rgb(240,180,80)
*/
function generateRandomRGBColor() {
  const colorR = Math.floor(Math.random() * 256);
  const colorG = Math.floor(Math.random() * 256);
  const colorB = Math.floor(Math.random() * 256);

  return `rgb(${colorR}, ${colorG}, ${colorB})`;
}
const randomRGB = generateRandomRGBColor();
console.log(randomRGB);

/* 4.
Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
const countries1 = [
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
];
const uppercaseCountries = countries1.map((country) => country.toUpperCase());

console.log(uppercaseCountries);

/* 5. Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/
const countLength = countries1.map((country) => country.length);
console.log(countLength);

/* 6. Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
const count1 = ["Albania", "ALB", 7];
const count2 = ["Bolivia", "BOL", 7];
const count3 = ["Canada", "CAN", 6];
const count4 = ["Denmark", "DEN", 7];
const count5 = ["Ethiopia", "ETH", 8];
const count6 = ["Finland", "FIN", 7];
const count7 = ["Germany", "GER", 7];
const count8 = ["Hungary", "HUN", 7];
const count9 = ["Ireland", "IRE", 7];
const count10 = ["Iceland", "ICE", 7];
const count11 = ["Japan", "JAP", 5];
const count12 = ["Kenya", "KEN", 5];
const fullCount = [
  count1,
  count2,
  count3,
  count4,
  count5,
  count6,
  count7,
  count8,
  count9,
  count10,
  count11,
  count12,
];
console.log(fullCount);

/* 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland']
*/
const landCount = [];
for (const country1 of countries1) {
  if (country1.toLowerCase().includes("land")) {
    landCount.push(country1);
  }
}
if (landCount.length > 0) {
  console.log(landCount);
} else {
  console.log("All these countries are without land");
}

/* 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
['Albania', 'Bolivia','Ethiopia']
*/
const landCount1 = [];
for (const country of countries1) {
  if (country.toLowerCase().includes("ia")) {
    landCount1.push(country);
  }
}
if (landCount1.length > 0) {
  console.log(landCount1);
} else {
  console.log("These are countries ends without ia");
}

/* 9. Using the above countries array, find the country containing the biggest number of characters.

Ethiopia
*/
let longestCount = countries1[0];
for (const country of countries1) {
  if (country.length > longestCount.length) {
    longestCount = country;
  }
}
console.log(longestCount);

/* 10. Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']
*/
let charcountries = countries1.filter((country) => country.length === 5);
console.log(charcountries);

// 11. Find the longest word in the webTechs array

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestWeb = webTechs[0];
for (tech of webTechs) {
  if (tech.length > longestWeb.length) {
    longestWeb = tech;
  }
}
console.log(longestWeb);

/* 12. Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/
let web1 = [webTechs[0], webTechs[0].length];
let web2 = [webTechs[1], webTechs[1].length];
let web3 = [webTechs[2], webTechs[2].length];
let web4 = [webTechs[3], webTechs[3].length];
let web5 = [webTechs[4], webTechs[4].length];
let web6 = [webTechs[5], webTechs[5].length];
let web7 = [webTechs[6], webTechs[6].length];
console.log([web1, web2, web3, web4, web5, web6, web7]);

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const mernStack = ["MongoDB", "Express", "React", "Node"];

const acronymMern = mernStack.map((word) => word.charAt(0)).join("");
console.log(acronymMern);

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let webTechs1 = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (let o = 0; o <= webTechs1.length - 1; o++) {
  console.log(webTechs1[o]);
}
// or
for (const word of webTechs1) {
  console.log(word);
}

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ["banana", "orange", "mango", "lemon"];

for (let g = fruits.length - 1; g > -1; g--) {
  console.log(fruits[g]);
}

/* 16. Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
  */
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (const stack of fullStack) {
  for (const element of stack) {
    console.log(element.toUpperCase());
  }
}
