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

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

//2.Check if type of '10' is equal to 10
let str = "10";
let num = 10;

console.log(str == num, str === num); //One will give true and the other will be false because the first only checks the value, but the second checks both value and data types.

//3.Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") === 10);

//4.Write three JavaScript statement which provide truthy value.
//all positive integers
//all strings
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
let word1 = "python";
let word2 = "jargon";

let lengthWord1 = word1.length;
let lengthWord2 = word2.length;

let falsyComparison = lengthWord1 === lengthWord2;

console.log(falsyComparison);

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
console.log(dateNow.getMonth() + 1);

//iii.What is the date today?
console.log(dateNow.getDate());

//iv.What is the day today as a number?
console.log(dateNow.getDay());

//v.What is the hours now?
console.log(dateNow.getHours());

//vi.What is the minutes now?
console.log(dateNow.getMinutes());

//vii.Find out the numbers of seconds elapsed from January 1, 1970 to now.
let nowInSeconds = Math.floor(Date.now() / 1000);
console.log(nowInSeconds);

//Exercise Level 2
//1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let widthNum = Number(prompt("What is the width"));
let heightNum = Number(prompt("What is the height"));

let totalArea = 0.5 * widthNum * heightNum;
console.log(totalArea);

//2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let aNum = Number(prompt("What is the value of a"));
let bNum = Number(prompt("What is the value of b"));
let cNum = Number(prompt("What is the value of c"));

let perimeterTotal = aNum + bNum + cNum;
console.log(perimeterTotal);

//3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width));
let lengthNum = Number(prompt("What is the value of the length"));
let breadthNum = Number(prompt("What is the value of the length"));

let areaTotal = lengthNum * breadthNum;
let periTotal = 2 * (lengthNum + breadthNum);
console.log(
  `Area of rectangle: ${areaTotal}`,
  `Perimeter of rectangle: ${periTotal}`
);

//4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let circleRadius = Number(prompt("What is the radius of the circle?"));

let area = Math.PI * circleRadius * circleRadius;
let circumferenceCircle = 2 * Math.PI * circleRadius;
console.log(
  `Area of circle: ${area}`,
  `Circumference of circle: ${circumferenceCircle}`
);

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
let xValue = Number(prompt("What is the value of x?"));
let slopeTotal = 2 * xValue - 2;

console.log(slopeTotal);

//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10).
let value_x_1 = 2;
let value_x_2 = 6;
let value_y_1 = 2;
let value_y_2 = 10;

let totalSLope = (value_y_2 - value_y_1) / (value_x_2 - value_x_1);
console.log(totalSLope);

//7.

//8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let value_x = 2;
let value_y = value_x * value_x + 6 * value_x + 9;

console.log(value_y);

//9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let workHours = Number(prompt("How many Hours do you work in a week?"));
let rate = Number(prompt("What is the rate per hour?"));

let weeklyWage = workHours * rate;
console.log(`Your weekly wage is: ${weeklyWage}.`);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = prompt("What is your name?");

result = yourName.length > 7 ? "Your name is long." : "Your name is short";
console.log(result);

//11.Compare your first name length and your family name length and you should get this output.

endResult =
  firstName.length > lastName.length
    ? `Your first name is longer than your last name`
    : "Your last name is longer than your first";
console.log(endResult);

//12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
my_age = 24;
your_age = 12;

ourAge = my_age - your_age;
console.log(`I am ${ourAge} years older than you`);

//13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = Number(prompt("Enter birth year?"));
userAge = dateNow.getFullYear() - birthYear;
let difference = 18 - userAge;

let outcome =
  userAge >= 18
    ? `You are ${userAge}. You are old enough to drive`
    : `You are ${userAge}.You will be allowed to drive ${difference} years after`;
console.log(outcome);

//14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.
let yearsLived = Number(prompt("Enter number of years you live:"));
let secondsLived = yearsLived * 31536000;
let remainingSeconds = 100 * 31536000 - secondsLived;

console.log(`Your remaining seconds left on earth is ${remainingSeconds}`);

//15.Create a human readable time format using the Date time object
//i.YYYY-MM-DD HH:mm

let currentDateTime = new Date();

let yearNum = currentDateTime.getFullYear();
let monthNum = String(currentDateTime.getMonth() + 1).padStart(2, "0");
let dayNum = String(currentDateTime.getDate()).padStart(2, "0");
let hoursNum = String(currentDateTime.getHours()).padStart(2, "0");
let minutesNum = String(currentDateTime.getMinutes()).padStart(2, "0");

let humanReadableFormat = `${yearNum}-${monthNum}-${dayNum} ${hoursNum}:${minutesNum}`;

console.log(humanReadableFormat);

//ii. DD-MM-YYYY HH:mm
let humanReadableFormat2 = `${dayNum}-${monthNum}-${yearNum} ${hoursNum}:${minutesNum}`;

console.log(humanReadableFormat2);

//iii.DD/MM/YYYY HH:mm
let humanReadableFormat3 = `${dayNum}/${monthNum}/${yearNum} ${hoursNum}:${minutesNum}`;

console.log(humanReadableFormat3);

//Exercise Level 3;
//1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let minutes = newDate.getMinutes();
let hours = newDate.getHours();
let months = newDate.getMonth() + 1;
let days = newDate.getDate();
let years = newDate.getFullYear();

minutesResult = minutes < 10 ? `0${minutes}` : minutes;
hoursResult = hours < 10 ? `0${hours}` : hours;
monthsResult = months < 10 ? `0${months}` : months;
daysResult = days < 10 ? `0${days}` : days;

console.log(
  `${years}-${monthsResult}-${daysResult} ${hoursResult}:${minutesResult}`
);
