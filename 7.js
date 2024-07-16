function findFirstJanuarySunday() {
    for (let year = 2014; year <= 2050; year++) {
      const date = new Date(year, 0, 1); // January is month 0 in JavaScript Date object
      if (date.getDay() === 0) { // 0 corresponds to Sunday
        return year;
      }
    }
    return null; // Return null if no such year is found
  }
  
  // Find the first year when January 1st is a Sunday
  const year = findFirstJanuarySunday();
  
  if (year !== null) {
    console.log('The first January 1st that is a Sunday is in the year ${year}.');
  } else {
    console.log("No January 1st falls on a Sunday between 2014 and 2050.");
  }