// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, variables) {
  if (variables === "x") {
    return (-b - c) / a;
  } else if (variables === "y") {
    return (-a - c) / b;
  }
}
console.log(solveLinEquation(4, 5, -6, "x"));
console.log(solveLinEquation(4, 5, -6, "y"));

/* 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/
function solveQuadEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return { root1, root2 };
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return { root };
  } else {
    // Complex roots: real part (-b/2a) and imaginary part (sqrt(-discriminant)/2a)
    const realPart = -b / (2 * a);
    const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    return {
      root1: `${realPart} + ${imaginaryPart}i`,
      root2: `${realPart} - ${imaginaryPart}i`,
    };
  }
}
console.log(solveQuadEquation()); // {0}
console.log(solveQuadEquation(1, 4, 4)); // {-2}
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); //{2, -2}
console.log(solveQuadEquation(1, -1, 0)); //{1, 0}

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
const myArray = [1, 2, 3, 4, 5];
printArray(myArray);

/* 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08
*/
function showDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const formattedDay = now < 10 ? "0" + now : now;
  const formattedMonth = month < 10 ? "0" + month : month;
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedDateTime = `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`;

  console.log(formattedDateTime);
}
showDateTime();

/* 5. Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
*/
function swapValues(x, y) {
  const temp = x;
  x = y;
  y = temp;

  return [x, y];
}
console.log(swapValues(3, 4));
console.log(swapValues(4, 5));

/* 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
*/
function reverseArray(arr) {
  for (let e = arr.length - 1; e >= 0; e--) {
    console.log(arr[e]);
  }
}
reverseArray(myArray);

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray() {
  let capitalizedArray = [
    "Nikos",
    "Dominika",
    "Giannis",
    "Michele",
    "Valentina",
  ];
  for (const name of capitalizedArray) {
    console.log(name.toUpperCase());
  }
}
capitalizeArray();

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem() {
  const items = ["Apple", "Peach", "Mango", "Pear"];
  items.push("Banana");
  console.log(items);
}
addItem();

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem() {
  const items = ["Apple", "Peach", "Mango", "Pear"];
  items.shift();
  console.log(items);
}
removeItem();

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
  sum = 0;
  for (let i = 0; i < number; i++) {
    sum += i;
  }
  console.log(sum);
}
sumOfNumbers(10);

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(oddNumber) {
  oddSum = 0;
  for (let i = 0; i <= oddNumber; i += 2) {
    oddSum += i;
  }
  console.log(oddSum);
}
sumOfOdds(7);

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(evenNumber) {
  evenSum = 0;
  for (let i = 2; i <= evenNumber; i += 2) {
    if (i % 2 === 0) {
      // doesn't need if.Just to check.
      evenSum += i;
    }
  }
  console.log(evenSum);
}
sumOfEven(7);

/* 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
*/
function evensAndOdds(number) {
  evSum = 0;
  odsum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 2 == 0) {
      evSum += i;
    } else {
      odsum += i;
    }
  }
  console.log(`The number of odds are ${odsum}`);
  console.log(`The number of evens are ${evSum}`);
}
evensAndOdds(25);

/* 14. Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
*/
function arguSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(arguSum(5, 10, 15));
console.log(arguSum(3, 6, 9, 10, 34));

// 15. Write a function which generates a randomUserIp.
function randomUserIp() {
  const randomIp = () => Math.floor(Math.random() * 256);

  return `${randomIp()}.${randomIp()}.${randomIp()}.${randomIp()}`;
}
console.log(randomUserIp());

// 16. Write a function which generates a randomMacAddress
function randomMacAddress() {
  const charMac = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const randomMacIp = () => charMac[Math.floor(Math.random() * charMac.length)];
  let macAddress = "";

  for (let i = 0; i < 6; i++) {
    macAddress += randomMacIp() + randomMacIp();

    if (i < 5) {
      macAddress += ":";
    }
  }
  return macAddress;
}
console.log(randomMacAddress());

/* 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'
*/

function randomHexaNumberGenerator() {
  let randomHexaNum = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexNum = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * randomHexaNum.length);
    hexNum += randomHexaNum[randomIndex];
  }
  return hexNum;
}
console.log(randomHexaNumberGenerator());

/* 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
*/
function userIdGenerator() {
  let characters =
    "zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP1234567890";
  userId = "";
  for (let i = 0; i < 7; i++) {
    randomIdIndex = Math.floor(Math.random() * characters.length);
    userId += characters[randomIdIndex];
  }
  return userId;
}
console.log(userIdGenerator());
