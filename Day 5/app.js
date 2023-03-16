//1. Declare an _empty_ array;
const arr = [];
//2. Declare an array with more than 5 number of elements
const arr2 = [2,3,4,5,6,8,0];

//3. Find the length of your array
console.log(arr2.length);

//4. Get the first item, the middle item and the last item of the array
const firstItem = arr2[0];
console.log(firstItem);
const middleItem = arr2[Math.floor(arr2.length/2)];
console.log(middleItem);
const lastItem = arr2[arr2.length - 1];
console.log(lastItem);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['Nuelsage', true,2, {country: 'Nigeria', city: 'Lagos', }, {skills:['Html', 'css', 'javaScript','react', 'python']},null]

const length = mixedDataTypes.length;
console.log(length); //6

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7. Print the array using console.log()

console.log(itCompanies);

//8. Print the number of companies in the array

console.log(itCompanies.length); //7

//9. Print the first company, middle and last company

const firtCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)]
console.log(middleCompany);

const lastCompany = itCompanies[itCompanies.length - 1]
console.log(lastCompany);

//10. Print out each company

for (let i = 0; i < itCompanies.length; i ++){
   console.log(itCompanies[i])
}

//11. Change each company name to uppercase one by one and print them out

// for (let i = 0; i < itCompanies.length; i++){
//     itCompanies[i] = itCompanies[i].toUpperCase()  
// }
// console.log(itCompanies);

//OR

// for (let company of itCompanies){
//     //company = company.toUpperCase();
//     console.log(company)
// }

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const sentence = itCompanies.join(', ' );
console.log(sentence + " Are big IT companies" );

//OR

const sentence2 = itCompanies.join(', ');
console.log(`${sentence} are big IT companies`);

//OR

const sentence3 = `${itCompanies.join(", ")} are big IT companies.`;

console.log(sentence3);

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

function findCompany(company){
    if(itCompanies.includes(company)){
        return true;
    }
    else{
        return 'Company not found';
    }
}
console.log(findCompany('Facebook'))

//14. Filter out companies which have more than one 'o' without the filter method
function filterchar() {
    const filteredchar = []
    for (let i = 0; i < itCompanies.length; i++){
        let count = 0;
        for(let j = 0; j < itCompanies[i].length; j++){
            if(itCompanies[i][j] === 'o'){
                count ++
            }
            
        }
        if (count <= 1){
            filteredchar.push(itCompanies[i])
        }
    }
    return filteredchar
}
console.log(filterchar());

//15. Sort the array using sort() method

const sorted = itCompanies.sort()
console.log(sorted);

//OR
function sortcompany(){
    const sortedCompany = itCompanies.sort()
    return sortedCompany;
}

console.log(sortcompany(itCompanies));

//16. Reverse the array using reverse() method

const reverseCompany = itCompanies.reverse();
console.log(itCompanies);

//OR

function reverseCompany2(){
    return itCompanies.reverse()
}
console.log(reverseCompany2(itCompanies));

//17. Slice out the first 3 companies from the array

// function slice(){
//     return itCompanies.slice(3,7)
// }
// console.log(slice(itCompanies));

// //18. Slice out the last 3 companies from the array

// function sliceLast() {
//     return itCompanies.slice(0,4)
    
// }
// console.log(sliceLast(itCompanies));

// //19. Slice out the middle IT company or companies from the array

function sliceMiddle() {
    const middleIndex = Math.floor(itCompanies.length / 2);
    let middleElements = [];

    if (itCompanies.length % 2 === 0){
        middleElements = itCompanies.slice(middleIndex -1, middleIndex + 1);
    }
    else{
        middleElements = itCompanies.slice(middleIndex, middleIndex + 1)
    }

    return middleElements
}
console.log(sliceMiddle());

//20. Remove the first IT company from the array

function remove(){
    return itCompanies.shift()
}
remove()
console.log(itCompanies);

//21. Remove the middle IT company or companies from the array

function removeMiddle() {
    const middleIt = Math.floor(itCompanies.length / 2);
    if (itCompanies.length % 2 === 0){
        itCompanies.splice(middleIt -1, 2)
    }
    else{
        itCompanies.splice(middleIt, +1)
    }

    return itCompanies

}
console.log(removeMiddle())

//22. Remove the last IT company from the array

function removeLast() {
    return itCompanies.pop()
}
removeLast()
console.log(itCompanies);

//23. Remove all IT companies

function removeAll(){
    return itCompanies.length = 0
}
console.log(removeAll(itCompanies))



//### Exercise: Level 2
/*
1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
 */

// import {countries} from './country.js'
// console.log(country);
// const countries = require('./country.js');
// console.log(countries)
// import web_techs from './web_techs.js'
// console.log(web_techs);

/*
2. First remove all the punctuations and change the string to array and count the number of words in the array

   ```js
   let text =
     "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
   console.log(words);
   console.log(words.length);
   ```

   ```sh
   ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

   13
    */
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

