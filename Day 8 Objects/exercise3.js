/* 1. Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties
 and it has totalIncome, totalExpense, accountInfo,
 addIncome, addExpense and accountBalance methods. 
 Incomes is a set of incomes and its description and 
 expenses is a set of incomes and its description.
 */
const personAccount = {
  firstName: "Nikos",
  lastName: "Karagiannis",
  incomes: [],
  expenses: [],
  totalIncome: function () {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },
  totalExpences: function () {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  accountInfo: function () {
    return `Account information for ${this.firstName} ${this.lastName}:
    Total Income: ${this.totalIncome()}
    Total Expenses: ${this.totalExpences()}
    Account Balance: ${this.accountBalance()}`;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpences();
  },
};
personAccount.addIncome("Salary", 15000);
personAccount.addIncome("Freelance", 3000);
personAccount.addExpense("Bills", 1000);
personAccount.addExpense("Groceries", 300);
personAccount.addExpense("Trips", 2000);

console.log(personAccount.accountInfo());

/* 2. Imagine you are getting the above users collection 
from a MongoDB database. 
  a. Create a function called signUp which allows user 
to add to the collection. If user exists, inform the user 
that he has already an account.
  b. Create a function called signIn which allows user 
to sign in to the application  */
const users1 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// a.
const userCollection = [];

function signUp(newUser) {
  const existingUser = users1.find((user) => user.username === newUser);

  if (existingUser) {
    return `User ${newUser} alredy has an account`;
  }

  users1.push(newUser);

  return `User ${newUser} succesfully signed up.`;
}
console.log(signUp("Alex"));
console.log(signUp("Asub"));
console.log(signUp("Asab"));

// b.
function signIn(username, password) {
  const user = users1.find((user) => user.username === username);

  if (!user) {
    return `User not found!`;
  }

  if (user.password === password) {
    user.isLoggedIn = true;
    return "Login Succesfull!";
  } else {
    return "Incorrect password";
  }
}
console.log(signIn("Asab", "123456"));
console.log(signIn("Ahmed", "21543"));
console.log(signIn("Martha", "123221"));

/* 3. The products array has three elements and each 
of them has six properties. 
  a. Create a function called rateProduct which rates 
the product 
  b. Create a function called averageRating which 
calculate the average rating of a product.  */

// a.

function rateProduct(productId, userId, rating) {
  const product = products.find((product) => product._id === productId);

  if (!product) {
    return "Product not found!";
  }

  if (rating < 1 || rating > 5) {
    return "Rating should be from 1 to 5.";
  }

  const existingRating = product.ratings.find((r) => r.userId === userId);

  if (existingRating) {
    existingRating.rate = rating;
  } else {
    product.ratings.push({ userId, rate: rating });
  }
  return `You rate product ${product.name} with ${rating}`;
}

console.log(rateProduct("hedfcg", "fg12cy", 3));
console.log(rateProduct("hedfcg", "zwf8md", 6));
console.log(rateProduct("aegfal", "ghderc", 4));

// b.
function averageRating(productId) {
  const product = products.find((product) => product._id === productId);

  if (!product) {
    return "Product not found!";
  }

  const totalRating = product.ratings.length;
  if (totalRating === 0) {
    return "No ratings available for this product";
  }

  const sumOfRatings = product.ratings.reduce(
    (sum, rating) => sum + rating.rate,
    0
  );
  const avrRating = sumOfRatings / totalRating;

  return `Average rating for ${product.name}: ${avrRating}`;
}
console.log(averageRating("hedfcg"));
console.log(averageRating("eedfcf"));
console.log(averageRating("aegfal"));

/* 4. Create a function called likeProduct. This 
function will helps to like to the product if it is not 
liked and remove like if it was liked.  */
function likeProduct(productId, username) {
  const product = products.find((prod) => prod._id === productId);

  const likedIndex = product.likes.indexOf(username);

  if (likedIndex !== -1) {
    product.likes.splice(likedIndex, 1);
    return `The user ${username} unlike ${product.name}`;
  } else {
    product.likes.push(username);
    return `The user ${username} liked ${product.name}`;
  }
}
console.log(likeProduct("hedfcg", "Asab"));
console.log(likeProduct("eedfcf", "Alex"));
console.log(likeProduct("hedfcg", "Asab"));
