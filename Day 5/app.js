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
