// DAY 3
// Exercise 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "Nikos";
const lastName = "Karagiannis";
const country = "Greece";
const city = "New Stira";
const age = 34;
const isMarried = false;
const year = 2023;

console.log(typeof firstName);
console.log(typeof "Greece");
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
console.log(typeof "10" == typeof 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") === 10);
// Check again

/* 4. Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value. */
console.log(5 > 3);
console.log(10 == "10");
console.log(9 < 12);
console.log(20 === "20");
console.log(country == age);
console.log(12 ** 9 < 3000 + 200);

/* 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

i.   4 > 3
ii.  4 >= 3
iii. 4 < 3
iv.  4 <= 3
v.   4 == 4
vi.  4 === 4
vii. 4 != 4
viii 4 !== 4
ix.  4 != '4'
x.   4 == '4'
xi   4 === '4'
Find the length of python and jargon and make a falsy comparison statement. */
let check = 4 > 3; //       true
let check1 = 4 >= 3; //     true
let check2 = 4 < 3; //      false
let check3 = 4 <= 3; //     false
let check4 = 4 == 4; //     true
let check5 = 4 === 4; //    true
let check6 = 4 != 4; //     false
let check7 = 4 !== 4; //    false
let check8 = 4 != "4"; //   false
let check9 = 4 == "4"; //   true
let check10 = 4 === "4"; // false

console.log(
  check,
  check1,
  check2,
  check3,
  check4,
  check5,
  check6,
  check7,
  check8,
  check9,
  check10
);
console.log("python".length == "jargon".length);
console.log("python".length != "jargon".length);
/* 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

i.    4 > 3 && 10 < 12
ii.   4 > 3 && 10 > 12
iii.  4 > 3 || 10 < 12
iv.   4 > 3 || 10 > 12
v.    !(4 > 3)
vi.   !(4 < 3)
vii.  !(false)
viii. !(4 > 3 && 10 < 12)
ix.   !(4 > 3 && 10 > 12)
x.    !(4 === '4')
xi. There is no 'on' in both dragon and python */
let ch = 4 > 3 && 10 < 12; // true && true ->                  true
let ch1 = 4 > 3 && 10 > 12; // true && false ->             false
let ch2 = 4 > 3 || 10 < 12; // true II true ->              true
let ch3 = 4 > 3 || 10 > 12; // true II false ->             true
let ch4 = !(4 > 3); //                              false
let ch5 = !(4 < 3); //                              true
let ch6 = !false; //                              true
let ch7 = !(4 > 3 && 10 < 12); // !(true && true) -> true ->   false
let ch8 = !(4 > 3 && 10 > 12); // !(true && false) -> false -> true
let ch9 = !(4 === "4"); // !false ->                    true
console.log(ch, ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9);
let dra = "dragon";
let pyth = "python";
console.log(!pyth.includes("on") && !dra.includes("on"));

/* Use the Date object to do the following activities
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

const yearNow = new Date();
const years = yearNow.getFullYear();
const month = yearNow.getMonth() + 1;
const date = yearNow.getDate();
const day = yearNow.getDay();
const hour = yearNow.getHours();
const minute = yearNow.getMinutes();
const time = yearNow.getTime();

console.log(
  `${years} / ${month} / ${date} / ${day} / ${hour} / ${minute} / ${time}`
);
