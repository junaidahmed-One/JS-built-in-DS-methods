/* 
    keys(): Returns an array of a given object's property names.
    values(): Returns an array of a given object's property values.
*/

let obj = { name: "Peter", age: 39, gender: "Male" };

let objKeys = Object.keys(obj);
let objValues = Object.values(obj);

console.log(objKeys);
console.log(objValues);

/* 
    entries(): Returns an array of a given object's own enumerable property [key, value] pairs.
    assign(): Copies the values of all enumerable properties from one or more source objects to a target object.
    hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property.
*/

let entries = Object.entries(obj);
console.log(entries);

let addressobj = {
	address: { street: "10th cross", area: "Benson Twon", city: "Bengaluru" },
	phone: "123456789",
};

let fulldetail = Object.assign(obj, addressobj);

console.log(fulldetail);

console.log(fulldetail.hasOwnProperty("name"));