//removing all the punctuations
let cleanedText = text.replace(/[,.']/g, '')
console.log(cleanedText);
//changing string to an array
const cleanedTextArr = cleanedText.split(" ")
console.log(cleanedTextArr)
//counting number of array

const numArray = cleanedTextArr.length;
console.log(numArray);

/*
3. In the following shopping cart add, remove, edit items

   ```js
   const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
   ```

   - add 'Meat' in the beginning of your shopping cart if it has not been already added
   - add Sugar at the end of you shopping cart if it has not been already added
   - remove 'Honey' if you are allergic to honey
   - modify Tea to 'Green Tea'
    */

   const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
   //adding meat in the front of the shopping cart
   shoppingCart.unshift('Meat')
   console.log(shoppingCart);

   //adding sugar at the ending of the cart

   shoppingCart.push('Sugar')
   console.log(shoppingCart);

   //removing honey from the cart
   delete shoppingCart[4]
   //console.log(shoppingCart);
   //OR

//    shoppingCart.splice(4,0)
//    console.log(shoppingCart);

//Modifying tea to gree tea
shoppingCart[3] = 'Green tea'
console.log(shoppingCart);

/*
4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. */

//incomplete//

5.



/*
6. Concatenate the following two variables and store it in a fullStack variable.

   ```js
   const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
   const backEnd = ["Node", "Express", "MongoDB"];

   console.log(fullStack);
   ```

   ```sh
   ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
   ```
 */

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

// ### Exercise: Level 3

/*
1.  The following is an array of 10 students ages:

        ```js
        const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
        ```

        - Sort the array and find the min and max age
        - Find the median age(one middle item or two middle items divided by two)
        - Find the average age(all items divided by number of items)
        - Find the range of the ages(max minus min)
        - Compare the value of (min - average) and (max - average), use _abs()_ method

    1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
 */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array of ages in ascending order
// ages.sort((a,b) => a - b);
ages.sort(function (a,b) {return a - b})

// Find the minimum age (first element in the sorted array)
// const minAge = ages[0];
// const minAge = Math.min(...ages)
const minAge = Math.min.apply(null,ages)

// Find the maximum age (last element in the sorted array)
// const maxAge = ages[ages.length - 1]
// const maxAge = Math.max.apply(null,ages)
const maxAge = Math.max(...ages);
console.log("Sorted ages:", ages);
console.log("Minimum age:", minAge);
console.log("Maximum age:", maxAge);


// - Find the median age(one middle item or two middle items divided by two)

// Sort the array of ages in ascending order
// ages.sort((a, b) => a - b);
ages.sort(function (a,b) {return  a - b});

//declare median variable
let median;

//if else block to check for even or odd

if (ages.length % 2 != 0) {
     //odd case
     
    //find middle index
    let middleIndex = Math.floor(ages.length / 2);
    //find median
    median = ages[middleIndex]
    
}
else{

    //even case

    //find middle index
    let middleIndex = Math.floor(ages.length / 2)
     //find median
    median = (ages[middleIndex] + ages[middleIndex -1] )/2
}
//printing the output of median
console.log(median); //24

//  - Find the average age(all items divided by number of items)

// const averageAge = () => {
//     ages.length

// }

let sum = 0
for (let i = 0; i < ages.length; i++){
   sum += ages[i]  
}
let average = sum/ages.length
console.log(average)

//- Find the range of the ages(max minus min)

console.log(ages);

//using the result of the min & max variable declared before above
const range = maxAge - minAge
console.log(range);

//- Compare the value of (min - average) and (max - average), use abs() method

//min-average
const valueOfMinAverage = minAge - average;
//comparing using absc method
const value = Math.abs(valueOfMinAverage)
console.log(value);

//max - average

const valueOfMaxAverage = maxAge - average;

//comparing using absc method
const valueOfMax = Math.abs(valueOfMaxAverage)
console.log(valueOfMax)


//1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
console.log(countries.slice(0,10));

//OR
const slicedCountry = countries.slice(0,10);
console.log(slicedCountry);

//2.  Find the middle country(ies) in the [countries array]
// console.log(countries.length);
// console.log()
// let median2;

// if(countries.length%2 !=0){
//     middle = Math.floor(countries.length / 2);
//     median2 = countries[middle]
// }
// else{
//     middle = Math.floor(countries.length / 2);
//     median2 = (countries[middle] + countries[middle -1])/2
// }
// console.log(median2);

//3.  Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

// function divideCountry(){

// if(countries.length%2 === 0){
//     let even = Math.floor(countries.length / 2)
// }
// else{
//     countries.push("new country")
//     let counryEqual = Math.floor(countries.length / 2)
// }
// return countries
// }
// console.log(divideCountry(countries))



//function divideCountry(){

let lenght = countries.length;
let middle = Math.floor(length / 2);

if(length%2 === 0){
    let first_half = countries.slice(0, middle);
    let second_half = countries.slice(middle);
    console.log(first_half, second_half);
}
else{
    let first_half = countries.slice(0, middle+1);
    let second_half = countries.slice(middle+1);
    
    console.log(first_half, second_half);
}
//divideCountry(first_half, second_half)

//The code above is incomplete
