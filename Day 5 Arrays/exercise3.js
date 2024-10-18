/* The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
1)Sort the array and find the min and max age
2)Find the median age(one middle item or two middle items divided by two)
3)Find the average age(all items divided by number of items)
4)Find the range of the ages(max minus min)
5)Compare the value of (min - average) and (max - average), use abs() method */
// 1)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
let min = Math.min.apply(null, ages);
let max = Math.max.apply(null, ages);
console.log(min, max);
// 2)
console.log((ages[4] + ages[5]) / 2);
// 3)
console.log(ages.length);
const calculateAverageAge = (ages) => {
  let sum = 0;
  ages.forEach((age) => (sum += age));
  return sum / ages.length;
};
console.log(calculateAverageAge);
// 4)
console.log(max - min);
// 5)

// 1.Slice the first ten countries from the countries array
console.log(countries.slice(10));

// 2. Find the middle country(ies) in the countries array
const midCountry = Math.floor(countries.length / 2);
const midCount = countries[midCountry];
console.log(midCount);

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const middleIndex = Math.ceil(countries.length / 2);

const firstHalf = countries.splice(0, middleIndex);
const lastHalf = countries.splice(-middleIndex);
console.log(firstHalf);
console.log(lastHalf);
firstHalf.shift();
console.log(firstHalf);
