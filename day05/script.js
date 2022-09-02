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
for(i=0;i<=itCompanies.length-1;i++){
    console.log(itCompanies[i]);
}

//11.Change each company name to uppercase one by one and print them out
for(i=0;i<=itCompanies.length-1;i++){
    console.log(itCompanies[i].toUpperCase())
};

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString());

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
let google = itCompanies[1];

let available = itCompanies.includes(google) ? `${google}` : "Company not found";
console.log(available);

//14.
for(i=0;i<=itCompanies.length-1;i++){

    if (oop == true){
        let ooP = itCompanies[i].includes('oo');
        console.log(console.log(itCompanies[ooP]))
    } else {
        console.log('Nothing')
    }
};


