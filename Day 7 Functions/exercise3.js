/* 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
*/
function generatedRandomCharacters() {
  const characters =
    "zxcvbnmasdfghjklqwertyuiop1234567890ZXCVBNMASDFGHJKLQWERTYUIOP";
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function userIdGeneratedByUser() {
  const numbOfCharsInput = prompt(
    "Enter the number of characters for each ID:"
  );
  const numbOfIDInput = prompt("Enter the number of IDs to be generated:");

  const numOfChars = parseInt(numbOfCharsInput);
  const numOfIds = parseInt(numbOfIDInput);

  if (isNaN(numOfChars) || isNaN(numOfIds)) {
    console.log("Invalid input. Please enter valid numbers.");
    return;
  }

  let generatedIds = "";
  for (let i = 0; i < numOfIds; i++) {
    let newId = "";
    for (let j = 0; j < numOfChars; j++) {
      newId += generatedRandomCharacters();
    }
    generatedIds += newId + "\n";
  }

  console.log(generatedIds);
}
userIdGeneratedByUser();

/* 2. Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)
*/
function randomGeneratorColor() {
  return Math.floor(Math.random() * 256);
}

function rgbColorGenerator() {
  const red = randomGeneratorColor();
  const green = randomGeneratorColor();
  const blue = randomGeneratorColor();

  return `rgb(${red}, ${green}, ${blue})`;
}
console.log(rgbColorGenerator());

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function generateHexaColor() {
  const hexaColors = "1234567890abcdef";

  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexaColors[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(generateHexaColor());

function arrayOfHexaColors(numOfColors) {
  const colors = [];
  for (let i = 0; i < numOfColors; i++) {
    colors.push(generateHexaColor());
  }
  return colors;
}
// We can add more.
console.log(arrayOfHexaColors(1));

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(numbOfColors) {
  const colors = [];
  for (let i = 0; i < numbOfColors; i++) {
    colors.push(rgbColorGenerator());
  }
  return colors;
}
console.log(arrayOfRgbColors(1));

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexaColor) {
  hexaColor = hexaColor.replace("#", "");

  if (hexaColor === 3) {
    hexaColor =
      hexaColor[0] +
      hexaColor[0] +
      hexaColor[1] +
      hexaColor[1] +
      hexaColor[2] +
      hexaColor[2];
  }
  const r = parseInt(hexaColor.substr(0, 2), 16);
  const g = parseInt(hexaColor.substr(0, 2), 16);
  const b = parseInt(hexaColor.substr(4, 2), 16);

  return `rgb(${r}, ${g}, ${b})`;
}
console.log(convertHexaToRgb("#45acfa"));

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function valueToHex(c) {
  var hex = c.toString(16);

  return hex;
}
function convertRgbToHexa(r, g, b) {
  return valueToHex(r) + valueToHex(g) + valueToHex(b);
}
console.log(convertRgbToHexa(12, 51, 255));

/* 7. Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/
function generateColors(type, numbOfColors) {
  const colors = [];
  for (let i = 0; i < numbOfColors; i++) {
    if (type === "hexa") {
      colors.push(generateHexaColor());
    } else if (type === "rgb") {
      colors.push(rgbColorGenerator());
    }
  }
  return numbOfColors === 1 ? colors[0] : colors;
}
console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const myArray1 = [1, 2, 3, 4, 5];
console.log(shuffleArray(myArray1));

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
console.log(factorial(24));

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
  if (value === undefined || value === null) {
    return true;
  }
  if (typeof value === "string" || Array.isArray(value)) {
    return !value.length;
  }
  if (typeof value === "object") {
    return Object.keys(value).length;
  }
  return false;
}
console.log(isEmpty(""));
console.log(isEmpty([]));
console.log(isEmpty(1, 2));
console.log(isEmpty("hello"));

// 11. Call your function sum, it takes any number of arguments and it returns the sum.
function sum() {
  let sumOfArguments = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumOfArguments += arguments[i];
  }
  return sumOfArguments;
}
console.log(sum(3, 6));
console.log(sum(2, 4, 6));

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array) {
  let sum = 0;

  for (const item of array) {
    if (typeof item !== "number") {
      return "Array has Non-numeric values";
    }
    sum += item;
  }
  return sum;
}
console.log(sumOfArrayItems([1, 2, 3, 4, 5]));
console.log(sumOfArrayItems([1, 2, "3", 4]));
console.log(sumOfArrayItems(["apple", "banana", "mango"]));
console.log(sumOfArrayItems([])); // giving 0

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(aaray) {
  if (!Array.isArray(aaray)) {
    return "Is not an array";
  }
  let sum = 0;
  let count = 0;

  for (const item of aaray) {
    if (typeof item !== "number") {
      return "Array contains a non number element";
    }
    sum += item;
    count++;
  }

  if (count === 0) {
    return "Array is empty";
  }

  return sum / count;
}
const numbers = [10, 25, 32, 44, 51];
const mixing = [10, 25, "hey"];

console.log(average(numbers));
console.log(average(mixing));

/* 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'
*/
function modifyArray(array) {
  if (array.length < 5) {
    return "Not Found";
  }
  array.splice(4, 1);

  return array;
}
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));

// 15. Write a function called isPrime, which checks if a number is prime number.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(2));
console.log(isPrime(17));
console.log(isPrime(1));
console.log(isPrime(-3));

// 16. Write a functions which checks if all items are unique in the array.
function areAllItemsUnique(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(areAllItemsUnique([1, 2, 3, 4, 5]));
console.log(areAllItemsUnique([1, 2, 1, 3, 4]));
console.log(areAllItemsUnique(["apple", "mango", "banana"]));
console.log(areAllItemsUnique(["apple", "mango", "apple", "apricot"]));

// 17. Write a function which checks if all the items of the array are the same data type.
function areAllItemsSameType(array) {
  if (Array.isArray(array) || array.length === 0) {
    return false;
  }
  const firstType = typeof array[0];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== firstType) {
      return false;
    }
  }
  return true;
}
console.log(areAllItemsSameType([1, 2, 3, 4, 5]));
console.log(areAllItemsSameType(["apple", "milk", "mango"]));
console.log(areAllItemsSameType([1, 2, "milk", "sugar"]));

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function areAllItemsSameType(array) {
  if (array.length === 0) {
    return true;
  }
  const firstItemType = typeof array[0];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== firstItemType) {
      return false;
    }
  }
  return true;
}
console.log(areAllItemsSameType([1, 2, 3, 4, 5]));
console.log(areAllItemsSameType([1, "apple", "mango"]));
console.log(areAllItemsSameType(["apple", "mango", "banana"]));
console.log(areAllItemsSameType([true, false, true])); // true because they already booleans

/* 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
*/
function sevenRandomNumbers() {
  const uniqueNumbers = [];

  while (uniqueNumbers.length < 7) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }
  return uniqueNumbers;
}
console.log(sevenRandomNumbers());

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(countries) {
  const countriesCopy = countries.slice(); // Copy with slice

  return countriesCopy.reverse();
}
const countriesArray = ["Italy", "Poland", "Greece", "Spain"];

console.log(reverseCountries(countriesArray));
