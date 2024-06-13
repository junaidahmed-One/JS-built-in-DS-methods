/* 
    charAt(): Returns the character at a specified index.
    concat(): Joins two or more strings.
*/

let str = "hello";
let str1 = "Hello";
let str2 = "World";

let res = str1.concat(str2);
let char = str.charAt(1);

console.log(char);
console.log(res);

/* 
    includes(): Checks if a string contains another string.
    indexOf(): Returns the index of the first occurrence of a specified value.
*/

let examplestr = "Hello world";

console.log(examplestr.includes("world"));
console.log(examplestr.indexOf("llo"));

/* 
    slice(): Extracts a part of a string and returns it as a new string. 
    split(): Splits a string into an array of substrings.
    substring(): Returns a part of the string between the start and end indexes.
*/

let temp = "Example String";

let ansslice = temp.slice(2, 6);
let ansplit = temp.split(" ");
let anssub = temp.substring(2, 7);

console.log(ansslice);
console.log(ansplit);
console.log(anssub);

/* 
    toLowerCase(): Converts a string to lowercase.
    toUpperCase(): Converts a string to uppercase.
*/

let temp1 = "HELLO WORLD";

let lower = temp1.toLowerCase();
console.log(lower);

let upper = lower.toUpperCase();
console.log(upper);
