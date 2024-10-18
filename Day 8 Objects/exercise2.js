const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1. Find the person who has many skills in the users object.
function getMostSkills() {
  let max = 1;
  let maxSkills = {};
  for (const key1 in users) {
    const user = users[key1];
    if (user.skills.length > max) {
      maxSkills = user;
      max = user.skills.length;
    }
  }
  return maxSkills;
}
console.log(getMostSkills());

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let highPointsCount = 0;
let loggedInCount = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    highPointsCount++;
  }
}
console.log("Logged in users:", loggedInCount);
console.log("Higher Point users:", highPointsCount);

// 3. Find people who are MERN stack developer from the users object
const mern = [];

for (const user in users) {
  const skills1 = users[user].skills;
  if (
    (skills1.includes("MongoDB"),
    skills1.includes("Express"),
    skills1.includes("React"),
    skills1.includes("Node"))
  ) {
    mern.push(user);
  }
}
console.log("MERN users:", mern);

// 4. Set your name in the users object without modifying the original users object
const copyUsers = Object.assign(users);
console.log(copyUsers);

// 5. Get all keys or properties of users object
const entries1 = Object.entries(users);
console.log(entries1);

// 6. Get all the values of users object
const values1 = Object.values(users);
console.log(values1);

// 7. Use the countries object to print a country name, capital, populations and languages.
for (const country of countries) {
  console.log(
    `${country.name}, ${country.capital}, ${country.population}, ${country.languages}`
  );
}
