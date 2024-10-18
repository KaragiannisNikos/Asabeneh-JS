// Day 2

// Exercise 2

// Using console.log() print out the following statement:
let quote = `The quote \n'There is no exercise better for the heart than reaching down and lifting people up.'\n by John Holmes teaches us to help one another.`;
console.log(quote);

// Using console.log() print out the following quote by Mother Teresa:
let teresaQuote =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(teresaQuote);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof "10" === 10);
console.log(typeof Number("10") === typeof 10);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(9.8) === 10);
console.log(Math.ceil(parseFloat(9.8)) === 10);

// Check if 'on' is found in both python and jargon
let string = "python",
  strin = "jargon";
console.log(string.includes("on") && strin.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let string2 = "I hope this course is not full of jargon.";
console.log(string2.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 51) + 50);

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256));

// Access the 'JavaScript' string characters using a random number.
let word = "JavaScript";
console.log(word.charAt(Math.floor(Math.random() * word.length)));

// Use console.log() and escape characters to print the following pattern.
console.log(
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
);

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string1 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(string1.substr(31, 23));
