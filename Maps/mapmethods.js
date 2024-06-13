/* 
    set(): Adds or updates an element with a specified key and value.
    get(): Returns the value associated with the specified key.
    has(): Returns a boolean indicating whether an element with the specified key exists.
*/

let map = new Map();

map.set("a", 1); // Map { "a" => 1 }
let value = map.get("a");
let result = map.has("a");

/* 
    forEach(): Executes a provided function once for each key/value pair in the Map object.
*/

map.forEach((value, key) => console.log(key, value)); // "a" 1  "b" 2

/* 
    delete(): Removes the specified element from a Map object.
    clear(): Removes all elements from a Map object.
*/

map.delete("a");
map.clear();
