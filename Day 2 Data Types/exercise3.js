// Day 2

// Exercise 3

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence1 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(sentence1.match(/love/gi).length);
// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let word2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(word2.match(/because/gi).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let cleaning = sentence.replace(/%/g, "");
let cleaning1 = cleaning.replace(/&/g, "");
let cleaning2 = cleaning1.replace(/#/g, "");
let cleaning3 = cleaning2.replace(/@/g, "");
let cleaning4 = cleaning3.replace(/\$/g, "");
console.log(cleaning4);
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(5000 * 12 + 10000 + 15000 * 12);
