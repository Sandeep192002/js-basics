function getCurrentDate(format = "mm-dd-yyyy") {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
  
    // Ensure two-digit formatting for month and day
    month = month.toString().padStart(2,'0');
    day = day.toString().padStart(2,'0');
  
    // Build the date string based on the provided format
    const formattedDate = format.replace('mm', month)
      const formattedDay=format.replace('dd', day)
      const formattedYear=format.replace('yyyy', year);
  
    return formattedDate;
  }