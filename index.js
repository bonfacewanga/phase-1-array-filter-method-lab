// Find all drivers that match the passed-in name
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
 }
  
   //Find drivers whose names start with the provided letters
   //The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Find drivers whose name property matches the given name
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }