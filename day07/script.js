// Functions
// Exercise Level 1

// 1. Declare a function fullName and it print out your full name.

function fullName() {
  return "James Kofi Myers";
}
let myName = fullName();
console.log(myName);

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
let fullNames = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
let myNames = fullName("James", "Myers");
console.log(myNames);

// 3.Declare a function addNumbers and it takes two two parameters and it returns sum.
const sumOfNums = (a, b) => {
  return a + b;
};
let total = sumOfNums(2, 3);
console.log(total);

// Self Invoking Functions
let sumOfNumsAlt = (function (a, b) {
  return a + b;
})(2, 3);
console.log(sumOfNumsAlt);

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => {
  return length * width;
};
console.log(areaOfRectangle(5, 6));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) => {
  let perimeter = 2 * (length + width);
  return perimeter;
};
console.log(perimeterOfRectangle(3, 4));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => {
  let volume = length * width * height;
  return volume;
};
console.log(volumeOfRectPrism(2, 4, 6));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (PI, r) => {
  let area = PI * r ** 2;
  return area;
};
console.log(Math.round(areaOfCircle(3.142, 9)));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (radius) => {
  let circumference = 2 * 3.142 * radius;
  return circumference;
};
console.log(Math.round(circumOfCircle(4)));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass, volume) => {
  return mass / volume;
};
console.log(density(20, 5));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speed = (distance, time) => {
  return distance / time;
};
console.log(speed(40, 10));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weightOfObject = (mass) => {
  return 9.8 * mass;
};
console.log(weightOfObject(10));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = (celcius) => {
  let faranheit = celcius * 1.8 + 32;
  return faranheit;
};
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
let heightInM = Math.floor(Math.random() * 10);
let result;

const bmi = (weight, height) => {
  return (weight / height) * height;
};

let bodyMassIndex = bmi(weightInKg, heightInM);

if (bodyMassIndex < 18.5) {
  result = "Body is underweight";
} else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
  result = "Body weight is normal";
} else if (bodyMassIndex >= 25 && bodyMassIndex <= 29.9) {
  result = "Body is overweight";
} else {
  result = "Body is obese";
}
console.log(`Yor body mass index is ${bodyMassIndex}. Your ${result}.`);

// 14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let season;
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let ranNum = Math.floor(Math.random() * months.length);
const checkSeason = (month) => {
  switch (month) {
    case "December":
    case "January":
    case "February":
      season = "It is Winter";
      break;
    case "March":
    case "April":
    case "May":
      season = "It is Spring";
      break;
    case "June":
    case "July":
    case "August":
      season = "It is Summer";
      break;
    case "September":
    case "October":
    case "November":
      season = "It is Autumn";
  }
  return `${month}: ${season}`;
};

console.log(checkSeason(months[ranNum]));

//  15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
let largestNumber = (num1, num2, num3) => {
  let largeNum = 0;
  if (num1 > largeNum) {
    largeNum = num1;
  } else if (num2 > largeNum) {
    largeNum = num2;
  } else if (num1 === 0) {
    largeNum = num1;
  } else {
    largeNum = num3;
  }
  return largeNum;
};

console.log(largestNumber(0, 10, 5));
console.log(largestNumber(0, -10, -5));

// Exercise Level Two
// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*1234567890";
let userInputOne = Number(window.prompt("Character length(1-20)"));
let userInputTwo = Number(window.prompt("Number Of IDs"));
let generatedId = [];

const userIdGeneratedByUser = () => {
  for (let i = 0; i < userInputTwo; i++) {
    let password = "";

    for (let j = 0; j < userInputOne; j++) {
      let randomNum = Math.floor(Math.random() * characters.length);
      password += characters[randomNum];
    }

    generatedId.push(password);
  }

  return generatedId;
};

let IDs = userIdGeneratedByUser();
for (let passcode of IDs) {
  console.log(passcode);
}

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = () => {
  let rgb = "rgb(";

  for (let i = 0; i < 3; i++) {
    let rgbNum = Math.floor(Math.random() * 256);
    rgb += rgbNum;
    if (i < 2) {
      rgb += ",";
    }
  }
  rgb += ")";
  return rgb;
};
console.log(rgbColorGenerator());
document.querySelector("body").style.backgroundColor = rgbColorGenerator();

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
let hexValues = "abcdef0123456789";
let numOfTimes = Math.floor(Math.random() * 20);
let arrOfHex = [];

const arrayOfHexaColors = () => {
  for (i = 0; i < numOfTimes; i++) {
    let hexColor = "#";

    for (j = 0; j < 6; j++) {
      let randoms = Math.floor(Math.random() * hexValues.length);
      hexColor += hexValues[randoms];
    }
    arrOfHex.push(hexColor);
  }
  return arrOfHex;
};

console.log(arrayOfHexaColors());

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

let generateRandom = Math.floor(Math.random() * 5);
let rgbArr = [];

const arrayOfRgbColors = () => {
  for (i = 0; i < generateRandom; i++) {
    let rgbColors = "rgb(";
    for (j = 0; j < 3; j++) {
      let rgbRanGen = Math.floor(Math.random() * 256);
      rgbColors += rgbRanGen;
      if (j < 2) {
        rgbColors += ",";
      }
    }
    rgbColors += ")";
    rgbArr.push(rgbColors);
  }
  return rgbArr;
};

console.log(arrayOfRgbColors());

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
const convertHexaToRgb = (hexcolor) => {
  hexcolor = hexcolor.replace("#", "");

  let r = parseInt(hexcolor.substring(0, 2), 16);
  let g = parseInt(hexcolor.substring(2, 4), 16);
  let b = parseInt(hexcolor.substring(4, 6), 16);

  // the reason it was converted to a base of 16 is because hexadecimal(16) is the standard way of representing colors on the web.

  return `rgb (${r},${g},${b})`;
};
console.log(convertHexaToRgb("#ff0342"));

