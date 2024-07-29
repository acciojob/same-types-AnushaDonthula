function isSameType(value1, value2) {
  // Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check if only one of the values is NaN
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }

  // Compare types using typeof operator
  return typeof value1 === typeof value2;
}

// Test cases
console.log(isSameType(1, 3));          // true
console.log(isSameType("hey", "hello")); // true
console.log(isSameType(NaN, NaN));      // true
console.log(isSameType("3", 3));        // false
console.log(isSameType(1, "1"));        // false
console.log(isSameType(NaN, 1));        // false