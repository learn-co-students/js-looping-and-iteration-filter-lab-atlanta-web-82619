// Code your solution in this file
function findMatching(drivers, string) {
    let retArr = drivers.filter(function(driver) {
        return driver.toLowerCase() === string.toLowerCase();
    })
    return retArr;
}

function fuzzyMatch(drivers, string) {
    let retArr = drivers.filter(function(driver) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== driver[i]) {
                return false;
            }
        }
        return true;
    })
    return retArr;
}

function matchName(drivers, string) {
    return drivers.filter(function(driver) {
        return driver['name'] === string;
    })
}