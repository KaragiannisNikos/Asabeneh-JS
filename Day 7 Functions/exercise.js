// FUNCTIONS

function nameOfTheFunction() {
  console.log(`I'm a function!`);
}
nameOfTheFunction();

function addTwoNumbers(a, b) {
  let sum = a + b;
  return sum;
}
console.log(addTwoNumbers(20, 30));
console.log(addTwoNumbers(5, 4));
console.log(addTwoNumbers(2.5, 3));

// Or

function addTwoNumbers1(a, b) {
  return a + b;
}
console.log(addTwoNumbers1(4, 32));

// Or

const addTwoNumbers2 = (a, b) => {
  return a + b;
};
console.log(addTwoNumbers2(4, 32));

function printFullName(firstName, LastName) {
  let fullName = firstName + " " + LastName;
  return fullName;
}
console.log(printFullName("Nikos", "Karagiannis"));
console.log("Donald", "Duck");
