// Loops

import { 
    countries
 } from "./countries.js";

import { 
    webTechs
 } from "./webtechs.js";

 console.log(countries,webTechs);

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



