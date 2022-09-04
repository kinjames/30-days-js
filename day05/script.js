//Arrays

//Exercise Level 1

//1.Declare an empty array;
let arr = new Array();
console.log(arr);

let arr_1 = [];
console.log(arr_1);

//2.Declare an array with more than 5 number of elements
let myDetails = ["James", 24, false, "Myers", "Kofi", 1998, 7, 5];

//3.Find the length of your array
console.log(myDetails.length);

//4.Get the first item, the middle item and the last item of the array
let firstItem = myDetails[0];
let middleItem = myDetails[4];
let lastItem = myDetails[myDetails.length-1];

console.log(firstItem,middleItem,lastItem);

//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, true, null, "apple", "banana", false];
console.log(mixedDataTypes.length);

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7.Print the array using console.log()
console.log(itCompanies);

//8.Print the number of companies in the array
console.log(itCompanies.length);

//9.Print the first company, middle and last company
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[3];
let lastCompany = itCompanies[itCompanies.length - 1];

console.log(firstCompany,middleCompany,lastCompany);

//10.Print out each company
for(i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i]);
}

//Another Method
for(count of itCompanies){
    console.log(count);
}

//11.Change each company name to uppercase one by one and print them out
for(i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i].toUpperCase())
};
// Another Method
for (counts of itCompanies){
    console.log(counts.toUpperCase());
}

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString());

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
let google = itCompanies[1];

let available_1 = google === -1 ? `Company not found` : `${google}`;
console.log(available_1);// second method
let available = itCompanies.includes(google) ? `${google}` : "Company not found";
console.log(available);

//14.Filter out companies which have more than one 'o' without the filter method;
for(i=0;i<=itCompanies.length-1;i++){
    console.log(itCompanies[i].includes('oo'))
};

//15.Sort the array using sort() method
console.log(itCompanies.sort());

//16.Reverse the array using reverse() method
console.log(itCompanies.reverse());

//17.Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

//18.Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,7));

//19.Slice out the middle IT company or companies from the array.
console.log(itCompanies.splice(3,1))

//20.Remove the first IT company from the array
console.log(itCompanies.shift());

//21.Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2,1));

//22.Remove the last IT company from the array
console.log(itCompanies.pop());

//23.Remove all IT companies
 itCompanies =[];
 console.log(itCompanies);



 //Exercise Level 2
 //1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file.


 //2.First remove all the punctuations and change the string to array and count the number of words in the array
let sentence= 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
sentence = sentence.replace(/[,.]/g ,'');
let result = sentence.split(" ");
console.log(result.length);

//3.In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//i.add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);

//ii.add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

//iii.remove 'Honey' if you are allergic to honey
console.log(shoppingCart.splice(shoppingCart.indexOf('Honey'),1));


//iv.modify Tea to 'Green Tea' 
let tea = shoppingCart.indexOf("Tea");
shoppingCart[tea] = "Green Tea"
console.log(shoppingCart)


//4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// if (countries.includes("Ethiopia")){
//     console.log("ETHIOPIA")
// }else {
//     countries.push("Ethiopia")
// };

//5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// if (webTechs.includes("Sass")){
//     console.log('Sass is a CSS preprocess')
// }else {
//     webTechs.push('Sass');
//     console.log(webTechs);
// }

//6.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


//Exercise Level 3

//1.The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//i.Sort the array and find the min and max age
let age = ages.sort();
console.log(age);
let maxNum = age[9]
let minNum = age[0]

console.log("Min Number is:" + age[0], "Max num is:" + age[9]);
//In order to find the min and max of numbers, we can use Math.min(num) and Math.max(num)

//ii.Find the median age(one middle item or two middle items divided by two)
let midNum_1 = age[4]
let midNum_2 = age[5]
let medianNum = (midNum_1 + midNum_2)/ 2;
console.log(medianNum)

//iii.Find the range of the ages(max minus min)
let range = maxNum - minNum;
console.log(range)

//iv.Compare the value of (min - average) and (max - average), use abs() method;
