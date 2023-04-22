// HIGHER ORDER FUNCTION

import { countriess } from "./countries_data.js";

// EXERCISE LEVEL ONE
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. Explain the difference between forEach, map, filter, and reduce.
// forEach, map, filter, and reduce are all array methods in JavaScript that allow you to transform and manipulate arrays

// forEach: The forEach method allows you to loop through each element in an array and perform a specified action on each element. It doesn't return anything and is often used when you want to perform an action on each element, such as logging it to the console or updating a UI.
const num = [1, 2, 3, 4, 5];
num.forEach((num) => {
  console.log(num);
});
// Output: 1 2 3 4 5

// map: The map method creates a new array by applying a specified function to each element in the original array. It returns a new array with the same number of elements as the original array, but with each element transformed by the specified function.
const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.map((num) => num * 2);
console.log(doubleNums);

// filter: The filter method creates a new array containing only the elements from the original array that satisfy a specified condition. It returns a new array with only the elements that pass the condition.
const numb = [1, 2, 3, 4, 5];
const evenNums = numb.filter((numb) => numb % 2 === 0);
console.log(evenNums);
// Output: [2, 4]

// reduce: The reduce method applies a specified function to each element in the array to reduce the array to a single value. It takes an accumulator argument and a current value argument, and returns a single value that is the result of applying the specified function to each element.
const numbs = [1, 2, 3, 4, 5];
const sum = numbs.reduce((a, b) => {
  return a + b;
}, 0);
console.log(sum);
// Output: 15

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
// A callback function is a function that is passed as an argument to another function, which is then called within the outer function to perform a specific task. When using callback functions with methods like forEach, map, filter, or reduce, it's important to define the callback function before passing it as an argument to the method.

// 3. Use forEach to console.log each country in the countries array.
countries.forEach((country) => {
  console.log(country);
});

// 4.Use forEach to console.log each name in the names array.
names.forEach((name) => {
  console.log(name);
});

// 5.Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => {
  console.log(number);
});

// 6.Use map to create a new array by changing each country to uppercase in the countries array.
const toUpperCaseCountry = (country) => {
  return country.toUpperCase();
};
const countriesToUpperCase = countries.map(toUpperCaseCountry);
console.log(countriesToUpperCase);

// 7.Use map to create an array of countries length from countries array.
const countryLength = (country) => {
  return country.length;
};
const countryLengthArr = countries.map(countryLength);
console.log(countryLengthArr);

// 8.Use map to create a new array by changing each number to square in the numbers array
const doubleNum = (nums) => {
  return nums ** 2;
};
const doubleNumbers = numbers.map(doubleNum);
console.log(doubleNumbers);

// 9.Use map to change to each name to uppercase in the names array
const changeName = (nam) => {
  return nam.toUpperCase();
};
const nameToUpperCase = names.map(changeName);
console.log(nameToUpperCase);

// 10. Use map to map the products array to its corresponding prices.
const pro = (prod) => {
  return prod;
};
const productPrice = products.map(pro);
console.table(productPrice);

const product = products.map((prod) => {
  return prod.product;
});
const price = products.map((prod) => {
  return prod.price;
});

// 11.Use filter to filter out countries containing land.
const includeLand = (land) => {
  return land.includes("land");
};

const includesLand = countries.filter(includeLand);
console.log(includesLand);

// 12. Use filter to filter out countries having six character.
const hasSixChar = (char) => {
  return char.length === 6;
};
const hassixChar = countries.filter(hasSixChar);
console.log(hassixChar);

// 13. Use filter to filter out countries containing six letters and more in the country array.
const sixLetter = (char) => {
  return char.length >= 6;
};
const sixOrMoreLetters = countries.filter(sixLetter);
console.log(sixOrMoreLetters);

// 14.Use filter to filter out country start with 'E';
const startsWithE = (country) => {
  return country.startsWith("E");
};
const startswithE = countries.filter(startsWithE);
console.log(startswithE);

// 15.Use filter to filter out only prices with values.
const filteredProducts = products.filter(
  (item) => typeof item.price === "number" && item.price !== 0
);
console.log(filteredProducts);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (arr) => {
  const stringList = arr.filter((item) => typeof item === "string");
  return stringList;
};

// 17.Use reduce to sum all the numbers in the numbers array.
let sumOfAllNums = numbers.reduce((a, b) => a + b, 0);
console.log(sumOfAllNums);

// 18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.
const concatenated = countries.reduce(
  (accumulator, currentValue, index, array) => {
    if (index === array.length - 1) {
      return accumulator + "and " + currentValue;
    } else {
      return accumulator + currentValue + ", ";
    }
  },
  "Estonia, "
);

const sentence = concatenated + " are north European countries.";

console.log(sentence);

