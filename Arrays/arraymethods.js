// concat(): Joins two or more arrays.
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let result = arr1.concat(arr2);

console.log(result);

/*
    push(): Adds one or more elements to the end of an array.
    pop(): Removes the last element from an array.
*/

let arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr); // [1,2,3,4,5]
arr.pop();
console.log(arr); //[1,2,3,4]

/* 
    shift(): Removes the first element from an array.
    unshift(): Adds one or more elements to the beginning of an array.
*/

let arr3 = [1, 2];

arr3.shift();
arr3.unshift(0, 9, 8);

console.log(arr3);
console.log(arr3);

/* 
    slice(): Extracts a section of an array and returns it as a new array.
    splice(): Adds/removes items to/from an array.
*/

let arr4 = [1, 2, 3, 4];

let sliceResult = arr4.slice(1, 3);
arr4.splice(1, 2);

console.log(sliceResult);
console.log(arr4);

//forEach(): Executes a provided function once for each array element.

let arr5 = [1, 2, 3, 4];

arr5.forEach((element) => console.log(element));

/* 
    map(): Creates a new array with the results of calling a provided function on every element.
    filter(): Creates a new array with all elements that pass the test implemented by the provided function.
    reduce(): Executes a reducer function on each element, resulting in a single output value.
*/

let maparr = [1, 2, 3, 4];
let filterarr = [1, 2, 3, 4];
let reducearr = [1, 2, 3, 4];

let ansmaparr = maparr.map((x) => x);
let ansfilterarr = filterarr.filter((x) => x % 2 == 0);
let ansreducer = reducearr.reduce((sum, curr) => sum + curr, 0);

console.log(ansmaparr);
console.log(ansfilterarr);
console.log(ansreducer);

/* 
    find(): Returns the value of the first element that passes a test.
    indexOf(): Returns the first index at which a given element can be found.
    includes(): Determines whether an array includes a certain element.
*/

let findarr = [1, 2, 3, 4];
let indexofarr = [1, 2, 3, 4, 2];
let includesarr = [1, 2, 3, 4];

let ansfind = findarr.find((x) => x == 2);
let ansindex = indexofarr.indexOf(2);
let ansincludes = includesarr.includes(2);

console.log(ansfind);
console.log(ansindex);
console.log(ansincludes);
