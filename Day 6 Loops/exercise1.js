// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// for
for (let i = 0; i < 11; i++) {
  console.log(i);
}
// while
let i = 0;
while (i < 11) {
  console.log(i);
  i++;
}
// do while
let d = 0;
do {
  console.log(d);
  d++;
} while (d < 11);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// for
for (let s = 11; s > 0; s--) {
  console.log(s);
}
// while
let e = 11;
while (e > 0) {
  console.log(e);
  e--;
}
// do while
let r = 11;
do {
  console.log(r);
  r--;
} while (r > 0);

// 3. Iterate 0 to n using for loop
let n = 10;
for (let f = 0; f <= n; f++) {
  console.log(f);
}
/* 4. Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
const o = 7; // Replace 7 with the desired number of rows

for (let i = 1; i <= o; i++) {
  let line = "";
  for (let e = 0; e < i; e++) {
    line += "#";
  }
  console.log(line);
}
/* 5. Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
for (let l = 0; l < 11; l++) {
  console.log(`${l} x ${l} = ${l * l}`);
}

/* 6. Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */
console.log("p  p^2 p^3");
for (let p = 0; p < 11; p++) {
  console.log(`${p} ${p ** 2}   ${p ** 3}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let v = 0; v < 101; v += 2) {
  console.log(v);
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let m = 1; m < 101; m += 2) {
  console.log(m);
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let number = 0; number <= 100; number++) {
  if (number > 1) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(number);
    }
  }
}

/* 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
The sum of all numbers from 0 to 100 is 5050.
*/
let sum = 0;
for (let w = 0; w < 101; w++) {
  value = sum += w;
}
console.log(`The sum of all numbers from 0 to 100 is ${value}`);

/* 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
*/
let sumEven = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  } else {
    sumOdds += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdds}.`
);

/* 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  [2550, 2500]
  */
console.log(Array(sumEven, sumOdds));

// 13. Develop a small script which generate array of 5 random numbers
function generateRandomNumbersArray(length) {
  const randomNumbersArray = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
    randomNumbersArray.push(randomNumber);
  }
  return randomNumbersArray;
}

const arrayLength = 5;
const randomNumbersArray = generateRandomNumbersArray(arrayLength);
console.log(randomNumbersArray);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique.
function generateUniqueRandomNumbersArray(length) {
  const randomNumbersArray1 = [];

  while (randomNumbersArray1.length < length) {
    const randomNumber1 = Math.floor(Math.random() * 100); // Generate random number between 0 and 99

    // Check if the generated number is already in the array
    if (!randomNumbersArray1.includes(randomNumber1)) {
      randomNumbersArray1.push(randomNumber1);
    }
  }

  return randomNumbersArray1;
}

const arrayLength1 = 5;
const uniqueRandomNumbersArray = generateUniqueRandomNumbersArray(arrayLength1);
console.log(uniqueRandomNumbersArray);

/* 15. Develop a small script which generate a six characters random id:

5j2khz
*/
function generateRandomId(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

const idLength = 6;
const randomId = generateRandomId(idLength);
console.log(randomId);
