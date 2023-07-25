//Challenge:  addTwo
//Create a function addTwo that accepts a number, and returns the number plus 2.

const addTwo = (number) => {
    number += 2;
    return number;
console.log(number)
}
addTwo(4)


//Challenge: addS
//Create a function addS that accepts a string, and returns the string with an "s" added to the end.

const addS = (inputString) => {
    return`${inputString}S`;

}

console.log(typeof addS); // Output: 'function'
console.log(addS('cat')); 