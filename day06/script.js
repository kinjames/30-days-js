//Loops

//Exercise Level 1

//1.Iterate 0 to 10 using for loop, do the same using while and do while loop
//For
for(let i = 0; i<=10; i++){
    console.log(i)
};

//While
let i = 0;
while (i <= 10){
    console.log(i)
    i++;
};

//Do While
let j = 0 
do {
    console.log(j)
    j++
} while (j <= 10);


//2.Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let a = 10; a>=0; a--){
    console.log(a)
};

//While
let b = 10;
while (b >= 0){
    console.log(b)
    b--;
};

//Do While
let c = 10 
do {
    console.log(c)
    c--
} while (c >= 0);

 //For increment, we use < and for the decrement we > for the condition;

 //3.Iterate 0 to n using for loop
 let n = 10
for (let i=0; i<= n; i++){
  console.log(i)
}

//4.Write a loop that makes the following pattern using console.log():

for(let i=1; i<= 7; i++){
    if(i ==  1){
        console.log("#")
    }else if (i==2){
        console.log("##")
    }else if (i==3){
        console.log("###")
    }else if (i==4){
        console.log("####")
    }else if (i==5){
        console.log("#####")
    }else if (i==6){
        console.log("######")
    }else if (i==7){
        console.log("#######")
    }
} 

//another method
for (i =1; i<=7; i++){
    let str = "";
    for(j=0;j<i; j++){
        str +="#"
    }
    console.log(str);
}


//5.Use loop to print the following pattern:
for (i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

//6.Using loop print the following pattern
for (let i = 0; i <= 10; i++){
    console.log(`${i} ${i**2} ${i**3}`);
}

// for (let i = 1; i <= 3; i++){
//     for(let j = 0; j<= 10; j++){
//         console.log(`${j} ${j**2} ${j**3}`);
//     }

// }


//7.Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++){
    if (i%2==0){
        console.log(i)
    }
}

//8.Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++){
    if (!(i%2==0)){
        console.log(i)
    }
}

//9.Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 0; i <= 100; i++){
    if (i%i==0){
        console.log(i)
    }
}

//10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let arr = [];
let sum = 0
 for( let i=0;i<=100;i++){
    arr.push(i);
}

for(let i = 0; i < arr.length; i++){
    sum +=arr[i];
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);



//11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let arr_1 = [];
let even = 0;
let odd = 0;
for (let a = 0; a <= 100; a++){
    arr_1.push(a);
}
for(let i = 0; i < arr_1.length; i++) {
if(i % 2 === 0) {
even += arr_1[i];
} else {
odd += arr_1[i];
}
} 
console.log([even, odd]);   


//12.Develop a small script which generate array of 5 random numbers
var arrs = [];
while(arrs.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arrs.indexOf(r) === -1) arrs.push(r);
}
console.log(arrs);

//14.Develop a small script which generate array of 5 random numbers and the numbers must be unique

//15.Develop a small script which generate a six characters random id:
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));