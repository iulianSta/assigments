// # objects-extra-work1.
//  Ex. 1
/* > Check if a number is within a given range. 
Write a program that checks if a number is within the range of an object's min and max properties. 
Assume min <= max is always true.

Examples:

4, { min: 0, max: 5 }) ➞ true

4, { min: 4, max: 5 }) ➞ true

4, { min: 6, max: 10 }) ➞ false

5, { min: 5, max: 5 }) ➞ true */

const check = (num, obj) => {
    let result = "";
    for (let prop in obj) {
        if ( num >= obj.min && num <= obj.max) {
            result = `true`;
        } else {
            result = `false`;
        }
    }
    return result;
}

console.log(check(4, { min: 0, max: 5 }));
console.log(check(4, { min: 4, max: 5 }));
console.log(check(4, { min: 6, max: 10 }));
console.log(check(5, { min: 5, max: 5 }));

// Ex. 2
/* > Scrabble. 
Write a program that, given an array of scrabble tiles, 
counts the maximum score that a player can earn from the tiles in their hand. 
Example: 
[ { tile: "N", score: 1 }, 
{ tile: "K", score: 5 }, 
{ tile: "Z", score: 10 }, 
{ tile: "X", score: 8 }, 
{ tile: "D", score: 2 }, 
{ tile: "A", score: 1 }, 
{ tile: "E", score: 1 } 
]


The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28 */



// Ex. 3
/* > Is it an empty object? 
Write a program that returns true if an object is empty, and false if otherwise.

Examples:

{} ➞ true

{a: 1} ➞ false */

const isTrueOrNot = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

console.log(isTrueOrNot({}));
console.log(isTrueOrNot({a: 1}));

// Ex. 4
/* > Counting Letters. 
Create a function that counts the number of occurrences of each letter in a string. 
Return an object with key pair values of letters and the number of occurrences for each letter.

Example:

countLetters("tree") ➞ {t: 1, r: 1, e: 2} */

const countLetters = (str) => {
    return str
    .toLowerCase()
    .split("")
    .reduce((acc,cur) => 
    {acc[cur] = acc[cur] 
        ? acc[cur] + 1 
        : 1;
    return acc
    }, {});

}

console.log(countLetters("tree"));

// Ex. 5
/* > Free Shipping. 
Create a function that determines whether an online order should get free shipping. 
An order gets free shipping if the total cost of items exceeds €50.

Examples:

freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false

freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true

freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false */

const freeShipping = (obj) => {
   let sumOfValues = Object.values(obj).reduce((acc, cur) => acc + cur);
   //return sumOfValues;
   if (sumOfValues > 50) {
       return true;
   } else {
       return false;
   }
}
console.log(freeShipping({ "Sponge": 3.50, "Soap": 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));