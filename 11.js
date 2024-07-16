function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
  // Example conversions
  const temp1Celsius = 60;
  const temp1Fahrenheit = celsiusToFahrenheit(temp1Celsius);
  console.log('${temp1Celsius}°C is ${temp1Fahrenheit.toFixed(2)}°F');
  
  const temp2Fahrenheit = 45;
  const temp2Celsius = fahrenheitToCelsius(temp2Fahrenheit);
  console.log('${temp2Fahrenheit}°F is ${temp2Celsius.toFixed(2)}°C');