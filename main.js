function multiply(number) {
let numberOfDigits;
  if (number === 0) {
    numberOfDigits = 1;
  } else {
    numberOfDigits = String(Math.abs(number)).length;
  }
  const fiveToPowerOfDigits = Math.pow(5, numberOfDigits);
  const result = number * fiveToPowerOfDigits ;
  return result;
}
