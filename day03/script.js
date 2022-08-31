//Booleans, Operators && Dates

//Exercise Level 1

//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "James";
let lastName = "Myers";
let country = "Ghana";
let city = "Cape Coast";
let age = 24;
let isMarried = false;
let year = 2022;

console.log(typeof(firstName),typeof(lastName),typeof(country),typeof(city),typeof(age), typeof(isMarried),typeof(year),);

//2.Check if type of '10' is equal to 10
let str = '10';
let num = 10;

console.log(str==num,str===num);//One will give true and the other will be false because the first only checks the value, but the second checks both value and data types.

//3.Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);

//4.Write three JavaScript statement which provide truthy value.
//all positive integers
//all string
//boolean true
//ii.Write three JavaScript statement which provide falsy value.
//empty string
//0
//NAN

//5.
/*
4 > 3  // true
4 >= 3 // true 
4 < 3  //false
4 <= 3 //false
4 == 4  //true
4 === 4  //true
4 != 4  //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false
*/
//Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length != 'jargon'.length);

//6.
/*
4 > 3 && 10 < 12  // true
4 > 3 && 10 > 12 // false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 // true
!(4 > 3) // false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) // true
!(4 === '4') // true
There is no 'on' in both dragon and python  //false
*/

//7i.What is the year today?
let dateNow = new Date();
console.log(dateNow.getFullYear());

//ii.What is the month today as a number?
console.log(dateNow.getMonth());

//iii.What is the date today?
console.log(dateNow.getDate());

//iv.What is the day today as a number?
console.log(dateNow.getDay() + 1);

//v.What is the hours now?
console.log(dateNow.getHours());

//vi.What is the minutes now?
console.log(dateNow.getMinutes());

//vii.Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(dateNow.getTime());


//Exercise Level 2