// Code your solution in this file
function findMatching(drivers, name) {
  const filtered = drivers.filter(driver => driver.toUpperCase() === name.toUpperCase() );
  return filtered;
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.startsWith(string));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
