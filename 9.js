function daysUntilChristmas() {
    const today = new Date(); // Get the current date
    const christmas = new Date(today.getFullYear(), 11, 25); // Set Christmas date (December 25th)
  
    // Handle cases where Christmas has already passed
    if (christmas < today) {
      christmas.setFullYear(christmas.getFullYear() + 1); // Set Christmas to next year
    }
  
    const diffInMs = christmas.getTime() - today.getTime();
    const daysLeft = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)); // Convert to days
  
    console.log('There are ${daysLeft} days left until Christmas.');
  }
  
  daysUntilChristmas();