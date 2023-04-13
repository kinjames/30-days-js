// Objects
// Exercise Level 1

import { 
    countries
 } from './countries_data.js';

// 1. Create an empty object called dog
let dog ={};
console.log(dog);

// 2.Print the the dog object on the console
console.log(dog);

// 3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog = {
    name : 'Bingo',
    legs : 'long',
    color : 'Brown',
    age : 3,
    bark(){
        return 'woof woof'
    },
    getDogInfo() {
        return `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs and is ${this.age} years old. ${this.bark()}`
    }

}
console.log(dog.getDogInfo());

// 4. Get name, legs, color, age and bark value from the dog object
let names = dog.name;
let legs = dog.legs;
let color = dog.color;
let age = dog.age;
let bark = dog.bark();
console.log(names,legs,color,age,bark);

// 5.Set new properties the dog object: breed, getDogInfo

dog.breed = 'German Shepherd';
console.log(dog)

// Exercise Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


// 1.Find the person who has many skills in the users object.
const checkSkills = () =>{
  let mostSkills = 0;
  let skilledUser;
  for(let user in users){
    if(users[user].skills.length > mostSkills){
      mostSkills = users[user].skills.length;
      skilledUser = user;
    }
  }
  return skilledUser;
}
console.log(checkSkills());

// 2.Count logged in users, count users having greater than equal to 50 points from the following object. 
const countLoggedInUsers = () =>{
  let isLoggedIn = 0;
  for (let user in users){
    if(users[user].isLoggedIn === true){
      isLoggedIn++
    }
  }
  return isLoggedIn;
}

console.log(countLoggedInUsers());

// count users having greater than equal to 50 points
const countUsersWithFiftyPointsAndAbove = () => {
  let fiftyPointUsers = 0;
  for (let user in users){
    if(users[user].points >= 50){
      fiftyPointUsers++
    }
  }
  return fiftyPointUsers;
}

console.log(countUsersWithFiftyPointsAndAbove());

//3. Find people who are MERN stack developer from the users object
const mernDevelopers = () =>{
  let mernDevelopersInUsers = [];
  for (let user in users){
     if(users[user].skills.includes('MongoDB','Express','React','Node')){
      mernDevelopersInUsers.push(user)
     }
  }
  return mernDevelopersInUsers;
}

console.log(mernDevelopers());
// Alternate
const mernDevelopersTwo = [];

for (const user in users) {
  const skills = users[user].skills;
  if (
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
  ) {
    mernDevelopersTwo.push(user);
  }
}
console.log(mernDevelopersTwo);

// 4.Set your name in the users object without modifying the original users object
const newUsers = {...users, James: {email: 'myname@example.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 25, isLoggedIn: true, points: 60}};
console.log(newUsers);

// Alternate

const newUsersTwo = Object.assign({}, users, { 
  James: {
    email: 'myname@example.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 25,
    isLoggedIn: true,
    points: 60
  }
});
console.log(newUsersTwo);
/* 
The first argument is the target object to merge the other objects into, and in this case we're creating a new empty object. The second argument is the source object, which is the users object. The third argument is the object to merge into the target object, which is an object with a new user object inside.
*/

// 5.Get all keys or properties of users object
let usersKeys = Object.keys(users);
console.log(usersKeys);


// 6.Get all the values of users object
let userValues = Object.values(users);
console.log(userValues);

// 7.Use the countries object to print a country name, capital, populations and languages.
for (let country of countries){
  let countryName = country.name;
  let countryCapital = country.capital;
  let countryPopulation = country.population;
  let countryLanguages = country.languages;
  let statement = `Country Name: ${countryName}\n Capital: ${countryCapital}\n Population: ${countryPopulation}\n Languages: ${countryLanguages}`
  console.log(statement);
}


// Exercise Level 3
// 1.Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

let personAccount = {
  firstName: 'James',
  lastName: 'Myers',
  incomes: [
    {
      description: 'Salary',
      amount: 2000,
    },
    {
      description: 'Passive Income',
      amount: 4000,
    },
  ],
  expenses: [
    {
      description : 'rent',
      amount: 500
    },
    {
      description : 'utility',
      amount: 200
    },
    {
      description : 'transport',
      amount: 250
    },
    {
      description : 'entertainment',
      amount: 200
    },
    {
      description : 'insurance',
      amount: 150
    },
  ],
  totalIncome : function(){
    return this.incomes.reduce((total,income) => total + income.amount, 0)
  },
  totalExpense : function(){
    return this.expenses.reduce((total,expense) =>total + expense.amount, 0)
  },
  accountInfo() {
    return `Name: ${this.firstName} ${this.lastName}\n` +
      `Total Income: ${this.totalIncome()}\n` +
      `Total Expense: ${this.totalExpense()}`;
  },
  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance() {
    const balance = this.totalIncome() - this.totalExpense();
    return `Current Balance: ${balance}`;
  },
};

personAccount.addIncome('freelance',3000);
personAccount.addExpense('misc',300);

console.log(personAccount);


const usersList = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

// 2.Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

const signUp = (email,username,password) =>{
  let userExist = usersList.some(user => user.email === email);
  if(userExist){
    return 'User already has an account';
  }

  const newUser = {
    _id: Math.random().toString(36).substring(2, 8),
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false
  }

  usersList.push(newUser);
  console.log('User Added Successfully');
}
console.log(signUp('myersjames91@gmail.com','jkm','12334'));

console.log(usersList);

// b. Create a function called signIn which allows user to sign in to the application

const signIn = (email,password) =>{
  let user = usersList.find(user => user.email === email && user.password === password);

  if(!user){
    return 'Invalid credentials';
  }
  user.isLoggedIn = true;
  console.log('logged in')
}

console.log(signIn('myersjames91@gmail.com','12334'));


// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product 

function rateProduct(productId, userId, rating) {
  // Find the product with the given id
  const product = products.find(product => product._id === productId);

  // If the product doesn't exist, return an error message
  if (!product) {
    return 'Product not found';
  }

  // Check if the user has already rated the product
  const existingRating = product.ratings.find(rating => rating.userId === userId);

  // If the user has already rated the product, update their rating
  if (existingRating) {
    existingRating.rate = rating;
  }
  // If the user hasn't already rated the product, add their rating
  else {
    product.ratings.push({ userId, rate: rating });
  }

  return 'Product rating updated';
}


// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
  // Find the product with the given id
  const product = products.find(product => product._id === productId);

  // If the product doesn't exist, return an error message
  if (!product) {
    return 'Product not found';
  }

  // If the product has no ratings, return 0
  if (product.ratings.length === 0) {
    return 0;
  }

  // Calculate the average rating
  const sum = product.ratings.reduce((total, rating) => total + rating.rate, 0);
  const average = sum / product.ratings.length;

  return average;
}



// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId) {
  let productLiked = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      if (products[i].likes.includes(userId)) {
        // User already liked the product, so remove the like
        products[i].likes.splice(products[i].likes.indexOf(userId), 1);
        productLiked = false;
      } else {
        // User has not liked the product, so add the like
        products[i].likes.push(userId);
        productLiked = true;
      }
      break;
    }
  }
  if (productLiked) {
    console.log(`Product ${productId} liked by user ${userId}.`);
  } else {
    console.log(`Product ${productId} unliked by user ${userId}.`);
  }
}





