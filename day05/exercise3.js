// Exercise Level 3

import {
    countries
} from './countries.js';

import {
    webTechs
} from './web_techs.js'

console.log(countries,webTechs);

// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages);

// min age
let min_num = Math.min(...ages);
console.log(min_num);

// min alternate
ages.sort();
let minNum = ages[0];
console.log(minNum); 

// max Age
let max_num = Math.max(...ages);
console.log(max_num);

// max age alternate
ages.sort();
let maxNum = ages[ages.length -1];
console.log(maxNum);

// Find the median age(one middle item or two middle items divided by two)
let middleIndex;
let middleNum;
let medianNum;
if(ages.length % 2 === 0){
    middleIndex = (ages.length/2) - 1;
    middleNum = ages.splice(middleIndex,2);
    medianNum = middleNum.reduce((a,b)=> a+b) / 2;
} else {
    middleIndex = Math.floor(ages.length / 2);
    medianNum = ages[middleIndex] / 2;
};

console.log(medianNum)

// Find the average age(all items divided by number of items)
let averageNum = ages.reduce((a,b)=> a+b) / ages.length;
console.log(averageNum);

// Find the range of the ages(max minus min)
let numRange = maxNum - minNum;
console.log(numRange);

// 


const diffMinAvg = Math.abs(minNum - averageNum);
const diffMaxAvg = Math.abs(maxNum - averageNum);

if (diffMinAvg > diffMaxAvg) {
  console.log(`The difference between the min age and average age is greater than the difference between the max age and average age.`);
} else if (diffMaxAvg > diffMinAvg) {
  console.log(`The difference between the max age and average age is greater than the difference between the min age and average age.`);
} else {
  console.log(`The difference between the min age and average age is equal to the difference between the max age and average age.`);
}

// Slice the first ten countries from the countries array
let firstTen = countries.slice(0,10);
console.log(firstTen);

// Find the middle country(ies) in the countries array
let middleCountryIndex;
let middleCountry;

if(countries.length % 2 === 0){
    middleCountryIndex = (countries.length / 2) - 1;
    middleCountry = countries.splice(middleCountryIndex,2);
}else {
    middleCountryIndex = Math.floor(countries.length / 2);
    middleCountry = countries[middleCountryIndex];
}
console.log(middleCountry);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

let arr1;
let arr2;

if(countries.length % 2 === 0){
    arr1 = countries.slice(0,Math.floor(countries.length / 2));
    arr2 = countries.slice(Math.floor(countries.length / 2),countries.length);
} else {
    arr1 = countries.slice(0,Math.ceil(countries.length / 2));
    arr2 = countries.slice(Math.ceil(countries.length / 2),countries.length);
}

console.log(arr1,arr2);








