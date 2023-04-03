// Loops

import { 
    countries
 } from "./countries.js";

import { 
    webTechs
 } from "./webtechs.js";

import{
    mernStack
}from './mern.js'

 console.log(countries,webTechs,mernStack);

// Exercise Level 1


// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// for loop
for(let i = 0; i <= 10; i++){
    console.log(i);
}

// while loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// do while loop
let j = 0;
do {
    console.log(j);
    j++
} while (j <= 10);


// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i = 10; i >= 0; i--){
    console.log(i);
}

//    
let k = 10;
while(k >=0 ){
    console.log(k);
    k--;
}

//do while loop
let m = 10;
do{
    console.log(m);
    m--;
} while (m >= 0);


// 3. Iterate 0 to n using for loop
let n;
for (let i = 0; i <= n; n++){
    console.log(i)
}


// 4. Write a loop that makes the following pattern using console.log():
let stringPattern = "";
for (let i = 1; i <= 7; i++){
    stringPattern +="#";
    console.log(stringPattern);
}

// 5. Use loop to print the following pattern:
let pattern = "";
for (let i = 0; i <= 10; i++){
    let ans = i * i;
    pattern = `${i} * ${i} = ${ans}`;
    console.log(pattern);
}

// 6. Using loop print the following pattern
for (let i = 0; i < 11; i++){
    console.log(i,i**2,i**3);
}


// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 2; i <= 100; i++) {  // iterate from 2 to 100
    let isPrime = true;  // assume i is prime unless proven otherwise
    
    // check if i is divisible by any number between 2 and i-1
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;  // i is not prime
        break;
      }
    }
    
    // print i if it is prime
    if (isPrime) {
      console.log(i);
    }
  }

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfNums = 0;
for (let i = 0; i<= 100; i++){
    sumOfNums += i;     
}
    console.log(`The sum of all numbers from 0 to 100 is ${sumOfNums}.`);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumOfEven = 0;
let sumOfOdd = 0
for (let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        sumOfEven += i
    }else {
        sumOfOdd += i
    }
}

