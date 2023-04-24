//Sets and Map

import { countriess } from "./countries_data.js";

//Exercise level 1

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
// const countries = ['Finland', 'Sweden', 'Norway']

//1.create an empty set
const companies = new Set();
console.log(companies);

//2.Create a set containing 0 to 10 using loop
const nums = [];
for (let i = 0; i < 11; i++) {
  nums.push(i);
}

const newSet = new Set();
for (let num of nums) {
  newSet.add(num);
}
console.log(newSet);

//3.Remove an element from a set
newSet.delete(3);
console.log(newSet.size);

//4.Clear a set
newSet.clear();
console.log(newSet.size);

//5.Create a set of 5 string elements from array
const stringsArr = ["Ama", "Kofi", "Kojo", "Efua", "Adjo"];
const newArrSet = new Set(stringsArr);
console.log(newArrSet);

//6.Create a map of countries and number of characters of a country
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const countryCharCount = new Map(); //creates an empty map

countries.forEach((country) => {
  countryCharCount.set(country, country.length); // adds each country and it length
});

console.log(countryCharCount);

// Algorithm

// Exercises:Level 2

// 1. Find a union b
const A = new Set(a);
const B = new Set(b);
const c = [...a, ...b];
const C = new Set(c);
console.log(C);

// 2. Find a intersection b
const setA = new Set(a);
const setB = new Set(b);
const interSect = a.filter((num) => B.has(num));
console.log(interSect);
// 3. Find a with b

// Exercise Level 3
// 1. How many languages are there in the countries object file.
const languageSet = new Set();