// 6.Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color
const convertRgbToHexa = (red, green, blue) => {
  let redHexa = red.toString(16).padStart(2, "0");
  let greenHexa = green.toString(16).padStart(2, "0");
  let blueHexa = blue.toString(16).padStart(2, "0");

  // the padStart() method, is used to ensure that each hex string has two digits.
  // string.padStart(targetLength [, padString])

  return `#${redHexa}${blueHexa}${greenHexa}`;
};

console.log(convertRgbToHexa(255, 255, 255));

// 7.Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b'];

const generateColors = (type, length) => {
  let colorArr = [];

  if (type === "hex" || type === "hexa") {
    let hexCharacters = "abcdef0123456789";
    for (let i = 0; i < length; i++) {
      let hexColors = "#";
      for (let j = 0; j < 6; j++) {
        let genRanNum = Math.floor(Math.random() * hexCharacters.length);
        hexColors += hexCharacters[genRanNum];
      }

      colorArr.push(hexColors);
    }
  } else if (type === "rgb") {
    for (let a = 0; a < length; a++) {
      let rgbcolors = "rgb(";
      for (let b = 0; b < 3; b++) {
        let ranRgbNum = Math.floor(Math.random() * 256);
        rgbcolors += ranRgbNum;
        if (b < 2) {
          rgbcolors += ",";
        }
      }
      rgbcolors += ")";

      colorArr.push(rgbcolors);
    }
  }

  return colorArr;
};

let type = "hexa";
let num = 4;

console.log(generateColors(type, num));

// 8.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = (arr) => {
  // Copy the original array to avoid mutation
  const shuffledArr = [...arr];

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }

  return shuffledArr;
};

let arr = ["mango", "orange", "avocado", "pear"];
let shuffledArray = shuffleArray(arr);
console.log(shuffledArray);

// 9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
console.log(factorial(3));

// 10.Call your function isEmpty, it takes a parameter and it checks if it is empty or not
// for Objects
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

// For String
function isEmpty(str) {
  return str.trim().length === 0;
}

// For Array
function isEmpty(arr) {
  if (!Array.isArray(arr)) {
    return "Not an array";
  }
  return arr.length === 0;
}

// 11.Call your function sum, it takes any number of arguments and it returns the sum.
const sum = () => {
  let total = 0;
  for (let i = 0; i < argurments.length; i++) {
    total += argurments[i];
  }

  return total;
};

console.log(sum(3, 3, 2));

// 12.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

const sumOfArrayItems = (arr) => {
  let sumTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "All array items should be numbers!";
    }
    sumTotal += arr[i];
  }
  return sumTotal;
};

console.log(sumOfArrayItems([1, 2, 3, 4, 5]));

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
const average = (arr) => {
  let totalNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "All array items should be numbers!!";
    }
    totalNum += arr[i];
  }
  let averageNum = totalNum / arr.length;
  return averageNum;
};
console.log(average([1, 2, 3, 4, 5, 6]));

// 14.Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

const modifyArray = (arr) => {
  if (arr.length >= 5) {
    arr[4] = arr[4].toUpperCase();
  } else {
    return "Item not found";
  }
};

console.log(modifyArray(arr));

// 15.Write a function called isPrime, which checks if a number is prime number.
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  // Check if the number is divisible by any number from 2 up to the square root of the number.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(4));

// 16.Write a functions which checks if all items are unique in the array.

const checkUnique = (arr) => {
  const set = new Set(arr);
  return set.size === arr.length;
};

console.log(checkUnique([1, 1, 2, 3, 4, 5, 6]));

// 17.Write a function which checks if all the items of the array are the same data type.
function checkSameDataType(arr) {
  if (arr.length === 0) {
    return true;
  }
  const firstType = typeof arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== firstType) {
      return false;
    }
  }
  return true;
}

// 18.JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
const isValidVariable = (variableName) => {
  // Check if the variable name starts with a letter, $, or _
  if (!/^[a-zA-Z$_]/.test(variableName)) {
    return false;
  }

  // Check if the variable name contains any invalid characters
  if (!/^[a-zA-Z$_][a-zA-Z0-9$_]*$/.test(variableName)) {
    return false;
  }

  // Check if the variable name is a reserved word
  const reservedWords = [
    "abstract",
    "await",
    "boolean",
    "break",
    "byte",
    "case",
    "catch",
    "char",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "double",
    "else",
    "enum",
    "eval",
    "export",
    "extends",
    "false",
    "final",
    "finally",
    "float",
    "for",
    "function",
    "goto",
    "if",
    "implements",
    "import",
    "in",
    "instanceof",
    "int",
    "interface",
    "let",
    "long",
    "native",
    "new",
    "null",
    "package",
    "private",
    "protected",
    "public",
    "return",
    "short",
    "static",
    "super",
    "switch",
    "synchronized",
    "this",
    "throw",
    "throws",
    "transient",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "volatile",
    "while",
    "with",
    "yield",
  ];
  if (reservedWords.includes(variableName)) {
    return false;
  }

  // The variable name is valid
  return true;
};

// 19.Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
const generateRandomNumbers = () => {
  let numbers = new Set();
  while (numbers.size < 7) {
    numbers.add(Math.floor(Math.random() * 10));
  }
  return Array.from(numbers);
};

console.log(generateRandomNumbers()); // Example output: [1, 5, 8, 0, 7, 6, 4]

// 20.Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

const reverseCountries = (countries) => {
  const reversedCountries = [...countries].reverse();
  return reversedCountries;
};
