const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

//1.1.Slice the first ten countries from the countries array
console.log(countries.slice(0,10));

//2.Find the middle country(ies) in the countries array
console.log(countries.length);
console.log(countries[5]);

//3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let set_1 = countries.slice(0,countries.length/2);
let set_2 = countries.slice(countries.length/2, countries.length-1);
console.log(set_1,set_2)

if (countries.length%2 ===0){
  // let set_1 = countries.slice(0,countries.length/2);
  // let set_2 = countries.slice(countries.length/2, countries.length-1);
  console.log(set_1,set_2)
} else {
  countries.push("Ghana");
  console.log(countries)
}

//Listing all the members of an array without using the index
for(count of countries){
  console.log(count);
}