// 19.Explain the difference between some and every
// some: The some method tests whether at least one element in the array passes the test implemented by the provided callback function. The method returns true if at least one element passes the test, and false otherwise. The some method stops iterating through the array as soon as it finds the first element that passes the test.
const numberss = [1, 2, 3, 4, 5];
const hasEvenNumber = numberss.some((number) => number % 2 === 0);
console.log(hasEvenNumber);

// every: The every method tests whether all elements in the array pass the test implemented by the provided callback function. The method returns true if all elements pass the test, and false otherwise. The every method stops iterating through the array as soon as it finds the first element that fails the test.
const numbersss = [2, 4, 6, 8, 10];
const areEvenNumbers = numbersss.every((number) => number % 2 === 0);
console.log(areEvenNumbers);

// 20. Use some to check if some names' length greater than seven in names array
const nameLength = (nam) => {
  return nam.length > 7;
};
const nameGreaterThanSeven = names.some(nameLength);
console.log(nameGreaterThanSeven);

// 21. Use every to check if all the countries contain the word land
const containsLand = (country) => {
  return country.includes("land");
};
const containLand = countries.every(containsLand);
console.log(containLand);

// 22. Explain the difference between find and findIndex.
// find: The find method returns the value of the first element in the array that satisfies the provided callback function. If no element satisfies the condition, the method returns undefined. The find method stops iterating through the array as soon as it finds the first element that satisfies the condition.

// findIndex: The findIndex method returns the index of the first element in the array that satisfies the provided callback function. If no element satisfies the condition, the method returns -1. The findIndex method stops iterating through the array as soon as it finds the first element that satisfies the condition.

// 23. Use find to find the first country containing only six letters in the countries array
const sixLetters = (country) => {
  return country.length === 6;
};
const containsSixLetters = countries.find(sixLetters);
console.log(containsSixLetters);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const indexOfSixLetters = countries.findIndex(sixLetters);
console.log(indexOfSixLetters);

// 25.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const containsNorway = (country) => {
  return country.includes("Norway");
};
const includesNorway = countries.findIndex(containsNorway);
console.log(includesNorway);

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const containsRussia = (country) => {
  return country.includes("Russia");
};
const includesRussia = countries.findIndex(containsRussia);
console.log(includesRussia);

// Exercise Level 2
// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
  .filter((item) => item.price !== "" && !isNaN(item.price))
  .map((item) => Number(item.price))
  .reduce((a, b) => a + b, 0);
console.log(totalPrice);

// 2. Find the sum of price of products using only reduce reduce(callback))
const sumOfNumbers = products.reduce((total, product) => {
  if (product.price !== "" && !isNaN(product.price)) {
    return total + Number(product.price);
  } else {
    return total;
  }
}, 0);
console.log(sumOfNumbers);

// 3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = (countries) => {
  const patterns = ["stan", "land", "island", "ia"];
  const categorized = patterns.map((pattern) => {
    return countries.filter((country) => {
      return country.name.toLowerCase().includes(pattern);
    });
  });
  return categorized;
};
const groupedCountries = categorizeCountries(countriess);
console.log(groupedCountries);

// 4.Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const countingLetters = (countries) => {
  let startingLetters = {};

  countries.forEach((country) => {
    const firstLetter = country.name[0].toUpperCase();

    // // If the startingLetters object already has a key for this letter, increment its value
    if (startingLetters[firstLetter]) {
      startingLetters[firstLetter]++;
    } else {
      // Otherwise, add the letter to the object with a value of 1
      startingLetters[firstLetter] = 1;
    }
  });

  const result = Object.keys(startingLetters).map((letter) => {
    return { letter: letter, count: startingLetters[letter] };
  });
  return result;
};

const startingLettersCount = countingLetters(countriess);
console.log(startingLettersCount);

// 5.Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array.
const getFirstTenCountries = (country) => {
  const firstTen = country.slice(0, 10);
  const onlyCountry = [];

  for (let countName in firstTen) {
    onlyCountry.push(firstTen[countName].name);
  }

  const toUpper = onlyCountry.map((country) => country.toUpperCase());

  const filtered = toUpper.filter((country) => !country.includes("B"));

  const sorted = filtered.sort();
  return sorted;
};

const tenCountries = getFirstTenCountries(countriess);
console.log(tenCountries);

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = (country) => {
  const lastTen = country.slice(-10);
  const onlyCountry = [];

  for (let countName in lastTen) {
    onlyCountry.push(lastTen[countName].name);
  }

  const toUpper = onlyCountry.map((country) => country.toUpperCase());

  const filtered = toUpper.filter((country) => !country.includes("B"));

  const sorted = filtered.sort();
  return sorted;
};

const lastTen = getLastTenCountries(countriess);
console.log(lastTen);

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

// Exercise Level 3
// 1.
