/* 
    add(): Adds a new element with a specified value to the Set object.
    has(): Returns a boolean indicating whether an element with the specified value exists.
*/

//declaring set

let set = new Set();

set.add(10);
set.add(20);
set.add(30);

console.log(set);
console.log(set.has(20));

/* 
    forEach(): Executes a provided function once for each value in the Set object.
*/

set.forEach((val) => console.log(val));

/* 
    delete(): Removes a specified value from a Set object.
    clear(): Removes all elements from a Set object.
*/

set.delete(20);

console.log(set);

set.clear();

console.log(set);
