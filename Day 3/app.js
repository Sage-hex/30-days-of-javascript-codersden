//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Kosisochukwu";
let lastName = "Nulesage";
let country = "United Kingdom";
let city = "England";
let age = 27;
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//2. Check if type of '10' is equal to 10

console.log(typeof "10" === typeof 10); //false

//3. Check if parseInt('9.8') is equal to 10

console.log(parseInt("9.8") == 10); //false

//4. Boolean value is either true or false.

//1. Write three JavaScript statement which provide truthy value.
let y = "yes";
console.log(Boolean(y));

let num = 23;
console.log(!!num); //We can also use double neation mark to represernt the Boolean value

let bull = 10;
console.log(Boolean(bull));

//2. Write three JavaScript statement which provide falsy value.

let n = null;
console.log(!!n); //false

let e = undefined;
console.log(Boolean(e)); //false

let istrue = false;
console.log(Boolean(istrue)); //false

//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
/*
    1. 4 > 3
    2. 4 >= 3
    3. 4 < 3
    4. 4 <= 3
    5. 4 == 4
    6. 4 === 4
    7. 4 != 4
    8. 4 !== 4
    9. 4 != '4'
    10. 4 == '4'
    11. 4 === '4'
    12. Find the length of python and jargon and make a falsy comparison statement.
 */

console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //flase
console.log(4 !== 4); //false
console.log(4 != "4"); //false //not adviseable to use this
console.log(4 !== "4"); //true //adviseablw to use this the strict equality check
console.log(4 == "4"); //true
console.log(4 === "4"); //false

/*
6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python */

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4>3 || 10 < 12); //true
console.log(4>3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4<3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12));//false
console.log(!(4 > 3 && 10 > 12)); //true
console.log( !(4 === '4')); //true

let sentence = 'There is no \'on\' in both dragon and python'
console.log( sentence.includes('on')); //true

/*
7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */

   const date = new Date(), miliToday = Date.now()
   console.log(date.getFullYear()); //2023
   console.log(date.getMonth()) //1 (february  because javascript is zero index january is 0 the feb is 1 etc)
   console.log(date.getDate()); //20
   console.log(date.getHours()) //14
   console.log(date.getMinutes()) //53
   console.log(date.getSeconds()) //29
   console.log(date.getTime())
   // const thatDay = new Date(15767365446)
   // console.log(thatDay)


   //Exercises: Level 2

   /*
   1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ``` */

   /*let base = prompt('Enter base?');
   let height = prompt('Enter height?');
   
   let result = 0.5 * base * height;
   console.log(result);*/



/*
2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ``` */

   // let a = parseInt(prompt('Enter saide A:'));
   // let b = parseInt(prompt('Enter side B:'));
   // let c = parseInt(prompt('Enter side C:'));
   // let perimeter = a + b + c;
   // console.log(`Perimeter of a traingle is: ${perimeter}`)

   //OR
   
   /*let a = prompt('Enter saide A:');
   let b = prompt('Enter side B:');
   let c = prompt('Enter side C:');
   
   function perimeter(a,b,c) {
      
      return parseFloat(a) + parseFloat(b) + parseFloat(c);
   }
  console.log('Perimeter of a triangle is: ' + perimeter(a,b,c))*/


//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

//let length = parseFloat(prompt("Enter Lenght of a Rectangle: "));
//let width = parseFloat(prompt("Enter Width of a Rectangle: "));
// let area = length * width;
// console.log("Area of a rectangle = " + area);
// let perimeter = 2 * (length + width);
// console.log(`Perimeter of a rectangle = ${perimeter}`);

//OR

/*function areaPerimeter(){
   let length = parseFloat(prompt("Enter Lenght of a Rectangle: "));
   let width = parseFloat(prompt("Enter Width of a Rectangle: "));
   
   let area = length * width;
   let perimeter = 2 * (length + width);

   return "The area of a rectangle is: " + area + "\n" + "The perimeter of the frectangle is " + perimeter
}
alert(areaPerimeter())*/

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


