// Loops

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// for loop
for(let i = 0; i <= 10; i++){
    console.log(i);
}

// while loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// do while loop
let j = 0;
do {
    console.log(j);
    j++
} while (j <= 10);


// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i = 10; i >= 0; i--){
    console.log(i);
}

//    
let k = 10;
while(k >=0 ){
    console.log(k);
    k--;
}

//do while loop
let m = 10;
do{
    console.log(m);
    m--;
} while (m >= 0);


// 3. Iterate 0 to n using for loop
let n;
for (let i = 0; i <= n; n++){
    console.log(i)
}


// 4. Write a loop that makes the following pattern using console.log():
let stringPattern = "";
for (let i = 1; i <= 7; i++){
    stringPattern +="#";
    console.log(stringPattern);
}

// 5. Use loop to print the following pattern:
let pattern = "";
for (let i = 0; i <= 10; i++){
    let ans = i * i;
    pattern = `${i} * ${i} = ${ans}`;
    console.log(pattern);
}

// 6. Using loop print the following pattern
for (let i = 0; i < 11; i++){
    console.log(i,i**2,i**3);
}


// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}
