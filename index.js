// Code your solution in this file

// takes an array of drivers and a string as arguments, and returns 
// the matching list of drivers. The function should be case insensitive.

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// takes an array of drivers and a string as arguments for querying the array, 
// and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(drivers, partial) {
    return drivers.filter(driver => driver.slice(0, partial.length) === partial);
}

// takes an array of drivers and a string as arguments. Each element 
// of the array is an object that has a property of name. 
// The function should return each element whose name property 
// matches the provided string argument.

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name.toLowerCase() === str.toLowerCase());
}

