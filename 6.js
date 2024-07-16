function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
      // Check if the year is divisible by 100
      if (year % 100 === 0) {
        // Check if the year is divisible by 400
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  // Example usage:
  const year = 2024;
  const leapYear = isLeapYear(year);
  
  if (leapYear) {
    console.log('${year} is a leap year.');
  } else {
    console.log('${year} is not a leap year.');
  }