// Map HOF
// It runs only on arrays

const ages = [1, 2, 3, 4, 5];

// We wanted to add 1 to every age.
const resultantAges = ages.map((age) => age + 1);

const randomAges = [23, 56, 78, 23, 45, 67, 89, 12, 34, 56];

const ans = randomAges.map((randomAge) => {
  if (randomAge >= 18) return "You are eligible to vote";
  else return "You are not eligible to vote";
});

// console.log(ans);
// Return true when the age is valid for voting (T/F).

// console.log(resultantAges);

// map will return the new array based on the modification we are doing.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// your task is to print either even or odd for every number.

const oddEvenRes = numbers.map((number) => {
  if (number & 1) return number + " Odd ";
  else return number + " Even ";
});

console.log(oddEvenRes);




// Object destructuring

const person = {
  name: "John",
  age: 30,
  city: "New York",
  occupation: "Engineer"
}
// before destructuring
// const name = person.name;
// const occupation = person.occupation

// after destructuring

const { name, occupation, gender }  = person;

console.log(name,occupation,gender)



/// If we have an object we can destructure it