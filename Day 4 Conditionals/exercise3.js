/* 1. Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days. */

// 2. Write a program which tells the number of days in a month, now consider leap year.

let monthInput = prompt("Enter a month (exercise 3)");
let yearInput = prompt("Enter year.");
let month = monthInput.toLowerCase();

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${monthInput} has 31 days in year ${yearInput}.`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${monthInput} has 30 days in year ${yearInput}.`);
    break;
  case "february":
    if ((yearInput % 4 == 0 && yearInput % 100 != 0) || yearInput % 400 == 0) {
      console.log(`${monthInput} has 29 days in year ${yearInput}.`);
      break;
    } else {
      console.log(`${monthInput} has 28 days in year ${yearInput}.`);
      break;
    }
  default:
    alert("Please enter a valid month name!");
}
