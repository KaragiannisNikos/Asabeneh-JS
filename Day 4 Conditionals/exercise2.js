/* 1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
let score = prompt("Put your score");

if (score > 100) {
  console.log("Invalid score");
} else if (score > 79) {
  console.log("A");
} else if (score > 69) {
  console.log("B");
} else if (score > 59) {
  console.log("C");
} else if (score > 49) {
  console.log("D");
} else if (score > 0) {
  console.log("F");
} else {
  console.log("Invalid score");
}

/* 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */
let seasonInput = prompt("Enter a month");
let season = seasonInput.toLowerCase();

switch (season) {
  case ("January", "February", "December"):
    console.log("Winter");
    break;
  case ("March", "April", "May"):
    console.log("Spring");
    break;
  case ("June", "July", "August"):
    console.log("Summer");
    break;
  case ("September", "October", "November"):
    console.log("Autumn");
    break;
  default:
    console.log("It is not a month.");
}
let seasonInput1 = prompt("Enter a month No 2");
let season1 = seasonInput1.toLowerCase();

if ((season1 = ("January", "February", "December"))) {
  console.log("Winter");
} else if ((season1 = ("March", "April", "May"))) {
  console.log("Spring");
} else if ((season1 = ("June", "July", "August"))) {
  console.log("Summer");
} else if ((season1 = ("September", "October", "November"))) {
  console.log("Autumn");
} else {
  console.log("It is not a month");
}

/* 3. Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day. */
let dayInput = prompt("Enter the day (Working day)");
let day = dayInput.toLowerCase();

switch (day) {
  case "monday":
    console.log(`${dayInput} is a working day`);
    break;
  case "tuesday":
    console.log(`${dayInput} is a working day`);
    break;
  case "wednesday":
    console.log(`${dayInput} is a working day`);
    break;
  case "thursday":
    console.log(`${dayInput} is a working day`);
    break;
  case "friday":
    console.log(`${dayInput} is a working day`);
    break;
  case "saturday":
    console.log(`${dayInput} is a weekend`);
    break;
  case "saunday":
    console.log(`${dayInput} is a weekend`);
    break;
  default:
    console.log("It is not a week day.");
}
