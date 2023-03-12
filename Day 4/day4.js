/*
1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```
 */

  // const age = parseFloat(prompt("How old are you? "));

//    if (age >= 18){
//     console.log(`You are ${age} and you  are old enough to drive`);
//    }
//    else{
//     console.log(`Go home!, you are just ${age} and you are not old enough yet`);
//    };

   /*
   2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```
 */

//    const myAge = parseFloat(prompt("My age is? "));
//    const yourAge = parseFloat(prompt("Your  age is? "));


//    if (myAge > yourAge){
//     console.log(`Respect me I am ${myAge} and I am older than you`)
//    }
//    else if (myAge === yourAge){
//     console.log(`What a coincidence, you are ${yourAge} and I am ${myAge} which is the same!!!`)
//    }
//    else{
//     console.log(`I will respect you because you are ${yourAge} and you are older than me`)
//    }

   /*
   3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

   - using if else
   - ternary operator.

   ```js
   let a = 4;
   let b = 3;
   ```

   ```sh
     4 is greater than 3
   ```
    */

//    const a = parseFloat(prompt("Enter A?"));
//    const b = parseFloat(prompt("Enter B?"));

//    if (a > b){
//     console.log(`${a} is greater than ${b}`)
//    }
//    else{
//     console.log(`${a} is less than ${b}`);
//    }


//TERNARY
//    a > b
//    ? console.log(`${a} is greater than ${b}`)
//    : console.log(`${a} is less than ${b}`)


   /*
   4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

   ```sh
   Enter a number: 2
   2 is an even number

   Enter a number: 9
   9 is is an odd number.
   ```
 */

//    const num = parseFloat(prompt("Enter Number"));

//    num % 2 == 0
//    ? console.log('This is an Even Number')
//    : console.log('This is an odd Number')
  
   //Exercise 2

   /*
   1. Write a code which can give grades to students according to theirs scores:
   - 90-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F 
   */
  

   //TERNARY

  // const grade = parseFloat(prompt("Enter Your Grade"));

//    grade >= 90 
//    ? console.log ("Awesome your grade is A")
//    : grade >= 70
//    ? console.log("Awesome your grade is B")
//    : grade >= 60
//    ? console.log("Barely passed your grade is C")
//    : grade >= 50
//    ? console.log("Oouh your grade is D")
//    : grade >= 0
//    ? console.log("Too bad your grade is F and you failed")
//    : console.log("Invalid grade");

//IF ELSE
//    if (grade >= 90){
//     console.log ("Awesome your grade is A")
//    }
//    else if (grade >= 70){
//     console.log("Awesome your grade is B")
//    }
//    else if (grade >= 60){
//     console.log("Barely passed your grade is C")
//    }
//    else if (grade >= 50){
//     console.log("Oouh your grade is D")
//    }
//    else {
//     console.log("Too bad your grade is F and you failed")
//    }

   /*
   2. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer
    */
   
//    let month = prompt("Enter the month");
//    month = month.charAt(0).toUpperCase() + month.slice(1)
   
//    if (month === "September" || month === "October" || month === "November"){

//     console.log("The season is Autumn")
//    }
//    else if (month === "December" || month === "January"  || month === "February"){
//     console.log("The season is Winter")
//    }
//    else if (month === "March" || month === "April" || month === "May"){
//     console.log("The season is Spring")
//    }
//    else if (month === "June" || month === "July" || month === "August"){
//     console.log("The season is Summer")
//    }
//    else{
//     console.log("what you entered is not a month")
//    }

   /*
   3. Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
``` */

let day = prompt("What is the day? ");
day = day.toLowerCase()
day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"
? console.log(`${day} is a working day`)
:day === "saturday" ||day === "sunday"
?console.log(`${day} is not a working day and ${day} is a weekend`)
:console.log("What you entered is not a day")



//EXERCISE 3

/*
1. Write a program which tells the number of days in a month.

```sh
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
```
 */