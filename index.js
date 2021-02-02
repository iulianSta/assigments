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