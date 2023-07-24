//--------------------------------------------------
// JS4B - Homework - Challenge Part 1
//--------------------------------------------------

// 1/2: Create two variables for your favorite number and some other random number
let myFavoriteNumber = 23;
let someOtherRandomNumber = 22;

// 3: Calculate the two numbers multiplied
let multipliedNumbers = myFavoriteNumber * someOtherRandomNumber;

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(multipliedNumbers);

// 4/5: Store your first name in a variable and your last name in another
let firstName = "Manuel";
let lastName = "Portocarrero";
// 6: Store your full name in a variable by adding the two variables
let fullName = `${firstName} ${lastName}`;
// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(fullName);

// 7: Store your firstName, lastName, favColor and hometown in an object called myDetails
let favColor = "white";
let hometown = "New York";

let myDetails = `${firstName} ${lastName} ${favColor} ${hometown}`;

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(myDetails);

// 8: Using the data from your myDetails variable, create a one sentence bio and store it as a string.
let myBio = `Hi, my name is ${firstName} ${lastName}, I am from ${hometown} and my favorite color is ${favColor}`;
// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(myBio);

// 9: Create an array called dreamDestinations with your top 5 travel destinations.
let dreamDestinations = ["Mars", "The Moon", "The Sun", "Venus", "Saturn"];
// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(dreamDestinations);

//--------------------------------------------------
// JS4B - Homework - Challenge Part 2
//--------------------------------------------------

// 10: Write a loop that logs 'hello' to the console 10 times
for (let i = 0; i < 10; i++) {
  console.log("hello");
}

// 11: Use a WHILE loop to add 1 to 'count' 100 times
let count = 0;
while (count < 100) {
  count += 1;
}
// Console log the new value of count
console.log(count);
// 12: Print the even numbers between 1 and 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 13: Print your top five travel destinations to the console using a for loop.
let topTravelDestinations = ["Mars", "The Moon", "The Sun", "Venus", "Saturn"];

for (let i = 0; i < topTravelDestinations.length; i++) {
  console.log(topTravelDestinations[i]);
}

// BONUS
// 14: Use your for loop to print the text from "mySpecialArray"
//ex. if you used this loop on the array ['p','o','r','m','s','a','g','r'] you would see the text logged to the console that spelled "programs"

const mySpecialArray = [
  "I",
  "L",
  "v",
  " ",
  "o",
  "e",
  "m",
  "t",
  "h",
  "i",
  "s",
  "d",
  "C",
  "e",
  "o",
  " ",
];

// loop goes here

let middleIndex = mySpecialArray.length / 2;
for (let i = 0, k = mySpecialArray.length - 1; i <= middleIndex; i++, k--) {
  console.log(mySpecialArray[i]);
  console.log(mySpecialArray[k]);
}

// 15: Create your loop here that will only log the 1st and every 3rd element of an array.
//ex. if you used this loop on the array [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] you would see the text logged to the console "0369"

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = [];
for (let i = 0; i < myArray.length; i += 3) {
  newArray.push(i);
  newArray.toString().replace(/,/g, "");
}
console.log(newArray.toString().replace(/,/g, ""));
