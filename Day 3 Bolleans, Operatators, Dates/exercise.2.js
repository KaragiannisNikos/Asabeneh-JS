// DAY 3

//Exercise 2

/* 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100  */
/* let base = prompt("Enter base", "20");
let height = prompt("Enter height", "10");
let area = 0.5 * base * height;
console.log(area); */

/* 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12  */
/* let sideA = prompt("Enter side a", "5");
let sideB = prompt("Enter side b", "4");
let sideC = prompt("Enter side c", "3");
let perimeter = sideA + sideB + sideC;
console.log(perimeter); */

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
/*let lenght = prompt("Enter Length");
let width = prompt("Enter Width");
let area1 = length * width;
let perimeter1 = 2 * (length * width);
console.log(area1, perimeter1);  */

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
/* const pi = 3.14;
let r = prompt("Enter Radius");
let area2 = pi * r * r;
let c = 2 * pi * r;
console.log(area2, c); */

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let a = 0,
  b = 2,
  c = -2;
let a1 = a / a,
  b1 = b / a,
  c1 = c / a;
let x_intercept = -c1 / b1;
console.log(x_intercept);
let y_intercept = c1 / a1;
console.log(y_intercept);
let slope = Math.round(((y_intercept - 0) / (0 - x_intercept)) * 100) / 100;
let slope1 = Math.round(((0 - y_intercept) / (x_intercept - 0)) * 100) / 100;
console.log(slope);
console.log(slope1);
// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let slope2 = (2 - 6) / (2 - 10);
console.log(slope2);
// 7. Compare the slope of above two questions.

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

/* 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120  */
let hours = prompt("Enter Hours:");
let rate = prompt("Enter rate per hour");
let payslip = rate * hours;
console.log(payslip);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = "Nikolaos";
name.lenght > 7
  ? console.log(`Your name ${name} is long`)
  : console.log(`Your name ${name} is short`);

/* 11. Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh  */
let fistName = "Nikos";
firstName.length > lastName.length
  ? console.log(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    )
  : console.log(
      `Your first name, ${firstName}  is shorter than your family name, ${lastName}`
    );

/* 12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you. */
let myAge = 34;
let yourAge = 31;
let difAge = myAge - yourAge;
console.log(`I am ${difAge} years older than you.`);

/* 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years. */
let yearUser = prompt("Enter birth year");
let driverYear = year - yearUser;
let driveNeed = 18 - driverYear;
driverYear >= 18
  ? console.log(`You are ${driverYear}. You are old enough to drive`)
  : console.log(
      `You are ${driverYear}. You will be allowed to drive after ${driveNeed} years.`
    );

/* 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.  */

let yearsNumber = prompt("Enter Number of Years you live");
let timeYear = 365 * 24 * 60 * 60;
let yearsSec = timeYear * yearsNumber;

console.log(`Enter number of years you live: ${yearsNumber}`);
console.log(`You lived ${yearsSec} seconds.`);

/* 15. Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */
/* 
const yearNow = new Date();
const years = yearNow.getFullYear();
const month = yearNow.getMonth() + 1;
const date = yearNow.getDate();
const day = yearNow.getDay();
const hour = yearNow.getHours();
const minute = yearNow.getMinutes();
const time = yearNow.getTime();
*/
console.log(`${year}-${month}-${day} ${hour}:${minute}`);
console.log(`${day}-${month}-${year} ${hour}:${minute}`);
console.log(`${day}/${month}/${year} ${hour}:${minute}`);
