// ### Exercises: Level 1

//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

//using while loop

// let i = 0;

// while(i <= 10) {
//     console.log(i);
//     i++
// }

//Using do While loop

// let j = 0;
// do{
//     console.log(j)
//     j++
// } while(j <= 10)

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// };

//Using while loop
// let k = 10;
// while(k >=  0) {
//     console.log(k)
//     k--
// };

//using do while loop

// let k2 = 10
// do{
//     console.log(k2)
//     k2--
// }while(k2 >= 0)

//3. Iterate 0 to n using for loop

// for (let i = 0; i <= n ; i ++) {
//     console.log(i)
// }

/*4. Write a loop that makes the following pattern using console.log():
       #
       ##
       ###
       ####
       #####
       ######
       #######
       */
//Using while loop
let i = 0;
let j = "#";
let k = 0;

while (i < 7) {
  i++;
  while (k < i) {
    k++;
    console.log((j += "#"));
  }
}

//Using for loop
for (let i = 0; i < 7; i++) {
  let j = "#";
  for (k = 0; k < i; k++) {
    j += "#";
  }
  console.log(j);
}

/*
5. Use loop to print the following pattern:

   
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
*/

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

/*
6. Using loop print the following pattern

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ``` */

for (let i = 0; i <= 10; i++) {
  let sumExponent = `${i}  ${i ** 2} ${i ** 3}`;
  console.log(sumExponent);
}

//7. Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//8. Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//9. Use for loop to iterate from 0 to 100 and print only prime numbers

//this code checks any input if its a prime number or not.if its's a prime it returns true, else it retuens false
const isPrime = (num) => {
  for (let i = 0; i <= num; i++) {
    if (num < 2) {
      return false;
      break;
    } else if (num % 2 === 0) {
      return false;
    } else {
      return true;
    }
    console.log(i);
  }
  // for(num = 0; num <= 100; num++)
};
console.log(isPrime(5));

// This code prints all prime numbers between 0 and 100

// function printPrimes() {
//   let count = 0;
//   for (let j = 2; j <= 100; j++) {
//     for (let i = 1; i <= j; i++) {
//       if (j % i == 0) count++;
//     }
//     if (count == 2) console.log(j);
//     count = 0;
//   }
// }
// printPrimes();

const  isprime = () => {
  let count = 0;
  for(let i = 2; i < 100; i++){
    for(let j = 1; j < i; j++){
      if(j % i !== 0){
        count++
      }
      if(count === 2){
        console.log(j)
        count = 0
      }
    }
  }
}
isprime();

//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

/*for (let i = 0; i < 100; i ++){
    let sum = 0;
    for(let j=0; j < i; j++){
        sum += [j]
    }
    console.log(sum)
}

this code is doin another thing entirely
*/

//corect code

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

///this code do entirely different thing
// const odds = [];
// const even = [];
// let sumOdd = 0;
// //let sumEven = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     odds.push(i);
//     if(i){
//       sumOdd += 
//       console.log(sumOdd)
//     }
//   } else {
//     console.log(i);
//     even.push(i);
//   }
// }
// console.log(odds);
// console.log(even);






let sumOdd = 0;
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    sumOdd += i
    console.log(sumOdd);
    
  } else {
    sumEven += i
    console.log(sumEven);
    
  }
}
console.log(sumOdd);
console.log(sumEven);

console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`)


//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

const evenOdd = [];
let odd = 0;
let even = 0
for(let i = 0; i <= 100; i ++){
  if(i%2 !== 0){
    odd += i
    
    
  }
  else{
    even += i
  }
}
let total = [odd, even];
console.log(total)



//13. Develop a small script which generate array of 5 random numbers
let random = [];
for(let i = 0; i <= 5; i++){

   random.push(Math.floor(Math.random() * 11));

}
console.log(random);

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique


let array = [];
while(array.length < 5){
  let randomNum = Math.floor(Math.random() * 11)
  if(!array.includes(randomNum)){
    array.push(randomNum)
  }
}
console.log(array);

//15. Develop a small script which generate a six characters random id:


//This is the first approach

// function generateRandomID() {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < 6; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

//OR this
function generateRandomID(length) {
  const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHHIJKLM)!@#$%^&*(0123456789";
  const charLength = char.length;
  let randomId = '';
  for (let i = 0; i < length; i++){
    randomId += char.charAt(Math.floor(Math.random() * charLength))

  }
  return randomId
}
console.log(generateRandomID(6));



//### Exercises: Level 2

//1. Develop a small script which generate any number of characters random id:
const char = "abscgdhdufjfeu262629830930@!%@^@&@&"
const charLength = char.length;
//let generatedChar = ''
function randomChar(randomId){
  let generatedChar = ''
  for(i = 0; i < randomId; i++){
    generatedChar += char.charAt(Math.floor(Math.random() * charLength))
  }
  return generatedChar;
}
console.log(randomChar(Math.floor(Math.random() * charLength)));


//2. Write a script which generates a random hexadecimal number.
// const randomHex = () => {
//   const randomNum = Math.random();
//   const largeHexNum = randomNum * 0xFFFFFF;
//   const hexString = Math.floor(largeHexNum).toString(16);
//   return hexString;
//   console.log(hexString);
// }
// randomHex(hexString)

// Generate a random hexadecimal number with 8 digits
const hexNumber = Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0');

console.log(hexNumber);

//OR

function generateRandomHex() {
  // Generate a random number between 0 and 1
  const randNum = Math.random();
  
  // Multiply the number by the largest 6-digit hexadecimal number (0xFFFFFF)
  const largeNum = randNum * 0xFFFFFF;
  
  // Convert the large number to a hexadecimal string
  const hexString = Math.floor(largeNum).toString(16);
  
  // Return the hexadecimal string
  return hexString;
}
generateRandomHex()

//3. Write a script which generates a random rgb color number.
const red = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random()*256);
const green = Math.floor(Math.random()*256)
const colorCode = `rgb(${red}, ${blue}, ${green})`;
console.log(colorCode);

/**4. Using the above countries array, create the following new array.
 
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const  newCountry = [];
for(let i = 0; i < countries.length; i++){
  //newCountry += countries[i].toUpperCase();
  newCountry.push(countries[i].toUpperCase())
}

console.log(newCountry);

//5. Using the above countries array, create an array for countries length'
const countryLength = [];
for(const word  of countries){
  countries.length[word]
  console.log(countries)

}