console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdd}.`);


// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let arrayOfNum = [];
arrayOfNum.push(sumOfEven,sumOfOdd);
console.log(arrayOfNum);

// 13. Develop a small script which generate array of 5 random numbers
let ranNumArr = [];
for (i = 0; i < 5; i++){
    let ranNum = Math.floor(Math.random()* 100);
    ranNumArr.push(ranNum);
}
console.log(ranNumArr);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let ranNumArrAlt = [];
while(ranNumArrAlt.length < 5){
   let randomNum = Math.floor(Math.random()*100);
    if(!ranNumArrAlt.includes(randomNum)){
        ranNumArrAlt.push(randomNum);
    }
}
console.log(ranNumArrAlt);

// 15. Develop a small script which generate a six characters random id:
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let otp =''

for(i=0; i< 6; i++ ){
    let ranScript = Math.floor(Math.random()* characters.length);
    otp += characters[ranScript];
}
console.log(otp);

// Exercise Level Two

// 1. Develop a small script which generate any number of characters random id:
let passwdCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let passwd = '';
let passwdLength = Math.floor(Math.random()*20);

for(let i = 0; i <= passwdLength; i++){
    let randomNumber = Math.floor(Math.random()*passwdCharacters.length);
    passwd += passwdCharacters[randomNumber];
}

console.log(passwd);

// 2. Write a script which generates a random hexadecimal number.
let hexValues = 'abcdef0123456789';
let hexColor = '#';

for (i = 0; i<6; i++){
    let hexRandom = Math.floor(Math.random()*hexValues.length);
    hexColor += hexValues[hexRandom];
    document.querySelector('body').style.background = hexColor
}

console.log(hexColor);

// 3. Write a script which generates a random rgb color number.
let rgb = 'rgb(';
for (let i = 0; i < 3; i++){
    let values = Math.floor(Math.random()*256);
    rgb += values;
    if(i<2){
        rgb +=', ';
    } 
}
rgb +=')';

console.log(rgb);


// 4. Using the above countries array, create the following new array.
let newCountryArr = [];
for(let i = 0; i < countries.length; i++){
    newCountryArr.push(countries[i].toUpperCase());
}
console.log(newCountryArr);

// Alternate
let newCountryArrAlt = [];
for(let country of countries){
    newCountryArrAlt.push(country.toUpperCase());
}
console.log(newCountryArrAlt);

// Alternate 2
let newCountryArrAltTwo = [];
countries.forEach((item)=>{
    newCountryArrAltTwo.push(item.toUpperCase());
})
console.log(newCountryArrAltTwo);

// countries.filter((item)=>{
//     if(item.includes('land')){
//         console.log(item)
//     }
// });

// 5. Using the above countries array, create an array for countries length'.
let countriesLength = [];
for(let country of countries){
    countriesLength.push(country.length);
}
console.log(countriesLength);

// Alternate
let countriesLengthAlt=[];
for(i=0;i < countries.length; i++){
    countriesLengthAlt.push(countries[i].length);
}
console.log(countriesLengthAlt);

// Alternate Two
let countriesLengthAltTwo = [];
countries.forEach((item)=>{
    countriesLengthAltTwo.push(item.length)
})
console.log(countriesLengthAltTwo);


// 6. Use the countries array to create the following array of arrays:
let arrOfArr = [];
for (let country of countries){
    let countryArr = [country, country.slice(0,3).toUpperCase(),country.length];
    arrOfArr.push(countryArr);
}
console.log(arrOfArr);

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let landCountry = [];
for(let country of countries){
    if(country.includes('land')){
        landCountry.push(country);
    }
}
console.log(landCountry);

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let iaCountry =[];
for(let country of countries){
    if(country.includes('ia')){
        iaCountry.push(country);
    }
}
console.log(iaCountry);

// 9. Using the above countries array, find the country containing the biggest number of characters.
let longestItem = '';
for(let i = 0; i < countries.length; i++){
    if(countries[i].length > longestItem.length){
        longestItem = countries[i]
    }
}

console.log(longestItem);

// 10. Using the above countries array, find the country containing only 5 characters.
let fiveLetter = [];
for(let country of countries){
    if(country.length === 5){
        fiveLetter.push(country)
    }
}
console.log(fiveLetter);

// 11. Find the longest word in the webTechs array
let longestTech = '';
for(let i = 0; i < webTechs.length; i++){
    if(webTechs[i].length > longestTech.length){
        longestTech = webTechs[i]
    }
}
console.log(longestTech);

// 12. Use the webTechs array to create the following array of arrays:
let techArr = [];
for (let tech of webTechs){
    let arrOfArrs = [tech,tech.length];
    techArr.push(arrOfArrs);
}
console.log(techArr);

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let mern = '';
for(let merns of mernStack){
    mern += merns[0]; 
}
console.log(mern);

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const items = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
 for(let item of items){
    console.log(item);
 }

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruit = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruit.length -1; i >= 0; i--){
    console.log(fruit[i]);
}

// 16. Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

let itemString = fullStack.join();
itemString = itemString.split(',');
for(let item of itemString){
    console.log(item.toUpperCase());
}


// Exercise Level 3

// 1. Copy countries array(Avoid mutation);
let copiedCountries = countries.slice();
console.log(copiedCountries);

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sortedCountries = copiedCountries.sort();
console.log(sortedCountries);

// 3. Sort the webTechs array and mernStack array
let sortedWebTechs = webTechs.sort();
let sortedMernStack = mernStack.sort();

console.log(sortedWebTechs,sortedMernStack);

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
let countriesLand = [];

for(let country of countries){
    if(country.includes('land')){
        countriesLand.push(country);
    }
}
console.log(countriesLand);

// 5.Find the country containing the hightest number of characters in the countries array
let hightestChar = '';
for(let country of countries){
    if(country.length > hightestChar.length){
        hightestChar = country;
    }
}
console.log(hightestChar);

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array
// let countriesLand = [];

// for(let country of countries){
//     if(country.includes('land')){
//         countriesLand.push(country);
//     }
// }
// console.log(countriesLand);

// 7. Extract all the countries containing only four characters from the countries array and print it as array
let fourCountry = [];
for(let country of countries){
    if(country.length === 4){
        fourCountry.push(country);
    }
}
console.log(fourCountry);

// 8.Extract all the countries containing two or more words from the countries array and print it as array
let twoWorderedCountry = countries.filter(country => country.includes(' '));
console.log(twoWorderedCountry);

// 9. Reverse the countries array and capitalize each country and stored it as an array
let reverseArr=[];
for(let country of countries){
    reverseArr.push(country.toUpperCase());
    reverseArr = reverseArr.reverse(); 
}
 console.log(reverseArr);


