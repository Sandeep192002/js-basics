function guessTheNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
    let guess;
  
    do {
      guess = parseInt(prompt("Guess a number between 1 and 10: "));
    } while (isNaN(guess) || guess < 1 || guess > 10); // Validate input
  
    if (guess === randomNum) {
      console.log("Good Work!");
    } else {
      console.log("Not matched. The number was:", randomNum); // Reveal the random number
    }
  }
  
  guessTheNumber();