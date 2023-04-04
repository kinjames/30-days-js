// Functions
// Exercise Level 1

// 1. Declare a function fullName and it print out your full name.

function fullName(){
    return 'James Kofi Myers';
}
let myName = fullName();
console.log(myName);

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
let fullNames = (firstName,lastName)=>{
    return `${firstName} ${lastName}`;
}
let myNames = fullName('James','Myers');
console.log(myNames);

// 3.Declare a function addNumbers and it takes two two parameters and it returns sum.
const sumOfNums = (a,b) =>{
    return a + b;
}
let total = sumOfNums(2,3);
console.log(total);

// Self Invoking Functions
let sumOfNumsAlt = (function(a,b){
    return a + b;
})(2,3)
console.log(sumOfNumsAlt);

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length,width) => {
    return length * width;
}
console.log(areaOfRectangle(5,6));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length,width) => {
    let perimeter = 2 * (length + width);
    return perimeter;
}
console.log(perimeterOfRectangle(3,4));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length,width,height) => {
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(2,4,6));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (PI,r) => {
    let area = PI * r**2;
    return area;
}
console.log(Math.round(areaOfCircle(3.142,9)));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (radius) => {
    let circumference = 2 * 3.142 * radius;
    return circumference; 
}
console.log(Math.round(circumOfCircle(4)));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass,volume) => {
    return mass / volume;
}
console.log(density(20,5));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speed = (distance, time) => {
    return distance / time ;
}
console.log(speed(40,10));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weightOfObject = (mass) => {
    return 9.8 * mass;
}
console.log(weightOfObject(10));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = (celcius) => {
    let faranheit = (celcius * 1.8) + 32;
    return faranheit;
}
console.log(convertCelsiusToFahrenheit(5));

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

/*
    The same groups apply to both men and women.
    Underweight: BMI is less than 18.5
    Normal weight: BMI is 18.5 to 24.9
    Overweight: BMI is 25 to 29.9
    Obese: BMI is 30 or more
*/

let weightInKg = Math.floor(Math.random() * 100);
let heightInM = Math.floor(Math.random()* 10);
let result;

const bmi = (weight,height) => {
    return weight / height * height;
}

let bodyMassIndex = bmi(weightInKg,heightInM);

if(bodyMassIndex < 18.5){
    result = 'Body is underweight';
} else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9){
    result = 'Body weight is normal'
}else if (bodyMassIndex >= 25 && bodyMassIndex <= 29.9){
    result = 'Body is overweight';
}else{
    result = 'Body is obese'
}
console.log(`Yor body mass index is ${bodyMassIndex}. Your ${result}.`);


// 14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let season;
let months = ['January','February','March', 'April','May','June','July','August','September','October','November','December'];
let ranNum = Math.floor(Math.random() * months.length);
 const checkSeason = (month) => {
    switch(month) {
        case 'December':
        case 'January':
        case 'February':
            season = 'It is Winter';
        break;
        case 'March':
        case 'April':
        case 'May':
            season = 'It is Spring';
        break;
        case 'June':
        case 'July':
        case 'August':
            season = 'It is Summer';
        break;
        case 'September':
        case 'October':
        case 'November':
            season = 'It is Autumn';
    }
    return `${month}: ${season}`;
 } 

 console.log(checkSeason(months[ranNum]));

//  15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
let largestNumber = (num1,num2,num3) => {
    let largeNum = 0;
    if(num1 > largeNum){
        largeNum = num1;
    } else if (num2 > largeNum){
        largeNum = num2;
    } else if(num1 === 0){
        largeNum = num1;
    } 
    else {
        largeNum = num3;
    }
    return largeNum;
}

console.log(largestNumber(0,10,5));
console.log(largestNumber(0,-10,-5));

 