// 1. Declare a function fullName and it print out your full name.
function fullName1() {
  let firstName1 = "Nikos";
  let lastName1 = "Karagiannis";
  let fullName2 = firstName1 + " " + lastName1;
  console.log(fullName2);
}
fullName1();

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(fistName, lastName) {
  let fullName1 = fistName + " " + lastName;
  console.log(fullName1);
}
fullName("Nikolaos", "Karagiannis");

// 3. Declare a function addNumbers and it takes two parameters and it returns sum.
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(20, 5));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  let area = length * width;
  console.log(area);
}
areaOfRectangle(20.45, 2.45);

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  console.log(perimeter);
}
perimeterOfRectangle(20, 3.5);

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  console.log(volume);
}
volumeOfRectPrism(20, 5, 4);

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const π = 3.14;
function areaOfCircle(r) {
  let area1 = π * r * r;
  console.log(area1);
}
areaOfCircle(3);

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
  let circumference = 2 * π * r;
  console.log(circumference);
}
circumOfCircle(23);

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
  return mass / volume;
}
console.log(density(20, 5));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function movingObjectSpeed(distanceCoverd, timeTaken) {
  return distanceCoverd / timeTaken;
}
console.log(movingObjectSpeed(25, 5));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
gravity = 9.81;
const weight = (mass) => {
  return mass * gravity;
};
console.log(weight(50));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC) {
  let oF = (9 / 5) * oC + 32;
  console.log(oF);
}
convertCelsiusToFahrenheit(35);

/* 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/
function indexBMI(weightKg, heightM2) {
  bmi = weightKg / (heightM2 * heightM2);
  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi < 24.9) {
    console.log("Normal weight");
  } else if (bmi < 29.9) {
    console.log("Overweight");
  } else console.log("Obese");
}
indexBMI(50, 1.5);

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  const lowercaseMonth = month.toLowerCase();

  switch (lowercaseMonth) {
    case "december":
    case "january":
    case "february":
      return "Winter";
    case "march":
    case "april":
    case "may":
      return "Spring";
    case "june":
    case "july":
    case "august":
      return "Summer";
    case "september":
    case "october":
    case "november":
      return "Autumn";
    default:
      return "Invalid month";
  }
}
console.log(checkSeason("January"));
console.log(checkSeason("july"));
console.log(checkSeason("april"));
console.log(checkSeason("October"));

/* 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/
function findMax(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}
console.log(findMax(2, 5, 10));
console.log(findMax(0, -10, -2));
