function displayDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    
    const day = daysOfWeek[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12; // Convert 24-hour time to 12-hour time and handle midnight (0 hours)
    
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    console.log('Today is : ${day}.');
    console.log('Current time is : ${displayHours} ${ampm} : ${formattedMinutes} : ${formattedSeconds}');
}

displayDateTime();