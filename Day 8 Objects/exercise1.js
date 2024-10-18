// 1. Create an empty object called dog
const dog = {};

// 2. Print the dog object on the console
console.log(dog);

/* 3. Add name, legs, color, age and bark properties 
for the dog object. The bark property is a method which
 return woof woof */
dog.name = "Daisy";
dog.legs = 4;
dog.color = "blond/brown";
dog.age = 9;
dog.bark = function () {
  return `woof woof`;
};

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// 5.Set new properties the dog object: breed, getDogInfo
dog.breed = "Pit Bull";
dog.getDogInfo = function () {
  return `Her name is ${this.name}. It's a ${this.breed} with ${
    this.legs
  } legs, ${this.color} color and ${
    this.age
  } years old. Her bark is ${this.bark()}`;
};
console.log(dog);
console.log(dog.getDogInfo());
