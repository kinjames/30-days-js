// Data Types

//Exercise Level 1

//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";

//2.Print the string on the browser console using console.log()
console.log(challenge);

//3.Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//4.Change all the string characters to capital letters using toUpperCase() method.
console.log(challenge.toUpperCase());

//5.Change all the string characters to lowercase letters using toLowerCase() method.
console.log(challenge.toLowerCase());

//6.Cut (slice) out the first word of the string using substr() or substring() method
let firstWord = challenge.substring(0, challenge.indexOf(" "));
console.log(firstWord);
console.log(challenge.substring(0, 2));

//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
//To get this, we can find the length of the sentence and also the index of the starting word
console.log(challenge.length); //21
console.log(challenge.indexOf("Day")); //3
console.log(challenge.substring(3, 21));

let phrase = challenge.slice(3);
console.log(phrase);

//8.Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

//9.Split the string into an array using split() method.
console.log(challenge.split());

//10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let techGurus = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(techGurus.split(","));

//12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));

//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));
console.log(challenge[15]); //Another method to use in place of charAt();

//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(challenge.indexOf("J")));

//15.Use indexOf to determine the position of the first occurrence of 'a' in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

//16.Use lastIndexOf to determine the position of the last occurrence of 'a' in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));

//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

//18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf("because"));

//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search("because"));

//20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim());

//21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true.
console.log(challenge.startsWith("30"));

//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true.
console.log(challenge.endsWith("JavaScript"));

//23.Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/gi;
console.log(challenge.match(pattern));

//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let statement1 = "30 Days Of ";
let statement2 = "JavaScript";
let fullStatement = statement1 + statement2;
let fullStatementTwo = statement1.concat(statement1);
console.log(fullStatementTwo);
console.log(fullStatement);

//25.Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

//Exercise Level 2

//1.Using console.log() print out the following statement:
let quote =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(quote);

//2.Using console.log() print out the following quote by Mother Teresa:
let quote_2 =
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"";
console.log(quote_2);

//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof "10" === typeof 10); //False
console.log(typeof Number("10") === typeof 10); //True
console.log(typeof +"10" === typeof 10); //True
console.log(typeof parseInt("10") === typeof 10); //True

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(9.8) === 10); //False
console.log(parseFloat(Math.round(9.8)) === 10); //True  // You can also use ceil to round up.

//5.Check if 'on' is found in both python and jargon
console.log("python".includes("on") && "jargon".includes("on")); // True

//6.I hope this course is not full of jargon. Check if jargon is in the sentence.
let someSentence = "I hope this course is not full of jargon.";
console.log(someSentence.includes("jargon")); //True

//7. Generate a random number between 0 and 100 inclusively.
let num = Math.floor(Math.random() * 101);
console.log(num);

//8.Generate a random number between 50 and 100 inclusively.
let minNum = 50;
let maxNum = 100;
let ranBtn = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(ranBtn);

//9.Generate a random number between 0 and 255 inclusively.
let num2 = Math.floor(Math.random() * 256);
console.log(num2);

//10.Access the 'JavaScript' string characters using a random number.
let course = "JavaScript";
let ranNum = Math.floor(Math.random() * course.length - 1);
let courseChar = course[ranNum];
console.log(courseChar);

//11.Use console.log() and escape characters to print the following pattern.
let numbers =
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125";
console.log(numbers);

//12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let someStatement =
  "You cannot end a sentence with because because because is a conjunction";
console.log(someStatement.substring(someStatement.indexOf("because"), 55));

//Exercise Level 3

//1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let loveSentence =
  "'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.";

let pattern_2 = /love/g;
let numOfLove = (loveSentence.match(pattern_2) || []).length;
console.log(numOfLove);

//2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseSentence =
  "You cannot end a sentence with because because because is a conjunction";
let regEx = /because/g;
let numOfBecause = (becauseSentence.match(regEx) || []).length;
console.log(numOfBecause);

//3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence1 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let reg = /[@%&$#;!]/gi;
console.log(sentence1.replace(reg, ""));

const sentence2 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

// Clean the text by removing unwanted characters and symbols
let cleanedText = sentence2.replace(/[^\w\s]/g, "");

// Split the text into an array of words
let words = cleanedText.split(/\s+/);

// Create an object to store word frequency
let wordFrequency = {};

// Count the frequency of each word
for (let word of words) {
  if (wordFrequency[word]) {
    wordFrequency[word]++;
  } else {
    wordFrequency[word] = 1;
  }
}

// Find the most frequent word
let mostFrequentWord = "";
let maxFrequency = 0;
for (let word in wordFrequency) {
  if (wordFrequency[word] > maxFrequency) {
    mostFrequentWord = word;
    maxFrequency = wordFrequency[word];
  }
}

console.log("Most frequent word:", mostFrequentWord);

//4.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

// Extract numbers using regular expression
const numberss = text.match(/\d+/g);

// Calculate the total annual income
let totalIncome = 0;
for (let number of numberss) {
  totalIncome += parseInt(number);
}

// Multiply monthly earnings by 12 to get the annual amount
totalIncome += parseInt(numberss[0]) * 12;
totalIncome += parseInt(numberss[2]) * 12;

console.log("Total annual income:", totalIncome, "euro");
