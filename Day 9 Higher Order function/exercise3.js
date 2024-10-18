/* 1. Use the countries information, in the data folder. 
Sort countries by name, by capital, by population
*/
const sortedByName = countriess
  .slice()
  .sort((a, b) => (a.name > b.name ? 1 : -1));

const sortedByCapital = countriess
  .slice()
  .sort((a, b) => (a.capital > b.capital ? 1 : -1));

const sortedByPopulation = countriess
  .slice()
  .sort((a, b) => b.population - a.population);

console.log("Sorted by name:", sortedByName);
console.log("Sorted by capital:", sortedByCapital);
console.log("Sorted by population:", sortedByPopulation);

/* 2. *** Find the 10 most spoken languages:

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]```
*/
function mostSpokenLanguages(countriess, n) {
  const languageFrequency = [];

  countriess.forEach(
    (country) =>
      country.languages.forEach((language) => {
        if (language in languageFrequency) {
          languageFrequency[language]++;
        } else {
          languageFrequency[language] = 1;
        }
      }) // To  find the most frequent languages.
  );

  const sortedLanguages = Object.keys(languageFrequency).sort((a, b) => {
    return languageFrequency[b] - languageFrequency[a];
  }); // To sorted

  const topSpokenLanguages = sortedLanguages.slice(0, n).map((language) => ({
    country: language,
    count: languageFrequency[language],
  })); // To slice them when needed (n).
  return topSpokenLanguages;
}
console.log(mostSpokenLanguages(countriess, 10));
console.log(mostSpokenLanguages(countriess, 3));

/* 3. *** Use countries_data.js file create a function which create the ten most populated countries

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]
```
*/
function mostPopulatedCountries(countries, n) {
  // Sort countries by population in descending order
  const sortedCountries = countriess.slice().sort((a, b) => {
    return b.population - a.population;
  });

  // Get the top n countries with their populations
  const topCountries = sortedCountries.slice(0, n).map((country) => ({
    country: country.name,
    population: country.population,
  }));

  return topCountries;
}

console.log(mostPopulatedCountries(countries, 10));
console.log(mostPopulatedCountries(countries, 3));

/* 4. *** Try to develop a program which calculate measure 
of central tendency of a sample(mean, median, mode) and 
measure of variability(range, variance, standard deviation). 
In addition to those measures find the min, max, count, 
percentile, and frequency distribution of the sample. You 
can create an object called statistics and create all 
the functions which do statistical calculations as method 
for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/

const agess = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = {
  data: agess,

  count: function () {
    return this.data.length;
  },
  sum: function () {
    return this.data.reduce((acc, cur) => acc + cur, 0);
  },
  min: function () {
    return Math.min(...this.data);
  },
  max: function () {
    return Math.max(...this.data);
  },
  range: function () {
    return this.max - this.min;
  },
  mean: function () {
    return this.sum - this.count;
  },
  median: function () {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const midle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 2) {
      return (sortedData[midle - 1] + sortedData[midle]) / 2;
    } else {
      return sortedData[midle];
    }
  },
  mode: function () {
    const frecuency = [];
    this.data.forEach((num) => {
      frecuency[num] = (frecuency[num] || 0) + 1;
    });

    let maxFrequency = 0;
    let mode = null;
    for (const num in frecuency) {
      if (frecuency[num] > maxFrequency) {
        maxFrequency = frecuency[num];
        mode = num;
      }
    }
    return { mode: parseInt(mode), count: maxFrequency };
  },
  var: function () {
    const mean = this.mean();
    const squaredDeviations = this.data.map((num) => (num - mean) ** 2);
    return (
      squaredDeviations.reduce((acc, curr) => acc + curr, 0) /
      (this.count() - 1)
    );
  },

  std: function () {
    return Math.sqrt(this.var());
  },

  freqDist: function () {
    const frequency = {};
    this.data.forEach((num) => {
      frequency[num] = (frequency[num] || 0) + 1;
    });

    const freqDist = [];
    for (const num in frequency) {
      freqDist.push([frequency[num], parseInt(num)]);
    }

    return freqDist.sort((a, b) => b[0] - a[0]);
  },

  describe: function () {
    return {
      Count: this.count(),
      Sum: this.sum(),
      Min: this.min(),
      Max: this.max(),
      Range: this.range(),
      Mean: this.mean(),
      Median: this.median(),
      Mode: this.mode(),
      Variance: this.var(),
      "Standard Deviation": this.std(),
      "Frequency Distribution": this.freqDist(),
    };
  },
};

console.log("Count:", statistics.count());
console.log("Sum: ", statistics.sum());
console.log("Min: ", statistics.min());
console.log("Max: ", statistics.max());
console.log("Range: ", statistics.range());
console.log("Mean: ", statistics.mean());
console.log("Median: ", statistics.median());
console.log("Mode: ", statistics.mode());
console.log("Variance: ", statistics.var());
console.log("Standard Deviation: ", statistics.std());
console.log("Frequency Distribution: ", statistics.freqDist());

const description = statistics.describe();
for (const key in description) {
  console.log(key + ":", description[key]);
}
