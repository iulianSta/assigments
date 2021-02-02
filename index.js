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
