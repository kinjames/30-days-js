
// Exercise Level 1

// 1. Declare an empty array;
let myArr = [];

// 2. Declare an array with more than 5 number of elements.
let shoppingCart = ["Milk","Tomatoes","Chicken","Nuts","Beef","Apple","Pie"];

// 3. Find the length of your array.
console.log(shoppingCart.length);

// 4. Get the first item, the middle item and the last item of the array
// first item
let firstItem = shoppingCart[0];
console.log (firstItem);
// middle item
let middleIndex = Math.floor(shoppingCart.length/2);
let middleItem = shoppingCart[middleIndex];
console.log(middleItem);
// Last Item
let lastIndex = shoppingCart.length - 1;
let lastItem = shoppingCart[lastIndex];
console.log(lastItem);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [true,"hello",5,null,"world",25];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8.  Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
// First Company
let firstCompany = itCompanies[0];
console.log(firstCompany);
// Middle company
let middleCompanyIndex = Math.floor(itCompanies.length/2);
let middleCompany = itCompanies[middleCompanyIndex];
console.log(middleCompany);
// Last Company
let lastCompanyIndex = itCompanies.length - 1;
let lastCompany = itCompanies[lastCompanyIndex];
console.log(lastCompany);

//  10. Print out each company using for loop
for (let i=0; i < itCompanies.length; i++){
    let eachCompany = itCompanies[i];
    console.log(eachCompany);
};

// alternate using the forEach method
let eachCompanyAlt = itCompanies.forEach((item)=>{
    console.log(item);
});

// alternate2 Using for of loop
for(let comp of itCompanies) {
    console.log(comp.toUpperCase());
};


//  11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++){
    let companyToUpperCase = itCompanies[i].toUpperCase();
    console.log(companyToUpperCase);
};

// Alternate
let companyToUpperCaseAlt = itCompanies.forEach((item)=>{
    let result = item.toUpperCase();
    console.log(result);
});

//  12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let arrayToSentence = itCompanies.toString();
console.log(arrayToSentence);

// Alternate
let arrayToSentenceAlt = itCompanies.join();
console.log(arrayToSentenceAlt);

//  13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyExist = itCompanies.includes('Tesla');  //false
let companyExistTrue = itCompanies.includes('Apple'); // true
console.log(companyExist,companyExistTrue);
if(companyExist){
    console.log(itCompanies);
} else{
    console.log('Company is not found');
};

// 14. Filter out companies which have more than one 'o' without the filter method
let filteredArray = [];
for(let i=0;i<itCompanies.length;i++){
    if(itCompanies[i].includes('oo')){
        filteredArray.push(itCompanies[i]);
    };
};
console.log(filteredArray);

// Alternate
let filteredArrayAlt = [];
itCompanies.forEach((item)=>{
    if(item.includes('oo')){
        filteredArrayAlt.push(item);
    }
});
console.log(filteredArrayAlt);

// alternate2 using the filter
let filteredArrayAltTwo = [];
itCompanies.filter(item => item.includes('oo'))
            .forEach(n =>{
                filteredArrayAltTwo.push(n)
            });
    console.log(filteredArrayAltTwo);


// 15. Sort the array using sort() method
let sortedCompany = itCompanies.sort();
console.log(sortedCompany);

// 16. Reverse the array using reverse() method
let reverseCompany = itCompanies.reverse();
console.log(reverseCompany);

// 17. Slice out the first 3 companies from the array
let firstThreeSlice = itCompanies.slice(0,3);
console.log(firstThreeSlice);

// 18. Slice out the last 3 companies from the array
let lastThreeSlice = itCompanies.slice(-3);
console.log(lastThreeSlice);

// 19. Slice out the middle IT company or companies from the array
let sliceMiddleIndex = Math.floor(itCompanies.length / 2);
let sliceMiddle = itCompanies.slice(sliceMiddleIndex,sliceMiddleIndex + 1); 
console.log(sliceMiddle);

// 20. Remove the first IT company from the array
let removeFirstCompany = itCompanies.shift();
console.log(removeFirstCompany);
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
let sliceMiddleIndexa; //work on it and fix it
let removeMiddleCompanies;
    if(itCompanies.length % 2 === 0){
        sliceMiddleIndexa = (itCompanies.length / 2) - 1;
        removeMiddleCompanies = itCompanies.splice(sliceMiddleIndexa,2);
        console.log(removeMiddleCompanies);
    } else {
        sliceMiddleIndexa = itCompanies.length / 2;
        removeMiddleCompanies = itCompanies.splice(sliceMiddleIndexa,1);
        console.log(removeMiddleCompanies);
    };

// console.log(sliceMiddlea);

// 22. Remove the last IT company from the array
let removeLastCompany = itCompanies.pop();
console.log(removeLastCompany);

// 23. Remove all IT companies
    itCompanies.length = 0;
    console.log(itCompanies);

// Alternate
    itCompanies.splice(0,itCompanies.length);
    console.log(itCompanies);



