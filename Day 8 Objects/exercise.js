// DAY 8 Objects

// //Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Greece",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  "phone number": "+3584545454545",
};
// accessing values using .
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.lastName);
console.log(person["lastName"]);
console.log(person.age);
console.log(person["age"]);
console.log(person.location); // undefined
console.log(person["location"]); // undefined
// value can be accessed using square bracket and key name

console.log(person.getFullName());
// console.log(person[getFullName()]); undefined, wrong!

person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;
person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;

  return statement;
};
console.log(person);
console.log(person.getPersonInfo());

//  Object.assign

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

// Object.keys

const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']

// Object.Values

const values = Object.values(copyPerson);
console.log(values);

// Object.entries

const entries = Object.entries(copyPerson);
console.log(entries);

// hasOwnProperty

console.log(copyPerson.hasOwnProperty("name")); // boolean
console.log(copyPerson.hasOwnProperty("score"));