// let radius = parseFloat(prompt("Enter radius of a circle?"));
// let pi = 3.14;
// let area = pi * radius * radius;
// let circumference = 2 * pi * radius
// console.log("Area of a circle  " + area);
// console.log("Circumference of a circle  " + circumference);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2



//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Define the coordinates of the two points
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

// Calculate the slope using the formula
const slope = (y2 - y1) / (x2 - x1);

console.log(slope); // Output: 2

//7. Compare the slope of above two questions.


//8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.





/*
9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

   ```sh
   Enter hours: 40
   Enter rate per hour: 28
   Your weekly earning is 1120
   ``` */


   /*let hour = parseFloat(prompt("Enter hour: "));
   let pay = parseFloat(prompt("Enter pay per hour: "));
   let payPerHour = hour * pay;
   console.log(`Your pay per hour is ${payPerHour}`);*/

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.

let myName = "Emmanuel";

if (myName.length > 7) {
   console.log("Your name is long!")
}
else{
   console.log("Your name is short")
}


/*
11. Compare your first name length and your family name length and you should get this output.

   ```js
   let firstName = "Asabeneh";
   let lastName = "Yetayeh";
   ```

   ```sh
   Your first name, Asabeneh is longer than your family name, Yetayeh
   ``` */

let firstName1 = "Kosisochukwu";
let lastName2 = "Simeon";

if (firstName1.length > lastName2.length){
   console.log("Your first name is longer than your last name")
}
else{
   console.log("Your last name is longer than your first name")

}

/*
12. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

   ```js
   let myAge = 250;
   let yourAge = 25;
   ```

   ```sh
   I am 225 years older than you.
   ```
 */
   
   let myAge = 26;
   let yourAge = 250;
   
   if (yourAge > myAge){
      ageDiffer = yourAge - myAge;
      console.log(`You are ${ageDiffer} years older than me`)
   }
   else{
      ageDiffer = myAge - yourAge;
      console.log(`I am ${ageDiffer} years older than you`)
   }

   /*
   13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

   ```sh

   Enter birth year: 1995
   You are 25. You are old enough to drive

   Enter birth year: 2005
   You are 15. You will be allowed to drive after 3 years.
   ``` */

   /*let yearOfBirth = parseFloat(prompt("Enter your year of birth? "));
   if (date.getFullYear() - yearOfBirth >= 18){
      console.log("You are allowed to drive")
   }
   else{
      console.log("You are not allowed to drive at this time")
   }*/

   

   /*
   14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```
 */

   let secondsPerYear = 31536000;
   const yearLived = parseFloat(prompt("Enter the number of years you've lived: "));
   let maxSeconds = yearLived * secondsPerYear;

   if ( yearLived <= 0){
      console.log("Invalid age")
   }
   
   else{
      console.log(`You lived for ${maxSeconds} in the space of ${yearLived} years` )
   }

   /*
   15. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm
 */
// const now = new Date();
// const year2 = now.getFullYear();
// const month = now.getMonth();
// const day = now.getDay();
// const hour = now.getHours();
// const mins = now.getMinutes()
// console.log(`${year2}-${month}-${day} ${hour}:${mins}`);
// console.log(`${day}-${month}-${year2} ${hour}:${mins}`);
// console.log(`${day}/${month}/${year2} ${hour}:${mins}`);


/*
### Exercises: Level 3

1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
   1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
 */

   const now = new Date();
   const year2 = now.getFullYear();
   const month = String(now.getMonth() + 1).padStart(2, "0");
   const day = String(now.getDay() ).padStart(2, "0");
   const hour = String(now.getHours() ).padStart(2, "0");
   const mins = String(now.getMinutes()).padStart(2, "0");
   console.log(`${year2}-${month}-${day} ${hour}:${mins}`);