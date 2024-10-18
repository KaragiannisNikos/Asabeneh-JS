// LOOPS

const countr = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
for (let i = 0; i < countr.length; i++) {
  console.log(i);
  console.log(countr[i].toUpperCase());
} // Without [i] it prints all the countries together.
console.log(countr);

const students = ["Nikos", "Domi", "Giannis", "Michele", "Valentina"];
for (let i = 0; i < students.length; i++) {
  console.log(`Welcome ${students[i]} to modern JavaScript!`);
}
console.log(students.length);

// reverse
for (let i = students.length - 1; i >= 0; i--) {
  console.log(`Welcome ${students[i]} to modern JavaScript!`);
}
// In one line students reversed
const arr = [];
for (let i = students.length - 1; i >= 0; i--) {
  arr.push(students[i]);
}
console.log(arr);

// All names together
console.log(`Welcome ${arr} to modern JavaScript!`);

// do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 6);

// for of
for (const student of students) {
  console.log(student);
} // all students ane by one.
