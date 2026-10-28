function isPrime(num) {
  // Prime numbers must be greater than 1
  if (num <= 1) return false;
  
  // 2 is the only even prime number
  if (num === 2) return true;
  
  // Exclude all other even numbers
  if (num % 2 === 0) return false;
  
  // Check odd factors up to the square root of the number
  const squareRoot = Math.sqrt(num);
  for (let i = 3; i <= squareRoot; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Export isPrime as a named property of module.exports
module.exports = {
  isPrime: isPrime
};
