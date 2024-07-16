function calculateNumbers() {
    let num1, num2;
  
    do {
      num1 = parseFloat(prompt("Enter the first number: "));
    } while (isNaN(num1)); // Validate input for num1
  
    do {
      num2 = parseFloat(prompt("Enter the second number: "));
    } while (isNaN(num2) || num2 === 0); // Validate input for num2 (avoid division by zero)
  
    const product = num1 * num2;
    const quotient = num1 / num2;
  
    console.log('The product of ${num1} and ${num2} is: ${product}');
    console.log('The quotient of ${num1} and ${num2} is: ${quotient}');
  }
  
  calculateNumbers();